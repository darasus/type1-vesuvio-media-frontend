import { HTMLProps } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  variant?: 'primary' | 'secondary';
  className?: string;
};

export const ButtonLink: React.FC<Props> = ({
  children,
  variant = 'primary',
  className,
}) => {
  return (
    <span
      className={clsx(
        'inline-flex justify-center rounded-md border font-bold uppercase leading-6 px-6 py-2 focus:outline-none shadow-sm hover:shadow-md focus:shadow-outline-blue transition ease-in-out duration-150',
        {
          'border-transparent bg-primary-500 text-white': variant === 'primary',
          'border-gray-300 bg-white text-gray-700': variant === 'secondary',
        },
        className
      )}
    >
      {children}
    </span>
  );
};
