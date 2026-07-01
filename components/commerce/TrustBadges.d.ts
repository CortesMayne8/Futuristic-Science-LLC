import * as React from 'react';

export interface TrustItem {
  icon: 'purity' | 'tested' | 'coa' | 'accuracy' | 'shipping';
  label: string;
}

export interface TrustBadgesProps {
  /** Defaults to the five brand pillars. Override to show a subset. */
  items?: TrustItem[];
  /** `light` on white sections, `ink` on dark. */
  variant?: 'light' | 'ink';
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

/**
 * The five brand trust pillars in an icon row: 99%+ Purity, Third-Party Tested,
 * Batch COAs, Measured Accuracy, Fast Shipping.
 * @startingPoint section="Commerce" subtitle="Five-pillar trust badge row" viewport="700x90"
 */
export function TrustBadges(props: TrustBadgesProps): JSX.Element;
