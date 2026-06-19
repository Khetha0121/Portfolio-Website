// ─────────────────────────────────────────
//  main.js  —  Renders the portfolio from data.js
// ─────────────────────────────────────────

// ── TICKER ──────────────────────────────
function buildTicker() {
  const track = document.getElementById('tickerTrack');
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop
  track.innerHTML = items.map(item => `
    <span class="ticker-item">
      ${item.label} <span class="val">${item.val}</span><span class="up"> ▲</span>
    </span>
    <span class="ticker-sep">|</span>
  `).join('');
}

// ── EXPERIENCE ───────────────────────────
function buildExperience() {
  const list = document.getElementById('expList');
  list.innerHTML = EXPERIENCE.map(exp => {
    let body = '';

    if (exp.sections) {
      body = exp.sections.map(sec => `
        <div class="exp-sub-label">${sec.label}</div>
        <ul class="exp-bullets">
          ${sec.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      `).join('');
    } else {
      body = `<ul class="exp-bullets">
        ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>`;
    }

    const pills = exp.pills ? `
      <div class="exp-sub-label">${exp.pillsLabel || 'Topics'}</div>
      <div class="course-pills">
        ${exp.pills.map(p => `<span class="course-pill">${p}</span>`).join('')}
      </div>
    ` : '';

    return `
      <div class="exp-item fade-up">
        <div class="exp-date">
          <div class="yr">${exp.year}</div>
          ${exp.date}
        </div>
        <div class="exp-dot"></div>
        <div class="exp-body">
          <div class="exp-role">${exp.role}</div>
          <div class="exp-company">${exp.company}</div>
          ${body}
          ${pills}
        </div>
      </div>
    `;
  }).join('');
}

// ── PROJECTS ─────────────────────────────
function buildProjects() {
  const grid = document.getElementById('projGrid');
  grid.innerHTML = PROJECTS.map(p => `
    <div class="proj-card fade-up">
      <div class="proj-num">PROJECT // ${p.num}</div>
      <div class="proj-title">${p.title}</div>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-tags">
        ${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
      </div>
      ${p.link ? `<a href="${p.link}" class="proj-link" target="_blank" rel="noopener">${p.linkLabel || 'View on GitHub'}</a>` : ''}
    </div>
  `).join('');
}

// ── SKILLS ───────────────────────────────
function buildSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map(group => `
    <div class="skill-group fade-up">
      <div class="skill-group-label">${group.label}</div>
      <div class="skill-items">
        ${group.items.map(s => `<span class="skill-pill">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ── EDUCATION ────────────────────────────
function buildEducation() {
  const grid = document.getElementById('eduGrid');
  grid.innerHTML = EDUCATION.map(ed => `
    <div class="edu-card fade-up">
      <div class="edu-year">${ed.year}</div>
      <div class="edu-degree">${ed.degree}</div>
      <div class="edu-inst">${ed.inst}</div>
      <div class="edu-modules">${ed.modules.replace(/\n/g, '<br>')}</div>
      ${ed.achievement ? `<div class="edu-achievement">${ed.achievement.replace(/\n/g, '<br>')}</div>` : ''}
    </div>
  `).join('');
}

// ── DEVELOPING ───────────────────────────
function buildDeveloping() {
  const grid = document.getElementById('devGrid');
  grid.innerHTML = DEVELOPING.map(d => `
    <div class="dev-card fade-up">
      <div class="dev-card-label">${d.label}</div>
      <div class="dev-card-title">${d.title}</div>
      <div class="dev-card-desc">${d.desc}</div>
    </div>
  `).join('');
}

// ── SCROLL ANIMATIONS ────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  // Observe existing fade-up elements
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Re-observe after dynamic content renders
  return observer;
}

// ── NAV ACTIVE STATE ─────────────────────
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
    });
    navLinks.forEach(a => {
      const isActive = a.getAttribute('href') === '#' + current;
      a.style.color = isActive ? 'var(--amber)' : '';
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

// ── MOBILE NAV ───────────────────────────
function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const links  = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '☰';
    });
  });
}

// ── STAT PANEL COUNTER ANIMATION ─────────
function animateStats() {
  // Small touch: teal "● OPEN" blinks once on load
  const openStat = document.querySelector('.stat-val.teal');
  if (openStat) {
    openStat.style.opacity = '0.3';
    setTimeout(() => { openStat.style.transition = 'opacity 0.4s'; openStat.style.opacity = '1'; }, 600);
  }
}

// ── INIT ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildTicker();
  buildExperience();
  buildProjects();
  buildSkills();
  buildEducation();
  buildDeveloping();

  // Allow DOM to settle before observing dynamically added elements
  requestAnimationFrame(() => {
    const observer = initScrollAnimations();
    // Observe the newly rendered dynamic elements
    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
  });

  initNavHighlight();
  initMobileNav();
  animateStats();
});
