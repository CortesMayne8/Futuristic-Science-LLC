/* COAScreen — COA Library: batch search + per-peptide accordions of certificates. */
function COAScreen() {
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;

  // Build certificate rows per product (one per strength variant), from the product's compound code.
  const certsFor = (p) => {
    const code = p.batch.split('-')[3]; // e.g. RETA
    return p.variants.map((v, i) => {
      const mg = v.strength.replace(/mg/gi, '').replace(/ml/gi, '').replace(/\s+/g, ''); // strength digits, no unit
      return {
        batch: `FUTURE-CN-MARK-${code}-0726-${mg}`,
        strength: v.strength, purity: p.purity, year: (p.batch.match(/20\d\d/) || ['2024'])[0],
      };
    });
  };

  const str = D.products.filter((p) => p.category === 'Metabolic Research');
  const others = D.products.filter((p) => p.category !== 'Metabolic Research')
    .sort((a, b) => a.name.localeCompare(b.name));

  const [open, setOpen] = React.useState({});
  const [query, setQuery] = React.useState('');
  const [searched, setSearched] = React.useState('');

  const matches = (p) => {
    if (!searched) return true;
    const q = searched.toLowerCase();
    return p.name.toLowerCase().includes(q) || certsFor(p).some((c) => c.batch.toLowerCase().includes(q));
  };
  const runSearch = () => {
    const q = query.trim();
    setSearched(q);
    if (!q) { setOpen({}); return; }
    const next = {};
    D.products.forEach((p) => {
      const ql = q.toLowerCase();
      if (p.name.toLowerCase().includes(ql) || certsFor(p).some((c) => c.batch.toLowerCase().includes(ql))) next[p.id] = true;
    });
    setOpen(next);
  };

  const Row = ({ p }) => {
    const isOpen = !!open[p.id];
    const certs = certsFor(p);
    return (
      <div style={{ marginBottom: 10 }}>
        <button
          onClick={() => setOpen((o) => ({ ...o, [p.id]: !o[p.id] }))}
          aria-expanded={isOpen}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
            background: isOpen ? 'var(--white)' : 'var(--gray-100)',
            border: '1px solid ' + (isOpen ? 'var(--gold-300)' : 'transparent'),
            borderRadius: 14, padding: '15px 20px', textAlign: 'left',
            transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2" style={{ flex: 'none' }}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" fill="var(--gold-600)" stroke="none" />
          </svg>
          <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, color: 'var(--ink-900)' }}>{p.name}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)' }}>{certs.length} {certs.length === 1 ? 'COA' : 'COAs'}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gray-500)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
            style={{ flex: 'none', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}>
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows var(--dur-base) var(--ease-out)' }}>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ padding: '12px 8px 6px' }}>
              <div style={{ background: 'var(--surface-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                {certs.map((c, i) => {
                  const hit = searched && c.batch.toLowerCase().includes(searched.toLowerCase());
                  return (
                    <div key={c.batch} style={{
                      display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap',
                      padding: '13px 18px', borderBottom: i < certs.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                      background: hit ? 'var(--gold-50)' : 'transparent',
                    }}>
                      <div style={{ flex: '1 1 200px', minWidth: 0 }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: 'var(--ink-900)' }}>{c.batch}</div>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 600, color: 'var(--ink-800)', background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-pill)', padding: '4px 11px' }}>{c.strength}</span>
                      <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 700, color: 'var(--accent-teal)' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
                        {t('coal.viewCoa')}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SectionHead = ({ children }) => (
    <div style={{ margin: '40px 0 20px' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: 'var(--ink-900)', textAlign: 'center', letterSpacing: '-.01em', margin: '0 0 14px' }}>{children}</h2>
      <div style={{ height: 1, background: 'var(--border-subtle)' }} />
    </div>
  );

  const visibleStr = str.filter(matches);
  const visibleOthers = others.filter(matches);
  const nothing = searched && visibleStr.length === 0 && visibleOthers.length === 0;

  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
      {/* gold hero */}
      <div style={{ background: 'linear-gradient(180deg, var(--gold-300) 0%, var(--gold-500) 100%)', position: 'relative' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '52px 28px 40px' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 42, fontWeight: 900, color: 'var(--ink-900)', textAlign: 'center', letterSpacing: '-.02em', margin: 0, textWrap: 'balance' }}>{t('coal.title')}</h1>
        </div>
        <div style={{ height: 1, background: 'rgba(11,27,51,.16)', maxWidth: 1100, margin: '0 auto' }} />
        <div style={{ height: 18 }} />
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '36px 28px 80px' }}>
        {/* search */}
        <div style={{ maxWidth: 760 }}>
          <label htmlFor="coa-batch" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 700, color: 'var(--ink-900)', marginBottom: 8 }}>{t('coal.searchLabel')}</label>
          <input id="coa-batch" value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') runSearch(); }}
            placeholder={t('coal.placeholder')}
            style={{ width: '100%', boxSizing: 'border-box', height: 48, padding: '0 16px', fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--ink-900)', background: 'var(--gray-100)', border: '1.5px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
            <button onClick={runSearch} style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, cursor: 'pointer', color: 'var(--ink-900)', background: 'var(--white)', border: '1.5px solid var(--border-strong)', borderRadius: 'var(--radius-pill)', padding: '9px 22px' }}>{t('coal.find')}</button>
            {searched && <button onClick={() => { setQuery(''); setSearched(''); setOpen({}); }} style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', color: 'var(--accent-teal)', background: 'none', border: 'none', padding: 0 }}>{t('coal.clear')}</button>}
          </div>
        </div>

        {nothing ? (
          <div style={{ marginTop: 36, padding: '28px', background: 'var(--gray-100)', borderRadius: 'var(--radius-lg)', textAlign: 'center', fontSize: 14.5, color: 'var(--text-body)' }}>
            {t('coal.noMatch', { q: searched, email: D.contact.email })}
          </div>
        ) : (
          <React.Fragment>
            {visibleStr.length > 0 && <React.Fragment>
              <SectionHead>{t('coal.str')}</SectionHead>
              {visibleStr.map((p) => <Row key={p.id} p={p} />)}
            </React.Fragment>}
            {visibleOthers.length > 0 && <React.Fragment>
              <SectionHead>{t('coal.others')}</SectionHead>
              {visibleOthers.map((p) => <Row key={p.id} p={p} />)}
            </React.Fragment>}
          </React.Fragment>
        )}

        <p style={{ marginTop: 36, fontSize: 13, color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6 }}>
          {t('coap.cantFind', { email: D.contact.email })}<br/>
          {t('ruo')}
        </p>
      </div>
    </div>
  );
}

Object.assign(window, { COAScreen });
