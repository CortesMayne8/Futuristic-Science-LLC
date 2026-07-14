/* AuthGate — sign-in wall shown when a visitor opens their cart / proceeds to checkout.
   Multiple sign-in methods: Google, Apple, email/password, magic link.
   Demo only: any submit (with the qualified-researcher box checked) enters the site.
   Wire to your store login (WooCommerce / Auth0 / Firebase) to make it real. */
function AuthGate({ onAuth, onDismiss }) {
  const { Button } = window.FuturisticScienceDesignSystem_2ca7b0;
  window.useLang();
  const t = window.t;
  const [mode, setMode] = React.useState('signin'); // 'signin' | 'signup'
  const [agree, setAgree] = React.useState(false);
  const [tried, setTried] = React.useState(false);
  const isSignup = mode === 'signup';

  const go = () => { if (!agree) { setTried(true); return; } onAuth(); };

  const field = (label, type, ph) => (
    <label style={{ display: 'block', textAlign: 'left', marginBottom: 14 }}>
      <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 700, color: 'var(--ink-800)', marginBottom: 6 }}>{label}</span>
      <input type={type} placeholder={ph}
        style={{ width: '100%', boxSizing: 'border-box', height: 46, padding: '0 14px', fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--ink-900)', background: 'var(--white)', border: '1.5px solid var(--border-strong)', borderRadius: 'var(--radius-md)' }} />
    </label>
  );

  // Social sign-in (Google/Apple) authenticates directly — no extra registration gate.
  // Researcher/compliance acknowledgments are enforced at checkout instead.
  const social = (label, icon) => (
    <button onClick={onAuth} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 11, width: '100%', height: 48,
      cursor: 'pointer', background: 'var(--white)', border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: 600,
      color: 'var(--ink-900)', marginBottom: 12, transition: 'background var(--dur-fast) var(--ease-out)',
    }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--gray-50)'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'var(--white)'}
    >{icon}{label}</button>
  );

  const googleIcon = (
    <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
  );
  const appleIcon = (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="var(--ink-900)"><path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.02-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.78 1.3 10.32.86 1.24 1.89 2.64 3.23 2.59 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.29-1.27 3.15-2.52.99-1.45 1.4-2.85 1.42-2.93-.03-.01-2.72-1.04-2.75-4.14M14.5 4.5c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.09 3.18 1.15.09 2.32-.58 3.04-1.45"/></svg>
  );

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 110, background: 'var(--gradient-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, overflowY: 'auto' }}>
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

      <div style={{ position: 'relative', width: '100%', maxWidth: 460, background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '36px 36px 28px', textAlign: 'center', boxShadow: '0 40px 100px rgba(0,0,0,.5)', margin: 'auto' }}>
        {onDismiss && (
          <button onClick={onDismiss} aria-label="Close" style={{ position: 'absolute', top: 14, right: 14, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gray-500)', borderRadius: 'var(--radius-pill)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        )}
        <img src={window.R("../../assets/emblem-mark.png")} alt="" style={{ height: 60, marginBottom: 14 }} />
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gold-700)', marginBottom: 10 }}>{t('auth.eyebrow')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, color: 'var(--ink-900)', letterSpacing: '-.02em', margin: '0 0 8px' }}>{isSignup ? t('auth.signupTitle') : t('auth.signinTitle')}</h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.55, margin: '0 0 22px' }}>{isSignup ? t('auth.signupSub') : t('auth.signinSub')}</p>

        {social(t('auth.google'), googleIcon)}
        {social(t('auth.apple'), appleIcon)}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '18px 0' }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
          <span style={{ fontSize: 12, color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{t('auth.or')}</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
        </div>

        {isSignup && field(t('auth.name'), 'text', t('auth.namePh'))}
        {field(t('auth.email'), 'email', t('auth.emailPh'))}
        {field(t('auth.password'), 'password', t('auth.passwordPh'))}

        <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', textAlign: 'left', cursor: 'pointer', margin: '4px 0 8px' }}>
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)}
            style={{ width: 18, height: 18, flex: 'none', marginTop: 1, accentColor: 'var(--gold-600)', cursor: 'pointer' }} />
          <span style={{ fontSize: 12.5, lineHeight: 1.5, color: 'var(--text-body)' }}>{t('auth.qualified')}</span>
        </label>
        {tried && !agree && (
          <div style={{ textAlign: 'left', fontSize: 12.5, fontWeight: 600, color: '#c0392b', marginBottom: 10 }}>{t('auth.needAgree')}</div>
        )}

        <div style={{ marginTop: 8 }}>
          <Button variant="primary" size="lg" fullWidth onClick={go}>{isSignup ? t('auth.signupBtn') : t('auth.signinBtn')}</Button>
        </div>

        <button onClick={go} style={{ marginTop: 14, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--accent-teal)' }}>{t('auth.magic')}</button>

        <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
          <button onClick={() => { setMode(isSignup ? 'signin' : 'signup'); setTried(false); }} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 700, color: 'var(--ink-900)' }}>{isSignup ? t('auth.toSignin') : t('auth.toSignup')}</button>
        </div>

        <p style={{ marginTop: 16, fontSize: 11, color: 'var(--gray-500)', lineHeight: 1.5 }}>{t('auth.demoNote')}</p>
      </div>
    </div>
  );
}

Object.assign(window, { AuthGate });
