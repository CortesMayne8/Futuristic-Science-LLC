/* AgeGate — 21+ verification gate shown on first visit. Agree / Disagree. */
function AgeGate({ onEnter }) {
  const { Button } = window.FuturisticScienceDesignSystem_2ca7b0;
  window.useLang();
  const t = window.t;
  const [remember, setRemember] = React.useState(false);
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 100,
      background: 'var(--gradient-ink)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      {/* molecular texture */}
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }}>
        <g stroke="#C8A24C" strokeOpacity="0.12" strokeWidth="1">
          <line x1="100" y1="120" x2="260" y2="200"/><line x1="260" y1="200" x2="420" y2="140"/>
          <line x1="420" y1="140" x2="600" y2="240"/><line x1="600" y1="240" x2="720" y2="160"/>
          <line x1="260" y1="200" x2="320" y2="400"/><line x1="600" y1="240" x2="660" y2="440"/>
        </g>
        <g fill="#C8A24C" fillOpacity="0.18">
          <circle cx="100" cy="120" r="4"/><circle cx="260" cy="200" r="6"/><circle cx="420" cy="140" r="4"/>
          <circle cx="600" cy="240" r="5"/><circle cx="720" cy="160" r="4"/><circle cx="320" cy="400" r="4"/><circle cx="660" cy="440" r="5"/>
        </g>
      </svg>

      <div style={{
        position: 'relative', width: '100%', maxWidth: 480, background: 'var(--white)',
        borderRadius: 'var(--radius-xl)', padding: '40px 40px 32px', textAlign: 'center',
        boxShadow: '0 40px 100px rgba(0,0,0,.5)',
      }}>
        <img src={window.R("../../assets/emblem-mark.png")} alt="" style={{ height: 72, marginBottom: 18 }} />
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gold-700)', marginBottom: 12 }}>
          {t('age.eyebrow')}
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: 'var(--ink-900)', letterSpacing: '-.02em', lineHeight: 1.15, marginBottom: 14 }}>
          {t('age.title')}
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)', lineHeight: 1.6, marginBottom: 22 }}>
          {t('age.terms.pre')}<a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>{t('age.terms.link')}</a>{t('age.terms.post')}
        </p>

        <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
          <Button variant="outline" size="lg" fullWidth onClick={() => { window.location.href = 'https://www.google.com'; }}>{t('age.disagree')}</Button>
          <Button variant="primary" size="lg" fullWidth onClick={onEnter}>{t('age.agree')}</Button>
        </div>

        {/* Remember me */}
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 9, cursor: 'pointer', marginBottom: 24, userSelect: 'none' }}>
          <span
            onClick={() => setRemember((v) => !v)}
            style={{
              width: 20, height: 20, flex: 'none', borderRadius: 'var(--radius-xs)',
              border: remember ? '1.5px solid var(--gold-500)' : '1.5px solid var(--border-strong)',
              background: remember ? 'var(--gold-500)' : 'var(--white)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 120ms ease',
            }}
          >
            {remember && (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--ink-900)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-11"/></svg>
            )}
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 600, color: 'var(--ink-800)' }}>{t('age.remember')}</span>
        </label>

        {/* Disclaimer */}
        <div style={{
          textAlign: 'left', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)',
          borderLeft: '3px solid var(--gold-500)', padding: '14px 16px',
        }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold-700)', marginBottom: 6 }}>
            {t('age.disclaimerLabel')}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
            {t('age.disclaimer')}
          </p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AgeGate });
