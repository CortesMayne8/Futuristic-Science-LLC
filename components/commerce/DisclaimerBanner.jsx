import React from 'react';

/**
 * DisclaimerBanner — the mandatory research-use-only notice.
 * Use the `ink` variant in hero/footer, `strip` as a thin top-bar, `inline` on product pages.
 */
export function DisclaimerBanner({
  variant = 'ink',     // 'ink' | 'strip' | 'inline'
  text = 'For Research Purposes Only. Not for human use.',
  detail = '',
  style = {},
}) {
  const ShieldIcon = ({ size = 28, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
      <path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );

  if (variant === 'strip') {
    return (
      <div style={{
        fontFamily: 'var(--font-body)', background: 'var(--ink-900)', color: 'rgba(255,255,255,.85)',
        fontSize: '12.5px', fontWeight: 600, letterSpacing: '.04em', textAlign: 'center',
        padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        ...style,
      }}>
        <ShieldIcon size={15} color="var(--gold-400)" />
        {text}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div style={{
        fontFamily: 'var(--font-body)', display: 'flex', gap: '12px', alignItems: 'flex-start',
        background: 'var(--gold-50)', border: '1px solid var(--gold-200)',
        borderRadius: 'var(--radius-md)', padding: '14px 16px', ...style,
      }}>
        <ShieldIcon size={22} color="var(--gold-700)" />
        <div>
          <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--ink-900)' }}>{text}</div>
          {detail && <div style={{ fontSize: '12.5px', color: 'var(--gray-600)', marginTop: '3px', lineHeight: 1.5 }}>{detail}</div>}
        </div>
      </div>
    );
  }

  // ink (default)
  return (
    <div style={{
      fontFamily: 'var(--font-body)', display: 'flex', gap: '14px', alignItems: 'center',
      background: 'var(--ink-800)', borderLeft: '4px solid var(--gold-500)',
      borderRadius: 'var(--radius-md)', padding: '16px 20px', ...style,
    }}>
      <ShieldIcon size={28} color="var(--gold-400)" />
      <div>
        <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#fff', letterSpacing: '.01em' }}>{text}</div>
        {detail && <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,.62)', marginTop: '4px', lineHeight: 1.5 }}>{detail}</div>}
      </div>
    </div>
  );
}
