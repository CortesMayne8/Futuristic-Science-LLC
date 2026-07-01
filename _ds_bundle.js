/* @ds-bundle: {"format":3,"namespace":"FuturisticScienceDesignSystem_2ca7b0","components":[{"name":"COASearch","sourcePath":"components/commerce/COASearch.jsx"},{"name":"DisclaimerBanner","sourcePath":"components/commerce/DisclaimerBanner.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"QuantityStepper","sourcePath":"components/commerce/QuantityStepper.jsx"},{"name":"TrustBadges","sourcePath":"components/commerce/TrustBadges.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"}],"sourceHashes":{"components/commerce/COASearch.jsx":"f62d9096a6bd","components/commerce/DisclaimerBanner.jsx":"a2771ce5e3a3","components/commerce/ProductCard.jsx":"1c82d1a101e6","components/commerce/QuantityStepper.jsx":"03c8b1742cd5","components/commerce/TrustBadges.jsx":"f4c255904ee9","components/core/Badge.jsx":"83bed9631ea5","components/core/Button.jsx":"94166cc1a662","components/core/Input.jsx":"e59d5ed4fa14","components/core/Select.jsx":"5343d792d6a8","ui_kits/website/AgeGate.jsx":"99e97dfcec19","ui_kits/website/AuthGate.jsx":"10937c7cb3ce","ui_kits/website/COAScreen.jsx":"9e527c9d1b16","ui_kits/website/CartDrawer.jsx":"a4b5b46e9be7","ui_kits/website/CheckoutScreen.jsx":"b91cc2ca7579","ui_kits/website/Footer.jsx":"f26708fd4a17","ui_kits/website/Header.jsx":"a7c2c392c62b","ui_kits/website/HomeScreen.jsx":"76dd1f30ea92","ui_kits/website/LangSwitcher.jsx":"413c420ef0b3","ui_kits/website/ProductScreen.jsx":"7c798f02bdae","ui_kits/website/ShopScreen.jsx":"2af964fd9f63","ui_kits/website/SimplePage.jsx":"08e4cbc15e54","ui_kits/website/TrackOrderScreen.jsx":"557431a7de7b","ui_kits/website/data.js":"a5f47cf988cc","ui_kits/website/i18n.js":"f9f9e7c6984d","ui_kits/website/vial-fx.js":"f79e4daa1464"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FuturisticScienceDesignSystem_2ca7b0 = window.FuturisticScienceDesignSystem_2ca7b0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/DisclaimerBanner.jsx
try { (() => {
/**
 * DisclaimerBanner — the mandatory research-use-only notice.
 * Use the `ink` variant in hero/footer, `strip` as a thin top-bar, `inline` on product pages.
 */
function DisclaimerBanner({
  variant = 'ink',
  // 'ink' | 'strip' | 'inline'
  text = 'For Research Purposes Only. Not for human use.',
  detail = '',
  style = {}
}) {
  const ShieldIcon = ({
    size = 28,
    color
  }) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  }));
  if (variant === 'strip') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        background: 'var(--ink-900)',
        color: 'rgba(255,255,255,.85)',
        fontSize: '12.5px',
        fontWeight: 600,
        letterSpacing: '.04em',
        textAlign: 'center',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        ...style
      }
    }, /*#__PURE__*/React.createElement(ShieldIcon, {
      size: 15,
      color: "var(--gold-400)"
    }), text);
  }
  if (variant === 'inline') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
        background: 'var(--gold-50)',
        border: '1px solid var(--gold-200)',
        borderRadius: 'var(--radius-md)',
        padding: '14px 16px',
        ...style
      }
    }, /*#__PURE__*/React.createElement(ShieldIcon, {
      size: 22,
      color: "var(--gold-700)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '13.5px',
        fontWeight: 700,
        color: 'var(--ink-900)'
      }
    }, text), detail && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12.5px',
        color: 'var(--gray-600)',
        marginTop: '3px',
        lineHeight: 1.5
      }
    }, detail)));
  }

  // ink (default)
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      gap: '14px',
      alignItems: 'center',
      background: 'var(--ink-800)',
      borderLeft: '4px solid var(--gold-500)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      ...style
    }
  }, /*#__PURE__*/React.createElement(ShieldIcon, {
    size: 28,
    color: "var(--gold-400)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14.5px',
      fontWeight: 700,
      color: '#fff',
      letterSpacing: '.01em'
    }
  }, text), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12.5px',
      color: 'rgba(255,255,255,.62)',
      marginTop: '4px',
      lineHeight: 1.5
    }
  }, detail)));
}
Object.assign(__ds_scope, { DisclaimerBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/DisclaimerBanner.jsx", error: String((e && e.message) || e) }); }

// components/commerce/QuantityStepper.jsx
try { (() => {
/**
 * QuantityStepper — minus / value / plus control for cart & product pages.
 */
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange = () => {},
  size = 'md',
  // 'sm' | 'md'
  style = {}
}) {
  const dim = size === 'sm' ? 34 : 44;
  const set = n => onChange(Math.max(min, Math.min(max, n)));
  const Btn = ({
    onClick,
    disabled,
    children,
    label
  }) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    disabled: disabled,
    "aria-label": label,
    style: {
      width: dim,
      height: dim,
      flex: 'none',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: 'transparent',
      color: disabled ? 'var(--gray-300)' : 'var(--ink-800)',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = 'var(--gray-100)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'inline-flex',
      alignItems: 'center',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => set(value - 1),
    disabled: value <= min,
    label: "Decrease quantity"
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: dim,
      height: dim,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: '15px',
      fontWeight: 600,
      color: 'var(--ink-900)',
      borderLeft: '1.5px solid var(--border-subtle)',
      borderRight: '1.5px solid var(--border-subtle)',
      padding: '0 4px'
    }
  }, value), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => set(value + 1),
    disabled: value >= max,
    label: "Increase quantity"
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/commerce/TrustBadges.jsx
try { (() => {
/**
 * TrustBadges — the five brand trust pillars in an icon row.
 * 99%+ Purity · Third-Party Tested · Batch COAs · Measured Accuracy · Fast Shipping
 */
const ICONS = {
  purity: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  tested: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 2v6.4a2 2 0 0 1-.3 1L3.6 18a2 2 0 0 0 1.7 3h13.4a2 2 0 0 0 1.7-3l-5.1-8.6a2 2 0 0 1-.3-1V2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 2h8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 14h9"
  })),
  coa: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "14",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10 16-1.5 3 1.5-1 1.5 1L10 16"
  })),
  accuracy: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 4 4 14a2.8 2.8 0 0 0 4 4L18 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 6 2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 9 2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 12 2 2"
  })),
  shipping: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 9h4l4 4v4a1 1 0 0 1-1 1h-1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7.5",
    cy: "18.5",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "18.5",
    r: "2"
  }))
};
const DEFAULTS = [{
  icon: 'purity',
  label: '99%+ Purity'
}, {
  icon: 'tested',
  label: 'Third-Party Tested'
}, {
  icon: 'coa',
  label: 'Batch COAs'
}, {
  icon: 'accuracy',
  label: 'Measured Accuracy'
}, {
  icon: 'shipping',
  label: 'Fast Shipping'
}];
function TrustBadges({
  items = DEFAULTS,
  variant = 'light',
  // 'light' | 'ink'
  size = 'md',
  // 'sm' | 'md'
  style = {}
}) {
  const onInk = variant === 'ink';
  const iconBox = size === 'sm' ? 30 : 38;
  const iconSize = size === 'sm' ? 16 : 20;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: size === 'sm' ? '14px 22px' : '18px 32px',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: iconBox,
      height: iconBox,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      background: onInk ? 'rgba(200,162,76,.14)' : 'var(--gold-50)',
      color: onInk ? 'var(--gold-400)' : 'var(--gold-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: iconSize,
      height: iconSize,
      display: 'block'
    }
  }, ICONS[it.icon])), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size === 'sm' ? '13px' : '14px',
      fontWeight: 700,
      color: onInk ? 'rgba(255,255,255,.9)' : 'var(--ink-800)',
      whiteSpace: 'nowrap'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { TrustBadges });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/TrustBadges.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — compact status / attribute label.
 * Tones: gold (featured), teal (verified/COA), neutral, success, warning, danger, ink.
 */
function Badge({
  children,
  tone = 'neutral',
  // 'gold' | 'teal' | 'neutral' | 'success' | 'warning' | 'danger' | 'ink'
  variant = 'soft',
  // 'soft' | 'solid' | 'outline'
  size = 'md',
  // 'sm' | 'md'
  iconLeft = null,
  style = {}
}) {
  const tones = {
    gold: {
      fg: 'var(--gold-700)',
      bg: 'var(--gold-100)',
      solidBg: 'var(--gold-500)',
      solidFg: 'var(--ink-900)',
      bd: 'var(--gold-300)'
    },
    teal: {
      fg: 'var(--teal-700)',
      bg: 'var(--teal-50)',
      solidBg: 'var(--teal-500)',
      solidFg: '#fff',
      bd: 'var(--teal-300)'
    },
    neutral: {
      fg: 'var(--gray-700)',
      bg: 'var(--gray-100)',
      solidBg: 'var(--gray-600)',
      solidFg: '#fff',
      bd: 'var(--gray-300)'
    },
    success: {
      fg: 'var(--success)',
      bg: 'var(--success-bg)',
      solidBg: 'var(--success)',
      solidFg: '#fff',
      bd: 'var(--success)'
    },
    warning: {
      fg: 'var(--warning)',
      bg: 'var(--warning-bg)',
      solidBg: 'var(--warning)',
      solidFg: '#fff',
      bd: 'var(--warning)'
    },
    danger: {
      fg: 'var(--danger)',
      bg: 'var(--danger-bg)',
      solidBg: 'var(--danger)',
      solidFg: '#fff',
      bd: 'var(--danger)'
    },
    ink: {
      fg: '#fff',
      bg: 'var(--ink-800)',
      solidBg: 'var(--ink-800)',
      solidFg: '#fff',
      bd: 'var(--ink-700)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const styles = {
    soft: {
      background: t.bg,
      color: t.fg,
      border: '1px solid transparent'
    },
    solid: {
      background: t.solidBg,
      color: t.solidFg,
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: t.fg,
      border: `1px solid ${t.bd}`
    }
  }[variant];
  const sz = size === 'sm' ? {
    padding: '2px 8px',
    fontSize: '11px',
    gap: '4px'
  } : {
    padding: '4px 11px',
    fontSize: '12px',
    gap: '5px'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sz.gap,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      letterSpacing: '0.02em',
      lineHeight: 1.4,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      padding: sz.padding,
      fontSize: sz.fontSize,
      ...styles,
      ...style
    }
  }, iconLeft, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/COASearch.jsx
try { (() => {
/**
 * COASearch — search Certificates of Analysis by batch number.
 * Compliance-safe: shows verified status + COA link only. No claims.
 */
const SAMPLE = [{
  batch: 'FUTURE-CN-MARK-GHKC-0701-001',
  product: 'GHK-Cu 100mg',
  purity: '99.4%',
  date: '2024-03-12',
  url: '#'
}, {
  batch: 'FUTURE-CN-MARK-BPCC-0701-001',
  product: 'BPC-157 5mg',
  purity: '99.1%',
  date: '2024-02-28',
  url: '#'
}, {
  batch: 'FUTURE-CN-MARK-THYM-0701-001',
  product: 'TB-500 10mg',
  purity: '99.6%',
  date: '2024-02-11',
  url: '#'
}, {
  batch: 'FUTURE-CN-MARK-SEMA-0701-001',
  product: 'Semax 30mg',
  purity: '99.2%',
  date: '2024-01-24',
  url: '#'
}];
function COASearch({
  data = SAMPLE,
  labels = {},
  style = {}
}) {
  const L = {
    placeholder: 'Search batch number — e.g. FUTURE-CN-MARK-GHKC-0701-001',
    found: 'found',
    colBatch: 'Batch',
    colProduct: 'Product',
    colPurity: 'Purity',
    colStatus: 'Status',
    colCoa: 'COA',
    noResult: 'No batch found. Check the number on your vial label or contact the lab.',
    verified: 'Verified',
    ...labels
  };
  const [q, setQ] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  const term = q.trim().toLowerCase();
  const results = term ? data.filter(r => r.batch.toLowerCase().includes(term) || r.product.toLowerCase().includes(term)) : data;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'var(--white)',
      border: `1.5px solid ${focus ? 'var(--gold-500)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      height: '52px',
      boxShadow: focus ? '0 0 0 3px var(--ring)' : 'var(--shadow-sm)',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gray-400)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    placeholder: L.placeholder,
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      flex: 1,
      minWidth: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: '14.5px',
      color: 'var(--ink-900)',
      letterSpacing: '.02em'
    }
  }), q && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12.5px',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, results.length, " ", L.found)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1.4fr 0.8fr 1fr 0.7fr',
      padding: '11px 18px',
      background: 'var(--gray-50)',
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--gray-500)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, L.colBatch), /*#__PURE__*/React.createElement("span", null, L.colProduct), /*#__PURE__*/React.createElement("span", null, L.colPurity), /*#__PURE__*/React.createElement("span", null, L.colStatus), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, L.colCoa)), results.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 18px',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: '14px'
    }
  }, L.noResult), results.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.batch,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1.4fr 0.8fr 1fr 0.7fr',
      alignItems: 'center',
      padding: '14px 18px',
      borderBottom: i < results.length - 1 ? '1px solid var(--border-subtle)' : 'none',
      fontSize: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      color: 'var(--ink-900)',
      fontSize: '13.5px'
    }
  }, r.batch), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, r.product), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--ink-800)',
      fontWeight: 600
    }
  }, r.purity), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "teal",
    variant: "soft",
    size: "sm"
  }, L.verified)), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: r.url,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: 700,
      color: 'var(--accent-teal)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, "PDF", /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 7h10v10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7"
  }))))))));
}
Object.assign(__ds_scope, { COASearch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/COASearch.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control for Futuristic Science.
 * Gold primary for conversion, ink/outline/ghost for secondary actions.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'ink' | 'outline' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: '13px',
      height: '36px',
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '11px 20px',
      fontSize: '14.5px',
      height: '44px',
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '15px 28px',
      fontSize: '16px',
      height: '54px',
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--gold-500)',
      color: 'var(--ink-900)',
      border: '1px solid var(--gold-500)',
      boxShadow: 'var(--glow-gold)',
      fontWeight: 700
    },
    ink: {
      background: 'var(--ink-800)',
      color: '#fff',
      border: '1px solid var(--ink-800)',
      boxShadow: 'var(--shadow-sm)',
      fontWeight: 600
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-800)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'none',
      fontWeight: 600
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent-teal)',
      border: '1px solid transparent',
      boxShadow: 'none',
      fontWeight: 600
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--gold-600)',
      borderColor: 'var(--gold-600)',
      boxShadow: 'var(--glow-gold-strong)'
    },
    ink: {
      background: 'var(--ink-700)'
    },
    outline: {
      borderColor: 'var(--gold-500)',
      background: 'var(--gold-50)',
      color: 'var(--gold-700)'
    },
    ghost: {
      background: 'var(--teal-50)',
      color: 'var(--accent-teal-hover)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      fontFamily: 'var(--font-body)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      borderRadius: s.radius,
      lineHeight: 1,
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.5 : 1,
      transform: press && !disabled ? 'scale(0.98)' : 'scale(1)',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
/**
 * ProductCard — shop grid card for a research peptide vial.
 * White card, hairline border, lift on hover, gold purity badge, mono price.
 */
function ProductCard({
  name,
  // e.g. "GHK-Cu"
  subtitle = '',
  // e.g. "Copper Peptide"
  size = '',
  // e.g. "100mg"
  price,
  // number
  image,
  // image url
  purity = '99%+',
  purityLabel = 'Purity',
  selectLabel = 'Select Options',
  outOfStockLabel = 'Out of Stock',
  inStock = true,
  fromPrice = false,
  // show "from" before price (multi-variant products)
  badge = null,
  // optional { tone, label }
  onSelect = () => {},
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'all var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onSelect,
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      cursor: 'pointer',
      background: 'linear-gradient(170deg, #FFFFFF 0%, #F2F4F7 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badge.tone || 'gold',
    variant: "solid",
    size: "sm"
  }, badge.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold",
    variant: "soft",
    size: "sm"
  }, purity, " ", purityLabel)), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      height: '82%',
      objectFit: 'contain',
      transform: hover ? 'translateX(3%) scale(1.04)' : 'translateX(3%) scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      filter: 'drop-shadow(0 12px 18px rgba(11,27,51,.12))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    onClick: onSelect,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      fontWeight: 700,
      color: hover ? 'var(--gold-700)' : 'var(--ink-900)',
      letterSpacing: '-.01em',
      margin: 0,
      cursor: 'pointer',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, name), size && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--gray-500)'
    }
  }, size)), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '12px',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '20px',
      fontWeight: 600,
      color: 'var(--ink-900)',
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '5px'
    }
  }, fromPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "from"), "$", typeof price === 'number' ? price.toFixed(2) : price), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: inStock ? 'primary' : 'outline',
    size: "sm",
    disabled: !inStock,
    onClick: onSelect
  }, inStock ? selectLabel : outOfStockLabel))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, leading icon, and help/error text.
 */
function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  iconLeft = null,
  hint = '',
  error = '',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--gold-500)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--ink-800)',
      marginBottom: '6px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: disabled ? 'var(--gray-100)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 12px',
      height: '44px',
      boxShadow: focus ? '0 0 0 3px var(--ring)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-400)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      flex: 1,
      height: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: '14.5px',
      color: 'var(--ink-900)',
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      marginTop: '6px',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled native dropdown for filters (category, price, sort).
 */
function Select({
  label,
  options = [],
  // [{ value, label }] or [string]
  value,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      width: '100%',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      display: 'block',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--ink-800)',
      marginBottom: '6px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: '44px',
      padding: '0 38px 0 12px',
      fontFamily: 'var(--font-body)',
      fontSize: '14.5px',
      color: 'var(--ink-900)',
      cursor: 'pointer',
      background: 'var(--white)',
      border: `1.5px solid ${focus ? 'var(--gold-500)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px var(--ring)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gray-500)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AgeGate.jsx
try { (() => {
/* AgeGate — 21+ verification gate shown on first visit. Agree / Disagree. */
function AgeGate({
  onEnter
}) {
  const {
    Button
  } = window.FuturisticScienceDesignSystem_2ca7b0;
  window.useLang();
  const t = window.t;
  const [remember, setRemember] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 100,
      background: 'var(--gradient-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 600",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "#C8A24C",
    strokeOpacity: "0.12",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "120",
    x2: "260",
    y2: "200"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "260",
    y1: "200",
    x2: "420",
    y2: "140"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "140",
    x2: "600",
    y2: "240"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "600",
    y1: "240",
    x2: "720",
    y2: "160"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "260",
    y1: "200",
    x2: "320",
    y2: "400"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "600",
    y1: "240",
    x2: "660",
    y2: "440"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#C8A24C",
    fillOpacity: "0.18"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "120",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "260",
    cy: "200",
    r: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "420",
    cy: "140",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "600",
    cy: "240",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "720",
    cy: "160",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "400",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "660",
    cy: "440",
    r: "5"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 480,
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: '40px 40px 32px',
      textAlign: 'center',
      boxShadow: '0 40px 100px rgba(0,0,0,.5)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.R("../../assets/emblem-mark.png"),
    alt: "",
    style: {
      height: 72,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)',
      marginBottom: 12
    }
  }, t('age.eyebrow')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 800,
      color: 'var(--ink-900)',
      letterSpacing: '-.02em',
      lineHeight: 1.15,
      marginBottom: 14
    }
  }, t('age.title')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)',
      lineHeight: 1.6,
      marginBottom: 22
    }
  }, t('age.terms.pre'), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--accent-teal)',
      fontWeight: 600
    }
  }, t('age.terms.link')), t('age.terms.post')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    fullWidth: true,
    onClick: () => {
      window.location.href = 'https://www.google.com';
    }
  }, t('age.disagree')), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onEnter
  }, t('age.agree'))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: 'pointer',
      marginBottom: 24,
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setRemember(v => !v),
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      border: remember ? '1.5px solid var(--gold-500)' : '1.5px solid var(--border-strong)',
      background: remember ? 'var(--gold-500)' : 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 120ms ease'
    }
  }, remember && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ink-900)",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m5 12 5 5 9-11"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--ink-800)'
    }
  }, t('age.remember'))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left',
      background: 'var(--surface-subtle)',
      borderRadius: 'var(--radius-md)',
      borderLeft: '3px solid var(--gold-500)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10.5,
      fontWeight: 800,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)',
      marginBottom: 6
    }
  }, t('age.disclaimerLabel')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      color: 'var(--text-muted)',
      lineHeight: 1.55,
      margin: 0
    }
  }, t('age.disclaimer')))));
}
Object.assign(window, {
  AgeGate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AgeGate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AuthGate.jsx
try { (() => {
/* AuthGate — hard login/registration wall shown after the age gate.
   Multiple sign-in methods: Google, Apple, email/password, magic link.
   Demo only: any submit (with the qualified-researcher box checked) enters the site.
   Wire to your store login (WooCommerce / Auth0 / Firebase) to make it real. */
function AuthGate({
  onAuth
}) {
  const {
    Button
  } = window.FuturisticScienceDesignSystem_2ca7b0;
  window.useLang();
  const t = window.t;
  const [mode, setMode] = React.useState('signin'); // 'signin' | 'signup'
  const [agree, setAgree] = React.useState(false);
  const [tried, setTried] = React.useState(false);
  const isSignup = mode === 'signup';
  const go = () => {
    if (!agree) {
      setTried(true);
      return;
    }
    onAuth();
  };
  const field = (label, type, ph) => /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      textAlign: 'left',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--ink-800)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: ph,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 46,
      padding: '0 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--ink-900)',
      background: 'var(--white)',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)'
    }
  }));
  const social = (label, icon) => /*#__PURE__*/React.createElement("button", {
    onClick: go,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 11,
      width: '100%',
      height: 48,
      cursor: 'pointer',
      background: 'var(--white)',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--ink-900)',
      marginBottom: 12,
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--gray-50)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--white)'
  }, icon, label);
  const googleIcon = /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
  }));
  const appleIcon = /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "var(--ink-900)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.02-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.78 1.3 10.32.86 1.24 1.89 2.64 3.23 2.59 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.29-1.27 3.15-2.52.99-1.45 1.4-2.85 1.42-2.93-.03-.01-2.72-1.04-2.75-4.14M14.5 4.5c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.09 3.18 1.15.09 2.32-.58 3.04-1.45"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 110,
      background: 'var(--gradient-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 600",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "#C8A24C",
    strokeOpacity: "0.12",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "120",
    x2: "260",
    y2: "200"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "260",
    y1: "200",
    x2: "420",
    y2: "140"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "420",
    y1: "140",
    x2: "600",
    y2: "240"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "600",
    y1: "240",
    x2: "720",
    y2: "160"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "260",
    y1: "200",
    x2: "320",
    y2: "400"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "600",
    y1: "240",
    x2: "660",
    y2: "440"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#C8A24C",
    fillOpacity: "0.18"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "120",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "260",
    cy: "200",
    r: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "420",
    cy: "140",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "600",
    cy: "240",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "720",
    cy: "160",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "400",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "660",
    cy: "440",
    r: "5"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 460,
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      padding: '36px 36px 28px',
      textAlign: 'center',
      boxShadow: '0 40px 100px rgba(0,0,0,.5)',
      margin: 'auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.R("../../assets/emblem-mark.png"),
    alt: "",
    style: {
      height: 60,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)',
      marginBottom: 10
    }
  }, t('auth.eyebrow')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 800,
      color: 'var(--ink-900)',
      letterSpacing: '-.02em',
      margin: '0 0 8px'
    }
  }, isSignup ? t('auth.signupTitle') : t('auth.signinTitle')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      lineHeight: 1.55,
      margin: '0 0 22px'
    }
  }, isSignup ? t('auth.signupSub') : t('auth.signinSub')), social(t('auth.google'), googleIcon), social(t('auth.apple'), appleIcon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      margin: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--gray-500)',
      textTransform: 'uppercase',
      letterSpacing: '.08em'
    }
  }, t('auth.or')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  })), isSignup && field(t('auth.name'), 'text', t('auth.namePh')), field(t('auth.email'), 'email', t('auth.emailPh')), field(t('auth.password'), 'password', t('auth.passwordPh')), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      textAlign: 'left',
      cursor: 'pointer',
      margin: '4px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: agree,
    onChange: e => setAgree(e.target.checked),
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      marginTop: 1,
      accentColor: 'var(--gold-600)',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, t('auth.qualified'))), tried && !agree && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left',
      fontSize: 12.5,
      fontWeight: 600,
      color: '#c0392b',
      marginBottom: 10
    }
  }, t('auth.needAgree')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: go
  }, isSignup ? t('auth.signupBtn') : t('auth.signinBtn'))), /*#__PURE__*/React.createElement("button", {
    onClick: go,
    style: {
      marginTop: 14,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--accent-teal)'
    }
  }, t('auth.magic')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 16,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMode(isSignup ? 'signin' : 'signup');
      setTried(false);
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, isSignup ? t('auth.toSignin') : t('auth.toSignup'))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 11,
      color: 'var(--gray-500)',
      lineHeight: 1.5
    }
  }, t('auth.demoNote'))));
}
Object.assign(window, {
  AuthGate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AuthGate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/COAScreen.jsx
try { (() => {
/* COAScreen — COA Library: batch search + per-peptide accordions of certificates. */
function COAScreen() {
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;

  // Build certificate rows per product (one per strength variant), from the product's compound code.
  const certsFor = p => {
    const code = p.batch.split('-')[3]; // e.g. RETA
    return p.variants.map((v, i) => {
      const mg = v.strength.replace(/mg/gi, '').replace(/ml/gi, '').replace(/\s+/g, ''); // strength digits, no unit
      return {
        batch: `FUTURE-CN-MARK-${code}-0726-${mg}`,
        strength: v.strength,
        purity: p.purity,
        year: (p.batch.match(/20\d\d/) || ['2024'])[0]
      };
    });
  };
  const str = D.products.filter(p => p.category === 'Metabolic Research');
  const others = D.products.filter(p => p.category !== 'Metabolic Research').sort((a, b) => a.name.localeCompare(b.name));
  const [open, setOpen] = React.useState({});
  const [query, setQuery] = React.useState('');
  const [searched, setSearched] = React.useState('');
  const matches = p => {
    if (!searched) return true;
    const q = searched.toLowerCase();
    return p.name.toLowerCase().includes(q) || certsFor(p).some(c => c.batch.toLowerCase().includes(q));
  };
  const runSearch = () => {
    const q = query.trim();
    setSearched(q);
    if (!q) {
      setOpen({});
      return;
    }
    const next = {};
    D.products.forEach(p => {
      const ql = q.toLowerCase();
      if (p.name.toLowerCase().includes(ql) || certsFor(p).some(c => c.batch.toLowerCase().includes(ql))) next[p.id] = true;
    });
    setOpen(next);
  };
  const Row = ({
    p
  }) => {
    const isOpen = !!open[p.id];
    const certs = certsFor(p);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(o => ({
        ...o,
        [p.id]: !o[p.id]
      })),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        cursor: 'pointer',
        background: isOpen ? 'var(--white)' : 'var(--gray-100)',
        border: '1px solid ' + (isOpen ? 'var(--gold-300)' : 'transparent'),
        borderRadius: 14,
        padding: '15px 20px',
        textAlign: 'left',
        transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--gold-600)",
      strokeWidth: "2",
      style: {
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3",
      fill: "var(--gold-600)",
      stroke: "none"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--ink-900)'
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        color: 'var(--text-muted)'
      }
    }, certs.length, " ", certs.length === 1 ? 'COA' : 'COAs'), /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--gray-500)",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        flex: 'none',
        transform: isOpen ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 8px 6px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-subtle)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden'
      }
    }, certs.map((c, i) => {
      const hit = searched && c.batch.toLowerCase().includes(searched.toLowerCase());
      return /*#__PURE__*/React.createElement("div", {
        key: c.batch,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          flexWrap: 'wrap',
          padding: '13px 18px',
          borderBottom: i < certs.length - 1 ? '1px solid var(--border-subtle)' : 'none',
          background: hit ? 'var(--gold-50)' : 'transparent'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: '1 1 200px',
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 14,
          fontWeight: 600,
          color: 'var(--ink-900)'
        }
      }, c.batch)), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12.5,
          fontWeight: 600,
          color: 'var(--ink-800)',
          background: 'var(--white)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-pill)',
          padding: '4px 11px'
        }
      }, c.strength), /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: e => e.preventDefault(),
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--font-body)',
          fontSize: 13.5,
          fontWeight: 700,
          color: 'var(--accent-teal)'
        }
      }, /*#__PURE__*/React.createElement("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14 2v6h6"
      })), t('coal.viewCoa')));
    }))))));
  };
  const SectionHead = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '40px 0 20px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 800,
      color: 'var(--ink-900)',
      textAlign: 'center',
      letterSpacing: '-.01em',
      margin: '0 0 14px'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }));
  const visibleStr = str.filter(matches);
  const visibleOthers = others.filter(matches);
  const nothing = searched && visibleStr.length === 0 && visibleOthers.length === 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg, var(--gold-300) 0%, var(--gold-500) 100%)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      padding: '52px 28px 40px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 42,
      fontWeight: 900,
      color: 'var(--ink-900)',
      textAlign: 'center',
      letterSpacing: '-.02em',
      margin: 0,
      textWrap: 'balance'
    }
  }, t('coal.title'))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(11,27,51,.16)',
      maxWidth: 1100,
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      padding: '36px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "coa-batch",
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--ink-900)',
      marginBottom: 8
    }
  }, t('coal.searchLabel')), /*#__PURE__*/React.createElement("input", {
    id: "coa-batch",
    value: query,
    onChange: e => setQuery(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') runSearch();
    },
    placeholder: t('coal.placeholder'),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 48,
      padding: '0 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      color: 'var(--ink-900)',
      background: 'var(--gray-100)',
      border: '1.5px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: runSearch,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 700,
      cursor: 'pointer',
      color: 'var(--ink-900)',
      background: 'var(--white)',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      padding: '9px 22px'
    }
  }, t('coal.find')), searched && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setQuery('');
      setSearched('');
      setOpen({});
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 600,
      cursor: 'pointer',
      color: 'var(--accent-teal)',
      background: 'none',
      border: 'none',
      padding: 0
    }
  }, t('coal.clear')))), nothing ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      padding: '28px',
      background: 'var(--gray-100)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center',
      fontSize: 14.5,
      color: 'var(--text-body)'
    }
  }, t('coal.noMatch', {
    q: searched,
    email: D.contact.email
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, visibleStr.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHead, null, t('coal.str')), visibleStr.map(p => /*#__PURE__*/React.createElement(Row, {
    key: p.id,
    p: p
  }))), visibleOthers.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHead, null, t('coal.others')), visibleOthers.map(p => /*#__PURE__*/React.createElement(Row, {
    key: p.id,
    p: p
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 36,
      fontSize: 13,
      color: 'var(--text-muted)',
      textAlign: 'center',
      lineHeight: 1.6
    }
  }, t('coap.cantFind', {
    email: D.contact.email
  }), /*#__PURE__*/React.createElement("br", null), t('ruo'))));
}
Object.assign(window, {
  COAScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/COAScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CartDrawer.jsx
try { (() => {
/* CartDrawer — slide-in cart with line items, qty steppers, subtotal, checkout. */
function CartDrawer({
  open,
  items,
  onClose,
  onQty,
  onRemove,
  onCheckout
}) {
  const {
    QuantityStepper,
    Button,
    DisclaimerBanner
  } = window.FuturisticScienceDesignSystem_2ca7b0;
  window.useLang();
  const t = window.t;
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const count = items.reduce((s, it) => s + it.qty, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 60,
      background: 'rgba(8,17,31,.45)',
      backdropFilter: 'blur(2px)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 61,
      width: 'min(420px, 92%)',
      background: 'var(--white)',
      boxShadow: '-20px 0 60px rgba(8,17,31,.25)',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 22px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, t('cart.title'), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-400)',
      fontWeight: 600
    }
  }, "(", count, ")")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": t('aria.close'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--gray-500)',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12M18 6 6 18"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 22px'
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '60px 0',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--ink-800)',
      marginBottom: 6
    }
  }, t('cart.emptyTitle')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5
    }
  }, t('cart.emptyDesc'))), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      gap: 14,
      padding: '16px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      flex: 'none',
      background: 'var(--gray-50)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.R(it.image || window.FS_DATA.image),
    alt: "",
    style: {
      height: 56
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, "$", (it.price * it.qty).toFixed(2))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, it.size, " \xB7 ", it.subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: it.qty,
    size: "sm",
    onChange: n => onQty(it.id, n)
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(it.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 12.5,
      color: 'var(--gray-500)',
      fontWeight: 600
    }
  }, t('cart.remove'))))))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px 22px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(DisclaimerBanner, {
    variant: "strip",
    text: t('ruo'),
    style: {
      borderRadius: 'var(--radius-sm)',
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, t('cart.subtotal')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, "$", subtotal.toFixed(2))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onCheckout
  }, t('cart.checkout')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      textAlign: 'center',
      marginTop: 10
    }
  }, t('cart.shipNote')))));
}
Object.assign(window, {
  CartDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CheckoutScreen.jsx
try { (() => {
/* CheckoutScreen — fast, mobile-friendly checkout with order summary. */
function CheckoutScreen({
  cart,
  onNav
}) {
  const {
    Input,
    Button,
    DisclaimerBanner,
    Badge
  } = window.FuturisticScienceDesignSystem_2ca7b0;
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
  const allChecked = ACKS.every(k => checks[k]);
  const toggle = k => setChecks(c => ({
    ...c,
    [k]: !c[k]
  }));
  const setAll = v => setChecks(v ? Object.fromEntries(ACKS.map(k => [k, true])) : {});
  if (cart.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-subtle)',
        minHeight: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        margin: '0 auto',
        padding: '90px 28px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 800,
        color: 'var(--ink-900)',
        marginBottom: 12
      }
    }, t('co.emptyTitle')), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        color: 'var(--text-body)',
        marginBottom: 24
      }
    }, t('co.emptyDesc')), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNav('shop')
    }, t('co.browse'))));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-subtle)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '48px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 800,
      color: 'var(--ink-900)',
      letterSpacing: '-.025em',
      marginBottom: 28
    }
  }, t('co.title')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 0.9fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, [[t('co.contact'), [[t('co.email'), 'you@lab.org', 'email'], [t('co.phone'), D.contact.phone, 'tel']]], [t('co.shipAddr'), [[t('co.fullName'), 'Dr. Jane Researcher', 'text'], [t('co.institution'), 'University Research Lab', 'text'], [t('co.street'), '123 Science Park Dr', 'text']]]].map(([title, fields], si) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink-900)',
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, fields.map(([l, ph, ty]) => /*#__PURE__*/React.createElement(Input, {
    key: l,
    label: l,
    type: ty,
    placeholder: ph
  })), si === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: t('co.city'),
    placeholder: "City"
  }), /*#__PURE__*/React.createElement(Input, {
    label: t('co.state'),
    placeholder: "WI"
  }), /*#__PURE__*/React.createElement(Input, {
    label: t('co.zip'),
    placeholder: "53703"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink-900)',
      marginBottom: 6
    }
  }, t('co.payMethodsTitle')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: '0 0 16px'
    }
  }, t('co.payIntro')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--ink-800)',
      marginBottom: 10
    }
  }, t('co.paySelect')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, [{
    id: 'zelle',
    label: t('co.pay.zelle'),
    color: '#6D1ED4'
  }, {
    id: 'cashapp',
    label: t('co.pay.cashapp'),
    color: '#00C244'
  }, {
    id: 'venmo',
    label: t('co.pay.venmo'),
    color: '#008CFF'
  }, {
    id: 'applecash',
    label: t('co.pay.applecash'),
    color: 'var(--ink-900)'
  }].map(m => {
    const on = payMethod === m.id;
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      onClick: () => setPayMethod(m.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        cursor: 'pointer',
        textAlign: 'left',
        padding: '14px 15px',
        borderRadius: 'var(--radius-md)',
        border: '1.5px solid ' + (on ? 'var(--ink-900)' : 'var(--border-subtle)'),
        background: on ? 'var(--surface-subtle)' : 'var(--white)',
        boxShadow: on ? 'inset 0 0 0 1px var(--ink-900)' : 'none',
        transition: 'all var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        flex: 'none',
        borderRadius: 7,
        background: m.color,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: 14,
        fontWeight: 800
      }
    }, m.label[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: on ? 700 : 600,
        color: 'var(--ink-900)',
        flex: 1
      }
    }, m.label), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        flex: 'none',
        borderRadius: '50%',
        border: '2px solid ' + (on ? 'var(--ink-900)' : 'var(--border-strong)'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--ink-900)'
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      background: 'var(--gold-50)',
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gold-700)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6v6l4 2"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.55,
      color: 'var(--gold-800, #7a5a17)'
    }
  }, t('co.payWindow')))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, t('co.compTitle')), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      cursor: 'pointer',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--accent-teal)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allChecked,
    onChange: e => setAll(e.target.checked),
    style: {
      width: 16,
      height: 16,
      accentColor: 'var(--gold-600)',
      cursor: 'pointer'
    }
  }), t('co.selectAll'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, t('co.compSub')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, ACKS.map(k => {
    const on = !!checks[k];
    return /*#__PURE__*/React.createElement("label", {
      key: k,
      style: {
        display: 'flex',
        gap: 11,
        alignItems: 'flex-start',
        cursor: 'pointer',
        padding: '11px 13px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid ' + (tried && !on ? 'var(--gold-300)' : 'var(--border-subtle)'),
        background: on ? 'var(--gold-50)' : 'var(--surface-subtle)',
        transition: 'background var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: on,
      onChange: () => toggle(k),
      style: {
        width: 18,
        height: 18,
        flex: 'none',
        marginTop: 1,
        accentColor: 'var(--gold-600)',
        cursor: 'pointer'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.8,
        lineHeight: 1.5,
        color: 'var(--text-body)'
      }
    }, t('co.' + k)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      background: 'var(--ink-900)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gold-400)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 5
    }
  }, t('co.recordTitle')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.78)',
      margin: 0
    }
  }, t('co.recordNote')))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 88,
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--ink-900)',
      marginBottom: 18
    }
  }, t('co.summary')), cart.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 48,
      height: 48,
      flex: 'none',
      background: 'var(--gray-50)',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.R(it.image || D.image),
    alt: "",
    style: {
      height: 42
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      width: 18,
      height: 18,
      background: 'var(--ink-800)',
      color: '#fff',
      borderRadius: 999,
      fontSize: 10.5,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, it.qty)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, it.size)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, "$", (it.price * it.qty).toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 8,
      paddingTop: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [[t('co.subtotal'), subtotal], [t('co.shipping'), shipping]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "$", v.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 6,
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, t('co.total')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, "$", total.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, tried && !allChecked && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--danger-600, #c0392b)',
      marginBottom: 12
    }
  }, t('co.compRequired')), /*#__PURE__*/React.createElement("div", {
    onClick: () => {
      if (!allChecked) setTried(true);
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: !allChecked
  }, t('co.placeOrder')))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(DisclaimerBanner, {
    variant: "strip",
    text: t('ruo'),
    style: {
      borderRadius: 'var(--radius-sm)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px 10px',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('terms'),
    style: {
      color: 'var(--accent-teal)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, t('co.agreeTerms')), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('privacy'),
    style: {
      color: 'var(--accent-teal)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, t('co.agreePrivacy')), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('returns'),
    style: {
      color: 'var(--accent-teal)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, t('co.agreeReturns')), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('ruo'),
    style: {
      color: 'var(--accent-teal)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, t('foot.ruo'))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 11.5,
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, t('co.fraudNote'))))));
}
Object.assign(window, {
  CheckoutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CheckoutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Footer — ink, with newsletter opt-in, legal disclaimers, contact, link columns, RUO warning. */
function Footer({
  onNav
}) {
  const {
    contact
  } = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!ok) return;
    setSubscribed(true);
    setEmail('');
  };
  const col = (title, links) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.label,
    onClick: () => l.nav && onNav(l.nav),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,.7)'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,.7)'
  }, l.label))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-950)',
      borderBottom: '1px solid rgba(255,255,255,.08)',
      padding: '14px 28px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gold-400)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.03em',
      color: 'rgba(255,255,255,.9)'
    }
  }, t('ruo'))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px 28px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-800)',
      border: '1px solid rgba(255,255,255,.1)',
      borderRadius: 'var(--radius-xl)',
      padding: '30px 34px',
      marginBottom: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 800,
      color: '#fff',
      letterSpacing: '-.01em',
      marginBottom: 6
    }
  }, t('news.title')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,.65)',
      lineHeight: 1.55,
      maxWidth: 460
    }
  }, t('news.sub'))), subscribed ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 360px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--gold-400)',
      fontSize: 15,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 11 3 3L22 4"
  })), t('news.thanks')) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      flex: '1 1 360px',
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    placeholder: t('news.placeholder'),
    "aria-label": t('news.placeholder'),
    style: {
      flex: '1 1 220px',
      boxSizing: 'border-box',
      height: 48,
      padding: '0 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: '#fff',
      background: 'rgba(255,255,255,.06)',
      border: '1.5px solid rgba(255,255,255,.18)',
      borderRadius: 'var(--radius-md)',
      outline: 'none'
    },
    onFocus: e => e.currentTarget.style.borderColor = 'var(--gold-400)',
    onBlur: e => e.currentTarget.style.borderColor = 'rgba(255,255,255,.18)'
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      flex: 'none',
      height: 48,
      padding: '0 26px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--ink-900)',
      background: 'var(--gold-400)',
      border: 'none',
      borderRadius: 'var(--radius-md)'
    }
  }, t('news.btn')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.R("../../assets/logo-horizontal-light.png"),
    alt: "Futuristic Science \u2014 Research Peptides",
    style: {
      height: 52,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'rgba(255,255,255,.6)',
      lineHeight: 1.6,
      maxWidth: 300,
      marginBottom: 18
    }
  }, t('foot.desc')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'rgba(255,255,255,.75)',
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("div", null, contact.company), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + contact.email,
    style: {
      color: 'var(--gold-400)'
    }
  }, contact.email), /*#__PURE__*/React.createElement("div", null, contact.phone))), col(t('foot.shop'), [{
    label: t('foot.allPeptides'),
    nav: 'shop'
  }, {
    label: t('nav.coa'),
    nav: 'coa'
  }]), col(t('foot.company'), [{
    label: t('nav.faq'),
    nav: 'faq'
  }, {
    label: t('nav.contact'),
    nav: 'contact'
  }]), col(t('foot.legal'), [{
    label: t('foot.ruo'),
    nav: 'ruo'
  }, {
    label: t('foot.privacy'),
    nav: 'privacy'
  }, {
    label: t('foot.terms'),
    nav: 'terms'
  }, {
    label: t('foot.returns'),
    nav: 'returns'
  }, {
    label: t('foot.shipping'),
    nav: 'shipping'
  }])), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,.5)'
    }
  }, "\xA9 ", new Date().getFullYear(), " ", contact.company, ". ", t('foot.rights')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,.45)',
      maxWidth: 620,
      textAlign: 'right',
      lineHeight: 1.5
    }
  }, t('foot.legalLine')))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Header / Navbar — sticky, translucent-on-scroll, with cart count. */
function Header({
  current,
  onNav,
  cartCount,
  onCart
}) {
  const lang = window.useLang();
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('kit-scroll');
    const fn = () => setScrolled((el ? el.scrollTop : window.scrollY) > 8);
    const target = el || window;
    target.addEventListener('scroll', fn);
    return () => target.removeEventListener('scroll', fn);
  }, []);
  const nav = [{
    id: 'home',
    label: window.t('nav.home')
  }, {
    id: 'shop',
    label: window.t('nav.shop')
  }, {
    id: 'coa',
    label: window.t('nav.coa')
  }, {
    id: 'track',
    label: window.t('nav.track')
  }, {
    id: 'contact',
    label: window.t('nav.contact')
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: scrolled ? 'rgba(255,255,255,0.86)' : 'var(--white)',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 28px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.R("../../assets/logo-horizontal.png"),
    alt: "Futuristic Science \u2014 Research Peptides",
    style: {
      height: 46,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement(LangSwitcher, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 4,
      flex: 1
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => onNav(n.id),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      fontWeight: 600,
      color: current === n.id ? 'var(--ink-900)' : 'var(--gray-600)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 12px',
      borderRadius: 'var(--radius-sm)',
      position: 'relative'
    },
    onMouseEnter: e => {
      if (current !== n.id) e.currentTarget.style.color = 'var(--ink-900)';
    },
    onMouseLeave: e => {
      if (current !== n.id) e.currentTarget.style.color = 'var(--gray-600)';
    }
  }, n.label, current === n.id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 2,
      height: 2,
      background: 'var(--gold-500)',
      borderRadius: 2
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    label: window.t('aria.search')
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })), /*#__PURE__*/React.createElement(IconBtn, {
    label: window.t('aria.account'),
    onClick: () => onNav('account')
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4 4-6 8-6s8 2 8 6"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    "aria-label": window.t('aria.cart'),
    style: {
      position: 'relative',
      width: 40,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "21",
    height: "21",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "20",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "20",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 3h2.5l2.2 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L21 7H6"
  })), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 2,
      minWidth: 17,
      height: 17,
      padding: '0 4px',
      background: 'var(--gold-500)',
      color: 'var(--ink-900)',
      borderRadius: 999,
      fontSize: 10.5,
      fontWeight: 800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, cartCount)))));
}
function IconBtn({
  children,
  label,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": label,
    style: {
      width: 40,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-800)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, children));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
/* HomeScreen — hero, trust band, featured products, proof/COA teaser. */
function HomeScreen({
  onNav,
  onAdd,
  onOpenProduct
}) {
  const {
    ProductCard,
    TrustBadges,
    Button,
    Badge
  } = window.FuturisticScienceDesignSystem_2ca7b0;
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const featured = D.products.filter(p => p.featured).slice(0, 4);
  const trustItems = [{
    icon: 'purity',
    label: t('trust.purity')
  }, {
    icon: 'tested',
    label: t('trust.tested')
  }, {
    icon: 'coa',
    label: t('trust.coas')
  }, {
    icon: 'accuracy',
    label: t('trust.accuracy')
  }, {
    icon: 'shipping',
    label: t('trust.shipping')
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1200 560",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "#0B1B33",
    strokeOpacity: "0.06",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "120",
    y1: "90",
    x2: "300",
    y2: "180"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "300",
    y1: "180",
    x2: "520",
    y2: "110"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "900",
    y1: "120",
    x2: "1080",
    y2: "220"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1080",
    y1: "220",
    x2: "1160",
    y2: "120"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "300",
    y1: "180",
    x2: "360",
    y2: "420"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "900",
    y1: "120",
    x2: "980",
    y2: "400"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#0B1B33",
    fillOpacity: "0.07"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "90",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "180",
    r: "7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "520",
    cy: "110",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "900",
    cy: "120",
    r: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "1080",
    cy: "220",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "1160",
    cy: "120",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "360",
    cy: "420",
    r: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "980",
    cy: "400",
    r: "5"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#C8A24C",
    fillOpacity: "0.4"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "520",
    cy: "110",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "980",
    cy: "400",
    r: "3"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 28px',
      display: 'grid',
      gridTemplateColumns: '1.08fr 0.92fr',
      gap: 40,
      alignItems: 'center',
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '92px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker",
    style: {
      marginBottom: 20
    }
  }, t('hero.badge')), /*#__PURE__*/React.createElement("h1", {
    className: "display-serif",
    style: {
      fontSize: 52,
      lineHeight: 1.1,
      color: 'var(--ink-900)',
      margin: '0 0 22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, t('hero.title1')), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-gold-metallic",
    style: {
      fontStyle: 'italic',
      fontSize: 38,
      display: 'inline-block',
      marginTop: 10
    }
  }, t('hero.title2'))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      maxWidth: 540,
      marginBottom: 36
    }
  }, t('hero.sub')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('shop'),
    iconRight: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m13 6 6 6-6 6"
    }))
  }, t('hero.shop')), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('coa')
  }, t('hero.viewResults'))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gold-600)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"
  })), t('ruo'))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(200,162,76,.16) 0%, rgba(200,162,76,0) 68%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: window.R("../../assets/vial-trio-hero-v3.png"),
    alt: "Futuristic Science research peptide vials",
    className: "hero-vial-float",
    style: {
      position: 'relative',
      height: 360,
      filter: 'drop-shadow(0 30px 50px rgba(11,27,51,.20))'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-800)',
      padding: '26px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(TrustBadges, {
    variant: "ink",
    items: trustItems
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      padding: '96px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker",
    style: {
      marginBottom: 14
    }
  }, t('home.featuredEyebrow')), /*#__PURE__*/React.createElement("h2", {
    className: "display-serif",
    style: {
      fontSize: 42,
      color: 'var(--ink-900)',
      margin: 0
    }
  }, t('home.featuredTitle'))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('shop'),
    iconRight: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m13 6 6 6-6 6"
    }))
  }, t('btn.viewAll'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22
    }
  }, featured.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    subtitle: t('sub.' + p.id),
    size: p.size,
    price: p.price,
    purity: p.purity.replace(/\..*/, '') + '%+',
    purityLabel: t('word.purity'),
    selectLabel: t('btn.selectOptions'),
    outOfStockLabel: t('btn.outOfStock'),
    image: window.R(p.image || D.image),
    inStock: p.inStock,
    fromPrice: true,
    badge: p.id === 'glow' ? {
      tone: 'gold',
      label: t('badge.bestseller')
    } : null,
    onSelect: () => onOpenProduct(p.id)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '96px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker",
    style: {
      marginBottom: 16
    }
  }, t('home.proofEyebrow')), /*#__PURE__*/React.createElement("h2", {
    className: "display-serif",
    style: {
      fontSize: 40,
      color: 'var(--ink-900)',
      marginBottom: 20,
      lineHeight: 1.14
    }
  }, t('home.proofTitle').split('\n').map((ln, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("br", null), ln))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      marginBottom: 26,
      maxWidth: 760
    }
  }, t('home.proofBody')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      marginBottom: 30
    }
  }, [[t('home.proof1t'), t('home.proof1d')], [t('home.proof2t'), t('home.proof2d')], [t('home.proof3t'), t('home.proof3d')]].map(([pt, pd]) => /*#__PURE__*/React.createElement("div", {
    key: pt,
    style: {
      display: 'flex',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--teal-50)',
      color: 'var(--teal-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m5 12 5 5 9-11"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, pt), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, pd))))), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "md",
    onClick: () => onNav('coa')
  }, t('home.searchBatches'))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LangSwitcher.jsx
try { (() => {
/* LangSwitcher — EN/ES toggle with US + Mexican flags.
   Sits between the logo and the nav. Reads/writes window.FS_LANG. */
function FlagUS() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "15",
    viewBox: "0 0 22 15",
    style: {
      display: 'block',
      borderRadius: 2,
      boxShadow: '0 0 0 1px rgba(11,27,51,.12)'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "fsUS"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "22",
    height: "15",
    rx: "2"
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#fsUS)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "22",
    height: "15",
    fill: "#fff"
  }), [0, 2, 4, 6, 8, 10, 12].map(i => /*#__PURE__*/React.createElement("rect", {
    key: i,
    y: i * (15 / 13),
    width: "22",
    height: 15 / 13,
    fill: "#B22234"
  })), /*#__PURE__*/React.createElement("rect", {
    width: "9.4",
    height: 7 * (15 / 13),
    fill: "#3C3B6E"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#fff"
  }, [0, 1, 2].map(r => [0, 1, 2, 3].map(c => /*#__PURE__*/React.createElement("circle", {
    key: r + '-' + c,
    cx: 1.4 + c * 2.4 + r % 2 * 1.2,
    cy: 1.5 + r * 2.4,
    r: "0.62"
  }))))));
}
function FlagMX() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "15",
    viewBox: "0 0 22 15",
    style: {
      display: 'block',
      borderRadius: 2,
      boxShadow: '0 0 0 1px rgba(11,27,51,.12)'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "fsMX"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "22",
    height: "15",
    rx: "2"
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#fsMX)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "22",
    height: "15",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "7.34",
    height: "15",
    fill: "#006847"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.66",
    width: "7.34",
    height: "15",
    fill: "#CE1126"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(11 7.5)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    rx: "2.1",
    ry: "1.5",
    fill: "none",
    stroke: "#9c6a2f",
    strokeWidth: "0.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-1.3 -0.3 q1.3 1.6 2.6 0.2",
    fill: "none",
    stroke: "#5b3b1a",
    strokeWidth: "0.7",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "-0.1",
    cy: "-0.2",
    r: "0.7",
    fill: "#6b4423"
  }))));
}
function LangSwitcher() {
  const lang = window.useLang();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const close = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);
  const OPTS = [{
    code: 'en',
    Flag: FlagUS,
    label: 'EN',
    full: 'English'
  }, {
    code: 'es',
    Flag: FlagMX,
    label: 'ES',
    full: 'Español'
  }];
  const current = OPTS.find(o => o.code === lang) || OPTS[0];
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "group",
    "aria-label": window.t('lang.label'),
    style: {
      position: 'relative',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(v => !v),
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      height: 36,
      padding: '0 10px 0 11px',
      borderRadius: 999,
      border: '1.5px solid ' + (open ? 'var(--gold-500)' : 'var(--border-strong)'),
      backgroundColor: 'var(--white)',
      boxShadow: open ? '0 0 0 3px var(--ring)' : 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: '.04em',
      color: 'var(--ink-800)',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(current.Flag, null), current.label, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gray-500)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), open && /*#__PURE__*/React.createElement("div", {
    role: "listbox",
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      left: 0,
      minWidth: 150,
      zIndex: 50,
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      padding: 4
    }
  }, OPTS.map(o => {
    const active = o.code === lang;
    return /*#__PURE__*/React.createElement("button", {
      key: o.code,
      role: "option",
      "aria-selected": active,
      onClick: () => {
        window.FS_LANG.setLang(o.code);
        setOpen(false);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        padding: '9px 11px',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        background: active ? 'var(--gold-50)' : 'transparent',
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        fontWeight: active ? 700 : 600,
        color: active ? 'var(--ink-900)' : 'var(--ink-800)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = 'var(--gray-50)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(o.Flag, null), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, o.full), active && /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--gold-600)",
      strokeWidth: "2.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    })));
  })));
}
Object.assign(window, {
  LangSwitcher
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LangSwitcher.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductScreen.jsx
try { (() => {
/* ProductScreen — detail: gallery, info, add-to-cart, lab handling, COA link. */
function ProductScreen({
  productId,
  onAdd,
  onNav
}) {
  const {
    Button,
    Badge,
    QuantityStepper,
    TrustBadges,
    DisclaimerBanner
  } = window.FuturisticScienceDesignSystem_2ca7b0;
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const p = D.products.find(x => x.id === productId) || D.products[0];
  const pimg = window.R(p.image || D.image);
  const psub = t('sub.' + p.id);
  const trustItems = [{
    icon: 'purity',
    label: t('trust.purity')
  }, {
    icon: 'tested',
    label: t('trust.tested')
  }, {
    icon: 'accuracy',
    label: t('trust.accuracy')
  }, {
    icon: 'shipping',
    label: t('trust.shipping')
  }];
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('description');
  const [vi, setVi] = React.useState(0);
  const [format, setFormat] = React.useState('vial');
  React.useEffect(() => {
    setVi(0);
    setFormat('vial');
    setQty(1);
  }, [productId]);
  const variant = p.variants[vi] || p.variants[0];
  const hasBox = variant.box != null;
  const refs = p.references || [{
    source: 'PubChem',
    title: p.name + ' — Compound Summary',
    url: 'https://pubchem.ncbi.nlm.nih.gov/#query=' + encodeURIComponent(p.name)
  }, {
    source: 'PubMed',
    title: p.name + ' Research Literature',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=' + encodeURIComponent(p.name)
  }];
  const effFormat = hasBox ? format : 'vial';
  const unit = effFormat === 'box' ? variant.box : variant.vial;
  const addItem = () => onAdd({
    id: `${p.id}-${variant.strength}-${effFormat}`,
    name: p.name,
    subtitle: psub,
    size: `${variant.strength} · ${effFormat === 'box' ? t('pd.boxOf10') : t('pd.singleVial')}`,
    price: unit,
    image: pimg
  }, qty);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: '0 auto',
      padding: '28px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('shop'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--accent-teal)',
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      padding: 0
    }
  }, t('nav.shop')), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-800)',
      fontWeight: 600
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(170deg,#FFFFFF,#F2F4F7)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      aspectRatio: '1/1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    variant: "soft"
  }, p.purity, " ", t('word.purity'))), /*#__PURE__*/React.createElement("img", {
    src: pimg,
    alt: p.name,
    style: {
      height: '78%',
      filter: 'drop-shadow(0 24px 36px rgba(11,27,51,.16))'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    variant: "soft"
  }, t('badge.coaVerified')), p.inStock ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, t('pd.inStock')) : /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    variant: "soft"
  }, t('pd.outOfStock'))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 800,
      color: 'var(--ink-900)',
      letterSpacing: '-.025em',
      marginBottom: 6
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      marginBottom: 20
    }
  }, psub, " \xB7 ", p.size), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 32,
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, "$", unit.toFixed(2)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, effFormat === 'box' ? t('pd.perBox') : t('pd.perVial'))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      marginBottom: 22,
      maxWidth: 460
    }
  }, t('blurb.' + p.id)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--gray-500)',
      marginBottom: 10
    }
  }, t('pd.strength')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, p.variants.map((vr, i) => /*#__PURE__*/React.createElement("button", {
    key: vr.strength,
    onClick: () => setVi(i),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      padding: '9px 16px',
      borderRadius: 'var(--radius-md)',
      background: i === vi ? 'var(--gold-50)' : 'var(--white)',
      color: i === vi ? 'var(--gold-700)' : 'var(--ink-800)',
      border: i === vi ? '1.5px solid var(--gold-500)' : '1.5px solid var(--border-strong)',
      boxShadow: i === vi ? '0 0 0 3px var(--ring)' : 'none'
    }
  }, vr.strength)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--gray-500)',
      marginBottom: 10
    }
  }, t('pd.purchaseOption')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, [{
    key: 'vial',
    label: t('pd.singleVial'),
    price: variant.vial,
    disabled: false
  }, {
    key: 'box',
    label: t('pd.boxOf10'),
    price: variant.box,
    disabled: !hasBox
  }].map(opt => {
    const active = effFormat === opt.key;
    const save = opt.key === 'box' && hasBox ? Math.round((1 - variant.box / (variant.vial * 10)) * 100) : 0;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.key,
      disabled: opt.disabled,
      onClick: () => setFormat(opt.key),
      style: {
        textAlign: 'left',
        cursor: opt.disabled ? 'not-allowed' : 'pointer',
        position: 'relative',
        padding: '13px 15px',
        borderRadius: 'var(--radius-md)',
        opacity: opt.disabled ? 0.45 : 1,
        background: active ? 'var(--gold-50)' : 'var(--white)',
        border: active ? '1.5px solid var(--gold-500)' : '1.5px solid var(--border-strong)',
        boxShadow: active ? '0 0 0 3px var(--ring)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        fontWeight: 700,
        color: 'var(--ink-900)',
        marginBottom: 3
      }
    }, opt.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 15,
        fontWeight: 600,
        color: active ? 'var(--gold-700)' : 'var(--ink-800)'
      }
    }, opt.disabled ? '—' : `$${opt.price.toFixed(2)}`), save > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 11,
        right: 12,
        fontFamily: 'var(--font-body)',
        fontSize: 10.5,
        fontWeight: 800,
        letterSpacing: '.04em',
        color: 'var(--teal-600)',
        background: 'var(--teal-50)',
        borderRadius: 'var(--radius-pill)',
        padding: '2px 7px'
      }
    }, t('pd.save'), " ", save, "%"));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    disabled: !p.inStock,
    onClick: addItem,
    style: {
      flex: 1
    }
  }, p.inStock ? `${t('btn.addToCart')} · $${(unit * qty).toFixed(2)}` : t('pd.outOfStock'))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('coa'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--accent-teal)',
      padding: 0,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6"
  })), t('pd.viewCoa', {
    b: p.batch
  })), /*#__PURE__*/React.createElement(DisclaimerBanner, {
    variant: "inline",
    text: t('ruo'),
    detail: t('pd.ruoDetail')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 24
    }
  }, [['description', t('pd.tabDesc')], ['handling', t('pd.tabHandling')], ['shipping', t('pd.tabShipping')]].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '12px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      fontWeight: 700,
      color: tab === id ? 'var(--ink-900)' : 'var(--gray-500)',
      borderBottom: tab === id ? '2px solid var(--gold-500)' : '2px solid transparent',
      marginBottom: -1
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, tab === 'description' && /*#__PURE__*/React.createElement("p", null, p.name, " (", psub, ") ", t('pd.descTail')), tab === 'handling' && /*#__PURE__*/React.createElement("div", null, t('pd.handling').split('\n').map((ln, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      marginBottom: i === 0 ? 12 : 0
    }
  }, ln))), tab === 'shipping' && /*#__PURE__*/React.createElement("p", null, t('pd.shipping')))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      padding: '28px',
      background: 'var(--surface-subtle)',
      borderRadius: 'var(--radius-xl)'
    }
  }, /*#__PURE__*/React.createElement(TrustBadges, {
    items: trustItems
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      background: 'var(--gold-50)',
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-xl)',
      padding: '30px 34px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gold-600)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  })), /*#__PURE__*/React.createElement("span", {
    className: "fs-eyebrow",
    style: {
      color: 'var(--gold-700)',
      margin: 0
    }
  }, t('irn.title'))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: '0 0 14px'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-900)'
    }
  }, t('irn.lead')), t('irn.lead2')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: '0 0 14px'
    }
  }, t('irn.p2')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: 0
    }
  }, t('irn.p3')))));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ShopScreen.jsx
try { (() => {
/* ShopScreen — filters sidebar + product grid. */
function ReconCalculator() {
  const t = window.t;
  const [pep, setPep] = React.useState('10');
  const [water, setWater] = React.useState('2');
  const [dose, setDose] = React.useState('250');
  const [doseUnit, setDoseUnit] = React.useState('mcg'); // 'mcg' | 'mg'
  const [syringe, setSyringe] = React.useState('100'); // U-100 (1mL) | 50 (0.5mL) | 30 (0.3mL)

  const pepN = parseFloat(pep),
    waterN = parseFloat(water),
    doseN = parseFloat(dose),
    synN = parseFloat(syringe);
  const doseMcg = doseUnit === 'mg' ? doseN * 1000 : doseN; // normalize target to mcg
  const valid = pepN > 0 && waterN > 0 && doseN > 0;
  let res = null,
    overfill = false;
  if (valid) {
    const concMgPerMl = pepN / waterN; // mg/mL
    const concMcgPerMl = concMgPerMl * 1000; // mcg/mL
    const drawMl = doseMcg / concMcgPerMl; // mL to draw
    const units = drawMl * 100; // insulin units (U-100: 1mL = 100u)
    const dosesPerVial = pepN * 1000 / doseMcg; // number of target amounts in the vial
    overfill = units > synN;
    res = {
      conc: concMgPerMl,
      concMcg: concMcgPerMl,
      drawMl,
      units,
      dosesPerVial
    };
  }
  const syringes = [{
    v: '30',
    label: 'U-100 · 0.3 mL'
  }, {
    v: '50',
    label: 'U-100 · 0.5 mL'
  }, {
    v: '100',
    label: 'U-100 · 1.0 mL'
  }];
  const fmt = (n, d = 2) => Number.isFinite(n) ? n.toLocaleString(undefined, {
    maximumFractionDigits: d
  }) : '—';
  const field = (label, unit, value, onChange) => /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--ink-800)',
      marginBottom: 7
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "decimal",
    min: "0",
    value: value,
    onChange: e => onChange(e.target.value),
    style: {
      flex: 1,
      minWidth: 0,
      height: 46,
      padding: '0 14px',
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      color: 'var(--ink-900)',
      background: 'transparent'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--gray-500)',
      background: 'var(--gray-100)',
      borderLeft: '1px solid var(--border-subtle)'
    }
  }, unit)));
  const doseField = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--ink-800)',
      marginBottom: 7
    }
  }, t('recon.doseLabel')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "decimal",
    min: "0",
    value: dose,
    onChange: e => setDose(e.target.value),
    style: {
      flex: 1,
      minWidth: 0,
      height: 46,
      padding: '0 14px',
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      color: 'var(--ink-900)',
      background: 'transparent'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 'none',
      borderLeft: '1px solid var(--border-subtle)'
    }
  }, ['mcg', 'mg'].map(u => {
    const on = doseUnit === u;
    return /*#__PURE__*/React.createElement("button", {
      key: u,
      type: "button",
      onClick: () => setDoseUnit(u),
      style: {
        cursor: 'pointer',
        border: 'none',
        padding: '0 13px',
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        fontWeight: on ? 700 : 600,
        backgroundColor: on ? '#0B1B33' : '#EEF1F4',
        color: on ? '#FFFFFF' : '#6B7686',
        borderLeft: u === 'mg' ? '1px solid var(--border-subtle)' : 'none'
      }
    }, u);
  }))));
  const stat = (label, value, sub, highlight) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: highlight ? 'var(--ink-900)' : 'var(--surface-subtle)',
      border: highlight ? 'none' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: highlight ? 'var(--gold-400)' : 'var(--gray-500)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 800,
      color: highlight ? '#fff' : 'var(--ink-900)',
      lineHeight: 1
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: highlight ? 'rgba(255,255,255,.6)' : 'var(--text-muted)',
      marginTop: 6
    }
  }, sub));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      scrollMarginTop: 80
    },
    id: "recon"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 28px 22px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-eyebrow",
    style: {
      marginBottom: 8
    }
  }, t('recon.eyebrow')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 800,
      color: 'var(--ink-900)',
      letterSpacing: '-.02em',
      margin: '0 0 8px'
    }
  }, t('recon.title')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 620
    }
  }, t('recon.sub'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      borderRight: '1px solid var(--border-subtle)'
    }
  }, field(t('recon.pepLabel'), t('recon.pepUnit'), pep, setPep), field(t('recon.waterLabel'), t('recon.waterUnit'), water, setWater), doseField, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--ink-800)',
      marginBottom: 7
    }
  }, t('recon.syringeLabel')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, syringes.map(s => {
    const on = syringe === s.v;
    return /*#__PURE__*/React.createElement("button", {
      key: s.v,
      onClick: () => setSyringe(s.v),
      style: {
        flex: 1,
        cursor: 'pointer',
        padding: '10px 6px',
        borderRadius: 'var(--radius-md)',
        border: '1.5px solid ' + (on ? 'var(--ink-900)' : 'var(--border-subtle)'),
        background: on ? 'var(--ink-900)' : 'var(--gray-50)',
        color: on ? '#fff' : 'var(--ink-800)',
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        fontWeight: on ? 700 : 600,
        transition: 'all var(--dur-fast) var(--ease-out)'
      }
    }, s.label);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 28px',
      background: 'var(--surface-page)'
    }
  }, !valid && /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, t('recon.invalid')), valid && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, stat(t('recon.resDraw'), fmt(res.units, 1) + ' ' + t('recon.units'), fmt(res.drawMl, 3) + ' mL', true), stat(t('recon.resConc'), fmt(res.concMcg, 0), 'mcg ' + t('recon.perMl')), stat(t('recon.resDoses'), fmt(res.dosesPerVial, 1), doseUnit), stat(t('recon.resConc') + ' (mg)', fmt(res.conc, 2), 'mg ' + t('recon.perMl')), overfill && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      gap: 9,
      alignItems: 'flex-start',
      background: 'var(--gold-50)',
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'var(--gold-800, #7a5a17)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gold-600)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  })), /*#__PURE__*/React.createElement("span", null, t('recon.overfill')))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 28px',
      background: 'var(--ink-900)',
      fontSize: 11.5,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.7)'
    }
  }, t('recon.disclaimer'))));
}
function ShopScreen({
  onOpenProduct
}) {
  const {
    ProductCard,
    Select,
    DisclaimerBanner,
    Badge
  } = window.FuturisticScienceDesignSystem_2ca7b0;
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const catLabel = c => t('cat.' + c);
  const [cat, setCat] = React.useState(null);
  const [sort, setSort] = React.useState('popular');
  const [sortOpen, setSortOpen] = React.useState(false);
  const sortRef = React.useRef(null);
  React.useEffect(() => {
    const close = e => {
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);
  const sortOpts = [{
    value: 'popular',
    label: t('shop.sortPopular')
  }, {
    value: 'az',
    label: t('shop.sortAZ')
  }, {
    value: 'za',
    label: t('shop.sortZA')
  }, {
    value: 'plh',
    label: t('shop.sortPLH')
  }, {
    value: 'phl',
    label: t('shop.sortPHL')
  }, {
    value: 'newest',
    label: t('shop.sortNewest')
  }];
  const sortLabel = (sortOpts.find(o => o.value === sort) || sortOpts[0]).label;
  let list = D.products.filter(p => !cat || p.category === cat);
  if (sort === 'plh') list = [...list].sort((a, b) => a.price - b.price);
  if (sort === 'phl') list = [...list].sort((a, b) => b.price - a.price);
  if (sort === 'az') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  if (sort === 'za') list = [...list].sort((a, b) => b.name.localeCompare(a.name));
  if (sort === 'newest') list = [...list].sort((a, b) => (b.batch || '').localeCompare(a.batch || ''));
  if (sort === 'popular') list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-subtle)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '48px 28px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-eyebrow",
    style: {
      marginBottom: 10
    }
  }, t('shop.eyebrow')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 800,
      color: 'var(--ink-900)',
      letterSpacing: '-.025em',
      marginBottom: 12
    }
  }, t('shop.title')))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '16px 28px',
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      gap: 7,
      overflowX: 'auto'
    }
  }, D.categories.map(c => {
    const active = cat === c;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => setCat(active ? null : c),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        fontWeight: active ? 700 : 600,
        cursor: 'pointer',
        padding: '7px 13px',
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
        border: '1.5px solid ' + (active ? 'var(--ink-900)' : 'var(--border-subtle)'),
        background: active ? 'var(--ink-900)' : 'var(--gray-50)',
        color: active ? '#fff' : 'var(--ink-800)',
        flex: 'none',
        transition: 'all var(--dur-fast) var(--ease-out)'
      }
    }, catLabel(c));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCat(null),
    disabled: !cat,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      flex: 'none',
      cursor: cat ? 'pointer' : 'default',
      padding: '7px 10px',
      border: 'none',
      background: 'none',
      color: cat ? 'var(--accent-teal)' : 'var(--text-faint)',
      marginLeft: 2
    }
  }, t('shop.clearFilter')))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '28px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-900)'
    }
  }, list.length), " ", t('shop.products')), /*#__PURE__*/React.createElement("div", {
    ref: sortRef,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--ink-800)',
      whiteSpace: 'nowrap'
    }
  }, t('shop.sortBy')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSortOpen(v => !v),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      minWidth: 200,
      height: 44,
      padding: '0 14px',
      cursor: 'pointer',
      background: 'var(--white)',
      border: '1.5px solid ' + (sortOpen ? 'var(--gold-500)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: sortOpen ? '0 0 0 3px var(--ring)' : 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--ink-900)',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", null, sortLabel), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gray-500)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none',
      transform: sortOpen ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), sortOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      right: 0,
      minWidth: 220,
      zIndex: 30,
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      padding: 4
    }
  }, sortOpts.map(o => {
    const active = o.value === sort;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      onClick: () => {
        setSort(o.value);
        setSortOpen(false);
      },
      style: {
        display: 'block',
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        padding: '10px 14px',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        fontWeight: active ? 700 : 500,
        background: active ? 'var(--ink-900)' : 'transparent',
        color: active ? '#fff' : 'var(--ink-800)',
        transition: 'background var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = 'var(--gray-50)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = 'transparent';
      }
    }, o.label);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    subtitle: t('sub.' + p.id),
    size: p.size,
    price: p.price,
    purity: p.purity.replace(/\..*/, '') + '%+',
    purityLabel: t('word.purity'),
    selectLabel: t('btn.selectOptions'),
    outOfStockLabel: t('btn.outOfStock'),
    image: window.R(p.image || D.image),
    inStock: p.inStock,
    fromPrice: true,
    badge: p.featured ? {
      tone: 'gold',
      label: t('badge.featured')
    } : null,
    onSelect: () => onOpenProduct(p.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(DisclaimerBanner, {
    variant: "ink",
    text: t('ruo'),
    detail: t('ruo.detail')
  })), /*#__PURE__*/React.createElement(ReconCalculator, null))));
}
Object.assign(window, {
  ShopScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ShopScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SimplePage.jsx
try { (() => {
/* SimplePage — About / FAQ / Contact / legal pages (compliance-safe prose). */

/* FaqItem — collapsible question/answer row. Click the question to expand. */
function FaqItem({
  q,
  a,
  defaultOpen = false
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-subtle)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      transition: 'border-color var(--dur-fast) var(--ease-out)',
      borderColor: open ? 'var(--gold-300)' : 'var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(v => !v),
    "aria-expanded": open,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      padding: '18px 22px',
      fontFamily: 'var(--font-display)',
      fontSize: 16.5,
      fontWeight: 700,
      color: 'var(--ink-900)',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gold-600)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px 20px',
      fontSize: 14.5,
      lineHeight: 1.65,
      color: 'var(--text-body)'
    }
  }, a))));
}

/* ContactForm — simplified single-column support ticket form. */
function ContactForm() {
  const {
    Input,
    Select,
    Button
  } = window.FuturisticScienceDesignSystem_2ca7b0;
  window.useLang();
  const t = window.t;
  const [f, setF] = React.useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const set = k => e => setF(s => ({
    ...s,
    [k]: e.target.value
  }));
  const subjectOpts = [{
    value: '',
    label: t('contact.subjectPlaceholder')
  }, ...t('contact.subjects').map(s => ({
    value: s,
    label: s
  }))];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 30,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: t('contact.firstName'),
    value: f.first,
    onChange: set('first'),
    placeholder: "Jane"
  }), /*#__PURE__*/React.createElement(Input, {
    label: t('contact.lastName'),
    value: f.last,
    onChange: set('last'),
    placeholder: "Researcher"
  })), /*#__PURE__*/React.createElement(Input, {
    label: t('contact.email'),
    type: "email",
    value: f.email,
    onChange: set('email'),
    placeholder: "you@lab.org"
  }), /*#__PURE__*/React.createElement(Input, {
    label: t('contact.phone'),
    type: "tel",
    value: f.phone,
    onChange: set('phone'),
    placeholder: "(555) 000-0000"
  }), /*#__PURE__*/React.createElement(Select, {
    label: t('contact.subject'),
    options: subjectOpts,
    value: f.subject,
    onChange: set('subject')
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink-800)',
      marginBottom: 6
    }
  }, t('contact.message')), /*#__PURE__*/React.createElement("textarea", {
    rows: "5",
    value: f.message,
    onChange: set('message'),
    placeholder: t('contact.msgPlaceholder'),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--ink-900)',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true
  }, t('contact.send'))));
}
function SimplePage({
  page,
  onNav
}) {
  const {
    DisclaimerBanner,
    Input,
    Button,
    Badge
  } = window.FuturisticScienceDesignSystem_2ca7b0;
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const Shell = ({
    eyebrow,
    title,
    children,
    narrow
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: narrow ? 720 : 1100,
      margin: '0 auto',
      padding: '56px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-eyebrow",
    style: {
      marginBottom: 10
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 800,
      color: 'var(--ink-900)',
      letterSpacing: '-.025em',
      marginBottom: 28
    }
  }, title), children));
  const Prose = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      maxWidth: 680
    }
  }, children);
  const H2 = ({
    children
  }) => /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--ink-900)',
      margin: '28px 0 12px'
    }
  }, children);
  if (page === 'about') return /*#__PURE__*/React.createElement(Shell, {
    eyebrow: t('about.eyebrow'),
    title: t('about.title')
  }, /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("strong", null, D.contact.company), " ", t('about.p1pre'), /*#__PURE__*/React.createElement("em", null, t('about.p1em')), t('about.p1post')), /*#__PURE__*/React.createElement(H2, null, t('about.h2a')), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 16
    }
  }, t('about.pa')), /*#__PURE__*/React.createElement(H2, null, t('about.h2b')), /*#__PURE__*/React.createElement("p", null, t('about.pb'))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement(DisclaimerBanner, {
    variant: "ink",
    text: t('ruo')
  })));
  if (page === 'faq') {
    const faqs = t('faq.items');
    return /*#__PURE__*/React.createElement(Shell, {
      eyebrow: t('faq.eyebrow'),
      title: t('faq.title'),
      narrow: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, faqs.map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
      key: i,
      q: q,
      a: a,
      defaultOpen: i === 0
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(DisclaimerBanner, {
      variant: "inline",
      text: t('ruo')
    })));
  }
  if (page === 'contact') return /*#__PURE__*/React.createElement(Shell, {
    eyebrow: t('contact.eyebrow'),
    title: t('contact.title'),
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 13,
      alignItems: 'flex-start',
      background: 'var(--gold-50)',
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 18px',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gold-600)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-900)'
    }
  }, t('contact.noteLabel')), " ", t('contact.note'))), /*#__PURE__*/React.createElement(ContactForm, null), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 20
    }
  }, t('contact.altPrefix'), " ", /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + D.contact.email,
    style: {
      color: 'var(--accent-teal)',
      fontWeight: 600
    }
  }, D.contact.email))));
  if (page === 'account') return /*#__PURE__*/React.createElement(Shell, {
    eyebrow: t('acct.eyebrow'),
    title: t('acct.title'),
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 380,
      margin: '0 auto',
      background: 'var(--surface-subtle)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: t('contact.email'),
    type: "email",
    placeholder: "you@lab.org"
  }), /*#__PURE__*/React.createElement(Input, {
    label: t('acct.password'),
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true
  }, t('acct.signIn')), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, t('acct.new'), " ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--accent-teal)',
      fontWeight: 600
    }
  }, t('acct.create'))))));

  // returns & refunds
  if (page === 'returns') {
    const company = D.contact.company;
    const Card = ({
      children,
      style
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-subtle)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: 26,
        ...style
      }
    }, children);
    const noItems = t('ret.noList');
    return /*#__PURE__*/React.createElement(Shell, {
      eyebrow: t('ret.eyebrow'),
      title: t('ret.title')
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        margin: '4px 0 22px',
        padding: '14px 18px',
        background: 'var(--gold-50)',
        border: '1px solid var(--gold-200)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--gold-700)",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 8v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 16h.01"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 17,
        fontWeight: 800,
        color: 'var(--ink-900)'
      }
    }, t('ret.finalLine'))), /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 18,
        maxWidth: 760
      }
    }, t('ret.intro'))), /*#__PURE__*/React.createElement(Card, {
      style: {
        margin: '4px 0 8px',
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, noItems.map((item, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--gray-500)",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        flex: 'none',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m15 9-6 6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 9 6 6"
    })), /*#__PURE__*/React.createElement("span", null, item))))), /*#__PURE__*/React.createElement(H2, null, t('ret.lawTitle')), /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 18,
        maxWidth: 760
      }
    }, t('ret.lawBody'))), /*#__PURE__*/React.createElement(H2, null, t('ret.inspectTitle')), /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 18,
        maxWidth: 760
      }
    }, t('ret.inspectBody'))), /*#__PURE__*/React.createElement(H2, null, t('ret.commitTitle')), /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 8,
        maxWidth: 760
      }
    }, t('ret.commitBody').replace('{company}', company))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        maxWidth: 820
      }
    }, /*#__PURE__*/React.createElement(DisclaimerBanner, {
      variant: "ink",
      text: t('ret.disclaimer').replace('{company}', company)
    })));
  }

  // RUO Policy
  if (page === 'ruo') {
    const company = D.contact.company;
    const sub = s => (s || '').split('{company}').join(company);
    const sections = t('ruo.sections');
    const slug = h => h.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const jump = h => {
      const el = document.getElementById('ruo-' + slug(h));
      const sc = document.getElementById('kit-scroll');
      if (el && sc) sc.scrollTo({
        top: sc.scrollTop + el.getBoundingClientRect().top - sc.getBoundingClientRect().top - 80,
        behavior: 'smooth'
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-page)',
        minHeight: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--ink-900)',
        color: '#fff',
        borderBottom: '1px solid rgba(255,255,255,.08)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '52px 28px 44px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "fs-eyebrow",
      style: {
        color: 'var(--gold-400)',
        marginBottom: 12
      }
    }, t('ruo.eyebrow')), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 40,
        fontWeight: 800,
        letterSpacing: '-.025em',
        margin: '0 0 16px',
        maxWidth: 760
      }
    }, t('ruo.title')), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.7,
        color: 'rgba(255,255,255,.72)',
        maxWidth: 760,
        margin: 0
      }
    }, sub(t('ruo.intro'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 24
      }
    }, t('ruo.chips').map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '.02em',
        color: 'rgba(255,255,255,.92)',
        background: 'rgba(255,255,255,.07)',
        border: '1px solid rgba(255,255,255,.14)',
        borderRadius: 'var(--radius-pill)',
        padding: '8px 15px'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--gold-400)",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 12 2 2 4-4"
    })), c))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '40px 28px 80px',
        display: 'grid',
        gridTemplateColumns: '232px 1fr',
        gap: 48,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        position: 'sticky',
        top: 90
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "fs-eyebrow",
      style: {
        marginBottom: 12
      }
    }, t('legal.eyebrow')), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderLeft: '1px solid var(--border-subtle)'
      }
    }, sections.map(([h]) => /*#__PURE__*/React.createElement("button", {
      key: h,
      onClick: () => jump(h),
      style: {
        textAlign: 'left',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        fontWeight: 600,
        color: 'var(--text-muted)',
        padding: '7px 0 7px 16px',
        marginLeft: -1,
        borderLeft: '2px solid transparent',
        lineHeight: 1.4
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = 'var(--ink-900)';
        e.currentTarget.style.borderLeftColor = 'var(--gold-500)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = 'var(--text-muted)';
        e.currentTarget.style.borderLeftColor = 'transparent';
      }
    }, h))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22,
        background: 'var(--surface-subtle)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: 'var(--ink-900)',
        marginBottom: 5
      }
    }, t('ruo.needHelp')), /*#__PURE__*/React.createElement("a", {
      href: 'mailto:' + D.contact.email,
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--accent-teal)',
        wordBreak: 'break-all'
      }
    }, D.contact.email))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        marginBottom: 40
      }
    }, t('ruo.summary').map(([h, b], i) => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        background: 'var(--surface-subtle)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'var(--gold-100)',
        color: 'var(--gold-700)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 15,
        marginBottom: 14
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 16,
        fontWeight: 700,
        color: 'var(--ink-900)',
        marginBottom: 6
      }
    }, h), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, sub(b))))), sections.map(([h, items]) => /*#__PURE__*/React.createElement("section", {
      key: h,
      id: 'ruo-' + slug(h),
      style: {
        scrollMarginTop: 90,
        marginBottom: 36
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 23,
        fontWeight: 700,
        color: 'var(--ink-900)',
        letterSpacing: '-.01em',
        margin: '0 0 14px',
        paddingBottom: 12,
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, h), items.map((it, i) => Array.isArray(it) ? /*#__PURE__*/React.createElement("ul", {
      key: i,
      style: {
        listStyle: 'none',
        margin: '0 0 14px',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, it.map((li, j) => /*#__PURE__*/React.createElement("li", {
      key: j,
      style: {
        display: 'flex',
        gap: 11,
        alignItems: 'flex-start',
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "17",
      height: "17",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--gold-600)",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        flex: 'none',
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    })), /*#__PURE__*/React.createElement("span", null, sub(li))))) : /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontSize: 15,
        lineHeight: 1.72,
        color: 'var(--text-body)',
        margin: '0 0 14px',
        maxWidth: 720
      }
    }, sub(it))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(DisclaimerBanner, {
      variant: "ink",
      text: t('ruo')
    })))));
  }

  // legal pages
  const legal = {
    privacy: [t('lp.privacy.title'), t('lp.privacy.sec')],
    terms: [t('lp.terms.title'), t('lp.terms.sec')],
    shipping: [t('lp.shipping.title'), t('lp.shipping.sec')]
  }[page];
  if (legal) {
    const [title, sections] = legal;
    const company = D.contact.company;
    const sub = s => (s || '').split('{company}').join(company).split('{email}').join(D.contact.email);
    const introKey = 'lp.' + page + '.intro';
    const intro = t(introKey);
    const hasIntro = intro && intro !== introKey;
    const renderBody = (body, h) => {
      const items = Array.isArray(body) ? body : [body];
      return items.map((it, i) => Array.isArray(it) ? /*#__PURE__*/React.createElement("ul", {
        key: i,
        style: {
          listStyle: 'none',
          margin: '0 0 12px',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }
      }, it.map((li, j) => /*#__PURE__*/React.createElement("li", {
        key: j,
        style: {
          display: 'flex',
          gap: 11,
          alignItems: 'flex-start',
          lineHeight: 1.6
        }
      }, /*#__PURE__*/React.createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "var(--gold-600)",
        strokeWidth: "2.4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: {
          flex: 'none',
          marginTop: 3
        }
      }, /*#__PURE__*/React.createElement("path", {
        d: "M20 6 9 17l-5-5"
      })), /*#__PURE__*/React.createElement("span", null, sub(li))))) : /*#__PURE__*/React.createElement("p", {
        key: i,
        style: {
          marginBottom: 12
        }
      }, sub(it)));
    };
    return /*#__PURE__*/React.createElement(Shell, {
      eyebrow: t('legal.eyebrow'),
      title: title,
      narrow: true
    }, /*#__PURE__*/React.createElement(Prose, null, hasIntro && /*#__PURE__*/React.createElement("p", {
      style: {
        marginBottom: 24,
        fontSize: 16,
        color: 'var(--text-body)'
      }
    }, sub(intro)), sections.map(([h, body]) => /*#__PURE__*/React.createElement("div", {
      key: h
    }, /*#__PURE__*/React.createElement(H2, null, h), renderBody(body, h))), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 24,
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, t('legal.questions', {
      email: D.contact.email,
      company: D.contact.company
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(DisclaimerBanner, {
      variant: "ink",
      text: t('ruo')
    })));
  }
  return /*#__PURE__*/React.createElement(Shell, {
    eyebrow: "",
    title: t('page.soon')
  }, /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("p", null, t('page.soonBody'))));
}
Object.assign(window, {
  SimplePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SimplePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TrackOrderScreen.jsx
try { (() => {
/* TrackOrderScreen — enter a tracking number, detect the carrier, and show
   the latest scan + a status timeline. Demo: status is derived deterministically
   from the number so the same input always shows the same result. Wire to your
   carrier/WooCommerce shipping API to make it live. */
function TrackOrderScreen() {
  const {
    Button
  } = window.FuturisticScienceDesignSystem_2ca7b0;
  const D = window.FS_DATA;
  window.useLang();
  const t = window.t;
  const [num, setNum] = React.useState('');
  const [result, setResult] = React.useState(null); // null | {error} | {carrier,...}

  const detectCarrier = raw => {
    const s = raw.replace(/\s+/g, '');
    if (/^1Z[0-9A-Z]{16}$/i.test(s)) return {
      name: 'UPS',
      url: 'https://www.ups.com/track?tracknum=' + s
    };
    const digits = s.replace(/\D/g, '');
    if (digits.length === 12 || digits.length === 15) return {
      name: 'FedEx',
      url: 'https://www.fedex.com/fedextrack/?trknbr=' + digits
    };
    if (digits.length === 22 || digits.length === 20 || /^(94|93|92|95|420)/.test(digits)) return {
      name: 'USPS',
      url: 'https://tools.usps.com/go/TrackConfirmAction?tLabels=' + digits
    };
    if (digits.length === 10) return {
      name: 'DHL',
      url: 'https://www.dhl.com/us-en/home/tracking.html?tracking-id=' + digits
    };
    return null;
  };
  const hash = s => {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) >>> 0;
    return h;
  };
  const fmtDate = d => d.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  // Status stages, newest first. Index 0 = label only … 4 = delivered.
  const buildTimeline = stage => {
    const now = Date.now(),
      day = 86400000;
    const all = [{
      key: 'label',
      st: 'st.label',
      ev: 'ev.label',
      t: now - 5 * day
    }, {
      key: 'accepted',
      st: 'st.accepted',
      ev: 'ev.accepted',
      t: now - 4 * day
    }, {
      key: 'departed',
      st: 'st.transit',
      ev: 'ev.departed',
      t: now - 3 * day
    }, {
      key: 'arrived',
      st: 'st.transit',
      ev: 'ev.arrived',
      t: now - 1 * day
    }, {
      key: 'out',
      st: 'st.out',
      ev: 'ev.out',
      t: now - 0.2 * day
    }, {
      key: 'delivered',
      st: 'st.delivered',
      ev: 'ev.delivered',
      t: now
    }];
    return all.slice(0, stage + 1);
  };
  const run = () => {
    const carrier = detectCarrier(num);
    if (!carrier || num.replace(/\s+/g, '').length < 8) {
      setResult({
        error: true
      });
      return;
    }
    const h = hash(num.replace(/\s+/g, ''));
    const stage = 2 + h % 4; // 2..5  → in transit … delivered
    const events = buildTimeline(stage);
    const latest = events[events.length - 1];
    const day = 86400000;
    const eta = new Date(Date.now() + (stage >= 5 ? 0 : 5 - stage) * day);
    setResult({
      carrier,
      events: events.slice().reverse(),
      latest,
      eta,
      delivered: stage >= 5
    });
  };
  const clear = () => {
    setNum('');
    setResult(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg, var(--gold-300) 0%, var(--gold-500) 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '48px 28px 36px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-eyebrow",
    style: {
      color: 'var(--ink-800)',
      marginBottom: 10
    }
  }, t('track.eyebrow')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 900,
      color: 'var(--ink-900)',
      letterSpacing: '-.02em',
      margin: '0 0 10px'
    }
  }, t('track.title')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--ink-800)',
      margin: 0,
      opacity: 0.85
    }
  }, t('track.sub')))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '36px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 24,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "trk",
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--ink-900)',
      marginBottom: 8
    }
  }, t('track.label')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: "trk",
    value: num,
    onChange: e => setNum(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') run();
    },
    placeholder: t('track.ph'),
    style: {
      flex: '1 1 280px',
      boxSizing: 'border-box',
      height: 50,
      padding: '0 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      color: 'var(--ink-900)',
      background: 'var(--gray-100)',
      border: '1.5px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: run
  }, t('track.btn'))), result && /*#__PURE__*/React.createElement("button", {
    onClick: clear,
    style: {
      marginTop: 12,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--accent-teal)',
      padding: 0
    }
  }, t('track.clear'))), !result && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      textAlign: 'center',
      fontSize: 14,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, t('track.empty')), result && result.error && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      background: 'var(--gray-100)',
      borderRadius: 'var(--radius-lg)',
      padding: '24px',
      textAlign: 'center',
      fontSize: 14.5,
      color: 'var(--text-body)',
      lineHeight: 1.6
    }
  }, t('track.notFound', {
    email: D.contact.email
  })), result && !result.error && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: result.delivered ? 'var(--teal-600, #1f8a5b)' : 'var(--ink-900)',
      color: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: '24px 26px',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.14)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, result.delivered ? /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "3",
    width: "15",
    height: "13",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8h4l3 3v5h-7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5.5",
    cy: "18.5",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18.5",
    cy: "18.5",
    r: "2.5"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: result.delivered ? 'rgba(255,255,255,.85)' : 'var(--gold-400)',
      marginBottom: 4
    }
  }, t('track.statusLabel')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 800
    }
  }, t('track.' + result.latest.st))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,.7)',
      marginBottom: 4
    }
  }, t('track.estimate')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      fontWeight: 700
    }
  }, fmtDate(result.eta)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 14,
      flexWrap: 'wrap',
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 20px',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--gray-500)',
      marginBottom: 3
    }
  }, t('track.carrier')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, result.carrier.name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--gray-500)',
      marginBottom: 3
    }
  }, t('track.label')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--ink-900)'
    }
  }, num.trim()))), /*#__PURE__*/React.createElement("a", {
    href: result.carrier.url,
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--accent-teal)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 3h6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 14 21 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  })), t('track.viewCarrier'))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '8px 22px',
      marginTop: 14
    }
  }, result.events.map((ev, i) => {
    const isLatest = i === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: ev.key,
      style: {
        display: 'flex',
        gap: 16,
        padding: '16px 0',
        borderBottom: i < result.events.length - 1 ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: isLatest ? 'var(--gold-500)' : 'var(--gray-300, #cbd2dc)',
        border: isLatest ? '3px solid var(--gold-200)' : 'none'
      }
    }), i < result.events.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        width: 2,
        background: 'var(--border-subtle)',
        marginTop: 4
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        paddingBottom: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        fontWeight: isLatest ? 700 : 600,
        color: isLatest ? 'var(--ink-900)' : 'var(--text-body)'
      }
    }, t('track.' + ev.ev)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, new Date(ev.t).toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }))), isLatest && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        alignSelf: 'flex-start',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--gold-700)',
        background: 'var(--gold-50)',
        border: '1px solid var(--gold-200)',
        borderRadius: 'var(--radius-pill)',
        padding: '4px 10px'
      }
    }, t('track.' + ev.st)));
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: 13,
      color: 'var(--text-muted)',
      textAlign: 'center',
      lineHeight: 1.6
    }
  }, t('track.help', {
    email: D.contact.email
  }))));
}
Object.assign(window, {
  TrackOrderScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TrackOrderScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Futuristic Science — sample catalog data (research-use-only mock).
   Real pricing: each product has strength variants with vial + box (10-vial) prices.
   `price` = lowest vial price (used for "from" display + filters).
   `size`  = strength range label for cards.
   NOTE: all cards reuse the GHK-CU vial photo — brand supplied only that image.
   No dosing, medical, or human-use copy anywhere. */
(function () {
  const products = [{
    id: 'glow',
    name: 'GLOW',
    subtitle: 'Peptide Blend',
    category: 'Dermal Research',
    featured: true,
    inStock: true,
    purity: '99.3%',
    batch: 'FUTURE-CN-MARK-GLOW-0701-001',
    image: '../../assets/vial-glow-70mg.png',
    blurb: 'A multi-peptide research blend supplied as lyophilized powder for in-vitro laboratory research.',
    components: [['BPC-157', '15 amino acids · 1,419 Da'], ['TB-500', '43 amino acids · 4,963 Da'], ['GHK-Cu', '3 amino acids + Cu²⁺ · 403 Da']],
    references: [{
      source: 'Tydes Research',
      title: 'GLOW Peptide Blend: GHK-Cu, TB-500, and BPC-157 in Regenerative Research',
      year: '2025',
      url: '#'
    }, {
      source: 'International Journal of Molecular Sciences',
      title: 'Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data',
      year: '2018',
      meta: 'PMID: 29986520',
      authors: 'Pickart L, Margolina A',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29986520/'
    }, {
      source: 'Nature Scientific Reports',
      title: 'Thymosin Beta 4 and Cardiac Repair',
      year: '2017',
      authors: 'Chi NC et al.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/?term=thymosin+beta+4+cardiac+repair'
    }, {
      source: 'Current Pharmaceutical Design',
      title: 'BPC 157 and Standard Angiogenic Growth Factors. Gastrointestinal Tract Healing, Lessons from Tendon, Ligament, Muscle and Bone Healing',
      year: '2018',
      meta: 'PMID: 30101703',
      authors: 'Seiwerth S et al.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30101703/'
    }, {
      source: 'Journal of Molecular Medicine',
      title: 'BPC-157 Interacts with the Nitric Oxide System',
      year: '2016',
      authors: 'Hsieh MJ et al.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157+nitric+oxide'
    }, {
      source: 'Cell and Tissue Research',
      title: 'Gastric Pentadecapeptide Body Protection Compound BPC 157 and Its Role in Accelerating Musculoskeletal Soft Tissue Healing',
      year: '2019',
      meta: 'PMID: 30915550',
      authors: 'Gwyer D et al.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30915550/'
    }, {
      source: 'Growth Hormone & IGF Research',
      title: 'BPC-157 Upregulates Growth Hormone Receptor Expression',
      year: '2018',
      url: 'https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157+growth+hormone+receptor'
    }, {
      source: 'Journal of Investigative Dermatology',
      title: 'Thymosin Beta-4 Accelerates Wound Healing',
      year: '1999',
      meta: 'PMID: 10594747',
      authors: 'Malinda KM et al.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/10594747/'
    }, {
      source: 'Cosmetics',
      title: 'The Human Tripeptide GHK and Tissue Remodeling',
      year: '2015',
      authors: 'Pickart L et al.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/?term=GHK+tissue+remodeling+Pickart'
    }, {
      source: 'Multiple Sources',
      title: 'Individual Peptide Research Literature',
      url: 'https://pubmed.ncbi.nlm.nih.gov/?term=research+peptides'
    }],
    variants: [{
      strength: '70mg',
      vial: 65,
      box: 360
    }]
  }, {
    id: 'retatrutide',
    name: 'RETA-3',
    subtitle: 'Triple Receptor Peptide',
    category: 'Metabolic Research',
    featured: true,
    inStock: true,
    purity: '99.2%',
    batch: 'FUTURE-CN-MARK-RETA-0701-001',
    image: '../../assets/vial-reta-3.png',
    blurb: 'A synthetic multi-receptor peptide supplied as lyophilized powder for in-vitro laboratory research.',
    variants: [{
      strength: '10mg',
      vial: 50,
      box: 225
    }, {
      strength: '20mg',
      vial: 75,
      box: 360
    }, {
      strength: '30mg',
      vial: 100,
      box: 440
    }]
  }, {
    id: 'tirzepatide',
    name: 'TIRZ-2',
    subtitle: 'Dual Receptor Peptide',
    category: 'Metabolic Research',
    featured: true,
    inStock: true,
    purity: '99.1%',
    batch: 'FUTURE-CN-MARK-TIRZ-0701-001',
    image: '../../assets/vial-tirz-2.png',
    blurb: 'A synthetic dual-receptor peptide supplied for laboratory research applications.',
    variants: [{
      strength: '10mg',
      vial: 55,
      box: 325
    }, {
      strength: '20mg',
      vial: 75,
      box: 400
    }, {
      strength: '30mg',
      vial: 100,
      box: 425
    }]
  }, {
    id: 'ghk-cu',
    name: 'GHK-Cu',
    subtitle: 'Copper Tripeptide',
    category: 'Dermal Research',
    featured: true,
    inStock: true,
    purity: '99.4%',
    batch: 'FUTURE-CN-MARK-GHKC-0701-001',
    blurb: 'A copper-binding tripeptide studied in laboratory research. Supplied as lyophilized powder for in-vitro investigation.',
    variants: [{
      strength: '50mg',
      vial: 30,
      box: 115
    }, {
      strength: '100mg',
      vial: 45,
      box: 140
    }]
  }, {
    id: 'bpc-157',
    name: 'BPC-157',
    subtitle: 'Body Protection Compound',
    category: 'Tissue Repair Research',
    featured: true,
    inStock: true,
    purity: '99.1%',
    batch: 'FUTURE-CN-MARK-BPCC-0701-001',
    image: '../../assets/vial-bpc-157.png',
    blurb: 'A synthetic peptide fragment used as a reference compound in laboratory research settings.',
    variants: [{
      strength: '5mg',
      vial: 20,
      box: 120
    }, {
      strength: '10mg',
      vial: 40,
      box: 205
    }]
  }, {
    id: 'tb-500',
    name: 'TB-500',
    subtitle: 'Thymosin Beta-4 Fragment',
    category: 'Tissue Repair Research',
    inStock: true,
    purity: '99.6%',
    batch: 'FUTURE-CN-MARK-THYM-0701-001',
    image: '../../assets/vial-tb-500.png',
    blurb: 'A synthetic fragment supplied as lyophilized powder for qualified in-vitro research.',
    variants: [{
      strength: '5mg',
      vial: 27,
      box: 250
    }, {
      strength: '10mg',
      vial: 40,
      box: 290
    }]
  }, {
    id: 'mots-c',
    name: 'MOTS-c',
    subtitle: 'Mitochondrial Peptide',
    category: 'Cellular Research',
    inStock: true,
    purity: '99.3%',
    batch: 'FUTURE-CN-MARK-MOTS-0701-001',
    image: '../../assets/vial-mots-c.png',
    blurb: 'A mitochondrial-derived peptide studied in laboratory research.',
    variants: [{
      strength: '10mg',
      vial: 45,
      box: 200
    }, {
      strength: '20mg',
      vial: 55,
      box: 340
    }]
  }, {
    id: 'selank',
    name: 'Selank',
    subtitle: 'Heptapeptide',
    category: 'Neuro Research',
    inStock: true,
    purity: '99.2%',
    batch: 'FUTURE-CN-MARK-SELA-0701-001',
    image: '../../assets/vial-selank.png',
    blurb: 'A synthetic heptapeptide used as a research reference compound.',
    variants: [{
      strength: '5mg',
      vial: 25,
      box: null
    }, {
      strength: '10mg',
      vial: 40,
      box: 195
    }]
  }, {
    id: 'semax',
    name: 'Semax',
    subtitle: 'Heptapeptide',
    category: 'Neuro Research',
    inStock: true,
    purity: '99.2%',
    batch: 'FUTURE-CN-MARK-SEMA-0701-001',
    image: '../../assets/vial-semax.png',
    blurb: 'A synthetic peptide investigated in laboratory research. For in-vitro use only.',
    variants: [{
      strength: '5mg',
      vial: 30,
      box: null
    }, {
      strength: '10mg',
      vial: 40,
      box: 300
    }]
  }, {
    id: 'nad-plus',
    name: 'NAD+',
    subtitle: 'Coenzyme',
    category: 'Circadian Research',
    inStock: true,
    purity: '99.0%',
    batch: 'FUTURE-CN-MARK-NADP-0701-001',
    image: '../../assets/vial-nad-plus.png',
    blurb: 'A coenzyme supplied as lyophilized powder for laboratory research applications.',
    variants: [{
      strength: '100mg',
      vial: 35,
      box: null
    }, {
      strength: '500mg',
      vial: 45,
      box: null
    }, {
      strength: '1000mg',
      vial: 75,
      box: 575
    }]
  }, {
    id: 'tesamorelin',
    name: 'Tesamorelin',
    subtitle: 'GHRH Analog',
    category: 'Secretagogue Research',
    inStock: true,
    purity: '99.0%',
    batch: 'FUTURE-CN-MARK-TESA-0701-001',
    image: '../../assets/vial-tesamorelin.png',
    blurb: 'A synthetic peptide supplied for laboratory research applications.',
    variants: [{
      strength: '5mg',
      vial: 45,
      box: 300
    }, {
      strength: '10mg',
      vial: 65,
      box: 375
    }]
  }, {
    id: 'klow',
    name: 'KLOW',
    subtitle: 'Peptide Blend',
    category: 'Tissue Repair Research',
    inStock: true,
    purity: '99.0%',
    batch: 'FUTURE-CN-MARK-KLOW-0701-001',
    image: '../../assets/vial-klow.png',
    blurb: 'A multi-peptide research blend supplied as lyophilized powder for qualified in-vitro research.',
    variants: [{
      strength: '80mg',
      vial: 75,
      box: 385
    }]
  }, {
    id: 'survodutide',
    name: 'Survodutide',
    subtitle: 'Dual Receptor Peptide',
    category: 'Metabolic Research',
    inStock: true,
    purity: '99.1%',
    batch: 'FUTURE-CN-MARK-SURV-0701-001',
    image: '../../assets/vial-survodutide.png',
    blurb: 'A synthetic dual-receptor peptide supplied as lyophilized powder for in-vitro laboratory research.',
    variants: [{
      strength: '10mg',
      vial: 60,
      box: 360
    }]
  }, {
    id: 'aod-9604',
    name: 'AOD-9604',
    subtitle: 'hGH Fragment',
    category: 'Metabolic Research',
    inStock: true,
    purity: '99.2%',
    batch: 'FUTURE-CN-MARK-AOD9-0701-001',
    image: '../../assets/vial-aod-9604.png',
    blurb: 'A synthetic peptide fragment supplied for qualified in-vitro research.',
    variants: [{
      strength: '10mg',
      vial: 45,
      box: 250
    }]
  }, {
    id: 'lipo-c',
    name: 'LIPO-C',
    subtitle: 'Lipotropic Blend',
    category: 'Metabolic Research',
    inStock: true,
    purity: '99.0%',
    batch: 'FUTURE-CN-MARK-LIPC-0701-001',
    image: '../../assets/vial-lipo-c.png',
    blurb: 'A lipotropic research blend supplied in solution for in-vitro laboratory research.',
    variants: [{
      strength: '10ml',
      vial: 40,
      box: 280
    }]
  }, {
    id: 'l-carnitine',
    name: 'L-Carnitine',
    subtitle: 'Amino Acid Derivative',
    category: 'Metabolic Research',
    inStock: true,
    purity: '99.0%',
    batch: 'FUTURE-CN-MARK-LCAR-0701-001',
    image: '../../assets/vial-l-carnitine.png',
    blurb: 'An amino acid derivative supplied in solution for laboratory research applications.',
    variants: [{
      strength: '10ml',
      vial: 30,
      box: 180
    }]
  }, {
    id: 'ipamorelin',
    name: 'Ipamorelin',
    subtitle: 'Growth Hormone Secretagogue',
    category: 'Secretagogue Research',
    inStock: true,
    purity: '99.3%',
    batch: 'FUTURE-CN-MARK-IPAM-0701-001',
    image: '../../assets/vial-ipamorelin.png',
    blurb: 'A synthetic pentapeptide supplied as lyophilized powder for qualified in-vitro research.',
    variants: [{
      strength: '10mg',
      vial: 35,
      box: 200
    }]
  }, {
    id: 'sermorelin',
    name: 'Sermorelin',
    subtitle: 'GHRH Analog',
    category: 'Secretagogue Research',
    inStock: true,
    purity: '99.1%',
    batch: 'FUTURE-CN-MARK-SERM-0701-001',
    image: '../../assets/vial-sermorelin.png',
    blurb: 'A synthetic peptide supplied for laboratory research applications.',
    variants: [{
      strength: '10mg',
      vial: 35,
      box: 200
    }]
  }, {
    id: 'cjc-1295',
    name: 'CJC-1295 w/o DAC',
    subtitle: 'GHRH Analog',
    category: 'Secretagogue Research',
    inStock: true,
    purity: '99.2%',
    batch: 'FUTURE-CN-MARK-CJCN-0701-001',
    image: '../../assets/vial-cjc-1295.png',
    blurb: 'A synthetic peptide supplied as lyophilized powder for qualified in-vitro research.',
    variants: [{
      strength: '5mg + 5mg',
      vial: 45,
      box: 250
    }]
  }, {
    id: 'igf-1lr3',
    name: 'IGF-1LR3',
    subtitle: 'Growth Factor Analog',
    category: 'Secretagogue Research',
    inStock: true,
    purity: '98.8%',
    batch: 'FUTURE-CN-MARK-IGFL-0701-001',
    image: '../../assets/vial-igf-1lr3.png',
    blurb: 'A synthetic growth factor analog supplied for qualified in-vitro research.',
    variants: [{
      strength: '.1mg',
      vial: 55,
      box: 360
    }]
  }, {
    id: 'kisspeptin-10',
    name: 'KissPeptin-10',
    subtitle: 'Decapeptide',
    category: 'Secretagogue Research',
    inStock: true,
    purity: '99.0%',
    batch: 'FUTURE-CN-MARK-KISS-0701-001',
    image: '../../assets/vial-kisspeptin-10.png',
    blurb: 'A synthetic decapeptide used as a research reference compound.',
    variants: [{
      strength: '10mg',
      vial: 45,
      box: 250
    }]
  }, {
    id: 'epithalon',
    name: 'Epithalon',
    subtitle: 'Tetrapeptide',
    category: 'Cellular Research',
    inStock: true,
    purity: '99.2%',
    batch: 'FUTURE-CN-MARK-EPIT-0701-001',
    image: '../../assets/vial-epithalon.png',
    blurb: 'A synthetic tetrapeptide studied in laboratory research.',
    variants: [{
      strength: '10mg',
      vial: 40,
      box: 220
    }]
  }, {
    id: 'cartalax',
    name: 'Cartalax',
    subtitle: 'Peptide Bioregulator',
    category: 'Cellular Research',
    inStock: true,
    purity: '99.0%',
    batch: 'FUTURE-CN-MARK-CART-0701-001',
    image: '../../assets/vial-cartalax.png',
    blurb: 'A synthetic peptide bioregulator supplied as lyophilized powder for in-vitro research.',
    variants: [{
      strength: '20mg',
      vial: 45,
      box: 240
    }]
  }, {
    id: 'glutathione',
    name: 'Glutathione',
    subtitle: 'Antioxidant Tripeptide',
    category: 'Cellular Research',
    inStock: true,
    purity: '99.4%',
    batch: 'FUTURE-CN-MARK-GLUT-0701-001',
    image: '../../assets/vial-glutathione.png',
    blurb: 'A tripeptide antioxidant supplied as lyophilized powder for laboratory research.',
    variants: [{
      strength: '1500mg',
      vial: 50,
      box: 320
    }]
  }, {
    id: 'ss-31',
    name: 'SS-31',
    subtitle: 'Mitochondrial Peptide',
    category: 'Cellular Research',
    inStock: true,
    purity: '99.1%',
    batch: 'FUTURE-CN-MARK-SS31-0701-001',
    image: '../../assets/vial-ss-31.png',
    blurb: 'A synthetic mitochondria-targeting peptide studied in laboratory research.',
    variants: [{
      strength: '10mg',
      vial: 55,
      box: 340
    }]
  }, {
    id: 'kpv',
    name: 'KPV',
    subtitle: 'Tripeptide',
    category: 'Tissue Repair Research',
    inStock: true,
    purity: '99.0%',
    batch: 'FUTURE-CN-MARK-KPVX-0701-001',
    image: '../../assets/vial-kpv.png',
    blurb: 'A synthetic tripeptide used as a research reference compound.',
    variants: [{
      strength: '10mg',
      vial: 35,
      box: 190
    }]
  }, {
    id: 'ara-290',
    name: 'ARA-290',
    subtitle: 'Erythropoietin Derivative',
    category: 'Tissue Repair Research',
    inStock: true,
    purity: '99.1%',
    batch: 'FUTURE-CN-MARK-ARA2-0701-001',
    image: '../../assets/vial-ara-290.png',
    blurb: 'A synthetic peptide supplied as lyophilized powder for qualified in-vitro research.',
    variants: [{
      strength: '10mg',
      vial: 50,
      box: 300
    }]
  }, {
    id: 'wolverine',
    name: 'TB/BPC Wolverine',
    subtitle: 'Peptide Blend',
    category: 'Tissue Repair Research',
    inStock: true,
    purity: '99.0%',
    batch: 'FUTURE-CN-MARK-WOLV-0701-001',
    image: '../../assets/vial-wolverine.png',
    blurb: 'A multi-peptide research blend supplied as lyophilized powder for in-vitro laboratory research.',
    variants: [{
      strength: '10mg + 10mg',
      vial: 70,
      box: 400
    }]
  }, {
    id: 'ahk-cu',
    name: 'AHK-Cu',
    subtitle: 'Copper Tripeptide',
    category: 'Dermal Research',
    inStock: true,
    purity: '99.2%',
    batch: 'FUTURE-CN-MARK-AHKC-0701-001',
    image: '../../assets/vial-ahk-cu.png',
    blurb: 'A copper-binding tripeptide studied in laboratory research. Supplied as lyophilized powder for in-vitro investigation.',
    variants: [{
      strength: '100mg',
      vial: 40,
      box: 150
    }]
  }, {
    id: 'mt-2',
    name: 'MT-2',
    subtitle: 'Melanocortin Peptide',
    category: 'Dermal Research',
    inStock: true,
    purity: '99.0%',
    batch: 'FUTURE-CN-MARK-MT2X-0701-001',
    image: '../../assets/vial-mt-2.png',
    blurb: 'A synthetic melanocortin peptide supplied as lyophilized powder for qualified in-vitro research.',
    variants: [{
      strength: '10mg',
      vial: 30,
      box: 160
    }]
  }];

  // Derive `price` (min vial) and `size` (strength range label) for each product.
  products.forEach(p => {
    p.price = Math.min(...p.variants.map(v => v.vial));
    const s = p.variants.map(v => v.strength);
    p.size = s.length === 1 ? s[0] : `${s[0]}–${s[s.length - 1]}`;
  });
  window.FS_DATA = {
    contact: {
      email: 'FuturisticScienceUSA@gmail.com',
      phone: '920-265-2896',
      company: 'Futuristic Science, LLC'
    },
    categories: ['Tissue Repair Research', 'Dermal Research', 'Metabolic Research', 'Secretagogue Research', 'Cellular Research', 'Neuro Research', 'Circadian Research'],
    products,
    image: '../../assets/vial-ghk-cu.png'
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/i18n.js
try { (() => {
/* ============================================================
   i18n — tiny reactive store + EN/ES dictionary.
   Plain JS (no Babel). Loaded after React, before screens.
   Components call useLang() to subscribe + window.t(key) to read.
   ============================================================ */
(function () {
  'use strict';

  var listeners = new Set();
  var store = {
    lang: 'en',
    // always launch in English (no persisted restore)
    setLang: function (l) {
      if (l === store.lang) return;
      store.lang = l;
      listeners.forEach(function (fn) {
        fn(l);
      });
    },
    subscribe: function (fn) {
      listeners.add(fn);
      return function () {
        listeners.delete(fn);
      };
    }
  };
  window.FS_LANG = store;

  // Hook: re-render the calling component whenever language changes.
  window.useLang = function () {
    var st = React.useState(store.lang);
    React.useEffect(function () {
      return store.subscribe(st[1]);
    }, []);
    return st[0];
  };
  var DICT = {
    en: {
      /* nav */
      'nav.home': 'Home',
      'nav.shop': 'Shop',
      'nav.coa': 'COA Library',
      'nav.about': 'About',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',
      'nav.track': 'Track Order',
      'aria.search': 'Search',
      'aria.account': 'Account',
      'aria.cart': 'Cart',
      'aria.close': 'Close',
      'lang.label': 'Language',
      /* shared */
      'ruo': 'For Research Purposes Only. Not for human use.',
      'ruo.detail': 'No medical, dosing, or human-use claims. Reconstitution information is provided strictly as lab handling guidance for qualified researchers.',
      'btn.addToCart': 'Add to Cart',
      'btn.selectOptions': 'Select Options',
      'btn.outOfStock': 'Out of Stock',
      'btn.soldOut': 'Sold out',
      'btn.viewAll': 'View all',
      'btn.from': 'from',
      'badge.purity': '99%+ Purity',
      'badge.coaVerified': 'COA Verified',
      'badge.inStock': 'In Stock',
      'badge.verified': 'Verified',
      'badge.featured': 'Featured',
      'badge.bestseller': 'Bestseller',
      /* trust pillars */
      'trust.purity': '99%+ Purity',
      'trust.tested': 'Third-Party Tested',
      'trust.coas': 'Batch COAs',
      'trust.accuracy': 'Measured Accuracy',
      'trust.shipping': 'Fast Shipping',
      /* age gate */
      'age.eyebrow': 'Age Verification',
      'age.title': 'You must be at least 21 to visit this site.',
      'age.terms.pre': 'By entering this site, you are acknowledging that you have read and agree to our ',
      'age.terms.link': 'Terms of Service',
      'age.terms.post': '.',
      'age.remember': 'Remember me',
      'age.agree': 'I Agree',
      'age.disagree': 'I Disagree',
      'age.disclaimerLabel': 'Disclaimer',
      'age.disclaimer': 'All products sold by Futuristic Science are strictly intended for laboratory research use only. They are not approved for human or animal consumption, or for any form of therapeutic or diagnostic use. We do not provide usage instructions, dosing guidelines, or any advice regarding the application of our products. Futuristic Science is a research supply company only.',
      /* auth gate */
      'auth.eyebrow': 'Member Access',
      'auth.signinTitle': 'Sign in to continue',
      'auth.signupTitle': 'Create your account',
      'auth.signinSub': 'Access to this site is restricted to registered researchers.',
      'auth.signupSub': 'Register to access the Futuristic Science catalog.',
      'auth.google': 'Continue with Google',
      'auth.apple': 'Continue with Apple',
      'auth.or': 'or',
      'auth.name': 'Full name',
      'auth.email': 'Email address',
      'auth.password': 'Password',
      'auth.namePh': 'Jane Researcher',
      'auth.emailPh': 'you@lab.org',
      'auth.passwordPh': '••••••••',
      'auth.qualified': 'I am a qualified researcher and agree to the Terms & RUO Policy.',
      'auth.signinBtn': 'Sign In',
      'auth.signupBtn': 'Create Account',
      'auth.magic': 'Email me a sign-in link',
      'auth.toSignup': "Don't have an account? Register",
      'auth.toSignin': 'Already registered? Sign in',
      'auth.needAgree': 'Please confirm you are a qualified researcher to continue.',
      'auth.demoNote': 'Demo gate — no real account is created. Connect your store login to enable.',
      /* track order */
      'track.eyebrow': 'Order Tracking',
      'track.title': 'Track Your Order',
      'track.sub': 'Enter your tracking number to see the latest carrier updates.',
      'track.label': 'Tracking number',
      'track.ph': 'e.g. 9400 1000 0000 0000 0000 00',
      'track.btn': 'Track Order',
      'track.clear': 'Clear',
      'track.carrier': 'Carrier',
      'track.estimate': 'Estimated delivery',
      'track.statusLabel': 'Status',
      'track.viewCarrier': 'View on carrier site',
      'track.empty': 'Enter a tracking number above and we\u2019ll pull up its latest carrier scan.',
      'track.notFound': 'We couldn\u2019t read that tracking number. Check the digits on your shipping confirmation email, or contact {email}.',
      'track.help': 'Tracking numbers are emailed when your order ships. Don\u2019t have yours? Contact {email}.',
      'track.st.delivered': 'Delivered',
      'track.st.out': 'Out for delivery',
      'track.st.transit': 'In transit',
      'track.st.accepted': 'Shipment accepted',
      'track.st.label': 'Label created',
      'track.ev.delivered': 'Delivered, front door/porch',
      'track.ev.out': 'Out for delivery',
      'track.ev.arrived': 'Arrived at regional facility',
      'track.ev.departed': 'Departed shipping partner facility',
      'track.ev.accepted': 'Accepted at facility',
      'track.ev.label': 'Shipping label created, carrier awaiting item',
      /* hero */
      'hero.badge': 'Third-Party Tested · 99%+ Purity',
      'hero.title1': "Tomorrow's Science, Today.",
      'hero.title2': 'Where Research Meets Tomorrow.',
      'hero.sub': 'Research-grade peptides supplied to qualified researchers — every batch third-party tested with a verifiable Certificate of Analysis.',
      'hero.shop': 'Shop Peptides',
      'hero.viewResults': 'View Test Results',
      /* featured */
      'home.featuredEyebrow': 'Featured Catalog',
      'home.featuredTitle': 'Research peptides, in stock',
      /* proof */
      'home.proofEyebrow': 'Proof, not promises',
      'home.proofTitle': 'Every batch is tested.\nEvery result is published.',
      'home.proofBody': 'We work with independent third-party laboratories to verify identity and purity. Search any batch number to view its Certificate of Analysis.',
      'home.proof1t': 'HPLC purity verification',
      'home.proof1d': 'Independent labs confirm 99%+ purity per batch.',
      'home.proof2t': 'Batch-specific COAs',
      'home.proof2d': 'Every batch has a published Certificate of Analysis, searchable by batch number.',
      'home.proof3t': 'Measured accuracy',
      'home.proof3d': 'Every vial displays the measured mg content.',
      'home.searchBatches': 'Search Batch Numbers',
      'coa.docTitle': 'CERTIFICATE OF ANALYSIS',
      'coa.product': 'Product',
      'coa.batchNo': 'Batch No.',
      'coa.testDate': 'Test Date',
      'coa.identity': 'Identity (MS)',
      'coa.purity': 'Purity (HPLC)',
      'coa.conforms': 'Conforms',
      /* shop */
      'shop.eyebrow': 'Catalog',
      'shop.title': 'Research Peptides',
      'shop.intro': 'All products supplied are 3rd party tested for >98% Purity. COA\u2019s available.',
      'shop.category': 'Research Category',
      'shop.maxPrice': 'Max Price',
      'shop.products': 'products',
      'shop.clearFilter': 'Clear filter',
      'recon.eyebrow': 'Lab Tool',
      'recon.title': 'Reconstitution Calculator',
      'recon.sub': 'Estimate concentration and the volume to draw on an insulin syringe. For laboratory measurement reference only — not dosing guidance.',
      'recon.pepLabel': 'Peptide in vial',
      'recon.pepUnit': 'mg',
      'recon.waterLabel': 'BAC water added',
      'recon.waterUnit': 'mL',
      'recon.doseLabel': 'Target amount',
      'recon.doseUnit': 'mcg',
      'recon.syringeLabel': 'Syringe size',
      'recon.resConc': 'Concentration',
      'recon.resDraw': 'Volume to draw',
      'recon.resUnits': 'Syringe units',
      'recon.resDoses': 'Amounts per vial',
      'recon.units': 'units',
      'recon.perMl': 'per mL',
      'recon.invalid': 'Enter values above to calculate.',
      'recon.overfill': 'Target exceeds the full syringe — increase BAC water or reduce the target.',
      'recon.disclaimer': 'This tool performs simple arithmetic for laboratory reference only. Futuristic Science products are for research use only and are not for human or animal use. We do not provide dosing guidance.',
      'shop.sortFeatured': 'Sort: Featured',
      'shop.sortPriceAsc': 'Price: low to high',
      'shop.sortPriceDesc': 'Price: high to low',
      'shop.sortBy': 'Sort by:',
      'shop.sortPopular': 'Most Popular',
      'shop.sortAZ': 'A – Z',
      'shop.sortZA': 'Z – A',
      'shop.sortPLH': 'Price: Low to High',
      'shop.sortPHL': 'Price: High to Low',
      'shop.sortNewest': 'Newest',
      /* compound information + references */
      'ci.title': 'Compound Information',
      'ci.sub': 'Technical specifications for this product',
      'ci.profileEyebrow': 'Molecular Profile',
      'ci.profileTitle': "What's Inside",
      'ci.storageEyebrow': 'Storage Requirements',
      'ci.storageTitle': 'Stability Information',
      'ci.researchEyebrow': 'Research Status',
      'ci.researchTitle': 'Handling Classification',
      'ci.class': 'Compound class',
      'ci.form': 'Form',
      'ci.formVal': 'Lyophilized powder',
      'ci.batch': 'Batch tested',
      'ci.recon': 'Reconstitution',
      'ci.reconVal': 'Bacteriostatic water',
      'ci.components': 'Components',
      'ci.chipFreeze': 'Freeze for storage',
      'ci.chipFridge': 'Refrigerate after reconstitution',
      'ci.chipDark': 'Protect from light',
      'ci.lyo': 'Lyophilized (powder)',
      'ci.lyoVal': '–20°C long-term',
      'ci.reconCold': 'Reconstituted',
      'ci.reconColdVal': '2–8°C · use within 7 days',
      'ci.light': 'Light protection',
      'ci.lightVal': 'Store away from light',
      'ci.useClass': 'Classification',
      'ci.useClassVal': 'Research use only',
      'ci.stage': 'Stage',
      'ci.stageVal': 'Preclinical / in-vitro',
      'ci.humanUse': 'Human use',
      'ci.humanUseVal': 'Not for human or veterinary use',
      'ci.pubmed': 'PubMed Search',
      'ci.pubchem': 'PubChem Database',
      'src.title': 'Sources & References',
      'src.sub': 'Peer-reviewed research',
      'src.view': 'View Source',
      'irn.title': 'Important Research Notice',
      'irn.lead': 'Not for human consumption.',
      'irn.lead2': ' This product is sold exclusively for research and educational purposes. It is not intended to diagnose, treat, cure, or prevent any disease.',
      'irn.p2': 'All clinical trial data and research findings presented on this page are sourced from peer-reviewed journals and official publications. They are provided for educational reference only and should not be interpreted as medical advice or product claims.',
      'irn.p3': 'By purchasing this product, you confirm that you are a qualified researcher and will use it in accordance with all applicable laws and regulations.',
      'cat.Tissue Repair Research': 'Tissue Repair Research',
      'cat.Dermal Research': 'Dermal Research',
      'cat.Metabolic Research': 'Metabolic Research',
      'cat.Secretagogue Research': 'Secretagogue Research',
      'cat.Cellular Research': 'Cellular Research',
      'cat.Neuro Research': 'Neuro Research',
      'cat.Circadian Research': 'Circadian Research',
      /* product */
      'pd.inStock': 'In Stock',
      'pd.outOfStock': 'Out of Stock',
      'pd.strength': 'Strength',
      'pd.purchaseOption': 'Purchase Option',
      'pd.singleVial': 'Single Vial',
      'pd.boxOf10': 'Box of 10 Vials',
      'pd.save': 'SAVE',
      'pd.perVial': '/ single vial',
      'pd.perBox': '/ box of 10 vials',
      'pd.form': 'Lyophilized powder',
      'pd.viewCoa': 'View Certificates of Analysis',
      'pd.tabDesc': 'Description',
      'pd.tabHandling': 'Storage & Lab Handling',
      'pd.tabShipping': 'Shipping',
      'pd.handling': 'Store lyophilized powder at -20°C, protected from light and moisture. Once reconstituted for laboratory use, store according to your institutional protocols.\nHandle in accordance with institutional safety guidelines and standard laboratory practice. This product is a research chemical — not a drug, food, or cosmetic.',
      'pd.shipping': 'Orders ship in temperature-appropriate packaging via expedited carriers. Tracking is provided on dispatch. Research-use-only documentation is included with every order.',
      'pd.descTail': 'is supplied as lyophilized powder for in-vitro laboratory research. Each batch is assayed by an independent third-party laboratory for identity and purity, and ships with a batch-specific Certificate of Analysis. Intended for use by qualified researchers in a controlled laboratory environment.',
      'pd.ruoDetail': 'No medical, dosing, or human-use claims. Reconstitution information is lab-handling guidance for qualified researchers only.',
      /* coa page */
      'coap.badge': 'Third-Party Verified',
      'coap.title': 'Test Results & Certificates of Analysis',
      'coap.intro': 'Search any batch number to view its independent Certificate of Analysis. Every batch is tested for identity and purity before release.',
      'coap.cantFind': "Can't find your batch? Check the number printed on your vial label, or contact {email}.",
      'coas.placeholder': 'Search batch number — e.g. FUTURE-CN-MARK-GHKC-0701-001',
      'coas.found': 'found',
      'coas.colBatch': 'Batch',
      'coas.colProduct': 'Product',
      'coas.colPurity': 'Purity',
      'coas.colStatus': 'Status',
      'coas.colCoa': 'COA',
      'coas.noResult': 'No batch found. Check the number on your vial label or contact the lab.',
      /* coa library */
      'coal.title': 'SEARCH YOUR BATCH NUMBER INSTANTLY',
      'coal.searchLabel': 'Search batch #:',
      'coal.placeholder': 'e.g. FUTURE-CN-MARK-GHKC-0701-001',
      'coal.find': 'Find',
      'coal.clear': 'Clear',
      'coal.str': 'STR',
      'coal.others': 'ALL OTHER PEPTIDES (ALPHABETIZED)',
      'coal.viewCoa': 'View COA',
      'coal.batch': 'Batch',
      'coal.strength': 'Strength',
      'coal.purity': 'Purity',
      'coal.tested': 'Tested',
      'coal.tip': 'Select a peptide to load its certificates',
      'coal.noMatch': 'No batch matches “{q}”. Check the number on your vial label or contact {email}.',
      'coal.emptyTitle': 'No certificates available yet',
      'coal.emptyBody': 'Certificates of Analysis will appear here as soon as they are published. Once you have a batch number, enter it above to look up its COA.',
      'coal.emptySearchTitle': 'No results',
      /* cart */
      'cart.title': 'Your Cart',
      'cart.emptyTitle': 'Your cart is empty',
      'cart.emptyDesc': 'Browse the catalog to add research peptides.',
      'cart.remove': 'Remove',
      'cart.subtotal': 'Subtotal',
      'cart.checkout': 'Proceed to Checkout',
      'cart.shipNote': 'Shipping & taxes calculated at checkout',
      /* checkout */
      'co.title': 'Checkout',
      'co.contact': 'Contact',
      'co.shipAddr': 'Shipping address',
      'co.payment': 'Payment',
      'co.email': 'Email',
      'co.phone': 'Phone',
      'co.fullName': 'Full name',
      'co.institution': 'Institution / Lab',
      'co.street': 'Street address',
      'co.city': 'City',
      'co.state': 'State',
      'co.zip': 'ZIP',
      'co.cardNumber': 'Card number',
      'co.expiry': 'Expiry',
      'co.cvc': 'CVC',
      'co.summary': 'Order Summary',
      'co.subtotal': 'Subtotal',
      'co.shipping': 'Shipping',
      'co.total': 'Total',
      'co.placeOrder': 'Place Order',
      'co.emptyTitle': 'Your cart is empty',
      'co.agreePre': 'I confirm I am a qualified researcher and agree to the ',
      'co.agreeTerms': 'Terms & Conditions',
      'co.agreePrivacy': 'Privacy Policy',
      'co.agreeReturns': 'Returns & Refunds Policy',
      'co.agreeMid': ', ',
      'co.agreeAnd': ', and ',
      'co.agreePost': '. All sales are final except where required by law.',
      'co.agreeRequired': 'Please accept the policies to place your order.',
      'co.fraudNote': 'Orders are subject to identity and payment verification. We may delay or cancel any order if payment verification fails, fraud is suspected, or for inventory or regulatory reasons.',
      'co.compTitle': 'Compliance & Acknowledgments',
      'co.compSub': 'All boxes must be checked to place your order.',
      'co.selectAll': 'Select all',
      'co.ackResearcher': 'I certify that I am at least 21 years old and a qualified researcher or institution purchasing solely for legitimate in-vitro laboratory research.',
      'co.ackNoHuman': 'I will not use these products for human or animal consumption, or for diagnostic or therapeutic purposes, and I will handle, store, and dispose of them per all applicable safety and legal regulations.',
      'co.ackLiability': 'I accept full responsibility for the purchase, use, handling, and storage of these products and release Futuristic Science, LLC from all liability arising from any misuse, to the fullest extent permitted by law.',
      'co.ackFinal': 'I understand all sales are final and that no returns or refunds are available except where required by applicable law or stated in the Returns & Refunds Policy.',
      'co.ackAuthorized': 'I confirm I am the authorized owner of the payment account used, that my billing and shipping information is accurate, and that this purchase is genuine and not fraudulent.',
      'co.ackChargeback': 'I agree to contact Futuristic Science to resolve any issue before initiating a payment dispute or chargeback, and that order, shipment, delivery, and acceptance records may be submitted as evidence in any dispute.',
      'co.ackRecord': 'I consent to Futuristic Science recording my acceptance of these terms — including my name, date, time, IP address, and the policy versions shown — for compliance and dispute-resolution purposes.',
      'co.recordTitle': 'Order record',
      'co.recordNote': 'For your protection and ours, this order is logged with a timestamp, IP address, accepted policy versions, payment-verification (AVS/CVV) result, and shipment tracking with delivery confirmation. A copy of these acknowledgments is attached to your order and emailed to you.',
      'co.compRequired': 'Please check every box above to place your order.',
      'co.payMethodsTitle': 'Direct Payment Methods',
      'co.payIntro': 'After placing your order, you\u2019ll complete payment using Zelle, Venmo, Apple Cash, or Cash App. Due to payment-processor restrictions in the research industry, we use trusted direct payment methods for a more reliable checkout experience. Payment instructions are shown after checkout.',
      'co.paySelect': 'Choose how you\u2019ll pay',
      'co.pay.zelle': 'Zelle',
      'co.pay.cashapp': 'Cash App',
      'co.pay.venmo': 'Venmo',
      'co.pay.applecash': 'Apple Cash',
      'co.payWindow': 'Please complete payment within 1 hour of placing your order. If payment has not been received by the next business day, your order may be automatically cancelled and inventory released.',
      'co.ackLawful': 'I certify that I am purchasing these products solely for lawful research purposes. I have read and agree to the Terms & Conditions and understand that all products are sold for Research Use Only, and are not sold, marketed, or intended for human consumption.',
      'co.emptyDesc': 'Add research peptides to your cart before checking out.',
      'co.browse': 'Browse Catalog',
      /* footer */
      'foot.desc': 'Research-grade peptides, third-party tested with Certificates of Analysis. Supplied to qualified researchers.',
      'foot.shop': 'Shop',
      'foot.allPeptides': 'All Peptides',
      'foot.company': 'Company',
      'foot.coaLink': 'COA Library',
      'foot.legal': 'Legal',
      'foot.disclaimer': 'Research Disclaimer',
      'news.title': 'Stay in the loop',
      'news.sub': 'Get new product drops, restocks, and research updates delivered to your inbox.',
      'news.placeholder': 'Enter your email',
      'news.btn': 'Subscribe',
      'news.thanks': "Thanks! You're on the list.",
      'foot.returns': 'Returns & Refunds',
      'foot.shipping': 'Shipping Policy',
      'foot.ruo': 'Research Disclaimer (RUO Policy)',
      'foot.privacy': 'Privacy Policy',
      'foot.terms': 'Terms & Conditions',
      'foot.rights': 'All rights reserved.',
      'foot.legalLine': 'Products are sold for laboratory research use only and are not intended to diagnose, treat, cure, or prevent any condition. Not for human or veterinary use.',
      /* simple pages */
      'about.eyebrow': 'Our Standard',
      'about.title': 'About Futuristic Science',
      'about.p1pre': 'supplies research-grade peptides to qualified researchers, with a single guiding standard: ',
      'about.p1em': 'proof over promises',
      'about.p1post': '. Every batch is third-party tested for identity and purity and ships with a verifiable Certificate of Analysis.',
      'about.h2a': 'Why researchers choose us',
      'about.pa': 'We publish what we test. Independent laboratories confirm 99%+ purity per batch, every vial displays its measured mg content, and any batch number can be searched against its COA on our Test Results page.',
      'about.h2b': 'Compliance first',
      'about.pb': 'All products are sold strictly for laboratory research use. We make no medical, therapeutic, dosing, or human-use claims of any kind. Materials are intended for in-vitro investigation by qualified professionals only.',
      'faq.eyebrow': 'Support',
      'faq.title': 'Frequently Asked Questions',
      'contact.eyebrow': 'Get in touch',
      'contact.title': 'Contact',
      'contact.intro': 'Questions about a batch, a COA, or an order? Reach the lab directly. We respond to qualified-researcher inquiries within one business day.',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.location': 'Location',
      'contact.name': 'Name',
      'contact.batchOpt': 'Batch number (optional)',
      'contact.message': 'Message',
      'contact.msgPlaceholder': 'How can we help?',
      'contact.send': 'Send Message',
      'contact.firstName': 'First Name',
      'contact.lastName': 'Last Name',
      'contact.subject': 'Subject of Ticket',
      'contact.subjectPlaceholder': '— Select a topic —',
      'contact.noteLabel': 'Please note:',
      'contact.note': 'Our team is unable to provide guidance or recommendations related to research protocols, methodologies, or experimental application. We’re always happy to assist with product specifications, documentation, availability, ordering, shipping, and general laboratory support questions.',
      'contact.subjects': ['Research Protocol and Guidance', 'General Inquiry', 'Damaged or Incorrect Items Received', 'Undelivered / Misdelivered Package', 'Stolen Package'],
      'contact.altPrefix': 'Prefer email? Reach us directly at',
      'acct.eyebrow': 'Account',
      'acct.title': 'Sign in',
      'acct.password': 'Password',
      'acct.signIn': 'Sign In',
      'acct.new': 'New researcher?',
      'acct.create': 'Create an account',
      'legal.eyebrow': 'Legal',
      'legal.questions': 'Questions? Contact {email} · {company}.',
      /* returns & refunds */
      'ret.eyebrow': 'Returns & Refunds',
      'ret.title': 'Cancellations, Returns & Refunds',
      'ret.finalLine': 'All sales are final.',
      'ret.intro': 'Orders cannot be canceled or modified once placed. Due to the sensitive nature of research materials and applicable regulations:',
      'ret.noList': ['Returns are not accepted.', 'Refunds are not issued for change of mind, user error, or refused delivery.', 'Chargebacks filed for delivered or stolen packages will be disputed with supporting documentation.'],
      'ret.commitTitle': 'Our Commitment',
      'ret.lawTitle': 'Exceptions Required by Law',
      'ret.lawBody': 'Nothing in this policy limits any remedy that applicable law requires us to provide. Returns and refunds are not available except where required by law or as otherwise stated here — for example, if we shipped the wrong item, an item never shipped, or a product arrived damaged due to our handling or packaging.',
      'ret.inspectTitle': 'Inspect Your Shipment',
      'ret.inspectBody': 'Please inspect all shipments promptly upon delivery. Any claim for a shipping or fulfillment error must be submitted within seven (7) calendar days of the carrier’s delivery date, together with the required documentation, so we can verify and resolve it.',
      'ret.commitBody': 'We are committed to accurate fulfillment and timely shipment of every order. To maintain fairness, prevent abuse, and protect all parties involved, the policies above are strictly enforced. By placing an order with {company}, you acknowledge and agree to these terms.',
      'ret.disclaimer': 'All products are sold strictly for research purposes. {company} is not responsible for any misuse, improper storage, or reconstitution of products. By placing an order, you acknowledge and agree to this policy.',
      'page.soon': 'Coming soon',
      'page.soonBody': 'This page is part of the storefront structure.',
      'sub.retatrutide': 'Triple Receptor Peptide',
      'sub.tirzepatide': 'Dual Receptor Peptide',
      'sub.ghk-cu': 'Copper Tripeptide',
      'sub.bpc-157': 'Body Protection Compound',
      'sub.tb-500': 'Thymosin Beta-4 Fragment',
      'sub.mots-c': 'Mitochondrial Peptide',
      'sub.selank': 'Heptapeptide',
      'sub.semax': 'Heptapeptide',
      'sub.nad-plus': 'Coenzyme',
      'sub.tesamorelin': 'GHRH Analog',
      'sub.klow': 'Peptide Blend',
      'sub.glow': 'Peptide Blend',
      'sub.survodutide': 'Dual Receptor Peptide',
      'sub.aod-9604': 'hGH Fragment',
      'sub.lipo-c': 'Lipotropic Blend',
      'sub.l-carnitine': 'Amino Acid Derivative',
      'sub.ipamorelin': 'Growth Hormone Secretagogue',
      'sub.sermorelin': 'GHRH Analog',
      'sub.cjc-1295': 'GHRH Analog',
      'sub.igf-1lr3': 'Growth Factor Analog',
      'sub.kisspeptin-10': 'Decapeptide',
      'sub.epithalon': 'Tetrapeptide',
      'sub.cartalax': 'Peptide Bioregulator',
      'sub.glutathione': 'Antioxidant Tripeptide',
      'sub.ss-31': 'Mitochondrial Peptide',
      'sub.kpv': 'Tripeptide',
      'sub.ara-290': 'Erythropoietin Derivative',
      'sub.wolverine': 'Peptide Blend',
      'sub.ahk-cu': 'Copper Tripeptide',
      'sub.mt-2': 'Melanocortin Peptide',
      'word.purity': 'Purity',
      'blurb.retatrutide': 'A synthetic multi-receptor peptide supplied as lyophilized powder for in-vitro laboratory research.',
      'blurb.tirzepatide': 'A synthetic dual-receptor peptide supplied for laboratory research applications.',
      'blurb.ghk-cu': 'A copper-binding tripeptide studied in laboratory research. Supplied as lyophilized powder for in-vitro investigation.',
      'blurb.bpc-157': 'A synthetic peptide fragment used as a reference compound in laboratory research settings.',
      'blurb.tb-500': 'A synthetic fragment supplied as lyophilized powder for qualified in-vitro research.',
      'blurb.mots-c': 'A mitochondrial-derived peptide studied in laboratory research.',
      'blurb.selank': 'A synthetic heptapeptide used as a research reference compound.',
      'blurb.semax': 'A synthetic peptide investigated in laboratory research. For in-vitro use only.',
      'blurb.nad-plus': 'A coenzyme supplied as lyophilized powder for laboratory research applications.',
      'blurb.tesamorelin': 'A synthetic peptide supplied for laboratory research applications.',
      'blurb.klow': 'A multi-peptide research blend supplied as lyophilized powder for qualified in-vitro research.',
      'blurb.glow': 'A multi-peptide research blend supplied as lyophilized powder for in-vitro laboratory research.',
      'blurb.survodutide': 'A synthetic dual-receptor peptide supplied as lyophilized powder for in-vitro laboratory research.',
      'blurb.aod-9604': 'A synthetic peptide fragment supplied for qualified in-vitro research.',
      'blurb.lipo-c': 'A lipotropic research blend supplied in solution for in-vitro laboratory research.',
      'blurb.l-carnitine': 'An amino acid derivative supplied in solution for laboratory research applications.',
      'blurb.ipamorelin': 'A synthetic pentapeptide supplied as lyophilized powder for qualified in-vitro research.',
      'blurb.sermorelin': 'A synthetic peptide supplied for laboratory research applications.',
      'blurb.cjc-1295': 'A synthetic peptide supplied as lyophilized powder for qualified in-vitro research.',
      'blurb.igf-1lr3': 'A synthetic growth factor analog supplied for qualified in-vitro research.',
      'blurb.kisspeptin-10': 'A synthetic decapeptide used as a research reference compound.',
      'blurb.epithalon': 'A synthetic tetrapeptide studied in laboratory research.',
      'blurb.cartalax': 'A synthetic peptide bioregulator supplied as lyophilized powder for in-vitro research.',
      'blurb.glutathione': 'A tripeptide antioxidant supplied as lyophilized powder for laboratory research.',
      'blurb.ss-31': 'A synthetic mitochondria-targeting peptide studied in laboratory research.',
      'blurb.kpv': 'A synthetic tripeptide used as a research reference compound.',
      'blurb.ara-290': 'A synthetic peptide supplied as lyophilized powder for qualified in-vitro research.',
      'blurb.wolverine': 'A multi-peptide research blend supplied as lyophilized powder for in-vitro laboratory research.',
      'blurb.ahk-cu': 'A copper-binding tripeptide studied in laboratory research. Supplied as lyophilized powder for in-vitro investigation.',
      'blurb.mt-2': 'A synthetic melanocortin peptide supplied as lyophilized powder for qualified in-vitro research.',
      'faq.items': [['What does "Research Use Only" mean?', 'All products are intended exclusively for in-vitro laboratory research by qualified researchers. They are not drugs, supplements, foods, or cosmetics, and are not for human or veterinary use.'], ['Are products third-party tested?', 'Yes. Every batch is assayed by an independent laboratory for identity and purity. A batch-specific Certificate of Analysis is available on the Test Results page.'], ['How do I find a Certificate of Analysis?', 'Locate the batch number printed on your vial label and enter it in the COA Library to view that batch\'s Certificate of Analysis.'], ['How are products supplied and stored?', 'Products are supplied as lyophilized powder. Store at -20°C, protected from light and moisture, and handle in accordance with institutional safety guidelines.'], ['Do you provide handling instructions?', 'We provide general lab-handling and storage information for qualified researchers only. We do not provide dosing, usage, or application guidance of any kind.']],
      'lp.disclaimer.title': 'Research Disclaimer',
      'lp.disclaimer.sec': [['Research use only', 'All products sold by Futuristic Science, LLC are intended strictly for laboratory and research purposes. They are NOT intended for human or veterinary use, consumption, or any in-vivo application.'], ['No medical claims', 'Nothing on this website constitutes medical advice or a claim to diagnose, treat, cure, or prevent any disease or condition. No statements have been evaluated by any regulatory authority.'], ['Buyer responsibility', 'By purchasing, the buyer affirms they are a qualified researcher aged 21 or older and will handle, store, and dispose of materials in accordance with all applicable laws and institutional safety guidelines.']],
      'lp.privacy.title': 'Privacy Policy',
      'lp.privacy.sec': [['Information we collect', 'We collect only the information needed to process orders and respond to inquiries — name, contact details, and order history. We do not sell personal data.'], ['How we use it', 'Order fulfillment, customer support, and required record-keeping. Payment details are processed by our payment provider and not stored on our servers.'], ['Your choices', 'You may request access to or deletion of your data by contacting us at the email below.']],
      'lp.shipping.title': 'Shipping Policy',
      'lp.shipping.intro': 'This Shipping Policy explains how {company} processes, ships, and protects your order, and how to report a shipping or fulfillment issue.',
      'lp.shipping.sec': [['Shipping & Fulfillment', 'Orders placed before 12:00 PM MST typically ship the same business day, and no later than the following business day. Orders placed on weekends, or on holidays ship on the next business day.'], ['Shipping Protection Coverage', ['All orders placed with {company} include Shipping Protection by default. This coverage is applied automatically at checkout and is non-optional.', 'Shipping Protection covers qualifying issues related to non-delivery, damage, or fulfillment errors, subject to the conditions described in this policy. All claims and coverage determinations are governed by the terms below.']], ['Delivered Packages', ['{company} is not responsible for packages that are marked \u201cDelivered\u201d by the carrier and subsequently lost or stolen, outside of the conditions and coverage defined in this policy.', 'Customers are responsible for:', ['Ensuring a secure delivery location', 'Monitoring tracking updates', 'Retrieving packages promptly upon delivery'], 'We strongly recommend using carrier hold options, signature-required delivery (when available), or a secure delivery address if package theft is a concern.']], ['Non-Delivery, Damage, or Fulfillment Errors', ['All shipping-related issues other than theft after delivery must be reported within five (5) calendar days of the carrier\u2019s delivery or attempted-delivery date. This timeframe is firm \u2014 requests submitted outside this window will be declined without exception.', 'For claims involving damage, missing items, or fulfillment errors, the following documentation is required in full:', ['A complete unboxing video recorded from the moment the package is first opened', 'Clear photos of the external packaging', 'Clear photos of the contents of the package', 'Clear photos of the packing slip included inside the package', 'The tracking number', 'A brief written description of the issue'], 'Failure to provide all required documentation will result in the claim being denied.']], ['Resolution', 'If a claim is reviewed and verified as a {company} fulfillment or shipping error, the affected items will be reshipped at no additional cost. No cash refunds will be issued.']],
      'lp.terms.title': 'Terms & Conditions',
      'lp.terms.intro': 'Welcome to {company}. Please read these Terms & Conditions (\u201cTerms\u201d) carefully \u2014 they govern your access to and use of the {company} website, products, and services (collectively, the \u201cServices\u201d). By using the Services, you agree to these Terms and our Privacy Policy. If you do not agree, please discontinue use of the Services.',
      'lp.terms.sec': [['Eligibility', 'You must be at least 18 years of age to use the Services. By using them, you represent that you meet this age requirement and are a qualified purchaser acting on behalf of legitimate research.'], ['Use of Services', 'Our products are supplied for laboratory research use only. They are not intended for personal use or consumption, and are not intended to diagnose, treat, cure, or prevent any disease. You agree to use the Services and products in compliance with all applicable laws and regulations. {company} reserves the right to refuse a sale where it believes a customer is violating these Terms.'], ['Intellectual Property', 'All content, logos, graphics, imagery, and other material within the Services are the intellectual property of {company} and are protected by copyright and trademark law. Unauthorized use is prohibited.'], ['Orders & Payments', 'You agree to provide current, complete, and accurate purchase and account information for every order. You also agree to keep your account and payment details \u2014 including email, payment method, and card expiration \u2014 up to date so we can process your transactions and reach you when needed.'], ['Order Acceptance & Cancellation', '{company} reserves the right, at its sole discretion, to refuse, limit, cancel, or terminate any order at any time and for any reason \u2014 including suspected fraud, misuse, policy violations, availability issues, pricing or listing errors, or regulatory concerns. If an order is canceled after payment is received, a refund may be issued at our discretion in accordance with these policies.'], ['Refunds & Returns', ['Due to the sensitive nature of our products and applicable regulatory requirements, all sales are final.', '{company} does not accept returns, issue refunds, or allow cancellations once an order has been placed, regardless of delivery status, except where required by applicable law or as otherwise provided in our policies.', 'Nothing in these Terms limits any remedy that applicable law requires us to provide — for example, where we shipped the wrong item, an item never shipped, or a product arrived damaged due to our handling or packaging.']], ['Delivered Packages', ['Once a shipment is marked \u201cDelivered\u201d by the carrier, responsibility for the package transfers to the customer.', '{company} is not responsible for packages lost or stolen after delivery \u2014 including theft from porches, mailrooms, front desks, lockers, or other locations. Refunds, credits, or replacements will not be issued for packages confirmed as delivered by the carrier.']], ['Shipping Damage or Fulfillment Errors', ['In the event of a verified {company} fulfillment or shipping error \u2014 such as incorrect items, missing items, or damage incurred in transit prior to delivery \u2014 you must notify us within seven (7) calendar days of the carrier\u2019s delivery date.', 'This reporting window is firm. Requests submitted outside this timeframe will be denied without exception.']], ['Required Documentation', ['All claims must include complete, verifiable documentation:', ['A full unboxing video recorded from the moment the package is first opened', 'Photos of the external packaging', 'Photos of the package contents', 'Photos of the packing slip enclosed with the order'], 'Claims submitted without all required documentation will be denied.']], ['Resolution', ['Upon confirmation of an eligible shipping or fulfillment error caused by {company}, we may, at our sole discretion, issue a replacement of the affected items.', 'Cash refunds, store credits, or alternative compensation are not guaranteed and are not provided for delivered, refused, or stolen packages.']], ['Chargebacks', 'Chargebacks submitted for delivered, refused, or stolen packages will be disputed using carrier confirmation, delivery records, and the customer\u2019s agreement to these Terms.'], ['Communications Consent', ['By placing an order, creating an account, or otherwise using the Services, you consent to receive communications from {company} \u2014 including transactional, operational, support-related, and marketing messages \u2014 via email, SMS/text, and other electronic means using the contact details you provide. Message frequency may vary; message and data rates may apply.', 'Consent to receive communications is not a condition of purchase. You may opt out of non-transactional messages at any time by following the unsubscribe instructions in our emails or replying STOP to any SMS. Transactional and service messages (order confirmations, shipping notices, account and support responses) may continue as permitted by law.']], ['Limitation of Liability', 'To the maximum extent permitted by law, {company} shall not be liable for any indirect, incidental, or consequential damages arising from the use of \u2014 or inability to use \u2014 the Services or any products procured through them.'], ['Fraud Screening & Verification', ['To protect our customers and our business, {company} reserves the right, at its sole discretion, to:', ['Verify the identity of any customer', 'Request additional identification or documentation for orders flagged as suspicious or high in value', 'Decline, hold, or cancel any order we reasonably believe to be fraudulent, unauthorized, or non-compliant'], 'Orders may be held pending completion of verification.']], ['Fulfillment & Processing', ['Orders are processed after payment is received and verified. {company} may delay or cancel an order if:', ['Payment or address verification (including AVS/CVV) fails or is inconclusive', 'Fraud is suspected', 'Inventory or supply issues arise', 'Regulatory or compliance concerns arise'], 'Where an order is canceled before fulfillment, any amount charged for that order will be refunded.']], ['Inspection of Shipments', 'Customers should inspect all shipments promptly upon delivery. Any claim for a shipping or fulfillment error must be submitted within the reporting window stated above, together with the required documentation. Prompt inspection helps ensure that claims can be verified and resolved.'], ['Governing Law & Venue', 'These Terms are governed by the laws of the State of Wisconsin, without regard to its conflict-of-laws principles. Any dispute arising out of or relating to these Terms or the Services shall be brought exclusively in the state or federal courts located in Wisconsin, and you consent to the personal jurisdiction of those courts.'], ['No Transfer of Orders', 'Orders and any associated rights may not be transferred, assigned, or reassigned to another party without the prior written consent of {company}.'], ['Force Majeure', '{company} is not liable for any delay or failure to perform resulting from causes beyond its reasonable control, including but not limited to carrier disruptions, natural disasters, acts of government, labor disputes, or supply-chain interruptions.'], ['Severability', 'If any provision of these Terms is held invalid or unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.'], ['Changes to the Terms', 'We may modify these Terms at any time. Your continued use of the Services after changes are posted constitutes acceptance of those changes.'], ['Contact Us', 'Questions about these Terms? Reach our team at {email}. By using the Services, you consent to these Terms; if you do not agree with any part, you must discontinue use of the Services.']],
      'ruo.eyebrow': 'Legal',
      'ruo.title': 'Research Use Only (RUO) Policy',
      'ruo.intro': 'All products sold by {company} are intended strictly for laboratory research purposes only. {company} supplies materials designated as Research Use Only (RUO) — not for human or animal consumption, medical use, diagnostic use, or therapeutic use.',
      'ruo.chips': ['Laboratory Research Only', 'No Human or Animal Use', 'Qualified Purchasers'],
      'ruo.summary': [['Research use only', '{company} products are intended strictly for laboratory research purposes.'], ['No medical use', 'Products are not drugs, supplements, cosmetics, or medical products.'], ['Purchaser responsibility', 'Customers must comply with applicable research, safety, and handling standards.']],
      'ruo.sections': [['Overview', ['All products sold by {company} are intended strictly for laboratory research purposes only.', '{company} supplies materials that are designated as Research Use Only (RUO) and are not approved for human or animal consumption, medical use, diagnostic use, or therapeutic use.', 'By purchasing from or using the {company} website, you acknowledge and agree that all products are to be used solely for legitimate scientific research conducted by qualified individuals or institutions in appropriate laboratory settings.']], ['No Human or Animal Use', ['Products sold by {company}:', ['Are not intended for human consumption.', 'Are not intended for veterinary use.', 'Are not intended for injection, ingestion, inhalation, or topical use in humans or animals.', 'Are not drugs, dietary supplements, cosmetics, or medical products.'], 'None of the products offered by {company} have been evaluated or approved by the U.S. Food and Drug Administration (FDA) or any other regulatory authority for medical or therapeutic use.', 'Any suggestion, promotion, or attempt to use {company} products for human or animal use violates these policies.', '{company} does not provide dosing information, protocols, or usage guidance for human or animal administration.']], ['Qualified Purchasers Only', ['By purchasing from {company}, you represent and warrant that:', ['You are at least 21 years of age.', 'You are purchasing products for legitimate laboratory research purposes.', 'You have the knowledge and training necessary to safely handle research chemicals.', 'You will use products only in controlled laboratory environments.', 'You will comply with all applicable laws, regulations, and safety standards.'], '{company} reserves the right to refuse or cancel any order if we believe a purchase may violate this Research Use Only policy.']], ['No Medical Claims', ['Information provided on the {company} website, product listings, educational materials, or communications is for informational and research context only.', 'Nothing provided by {company} should be interpreted as:', ['Medical advice.', 'Treatment recommendations.', 'Health guidance.', 'Diagnostic information.', 'Clinical instructions.'], '{company} does not claim that any product can diagnose, treat, cure, or prevent any disease or medical condition.']], ['Laboratory Handling Responsibility', ['Research materials may present risks if improperly handled.', 'Purchasers assume full responsibility for:', ['Proper storage and handling.', 'Laboratory safety procedures.', 'Proper disposal of materials.', 'Compliance with applicable chemical safety regulations.'], '{company} is not responsible for misuse, improper handling, or unauthorized application of its products.']], ['Prohibited Uses', ['{company} products may not be used for:', ['Human consumption.', 'Veterinary or animal administration.', 'Compounding for human use.', 'Food, dietary supplement, or cosmetic manufacturing.', 'Any application prohibited under federal, state, or local law.'], 'Any attempt to purchase products for prohibited purposes may result in:', ['Immediate order cancellation.', 'Permanent account termination.', 'Reporting to appropriate authorities when required by law.']]], ['Right to Refuse Service', ['{company} reserves the right, at its sole discretion, to:', ['Refuse any order.', 'Cancel transactions.', 'Limit quantities.', 'Restrict customer accounts.'], 'This may occur if we suspect that products are being purchased for non-research purposes or misuse.']], ['Acceptance of Policy', ['By accessing the {company} website, creating an account, or placing an order, you acknowledge that you have read, understood, and agree to comply with this Research Use Only Policy.', 'Failure to comply with this policy may result in order cancellation, account suspension, or legal action where appropriate.']]],
      'ruo.needHelp': 'Need help?'
    },
    es: {
      'nav.home': 'Inicio',
      'nav.shop': 'Tienda',
      'nav.coa': 'Biblioteca COA',
      'nav.about': 'Nosotros',
      'nav.faq': 'Preguntas',
      'nav.contact': 'Contacto',
      'nav.track': 'Rastrear Pedido',
      'aria.search': 'Buscar',
      'aria.account': 'Cuenta',
      'aria.cart': 'Carrito',
      'aria.close': 'Cerrar',
      'lang.label': 'Idioma',
      'ruo': 'Solo para fines de investigación. No apto para uso humano.',
      'ruo.detail': 'Sin afirmaciones médicas, de dosificación o de uso humano. La información de reconstitución se proporciona estrictamente como guía de manejo de laboratorio para investigadores calificados.',
      'btn.addToCart': 'Añadir al carrito',
      'btn.selectOptions': 'Seleccionar opciones',
      'btn.outOfStock': 'Agotado',
      'btn.soldOut': 'Agotado',
      'btn.viewAll': 'Ver todo',
      'btn.from': 'desde',
      'badge.purity': '99%+ Pureza',
      'badge.coaVerified': 'COA Verificado',
      'badge.inStock': 'En stock',
      'badge.verified': 'Verificado',
      'badge.featured': 'Destacado',
      'badge.bestseller': 'Más vendido',
      'trust.purity': '99%+ Pureza',
      'trust.tested': 'Probado por terceros',
      'trust.coas': 'COA por lote',
      'trust.accuracy': 'Precisión medida',
      'trust.shipping': 'Envío rápido',
      'age.eyebrow': 'Verificación de edad',
      'age.title': 'Debes tener al menos 21 años para visitar este sitio.',
      'age.terms.pre': 'Al entrar a este sitio, reconoces que has leído y aceptas nuestros ',
      'age.terms.link': 'Términos de servicio',
      'age.terms.post': '.',
      'age.remember': 'Recordarme',
      'age.agree': 'Acepto',
      'age.disagree': 'No acepto',
      'age.disclaimerLabel': 'Aviso',
      'age.disclaimer': 'Todos los productos vendidos por Futuristic Science están destinados estrictamente para uso exclusivo en investigación de laboratorio. No están aprobados para el consumo humano o animal, ni para ninguna forma de uso terapéutico o diagnóstico. No proporcionamos instrucciones de uso, pautas de dosificación ni ningún consejo sobre la aplicación de nuestros productos. Futuristic Science es únicamente una empresa de suministros para investigación.',
      /* auth gate */
      'auth.eyebrow': 'Acceso de Miembros',
      'auth.signinTitle': 'Inicia sesión para continuar',
      'auth.signupTitle': 'Crea tu cuenta',
      'auth.signinSub': 'El acceso a este sitio está restringido a investigadores registrados.',
      'auth.signupSub': 'Regístrate para acceder al catálogo de Futuristic Science.',
      'auth.google': 'Continuar con Google',
      'auth.apple': 'Continuar con Apple',
      'auth.or': 'o',
      'auth.name': 'Nombre completo',
      'auth.email': 'Correo electrónico',
      'auth.password': 'Contraseña',
      'auth.namePh': 'Juana Investigadora',
      'auth.emailPh': 'tu@lab.org',
      'auth.passwordPh': '••••••••',
      'auth.qualified': 'Soy un investigador calificado y acepto los Términos y la Política RUO.',
      'auth.signinBtn': 'Iniciar Sesión',
      'auth.signupBtn': 'Crear Cuenta',
      'auth.magic': 'Envíame un enlace de acceso',
      'auth.toSignup': '¿No tienes cuenta? Regístrate',
      'auth.toSignin': '¿Ya registrado? Inicia sesión',
      'auth.needAgree': 'Confirma que eres un investigador calificado para continuar.',
      'auth.demoNote': 'Puerta de demostración — no se crea una cuenta real. Conecta el inicio de sesión de tu tienda para habilitarla.',
      /* rastreo de pedido */
      'track.eyebrow': 'Rastreo de Pedido',
      'track.title': 'Rastrea tu Pedido',
      'track.sub': 'Ingresa tu número de seguimiento para ver las últimas actualizaciones del transportista.',
      'track.label': 'Número de seguimiento',
      'track.ph': 'p. ej. 9400 1000 0000 0000 0000 00',
      'track.btn': 'Rastrear Pedido',
      'track.clear': 'Limpiar',
      'track.carrier': 'Transportista',
      'track.estimate': 'Entrega estimada',
      'track.statusLabel': 'Estado',
      'track.viewCarrier': 'Ver en el sitio del transportista',
      'track.empty': 'Ingresa un número de seguimiento arriba y mostraremos su último escaneo del transportista.',
      'track.notFound': 'No pudimos leer ese número de seguimiento. Revisa los dígitos en tu correo de confirmación de envío o contacta a {email}.',
      'track.help': 'Los números de seguimiento se envían por correo cuando tu pedido se despacha. ¿No tienes el tuyo? Contacta a {email}.',
      'track.st.delivered': 'Entregado',
      'track.st.out': 'En reparto',
      'track.st.transit': 'En tránsito',
      'track.st.accepted': 'Envío aceptado',
      'track.st.label': 'Etiqueta creada',
      'track.ev.delivered': 'Entregado, puerta principal',
      'track.ev.out': 'En reparto',
      'track.ev.arrived': 'Llegó a instalación regional',
      'track.ev.departed': 'Salió de instalación del socio de envío',
      'track.ev.accepted': 'Aceptado en instalación',
      'track.ev.label': 'Etiqueta de envío creada, transportista en espera del artículo',
      'hero.badge': 'Probado por terceros · 99%+ Pureza',
      'hero.title1': "La ciencia del mañana, hoy.",
      'hero.title2': 'Donde la investigación se encuentra con el mañana.',
      'hero.sub': 'Péptidos de grado investigación suministrados a investigadores calificados — cada lote probado por terceros con un Certificado de Análisis verificable.',
      'hero.shop': 'Comprar péptidos',
      'hero.viewResults': 'Ver resultados',
      'home.featuredEyebrow': 'Catálogo destacado',
      'home.featuredTitle': 'Péptidos de investigación, en stock',
      'home.proofEyebrow': 'Pruebas, no promesas',
      'home.proofTitle': 'Cada lote se prueba.\nCada resultado se publica.',
      'home.proofBody': 'Trabajamos con laboratorios independientes de terceros para verificar la identidad y la pureza. Busca cualquier número de lote para ver su Certificado de Análisis.',
      'home.proof1t': 'Verificación de pureza HPLC',
      'home.proof1d': 'Laboratorios independientes confirman 99%+ de pureza por lote.',
      'home.proof2t': 'COA por lote',
      'home.proof2d': 'Cada lote tiene un Certificado de Análisis publicado, consultable por número de lote.',
      'home.proof3t': 'Precisión medida',
      'home.proof3d': 'Cada vial muestra el contenido en mg medido.',
      'home.searchBatches': 'Buscar números de lote',
      'coa.docTitle': 'CERTIFICADO DE ANÁLISIS',
      'coa.product': 'Producto',
      'coa.batchNo': 'N.º de lote',
      'coa.testDate': 'Fecha de prueba',
      'coa.identity': 'Identidad (MS)',
      'coa.purity': 'Pureza (HPLC)',
      'coa.conforms': 'Conforme',
      'shop.eyebrow': 'Catálogo',
      'shop.title': 'Péptidos de investigación',
      'shop.intro': 'Todos los productos suministrados son probados por terceros con >98% de pureza. COA disponibles.',
      'shop.category': 'Categoría de investigación',
      'shop.maxPrice': 'Precio máximo',
      'shop.products': 'productos',
      'shop.clearFilter': 'Limpiar filtro',
      'recon.eyebrow': 'Herramienta de Laboratorio',
      'recon.title': 'Calculadora de Reconstitución',
      'recon.sub': 'Estima la concentración y el volumen a extraer en una jeringa de insulina. Solo como referencia de medición de laboratorio — no es una guía de dosificación.',
      'recon.pepLabel': 'Péptido en el vial',
      'recon.pepUnit': 'mg',
      'recon.waterLabel': 'Agua BAC añadida',
      'recon.waterUnit': 'mL',
      'recon.doseLabel': 'Cantidad objetivo',
      'recon.doseUnit': 'mcg',
      'recon.syringeLabel': 'Tamaño de jeringa',
      'recon.resConc': 'Concentración',
      'recon.resDraw': 'Volumen a extraer',
      'recon.resUnits': 'Unidades de jeringa',
      'recon.resDoses': 'Cantidades por vial',
      'recon.units': 'unidades',
      'recon.perMl': 'por mL',
      'recon.invalid': 'Ingresa los valores para calcular.',
      'recon.overfill': 'El objetivo excede la jeringa completa — añade más agua BAC o reduce el objetivo.',
      'recon.disclaimer': 'Esta herramienta realiza aritmética simple solo como referencia de laboratorio. Los productos de Futuristic Science son solo para investigación y no para uso humano o animal. No proporcionamos guía de dosificación.',
      'shop.sortFeatured': 'Orden: Destacados',
      'shop.sortPriceAsc': 'Precio: menor a mayor',
      'shop.sortPriceDesc': 'Precio: mayor a menor',
      'shop.sortBy': 'Ordenar por:',
      'shop.sortPopular': 'Más Populares',
      'shop.sortAZ': 'A – Z',
      'shop.sortZA': 'Z – A',
      'shop.sortPLH': 'Precio: Menor a Mayor',
      'shop.sortPHL': 'Precio: Mayor a Menor',
      'shop.sortNewest': 'Más Nuevos',
      /* información del compuesto + referencias */
      'ci.title': 'Información del Compuesto',
      'ci.sub': 'Especificaciones técnicas de este producto',
      'ci.profileEyebrow': 'Perfil Molecular',
      'ci.profileTitle': '¿Qué Contiene?',
      'ci.storageEyebrow': 'Requisitos de Almacenamiento',
      'ci.storageTitle': 'Información de Estabilidad',
      'ci.researchEyebrow': 'Estado de Investigación',
      'ci.researchTitle': 'Clasificación de Manejo',
      'ci.class': 'Clase de compuesto',
      'ci.form': 'Forma',
      'ci.formVal': 'Polvo liofilizado',
      'ci.batch': 'Lote probado',
      'ci.recon': 'Reconstitución',
      'ci.reconVal': 'Agua bacteriostática',
      'ci.components': 'Componentes',
      'ci.chipFreeze': 'Congelar para almacenar',
      'ci.chipFridge': 'Refrigerar tras reconstitución',
      'ci.chipDark': 'Proteger de la luz',
      'ci.lyo': 'Liofilizado (polvo)',
      'ci.lyoVal': '–20°C a largo plazo',
      'ci.reconCold': 'Reconstituido',
      'ci.reconColdVal': '2–8°C · usar en 7 días',
      'ci.light': 'Protección de luz',
      'ci.lightVal': 'Almacenar lejos de la luz',
      'ci.useClass': 'Clasificación',
      'ci.useClassVal': 'Solo uso en investigación',
      'ci.stage': 'Etapa',
      'ci.stageVal': 'Preclínica / in vitro',
      'ci.humanUse': 'Uso humano',
      'ci.humanUseVal': 'No apto para uso humano ni veterinario',
      'ci.pubmed': 'Búsqueda en PubMed',
      'ci.pubchem': 'Base de Datos PubChem',
      'src.title': 'Fuentes y Referencias',
      'src.sub': 'Investigación revisada por pares',
      'src.view': 'Ver Fuente',
      'irn.title': 'Aviso Importante de Investigación',
      'irn.lead': 'No apto para consumo humano.',
      'irn.lead2': ' Este producto se vende exclusivamente con fines de investigación y educación. No está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad.',
      'irn.p2': 'Todos los datos de ensayos clínicos y hallazgos de investigación presentados en esta página provienen de revistas revisadas por pares y publicaciones oficiales. Se proporcionan únicamente como referencia educativa y no deben interpretarse como asesoramiento médico ni afirmaciones sobre el producto.',
      'irn.p3': 'Al comprar este producto, usted confirma que es un investigador calificado y que lo utilizará de acuerdo con todas las leyes y regulaciones aplicables.',
      'cat.Tissue Repair Research': 'Investigación de reparación de tejidos',
      'cat.Dermal Research': 'Investigación dermal',
      'cat.Metabolic Research': 'Investigación metabólica',
      'cat.Secretagogue Research': 'Investigación de secretagogos',
      'cat.Cellular Research': 'Investigación celular',
      'cat.Neuro Research': 'Investigación neurológica',
      'cat.Circadian Research': 'Investigación circadiana',
      'pd.inStock': 'En stock',
      'pd.outOfStock': 'Agotado',
      'pd.strength': 'Concentración',
      'pd.purchaseOption': 'Opción de compra',
      'pd.singleVial': 'Vial individual',
      'pd.boxOf10': 'Caja de 10 viales',
      'pd.save': 'AHORRA',
      'pd.perVial': '/ vial individual',
      'pd.perBox': '/ caja de 10 viales',
      'pd.form': 'Polvo liofilizado',
      'pd.viewCoa': 'Ver Certificados de Análisis',
      'pd.tabDesc': 'Descripción',
      'pd.tabHandling': 'Almacenamiento y manejo',
      'pd.tabShipping': 'Envío',
      'pd.handling': 'Almacenar el polvo liofilizado a -20°C, protegido de la luz y la humedad. Una vez reconstituido para uso de laboratorio, almacenar según los protocolos de su institución.\nManipular conforme a las pautas de seguridad institucionales y la práctica estándar de laboratorio. Este producto es un químico de investigación, no un fármaco, alimento ni cosmético.',
      'pd.shipping': 'Los pedidos se envían en embalaje a temperatura adecuada mediante transportistas urgentes. Se proporciona seguimiento al despacho. Cada pedido incluye documentación de uso exclusivo en investigación.',
      'pd.descTail': 'se suministra como polvo liofilizado para investigación de laboratorio in vitro. Cada lote es analizado por un laboratorio independiente para identidad y pureza, y se envía con un Certificado de Análisis por lote. Destinado al uso por investigadores calificados en un entorno de laboratorio controlado.',
      'pd.ruoDetail': 'Sin afirmaciones médicas, de dosificación o de uso humano. La información de reconstitución es solo una guía de manejo de laboratorio para investigadores calificados.',
      'coap.badge': 'Verificado por terceros',
      'coap.title': 'Resultados y Certificados de Análisis',
      'coap.intro': 'Busca cualquier número de lote para ver su Certificado de Análisis independiente. Cada lote se prueba para identidad y pureza antes de su liberación.',
      'coap.cantFind': '¿No encuentras tu lote? Revisa el número impreso en la etiqueta del vial o contacta a {email}.',
      'coas.placeholder': 'Buscar número de lote — p. ej. FUTURE-CN-MARK-GHKC-0701-001',
      'coas.found': 'encontrados',
      'coas.colBatch': 'Lote',
      'coas.colProduct': 'Producto',
      'coas.colPurity': 'Pureza',
      'coas.colStatus': 'Estado',
      'coas.colCoa': 'COA',
      'coas.noResult': 'No se encontró el lote. Revisa el número en la etiqueta del vial o contacta al laboratorio.',
      /* biblioteca coa */
      'coal.title': 'BUSCA TU NÚMERO DE LOTE AL INSTANTE',
      'coal.searchLabel': 'Buscar lote #:',
      'coal.placeholder': 'p. ej. FUTURE-CN-MARK-GHKC-0701-001',
      'coal.find': 'Buscar',
      'coal.clear': 'Limpiar',
      'coal.str': 'STR',
      'coal.others': 'TODOS LOS DEMÁS PÉPTIDOS (ALFABETIZADO)',
      'coal.viewCoa': 'Ver COA',
      'coal.batch': 'Lote',
      'coal.strength': 'Concentración',
      'coal.purity': 'Pureza',
      'coal.tested': 'Probado',
      'coal.tip': 'Selecciona un péptido para cargar sus certificados',
      'coal.noMatch': 'Ningún lote coincide con «{q}». Revisa el número en la etiqueta del vial o contacta a {email}.',
      'coal.emptyTitle': 'Aún no hay certificados disponibles',
      'coal.emptyBody': 'Los Certificados de Análisis aparecerán aquí en cuanto se publiquen. Cuando tengas un número de lote, ingrésalo arriba para buscar su COA.',
      'coal.emptySearchTitle': 'Sin resultados',
      'cart.title': 'Tu carrito',
      'cart.emptyTitle': 'Tu carrito está vacío',
      'cart.emptyDesc': 'Explora el catálogo para añadir péptidos de investigación.',
      'cart.remove': 'Quitar',
      'cart.subtotal': 'Subtotal',
      'cart.checkout': 'Proceder al pago',
      'cart.shipNote': 'Envío e impuestos calculados al pagar',
      'co.title': 'Pago',
      'co.contact': 'Contacto',
      'co.shipAddr': 'Dirección de envío',
      'co.payment': 'Pago',
      'co.email': 'Correo',
      'co.phone': 'Teléfono',
      'co.fullName': 'Nombre completo',
      'co.institution': 'Institución / Laboratorio',
      'co.street': 'Dirección',
      'co.city': 'Ciudad',
      'co.state': 'Estado',
      'co.zip': 'C.P.',
      'co.cardNumber': 'Número de tarjeta',
      'co.expiry': 'Vencimiento',
      'co.cvc': 'CVC',
      'co.summary': 'Resumen del pedido',
      'co.subtotal': 'Subtotal',
      'co.shipping': 'Envío',
      'co.total': 'Total',
      'co.placeOrder': 'Realizar pedido',
      'co.emptyTitle': 'Tu carrito está vacío',
      'co.agreePre': 'Confirmo que soy un investigador calificado y acepto los ',
      'co.agreeTerms': 'Términos y Condiciones',
      'co.agreePrivacy': 'Política de Privacidad',
      'co.agreeReturns': 'Política de Devoluciones y Reembolsos',
      'co.agreeMid': ', ',
      'co.agreeAnd': ' y ',
      'co.agreePost': '. Todas las ventas son finales salvo cuando la ley lo exija.',
      'co.agreeRequired': 'Acepta las políticas para realizar tu pedido.',
      'co.fraudNote': 'Los pedidos están sujetos a verificación de identidad y de pago. Podemos retrasar o cancelar cualquier pedido si la verificación de pago falla, se sospecha fraude, o por razones de inventario o regulatorias.',
      'co.compTitle': 'Cumplimiento y Reconocimientos',
      'co.compSub': 'Debes marcar todas las casillas para realizar tu pedido.',
      'co.selectAll': 'Seleccionar todo',
      'co.ackResearcher': 'Certifico que tengo al menos 21 años y que soy un investigador o institución calificada que compra únicamente para investigación legítima de laboratorio in vitro.',
      'co.ackNoHuman': 'No usaré estos productos para consumo humano o animal, ni para fines diagnósticos o terapéuticos, y los manejaré, almacenaré y eliminaré conforme a todas las regulaciones de seguridad y legales aplicables.',
      'co.ackLiability': 'Acepto la plena responsabilidad por la compra, uso, manejo y almacenamiento de estos productos y libero a Futuristic Science, LLC de toda responsabilidad derivada de cualquier mal uso, en la máxima medida permitida por la ley.',
      'co.ackFinal': 'Entiendo que todas las ventas son finales y que no hay devoluciones ni reembolsos salvo cuando lo exija la ley aplicable o según la Política de Devoluciones y Reembolsos.',
      'co.ackAuthorized': 'Confirmo que soy el titular autorizado de la cuenta de pago utilizada, que mi información de facturación y envío es correcta, y que esta compra es genuina y no fraudulenta.',
      'co.ackChargeback': 'Acepto contactar a Futuristic Science para resolver cualquier problema antes de iniciar una disputa de pago o contracargo, y que los registros de pedido, envío, entrega y aceptación pueden presentarse como evidencia en cualquier disputa.',
      'co.ackRecord': 'Doy mi consentimiento para que Futuristic Science registre mi aceptación de estos términos — incluyendo mi nombre, fecha, hora, dirección IP y las versiones de políticas mostradas — con fines de cumplimiento y resolución de disputas.',
      'co.recordTitle': 'Registro del pedido',
      'co.recordNote': 'Para su protección y la nuestra, este pedido se registra con marca de tiempo, dirección IP, versiones de políticas aceptadas, resultado de verificación de pago (AVS/CVV) y seguimiento de envío con confirmación de entrega. Una copia de estos reconocimientos se adjunta a su pedido y se le envía por correo.',
      'co.compRequired': 'Marca todas las casillas anteriores para realizar tu pedido.',
      'co.payMethodsTitle': 'M\u00e9todos de Pago Directo',
      'co.payIntro': 'Despu\u00e9s de realizar tu pedido, completar\u00e1s el pago con Zelle, Venmo, Apple Cash o Cash App. Debido a las restricciones de los procesadores de pago en la industria de investigaci\u00f3n, usamos m\u00e9todos de pago directo confiables para una experiencia de pago m\u00e1s confiable. Las instrucciones de pago se muestran despu\u00e9s de finalizar la compra.',
      'co.paySelect': 'Elige c\u00f3mo pagar\u00e1s',
      'co.pay.zelle': 'Zelle',
      'co.pay.cashapp': 'Cash App',
      'co.pay.venmo': 'Venmo',
      'co.pay.applecash': 'Apple Cash',
      'co.payWindow': 'Completa el pago dentro de 1 hora de haber realizado tu pedido. Si no se recibe el pago para el siguiente d\u00eda h\u00e1bil, tu pedido puede cancelarse autom\u00e1ticamente y el inventario ser\u00e1 liberado.',
      'co.ackLawful': 'Certifico que compro estos productos \u00fanicamente con fines de investigaci\u00f3n l\u00edcita. He le\u00eddo y acepto los T\u00e9rminos y Condiciones y entiendo que todos los productos se venden solo para Uso en Investigaci\u00f3n, y no se venden, comercializan ni est\u00e1n destinados al consumo humano.',
      'co.emptyDesc': 'Añade péptidos de investigación a tu carrito antes de pagar.',
      'co.browse': 'Explorar catálogo',
      'foot.desc': 'Péptidos de grado investigación, probados por terceros con Certificados de Análisis. Suministrados a investigadores calificados.',
      'foot.shop': 'Tienda',
      'foot.allPeptides': 'Todos los péptidos',
      'foot.company': 'Compañía',
      'foot.coaLink': 'Biblioteca COA',
      'foot.legal': 'Legal',
      'foot.disclaimer': 'Aviso de investigación',
      'news.title': 'Mantente al día',
      'news.sub': 'Recibe nuevos lanzamientos, reabastecimientos y novedades de investigación en tu correo.',
      'news.placeholder': 'Ingresa tu correo',
      'news.btn': 'Suscribirse',
      'news.thanks': '¡Gracias! Ya estás en la lista.',
      'foot.returns': 'Devoluciones y Reembolsos',
      'foot.shipping': 'Política de Envío',
      'foot.ruo': 'Aviso de Investigación (Política RUO)',
      'foot.privacy': 'Política de privacidad',
      'foot.terms': 'Términos y condiciones',
      'foot.rights': 'Todos los derechos reservados.',
      'foot.legalLine': 'Los productos se venden únicamente para uso en investigación de laboratorio y no están destinados a diagnosticar, tratar, curar ni prevenir ninguna condición. No apto para uso humano ni veterinario.',
      'about.eyebrow': 'Nuestro estándar',
      'about.title': 'Acerca de Futuristic Science',
      'about.p1pre': 'suministra péptidos de grado investigación a investigadores calificados, con un único estándar rector: ',
      'about.p1em': 'pruebas sobre promesas',
      'about.p1post': '. Cada lote es probado por terceros para identidad y pureza y se envía con un Certificado de Análisis verificable.',
      'about.h2a': 'Por qué los investigadores nos eligen',
      'about.pa': 'Publicamos lo que probamos. Laboratorios independientes confirman 99%+ de pureza por lote, cada vial muestra su contenido en mg medido, y cualquier número de lote puede buscarse contra su COA en nuestra página de Resultados.',
      'about.h2b': 'Cumplimiento primero',
      'about.pb': 'Todos los productos se venden estrictamente para uso en investigación de laboratorio. No hacemos ninguna afirmación médica, terapéutica, de dosificación o de uso humano. Los materiales están destinados a investigación in vitro por profesionales calificados únicamente.',
      'faq.eyebrow': 'Soporte',
      'faq.title': 'Preguntas frecuentes',
      'contact.eyebrow': 'Ponte en contacto',
      'contact.title': 'Contacto',
      'contact.intro': '¿Preguntas sobre un lote, un COA o un pedido? Contacta al laboratorio directamente. Respondemos consultas de investigadores calificados en un día hábil.',
      'contact.email': 'Correo',
      'contact.phone': 'Teléfono',
      'contact.location': 'Ubicación',
      'contact.name': 'Nombre',
      'contact.batchOpt': 'Número de lote (opcional)',
      'contact.message': 'Mensaje',
      'contact.msgPlaceholder': '¿Cómo podemos ayudar?',
      'contact.send': 'Enviar mensaje',
      'contact.firstName': 'Nombre',
      'contact.lastName': 'Apellido',
      'contact.subject': 'Asunto del Ticket',
      'contact.subjectPlaceholder': '— Selecciona un tema —',
      'contact.noteLabel': 'Tenga en cuenta:',
      'contact.note': 'Nuestro equipo no puede brindar orientación ni recomendaciones relacionadas con protocolos de investigación, metodologías o aplicaciones experimentales. Con gusto le ayudamos con especificaciones de productos, documentación, disponibilidad, pedidos, envíos y consultas generales de soporte de laboratorio.',
      'contact.subjects': ['Protocolo de Investigación y Orientación', 'Consulta General', 'Artículos Dañados o Incorrectos Recibidos', 'Paquete No Entregado / Mal Entregado', 'Paquete Robado'],
      'contact.altPrefix': '¿Prefiere correo? Escríbanos directamente a',
      'acct.eyebrow': 'Cuenta',
      'acct.title': 'Iniciar sesión',
      'acct.password': 'Contraseña',
      'acct.signIn': 'Iniciar sesión',
      'acct.new': '¿Nuevo investigador?',
      'acct.create': 'Crear una cuenta',
      'legal.eyebrow': 'Legal',
      'legal.questions': '¿Preguntas? Contacta a {email} · {company}.',
      /* devoluciones y reembolsos */
      'ret.eyebrow': 'Devoluciones y Reembolsos',
      'ret.title': 'Cancelaciones, Devoluciones y Reembolsos',
      'ret.finalLine': 'Todas las ventas son finales.',
      'ret.intro': 'Los pedidos no pueden cancelarse ni modificarse una vez realizados. Debido a la naturaleza sensible de los materiales de investigación y las regulaciones aplicables:',
      'ret.noList': ['No se aceptan devoluciones.', 'No se emiten reembolsos por cambio de opinión, error del usuario o entrega rechazada.', 'Los contracargos presentados por paquetes entregados o robados serán disputados con documentación de respaldo.'],
      'ret.commitTitle': 'Nuestro Compromiso',
      'ret.lawTitle': 'Excepciones Requeridas por la Ley',
      'ret.lawBody': 'Nada en esta política limita cualquier recurso que la ley aplicable nos exija proporcionar. Las devoluciones y reembolsos no están disponibles salvo cuando la ley lo exija o según se indique aquí — por ejemplo, si enviamos el artículo equivocado, un artículo nunca se envió, o un producto llegó dañado por nuestro manejo o embalaje.',
      'ret.inspectTitle': 'Inspeccione su Envío',
      'ret.inspectBody': 'Inspeccione todos los envíos de inmediato al recibirlos. Cualquier reclamo por un error de envío o de cumplimiento debe presentarse dentro de los siete (7) días calendario a partir de la fecha de entrega del transportista, junto con la documentación requerida, para que podamos verificarlo y resolverlo.',
      'ret.commitBody': 'Estamos comprometidos con el cumplimiento preciso y el envío puntual de cada pedido. Para mantener la equidad, prevenir el abuso y proteger a todas las partes involucradas, las políticas anteriores se aplican estrictamente. Al realizar un pedido con {company}, usted reconoce y acepta estos términos.',
      'ret.disclaimer': 'Todos los productos se venden estrictamente con fines de investigación. {company} no se hace responsable del mal uso, almacenamiento inadecuado o reconstitución de los productos. Al realizar un pedido, reconoces y aceptas esta política.',
      'page.soon': 'Próximamente',
      'page.soonBody': 'Esta página es parte de la estructura de la tienda.',
      'sub.retatrutide': 'Péptido de triple receptor',
      'sub.tirzepatide': 'Péptido de doble receptor',
      'sub.ghk-cu': 'Tripéptido de cobre',
      'sub.bpc-157': 'Compuesto de protección corporal',
      'sub.tb-500': 'Fragmento de Timosina Beta-4',
      'sub.mots-c': 'Péptido mitocondrial',
      'sub.selank': 'Heptapéptido',
      'sub.semax': 'Heptapéptido',
      'sub.nad-plus': 'Coenzima',
      'sub.tesamorelin': 'Análogo de GHRH',
      'sub.klow': 'Mezcla de péptidos',
      'sub.glow': 'Mezcla de péptidos',
      'sub.survodutide': 'Péptido de doble receptor',
      'sub.aod-9604': 'Fragmento de hGH',
      'sub.lipo-c': 'Mezcla lipotrópica',
      'sub.l-carnitine': 'Derivado de aminoácido',
      'sub.ipamorelin': 'Secretagogo de hormona de crecimiento',
      'sub.sermorelin': 'Análogo de GHRH',
      'sub.cjc-1295': 'Análogo de GHRH',
      'sub.igf-1lr3': 'Análogo de factor de crecimiento',
      'sub.kisspeptin-10': 'Decapéptido',
      'sub.epithalon': 'Tetrapéptido',
      'sub.cartalax': 'Biorregulador peptídico',
      'sub.glutathione': 'Tripéptido antioxidante',
      'sub.ss-31': 'Péptido mitocondrial',
      'sub.kpv': 'Tripéptido',
      'sub.ara-290': 'Derivado de eritropoyetina',
      'sub.wolverine': 'Mezcla de péptidos',
      'sub.ahk-cu': 'Tripéptido de cobre',
      'sub.mt-2': 'Péptido melanocortina',
      'word.purity': 'Pureza',
      'blurb.retatrutide': 'Un péptido sintético multirreceptor suministrado como polvo liofilizado para investigación de laboratorio in vitro.',
      'blurb.tirzepatide': 'Un péptido sintético de doble receptor suministrado para aplicaciones de investigación de laboratorio.',
      'blurb.ghk-cu': 'Un tripéptido que se une al cobre, estudiado en investigación de laboratorio. Suministrado como polvo liofilizado para investigación in vitro.',
      'blurb.bpc-157': 'Un fragmento peptídico sintético usado como compuesto de referencia en entornos de investigación de laboratorio.',
      'blurb.tb-500': 'Un fragmento sintético suministrado como polvo liofilizado para investigación in vitro calificada.',
      'blurb.mots-c': 'Un péptido de origen mitocondrial estudiado en investigación de laboratorio.',
      'blurb.selank': 'Un heptapéptido sintético usado como compuesto de referencia de investigación.',
      'blurb.semax': 'Un péptido sintético investigado en laboratorio. Solo para uso in vitro.',
      'blurb.nad-plus': 'Una coenzima suministrada como polvo liofilizado para aplicaciones de investigación de laboratorio.',
      'blurb.tesamorelin': 'Un péptido sintético suministrado para aplicaciones de investigación de laboratorio.',
      'blurb.klow': 'Una mezcla de investigación multipéptido suministrada como polvo liofilizado para investigación in vitro calificada.',
      'blurb.glow': 'Una mezcla de investigación multipéptido suministrada como polvo liofilizado para investigación de laboratorio in vitro.',
      'blurb.survodutide': 'Un péptido sintético de doble receptor suministrado como polvo liofilizado para investigación de laboratorio in vitro.',
      'blurb.aod-9604': 'Un fragmento peptídico sintético suministrado para investigación in vitro calificada.',
      'blurb.lipo-c': 'Una mezcla lipotrópica de investigación suministrada en solución para investigación de laboratorio in vitro.',
      'blurb.l-carnitine': 'Un derivado de aminoácido suministrado en solución para aplicaciones de investigación de laboratorio.',
      'blurb.ipamorelin': 'Un pentapéptido sintético suministrado como polvo liofilizado para investigación in vitro calificada.',
      'blurb.sermorelin': 'Un péptido sintético suministrado para aplicaciones de investigación de laboratorio.',
      'blurb.cjc-1295': 'Un péptido sintético suministrado como polvo liofilizado para investigación in vitro calificada.',
      'blurb.igf-1lr3': 'Un análogo de factor de crecimiento sintético suministrado para investigación in vitro calificada.',
      'blurb.kisspeptin-10': 'Un decapéptido sintético utilizado como compuesto de referencia de investigación.',
      'blurb.epithalon': 'Un tetrapéptido sintético estudiado en investigación de laboratorio.',
      'blurb.cartalax': 'Un biorregulador peptídico sintético suministrado como polvo liofilizado para investigación in vitro.',
      'blurb.glutathione': 'Un antioxidante tripéptido suministrado como polvo liofilizado para investigación de laboratorio.',
      'blurb.ss-31': 'Un péptido sintético dirigido a la mitocondria estudiado en investigación de laboratorio.',
      'blurb.kpv': 'Un tripéptido sintético utilizado como compuesto de referencia de investigación.',
      'blurb.ara-290': 'Un péptido sintético suministrado como polvo liofilizado para investigación in vitro calificada.',
      'blurb.wolverine': 'Una mezcla de investigación multipéptido suministrada como polvo liofilizado para investigación de laboratorio in vitro.',
      'blurb.ahk-cu': 'Un tripéptido de unión al cobre estudiado en investigación de laboratorio. Suministrado como polvo liofilizado para investigación in vitro.',
      'blurb.mt-2': 'Un péptido melanocortina sintético suministrado como polvo liofilizado para investigación in vitro calificada.',
      'faq.items': [['¿Qué significa "Solo para investigación"?', 'Todos los productos están destinados exclusivamente a investigación de laboratorio in vitro por investigadores calificados. No son fármacos, suplementos, alimentos ni cosméticos, y no son para uso humano ni veterinario.'], ['¿Los productos son probados por terceros?', 'Sí. Cada lote es analizado por un laboratorio independiente para identidad y pureza. Hay un Certificado de Análisis por lote disponible en la página de Resultados.'], ['¿Cómo encuentro un Certificado de Análisis?', 'Localiza el número de lote impreso en la etiqueta de tu vial e ingrésalo en la Biblioteca COA para ver el Certificado de Análisis de ese lote.'], ['¿Cómo se suministran y almacenan los productos?', 'Los productos se suministran como polvo liofilizado. Almacenar a -20°C, protegido de la luz y la humedad, y manipular conforme a las pautas de seguridad institucionales.'], ['¿Proporcionan instrucciones de manejo?', 'Proporcionamos información general de manejo y almacenamiento de laboratorio solo para investigadores calificados. No proporcionamos ninguna guía de dosificación, uso o aplicación.']],
      'lp.disclaimer.title': 'Aviso de investigación',
      'lp.disclaimer.sec': [['Solo para uso en investigación', 'Todos los productos vendidos por Futuristic Science, LLC están destinados estrictamente a fines de laboratorio e investigación. NO están destinados al uso humano o veterinario, al consumo ni a ninguna aplicación in vivo.'], ['Sin afirmaciones médicas', 'Nada en este sitio web constituye consejo médico ni una afirmación de diagnosticar, tratar, curar o prevenir ninguna enfermedad o condición. Ninguna declaración ha sido evaluada por ninguna autoridad reguladora.'], ['Responsabilidad del comprador', 'Al comprar, el comprador afirma que es un investigador calificado de 21 años o más y que manipulará, almacenará y desechará los materiales conforme a todas las leyes aplicables y las pautas de seguridad institucionales.']],
      'lp.privacy.title': 'Política de privacidad',
      'lp.privacy.sec': [['Información que recopilamos', 'Recopilamos solo la información necesaria para procesar pedidos y responder consultas: nombre, datos de contacto e historial de pedidos. No vendemos datos personales.'], ['Cómo la usamos', 'Cumplimiento de pedidos, atención al cliente y mantenimiento de registros requerido. Los datos de pago son procesados por nuestro proveedor de pagos y no se almacenan en nuestros servidores.'], ['Tus opciones', 'Puedes solicitar acceso o eliminación de tus datos contactándonos al correo a continuación.']],
      'lp.shipping.title': 'Pol\u00edtica de Env\u00edo',
      'lp.shipping.intro': 'Esta Pol\u00edtica de Env\u00edo explica c\u00f3mo {company} procesa, env\u00eda y protege tu pedido, y c\u00f3mo reportar un problema de env\u00edo o de cumplimiento.',
      'lp.shipping.sec': [['Env\u00edo y Cumplimiento', 'Los pedidos realizados antes de las 12:00 PM MST normalmente se env\u00edan el mismo d\u00eda h\u00e1bil, y a m\u00e1s tardar el siguiente d\u00eda h\u00e1bil. Los pedidos realizados en fines de semana o d\u00edas festivos se env\u00edan el siguiente d\u00eda h\u00e1bil.'], ['Cobertura de Protecci\u00f3n de Env\u00edo', ['Todos los pedidos realizados con {company} incluyen Protecci\u00f3n de Env\u00edo de forma predeterminada. Esta cobertura se aplica autom\u00e1ticamente al finalizar la compra y no es opcional.', 'La Protecci\u00f3n de Env\u00edo cubre problemas que califiquen relacionados con la no entrega, da\u00f1os o errores de cumplimiento, sujeto a las condiciones descritas en esta pol\u00edtica. Todas las reclamaciones y determinaciones de cobertura se rigen por los t\u00e9rminos a continuaci\u00f3n.']], ['Paquetes Entregados', ['{company} no es responsable de los paquetes marcados como \u201cEntregados\u201d por el transportista y posteriormente perdidos o robados, fuera de las condiciones y la cobertura definidas en esta pol\u00edtica.', 'Los clientes son responsables de:', ['Asegurar un lugar de entrega seguro', 'Monitorear las actualizaciones de seguimiento', 'Recoger los paquetes de inmediato tras la entrega'], 'Recomendamos encarecidamente usar opciones de retenci\u00f3n del transportista, entrega con firma requerida (cuando est\u00e9 disponible) o una direcci\u00f3n de entrega segura si te preocupa el robo de paquetes.']], ['No Entrega, Da\u00f1o o Errores de Cumplimiento', ['Todos los problemas relacionados con el env\u00edo que no sean robo despu\u00e9s de la entrega deben reportarse dentro de los cinco (5) d\u00edas calendario a partir de la fecha de entrega o intento de entrega del transportista. Este plazo es firme \u2014 las solicitudes presentadas fuera de esta ventana ser\u00e1n rechazadas sin excepci\u00f3n.', 'Para reclamaciones que involucren da\u00f1os, art\u00edculos faltantes o errores de cumplimiento, se requiere la siguiente documentaci\u00f3n completa:', ['Un video completo del desempaque grabado desde el momento en que se abre el paquete por primera vez', 'Fotos claras del embalaje externo', 'Fotos claras del contenido del paquete', 'Fotos claras del albar\u00e1n incluido dentro del paquete', 'El n\u00famero de seguimiento', 'Una breve descripci\u00f3n escrita del problema'], 'No proporcionar toda la documentaci\u00f3n requerida resultar\u00e1 en la denegaci\u00f3n de la reclamaci\u00f3n.']], ['Resoluci\u00f3n', 'Si una reclamaci\u00f3n es revisada y verificada como un error de cumplimiento o env\u00edo de {company}, los art\u00edculos afectados se reenviar\u00e1n sin costo adicional. No se emitir\u00e1n reembolsos en efectivo.']],
      'lp.terms.title': 'T\u00e9rminos y condiciones',
      'lp.terms.intro': 'Bienvenido a {company}. Lea atentamente estos T\u00e9rminos y Condiciones (\u201cT\u00e9rminos\u201d) \u2014 rigen su acceso y uso del sitio web, los productos y los servicios de {company} (en conjunto, los \u201cServicios\u201d). Al usar los Servicios, usted acepta estos T\u00e9rminos y nuestra Pol\u00edtica de Privacidad. Si no est\u00e1 de acuerdo, deje de usar los Servicios.',
      'lp.terms.sec': [['Elegibilidad', 'Debe tener al menos 18 a\u00f1os para usar los Servicios. Al usarlos, declara que cumple con este requisito de edad y que es un comprador calificado que act\u00faa con fines leg\u00edtimos de investigaci\u00f3n.'], ['Uso de los Servicios', 'Nuestros productos se suministran \u00fanicamente para uso en investigaci\u00f3n de laboratorio. No est\u00e1n destinados al uso o consumo personal, ni a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Usted acepta usar los Servicios y productos cumpliendo con todas las leyes y regulaciones aplicables. {company} se reserva el derecho de rechazar una venta cuando considere que un cliente est\u00e1 infringiendo estos T\u00e9rminos.'], ['Propiedad Intelectual', 'Todo el contenido, logotipos, gr\u00e1ficos, im\u00e1genes y dem\u00e1s material de los Servicios es propiedad intelectual de {company} y est\u00e1 protegido por las leyes de derechos de autor y marcas registradas. Se proh\u00edbe el uso no autorizado.'], ['Pedidos y Pagos', 'Usted acepta proporcionar informaci\u00f3n de compra y de cuenta actual, completa y precisa para cada pedido. Tambi\u00e9n acepta mantener actualizados los datos de su cuenta y pago \u2014 incluido el correo, el m\u00e9todo de pago y la fecha de vencimiento de la tarjeta \u2014 para que podamos procesar sus transacciones y contactarlo cuando sea necesario.'], ['Aceptaci\u00f3n y Cancelaci\u00f3n de Pedidos', '{company} se reserva el derecho, a su entera discreci\u00f3n, de rechazar, limitar, cancelar o terminar cualquier pedido en cualquier momento y por cualquier motivo \u2014 incluido sospecha de fraude, uso indebido, violaciones de pol\u00edticas, problemas de disponibilidad, errores de precio o de listado, o preocupaciones regulatorias. Si un pedido se cancela despu\u00e9s de recibir el pago, podr\u00e1 emitirse un reembolso a nuestra discreci\u00f3n conforme a estas pol\u00edticas.'], ['Reembolsos y Devoluciones', ['Debido a la naturaleza sensible de nuestros productos y a los requisitos regulatorios aplicables, todas las ventas son finales.', '{company} no acepta devoluciones, no emite reembolsos ni permite cancelaciones una vez realizado un pedido, independientemente del estado de entrega, salvo cuando lo exija la ley aplicable o seg\u00fan lo dispuesto en nuestras pol\u00edticas.', 'Nada en estos T\u00e9rminos limita cualquier recurso que la ley aplicable nos obligue a brindar \u2014 por ejemplo, cuando enviamos el art\u00edculo equivocado, un art\u00edculo nunca se envi\u00f3, o un producto lleg\u00f3 da\u00f1ado debido a nuestro manejo o embalaje.']], ['Paquetes Entregados', ['Una vez que el transportista marca un env\u00edo como \u201cEntregado\u201d, la responsabilidad del paquete se transfiere al cliente.', '{company} no se hace responsable de paquetes perdidos o robados despu\u00e9s de la entrega \u2014 incluido el robo en porches, salas de correo, recepciones, casilleros u otros lugares. No se emitir\u00e1n reembolsos, cr\u00e9ditos ni reemplazos por paquetes confirmados como entregados por el transportista.']], ['Da\u00f1os de Env\u00edo o Errores de Preparaci\u00f3n', ['En caso de un error verificado de preparaci\u00f3n o env\u00edo de {company} \u2014 como art\u00edculos incorrectos, art\u00edculos faltantes o da\u00f1os ocurridos en tr\u00e1nsito antes de la entrega \u2014 debe notificarnos dentro de los siete (7) d\u00edas calendario posteriores a la fecha de entrega del transportista.', 'Este plazo de notificaci\u00f3n es firme. Las solicitudes presentadas fuera de este per\u00edodo ser\u00e1n denegadas sin excepci\u00f3n.']], ['Documentaci\u00f3n Requerida', ['Todas las reclamaciones deben incluir documentaci\u00f3n completa y verificable:', ['Un video completo del desembalaje grabado desde el momento en que se abre el paquete por primera vez', 'Fotos del embalaje externo', 'Fotos del contenido del paquete', 'Fotos del albar\u00e1n incluido con el pedido'], 'Las reclamaciones presentadas sin toda la documentaci\u00f3n requerida ser\u00e1n denegadas.']], ['Resoluci\u00f3n', ['Tras la confirmaci\u00f3n de un error eleg\u00edble de env\u00edo o preparaci\u00f3n causado por {company}, podemos, a nuestra entera discreci\u00f3n, emitir un reemplazo de los art\u00edculos afectados.', 'No se garantizan reembolsos en efectivo, cr\u00e9ditos en tienda ni compensaciones alternativas, y no se proporcionan para paquetes entregados, rechazados o robados.']], ['Contracargos', 'Los contracargos presentados por paquetes entregados, rechazados o robados ser\u00e1n disputados utilizando la confirmaci\u00f3n del transportista, los registros de entrega y la aceptaci\u00f3n de estos T\u00e9rminos por parte del cliente.'], ['Consentimiento de Comunicaciones', ['Al realizar un pedido, crear una cuenta o usar los Servicios, usted consiente recibir comunicaciones de {company} \u2014 incluidas transaccionales, operativas, de soporte y de marketing \u2014 por correo, SMS y otros medios electr\u00f3nicos usando los datos que proporcione. La frecuencia de los mensajes puede variar; pueden aplicarse tarifas de mensajes y datos.', 'El consentimiento para recibir comunicaciones no es una condici\u00f3n de compra. Puede cancelar los mensajes no transaccionales en cualquier momento siguiendo las instrucciones de cancelaci\u00f3n en nuestros correos o respondiendo STOP a cualquier SMS. Los mensajes transaccionales y de servicio (confirmaciones de pedido, avisos de env\u00edo, cuenta y soporte) pueden continuar seg\u00fan lo permita la ley.']], ['Limitaci\u00f3n de Responsabilidad', 'En la m\u00e1xima medida permitida por la ley, {company} no ser\u00e1 responsable de da\u00f1os indirectos, incidentales o consecuentes que surjan del uso \u2014 o la imposibilidad de uso \u2014 de los Servicios o de cualquier producto adquirido a trav\u00e9s de ellos.'], ['Detecci\u00f3n de Fraude y Verificaci\u00f3n', ['Para proteger a nuestros clientes y a nuestro negocio, {company} se reserva el derecho, a su entera discreci\u00f3n, de:', ['Verificar la identidad de cualquier cliente', 'Solicitar identificaci\u00f3n o documentaci\u00f3n adicional para pedidos marcados como sospechosos o de alto valor', 'Rechazar, retener o cancelar cualquier pedido que razonablemente consideremos fraudulento, no autorizado o no conforme'], 'Los pedidos pueden retenerse hasta completar la verificaci\u00f3n.']], ['Preparaci\u00f3n y Procesamiento', ['Los pedidos se procesan despu\u00e9s de recibir y verificar el pago. {company} puede retrasar o cancelar un pedido si:', ['La verificaci\u00f3n del pago o la direcci\u00f3n (incluidos AVS/CVV) falla o no es concluyente', 'Se sospecha fraude', 'Surgen problemas de inventario o suministro', 'Surgen preocupaciones regulatorias o de cumplimiento'], 'Cuando un pedido se cancela antes de su preparaci\u00f3n, se reembolsar\u00e1 cualquier monto cobrado por ese pedido.']], ['Inspecci\u00f3n de los Env\u00edos', 'Los clientes deben inspeccionar todos los env\u00edos de inmediato al recibirlos. Cualquier reclamo por un error de env\u00edo o preparaci\u00f3n debe presentarse dentro del plazo indicado anteriormente, junto con la documentaci\u00f3n requerida. La inspecci\u00f3n oportuna ayuda a garantizar que los reclamos puedan verificarse y resolverse.'], ['Ley Aplicable y Jurisdicci\u00f3n', 'Estos T\u00e9rminos se rigen por las leyes del Estado de Wisconsin, sin tener en cuenta sus principios de conflicto de leyes. Cualquier disputa que surja de o se relacione con estos T\u00e9rminos o los Servicios se presentar\u00e1 exclusivamente en los tribunales estatales o federales ubicados en Wisconsin, y usted consiente la jurisdicci\u00f3n personal de dichos tribunales.'], ['Intransferibilidad de los Pedidos', 'Los pedidos y los derechos asociados no pueden transferirse, cederse ni reasignarse a otra parte sin el consentimiento previo por escrito de {company}.'], ['Fuerza Mayor', '{company} no se hace responsable de ning\u00fan retraso o incumplimiento que resulte de causas fuera de su control razonable, incluidas, entre otras, interrupciones del transportista, desastres naturales, actos de gobierno, conflictos laborales o interrupciones de la cadena de suministro.'], ['Divisibilidad', 'Si alguna disposici\u00f3n de estos T\u00e9rminos se considera inv\u00e1lida o inaplicable, dicha disposici\u00f3n se limitar\u00e1 o eliminar\u00e1 en la medida m\u00ednima necesaria, y las disposiciones restantes permanecer\u00e1n en pleno vigor y efecto.'], ['Cambios en los T\u00e9rminos', 'Podemos modificar estos T\u00e9rminos en cualquier momento. Su uso continuado de los Servicios despu\u00e9s de publicarse los cambios constituye la aceptaci\u00f3n de dichos cambios.'], ['Cont\u00e1ctenos', '\u00bfPreguntas sobre estos T\u00e9rminos? Escriba a nuestro equipo a {email}. Al usar los Servicios, usted acepta estos T\u00e9rminos; si no est\u00e1 de acuerdo con alguna parte, debe dejar de usar los Servicios.']],
      'ruo.eyebrow': 'Legal',
      'ruo.title': 'Política de Uso Exclusivo para Investigación (RUO)',
      'ruo.intro': 'Todos los productos vendidos por {company} están destinados estrictamente a fines de investigación de laboratorio. {company} suministra materiales designados como de Uso Exclusivo para Investigación (RUO) — no aptos para consumo humano o animal, uso médico, diagnóstico ni terapéutico.',
      'ruo.chips': ['Solo Investigación de Laboratorio', 'Sin Uso Humano o Animal', 'Compradores Calificados'],
      'ruo.summary': [['Solo para investigación', 'Los productos de {company} están destinados estrictamente a fines de investigación de laboratorio.'], ['Sin uso médico', 'Los productos no son medicamentos, suplementos, cosméticos ni productos médicos.'], ['Responsabilidad del comprador', 'Los clientes deben cumplir con las normas aplicables de investigación, seguridad y manejo.']],
      'ruo.sections': [['Resumen', ['Todos los productos vendidos por {company} están destinados estrictamente a fines de investigación de laboratorio.', '{company} suministra materiales designados como de Uso Exclusivo para Investigación (RUO) y no están aprobados para consumo humano o animal, uso médico, diagnóstico ni terapéutico.', 'Al comprar o utilizar el sitio web de {company}, usted reconoce y acepta que todos los productos se utilizarán únicamente para investigación científica legítima realizada por personas o instituciones calificadas en entornos de laboratorio apropiados.']], ['Sin Uso Humano o Animal', ['Los productos vendidos por {company}:', ['No están destinados al consumo humano.', 'No están destinados al uso veterinario.', 'No están destinados a inyección, ingestión, inhalación ni uso tópico en humanos o animales.', 'No son medicamentos, suplementos dietéticos, cosméticos ni productos médicos.'], 'Ninguno de los productos ofrecidos por {company} ha sido evaluado ni aprobado por la Administración de Alimentos y Medicamentos de los EE. UU. (FDA) ni por ninguna otra autoridad reguladora para uso médico o terapéutico.', 'Cualquier sugerencia, promoción o intento de usar los productos de {company} para uso humano o animal viola estas políticas.', '{company} no proporciona información de dosificación, protocolos ni orientación de uso para la administración humana o animal.']], ['Solo Compradores Calificados', ['Al comprar a {company}, usted declara y garantiza que:', ['Tiene al menos 21 años de edad.', 'Compra productos para fines legítimos de investigación de laboratorio.', 'Posee el conocimiento y la capacitación necesarios para manejar de forma segura productos químicos de investigación.', 'Utilizará los productos únicamente en entornos de laboratorio controlados.', 'Cumplirá con todas las leyes, regulaciones y normas de seguridad aplicables.'], '{company} se reserva el derecho de rechazar o cancelar cualquier pedido si consideramos que una compra puede violar esta política de Uso Exclusivo para Investigación.']], ['Sin Afirmaciones Médicas', ['La información proporcionada en el sitio web de {company}, en las listas de productos, materiales educativos o comunicaciones es únicamente para contexto informativo y de investigación.', 'Nada de lo proporcionado por {company} debe interpretarse como:', ['Asesoramiento médico.', 'Recomendaciones de tratamiento.', 'Orientación de salud.', 'Información diagnóstica.', 'Instrucciones clínicas.'], '{company} no afirma que ningún producto pueda diagnosticar, tratar, curar ni prevenir ninguna enfermedad o condición médica.']], ['Responsabilidad de Manejo en Laboratorio', ['Los materiales de investigación pueden presentar riesgos si se manejan incorrectamente.', 'Los compradores asumen plena responsabilidad por:', ['Almacenamiento y manejo adecuados.', 'Procedimientos de seguridad de laboratorio.', 'Eliminación adecuada de materiales.', 'Cumplimiento de las regulaciones aplicables de seguridad química.'], '{company} no se hace responsable del mal uso, manejo inadecuado o aplicación no autorizada de sus productos.']], ['Usos Prohibidos', ['Los productos de {company} no pueden utilizarse para:', ['Consumo humano.', 'Administración veterinaria o animal.', 'Preparación para uso humano.', 'Fabricación de alimentos, suplementos dietéticos o cosméticos.', 'Cualquier aplicación prohibida por la ley federal, estatal o local.'], 'Cualquier intento de comprar productos para fines prohibidos puede resultar en:', ['Cancelación inmediata del pedido.', 'Terminación permanente de la cuenta.', 'Notificación a las autoridades correspondientes cuando lo exija la ley.']]], ['Derecho a Rechazar el Servicio', ['{company} se reserva el derecho, a su entera discreción, de:', ['Rechazar cualquier pedido.', 'Cancelar transacciones.', 'Limitar cantidades.', 'Restringir cuentas de clientes.'], 'Esto puede ocurrir si sospechamos que los productos se están comprando para fines ajenos a la investigación o para un uso indebido.']], ['Aceptación de la Política', ['Al acceder al sitio web de {company}, crear una cuenta o realizar un pedido, usted reconoce que ha leído, comprendido y acepta cumplir con esta Política de Uso Exclusivo para Investigación.', 'El incumplimiento de esta política puede resultar en la cancelación del pedido, la suspensión de la cuenta o acciones legales cuando corresponda.']]],
      'ruo.needHelp': '¿Necesita ayuda?'
    }
  };
  window.FS_DICT = DICT;

  // t(key, vars?) — current language, falls back to EN then the key itself.
  window.t = function (key, vars) {
    var l = store.lang;
    var d = DICT[l] || DICT.en;
    var s = d[key] != null ? d[key] : DICT.en[key] != null ? DICT.en[key] : key;
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        s = s.split('{' + k + '}').join(vars[k]);
      });
    }
    return s;
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/i18n.js", error: String((e && e.message) || e) }); }

// ui_kits/website/vial-fx.js
try { (() => {
/* ============================================================
   Vial FX enhancer — wraps every vial <img> in a .vial-card and
   wires a cursor glare, gold bloom + orbiting
   particles. Pure vanilla JS. Re-runs on SPA navigation via a
   MutationObserver so it covers the hero, catalog grid, and
   product pages alike. No libraries.
   ============================================================ */
(function () {
  'use strict';

  var VIAL_SRC = /vial-(?!trio)/; // every product vial asset gets the FX (hero trio excluded)
  var MIN_W = 90; // skip tiny thumbnails (cart / checkout)
  var PARTICLES = 11;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function rand(a, b) {
    return a + Math.random() * (b - a);
  }
  function buildParticles(host, baseDim) {
    var frag = document.createDocumentFragment();
    for (var i = 0; i < PARTICLES; i++) {
      var p = document.createElement('span');
      p.className = 'vial-card__p';
      var radius = baseDim * rand(0.40, 0.60);
      p.style.setProperty('--r', radius.toFixed(1) + 'px');
      p.style.setProperty('--sz', rand(4, 9).toFixed(1) + 'px');
      p.style.setProperty('--dur', rand(4.5, 9).toFixed(2) + 's');
      p.style.setProperty('--delay', (-rand(0, 6)).toFixed(2) + 's');
      p.style.setProperty('--op', rand(0.55, 1).toFixed(2));
      frag.appendChild(p);
    }
    host.appendChild(frag);
  }
  function enhance(img) {
    if (!img || img.dataset.vialSeen) return;
    if (!VIAL_SRC.test(img.getAttribute('src') || '')) return;
    img.dataset.vialSeen = '1';
    var rect = img.getBoundingClientRect();
    var w = rect.width || img.naturalWidth;
    var dim = Math.max(rect.width, rect.height) || w;
    if (dim < MIN_W) return; // leave small thumbnails alone
    if (img.closest('.vial-card')) return; // already wrapped

    var usesPctHeight = /%\s*$/.test((img.style.height || '').trim());
    var baseDim = Math.max(rect.width, rect.height) || w;

    // ---- wrap ----
    var card = document.createElement('div');
    card.className = 'vial-card' + (usesPctHeight ? ' vial-card--stretch' : '');
    var inner = document.createElement('div');
    inner.className = 'vial-card__inner';
    var parent = img.parentNode;
    parent.insertBefore(card, img);
    var bloom = document.createElement('div');
    bloom.className = 'vial-card__bloom';
    var glare = document.createElement('div');
    glare.className = 'vial-card__glare';
    var particles = document.createElement('div');
    particles.className = 'vial-card__particles';
    inner.appendChild(img); // move the image (keeps its own inline styles)
    inner.appendChild(glare);
    card.appendChild(bloom);
    card.appendChild(inner);
    card.appendChild(particles);
    buildParticles(particles, baseDim);

    // ---- interaction ----
    var raf = null;
    function onMove(e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5; // -0.5 .. 0.5
      var py = (e.clientY - r.top) / r.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        glare.style.setProperty('--gx', (50 + px * 100).toFixed(1) + '%');
        glare.style.setProperty('--gy', (50 + py * 100).toFixed(1) + '%');
      });
    }
    function onEnter() {
      card.classList.add('is-tilting');
    }
    function onLeave() {
      card.classList.remove('is-tilting');
      if (raf) cancelAnimationFrame(raf);
    }
    card.addEventListener('pointerenter', onEnter);
    card.addEventListener('pointermove', onMove);
    card.addEventListener('pointerleave', onLeave);
  }
  function scan() {
    var imgs = document.querySelectorAll('img:not([data-vial-seen])');
    for (var i = 0; i < imgs.length; i++) enhance(imgs[i]);
  }

  // Initial passes (React mounts asynchronously) + observe for SPA nav.
  var tries = 0;
  var iv = setInterval(function () {
    scan();
    if (++tries > 20) clearInterval(iv);
  }, 250);
  if (document.readyState !== 'loading') scan();else document.addEventListener('DOMContentLoaded', scan);
  var pending = false;
  var mo = new MutationObserver(function () {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () {
      pending = false;
      scan();
    });
  });
  function startObserver() {
    var root = document.getElementById('root') || document.body;
    mo.observe(root, {
      childList: true,
      subtree: true
    });
  }
  if (document.getElementById('root')) startObserver();else window.addEventListener('load', startObserver);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/vial-fx.js", error: String((e && e.message) || e) }); }

__ds_ns.COASearch = __ds_scope.COASearch;

__ds_ns.DisclaimerBanner = __ds_scope.DisclaimerBanner;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.TrustBadges = __ds_scope.TrustBadges;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
