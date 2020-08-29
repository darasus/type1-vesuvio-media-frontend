import { FC, Fragment } from 'react';
import unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';
import React from 'react';
import { ArticleImage } from '../ArticleImage';
import clsx from 'clsx';

export const processor = unified()
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

          if (typeof item === 'object' && item.type === 'a') {
            return (
              <a
                key={i}
                {...item.props}
                {...(item.props.href.substr(0, 1) === '/'
                  ? {}
                  : { rel: 'nofollow', target: '_blank' })}
              />
            );
          }

          if (item.length === 1 && typeof item === 'string') {
            return null;
          }

          return item;
        });
      },
    },
  });

interface Props {
  source: string;
  className?: string;
}

export const Markdown: FC<Props> = ({ source, className }) => {
  return (
    <section className={clsx('leading-relaxed', className)}>
      {processor.processSync(source).result}
    </section>
  );
};
