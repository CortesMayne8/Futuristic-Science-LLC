import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'style'> {
  label?: string;
  options: Array<SelectOption | string>;
  style?: React.CSSProperties;
}

/** Styled native dropdown for shop filters (category, price range, sort). */
export function Select(props: SelectProps): JSX.Element;
