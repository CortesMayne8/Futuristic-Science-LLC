import React from 'react';

/**
 * QuantityStepper — minus / value / plus control for cart & product pages.
 */
export function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange = () => {},
  size = 'md',   // 'sm' | 'md'
  style = {},
}) {
  const dim = size === 'sm' ? 34 : 44;
  const set = (n) => onChange(Math.max(min, Math.min(max, n)));

  const Btn = ({ onClick, disabled, children, label }) => (
    <button type="button" onClick={onClick} disabled={disabled} aria-label={label}
      style={{
        width: dim, height: dim, flex: 'none', border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        background: 'transparent', color: disabled ? 'var(--gray-300)' : 'var(--ink-800)',
        fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--dur-fast) var(--ease-out)',
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = 'var(--gray-100)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
    >{children}</button>
  );

  return (
    <div style={{
      fontFamily: 'var(--font-body)', display: 'inline-flex', alignItems: 'center',
      border: '1.5px solid var(--border-strong)', borderRadius: 'var(--radius-md)',
      overflow: 'hidden', ...style,
    }}>
      <Btn onClick={() => set(value - 1)} disabled={value <= min} label="Decrease quantity">−</Btn>
      <div style={{
        minWidth: dim, height: dim, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 600, color: 'var(--ink-900)',
        borderLeft: '1.5px solid var(--border-subtle)', borderRight: '1.5px solid var(--border-subtle)',
        padding: '0 4px',
      }}>{value}</div>
      <Btn onClick={() => set(value + 1)} disabled={value >= max} label="Increase quantity">+</Btn>
    </div>
  );
}
