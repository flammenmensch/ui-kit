import React, { forwardRef } from 'react';
import { AriaButtonProps } from 'react-aria';
import { Button as RACButton } from 'react-aria-components';

/**
 * Button component
 */
export const Button = forwardRef<HTMLButtonElement, AriaButtonProps>(
  (props, ref) => (
    <RACButton
      {...props}
      className="rounded-lg px-4 py-2 bg-foreground text-background"
      ref={ref}
    />
  )
);

Button.displayName = 'Button';
