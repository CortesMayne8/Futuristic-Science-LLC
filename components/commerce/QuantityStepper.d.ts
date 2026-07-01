import * as React from 'react';

export interface QuantityStepperProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

/** Minus / value / plus quantity control for cart and product pages. Mono value. */
export function QuantityStepper(props: QuantityStepperProps): JSX.Element;
