/* ProductScreen — detail: gallery, info, add-to-cart, lab handling, COA link. */
function ProductScreen({ productId, onAdd, onNav }) {
  const { Button, Badge, QuantityStepper, TrustBadges, DisclaimerBanner } = window.FuturisticScienceDesignSystem_2ca7b0;
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const p = D.products.find((x) => x.id === productId) || D.products[0];
  const pimg = window.R(p.image || D.image);
  const psub = t('sub.' + p.id);
  const trustItems = [
    { icon: 'purity', label: t('trust.purity') }, { icon: 'tested', label: t('trust.tested') },
    { icon: 'accuracy', label: t('trust.accuracy') },
    { icon: 'shipping', label: t('trust.shipping') },
  ];
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('description');
  const [vi, setVi] = React.useState(0);
  const [format, setFormat] = React.useState('vial');
  React.useEffect(() => { setVi(0); setFormat('vial'); setQty(1); }, [productId]);

  const variant = p.variants[vi] || p.variants[0];
  const hasBox = variant.box != null;
  const refs = p.references || [
    { source: 'PubChem', title: p.name + ' — Compound Summary', url: 'https://pubchem.ncbi.nlm.nih.gov/#query=' + encodeURIComponent(p.name) },
    { source: 'PubMed', title: p.name + ' Research Literature', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=' + encodeURIComponent(p.name) },
  ];
  const effFormat = hasBox ? format : 'vial';
  const unit = effFormat === 'box' ? variant.box : variant.vial;
  const addItem = () => onAdd({
    id: `${p.id}-${variant.strength}-${effFormat}`,
    name: p.name, subtitle: psub,
    size: `${variant.strength} · ${effFormat === 'box' ? t('pd.boxOf10') : t('pd.singleVial')}`,
    price: unit, image: pimg,
  }, qty);

  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '28px 28px 80px' }}>
        {/* breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-muted)', marginBottom: 28 }}>
          <button onClick={() => onNav('shop')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-teal)', fontWeight: 600, fontFamily: 'var(--font-body)', fontSize: 13, padding: 0 }}>{t('nav.shop')}</button>
          <span>/</span><span style={{ color: 'var(--ink-800)', fontWeight: 600 }}>{p.name}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          {/* gallery */}
          <div style={{ position: 'sticky', top: 24 }}>
            <div style={{ background: 'linear-gradient(170deg,#FFFFFF,#F2F4F7)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 16, left: 16 }}><Badge tone="gold" variant="soft">{p.purity} {t('word.purity')}</Badge></div>
              <img src={pimg} alt={p.name} style={{ height: '78%', filter: 'drop-shadow(0 24px 36px rgba(11,27,51,.16))' }} />
            </div>
          </div>

          {/* info */}
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
              <Badge tone="teal" variant="soft">{t('badge.coaVerified')}</Badge>
              {p.inStock ? <Badge tone="success">{t('pd.inStock')}</Badge> : <Badge tone="danger" variant="soft">{t('pd.outOfStock')}</Badge>}
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, color: 'var(--ink-900)', letterSpacing: '-.025em', marginBottom: 6 }}>{p.name}</h1>
            <div style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 20 }}>{psub} · {p.size}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 24 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 32, fontWeight: 600, color: 'var(--ink-900)' }}>${unit.toFixed(2)}</span>
              <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{effFormat === 'box' ? t('pd.perBox') : t('pd.perVial')}</span>
            </div>

            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-body)', marginBottom: 22, maxWidth: 460 }}>{t('blurb.' + p.id)}</p>

            {/* strength selector */}
            <div style={{ marginBottom: 18, maxWidth: 460 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--gray-500)', marginBottom: 10 }}>{t('pd.strength')}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.variants.map((vr, i) => (
                  <button key={vr.strength} onClick={() => setVi(i)} style={{
                    fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, cursor: 'pointer',
                    padding: '9px 16px', borderRadius: 'var(--radius-md)',
                    background: i === vi ? 'var(--gold-50)' : 'var(--white)',
                    color: i === vi ? 'var(--gold-700)' : 'var(--ink-800)',
                    border: i === vi ? '1.5px solid var(--gold-500)' : '1.5px solid var(--border-strong)',
                    boxShadow: i === vi ? '0 0 0 3px var(--ring)' : 'none',
                  }}>{vr.strength}</button>
                ))}
              </div>
            </div>

            {/* format: vial vs box */}
            <div style={{ marginBottom: 22, maxWidth: 460 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--gray-500)', marginBottom: 10 }}>{t('pd.purchaseOption')}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { key: 'vial', label: t('pd.singleVial'), price: variant.vial, disabled: false },
                  { key: 'box', label: t('pd.boxOf10'), price: variant.box, disabled: !hasBox },
                ].map((opt) => {
                  const active = effFormat === opt.key;
                  const save = opt.key === 'box' && hasBox ? Math.round((1 - variant.box / (variant.vial * 10)) * 100) : 0;
                  return (
                    <button key={opt.key} disabled={opt.disabled} onClick={() => setFormat(opt.key)} style={{
                      textAlign: 'left', cursor: opt.disabled ? 'not-allowed' : 'pointer', position: 'relative',
                      padding: '13px 15px', borderRadius: 'var(--radius-md)', opacity: opt.disabled ? 0.45 : 1,
                      background: active ? 'var(--gold-50)' : 'var(--white)',
                      border: active ? '1.5px solid var(--gold-500)' : '1.5px solid var(--border-strong)',
                      boxShadow: active ? '0 0 0 3px var(--ring)' : 'none',
                    }}>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 700, color: 'var(--ink-900)', marginBottom: 3 }}>{opt.label}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600, color: active ? 'var(--gold-700)' : 'var(--ink-800)' }}>
                        {opt.disabled ? '—' : `$${opt.price.toFixed(2)}`}
                      </div>
                      {save > 0 && <span style={{ position: 'absolute', top: 11, right: 12, fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 800, letterSpacing: '.04em', color: 'var(--teal-600)', background: 'var(--teal-50)', borderRadius: 'var(--radius-pill)', padding: '2px 7px' }}>{t('pd.save')} {save}%</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* add to cart */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
              <QuantityStepper value={qty} onChange={setQty} />
              <Button variant="primary" size="lg" disabled={!p.inStock} onClick={addItem} style={{ flex: 1 }}>
                {p.inStock ? `${t('btn.addToCart')} · $${(unit * qty).toFixed(2)}` : t('pd.outOfStock')}
              </Button>
            </div>
            <button onClick={() => onNav('coa')} style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--accent-teal)', padding: 0, marginBottom: 24 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
              {t('pd.viewCoa', { b: p.batch })}
            </button>

            <DisclaimerBanner variant="inline" text={t('ruo')} detail={t('pd.ruoDetail')} />
          </div>
        </div>

        {/* tabs */}
        <div style={{ marginTop: 56, maxWidth: 820 }}>
          <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border-subtle)', marginBottom: 24 }}>
            {[['description', t('pd.tabDesc')], ['handling', t('pd.tabHandling')], ['shipping', t('pd.tabShipping')]].map(([id, label]) => (
              <button key={id} onClick={() => setTab(id)} style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: '12px 16px', fontFamily: 'var(--font-body)',
                fontSize: 14.5, fontWeight: 700, color: tab === id ? 'var(--ink-900)' : 'var(--gray-500)',
                borderBottom: tab === id ? '2px solid var(--gold-500)' : '2px solid transparent', marginBottom: -1,
              }}>{label}</button>
            ))}
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-body)' }}>
            {tab === 'description' && <p>{p.name} ({psub}) {t('pd.descTail')}</p>}
            {tab === 'handling' && <div>
              {t('pd.handling').split('\n').map((ln, i) => <p key={i} style={{ marginBottom: i === 0 ? 12 : 0 }}>{ln}</p>)}
            </div>}
            {tab === 'shipping' && <p>{t('pd.shipping')}</p>}
          </div>
        </div>

        {/* trust strip */}
        <div style={{ marginTop: 48, padding: '28px', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-xl)' }}>
          <TrustBadges items={trustItems} />
        </div>

        {/* ===== Important Research Notice ===== */}
        <div style={{ marginTop: 56, background: 'var(--gold-50)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-xl)', padding: '30px 34px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
            <span className="fs-eyebrow" style={{ color: 'var(--gold-700)', margin: 0 }}>{t('irn.title')}</span>
          </div>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 14px' }}>
            <strong style={{ color: 'var(--ink-900)' }}>{t('irn.lead')}</strong>{t('irn.lead2')}
          </p>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 14px' }}>{t('irn.p2')}</p>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>{t('irn.p3')}</p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ProductScreen });
