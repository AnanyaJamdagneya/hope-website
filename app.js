/* HOPE — tabs, cinematic hero, carousels, galleries, lightbox */
(function () {
  'use strict';
  var D = window.HOPE_DATA || {};
  var G = window.HOPE_GALLERY || { auction: [], blooddrives: [], showcase: [], board: {} };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var el = function (t, c, h) { var n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };

  $('#year').textContent = new Date().getFullYear();

  /* placeholder pool */
  var PH = [];
  for (var p = 0; p < 14; p++) PH.push('assets/placeholders/ph-' + (p < 10 ? '0' + p : p) + '.jpg');

  /* pad thin galleries so they still look full */
  ['auction', 'blooddrives', 'showcase', 'execs'].forEach(function (k) {
    var a = (G[k] || []).slice(); var i = 0;
    while (a.length < 8) { a.push(PH[i % PH.length]); i++; }
    G[k] = a;
  });

  /* shared real-photo pool for hero + marquee */
  function interleave(lists) {
    var out = [], n = Math.max.apply(null, lists.map(function (l) { return l.length; }));
    for (var i = 0; i < n; i++) lists.forEach(function (l) { if (l[i]) out.push(l[i]); });
    return out;
  }
  var realPool = interleave([G.blooddrives || [], G.showcase || [], G.auction || []])
    .filter(function (s) { return s.indexOf('placeholders') === -1; });
  if (realPool.length < 12) realPool = realPool.concat(PH);

  /* ---------- HERO COLLAGE ---------- */
  var collage = $('#heroCollage');
  if (collage) {
    realPool.slice(0, 12).forEach(function (src) {
      var img = el('img'); img.src = src; img.alt = ''; img.loading = 'eager';
      collage.appendChild(img);
    });
  }

  /* ---------- MARQUEE ---------- */
  var marquee = $('#marquee');
  if (marquee) {
    var mq = realPool.slice(0, 14);
    mq.concat(mq).forEach(function (src) {
      var img = el('img'); img.src = src; img.alt = 'HOPE in action'; img.loading = 'lazy';
      marquee.appendChild(img);
    });
  }

  /* ---------- STATS ---------- */
  (D.stats || []).forEach(function (s) {
    var d = el('div', 'chero__stat');
    d.innerHTML = '<b data-count="' + s.value + '" data-prefix="' + (s.prefix || '') + '" data-suffix="' + (s.suffix || '') + '">'
      + (s.prefix || '') + s.value + (s.suffix || '') + '</b><span>' + s.label + '</span>';
    $('#stats').appendChild(d);
  });

  /* ---------- HOME previews ---------- */
  (D.events || []).forEach(function (e) {
    var card = el('button', 'pv');
    card.setAttribute('data-tab', e.key);
    var cardImg = (D.mainPhoto && D.mainPhoto[e.key]) || e.img;
    var cardFocus = (D.mainFocus && D.mainFocus[e.key]) || 'center 35%';
    card.innerHTML = '<img src="' + cardImg + '" alt="' + e.title + '" style="object-position:' + cardFocus + '">' +
      '<div class="pv__o"><span class="eyebrow">' + e.tag + '</span><h3>' + e.title + '</h3><span class="go">View gallery &rsaquo;</span></div>';
    $('#previews').appendChild(card);
  });

  /* ---------- EVENT TABS ---------- */
  (D.events || []).forEach(function (e) {
    var photos = G[e.key] || [];
    var main = (D.mainPhoto && D.mainPhoto[e.key]) || photos[0] || e.img;
    var view = $('#view-' + e.key);
    var facts = (e.facts || []).map(function (f) { return '<span>' + f + '</span>'; }).join('');
    var gal = '<div class="gal" id="gal-' + e.key + '">' + photos.map(function (src, i) {
      return '<figure data-gal="' + e.key + '" data-i="' + i + '"><img src="' + src + '" alt="' + e.title + ' photo ' + (i + 1) + '" loading="lazy"></figure>';
    }).join('') + '</div>';

    var focus = (D.mainFocus && D.mainFocus[e.key]) || 'center 35%';
    var heroStyle = e.key === 'blooddrives' ? ' style="min-height:clamp(520px,84vh,880px)"' : '';
    view.innerHTML =
      '<div class="ev-hero"' + heroStyle + '><img src="' + main + '" alt="' + e.title + '" style="object-position:' + focus + '">' +
        '<div class="ev-hero__o"></div>' +
        '<div class="ev-hero__c wrap" style="width:auto"><span class="tag">' + e.tag + '</span>' +
          '<h1>' + e.title + '</h1><div class="facts">' + facts + '</div></div></div>' +
      ((D.eventCopy && D.eventCopy[e.key]) ? '<div class="wrap" style="padding-top:clamp(40px,6vw,66px)"><p class="ev-desc rv">' + D.eventCopy[e.key] + '</p></div>' : '') +
      (e.key === 'auction' && D.auctionVideo ? '<div class="wrap" id="auctionVideoSlot" style="padding-top:clamp(36px,5vw,54px)"></div>' : '') +
      '<div class="wrap section" style="padding-top:clamp(34px,5vw,52px)">' +
        '<div class="center rv" style="max-width:620px"><span class="eyebrow">The gallery</span>' +
          '<h2 class="h-sec">Caught in action</h2></div>' +
        '<div style="margin-top:34px">' + gal + '</div></div>';
  });

  /* auction video (only if the file exists) */
  if (D.auctionVideo) {
    fetch(D.auctionVideo, { method: 'HEAD' }).then(function (r) {
      var slot = $('#auctionVideoSlot');
      if (!r.ok || !slot) return;
      var poster = (G.auction && G.auction[0]) || '';
      slot.innerHTML = '<div class="center rv in" style="max-width:620px;margin-bottom:24px"><span class="eyebrow">Press play</span>' +
        '<h2 class="h-sec">See the night for yourself</h2></div>' +
        '<div class="vid"><video controls playsinline preload="metadata"' + (poster ? ' poster="' + poster + '"' : '') +
        '><source src="' + D.auctionVideo + '" type="video/mp4"></video></div>';
    }).catch(function () {});
  }

  /* ---------- COMMITTEES ---------- */
  var grid = $('#committeeGrid');
  var slugify = function (s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); };
  (D.committees || []).forEach(function (c) {
    var img = 'assets/committees/' + slugify(c.name) + '.jpg';
    var card = el('article', 'ccard');
    card.setAttribute('data-tag', c.tag);
    card.innerHTML = '<div class="ccard__img"><img src="' + img + '" onerror="this.onerror=null;this.src=\'' + c.img + '\'" alt="' + c.name + '" loading="lazy"></div>' +
      '<div class="ccard__b"><div class="ccard__top"><span class="dot" style="background:' + c.dot + '"></span>' +
      '<h3>' + c.name + '</h3><span class="ccard__tag">' + c.tag + '</span></div>' +
      (c.partner ? '<div class="ccard__partner">' + c.partner + '</div>' : '') +
      '<div class="ccard__heads">Heads: ' + c.heads + '</div>' +
      '<a class="ccard__fb" href="' + c.fb + '" target="_blank" rel="noopener">Join on Facebook &rsaquo;</a></div>';
    grid.appendChild(card);
  });
  var tags = ['All'].concat((D.committees || []).map(function (c) { return c.tag; })
    .filter(function (t, i, a) { return a.indexOf(t) === i; }).sort());
  var filters = $('#filters');
  tags.forEach(function (t, i) {
    var chip = el('button', 'chip' + (i === 0 ? ' active' : ''), t);
    chip.addEventListener('click', function () {
      $$('.chip', filters).forEach(function (x) { x.classList.remove('active'); });
      chip.classList.add('active');
      $$('.ccard', grid).forEach(function (card) {
        card.classList.toggle('is-hidden', !(t === 'All' || card.getAttribute('data-tag') === t));
      });
    });
    filters.appendChild(chip);
  });

  /* ---------- BOARD (carousels) ---------- */
  var boardImgs = (G.board) || {};
  (D.board || []).forEach(function (m) {
    var key = (m.img.split('/').pop() || '').replace('.jpg', '');
    var pics = (boardImgs[key] && boardImgs[key].length) ? boardImgs[key] : [m.img];
    var slides = pics.map(function (src) {
      var f = (D.boardPhotoFocus && D.boardPhotoFocus[src]) ? ' style="object-position:' + D.boardPhotoFocus[src] + '"' : '';
      return '<img src="' + src + '" alt="' + m.name + '"' + f + ' loading="lazy">';
    }).join('');
    var dots = pics.map(function (_, i) { return '<i class="' + (i === 0 ? 'on' : '') + '" data-d="' + i + '"></i>'; }).join('');
    var card = el('article', 'bcard');
    card.innerHTML =
      '<div class="carousel" data-i="0" style="--ring:' + m.ring + '">' +
        '<div class="carousel__track">' + slides + '</div>' +
        '<span class="carousel__role" style="--ring:' + m.ring + '">' + m.role + '</span>' +
        (pics.length > 1 ? '<button class="carousel__btn carousel__prev" aria-label="Previous">&lsaquo;</button>' +
          '<button class="carousel__btn carousel__next" aria-label="Next">&rsaquo;</button>' +
          '<div class="carousel__dots">' + dots + '</div>' : '') +
      '</div>' +
      '<div class="bcard__b"><h3>' + m.name + '</h3><p>' + m.bio + '</p></div>';
    $('#boardGrid').appendChild(card);
  });

  /* ---------- COUNTDOWN + SCHEDULE ---------- */
  (function () {
    var listEl = $('#schedule'), cdEl = $('#countdown');
    if (!cdEl) return;
    var sched = (D.schedule || []).map(function (s) { return { d: new Date(s.date + 'T18:00:00'), label: s.label, note: s.note }; });
    var now = new Date(), nextIdx = -1;
    sched.forEach(function (s, i) { if (nextIdx === -1 && s.d >= now) nextIdx = i; });
    if (listEl) listEl.innerHTML = sched.map(function (s, i) {
      var ds = s.d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      return '<li class="' + (s.d < now ? 'is-past' : '') + (i === nextIdx ? ' is-next' : '') + '">' +
        '<span class="tl-date">' + ds + '</span>' +
        '<span class="tl-label">' + s.label + (i === nextIdx ? ' <em>next up</em>' : '') + '</span>' +
        '<span class="tl-note">' + (s.note || '') + '</span></li>';
    }).join('');
    if (nextIdx === -1) { cdEl.innerHTML = '<div class="cd-lead">See you next year!</div>'; return; }
    var target = sched[nextIdx];
    function pad(n) { return n < 10 ? '0' + n : '' + n; }
    function unit(v, l) { return '<div class="cd-u"><b>' + pad(v) + '</b><span>' + l + '</span></div>'; }
    function tick() {
      var diff = target.d - new Date();
      if (diff <= 0) { cdEl.innerHTML = '<div class="cd-lead"><b>' + target.label + '</b> is happening now!</div>'; return; }
      cdEl.innerHTML = '<div class="cd-lead">Next up: <b>' + target.label + '</b></div><div class="cd-units">' +
        unit(Math.floor(diff / 86400000), 'days') + unit(Math.floor(diff % 86400000 / 3600000), 'hrs') +
        unit(Math.floor(diff % 3600000 / 60000), 'min') + unit(Math.floor(diff % 60000 / 1000), 'sec') + '</div>';
    }
    tick(); setInterval(tick, 1000);
  })();

  /* carousel behaviour */
  function setupCarousels() {
    $$('.carousel').forEach(function (car) {
      var track = $('.carousel__track', car);
      var n = track.children.length; if (n < 2) return;
      var dots = $$('.carousel__dots i', car);
      var idx = 0, timer;
      function go(i) {
        idx = (i + n) % n;
        track.style.transform = 'translateX(' + (-idx * 100) + '%)';
        dots.forEach(function (d, di) { d.classList.toggle('on', di === idx); });
      }
      function auto() { timer = setInterval(function () { go(idx + 1); }, 4200); }
      function stop() { clearInterval(timer); }
      $('.carousel__next', car).addEventListener('click', function (e) { e.stopPropagation(); go(idx + 1); });
      $('.carousel__prev', car).addEventListener('click', function (e) { e.stopPropagation(); go(idx - 1); });
      dots.forEach(function (d) { d.addEventListener('click', function (e) { e.stopPropagation(); go(+d.getAttribute('data-d')); }); });
      car.addEventListener('mouseenter', stop); car.addEventListener('mouseleave', auto);
      auto();
    });
  }
  setupCarousels();

  /* ---------- counters ---------- */
  function countUp(b) {
    if (b.dataset.done) return; b.dataset.done = '1';
    var target = parseFloat(b.getAttribute('data-count'));
    var pre = b.getAttribute('data-prefix') || '', suf = b.getAttribute('data-suffix') || '';
    var start = null, dur = 1300;
    function step(ts) { if (!start) start = ts; var q = Math.min((ts - start) / dur, 1);
      b.textContent = pre + Math.round(target * (1 - Math.pow(1 - q, 3))) + suf; if (q < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }

  /* ---------- tab routing ---------- */
  var views = {};
  $$('.view').forEach(function (v) { views[v.id.replace('view-', '')] = v; });

  function revealIn(view) {
    var items = $$('.gal figure, .rv', view);
    items.forEach(function (n, i) { n.style.transitionDelay = (Math.min(i, 14) * 45) + 'ms'; });
    requestAnimationFrame(function () {
      items.forEach(function (n) { if (n.getBoundingClientRect().top < window.innerHeight * 1.15) n.classList.add('in'); });
    });
  }

  function showTab(name) {
    if (!views[name]) name = 'home';
    Object.keys(views).forEach(function (k) { views[k].classList.toggle('active', k === name); });
    $$('.tab-btn').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-tab') === name); });
    window.scrollTo(0, 0);
    try { history.replaceState(null, '', '#' + name); } catch (e) {}
    if (name === 'home') $$('#stats b[data-count]').forEach(countUp);
    revealIn(views[name]);
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-tab]');
    if (t) { e.preventDefault(); showTab(t.getAttribute('data-tab')); }
  });

  window.addEventListener('scroll', function () {
    var active = $('.view.active'); if (!active) return;
    $$('.gal figure:not(.in), .rv:not(.in)', active).forEach(function (n) {
      if (n.getBoundingClientRect().top < window.innerHeight * 0.92) n.classList.add('in');
    });
  }, { passive: true });

  /* nav bar shadow on scroll */
  window.addEventListener('scroll', function () {
    $('.bar').style.boxShadow = window.scrollY > 20 ? '0 6px 22px -16px rgba(30,33,64,.6)' : 'none';
  }, { passive: true });

  /* ---------- lightbox ---------- */
  var lb = $('#lb'), lbImg = $('#lbImg'), lbCount = $('#lbCount');
  var curList = [], curIdx = 0;
  function openLB(key, i) { curList = G[key] || []; curIdx = i; if (!curList.length) return; lb.classList.add('open'); render(); }
  function render() { lbImg.src = curList[curIdx]; lbCount.textContent = (curIdx + 1) + ' / ' + curList.length; }
  function close() { lb.classList.remove('open'); lbImg.src = ''; }
  function nav(d) { curIdx = (curIdx + d + curList.length) % curList.length; render(); }
  document.addEventListener('click', function (e) {
    var fig = e.target.closest('.gal figure');
    if (fig) openLB(fig.getAttribute('data-gal'), parseInt(fig.getAttribute('data-i'), 10));
  });
  $('#lbClose').addEventListener('click', close);
  $('#lbPrev').addEventListener('click', function (e) { e.stopPropagation(); nav(-1); });
  $('#lbNext').addEventListener('click', function (e) { e.stopPropagation(); nav(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close(); else if (e.key === 'ArrowLeft') nav(-1); else if (e.key === 'ArrowRight') nav(1);
  });

  /* ---------- init ---------- */
  var initial = (location.hash || '').replace('#', '');
  showTab(views[initial] ? initial : 'home');
})();
