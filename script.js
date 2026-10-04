* {
  box-sizing: border-box;
}

:root {
  --bg: #f5f3f5;
  --card: #ffffff;
  --card-soft: #f3edf8;
  --ink: #1f2430;
  --muted: #5f6573;
  --primary: #5d2d8d;
  --primary-dark: #3d1d59;
  --primary-soft: #efe4ff;
  --accent: #a66ce4;
  --line: #e5dfeb;
  --success: #1f8b5d;
  --shadow: 0 16px 40px rgba(34, 25, 43, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--ink);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.narrow {
  width: min(860px, calc(100% - 32px));
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(245, 243, 245, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(93, 45, 141, 0.08);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  box-shadow: var(--shadow);
}

.brand-text {
  font-size: 0.98rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 0.95rem;
}

.main-nav a {
  color: var(--muted);
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  color: var(--primary);
}

.nav-cta {
  margin-left: 6px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.5rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid transparent;
  cursor: pointer;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  box-shadow: 0 14px 32px rgba(93, 45, 141, 0.32);
}

.button-secondary {
  background: transparent;
  border-color: rgba(93, 45, 141, 0.2);
  color: var(--primary);
}

.hero {
  padding: 92px 0 52px;
  background:
    radial-gradient(circle at top left, rgba(166, 108, 228, 0.18), transparent 25%),
    linear-gradient(180deg, #f8f5fb 0%, #f5f3f5 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 52px;
}

.eyebrow,
.section-kicker {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 800;
  color: var(--primary);
  margin: 0 0 16px;
}

.hero-copy h1 {
  font-size: clamp(2.5rem, 5vw, 4.4rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
  margin: 0 0 18px;
}

.lead {
  font-size: 1.1rem;
  color: var(--muted);
  max-width: 620px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 30px 0 18px;
}

.mini-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  list-style: none;
  margin: 0;
  padding: 0;
  color: var(--muted);
  font-weight: 600;
}

.mini-list li::before {
  content: "•";
  color: var(--primary);
  margin-right: 8px;
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.panel-card {
  background: linear-gradient(180deg, #1f1a2e 0%, #31254d 100%);
  color: white;
  border-radius: 28px;
  box-shadow: var(--shadow);
  padding: 32px 28px;
  width: min(100%, 450px);
}

.card-label {
  margin: 0 0 12px;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #d9c4ff;
}

.panel-card h2 {
  margin: 0 0 26px;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  line-height: 1.2;
}

.stat-grid {
  display: grid;
  gap: 20px;
}

.stat-grid div {
  display: grid;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.stat-grid strong {
  font-size: 2rem;
  line-height: 1;
}

.stat-grid span {
  color: rgba(255, 255, 255, 0.75);
}

.section {
  padding: 96px 0;
}

.section-head {
  margin-bottom: 28px;
}

.section-head h2,
.narrow h2,
.split-layout h2,
.about-grid h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0 0 18px;
}

.intro,
.faq {
  text-align: center;
}

.intro p,
.faq p,
.about-grid p,
.split-layout p,
.narrow p {
  color: var(--muted);
  font-size: 1.06rem;
}

.two-column-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
}

.info-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 28px;
  box-shadow: var(--shadow);
}

.info-card.accent {
  background: linear-gradient(135deg, #f3edf8 0%, #efe4ff 100%);
  border-color: rgba(93, 45, 141, 0.15);
}

.info-card h3 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.5rem;
}

.info-card ul,
.person-card ul,
.site-footer ul,
.check-list {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
}

.info-card li,
.person-card li,
.site-footer li,
.check-list li {
  margin-bottom: 8px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.service-item {
  background: linear-gradient(180deg, #ffffff 0%, #f7f3fb 100%);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 24px 20px;
  min-height: 180px;
  box-shadow: 0 12px 28px rgba(34, 25, 43, 0.06);
}

.service-item span {
  display: inline-block;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 18px;
}

.service-item h3 {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.3;
}

.dark {
  background: #1b1525;
  color: white;
}

.dark .section-kicker,
.dark p,
.dark li {
  color: rgba(255, 255, 255, 0.8);
}

.about-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 30px;
  align-items: start;
}

.people-grid {
  display: grid;
  gap: 20px;
}

.person-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 22px;
}

.person-card h3 {
  font-size: 1.5rem;
  margin: 0;
}

.role {
  display: inline-block;
  font-weight: 700;
  margin: 8px 0 12px;
  color: #d9c4ff;
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  gap: 34px;
  align-items: start;
}

.quote-box {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px;
  box-shadow: var(--shadow);
}

.quote-box h3 {
  margin-top: 0;
  font-size: 1.75rem;
}

form {
  display: grid;
  gap: 16px;
  margin-top: 18px;
}

label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: var(--ink);
}

input {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--line);
  padding: 0.8rem 0.9rem;
  background: #fff;
}

input:focus {
  outline: 2px solid rgba(93, 45, 141, 0.18);
  border-color: rgba(93, 45, 141, 0.35);
}

.site-footer {
  background: #120d18;
  color: rgba(255, 255, 255, 0.82);
  padding: 72px 0 32px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.9fr;
  gap: 24px;
}

.site-footer h3,
.site-footer h4 {
  color: white;
  margin-top: 0;
}

.site-footer a {
  color: #d9c4ff;
}

.footer-bottom {
  margin-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 20px;
}

.nav-toggle {
  display: none;
  background: transparent;
  border: 0;
  padding: 0;
  width: 42px;
  height: 42px;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--ink);
  margin: 5px auto;
  border-radius: 999px;
}

@media (max-width: 920px) {
  .hero-grid,
  .about-grid,
  .split-layout,
  .footer-grid,
  .two-column-grid,
  .service-grid {
    grid-template-columns: 1fr;
  }

  .service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .nav-toggle {
    display: block;
  }

  .main-nav {
    position: absolute;
    top: 72px;
    right: 16px;
    left: 16px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background: white;
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 16px;
    box-shadow: var(--shadow);
  }

  .main-nav.is-open {
    display: flex;
  }

  .nav-cta {
    margin-left: 0;
  }
}

@media (max-width: 560px) {
  .hero {
    padding-top: 64px;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .button {
    width: 100%;
  }

  .hero-actions {
    display: grid;
  }
}
