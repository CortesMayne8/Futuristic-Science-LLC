/* ============================================================
   Referral / affiliate codes.

   One registry below is the source of truth. A visitor who arrives on
   ...?ref=MICHELLE15 has the code captured, stored for 30 days, and applied
   automatically at checkout; the same code can be typed in by hand at
   checkout. The code and the affiliate's name ride along on the order record
   that checkout already posts, so each sale is attributable.

   Adding an affiliate = one line in CODES. Set active:false to switch a code
   off without losing the record of it.
   ============================================================ */
(function () {
  'use strict';

  var CODES = {
    MICHELLE15: { affiliate: 'Michelle', percent: 15, active: true },
  };

  var STORAGE_KEY = 'fs_ref';
  var TTL_MS = 30 * 24 * 60 * 60 * 1000; // a captured link stays good for 30 days

  function normalize(raw) {
    return String(raw == null ? '' : raw).trim().toUpperCase().replace(/\s+/g, '');
  }

  // A code is only usable if it is in the registry and still switched on.
  function lookup(raw) {
    var key = normalize(raw);
    var entry = Object.prototype.hasOwnProperty.call(CODES, key) ? CODES[key] : null;
    if (!entry || !entry.active) return null;
    return { code: key, affiliate: entry.affiliate, percent: entry.percent };
  }

  // Storage can throw (private mode, blocked cookies) — never let that break the page.
  function read() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var saved = JSON.parse(raw);
      if (!saved || !saved.code) return null;
      if (saved.at && Date.now() - saved.at > TTL_MS) { clear(); return null; }
      return lookup(saved.code); // re-validate: the registry may have changed since
    } catch (err) { return null; }
  }

  function write(code) {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ code: code, at: Date.now() })); }
    catch (err) { /* non-fatal: the code still applies for this page view */ }
  }

  function clear() {
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (err) { /* no-op */ }
    current = null;
  }

  var current = null;

  function apply(raw) {
    var hit = lookup(raw);
    if (!hit) return null;
    current = hit;
    write(hit.code);
    return hit;
  }

  function get() {
    if (current) return current;
    current = read();
    return current;
  }

  // Discount applies to the goods subtotal only, never to shipping.
  function discountOn(subtotal) {
    var ref = get();
    if (!ref || !(subtotal > 0)) return 0;
    return Math.round(subtotal * ref.percent) / 100;
  }

  // The shareable link for an affiliate, built off whatever origin the site runs on.
  function link(raw) {
    var hit = lookup(raw);
    if (!hit) return '';
    var base = window.location.origin + window.location.pathname;
    return base + '?ref=' + encodeURIComponent(hit.code);
  }

  // Capture ?ref= (or ?code=) on arrival, then drop it from the address bar so
  // the visitor can share a clean URL without passing on someone else's credit.
  function captureFromUrl() {
    var found = null;
    try {
      var params = new URLSearchParams(window.location.search);
      found = apply(params.get('ref') || params.get('code') || '');
      if (params.has('ref') || params.has('code')) {
        params.delete('ref'); params.delete('code');
        var qs = params.toString();
        window.history.replaceState({}, '', window.location.pathname + (qs ? '?' + qs : '') + window.location.hash);
      }
    } catch (err) { /* older browsers: the typed-in code still works */ }
    return found;
  }

  window.FS_REF = {
    lookup: lookup,
    apply: apply,
    get: get,
    clear: clear,
    discountOn: discountOn,
    link: link,
    arrivedByLink: !!captureFromUrl(),
  };
})();
