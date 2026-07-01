/* Footer — ink, with newsletter opt-in, legal disclaimers, contact, link columns, RUO warning. */
function Footer({ onNav }) {
  const { contact } = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!ok) return;
    setSubscribed(true);
    setEmail('');
  };
  const col = (title, links) => (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 14 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map((l) => (
          <button key={l.label} onClick={() => l.nav && onNav(l.nav)} style={{
            background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left',
            fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.7)',
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,.7)'}
          >{l.label}</button>
        ))}
      </div>
    </div>
  );

  return (
    <footer style={{ background: 'var(--ink-900)', color: '#fff' }}>
      {/* RUO warning band */}
      <div style={{
        background: 'var(--ink-950)', borderBottom: '1px solid rgba(255,255,255,.08)',
        padding: '14px 28px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/></svg>
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.03em', color: 'rgba(255,255,255,.9)' }}>
          {t('ruo')}
        </span>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 28px 40px' }}>
        {/* newsletter opt-in */}
        <div style={{
          background: 'var(--ink-800)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--radius-xl)',
          padding: '30px 34px', marginBottom: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 28, flexWrap: 'wrap',
        }}>
          <div style={{ flex: '1 1 320px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-.01em', marginBottom: 6 }}>{t('news.title')}</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,.65)', lineHeight: 1.55, maxWidth: 460 }}>{t('news.sub')}</div>
          </div>
          {subscribed ? (
            <div style={{ flex: '1 1 360px', display: 'flex', alignItems: 'center', gap: 12, color: 'var(--gold-400)', fontSize: 15, fontWeight: 600 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
              {t('news.thanks')}
            </div>
          ) : (
            <form onSubmit={submit} style={{ flex: '1 1 360px', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                placeholder={t('news.placeholder')} aria-label={t('news.placeholder')}
                style={{ flex: '1 1 220px', boxSizing: 'border-box', height: 48, padding: '0 16px', fontFamily: 'var(--font-body)', fontSize: 15, color: '#fff', background: 'rgba(255,255,255,.06)', border: '1.5px solid rgba(255,255,255,.18)', borderRadius: 'var(--radius-md)', outline: 'none' }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--gold-400)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,.18)'} />
              <button type="submit" style={{ flex: 'none', height: 48, padding: '0 26px', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: 700, color: 'var(--ink-900)', background: 'var(--gold-400)', border: 'none', borderRadius: 'var(--radius-md)' }}>{t('news.btn')}</button>
            </form>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40 }}>
          {/* Brand col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
              <img src={window.R("../../assets/logo-horizontal-light.png")} alt="Futuristic Science — Research Peptides" style={{ height: 52, display: 'block' }} />
            </div>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.6)', lineHeight: 1.6, maxWidth: 300, marginBottom: 18 }}>
              {t('foot.desc')}
            </p>
            <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,.75)', lineHeight: 1.9 }}>
              <div>{contact.company}</div>
              <a href={'mailto:' + contact.email} style={{ color: 'var(--gold-400)' }}>{contact.email}</a>
              <div>{contact.phone}</div>
            </div>
          </div>
          {col(t('foot.shop'), [
            { label: t('foot.allPeptides'), nav: 'shop' }, { label: t('nav.coa'), nav: 'coa' },
          ])}
          {col(t('foot.company'), [
            { label: t('nav.faq'), nav: 'faq' }, { label: t('nav.contact'), nav: 'contact' },
          ])}
          {col(t('foot.legal'), [
            { label: t('foot.ruo'), nav: 'ruo' },
            { label: t('foot.privacy'), nav: 'privacy' },
            { label: t('foot.terms'), nav: 'terms' }, { label: t('foot.returns'), nav: 'returns' },
            { label: t('foot.shipping'), nav: 'shipping' },
          ])}
        </div>

        <div style={{
          marginTop: 44, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,.1)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.5)' }}>© {new Date().getFullYear()} {contact.company}. {t('foot.rights')}</span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', maxWidth: 620, textAlign: 'right', lineHeight: 1.5 }}>
            {t('foot.legalLine')}
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
