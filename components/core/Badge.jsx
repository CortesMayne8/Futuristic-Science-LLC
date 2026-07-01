import React from 'react';

/**
 * Badge — compact status / attribute label.
 * Tones: gold (featured), teal (verified/COA), neutral, success, warning, danger, ink.
 */
export function Badge({
  children,
  tone = 'neutral',   // 'gold' | 'teal' | 'neutral' | 'success' | 'warning' | 'danger' | 'ink'
  variant = 'soft',   // 'soft' | 'solid' | 'outline'
  size = 'md',        // 'sm' | 'md'
  iconLeft = null,
  style = {},
}) {
  const tones = {
    gold:    { fg: 'var(--gold-700)', bg: 'var(--gold-100)', solidBg: 'var(--gold-500)', solidFg: 'var(--ink-900)', bd: 'var(--gold-300)' },
    teal:    { fg: 'var(--teal-700)', bg: 'var(--teal-50)', solidBg: 'var(--teal-500)', solidFg: '#fff', bd: 'var(--teal-300)' },
    neutral: { fg: 'var(--gray-700)', bg: 'var(--gray-100)', solidBg: 'var(--gray-600)', solidFg: '#fff', bd: 'var(--gray-300)' },
    success: { fg: 'var(--success)', bg: 'var(--success-bg)', solidBg: 'var(--success)', solidFg: '#fff', bd: 'var(--success)' },
    warning: { fg: 'var(--warning)', bg: 'var(--warning-bg)', solidBg: 'var(--warning)', solidFg: '#fff', bd: 'var(--warning)' },
    danger:  { fg: 'var(--danger)', bg: 'var(--danger-bg)', solidBg: 'var(--danger)', solidFg: '#fff', bd: 'var(--danger)' },
    ink:     { fg: '#fff', bg: 'var(--ink-800)', solidBg: 'var(--ink-800)', solidFg: '#fff', bd: 'var(--ink-700)' },
  };
  const t = tones[tone] || tones.neutral;

  const styles = {
    soft:    { background: t.bg, color: t.fg, border: '1px solid transparent' },
    solid:   { background: t.solidBg, color: t.solidFg, border: '1px solid transparent' },
    outline: { background: 'transparent', color: t.fg, border: `1px solid ${t.bd}` },
  }[variant];

  const sz = size === 'sm'
    ? { padding: '2px 8px', fontSize: '11px', gap: '4px' }
    : { padding: '4px 11px', fontSize: '12px', gap: '5px' };

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: sz.gap,
      fontFamily: 'var(--font-body)', fontWeight: 700,
      letterSpacing: '0.02em', lineHeight: 1.4,
      borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap',
      padding: sz.padding, fontSize: sz.fontSize,
      ...styles, ...style,
    }}>
      {iconLeft}
      {children}
    </span>
  );
}
