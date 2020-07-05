import { HTMLProps } from 'react';
import clsx from 'clsx';

type Props = HTMLProps<HTMLSpanElement> & {
  variant?: 'primary' | 'secondary';
};

export const ButtonLink: React.FC<Props> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <span
      className={clsx(
        'inline-flex justify-center w-full rounded-md border font-bold uppercase leading-6 px-4 py-3 focus:outline-none shadow-sm hover:shadow-md focus:shadow-outline-blue transition ease-in-out duration-150',
        {
          'border-transparent bg-primary-500 text-white': variant === 'primary',
          'border-gray-300 bg-white text-gray-700': variant === 'secondary',
          [className]: className,
        }
      )}
      {...props}
    >
      {children}
    </span>
  );
};
