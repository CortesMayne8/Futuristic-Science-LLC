import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Gold `primary` for conversion; `ink`/`outline`/`ghost` for secondary. */
  variant?: 'primary' | 'ink' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Primary action control. Gold = conversion (Add to Cart, Checkout); ink/outline = secondary.
 * @startingPoint section="Core" subtitle="Gold + ink + outline + ghost button set" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;
