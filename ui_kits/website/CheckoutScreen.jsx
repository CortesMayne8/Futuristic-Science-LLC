/* CheckoutScreen — luxury multi-step wizard checkout (Contact / Shipping / Payment / Review). */
/* Extra i18n keys for validation + wizard chrome (registered at load). */
Object.assign(window.FS_DICT.en, {
  'co.optional': '(optional)',
  'co.fieldRequired': 'Required',
  'co.emailInvalid': 'Enter a valid email address',
  'co.fieldsRequired': 'Please complete all required fields marked with *.',
  'co.stepContact': 'Contact',
  'co.stepShipping': 'Shipping',
  'co.stepPayment': 'Payment',
  'co.stepReview': 'Review',
  'co.stepOf': 'Step {n} of 4',
  'co.back': 'Back',
  'co.continue': 'Continue',
  'co.edit': 'Edit',
  'co.contactSub': 'Where we send your order confirmation and updates.',
  'co.shipSub': 'Where your research materials will be delivered.',
  'co.paySub': 'Select your payment method. Instructions follow after you place the order.',
  'co.reviewSub': 'Confirm your details and acknowledgments, then place your order.',
  'co.secure': 'Secure checkout',
  'co.reviewContact': 'Contact',
  'co.reviewShip': 'Ship to',
  'co.reviewPay': 'Payment',
});
Object.assign(window.FS_DICT.es, {
  'co.optional': '(opcional)',
  'co.fieldRequired': 'Obligatorio',
  'co.emailInvalid': 'Ingresa un correo electrónico válido',
  'co.fieldsRequired': 'Completa todos los campos obligatorios marcados con *.',
  'co.stepContact': 'Contacto',
  'co.stepShipping': 'Envío',
  'co.stepPayment': 'Pago',
  'co.stepReview': 'Revisar',
  'co.stepOf': 'Paso {n} de 4',
  'co.back': 'Atrás',
  'co.continue': 'Continuar',
  'co.edit': 'Editar',
  'co.contactSub': 'A dónde enviamos la confirmación y las actualizaciones de tu pedido.',
  'co.shipSub': 'A dónde se entregarán tus materiales de investigación.',
  'co.paySub': 'Selecciona tu método de pago. Las instrucciones se muestran después de realizar el pedido.',
  'co.reviewSub': 'Confirma tus datos y reconocimientos, luego realiza tu pedido.',
  'co.secure': 'Pago seguro',
  'co.reviewContact': 'Contacto',
  'co.reviewShip': 'Enviar a',
  'co.reviewPay': 'Pago',
});
function CheckoutScreen({ cart, onNav }) {
  const { Input, Button, DisclaimerBanner, Badge } = window.FuturisticScienceDesignSystem_2ca7b0;
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const shipping = subtotal > 0 ? 12 : 0;
  const total = subtotal + shipping;
  const ACKS = ['ackLawful', 'ackResearcher', 'ackNoHuman', 'ackLiability', 'ackFinal', 'ackAuthorized', 'ackChargeback', 'ackRecord'];
  const [step, setStep] = React.useState(1);
  const [checks, setChecks] = React.useState({});
  const [tried, setTried] = React.useState(false);
  const [payMethod, setPayMethod] = React.useState('zelle');
  const [placed, setPlaced] = React.useState(null);
  const [fields, setFields] = React.useState({ email: '', phone: '', fullName: '', institution: '', street: '', city: '', state: '', zip: '' });
  const REQUIRED = ['email', 'phone', 'fullName', 'street', 'city', 'state', 'zip'];
  const setF = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }));
  const emailOk = /^[^ @]+@[^ @]+[.][^ @]+$/.test(fields.email.trim());
  const fieldsOk = REQUIRED.every((k) => fields[k].trim()) && emailOk;
  const step1Ok = fields.email.trim() && fields.phone.trim() && emailOk;
  const step2Ok = ['fullName', 'street', 'city', 'state', 'zip'].every((k) => fields[k].trim());
  const fieldErr = (k) => {
    if (!tried) return '';
    if (!fields[k].trim()) return t('co.fieldRequired');
    if (k === 'email' && !emailOk) return t('co.emailInvalid');
    return '';
  };
  const allChecked = ACKS.every((k) => checks[k]);
  const toggle = (k) => setChecks((c) => ({ ...c, [k]: !c[k] }));
  const setAll = (v) => setChecks(v ? Object.fromEntries(ACKS.map((k) => [k, true])) : {});

  const PAY_LABELS = { zelle: t('co.pay.zelle'), cashapp: t('co.pay.cashapp'), venmo: t('co.pay.venmo') };

  // Acceptance logging — records checkbox acceptance to the compliance sheet on Place Order.
  const LOG_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyOMpiSu5x4IWz_MSjj0IOMURRiy8pk8jls80TnGqXZ0JmFdQYhY6zk9uGXruZXdvMQ/exec';
  const POLICY_VERSION = '2026-07-10';
  const logAcceptance = () => {
    const orderRef = 'FS-' + Date.now().toString(36).toUpperCase();
    try {
      const payload = {
        orderRef,
        name: fields.fullName.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        paymentMethod: payMethod,
        total: '$' + total.toFixed(2),
        policyVersion: POLICY_VERSION,
        acks: ACKS.filter((k) => checks[k]),
        notes: cart.map((x) => x.name + ' (' + x.size + ') x' + x.qty).join('; ') + ' | Ship to: ' + [fields.institution.trim(), fields.street.trim(), fields.city.trim(), fields.state.trim(), fields.zip.trim()].filter(Boolean).join(', '),
      };
      fetch('https://api.ipify.org?format=json')
        .then((r) => r.json()).catch(() => ({}))
        .then(({ ip }) => fetch(LOG_ENDPOINT, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify({ ...payload, ip: ip || '' }) }));
    } catch (err) { /* logging must never block checkout */ }
    return orderRef;
  };

  const goTo = (n) => { setTried(false); setStep(n); };
  const goBack = () => goTo(Math.max(1, step - 1));
  const goNext = () => {
    if (step === 1) { if (!step1Ok) return setTried(true); goTo(2); }
    else if (step === 2) { if (!step2Ok) return setTried(true); goTo(3); }
    else if (step === 3) { goTo(4); }
    else if (step === 4) { if (!allChecked) return setTried(true); setPlaced(logAcceptance()); }
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

  const STEPS = [
    { n: 1, label: t('co.stepContact') },
    { n: 2, label: t('co.stepShipping') },
    { n: 3, label: t('co.stepPayment') },
    { n: 4, label: t('co.stepReview') },
  ];

  const eyebrow = (text) => (
    <div style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gold-700)', marginBottom: 9 }}>{text}</div>
  );
  const stepTitle = (title, sub) => (
    <div style={{ marginBottom: 22 }}>
      {eyebrow(t('co.stepOf', { n: step }))}
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 25, fontWeight: 800, color: 'var(--ink-900)', letterSpacing: '-.02em', margin: '0 0 6px' }}>{title}</h2>
      <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>{sub}</p>
      <div style={{ height: 2, width: 44, background: 'var(--gold-500)', marginTop: 16, borderRadius: 2 }} />
    </div>
  );

  const reviewRow = (label, value, toStep) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 14, padding: '13px 0', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--ink-900)', wordBreak: 'break-word' }}>{value}</div>
      </div>
      <button onClick={() => goTo(toStep)} style={{ flex: 'none', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 700, color: 'var(--accent-teal)' }}>{t('co.edit')}</button>
    </div>
  );

  return (
    <div style={{ background: 'var(--surface-subtle)', minHeight: '100%' }}>
      <style>{'.fsco-grid{display:grid;grid-template-columns:1.35fr 0.9fr;gap:32px;align-items:start}@media (max-width:860px){.fsco-grid{grid-template-columns:1fr}.fsco-summary{position:static !important;order:-1}}'}</style>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '48px 28px 80px' }}>

        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold-700)', marginBottom: 10 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            {t('co.secure')}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 800, color: 'var(--ink-900)', letterSpacing: '-.03em', margin: 0 }}>{t('co.title')}</h1>
        </div>

        {/* progress rail */}
        <div style={{ display: 'flex', alignItems: 'flex-start', maxWidth: 540, margin: '0 auto 42px' }}>
          {STEPS.map((s, i) => {
            const done = s.n < step, active = s.n === step;
            const circleStyle = {
              width: 38, height: 38, flex: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 800,
              transition: 'all var(--dur-fast) var(--ease-out)',
              background: done ? 'var(--gold-600)' : active ? 'var(--ink-900)' : 'var(--white)',
              color: done ? '#fff' : active ? '#fff' : 'var(--gold-700)',
              border: (done || active) ? 'none' : '1.5px solid var(--gold-200)',
              boxShadow: active ? '0 0 0 4px var(--gold-100)' : 'none',
            };
            return (
              <React.Fragment key={s.n}>
                <div onClick={() => { if (done) goTo(s.n); }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 9, flex: 'none', width: 76, cursor: done ? 'pointer' : 'default' }}>
                  <div style={circleStyle}>
                    {done
                      ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      : s.n}
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: active ? 700 : 600, letterSpacing: '.02em', color: active ? 'var(--ink-900)' : done ? 'var(--gold-700)' : 'var(--text-muted)' }}>{s.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ flex: 1, height: 2, marginTop: 18, borderRadius: 2, background: s.n < step ? 'var(--gold-500)' : 'var(--gold-100)', transition: 'background var(--dur-base) var(--ease-out)' }} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="fsco-grid">
          {/* step panel + nav */}
          <div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: '30px 30px 32px' }}>

              {step === 1 && (
                <div>
                  {stepTitle(t('co.contact'), t('co.contactSub'))}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <Input label={t('co.email') + ' *'} type="email" placeholder="you@lab.org" value={fields.email} onChange={setF('email')} error={fieldErr('email')} />
                    <Input label={t('co.phone') + ' *'} type="tel" placeholder={D.contact.phone} value={fields.phone} onChange={setF('phone')} error={fieldErr('phone')} />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  {stepTitle(t('co.shipAddr'), t('co.shipSub'))}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <Input label={t('co.fullName') + ' *'} type="text" placeholder="Dr. Jane Researcher" value={fields.fullName} onChange={setF('fullName')} error={fieldErr('fullName')} />
                    <Input label={t('co.institution') + ' ' + t('co.optional')} type="text" placeholder="University Research Lab" value={fields.institution} onChange={setF('institution')} />
                    <Input label={t('co.street') + ' *'} type="text" placeholder="123 Science Park Dr" value={fields.street} onChange={setF('street')} error={fieldErr('street')} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                      <Input label={t('co.city') + ' *'} placeholder="City" value={fields.city} onChange={setF('city')} error={fieldErr('city')} />
                      <Input label={t('co.state') + ' *'} placeholder="WI" value={fields.state} onChange={setF('state')} error={fieldErr('state')} />
                      <Input label={t('co.zip') + ' *'} placeholder="53703" value={fields.zip} onChange={setF('zip')} error={fieldErr('zip')} />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  {stepTitle(t('co.payMethodsTitle'), t('co.paySub'))}
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-muted)', margin: '0 0 18px' }}>{t('co.payIntro')}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {[
                      { id: 'zelle', label: t('co.pay.zelle'), color: '#6D1ED4' },
                      { id: 'cashapp', label: t('co.pay.cashapp'), color: '#00C244' },
                      { id: 'venmo', label: t('co.pay.venmo'), color: '#008CFF' },
                    ].map((m) => {
                      const on = payMethod === m.id;
                      return (
                        <button key={m.id} onClick={() => setPayMethod(m.id)} style={{
                          display: 'flex', alignItems: 'center', gap: 11, cursor: 'pointer', textAlign: 'left',
                          padding: '15px 16px', borderRadius: 'var(--radius-md)',
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
                  <div style={{ marginTop: 16, display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--gold-50)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-md)', padding: '13px 15px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-700)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 1 }}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    <span style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--gold-800, #7a5a17)' }}>{t('co.payWindow')}</span>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  {stepTitle(t('co.stepReview'), t('co.reviewSub'))}
                  <div style={{ marginBottom: 24 }}>
                    {reviewRow(t('co.reviewContact'), fields.email + (fields.phone ? '  ·  ' + fields.phone : ''), 1)}
                    {reviewRow(t('co.reviewShip'), [fields.fullName, fields.institution, fields.street, [fields.city, fields.state, fields.zip].filter(Boolean).join(', ')].filter(Boolean).join(' · '), 2)}
                    {reviewRow(t('co.reviewPay'), PAY_LABELS[payMethod], 3)}
                  </div>

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
              )}
            </div>

            {/* validation message + nav */}
            {tried && step === 1 && !step1Ok && (
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--danger-600, #c0392b)', margin: '14px 2px 0' }}>{t('co.fieldsRequired')}</div>
            )}
            {tried && step === 2 && !step2Ok && (
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--danger-600, #c0392b)', margin: '14px 2px 0' }}>{t('co.fieldsRequired')}</div>
            )}
            {tried && step === 4 && !allChecked && (
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--danger-600, #c0392b)', margin: '14px 2px 0' }}>{t('co.compRequired')}</div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, marginTop: 18 }}>
              {step > 1 ? (
                <button onClick={goBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: 'var(--ink-800)', padding: '10px 4px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                  {t('co.back')}
                </button>
              ) : <span />}
              <div style={{ minWidth: 190 }}>
                <Button variant="primary" size="lg" fullWidth onClick={goNext}>{step === 4 ? t('co.placeOrder') : t('co.continue')}</Button>
              </div>
            </div>
          </div>

          {/* summary */}
          <div className="fsco-summary" style={{ position: 'sticky', top: 88, background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 24 }}>
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
            <div style={{ marginTop: 18 }}><DisclaimerBanner variant="strip" text={t('ruo')} style={{ borderRadius: 'var(--radius-sm)' }} /></div>
            <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: '4px 10px', fontSize: 12, color: 'var(--text-muted)' }}>
              <a onClick={() => onNav('terms')} style={{ color: 'var(--accent-teal)', fontWeight: 600, cursor: 'pointer' }}>{t('co.agreeTerms')}</a>
              <a onClick={() => onNav('privacy')} style={{ color: 'var(--accent-teal)', fontWeight: 600, cursor: 'pointer' }}>{t('co.agreePrivacy')}</a>
              <a onClick={() => onNav('returns')} style={{ color: 'var(--accent-teal)', fontWeight: 600, cursor: 'pointer' }}>{t('co.agreeReturns')}</a>
              <a onClick={() => onNav('ruo')} style={{ color: 'var(--accent-teal)', fontWeight: 600, cursor: 'pointer' }}>{t('foot.ruo')}</a>
            </div>
            <p style={{ marginTop: 12, fontSize: 11.5, lineHeight: 1.55, color: 'var(--text-muted)' }}>{t('co.fraudNote')}</p>
          </div>
        </div>
      </div>

      {placed && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(8, 14, 30, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '38px 34px 30px', maxWidth: 460, width: '100%', textAlign: 'center', boxShadow: '0 40px 100px rgba(0,0,0,.45)' }}>
            <div style={{ width: 58, height: 58, margin: '0 auto 16px', borderRadius: '50%', background: 'var(--gold-50)', border: '2px solid var(--gold-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--gold-700)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, color: 'var(--ink-900)', margin: '0 0 6px' }}>{t('co.placedTitle')}</h2>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: 'var(--gold-700)', marginBottom: 16 }}>{t('co.placedRef')}: {placed}</div>
            {payMethod === 'zelle' ? (
              <div style={{ textAlign: 'left', background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '16px 18px', marginBottom: 18 }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--gold-700)', marginBottom: 12 }}>{t('co.zelleTitle')}</div>
                {[[t('co.zelleAmount'), '$' + total.toFixed(2)], [t('co.zelleTo'), 'FuturisticScienceUSA@gmail.com'], [t('co.zelleMemo'), placed]].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, padding: '5px 0', borderTop: k === t('co.zelleAmount') ? 'none' : '1px solid var(--border-subtle)' }}>
                    <span style={{ fontSize: 12.5, color: 'var(--text-muted)', flex: 'none' }}>{k}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'var(--ink-900)', textAlign: 'right', wordBreak: 'break-all' }}>{v}</span>
                  </div>
                ))}
                <p style={{ fontSize: 12, lineHeight: 1.5, color: 'var(--text-muted)', margin: '12px 0 0' }}>{t('co.zelleNote')}</p>
              </div>
            ) : (
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 22px' }}>{t('co.placedBody')}</p>
            )}
            <Button variant="primary" size="lg" fullWidth onClick={() => onNav('home')}>{t('co.placedBtn')}</Button>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { CheckoutScreen });
