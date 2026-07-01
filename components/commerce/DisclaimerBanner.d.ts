import * as React from 'react';

export interface DisclaimerBannerProps {
  /** `ink` = prominent block (hero/footer), `strip` = thin top bar, `inline` = gold note on product pages. */
  variant?: 'ink' | 'strip' | 'inline';
  text?: string;
  /** Optional secondary line (e.g. lab-handling framing). */
  detail?: string;
  style?: React.CSSProperties;
}

/**
 * Mandatory research-use-only notice. Place on hero, product, footer, cart, checkout, FAQ.
 * @startingPoint section="Commerce" subtitle="RUO disclaimer — ink / strip / inline" viewport="700x120"
 */
export function DisclaimerBanner(props: DisclaimerBannerProps): JSX.Element;
