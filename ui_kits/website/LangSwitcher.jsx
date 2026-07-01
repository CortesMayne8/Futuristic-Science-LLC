/* LangSwitcher — EN/ES toggle with US + Mexican flags.
   Sits between the logo and the nav. Reads/writes window.FS_LANG. */
function FlagUS() {
  return (
    <svg width="22" height="15" viewBox="0 0 22 15" style={{ display: 'block', borderRadius: 2, boxShadow: '0 0 0 1px rgba(11,27,51,.12)' }} aria-hidden="true">
      <defs><clipPath id="fsUS"><rect width="22" height="15" rx="2" /></clipPath></defs>
      <g clipPath="url(#fsUS)">
        <rect width="22" height="15" fill="#fff" />
        {[0, 2, 4, 6, 8, 10, 12].map((i) => (
          <rect key={i} y={i * (15 / 13)} width="22" height={15 / 13} fill="#B22234" />
        ))}
        <rect width="9.4" height={7 * (15 / 13)} fill="#3C3B6E" />
        <g fill="#fff">
          {[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => (
            <circle key={r + '-' + c} cx={1.4 + c * 2.4 + (r % 2) * 1.2} cy={1.5 + r * 2.4} r="0.62" />
          )))}
        </g>
      </g>
    </svg>
  );
}

function FlagMX() {
  return (
    <svg width="22" height="15" viewBox="0 0 22 15" style={{ display: 'block', borderRadius: 2, boxShadow: '0 0 0 1px rgba(11,27,51,.12)' }} aria-hidden="true">
      <defs><clipPath id="fsMX"><rect width="22" height="15" rx="2" /></clipPath></defs>
      <g clipPath="url(#fsMX)">
        <rect width="22" height="15" fill="#fff" />
        <rect width="7.34" height="15" fill="#006847" />
        <rect x="14.66" width="7.34" height="15" fill="#CE1126" />
        {/* simplified emblem */}
        <g transform="translate(11 7.5)">
          <ellipse rx="2.1" ry="1.5" fill="none" stroke="#9c6a2f" strokeWidth="0.5" />
          <path d="M-1.3 -0.3 q1.3 1.6 2.6 0.2" fill="none" stroke="#5b3b1a" strokeWidth="0.7" strokeLinecap="round" />
          <circle cx="-0.1" cy="-0.2" r="0.7" fill="#6b4423" />
        </g>
      </g>
    </svg>
  );
}

function LangSwitcher() {
  const lang = window.useLang();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const OPTS = [
    { code: 'en', Flag: FlagUS, label: 'EN', full: 'English' },
    { code: 'es', Flag: FlagMX, label: 'ES', full: 'Español' },
  ];
  const current = OPTS.find((o) => o.code === lang) || OPTS[0];

  return (
    <div ref={ref} role="group" aria-label={window.t('lang.label')} style={{ position: 'relative', flex: 'none' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer',
          height: 36, padding: '0 10px 0 11px', borderRadius: 999,
          border: '1.5px solid ' + (open ? 'var(--gold-500)' : 'var(--border-strong)'),
          backgroundColor: 'var(--white)',
          boxShadow: open ? '0 0 0 3px var(--ring)' : 'none',
          fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 700,
          letterSpacing: '.04em', color: 'var(--ink-800)',
          transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        }}
      >
        <current.Flag />
        {current.label}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gray-500)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-fast) var(--ease-out)' }}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div role="listbox" style={{
          position: 'absolute', top: 'calc(100% + 6px)', left: 0, minWidth: 150, zIndex: 50,
          background: 'var(--white)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', padding: 4,
        }}>
          {OPTS.map((o) => {
            const active = o.code === lang;
            return (
              <button
                key={o.code}
                role="option"
                aria-selected={active}
                onClick={() => { window.FS_LANG.setLang(o.code); setOpen(false); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
                  cursor: 'pointer', padding: '9px 11px', border: 'none', borderRadius: 'var(--radius-sm)',
                  background: active ? 'var(--gold-50)' : 'transparent',
                  fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: active ? 700 : 600,
                  color: active ? 'var(--ink-900)' : 'var(--ink-800)',
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'var(--gray-50)'; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}
              >
                <o.Flag />
                <span style={{ flex: 1 }}>{o.full}</span>
                {active && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { LangSwitcher });
