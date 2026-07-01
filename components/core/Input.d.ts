import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  label?: string;
  iconLeft?: React.ReactNode;
  hint?: string;
  /** Error message — turns border red and shows below. */
  error?: string;
  style?: React.CSSProperties;
}

/** Text field with label, optional leading icon, hint/error. Gold focus ring. */
export function Input(props: InputProps): JSX.Element;
