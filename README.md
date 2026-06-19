# Khethokuhle Khuzwayo — Portfolio

Personal portfolio site for Khethokuhle Khuzwayo, ML Engineer & AI Engineer.

## Project Structure

```
portfolio-site/
├── index.html      # Page structure & markup
├── style.css       # All styling (design tokens, layout, components)
├── data.js         # ← Edit your content here (experience, projects, skills, etc.)
├── main.js         # Renders content from data.js into the DOM
├── netlify.toml    # Netlify config (auto-deploy from GitHub)
├── vercel.json     # Vercel config (auto-deploy from GitHub)
└── README.md
```

## Quick Start (local preview)

No build step required. Just open `index.html` in a browser, or run a local server:

```bash
# Option 1 — Python (most machines have this)
python3 -m http.server 3000
# then open http://localhost:3000

# Option 2 — Node (if installed)
npx serve .
# then open http://localhost:3000
```

## Updating Your Content

**All content lives in `data.js`** — you never need to touch `index.html` or `main.js` for content changes.

| What to update        | Where in data.js     |
|-----------------------|----------------------|
| Skills ticker         | `TICKER_ITEMS`       |
| Work experience       | `EXPERIENCE`         |
| Projects              | `PROJECTS`           |
| Skill groups          | `SKILLS`             |
| Education             | `EDUCATION`          |
| Currently developing  | `DEVELOPING`         |

### Adding a new project

In `data.js`, add an object to the `PROJECTS` array:

```js
{
  num: '04',
  title: 'My New Project',
  desc: 'Description of what it does.',
  tags: ['Python', 'FastAPI', 'Docker'],
  link: 'https://github.com/Khetha0121/my-project',  // optional
  linkLabel: 'View on GitHub',                         // optional
},
```

---

## Deploying Live

### Option A — Netlify (recommended, free)

1. Push this folder to a GitHub repo
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Select your repo — Netlify auto-detects no build step needed
4. Click **Deploy** — live in ~30 seconds
5. Get a free `.netlify.app` URL, or connect your own domain

The included `netlify.toml` handles config automatically.

### Option B — Vercel (free)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. Framework: **Other** (no framework)
4. Build command: *(leave empty)*
5. Output directory: `.` (root)
6. Click **Deploy**

The included `vercel.json` handles config automatically.

### Option C — GitHub Pages (free)

1. Push to a GitHub repo named `your-username.github.io`
   — OR push to any repo and enable Pages under **Settings → Pages → Deploy from branch → main**
2. Your site will be live at `https://your-username.github.io`

> **Custom domain:** All three platforms let you connect a custom domain (e.g. `khethokuhle.dev`) for free in their settings.

---

## Customisation Tips

- **Colors:** Change the CSS variables at the top of `style.css` under `:root`
- **Fonts:** Swap the Google Fonts import in `index.html` and update `--ff-display` / `--ff-body` in `:root`
- **Add a profile photo:** Add an `<img>` tag in the hero section of `index.html`
- **Add a CV download button:** Drop your PDF in the folder, then update the hero CTA in `index.html`:
  ```html
  <a href="KK_CV.pdf" class="btn-outline" download>Download CV</a>
  ```
