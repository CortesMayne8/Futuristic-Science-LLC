/* Header / Navbar — sticky, translucent-on-scroll, with cart count. */
function Header({ current, onNav, cartCount, onCart }) {
  const lang = window.useLang();
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('kit-scroll');
    const fn = () => setScrolled((el ? el.scrollTop : window.scrollY) > 8);
    const target = el || window;
    target.addEventListener('scroll', fn);
    return () => target.removeEventListener('scroll', fn);
  }, []);

  const nav = [
    { id: 'home', label: window.t('nav.home') },
    { id: 'shop', label: window.t('nav.shop') },
    { id: 'coa', label: window.t('nav.coa') },
    { id: 'track', label: window.t('nav.track') },
    { id: 'contact', label: window.t('nav.contact') },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: scrolled ? 'rgba(255,255,255,0.86)' : 'var(--white)',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'background var(--dur-base) var(--ease-out)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 28px', height: 72,
        display: 'flex', alignItems: 'center', gap: 28,
      }}>
        {/* Logo */}
        <button onClick={() => onNav('home')} style={{
          display: 'flex', alignItems: 'center', gap: 11, background: 'none', border: 'none',
          cursor: 'pointer', padding: 0, flex: 'none',
        }}>
          <img src={window.R("../../assets/logo-horizontal.png")} alt="Futuristic Science — Research Peptides" style={{ height: 46, display: 'block' }} />
        </button>

        {/* Language switcher — between logo and nav */}
        <LangSwitcher />

        {/* Nav */}
        <nav style={{ display: 'flex', gap: 4, marginLeft: 4, flex: 1 }}>
          {nav.map((n) => (
            <button key={n.id} onClick={() => onNav(n.id)} style={{
              fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: 600,
              color: current === n.id ? 'var(--ink-900)' : 'var(--gray-600)',
              background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px',
              borderRadius: 'var(--radius-sm)', position: 'relative',
            }}
              onMouseEnter={(e) => { if (current !== n.id) e.currentTarget.style.color = 'var(--ink-900)'; }}
              onMouseLeave={(e) => { if (current !== n.id) e.currentTarget.style.color = 'var(--gray-600)'; }}
            >
              {n.label}
              {current === n.id && <span style={{
                position: 'absolute', left: 12, right: 12, bottom: 2, height: 2,
                background: 'var(--gold-500)', borderRadius: 2,
              }} />}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 'none' }}>
          <IconBtn label={window.t('aria.search')}><path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"/><path d="m21 21-4.3-4.3"/></IconBtn>
          <IconBtn label={window.t('aria.account')} onClick={() => onNav('account')}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></IconBtn>
          <button onClick={onCart} aria-label={window.t('aria.cart')} style={{
            position: 'relative', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-800)',
          }}>
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2.5l2.2 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L21 7H6"/>
            </svg>
            {cartCount > 0 && <span style={{
              position: 'absolute', top: 4, right: 2, minWidth: 17, height: 17, padding: '0 4px',
              background: 'var(--gold-500)', color: 'var(--ink-900)', borderRadius: 999,
              fontSize: 10.5, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-body)',
            }}>{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

function IconBtn({ children, label, onClick }) {
  return (
    <button onClick={onClick} aria-label={label} style={{
      width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-800)', borderRadius: 'var(--radius-sm)',
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
    </button>
  );
}

Object.assign(window, { Header });
