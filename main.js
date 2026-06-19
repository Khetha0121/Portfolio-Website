// ─────────────────────────────────────────
//  main.js  —  Renders the portfolio from data.js
//
//  You should rarely need to edit this file.
//  To update content: edit data.js
//  To update styling: edit style.css
//  To update page structure: edit index.html
// ─────────────────────────────────────────


// ── TICKER ──────────────────────────────
// Reads TICKER_ITEMS from data.js and builds the scrolling bar.
// The array is duplicated so the animation loops seamlessly.
function buildTicker() {
  const track = document.getElementById('tickerTrack');
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless CSS loop
  track.innerHTML = items.map(item => `
    <span class="ticker-item">
      ${item.label} <span class="val">${item.val}</span><span class="up"> ▲</span>
    </span>
    <span class="ticker-sep">|</span>
  `).join('');
}


// ── EXPERIENCE ───────────────────────────
// Reads EXPERIENCE from data.js and builds the timeline.
//
// Each entry can have either:
//   - bullets: [...] — a simple bullet list
//   - sections: [{ label, bullets }] — multiple labelled sub-sections
//   - pills: [...] and pillsLabel — coloured tag chips (e.g. for course topics)
function buildExperience() {
  const list = document.getElementById('expList');

  list.innerHTML = EXPERIENCE.map(exp => {

    // Build the main body: either sectioned (multiple labelled groups)
    // or plain (single bullet list)
    let body = '';
    if (exp.sections) {
      body = exp.sections.map(sec => `
        <div class="exp-sub-label">${sec.label}</div>
        <ul class="exp-bullets">
          ${sec.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      `).join('');
    } else {
      body = `
        <ul class="exp-bullets">
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      `;
    }

    // Build optional course/topic pills (used for the LLM Zoomcamp entry)
    const pills = exp.pills ? `
      <div class="exp-sub-label">${exp.pillsLabel || 'Topics'}</div>
      <div class="course-pills">
        ${exp.pills.map(p => `<span class="course-pill">${p}</span>`).join('')}
      </div>
    ` : '';

    return `
      <div class="exp-item fade-up">
        <div class="exp-date">
          <div class="yr">${exp.year}</div>   <!-- Year shown in amber -->
          ${exp.date}                          <!-- Date range text -->
        </div>
        <div class="exp-dot"></div>            <!-- Amber circle on the timeline line -->
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
// Reads PROJECTS from data.js and builds the project card grid.
// Each card shows: number, title, description, tags, and optional GitHub link.
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
      <!-- Only renders the GitHub link if p.link is set in data.js -->
      ${p.link
        ? `<a href="${p.link}" class="proj-link" target="_blank" rel="noopener">${p.linkLabel || 'View on GitHub'}</a>`
        : ''
      }
    </div>
  `).join('');
}


// ── SKILLS ───────────────────────────────
// Reads SKILLS from data.js and builds the skill group grid.
// Each group has a label and an array of pill items.
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
// Reads EDUCATION from data.js and builds the education cards.
// achievement is optional — only renders the amber box if set.
function buildEducation() {
  const grid = document.getElementById('eduGrid');

  grid.innerHTML = EDUCATION.map(ed => `
    <div class="edu-card fade-up">
      <div class="edu-year">${ed.year}</div>
      <div class="edu-degree">${ed.degree}</div>
      <div class="edu-inst">${ed.inst}</div>
      <!-- \n in the modules string becomes a line break in HTML -->
      <div class="edu-modules">${ed.modules.replace(/\n/g, '<br>')}</div>
      <!-- Achievement box only appears if achievement is set in data.js -->
      ${ed.achievement
        ? `<div class="edu-achievement">${ed.achievement.replace(/\n/g, '<br>')}</div>`
        : ''
      }
    </div>
  `).join('');
}


// ── DEVELOPING ───────────────────────────
// Reads DEVELOPING from data.js and builds the "Currently Developing" cards.
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
// Uses IntersectionObserver to add the "visible" class to elements
// with the "fade-up" class as they scroll into view.
// Elements with "fade-up" start invisible (opacity: 0, translateY: 24px)
// and animate to visible when they enter the viewport.
// The staggered setTimeout(i * 60) makes sibling elements animate
// in one after another rather than all at once.
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target); // stop watching once animated in
      }
    });
  }, { threshold: 0.08 }); // trigger when 8% of the element is visible

  // Observe all fade-up elements already in the DOM (hero, section headers)
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  return observer; // return so we can observe dynamically added elements too
}


// ── NAV ACTIVE STATE ─────────────────────
// Highlights the current nav link in amber as you scroll past each section.
// Compares window.scrollY to each section's offsetTop to determine
// which section is currently in view.
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    let current = '';
    sections.forEach(sec => {
      // 120px offset accounts for the fixed nav + ticker height
      if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
    });
    navLinks.forEach(a => {
      const isActive = a.getAttribute('href') === '#' + current;
      a.style.color = isActive ? 'var(--amber)' : ''; // amber = active, default = inactive
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}


// ── MOBILE NAV ───────────────────────────
// Toggles the mobile menu open/closed when the ☰ button is tapped.
// Also closes the menu automatically when any nav link is clicked.
function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const links  = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
  });

  // Close menu when a link is tapped (otherwise it stays open on mobile)
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '☰';
    });
  });
}


// ── STAT PANEL ANIMATION ─────────────────
// Small visual touch: the "● OPEN" status blinks in once on page load.
// To remove this effect, just delete this function and its call below.
function animateStats() {
  const openStat = document.querySelector('.stat-val.teal');
  if (openStat) {
    openStat.style.opacity = '0.3';
    setTimeout(() => {
      openStat.style.transition = 'opacity 0.4s';
      openStat.style.opacity = '1';
    }, 600);
  }
}


// ── INIT ─────────────────────────────────
// Entry point — runs after the HTML has fully loaded.
// Order: build all content from data.js first, then set up
// animations and interactivity on the now-populated DOM.
document.addEventListener('DOMContentLoaded', () => {

  // 1. Render all dynamic content from data.js into the page
  buildTicker();
  buildExperience();
  buildProjects();
  buildSkills();
  buildEducation();
  buildDeveloping();

  // 2. Set up scroll-based fade-in animations.
  //    requestAnimationFrame waits one frame so the DOM has settled
  //    after all the innerHTML writes above, before we start observing.
  requestAnimationFrame(() => {
    const observer = initScrollAnimations();
    // Observe the dynamically-added fade-up elements (cards, exp items, etc.)
    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
  });

  // 3. Set up nav and mobile menu interactivity
  initNavHighlight();
  initMobileNav();

  // 4. Animate the status indicator in the stat panel
  animateStats();
});
