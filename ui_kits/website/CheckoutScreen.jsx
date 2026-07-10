/* CheckoutScreen — fast, mobile-friendly checkout with order summary. */
function CheckoutScreen({ cart, onNav }) {
  const { Input, Button, DisclaimerBanner, Badge } = window.FuturisticScienceDesignSystem_2ca7b0;
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const shipping = subtotal > 0 ? 12 : 0;
  const total = subtotal + shipping;
  const ACKS = ['ackLawful', 'ackResearcher', 'ackNoHuman', 'ackLiability', 'ackFinal', 'ackAuthorized', 'ackChargeback', 'ackRecord'];
  const [checks, setChecks] = React.useState({});
  const [tried, setTried] = React.useState(false);
  const [payMethod, setPayMethod] = React.useState('zelle');
  const allChecked = ACKS.every((k) => checks[k]);
  const toggle = (k) => setChecks((c) => ({ ...c, [k]: !c[k] }));
  const setAll = (v) => setChecks(v ? Object.fromEntries(ACKS.map((k) => [k, true])) : {});

  // Acceptance logging — records checkbox acceptance to the compliance sheet on Place Order.
  const LOG_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyOMpiSu5x4IWz_MSjj0IOMURRiy8pk8jls80TnGqXZ0JmFdQYhY6zk9uGXruZXdvMQ/exec';
  const POLICY_VERSION = '2026-07-10';
  const logAcceptance = () => {
    try {
      const q = (sel) => (document.querySelector(sel) || {}).value || '';
      const payload = {
        orderRef: 'FS-' + Date.now().toString(36).toUpperCase(),
        name: q('input[placeholder="Dr. Jane Researcher"]'),
        email: q('input[type="email"]'),
        paymentMethod: payMethod,
        total: '$' + total.toFixed(2),
        policyVersion: POLICY_VERSION,
        acks: ACKS.filter((k) => checks[k]),
        notes: cart.map((x) => x.name + ' (' + x.size + ') x' + x.qty).join('; '),
      };
      fetch('https://api.ipify.org?format=json')
        .then((r) => r.json()).catch(() => ({}))
        .then(({ ip }) => fetch(LOG_ENDPOINT, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify({ ...payload, ip: ip || '' }) }));
    } catch (err) { /* logging must never block checkout */ }
  };

  if (cart.length === 0) {
    return (
      <div style={{ background: 'var(--surface-subtle)', minHeight: '100%' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '90px 28px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800, color: 'var(--ink-900)', marginBottom: 12 }}>{t('co.emptyTitle')}</h1>
          <p style={{ fontSize: 15, color: 'var(--text-body)', marginBottom: 24 }}>{t('co.emptyDesc')}</p>
          <Button variant="primary" size="lg" onClick={() => onNav('shop')}>{t('co.browse')}</Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--surface-subtle)', minHeight: '100%' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '48px 28px 80px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 800, color: 'var(--ink-900)', letterSpacing: '-.025em', marginBottom: 28 }}>{t('co.title')}</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.9fr', gap: 32, alignItems: 'start' }}>
          {/* form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {[
              [t('co.contact'), [[t('co.email'), 'you@lab.org', 'email'], [t('co.phone'), D.contact.phone, 'tel']]],
              [t('co.shipAddr'), [[t('co.fullName'), 'Dr. Jane Researcher', 'text'], [t('co.institution'), 'University Research Lab', 'text'], [t('co.street'), '123 Science Park Dr', 'text']]],
            ].map(([title, fields], si) => (
              <div key={title} style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 22 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--ink-900)', marginBottom: 16 }}>{title}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {fields.map(([l, ph, ty]) => <Input key={l} label={l} type={ty} placeholder={ph} />)}
                  {si === 1 && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                      <Input label={t('co.city')} placeholder="City" />
                      <Input label={t('co.state')} placeholder="WI" />
                      <Input label={t('co.zip')} placeholder="53703" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 22 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--ink-900)', marginBottom: 6 }}>{t('co.payMethodsTitle')}</div>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-muted)', margin: '0 0 16px' }}>{t('co.payIntro')}</p>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink-800)', marginBottom: 10 }}>{t('co.paySelect')}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { id: 'zelle', label: t('co.pay.zelle'), color: '#6D1ED4' },
                  { id: 'cashapp', label: t('co.pay.cashapp'), color: '#00C244' },
                  { id: 'venmo', label: t('co.pay.venmo'), color: '#008CFF' },
                  { id: 'applecash', label: t('co.pay.applecash'), color: 'var(--ink-900)' },
                ].map((m) => {
                  const on = payMethod === m.id;
                  return (
                    <button key={m.id} onClick={() => setPayMethod(m.id)} style={{
                      display: 'flex', alignItems: 'center', gap: 11, cursor: 'pointer', textAlign: 'left',
                      padding: '14px 15px', borderRadius: 'var(--radius-md)',
                      border: '1.5px solid ' + (on ? 'var(--ink-900)' : 'var(--border-subtle)'),
                      background: on ? 'var(--surface-subtle)' : 'var(--white)',
                      boxShadow: on ? 'inset 0 0 0 1px var(--ink-900)' : 'none',
                      transition: 'all var(--dur-fast) var(--ease-out)',
                    }}>
                      <span style={{ width: 30, height: 30, flex: 'none', borderRadius: 7, background: m.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800 }}>{m.label[0]}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: on ? 700 : 600, color: 'var(--ink-900)', flex: 1 }}>{m.label}</span>
                      <span style={{ width: 18, height: 18, flex: 'none', borderRadius: '50%', border: '2px solid ' + (on ? 'var(--ink-900)' : 'var(--border-strong)'), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {on && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ink-900)' }} />}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div style={{ marginTop: 14, display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--gold-50)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-md)', padding: '12px 14px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-700)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 1 }}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <span style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--gold-800, #7a5a17)' }}>{t('co.payWindow')}</span>
              </div>
            </div>

            {/* Compliance & Acknowledgments */}
            <div style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 4 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--ink-900)' }}>{t('co.compTitle')}</div>
                <label style={{ display: 'inline-flex', alignItems: 'center', gap: 7, cursor: 'pointer', fontSize: 12.5, fontWeight: 600, color: 'var(--accent-teal)' }}>
                  <input type="checkbox" checked={allChecked} onChange={(e) => setAll(e.target.checked)} style={{ width: 16, height: 16, accentColor: 'var(--gold-600)', cursor: 'pointer' }} />
                  {t('co.selectAll')}
                </label>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 16 }}>{t('co.compSub')}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {ACKS.map((k) => {
                  const on = !!checks[k];
                  return (
                    <label key={k} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', cursor: 'pointer', padding: '11px 13px', borderRadius: 'var(--radius-md)', border: '1px solid ' + (tried && !on ? 'var(--gold-300)' : 'var(--border-subtle)'), background: on ? 'var(--gold-50)' : 'var(--surface-subtle)', transition: 'background var(--dur-fast) var(--ease-out)' }}>
                      <input type="checkbox" checked={on} onChange={() => toggle(k)} style={{ width: 18, height: 18, flex: 'none', marginTop: 1, accentColor: 'var(--gold-600)', cursor: 'pointer' }} />
                      <span style={{ fontSize: 12.8, lineHeight: 1.5, color: 'var(--text-body)' }}>{t('co.' + k)}</span>
                    </label>
                  );
                })}
              </div>
              <div style={{ marginTop: 16, display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--ink-900)', borderRadius: 'var(--radius-md)', padding: '14px 16px' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 1 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold-400)', marginBottom: 5 }}>{t('co.recordTitle')}</div>
                  <p style={{ fontSize: 12, lineHeight: 1.6, color: 'rgba(255,255,255,.78)', margin: 0 }}>{t('co.recordNote')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* summary */}
          <div style={{ position: 'sticky', top: 88, background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 24 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--ink-900)', marginBottom: 18 }}>{t('co.summary')}</div>
            {cart.map((it) => (
              <div key={it.id} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
                <div style={{ position: 'relative', width: 48, height: 48, flex: 'none', background: 'var(--gray-50)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src={window.R(it.image || D.image)} alt="" style={{ height: 42 }} />
                  <span style={{ position: 'absolute', top: -6, right: -6, width: 18, height: 18, background: 'var(--ink-800)', color: '#fff', borderRadius: 999, fontSize: 10.5, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)' }}>{it.qty}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink-900)' }}>{it.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{it.size}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, fontWeight: 600, color: 'var(--ink-900)' }}>${(it.price * it.qty).toFixed(2)}</div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: 8, paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[[t('co.subtotal'), subtotal], [t('co.shipping'), shipping]].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--text-body)' }}>
                  <span>{k}</span><span style={{ fontFamily: 'var(--font-mono)' }}>${v.toFixed(2)}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 6, paddingTop: 12, borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink-900)' }}>{t('co.total')}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 600, color: 'var(--ink-900)' }}>${total.toFixed(2)}</span>
              </div>
            </div>
            <div style={{ marginTop: 18 }}>
              {tried && !allChecked && (
                <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--danger-600, #c0392b)', marginBottom: 12 }}>{t('co.compRequired')}</div>
              )}
              <div onClick={() => { if (!allChecked) { setTried(true); return; } logAcceptance(); }}>
                <Button variant="primary" size="lg" fullWidth disabled={!allChecked}>{t('co.placeOrder')}</Button>
              </div>
            </div>
            <div style={{ marginTop: 14 }}><DisclaimerBanner variant="strip" text={t('ruo')} style={{ borderRadius: 'var(--radius-sm)' }} /></div>
            <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: '4px 10px', fontSize: 12, color: 'var(--text-muted)' }}>
              <a onClick={() => onNav('terms')} style={{ color: 'var(--accent-teal)', fontWeight: 600, cursor: 'pointer' }}>{t('co.agreeTerms')}</a>
              <a onClick={() => onNav('privacy')} style={{ color: 'var(--accent-teal)', fontWeight: 600, cursor: 'pointer' }}>{t('co.agreePrivacy')}</a>
              <a onClick={() => onNav('returns')} style={{ color: 'var(--accent-teal)', fontWeight: 600, cursor: 'pointer' }}>{t('co.agreeReturns')}</a>
              <a onClick={() => onNav('ruo')} style={{ color: 'var(--accent-teal)', fontWeight: 600, cursor: 'pointer' }}>{t('foot.ruo')}</a>
            </div>
            <p style={{ marginTop: 12, fontSize: 11.5, lineHeight: 1.55, color: 'var(--text-muted)' }}>{t('co.fraudNote')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CheckoutScreen });
