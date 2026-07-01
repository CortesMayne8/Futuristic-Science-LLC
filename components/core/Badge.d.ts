import * as React from 'react';

export interface BadgeProps {
  /** Color intent. `teal` = verified/COA, `gold` = featured, `success/warning/danger` = stock/status. */
  tone?: 'gold' | 'teal' | 'neutral' | 'success' | 'warning' | 'danger' | 'ink';
  variant?: 'soft' | 'solid' | 'outline';
  size?: 'sm' | 'md';
  iconLeft?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Compact status / attribute label (purity, verified, in stock, featured). */
export function Badge(props: BadgeProps): JSX.Element;
