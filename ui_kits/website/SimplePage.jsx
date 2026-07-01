/* SimplePage — About / FAQ / Contact / legal pages (compliance-safe prose). */

/* FaqItem — collapsible question/answer row. Click the question to expand. */
function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{
      background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)', overflow: 'hidden',
      transition: 'border-color var(--dur-fast) var(--ease-out)',
      borderColor: open ? 'var(--gold-300)' : 'var(--border-subtle)',
    }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
          padding: '18px 22px', fontFamily: 'var(--font-display)', fontSize: 16.5, fontWeight: 700,
          color: 'var(--ink-900)', lineHeight: 1.3,
        }}
      >
        <span>{q}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2.4"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ flex: 'none', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform var(--dur-base) var(--ease-out)' }}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div style={{
        display: 'grid', gridTemplateRows: open ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-out)',
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ padding: '0 22px 20px', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)' }}>{a}</div>
        </div>
      </div>
    </div>
  );
}

/* ContactForm — simplified single-column support ticket form. */
function ContactForm() {
  const { Input, Select, Button } = window.FuturisticScienceDesignSystem_2ca7b0;
  window.useLang();
  const t = window.t;
  const [f, setF] = React.useState({ first: '', last: '', email: '', phone: '', subject: '', message: '' });
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const subjectOpts = [{ value: '', label: t('contact.subjectPlaceholder') }, ...t('contact.subjects').map((s) => ({ value: s, label: s }))];
  return (
    <div style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 30, boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Input label={t('contact.firstName')} value={f.first} onChange={set('first')} placeholder="Jane" />
          <Input label={t('contact.lastName')} value={f.last} onChange={set('last')} placeholder="Researcher" />
        </div>
        <Input label={t('contact.email')} type="email" value={f.email} onChange={set('email')} placeholder="you@lab.org" />
        <Input label={t('contact.phone')} type="tel" value={f.phone} onChange={set('phone')} placeholder="(555) 000-0000" />
        <Select label={t('contact.subject')} options={subjectOpts} value={f.subject} onChange={set('subject')} />
        <div>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--ink-800)', marginBottom: 6 }}>{t('contact.message')}</label>
          <textarea rows="5" value={f.message} onChange={set('message')} placeholder={t('contact.msgPlaceholder')} style={{ width: '100%', boxSizing: 'border-box', border: '1.5px solid var(--border-strong)', borderRadius: 'var(--radius-md)', padding: '11px 12px', fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--ink-900)', resize: 'vertical' }} />
        </div>
        <Button variant="primary" size="lg" fullWidth>{t('contact.send')}</Button>
      </div>
    </div>
  );
}

function SimplePage({ page, onNav }) {
  const { DisclaimerBanner, Input, Button, Badge } = window.FuturisticScienceDesignSystem_2ca7b0;
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;

  const Shell = ({ eyebrow, title, children, narrow }) => (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
      <div style={{ maxWidth: narrow ? 720 : 1100, margin: '0 auto', padding: '56px 28px 80px' }}>
        <div className="fs-eyebrow" style={{ marginBottom: 10 }}>{eyebrow}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, color: 'var(--ink-900)', letterSpacing: '-.025em', marginBottom: 28 }}>{title}</h1>
        {children}
      </div>
    </div>
  );
  const Prose = ({ children }) => <div style={{ fontSize: 15.5, lineHeight: 1.75, color: 'var(--text-body)', maxWidth: 680 }}>{children}</div>;
  const H2 = ({ children }) => <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--ink-900)', margin: '28px 0 12px' }}>{children}</h2>;

  if (page === 'about') return (
    <Shell eyebrow={t('about.eyebrow')} title={t('about.title')}>
      <Prose>
        <p style={{ marginBottom: 16 }}><strong>{D.contact.company}</strong> {t('about.p1pre')}<em>{t('about.p1em')}</em>{t('about.p1post')}</p>
        <H2>{t('about.h2a')}</H2>
        <p style={{ marginBottom: 16 }}>{t('about.pa')}</p>
        <H2>{t('about.h2b')}</H2>
        <p>{t('about.pb')}</p>
      </Prose>
      <div style={{ marginTop: 32, maxWidth: 680 }}><DisclaimerBanner variant="ink" text={t('ruo')} /></div>
    </Shell>
  );

  if (page === 'faq') {
    const faqs = t('faq.items');
    return (
      <Shell eyebrow={t('faq.eyebrow')} title={t('faq.title')} narrow>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map(([q, a], i) => <FaqItem key={i} q={q} a={a} defaultOpen={i === 0} />)}
        </div>
        <div style={{ marginTop: 28 }}><DisclaimerBanner variant="inline" text={t('ruo')} /></div>
      </Shell>
    );
  }

  if (page === 'contact') return (
    <Shell eyebrow={t('contact.eyebrow')} title={t('contact.title')} narrow>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        {/* Please note banner */}
        <div style={{ display: 'flex', gap: 13, alignItems: 'flex-start', background: 'var(--gold-50)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-lg)', padding: '16px 18px', marginBottom: 26 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>
            <strong style={{ color: 'var(--ink-900)' }}>{t('contact.noteLabel')}</strong> {t('contact.note')}
          </p>
        </div>

        <ContactForm />

        <p style={{ textAlign: 'center', fontSize: 13.5, color: 'var(--text-muted)', marginTop: 20 }}>
          {t('contact.altPrefix')} <a href={'mailto:' + D.contact.email} style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>{D.contact.email}</a>
        </p>
      </div>
    </Shell>
  );

  if (page === 'account') return (
    <Shell eyebrow={t('acct.eyebrow')} title={t('acct.title')} narrow>
      <div style={{ maxWidth: 380, margin: '0 auto', background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 28 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label={t('contact.email')} type="email" placeholder="you@lab.org" />
          <Input label={t('acct.password')} type="password" placeholder="••••••••" />
          <Button variant="primary" size="lg" fullWidth>{t('acct.signIn')}</Button>
          <div style={{ textAlign: 'center', fontSize: 13.5, color: 'var(--text-muted)' }}>{t('acct.new')} <a href="#" style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>{t('acct.create')}</a></div>
        </div>
      </div>
    </Shell>
  );

  // returns & refunds
  if (page === 'returns') {
    const company = D.contact.company;
    const Card = ({ children, style }) => (
      <div style={{ background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 26, ...style }}>{children}</div>
    );
    const noItems = t('ret.noList');
    return (
      <Shell eyebrow={t('ret.eyebrow')} title={t('ret.title')}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '4px 0 22px', padding: '14px 18px', background: 'var(--gold-50)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-lg)', maxWidth: 760 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-700)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 800, color: 'var(--ink-900)' }}>{t('ret.finalLine')}</span>
        </div>

        <Prose><p style={{ marginBottom: 18, maxWidth: 760 }}>{t('ret.intro')}</p></Prose>

        <Card style={{ margin: '4px 0 8px', maxWidth: 760 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {noItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gray-500)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 2 }}><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>

        <H2>{t('ret.lawTitle')}</H2>
        <Prose><p style={{ marginBottom: 18, maxWidth: 760 }}>{t('ret.lawBody')}</p></Prose>

        <H2>{t('ret.inspectTitle')}</H2>
        <Prose><p style={{ marginBottom: 18, maxWidth: 760 }}>{t('ret.inspectBody')}</p></Prose>

        <H2>{t('ret.commitTitle')}</H2>
        <Prose><p style={{ marginBottom: 8, maxWidth: 760 }}>{t('ret.commitBody').replace('{company}', company)}</p></Prose>

        <div style={{ marginTop: 24, maxWidth: 820 }}><DisclaimerBanner variant="ink" text={t('ret.disclaimer').replace('{company}', company)} /></div>
      </Shell>
    );
  }

  // RUO Policy
  if (page === 'ruo') {
    const company = D.contact.company;
    const sub = (s) => (s || '').split('{company}').join(company);
    const sections = t('ruo.sections');
    const slug = (h) => h.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const jump = (h) => {
      const el = document.getElementById('ruo-' + slug(h));
      const sc = document.getElementById('kit-scroll');
      if (el && sc) sc.scrollTo({ top: sc.scrollTop + el.getBoundingClientRect().top - sc.getBoundingClientRect().top - 80, behavior: 'smooth' });
    };
    return (
      <div style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
        {/* hero band */}
        <div style={{ background: 'var(--ink-900)', color: '#fff', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '52px 28px 44px' }}>
            <div className="fs-eyebrow" style={{ color: 'var(--gold-400)', marginBottom: 12 }}>{t('ruo.eyebrow')}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, letterSpacing: '-.025em', margin: '0 0 16px', maxWidth: 760 }}>{t('ruo.title')}</h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,.72)', maxWidth: 760, margin: 0 }}>{sub(t('ruo.intro'))}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
              {t('ruo.chips').map((c) => (
                <span key={c} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12.5, fontWeight: 700, letterSpacing: '.02em', color: 'rgba(255,255,255,.92)', background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 'var(--radius-pill)', padding: '8px 15px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/></svg>{c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 28px 80px', display: 'grid', gridTemplateColumns: '232px 1fr', gap: 48, alignItems: 'start' }}>
          {/* sticky jump nav */}
          <aside style={{ position: 'sticky', top: 90 }}>
            <div className="fs-eyebrow" style={{ marginBottom: 12 }}>{t('legal.eyebrow')}</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, borderLeft: '1px solid var(--border-subtle)' }}>
              {sections.map(([h]) => (
                <button key={h} onClick={() => jump(h)} style={{ textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-muted)', padding: '7px 0 7px 16px', marginLeft: -1, borderLeft: '2px solid transparent', lineHeight: 1.4 }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink-900)'; e.currentTarget.style.borderLeftColor = 'var(--gold-500)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderLeftColor = 'transparent'; }}
                >{h}</button>
              ))}
            </nav>
            <div style={{ marginTop: 22, background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 16 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink-900)', marginBottom: 5 }}>{t('ruo.needHelp')}</div>
              <a href={'mailto:' + D.contact.email} style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent-teal)', wordBreak: 'break-all' }}>{D.contact.email}</a>
            </div>
          </aside>

          {/* body */}
          <div>
            {/* summary cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 40 }}>
              {t('ruo.summary').map(([h, b], i) => (
                <div key={h} style={{ background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 22 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, marginBottom: 14 }}>{i + 1}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--ink-900)', marginBottom: 6 }}>{h}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{sub(b)}</div>
                </div>
              ))}
            </div>

            {/* sections */}
            {sections.map(([h, items]) => (
              <section key={h} id={'ruo-' + slug(h)} style={{ scrollMarginTop: 90, marginBottom: 36 }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 23, fontWeight: 700, color: 'var(--ink-900)', letterSpacing: '-.01em', margin: '0 0 14px', paddingBottom: 12, borderBottom: '1px solid var(--border-subtle)' }}>{h}</h2>
                {items.map((it, i) => Array.isArray(it) ? (
                  <ul key={i} style={{ listStyle: 'none', margin: '0 0 14px', padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {it.map((li, j) => (
                      <li key={j} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 3 }}><path d="M20 6 9 17l-5-5"/></svg>
                        <span>{sub(li)}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} style={{ fontSize: 15, lineHeight: 1.72, color: 'var(--text-body)', margin: '0 0 14px', maxWidth: 720 }}>{sub(it)}</p>
                ))}
              </section>
            ))}

            <div style={{ marginTop: 8 }}><DisclaimerBanner variant="ink" text={t('ruo')} /></div>
          </div>
        </div>
      </div>
    );
  }

  // legal pages
  const legal = {
    privacy: [t('lp.privacy.title'), t('lp.privacy.sec')],
    terms: [t('lp.terms.title'), t('lp.terms.sec')],
    shipping: [t('lp.shipping.title'), t('lp.shipping.sec')],
  }[page];

  if (legal) {
    const [title, sections] = legal;
    const company = D.contact.company;
    const sub = (s) => (s || '').split('{company}').join(company).split('{email}').join(D.contact.email);
    const introKey = 'lp.' + page + '.intro';
    const intro = t(introKey);
    const hasIntro = intro && intro !== introKey;
    const renderBody = (body, h) => {
      const items = Array.isArray(body) ? body : [body];
      return items.map((it, i) => Array.isArray(it) ? (
        <ul key={i} style={{ listStyle: 'none', margin: '0 0 12px', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {it.map((li, j) => (
            <li key={j} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', lineHeight: 1.6 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 3 }}><path d="M20 6 9 17l-5-5"/></svg>
              <span>{sub(li)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p key={i} style={{ marginBottom: 12 }}>{sub(it)}</p>
      ));
    };
    return (
      <Shell eyebrow={t('legal.eyebrow')} title={title} narrow>
        <Prose>
          {hasIntro && <p style={{ marginBottom: 24, fontSize: 16, color: 'var(--text-body)' }}>{sub(intro)}</p>}
          {sections.map(([h, body]) => (
            <div key={h}><H2>{h}</H2>{renderBody(body, h)}</div>
          ))}
          <p style={{ marginTop: 24, fontSize: 13.5, color: 'var(--text-muted)' }}>{t('legal.questions', { email: D.contact.email, company: D.contact.company })}</p>
        </Prose>
        <div style={{ marginTop: 28 }}><DisclaimerBanner variant="ink" text={t('ruo')} /></div>
      </Shell>
    );
  }

  return <Shell eyebrow="" title={t('page.soon')}><Prose><p>{t('page.soonBody')}</p></Prose></Shell>;
}

Object.assign(window, { SimplePage });
