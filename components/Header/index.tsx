import Link from 'next/link';

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="p-4 bg-white shadow">
      <div className="container mx-auto">
        <Link href="/">
          <a>{title}</a>
        </Link>
      </div>
    </div>
  );
};
