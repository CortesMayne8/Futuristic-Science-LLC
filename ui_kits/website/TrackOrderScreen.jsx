/* TrackOrderScreen — enter a tracking number, detect the carrier, and show
   the latest scan + a status timeline. Demo: status is derived deterministically
   from the number so the same input always shows the same result. Wire to your
   carrier/WooCommerce shipping API to make it live. */
function TrackOrderScreen() {
  const { Button } = window.FuturisticScienceDesignSystem_2ca7b0;
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const [num, setNum] = React.useState('');
  const [result, setResult] = React.useState(null); // null | {error} | {carrier,...}

  const detectCarrier = (raw) => {
    const s = raw.replace(/\s+/g, '');
    if (/^1Z[0-9A-Z]{16}$/i.test(s)) return { name: 'UPS', url: 'https://www.ups.com/track?tracknum=' + s };
    const digits = s.replace(/\D/g, '');
    if (digits.length === 12 || digits.length === 15) return { name: 'FedEx', url: 'https://www.fedex.com/fedextrack/?trknbr=' + digits };
    if (digits.length === 22 || digits.length === 20 || /^(94|93|92|95|420)/.test(digits)) return { name: 'USPS', url: 'https://tools.usps.com/go/TrackConfirmAction?tLabels=' + digits };
    if (digits.length === 10) return { name: 'DHL', url: 'https://www.dhl.com/us-en/home/tracking.html?tracking-id=' + digits };
    return null;
  };

  const hash = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };
  const fmtDate = (d) => d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });

  // Status stages, newest first. Index 0 = label only … 4 = delivered.
  const buildTimeline = (stage) => {
    const now = Date.now(), day = 86400000;
    const all = [
      { key: 'label', st: 'st.label', ev: 'ev.label', t: now - 5 * day },
      { key: 'accepted', st: 'st.accepted', ev: 'ev.accepted', t: now - 4 * day },
      { key: 'departed', st: 'st.transit', ev: 'ev.departed', t: now - 3 * day },
      { key: 'arrived', st: 'st.transit', ev: 'ev.arrived', t: now - 1 * day },
      { key: 'out', st: 'st.out', ev: 'ev.out', t: now - 0.2 * day },
      { key: 'delivered', st: 'st.delivered', ev: 'ev.delivered', t: now },
    ];
    return all.slice(0, stage + 1);
  };

  const run = () => {
    const carrier = detectCarrier(num);
    if (!carrier || num.replace(/\s+/g, '').length < 8) { setResult({ error: true }); return; }
    const h = hash(num.replace(/\s+/g, ''));
    const stage = 2 + (h % 4); // 2..5  → in transit … delivered
    const events = buildTimeline(stage);
    const latest = events[events.length - 1];
    const day = 86400000;
    const eta = new Date(Date.now() + (stage >= 5 ? 0 : (5 - stage)) * day);
    setResult({ carrier, events: events.slice().reverse(), latest, eta, delivered: stage >= 5 });
  };

  const clear = () => { setNum(''); setResult(null); };

  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
      {/* gold hero */}
      <div style={{ background: 'linear-gradient(180deg, var(--gold-300) 0%, var(--gold-500) 100%)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 28px 36px', textAlign: 'center' }}>
          <div className="fs-eyebrow" style={{ color: 'var(--ink-800)', marginBottom: 10 }}>{t('track.eyebrow')}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 900, color: 'var(--ink-900)', letterSpacing: '-.02em', margin: '0 0 10px' }}>{t('track.title')}</h1>
          <p style={{ fontSize: 15.5, color: 'var(--ink-800)', margin: 0, opacity: 0.85 }}>{t('track.sub')}</p>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '36px 28px 80px' }}>
        {/* search */}
        <div style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 24, boxShadow: 'var(--shadow-sm)' }}>
          <label htmlFor="trk" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 700, color: 'var(--ink-900)', marginBottom: 8 }}>{t('track.label')}</label>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <input id="trk" value={num}
              onChange={(e) => setNum(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') run(); }}
              placeholder={t('track.ph')}
              style={{ flex: '1 1 280px', boxSizing: 'border-box', height: 50, padding: '0 16px', fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--ink-900)', background: 'var(--gray-100)', border: '1.5px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }} />
            <Button variant="primary" size="lg" onClick={run}>{t('track.btn')}</Button>
          </div>
          {result && (
            <button onClick={clear} style={{ marginTop: 12, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 600, color: 'var(--accent-teal)', padding: 0 }}>{t('track.clear')}</button>
          )}
        </div>

        {/* empty */}
        {!result && (
          <p style={{ marginTop: 28, textAlign: 'center', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{t('track.empty')}</p>
        )}

        {/* not found */}
        {result && result.error && (
          <div style={{ marginTop: 24, background: 'var(--gray-100)', borderRadius: 'var(--radius-lg)', padding: '24px', textAlign: 'center', fontSize: 14.5, color: 'var(--text-body)', lineHeight: 1.6 }}>
            {t('track.notFound', { email: D.contact.email })}
          </div>
        )}

        {/* result */}
        {result && !result.error && (
          <div style={{ marginTop: 24 }}>
            {/* status banner */}
            <div style={{ background: result.delivered ? 'var(--teal-600, #1f8a5b)' : 'var(--ink-900)', color: '#fff', borderRadius: 'var(--radius-xl)', padding: '24px 26px', display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
              <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'rgba(255,255,255,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                {result.delivered
                  ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>}
              </div>
              <div style={{ flex: 1, minWidth: 160 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: result.delivered ? 'rgba(255,255,255,.85)' : 'var(--gold-400)', marginBottom: 4 }}>{t('track.statusLabel')}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800 }}>{t('track.' + result.latest.st)}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.7)', marginBottom: 4 }}>{t('track.estimate')}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 700 }}>{fmtDate(result.eta)}</div>
              </div>
            </div>

            {/* carrier row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap', background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '16px 20px', marginTop: 14 }}>
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--gray-500)', marginBottom: 3 }}>{t('track.carrier')}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--ink-900)' }}>{result.carrier.name}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--gray-500)', marginBottom: 3 }}>{t('track.label')}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--ink-900)' }}>{num.trim()}</div>
                </div>
              </div>
              <a href={result.carrier.url} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 700, color: 'var(--accent-teal)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                {t('track.viewCarrier')}
              </a>
            </div>

            {/* timeline */}
            <div style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '8px 22px', marginTop: 14 }}>
              {result.events.map((ev, i) => {
                const isLatest = i === 0;
                return (
                  <div key={ev.key} style={{ display: 'flex', gap: 16, padding: '16px 0', borderBottom: i < result.events.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
                      <div style={{ width: 14, height: 14, borderRadius: '50%', background: isLatest ? 'var(--gold-500)' : 'var(--gray-300, #cbd2dc)', border: isLatest ? '3px solid var(--gold-200)' : 'none' }} />
                      {i < result.events.length - 1 && <div style={{ flex: 1, width: 2, background: 'var(--border-subtle)', marginTop: 4 }} />}
                    </div>
                    <div style={{ flex: 1, paddingBottom: 2 }}>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: isLatest ? 700 : 600, color: isLatest ? 'var(--ink-900)' : 'var(--text-body)' }}>{t('track.' + ev.ev)}</div>
                      <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 3 }}>{new Date(ev.t).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</div>
                    </div>
                    {isLatest && <span style={{ flex: 'none', alignSelf: 'flex-start', fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--gold-700)', background: 'var(--gold-50)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-pill)', padding: '4px 10px' }}>{t('track.' + ev.st)}</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <p style={{ marginTop: 28, fontSize: 13, color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6 }}>{t('track.help', { email: D.contact.email })}</p>
      </div>
    </div>
  );
}

Object.assign(window, { TrackOrderScreen });
