import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';

/**
 * ProductCard — shop grid card for a research peptide vial.
 * White card, hairline border, lift on hover, gold purity badge, mono price.
 */
export function ProductCard({
  name,                       // e.g. "GHK-Cu"
  subtitle = '',              // e.g. "Copper Peptide"
  size = '',                  // e.g. "100mg"
  price,                      // number
  image,                      // image url
  purity = '99%+',
  purityLabel = 'Purity',
  selectLabel = 'Select Options',
  outOfStockLabel = 'Out of Stock',
  inStock = true,
  fromPrice = false,           // show "from" before price (multi-variant products)
  badge = null,               // optional { tone, label }
  onSelect = () => {},
  style = {},
}) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-body)', display: 'flex', flexDirection: 'column',
        background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)', overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all var(--dur-base) var(--ease-out)', ...style,
      }}
    >
      {/* Image well */}
      <div onClick={onSelect} style={{
        position: 'relative', aspectRatio: '1 / 1', cursor: 'pointer',
        background: 'linear-gradient(170deg, #FFFFFF 0%, #F2F4F7 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}>
        {badge && (
          <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 2 }}>
            <Badge tone={badge.tone || 'gold'} variant="solid" size="sm">{badge.label}</Badge>
          </div>
        )}
        <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
          <Badge tone="gold" variant="soft" size="sm">{purity} {purityLabel}</Badge>
        </div>
        {image && (
          <img src={image} alt={name} style={{
            height: '82%', objectFit: 'contain',
            transform: hover ? 'translateX(3%) scale(1.04)' : 'translateX(3%) scale(1)',
            transition: 'transform var(--dur-slow) var(--ease-out)',
            filter: 'drop-shadow(0 12px 18px rgba(11,27,51,.12))',
          }} />
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px' }}>
          <h3 onClick={onSelect} style={{
            fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700,
            color: hover ? 'var(--gold-700)' : 'var(--ink-900)', letterSpacing: '-.01em', margin: 0,
            cursor: 'pointer', transition: 'color var(--dur-fast) var(--ease-out)',
          }}>{name}</h3>
          {size && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--gray-500)' }}>{size}</span>}
        </div>
        {subtitle && <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{subtitle}</div>}

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', gap: '10px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 600, color: 'var(--ink-900)', display: 'inline-flex', alignItems: 'baseline', gap: '5px' }}>
            {fromPrice && <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>from</span>}
            ${typeof price === 'number' ? price.toFixed(2) : price}
          </span>
          <Button variant={inStock ? 'primary' : 'outline'} size="sm" disabled={!inStock} onClick={onSelect}>
            {inStock ? selectLabel : outOfStockLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
