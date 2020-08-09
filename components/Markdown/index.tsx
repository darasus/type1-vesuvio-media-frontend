import { FC, Fragment } from 'react';
import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';
import React from 'react';
import { ArticleImage } from '../ArticleImage';
import { type } from 'os';

var processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, {
    createElement: React.createElement,
    components: {
      img: props => <ArticleImage {...props} />,
      p: props => {
        return props.children.map((item, i) => {
          if (typeof item === 'object' && item.props.src) {
            return <Fragment key={i}>{item}</Fragment>;
          }

          if (typeof item === 'object' && item.type === 'br') {
            return <br key={i} />;
          }

          if (item.length === 1 && typeof item === 'string') {
            return null;
          }

          return <p key={i}>{item}</p>;
        });
      },
    },
  });

interface Props {
  source: string;
}

export const Markdown: FC<Props> = ({ source }) => {
  return (
    <section className="mb-8 leading-relaxed">
      {processor.processSync(source).result}
    </section>
  );
};
