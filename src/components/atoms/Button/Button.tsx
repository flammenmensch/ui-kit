import React, { useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

export const Button = (props: AriaButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button
      {...buttonProps}
      className="rounded-full shadow-sm px-4 py-2 bg-blue-600 text-white"
      ref={ref}
    >
      {props.children}
    </button>
  );
};

Button.displayName = 'Button';
