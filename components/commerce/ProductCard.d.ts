import * as React from 'react';

export interface ProductCardProps {
  /** Peptide code, e.g. "GHK-Cu". */
  name: string;
  subtitle?: string;
  /** Vial size label, e.g. "100mg". */
  size?: string;
  price: number;
  /** Vial image URL (transparent or white-seamless PNG). */
  image?: string;
  purity?: string;
  inStock?: boolean;
  /** Show a "from" prefix before the price (for multi-strength products). */
  fromPrice?: boolean;
  badge?: { tone?: 'gold' | 'teal' | 'success' | 'danger'; label: string } | null;
  onSelect?: () => void;
  style?: React.CSSProperties;
}

/**
 * Shop-grid card for a research peptide vial — image well, purity badge, mono price, Select Options.
 * @startingPoint section="Commerce" subtitle="Peptide product grid card" viewport="320x420"
 */
export function ProductCard(props: ProductCardProps): JSX.Element;
