/* ShopScreen — filters sidebar + product grid. */
function ReconCalculator() {
  const t = window.t;
  const [pep, setPep] = React.useState('10');
  const [water, setWater] = React.useState('2');
  const [dose, setDose] = React.useState('250');
  const [doseUnit, setDoseUnit] = React.useState('mcg'); // 'mcg' | 'mg'
  const [syringe, setSyringe] = React.useState('100'); // U-100 (1mL) | 50 (0.5mL) | 30 (0.3mL)

  const pepN = parseFloat(pep), waterN = parseFloat(water), doseN = parseFloat(dose), synN = parseFloat(syringe);
  const doseMcg = doseUnit === 'mg' ? doseN * 1000 : doseN; // normalize target to mcg
  const valid = pepN > 0 && waterN > 0 && doseN > 0;
  let res = null, overfill = false;
  if (valid) {
    const concMgPerMl = pepN / waterN;            // mg/mL
    const concMcgPerMl = concMgPerMl * 1000;       // mcg/mL
    const drawMl = doseMcg / concMcgPerMl;          // mL to draw
    const units = drawMl * 100;                    // insulin units (U-100: 1mL = 100u)
    const dosesPerVial = (pepN * 1000) / doseMcg;   // number of target amounts in the vial
    overfill = units > synN;
    res = {
      conc: concMgPerMl, concMcg: concMcgPerMl, drawMl, units, dosesPerVial,
    };
  }

  const syringes = [
    { v: '30', label: 'U-100 · 0.3 mL' },
    { v: '50', label: 'U-100 · 0.5 mL' },
    { v: '100', label: 'U-100 · 1.0 mL' },
  ];

  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toLocaleString(undefined, { maximumFractionDigits: d }) : '—');

  const field = (label, unit, value, onChange) => (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 700, color: 'var(--ink-800)', marginBottom: 7 }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'stretch', border: '1.5px solid var(--border-strong)', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--white)' }}>
        <input type="number" inputMode="decimal" min="0" value={value} onChange={(e) => onChange(e.target.value)}
          style={{ flex: 1, minWidth: 0, height: 46, padding: '0 14px', border: 'none', outline: 'none', fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--ink-900)', background: 'transparent' }} />
        <span style={{ display: 'flex', alignItems: 'center', padding: '0 14px', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--gray-500)', background: 'var(--gray-100)', borderLeft: '1px solid var(--border-subtle)' }}>{unit}</span>
      </div>
    </label>
  );

  const doseField = (
    <div style={{ display: 'block' }}>
      <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 700, color: 'var(--ink-800)', marginBottom: 7 }}>{t('recon.doseLabel')}</span>
      <div style={{ display: 'flex', alignItems: 'stretch', border: '1.5px solid var(--border-strong)', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--white)' }}>
        <input type="number" inputMode="decimal" min="0" value={dose} onChange={(e) => setDose(e.target.value)}
          style={{ flex: 1, minWidth: 0, height: 46, padding: '0 14px', border: 'none', outline: 'none', fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--ink-900)', background: 'transparent' }} />
        <div style={{ display: 'flex', flex: 'none', borderLeft: '1px solid var(--border-subtle)' }}>
          {['mcg', 'mg'].map((u) => {
            const on = doseUnit === u;
            return (
              <button key={u} type="button" onClick={() => setDoseUnit(u)} style={{
                cursor: 'pointer', border: 'none', padding: '0 13px', fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: on ? 700 : 600,
                backgroundColor: on ? '#0B1B33' : '#EEF1F4', color: on ? '#FFFFFF' : '#6B7686',
                borderLeft: u === 'mg' ? '1px solid var(--border-subtle)' : 'none',
              }}>{u}</button>
            );
          })}
        </div>
      </div>
    </div>
  );

  const stat = (label, value, sub, highlight) => (
    <div style={{ background: highlight ? 'var(--ink-900)' : 'var(--surface-subtle)', border: highlight ? 'none' : '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '18px 20px' }}>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: highlight ? 'var(--gold-400)' : 'var(--gray-500)', marginBottom: 8 }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: highlight ? '#fff' : 'var(--ink-900)', lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: highlight ? 'rgba(255,255,255,.6)' : 'var(--text-muted)', marginTop: 6 }}>{sub}</div>}
    </div>
  );

  return (
    <div style={{ marginTop: 56, scrollMarginTop: 80 }} id="recon">
      <div style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ padding: '26px 28px 22px', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="fs-eyebrow" style={{ marginBottom: 8 }}>{t('recon.eyebrow')}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: 'var(--ink-900)', letterSpacing: '-.02em', margin: '0 0 8px' }}>{t('recon.title')}</h2>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0, maxWidth: 620 }}>{t('recon.sub')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {/* inputs */}
          <div style={{ padding: '26px 28px', display: 'flex', flexDirection: 'column', gap: 18, borderRight: '1px solid var(--border-subtle)' }}>
            {field(t('recon.pepLabel'), t('recon.pepUnit'), pep, setPep)}
            {field(t('recon.waterLabel'), t('recon.waterUnit'), water, setWater)}
            {doseField}
            <div>
              <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 700, color: 'var(--ink-800)', marginBottom: 7 }}>{t('recon.syringeLabel')}</span>
              <div style={{ display: 'flex', gap: 8 }}>
                {syringes.map((s) => {
                  const on = syringe === s.v;
                  return (
                    <button key={s.v} onClick={() => setSyringe(s.v)} style={{
                      flex: 1, cursor: 'pointer', padding: '10px 6px', borderRadius: 'var(--radius-md)',
                      border: '1.5px solid ' + (on ? 'var(--ink-900)' : 'var(--border-subtle)'),
                      background: on ? 'var(--ink-900)' : 'var(--gray-50)', color: on ? '#fff' : 'var(--ink-800)',
                      fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: on ? 700 : 600,
                      transition: 'all var(--dur-fast) var(--ease-out)',
                    }}>{s.label}</button>
                  );
                })}
              </div>
            </div>
          </div>
          {/* results */}
          <div style={{ padding: '26px 28px', background: 'var(--surface-page)' }}>
            {!valid && (
              <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: 14, color: 'var(--text-muted)' }}>{t('recon.invalid')}</div>
            )}
            {valid && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {stat(t('recon.resDraw'), fmt(res.units, 1) + ' ' + t('recon.units'), fmt(res.drawMl, 3) + ' mL', true)}
                {stat(t('recon.resConc'), fmt(res.concMcg, 0), 'mcg ' + t('recon.perMl'))}
                {stat(t('recon.resDoses'), fmt(res.dosesPerVial, 1), doseUnit)}
                {stat(t('recon.resConc') + ' (mg)', fmt(res.conc, 2), 'mg ' + t('recon.perMl'))}
                {overfill && (
                  <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 9, alignItems: 'flex-start', background: 'var(--gold-50)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-md)', padding: '12px 14px', fontSize: 12.5, lineHeight: 1.5, color: 'var(--gold-800, #7a5a17)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 1 }}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                    <span>{t('recon.overfill')}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div style={{ padding: '14px 28px', background: 'var(--ink-900)', fontSize: 11.5, lineHeight: 1.55, color: 'rgba(255,255,255,.7)' }}>{t('recon.disclaimer')}</div>
      </div>
    </div>
  );
}

function ShopScreen({ onOpenProduct }) {
  const { ProductCard, Select, DisclaimerBanner, Badge } = window.FuturisticScienceDesignSystem_2ca7b0;
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const catLabel = (c) => t('cat.' + c);
  const [cat, setCat] = React.useState(null);
  const [sort, setSort] = React.useState('popular');
  const [sortOpen, setSortOpen] = React.useState(false);
  const sortRef = React.useRef(null);
  React.useEffect(() => {
    const close = (e) => { if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);
  const sortOpts = [
    { value: 'popular', label: t('shop.sortPopular') },
    { value: 'az', label: t('shop.sortAZ') },
    { value: 'za', label: t('shop.sortZA') },
    { value: 'plh', label: t('shop.sortPLH') },
    { value: 'phl', label: t('shop.sortPHL') },
    { value: 'newest', label: t('shop.sortNewest') },
  ];
  const sortLabel = (sortOpts.find((o) => o.value === sort) || sortOpts[0]).label;
  let list = D.products.filter((p) => (!cat || p.category === cat));
  if (sort === 'plh') list = [...list].sort((a, b) => a.price - b.price);
  if (sort === 'phl') list = [...list].sort((a, b) => b.price - a.price);
  if (sort === 'az') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  if (sort === 'za') list = [...list].sort((a, b) => b.name.localeCompare(a.name));
  if (sort === 'newest') list = [...list].sort((a, b) => (b.batch || '').localeCompare(a.batch || ''));
  if (sort === 'popular') list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <div style={{ background: 'var(--surface-subtle)', minHeight: '100%' }}>
      {/* page header */}
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 28px 36px' }}>
          <div className="fs-eyebrow" style={{ marginBottom: 10 }}>{t('shop.eyebrow')}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, color: 'var(--ink-900)', letterSpacing: '-.025em', marginBottom: 12 }}>{t('shop.title')}</h1>
        </div>
      </div>

      {/* research-category chip bar */}
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 28px', display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: 7, overflowX: 'auto' }}>
          {D.categories.map((c) => {
            const active = cat === c;
            return (
              <button key={c} onClick={() => setCat(active ? null : c)} style={{
                fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: active ? 700 : 600,
                cursor: 'pointer', padding: '7px 13px', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap',
                border: '1.5px solid ' + (active ? 'var(--ink-900)' : 'var(--border-subtle)'),
                background: active ? 'var(--ink-900)' : 'var(--gray-50)',
                color: active ? '#fff' : 'var(--ink-800)', flex: 'none',
                transition: 'all var(--dur-fast) var(--ease-out)',
              }}>{catLabel(c)}</button>
            );
          })}
          <button onClick={() => setCat(null)} disabled={!cat} style={{
            fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 600, whiteSpace: 'nowrap', flex: 'none',
            cursor: cat ? 'pointer' : 'default', padding: '7px 10px', border: 'none', background: 'none',
            color: cat ? 'var(--accent-teal)' : 'var(--text-faint)', marginLeft: 2,
          }}>{t('shop.clearFilter')}</button>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '28px 28px 80px' }}>
        {/* grid */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, gap: 16 }}>
            <span style={{ fontSize: 14, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--ink-900)' }}>{list.length}</strong> {t('shop.products')}</span>
            <div ref={sortRef} style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative' }}>
              <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink-800)', whiteSpace: 'nowrap' }}>{t('shop.sortBy')}</span>
              <button onClick={() => setSortOpen((v) => !v)} style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, minWidth: 200,
                height: 44, padding: '0 14px', cursor: 'pointer', background: 'var(--white)',
                border: '1.5px solid ' + (sortOpen ? 'var(--gold-500)' : 'var(--border-strong)'),
                borderRadius: 'var(--radius-md)', boxShadow: sortOpen ? '0 0 0 3px var(--ring)' : 'none',
                fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--ink-900)',
                transition: 'all var(--dur-fast) var(--ease-out)',
              }}>
                <span>{sortLabel}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gray-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', transform: sortOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-fast) var(--ease-out)' }}><path d="m6 9 6 6 6-6" /></svg>
              </button>
              {sortOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 6px)', right: 0, minWidth: 220, zIndex: 30,
                  background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)', overflow: 'hidden', padding: 4,
                }}>
                  {sortOpts.map((o) => {
                    const active = o.value === sort;
                    return (
                      <button key={o.value} onClick={() => { setSort(o.value); setSortOpen(false); }} style={{
                        display: 'block', width: '100%', textAlign: 'left', cursor: 'pointer',
                        padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: 'none',
                        fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: active ? 700 : 500,
                        background: active ? 'var(--ink-900)' : 'transparent',
                        color: active ? '#fff' : 'var(--ink-800)',
                        transition: 'background var(--dur-fast) var(--ease-out)',
                      }}
                        onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'var(--gray-50)'; }}
                        onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                      >{o.label}</button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
            {list.map((p) => (
              <ProductCard key={p.id} name={p.name} subtitle={t('sub.' + p.id)} size={p.size} price={p.price}
                purity={p.purity.replace(/\..*/, '') + '%+'} purityLabel={t('word.purity')}
                selectLabel={t('btn.selectOptions')} outOfStockLabel={t('btn.outOfStock')}
                image={window.R(p.image || D.image)} inStock={p.inStock} fromPrice
                badge={p.featured ? { tone: 'gold', label: t('badge.featured') } : null}
                onSelect={() => onOpenProduct(p.id)} />
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <DisclaimerBanner variant="ink" text={t('ruo')} detail={t('ruo.detail')} />
          </div>
          <ReconCalculator />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ShopScreen });
