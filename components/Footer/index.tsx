import { Data } from '../../types/Data';

export const Footer = (props: Data) => {
  return (
    <div className="max-w-7xl mt-6 mx-auto">
      <div className="container mx-auto py-4 border-t-2 border-gray-100">{`${
        props.site.title
      } © ${new Date().getFullYear()}`}</div>
    </div>
  );
};
