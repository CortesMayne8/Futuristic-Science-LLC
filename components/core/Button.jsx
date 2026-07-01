import React from 'react';

/**
 * Button — primary action control for Futuristic Science.
 * Gold primary for conversion, ink/outline/ghost for secondary actions.
 */
export function Button({
  children,
  variant = 'primary',   // 'primary' | 'ink' | 'outline' | 'ghost'
  size = 'md',           // 'sm' | 'md' | 'lg'
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 14px', fontSize: '13px', height: '36px', radius: 'var(--radius-sm)' },
    md: { padding: '11px 20px', fontSize: '14.5px', height: '44px', radius: 'var(--radius-md)' },
    lg: { padding: '15px 28px', fontSize: '16px', height: '54px', radius: 'var(--radius-md)' },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: 'var(--gold-500)',
      color: 'var(--ink-900)',
      border: '1px solid var(--gold-500)',
      boxShadow: 'var(--glow-gold)',
      fontWeight: 700,
    },
    ink: {
      background: 'var(--ink-800)',
      color: '#fff',
      border: '1px solid var(--ink-800)',
      boxShadow: 'var(--shadow-sm)',
      fontWeight: 600,
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-800)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'none',
      fontWeight: 600,
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent-teal)',
      border: '1px solid transparent',
      boxShadow: 'none',
      fontWeight: 600,
    },
  };
  const v = variants[variant] || variants.primary;

  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const hoverStyle = !disabled && hover ? {
    primary: { background: 'var(--gold-600)', borderColor: 'var(--gold-600)', boxShadow: 'var(--glow-gold-strong)' },
    ink: { background: 'var(--ink-700)' },
    outline: { borderColor: 'var(--gold-500)', background: 'var(--gold-50)', color: 'var(--gold-700)' },
    ghost: { background: 'var(--teal-50)', color: 'var(--accent-teal-hover)' },
  }[variant] : {};

  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        fontFamily: 'var(--font-body)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        whiteSpace: 'nowrap', cursor: disabled ? 'not-allowed' : 'pointer',
        height: s.height, padding: s.padding, fontSize: s.fontSize,
        borderRadius: s.radius, lineHeight: 1,
        width: fullWidth ? '100%' : 'auto',
        opacity: disabled ? 0.5 : 1,
        transform: press && !disabled ? 'scale(0.98)' : 'scale(1)',
        transition: 'all var(--dur-fast) var(--ease-out)',
        ...v, ...hoverStyle, ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
