/* CartDrawer — slide-in cart with line items, qty steppers, subtotal, checkout. */
function CartDrawer({ open, items, onClose, onQty, onRemove, onCheckout }) {
  const { QuantityStepper, Button, DisclaimerBanner } = window.FuturisticScienceDesignSystem_2ca7b0;
  window.useLang();
  const t = window.t;
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const count = items.reduce((s, it) => s + it.qty, 0);

  return (
    <>
      {/* Scrim */}
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0, zIndex: 60, background: 'rgba(8,17,31,.45)',
        backdropFilter: 'blur(2px)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity var(--dur-base) var(--ease-out)',
      }} />
      {/* Panel */}
      <aside style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, zIndex: 61, width: 'min(420px, 92%)',
        background: 'var(--white)', boxShadow: '-20px 0 60px rgba(8,17,31,.25)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform var(--dur-slow) var(--ease-out)',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 22px', borderBottom: '1px solid var(--border-subtle)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--ink-900)' }}>
            {t('cart.title')} <span style={{ color: 'var(--gray-400)', fontWeight: 600 }}>({count})</span>
          </h2>
          <button onClick={onClose} aria-label={t('aria.close')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gray-500)', padding: 4 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 22px' }}>
          {items.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink-800)', marginBottom: 6 }}>{t('cart.emptyTitle')}</div>
              <div style={{ fontSize: 13.5 }}>{t('cart.emptyDesc')}</div>
            </div>
          )}
          {items.map((it) => (
            <div key={it.id} style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ width: 64, height: 64, flex: 'none', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src={window.R(it.image || window.FS_DATA.image)} alt="" style={{ height: 56 }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--ink-900)' }}>{it.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600, color: 'var(--ink-900)' }}>${(it.price * it.qty).toFixed(2)}</div>
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 10 }}>{it.size} · {it.subtitle}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <QuantityStepper value={it.qty} size="sm" onChange={(n) => onQty(it.id, n)} />
                  <button onClick={() => onRemove(it.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12.5, color: 'var(--gray-500)', fontWeight: 600 }}>{t('cart.remove')}</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div style={{ padding: '18px 22px 22px', borderTop: '1px solid var(--border-subtle)' }}>
            <DisclaimerBanner variant="strip" text={t('ruo')} style={{ borderRadius: 'var(--radius-sm)', marginBottom: 16 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-body)' }}>{t('cart.subtotal')}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 600, color: 'var(--ink-900)' }}>${subtotal.toFixed(2)}</span>
            </div>
            <Button variant="primary" size="lg" fullWidth onClick={onCheckout}>{t('cart.checkout')}</Button>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', marginTop: 10 }}>{t('cart.shipNote')}</div>
          </div>
        )}
      </aside>
    </>
  );
}

Object.assign(window, { CartDrawer });
