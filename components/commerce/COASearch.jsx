import React from 'react';
import { Badge } from '../core/Badge.jsx';

/**
 * COASearch — search Certificates of Analysis by batch number.
 * Compliance-safe: shows verified status + COA link only. No claims.
 */
const SAMPLE = [
  { batch: 'FUTURE-CN-MARK-GHKC-0701-001', product: 'GHK-Cu 100mg', purity: '99.4%', date: '2024-03-12', url: '#' },
  { batch: 'FUTURE-CN-MARK-BPCC-0701-001', product: 'BPC-157 5mg', purity: '99.1%', date: '2024-02-28', url: '#' },
  { batch: 'FUTURE-CN-MARK-THYM-0701-001', product: 'TB-500 10mg', purity: '99.6%', date: '2024-02-11', url: '#' },
  { batch: 'FUTURE-CN-MARK-SEMA-0701-001', product: 'Semax 30mg', purity: '99.2%', date: '2024-01-24', url: '#' },
];

export function COASearch({ data = SAMPLE, labels = {}, style = {} }) {
  const L = {
    placeholder: 'Search batch number — e.g. FUTURE-CN-MARK-GHKC-0701-001', found: 'found',
    colBatch: 'Batch', colProduct: 'Product', colPurity: 'Purity', colStatus: 'Status', colCoa: 'COA',
    noResult: 'No batch found. Check the number on your vial label or contact the lab.',
    verified: 'Verified', ...labels,
  };
  const [q, setQ] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  const term = q.trim().toLowerCase();
  const results = term
    ? data.filter((r) => r.batch.toLowerCase().includes(term) || r.product.toLowerCase().includes(term))
    : data;

  return (
    <div style={{ fontFamily: 'var(--font-body)', width: '100%', ...style }}>
      {/* Search field */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        background: 'var(--white)', border: `1.5px solid ${focus ? 'var(--gold-500)' : 'var(--border-strong)'}`,
        borderRadius: 'var(--radius-md)', padding: '0 14px', height: '52px',
        boxShadow: focus ? '0 0 0 3px var(--ring)' : 'var(--shadow-sm)',
        transition: 'all var(--dur-fast) var(--ease-out)',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gray-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
          <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
        </svg>
        <input
          value={q} onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          placeholder={L.placeholder}
          style={{
            border: 'none', outline: 'none', background: 'transparent', flex: 1, minWidth: 0,
            fontFamily: 'var(--font-mono)', fontSize: '14.5px', color: 'var(--ink-900)', letterSpacing: '.02em',
          }}
        />
        {q && <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{results.length} {L.found}</span>}
      </div>

      {/* Results table */}
      <div style={{
        marginTop: '14px', border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--white)',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.1fr 1.4fr 0.8fr 1fr 0.7fr',
          padding: '11px 18px', background: 'var(--gray-50)',
          fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase',
          color: 'var(--gray-500)', borderBottom: '1px solid var(--border-subtle)',
        }}>
          <span>{L.colBatch}</span><span>{L.colProduct}</span><span>{L.colPurity}</span><span>{L.colStatus}</span><span style={{ textAlign: 'right' }}>{L.colCoa}</span>
        </div>
        {results.length === 0 && (
          <div style={{ padding: '28px 18px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
            {L.noResult}
          </div>
        )}
        {results.map((r, i) => (
          <div key={r.batch} style={{
            display: 'grid', gridTemplateColumns: '1.1fr 1.4fr 0.8fr 1fr 0.7fr', alignItems: 'center',
            padding: '14px 18px', borderBottom: i < results.length - 1 ? '1px solid var(--border-subtle)' : 'none',
            fontSize: '14px',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--ink-900)', fontSize: '13.5px' }}>{r.batch}</span>
            <span style={{ color: 'var(--text-body)' }}>{r.product}</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--ink-800)', fontWeight: 600 }}>{r.purity}</span>
            <span><Badge tone="teal" variant="soft" size="sm">{L.verified}</Badge></span>
            <span style={{ textAlign: 'right' }}>
              <a href={r.url} style={{
                fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 700, color: 'var(--accent-teal)',
                display: 'inline-flex', alignItems: 'center', gap: '5px',
              }}>
                PDF
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
