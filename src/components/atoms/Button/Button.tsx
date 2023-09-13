import React, { forwardRef } from 'react';
import { AriaButtonProps } from 'react-aria';
import { Button as RACButton } from 'react-aria-components';
import clsx from 'clsx';

export type ButtonVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'success'
  | 'danger';

export type ButtonProps = AriaButtonProps & {
  variant?: ButtonVariant;
};

/**
 * Button component
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, ...rest }, ref) => {
    const cn = clsx(
      'isolate text-sm group rounded-full shrink-0 px-4 py-2 transition-colors transition-shadows overflow-hidden relative outline-offset-2 outline-accent',
      {
        'bg-foreground text-background': variant === 'primary',
        'bg-stone-100 text-foreground': variant === 'secondary',
        'bg-accent text-background': variant === 'accent',
        'bg-danger text-white': variant === 'danger',
        'bg-success text-white': variant === 'success',
      }
    );

    return (
      <RACButton {...rest} className={cn} ref={ref}>
        <span className="transition-all absolute inset-0 opacity-0 -z-10 group-data-[hovered]:opacity-20 group-data-[pressed]:opacity-40 bg-stone-400 rounded-none" />
        {children}
      </RACButton>
    );
  }
);

Button.displayName = 'Button';
