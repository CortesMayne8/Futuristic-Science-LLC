import React from 'react';

/**
 * Select — styled native dropdown for filters (category, price, sort).
 */
export function Select({
  label,
  options = [],     // [{ value, label }] or [string]
  value,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const [focus, setFocus] = React.useState(false);

  return (
    <div style={{ fontFamily: 'var(--font-body)', width: '100%', ...style }}>
      {label && (
        <label htmlFor={selectId} style={{
          display: 'block', fontSize: '13px', fontWeight: 600,
          color: 'var(--ink-800)', marginBottom: '6px',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: 'none', WebkitAppearance: 'none',
            width: '100%', height: '44px',
            padding: '0 38px 0 12px',
            fontFamily: 'var(--font-body)', fontSize: '14.5px',
            color: 'var(--ink-900)', cursor: 'pointer',
            background: 'var(--white)',
            border: `1.5px solid ${focus ? 'var(--gold-500)' : 'var(--border-strong)'}`,
            borderRadius: 'var(--radius-md)',
            boxShadow: focus ? '0 0 0 3px var(--ring)' : 'none',
            transition: 'all var(--dur-fast) var(--ease-out)',
          }}
          {...rest}
        >
          {opts.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="var(--gray-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
