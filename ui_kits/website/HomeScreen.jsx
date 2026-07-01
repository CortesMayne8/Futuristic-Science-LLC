/* HomeScreen — hero, trust band, featured products, proof/COA teaser. */
function HomeScreen({ onNav, onAdd, onOpenProduct }) {
  const { ProductCard, TrustBadges, Button, Badge } = window.FuturisticScienceDesignSystem_2ca7b0;
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const featured = D.products.filter((p) => p.featured).slice(0, 4);
  const trustItems = [
    { icon: 'purity', label: t('trust.purity') }, { icon: 'tested', label: t('trust.tested') },
    { icon: 'coa', label: t('trust.coas') }, { icon: 'accuracy', label: t('trust.accuracy') },
    { icon: 'shipping', label: t('trust.shipping') },
  ];

  return (
    <div>
      {/* ===== HERO ===== */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-page)' }}>
        {/* molecular bg */}
        <svg viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.7 }}>
          <g stroke="#0B1B33" strokeOpacity="0.06" strokeWidth="1">
            <line x1="120" y1="90" x2="300" y2="180"/><line x1="300" y1="180" x2="520" y2="110"/>
            <line x1="900" y1="120" x2="1080" y2="220"/><line x1="1080" y1="220" x2="1160" y2="120"/>
            <line x1="300" y1="180" x2="360" y2="420"/><line x1="900" y1="120" x2="980" y2="400"/>
          </g>
          <g fill="#0B1B33" fillOpacity="0.07">
            <circle cx="120" cy="90" r="5"/><circle cx="300" cy="180" r="7"/><circle cx="520" cy="110" r="4"/>
            <circle cx="900" cy="120" r="6"/><circle cx="1080" cy="220" r="5"/><circle cx="1160" cy="120" r="4"/>
            <circle cx="360" cy="420" r="5"/><circle cx="980" cy="400" r="5"/>
          </g>
          <g fill="#C8A24C" fillOpacity="0.4"><circle cx="520" cy="110" r="3"/><circle cx="980" cy="400" r="3"/></g>
        </svg>

        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 28px', display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 40, alignItems: 'center', minHeight: 520 }}>
          {/* copy */}
          <div style={{ padding: '92px 0' }}>
            <div className="kicker" style={{ marginBottom: 20 }}>{t('hero.badge')}</div>
            <h1 className="display-serif" style={{ fontSize: 52, lineHeight: 1.1, color: 'var(--ink-900)', margin: '0 0 22px' }}>
              <span style={{ whiteSpace: 'nowrap' }}>{t('hero.title1')}</span><br/><span className="text-gold-metallic" style={{ fontStyle: 'italic', fontSize: 38, display: 'inline-block', marginTop: 10 }}>{t('hero.title2')}</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18.5, lineHeight: 1.7, color: 'var(--text-body)', maxWidth: 540, marginBottom: 36 }}>
              {t('hero.sub')}
            </p>
            <div style={{ display: 'flex', gap: 14, marginBottom: 30 }}>
              <Button variant="primary" size="lg" onClick={() => onNav('shop')}
                iconRight={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>}>
                {t('hero.shop')}
              </Button>
              <Button variant="outline" size="lg" onClick={() => onNav('coa')}>{t('hero.viewResults')}</Button>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"/></svg>
              {t('ruo')}
            </p>
          </div>

          {/* floating vials */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px 0' }}>
            <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,162,76,.16) 0%, rgba(200,162,76,0) 68%)' }} />
            <img src={window.R("../../assets/vial-trio-hero-v3.png")} alt="Futuristic Science research peptide vials" className="hero-vial-float" style={{ position: 'relative', height: 360, filter: 'drop-shadow(0 30px 50px rgba(11,27,51,.20))' }} />
          </div>
        </div>
      </section>

      {/* ===== TRUST BAND ===== */}
      <section style={{ background: 'var(--ink-800)', padding: '26px 28px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <TrustBadges variant="ink" items={trustItems} />
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section style={{ background: 'var(--surface-subtle)', padding: '96px 28px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 44 }}>
            <div>
              <div className="kicker" style={{ marginBottom: 14 }}>{t('home.featuredEyebrow')}</div>
              <h2 className="display-serif" style={{ fontSize: 42, color: 'var(--ink-900)', margin: 0 }}>{t('home.featuredTitle')}</h2>
            </div>
            <Button variant="ghost" onClick={() => onNav('shop')}
              iconRight={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>}>
              {t('btn.viewAll')}
            </Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}>
              {featured.map((p) => (
              <ProductCard key={p.id} name={p.name} subtitle={t('sub.' + p.id)} size={p.size} price={p.price}
                purity={p.purity.replace(/\..*/, '') + '%+'} purityLabel={t('word.purity')}
                selectLabel={t('btn.selectOptions')} outOfStockLabel={t('btn.outOfStock')}
                image={window.R(p.image || D.image)} inStock={p.inStock} fromPrice
                badge={p.id === 'glow' ? { tone: 'gold', label: t('badge.bestseller') } : null}
                onSelect={() => onOpenProduct(p.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROOF / COA TEASER ===== */}
      <section style={{ background: 'var(--surface-page)', padding: '96px 28px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'block' }}>
          <div>
            <div className="kicker" style={{ marginBottom: 16 }}>{t('home.proofEyebrow')}</div>
            <h2 className="display-serif" style={{ fontSize: 40, color: 'var(--ink-900)', marginBottom: 20, lineHeight: 1.14 }}>
              {t('home.proofTitle').split('\n').map((ln, i) => <span key={i}>{i > 0 && <br/>}{ln}</span>)}
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', marginBottom: 26, maxWidth: 760 }}>
              {t('home.proofBody')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 30 }}>
              {[
                [t('home.proof1t'), t('home.proof1d')],
                [t('home.proof2t'), t('home.proof2d')],
                [t('home.proof3t'), t('home.proof3d')],
              ].map(([pt, pd]) => (
                <div key={pt} style={{ display: 'flex', gap: 13 }}>
                  <span style={{ flex: 'none', width: 26, height: 26, borderRadius: 'var(--radius-sm)', background: 'var(--teal-50)', color: 'var(--teal-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5 9-11"/></svg>
                  </span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink-900)' }}>{pt}</div>
                    <div style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>{pd}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ink" size="md" onClick={() => onNav('coa')}>{t('home.searchBatches')}</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
