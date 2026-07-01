import React from 'react';

/**
 * Input — text field with optional label, leading icon, and help/error text.
 */
export function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  iconLeft = null,
  hint = '',
  error = '',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--gold-500)' : 'var(--border-strong)';

  return (
    <div style={{ fontFamily: 'var(--font-body)', width: '100%', ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          display: 'block', fontSize: '13px', fontWeight: 600,
          color: 'var(--ink-800)', marginBottom: '6px',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: disabled ? 'var(--gray-100)' : 'var(--white)',
        border: `1.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        padding: '0 12px', height: '44px',
        boxShadow: focus ? '0 0 0 3px var(--ring)' : 'none',
        transition: 'all var(--dur-fast) var(--ease-out)',
      }}>
        {iconLeft && <span style={{ color: 'var(--gray-400)', display: 'flex' }}>{iconLeft}</span>}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            border: 'none', outline: 'none', background: 'transparent',
            flex: 1, height: '100%', fontFamily: 'var(--font-body)',
            fontSize: '14.5px', color: 'var(--ink-900)', minWidth: 0,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <div style={{
          fontSize: '12px', marginTop: '6px',
          color: error ? 'var(--danger)' : 'var(--text-muted)',
        }}>{error || hint}</div>
      )}
    </div>
  );
}
