import React from 'react';

export type PropsOf<
  C extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown>,
> = React.JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

export type AsProp<E extends React.ElementType> = {
  as?: E | undefined;
};

export type ExtendableProps<
  ExtendedProps = object,
  OverrideProps = object,
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

export type InheritableElementProps<
  E extends React.ElementType,
  P = object,
> = ExtendableProps<PropsOf<E>, P>;

export type PolymorphicComponentProps<
  E extends React.ElementType,
  P = object,
> = InheritableElementProps<E, P & AsProp<E>>;

export type PolymorphicRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>['ref'];

export type PolymorphicComponentPropsWithRef<
  E extends React.ElementType,
  P = object,
> = PolymorphicComponentProps<E, P> & {
  ref?: PolymorphicRef<E>;
};
