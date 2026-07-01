import React from 'react';

/**
 * TrustBadges — the five brand trust pillars in an icon row.
 * 99%+ Purity · Third-Party Tested · Batch COAs · Measured Accuracy · Fast Shipping
 */
const ICONS = {
  purity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  tested: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2v6.4a2 2 0 0 1-.3 1L3.6 18a2 2 0 0 0 1.7 3h13.4a2 2 0 0 0 1.7-3l-5.1-8.6a2 2 0 0 1-.3-1V2"/><path d="M8 2h8"/><path d="M7.5 14h9"/></svg>
  ),
  coa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><circle cx="10" cy="14" r="2"/><path d="m10 16-1.5 3 1.5-1 1.5 1L10 16"/></svg>
  ),
  accuracy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4 4 14a2.8 2.8 0 0 0 4 4L18 8"/><path d="m12 6 2 2"/><path d="m9 9 2 2"/><path d="m6 12 2 2"/></svg>
  ),
  shipping: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M14 9h4l4 4v4a1 1 0 0 1-1 1h-1"/><circle cx="7.5" cy="18.5" r="2"/><circle cx="17.5" cy="18.5" r="2"/></svg>
  ),
};

const DEFAULTS = [
  { icon: 'purity', label: '99%+ Purity' },
  { icon: 'tested', label: 'Third-Party Tested' },
  { icon: 'coa', label: 'Batch COAs' },
  { icon: 'accuracy', label: 'Measured Accuracy' },
  { icon: 'shipping', label: 'Fast Shipping' },
];

export function TrustBadges({
  items = DEFAULTS,
  variant = 'light',   // 'light' | 'ink'
  size = 'md',         // 'sm' | 'md'
  style = {},
}) {
  const onInk = variant === 'ink';
  const iconBox = size === 'sm' ? 30 : 38;
  const iconSize = size === 'sm' ? 16 : 20;

  return (
    <div style={{
      fontFamily: 'var(--font-body)', display: 'flex', flexWrap: 'wrap',
      gap: size === 'sm' ? '14px 22px' : '18px 32px',
      alignItems: 'center', justifyContent: 'center', ...style,
    }}>
      {items.map((it) => (
        <div key={it.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            width: iconBox, height: iconBox, flex: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 'var(--radius-md)',
            background: onInk ? 'rgba(200,162,76,.14)' : 'var(--gold-50)',
            color: onInk ? 'var(--gold-400)' : 'var(--gold-600)',
          }}>
            <span style={{ width: iconSize, height: iconSize, display: 'block' }}>{ICONS[it.icon]}</span>
          </span>
          <span style={{
            fontSize: size === 'sm' ? '13px' : '14px', fontWeight: 700,
            color: onInk ? 'rgba(255,255,255,.9)' : 'var(--ink-800)', whiteSpace: 'nowrap',
          }}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}
