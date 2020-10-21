import { HTMLProps } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { event } from '../../utils/gtag';

type Props = {
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: React.MouseEventHandler;
};

export const ButtonLink: React.FC<Props> = ({
  children,
  variant = 'primary',
  className,
  onClick,
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
      onClick={onClick}
    >
      {children}
    </span>
  );
};
