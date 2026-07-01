/* ============================================================
   Vial FX enhancer — wraps every vial <img> in a .vial-card and
   wires a cursor glare, gold bloom + orbiting
   particles. Pure vanilla JS. Re-runs on SPA navigation via a
   MutationObserver so it covers the hero, catalog grid, and
   product pages alike. No libraries.
   ============================================================ */
(function () {
  'use strict';

  var VIAL_SRC = /vial-(?!trio)/;   // every product vial asset gets the FX (hero trio excluded)
  var MIN_W = 90;                  // skip tiny thumbnails (cart / checkout)
  var PARTICLES = 11;
  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function rand(a, b) { return a + Math.random() * (b - a); }

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
    if (dim < MIN_W) return;                 // leave small thumbnails alone
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

    inner.appendChild(img);     // move the image (keeps its own inline styles)
    inner.appendChild(glare);
    card.appendChild(bloom);
    card.appendChild(inner);
    card.appendChild(particles);
    buildParticles(particles, baseDim);

    // ---- interaction ----
    var raf = null;
    function onMove(e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;   // -0.5 .. 0.5
      var py = (e.clientY - r.top) / r.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        glare.style.setProperty('--gx', (50 + px * 100).toFixed(1) + '%');
        glare.style.setProperty('--gy', (50 + py * 100).toFixed(1) + '%');
      });
    }
    function onEnter() { card.classList.add('is-tilting'); }
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

  if (document.readyState !== 'loading') scan();
  else document.addEventListener('DOMContentLoaded', scan);

  var pending = false;
  var mo = new MutationObserver(function () {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () { pending = false; scan(); });
  });
  function startObserver() {
    var root = document.getElementById('root') || document.body;
    mo.observe(root, { childList: true, subtree: true });
  }
  if (document.getElementById('root')) startObserver();
  else window.addEventListener('load', startObserver);
})();
