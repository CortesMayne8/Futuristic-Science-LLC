import * as React from 'react';

export interface COARecord {
  batch: string;
  product: string;
  purity: string;
  date: string;
  /** Link to the COA PDF or Google Drive file. */
  url: string;
}

export interface COASearchLabels {
  placeholder?: string; found?: string;
  colBatch?: string; colProduct?: string; colPurity?: string; colStatus?: string; colCoa?: string;
  noResult?: string; verified?: string;
}

export interface COASearchProps {
  /** Batch records to search. Defaults to sample data. */
  data?: COARecord[];
  /** Optional UI string overrides for localization. */
  labels?: COASearchLabels;
  style?: React.CSSProperties;
}

/**
 * Search Certificates of Analysis by batch number — verified status + COA PDF link.
 * Compliance-safe: shows purity/verification only, no claims.
 * @startingPoint section="Commerce" subtitle="Batch-number COA search + results table" viewport="700x340"
 */
export function COASearch(props: COASearchProps): JSX.Element;
