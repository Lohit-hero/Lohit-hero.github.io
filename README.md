<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Lohitaksha Koppada — Portfolio</title>
  <meta name="description" content="Portfolio of Lohitaksha Koppada — quantum chemistry, machine learning with Python, leadership and scientific communication." />
  <meta name="theme-color" content="#0f172a" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg: #0b1020;
      --panel: #12182b;
      --text: #e5e7eb;
      --muted:#9aa4b2;
      --brand:#5b9cff;
      --brand-2:#22d3ee;
      --ring: rgba(91,156,255,.35);
      --card: #0f162f;
      --ok:#10b981;
      --warn:#f59e0b;
      --err:#ef4444;
      --shadow: 0 10px 30px rgba(0,0,0,.35);
    }
    @media (prefers-color-scheme: light){
      :root{--bg:#f8fafc;--panel:#ffffff;--card:#ffffff;--text:#111827;--muted:#4b5563;--shadow:0 10px 30px rgba(2,6,23,.08)}
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:linear-gradient(180deg,var(--bg),#060913 60%);color:var(--text);line-height:1.6}
    a{color:var(--brand);text-decoration:none}
    a:hover{text-decoration:underline}
    .container{max-width:1120px;margin:0 auto;padding:0 20px}
    header.site{
      position:sticky;top:0;z-index:50;background:linear-gradient(180deg,rgba(6,9,19,.9),rgba(6,9,19,.6));backdrop-filter:blur(6px);border-bottom:1px solid rgba(148,163,184,.12)
    }
    .nav{display:flex;align-items:center;justify-content:space-between;padding:14px 0}
    .brand{display:flex;gap:12px;align-items:center}
    .logo{width:36px;height:36px;display:grid;place-items:center;border-radius:10px;background:radial-gradient(80% 80% at 30% 20%,var(--brand),var(--brand-2));box-shadow:0 6px 20px var(--ring);font-weight:800;color:#0b1020}
    .brand h1{font-size:18px;letter-spacing:.4px;margin:0;font-weight:700}
    .nav a.link{margin:0 12px;color:var(--text);opacity:.9}
    .nav a.link:hover{opacity:1}
    .nav .actions{display:flex;gap:10px;align-items:center}
    .btn{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(148,163,184,.25);background:linear-gradient(180deg,var(--panel),#0a1126);color:var(--text);padding:10px 14px;border-radius:12px;box-shadow:var(--shadow);transition:.25s ease;cursor:pointer}
    .btn:hover{transform:translateY(-1px);box-shadow:0 14px 30px rgba(0,0,0,.4)}
    .btn.primary{background:linear-gradient(180deg,var(--brand),#3b82f6);border-color:transparent;color:white}
    .btn.ghost{background:transparent}
    .hamburger{display:none}

    /* Hero */
    .hero{padding:64px 0 24px}
    .hero-inner{display:grid;grid-template-columns:1.2fr 1fr;gap:28px;align-items:center}
    .kicker{display:inline-block;padding:4px 10px;border-radius:999px;background:rgba(34,211,238,.1);border:1px solid rgba(34,211,238,.35);font-size:12px;color:#67e8f9}
    h2.title{font-size:44px;line-height:1.1;margin:14px 0 10px;font-weight:800}
    p.lead{font-size:18px;color:var(--muted);margin:0 0 18px}
    .hero-ctas{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px}
    .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px}
    .stat{padding:14px;border-radius:14px;background:var(--card);border:1px solid rgba(148,163,184,.15)}
    .stat h3{margin:0;font-size:22px}
    .stat p{margin:4px 0 0;color:var(--muted);font-size:13px}
    .portrait{aspect-ratio:1/1;border-radius:20px;background:linear-gradient(135deg,#0b1020 30%,#13203f);border:1px solid rgba(148,163,184,.15);box-shadow:var(--shadow);display:grid;place-items:center}

    /* Sections */
    section{scroll-margin-top:90px}
    .section{padding:28px 0 60px}
    .section h3{font-size:28px;margin:0 0 16px}
    .section .sub{color:var(--muted);margin-top:-8px}

    /* Skills */
    .chips{display:flex;flex-wrap:wrap;gap:10px}
    .chip{padding:8px 12px;border-radius:999px;background:rgba(91,156,255,.09);border:1px solid rgba(91,156,255,.35);font-size:13px}
    .skill-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:16px}
    .skill{background:var(--card);border:1px solid rgba(148,163,184,.15);border-radius:14px;padding:14px}
    .meter{height:8px;border-radius:999px;background:rgba(148,163,184,.25);overflow:hidden;margin-top:10px}
    .bar{height:100%;width:0;background:linear-gradient(90deg,var(--brand),#60a5fa);transition:width 1.2s cubic-bezier(.2,.7,.2,1)}

    /* Timeline */
    .timeline{position:relative;margin-left:4px}
    .timeline:before{content:"";position:absolute;left:10px;top:0;bottom:0;width:2px;background:rgba(148,163,184,.25)}
    .t-item{position:relative;margin-left:28px;padding:12px 12px 12px 28px;background:var(--card);border-radius:12px;border:1px solid rgba(148,163,184,.15);box-shadow:var(--shadow);margin-bottom:14px}
    .t-item:before{content:"";position:absolute;left:-6px;top:18px;width:12px;height:12px;border-radius:50%;background:var(--brand);box-shadow:0 0 0 4px rgba(91,156,255,.25)}
    .t-meta{display:flex;gap:10px;flex-wrap:wrap;color:var(--muted);font-size:13px}

    /* Cards */
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
    .card{background:var(--card);border:1px solid rgba(148,163,184,.15);border-radius:14px;padding:16px;box-shadow:var(--shadow)}
    .card h4{margin:0 0 8px}

    /* Footer */
    footer{border-top:1px solid rgba(148,163,184,.15);padding:30px 0 50px;color:var(--muted)}

    /* Utilities */
    .reveal{opacity:0;transform:translateY(10px);transition:opacity .6s ease, transform .6s ease}
    .reveal.visible{opacity:1;transform:none}

    /* Responsive */
    @media (max-width: 980px){
      .hero-inner{grid-template-columns:1fr}
      .grid{grid-template-columns:1fr 1fr}
      .skill-grid{grid-template-columns:1fr 1fr}
      .stats{grid-template-columns:1fr 1fr 1fr}
    }
    @media (max-width: 640px){
      .nav .links{display:none}
      .hamburger{display:block}
      h2.title{font-size:36px}
      .grid{grid-template-columns:1fr}
      .skill-grid{grid-template-columns:1fr}
      .stats{grid-template-columns:1fr 1fr}
    }

    /* Mobile menu */
    .mobile{position:fixed;inset:0;background:rgba(3,6,15,.85);backdrop-filter:blur(6px);display:none}
    .mobile.open{display:block}
    .sheet{position:absolute;right:10px;top:62px;left:10px;background:var(--panel);border:1px solid rgba(148,163,184,.2);border-radius:16px;padding:16px}
    .sheet a{display:block;padding:10px 8px;border-radius:10px;color:var(--text)}
    .sheet a:hover{background:rgba(148,163,184,.08)}
  </style>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lohitaksha Koppada",
    "jobTitle": "Researcher | Quantum Chemistry & ML",
    "email": "mailto:lohitaksha.koppada123@gmail.com",
    "url": "https://lohitakshakoppada.wixsite.com/lohitakshaden",
    "sameAs": [
      "https://www.linkedin.com/in/lohitaksha-0b174622a"
    ]
  }
  </script>
</head>
<body>
  <header class="site">
    <div class="container nav">
      <div class="brand">
        <div class="logo">LK</div>
        <h1>Lohitaksha Koppada</h1>
      </div>
      <nav class="links" aria-label="Primary">
        <a class="link" href="#about">About</a>
        <a class="link" href="#skills">Skills</a>
        <a class="link" href="#experience">Experience</a>
        <a class="link" href="#work">Projects</a>
        <a class="link" href="#achievements">Achievements</a>
        <a class="link" href="#education">Education</a>
        <a class="link" href="#contact">Contact</a>
      </nav>
      <div class="actions">
        <button class="btn ghost" id="modeToggle" title="Toggle dark/light">🌓</button>
        <a class="btn" href="/mnt/data/Lohitaksha's cv.pdf" download>⬇️ Resume</a>
        <button class="btn primary hamburger" id="menuBtn">Menu</button>
      </div>
    </div>
    <div class="mobile" id="mobile">
      <div class="sheet">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#work">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </header>

  <main>
    <!-- HERO -->
    <section class="hero container" id="top">
      <div class="hero-inner">
        <div>
          <span class="kicker">Quantum Chemistry • Machine Learning • Leadership</span>
          <h2 class="title">Resolute researcher blending <span style="background:linear-gradient(90deg,var(--brand),var(--brand-2));-webkit-background-clip:text;background-clip:text;color:transparent">physics insight</span> with <span style="background:linear-gradient(90deg,#a78bfa,#22d3ee);-webkit-background-clip:text;background-clip:text;color:transparent">data-driven methods</span>.</h2>
          <p class="lead">IMSc 1st rank holder (Years 4 & 5) at University of Hyderabad. Experienced in screened Coulomb potentials, confined hydrogen atoms, and information-theoretic measures. Proficient in Python (NumPy, Pandas, Matplotlib, scikit-learn) and scientific communication.</p>
          <div class="hero-ctas">
            <a class="btn primary" href="#work">See Projects</a>
            <a class="btn" href="mailto:lohitaksha.koppada123@gmail.com">Email me</a>
            <a class="btn ghost" href="https://www.linkedin.com/in/lohitaksha-0b174622a" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div class="stats">
            <div class="stat"><h3>8+ months</h3><p>Peer‑review leadership</p></div>
            <div class="stat"><h3>3</h3><p>Books authored (2025)</p></div>
            <div class="stat"><h3>1</h3><p>Elsevier paper (May 2024)</p></div>
          </div>
        </div>
        <div class="portrait reveal" aria-hidden="true">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abstract portrait">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#5b9cff"/>
                <stop offset="100%" stop-color="#22d3ee"/>
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="84" stroke="url(#g1)" stroke-width="3"/>
            <circle cx="100" cy="86" r="28" fill="url(#g1)" opacity=".3"/>
            <rect x="52" y="122" width="96" height="38" rx="19" fill="url(#g1)" opacity=".25"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="section" id="skills">
      <div class="container">
        <h3>Skills</h3>
        <p class="sub">Core toolkit across programming, analysis, and scientific communication.</p>
        <div class="chips">
          <span class="chip">Python</span>
          <span class="chip">NumPy</span>
          <span class="chip">Pandas</span>
          <span class="chip">Matplotlib</span>
          <span class="chip">scikit‑learn</span>
          <span class="chip">Regression • SVM • KNN</span>
          <span class="chip">K‑Means • DBSCAN</span>
          <span class="chip">Quantum Mechanics</span>
          <span class="chip">Computational Chemistry</span>
          <span class="chip">Leadership & Team Mgmt</span>
          <span class="chip">Scientific Writing</span>
          <span class="chip">Presentations</span>
        </div>
        <div class="skill-grid">
          <div class="skill reveal"><strong>Python & Data</strong><div class="meter"><div class="bar" data-pct="92"></div></div></div>
          <div class="skill reveal"><strong>Machine Learning</strong><div class="meter"><div class="bar" data-pct="88"></div></div></div>
          <div class="skill reveal"><strong>Quantum/Comp. Chem</strong><div class="meter"><div class="bar" data-pct="85"></div></div></div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="section" id="experience">
      <div class="container">
        <h3>Experience</h3>
        <div class="timeline">
          <article class="t-item reveal">
            <h4>Master’s Project (Phase I): Screened Coulomb Potentials & Confined H Atom</h4>
            <div class="t-meta"><span>Aug–Dec 2024 • 5 months</span><span>Guide: Prof. Kalidas Sen</span><span>School of Chemistry, UoH</span></div>
            <p>Surveyed Yukawa & Hulthén potentials, analyzed screening effects on energy spectrum and reactivity under confinement; theoretical & computational treatment of hydrogen‑like systems.</p>
          </article>
          <article class="t-item reveal">
            <h4>Master’s Project (Phase II): Plasma & Spatially Confined H Atom</h4>
            <div class="t-meta"><span>Dec 2024–Mar 2025 • 4 months</span><span>Guide: Prof. Kalidas Sen</span></div>
            <p>Computed energy levels under screened potentials [Hulthén/Yukawa/Hulthén(2l)/ECSCP]; evaluated Shannon entropy, disequilibrium, and statistical complexity; extensive visualization and data analysis in Python.</p>
          </article>
          <article class="t-item reveal">
            <h4>Collaborative Summer Project: Eicosanoids & Bio‑signalling</h4>
            <div class="t-meta"><span>Apr–Aug 2021 • 5 months</span><span>Guide: Prof. Reddanna Pallu</span><span>School of Life Sciences, UoH</span></div>
            <p>Investigated lipid mediator pathways regulating inflammation and neurodegeneration; integrated lipid biochemistry and neuroscience for therapeutic insights.</p>
          </article>
          <article class="t-item reveal">
            <h4>Review Article: Eicosanoid Signaling in Neuroinflammation (Alzheimer’s)</h4>
            <div class="t-meta"><span>Published May 2024 • European Journal of Pharmacology</span></div>
            <p>Led a team of four; coordinated cross‑disciplinary synthesis and authored manuscript. DOI: <a href="https://doi.org/10.1016/j.ejphar.2024.176694" target="_blank" rel="noreferrer">10.1016/j.ejphar.2024.176694</a>.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- PROJECTS / WORK -->
    <section class="section" id="work">
      <div class="container">
        <h3>Highlighted Projects</h3>
        <div class="grid">
          <div class="card reveal">
            <h4>Comparison Theorem & Information‑Theoretic Measures</h4>
            <p>Applied Shannon entropy + disequilibrium → statistical complexity to confined H atom under varying screening. Built Python pipelines for parameter sweeps and plots.</p>
            <p class="sub">Stack: Python, NumPy, Pandas, Matplotlib</p>
          </div>
          <div class="card reveal">
            <h4>Modified Langevin Equation for Electrophoretic Effects</h4>
            <p>Proposed mobility‑aware extension bridging deterministic & stochastic motion in electrokinetic environments (e.g., capillary electrophoresis).</p>
            <p class="sub">Focus: theory & modeling</p>
          </div>
          <div class="card reveal">
            <h4>Podcast: “Lohitaksha’s Den”</h4>
            <p>Interview series with global experts (leadership, sales, mindset); research‑driven questions and audience‑friendly synthesis.</p>
            <p class="sub"><a href="https://lohitakshakoppada.wixsite.com/lohitakshaden" target="_blank" rel="noreferrer">Visit portfolio</a></p>
          </div>
        </div>
      </div>
    </section>

    <!-- ACHIEVEMENTS -->
    <section class="section" id="achievements">
      <div class="container">
        <h3>Achievements & Certifications</h3>
        <div class="grid">
          <div class="card reveal">
            <h4>Lead Author — Elsevier (2024)</h4>
            <p>European Journal of Pharmacology publication on eicosanoid signaling in Alzheimer’s.</p>
          </div>
          <div class="card reveal">
            <h4>Books (2025)</h4>
            <ul>
              <li><em>Studies on Shell Confined Atoms</em> — LAMBERT (12 Jun 2025)</li>
              <li><em>Brainwaves of The Bold</em> — Amazon (19 May 2025)</li>
              <li><em>It’s Your Life: Make it Happen</em> — Amazon (9 Apr 2025)</li>
            </ul>
          </div>
          <div class="card reveal">
            <h4>Certification — Machine Learning with Python</h4>
            <p>IBM Developer Skills Network / Cognitive Class (Issued 6 May 2025). Supervised (LR, KNN, DT, SVM) & Unsupervised (K‑Means, Hierarchical, DBSCAN).</p>
          </div>
          <div class="card reveal">
            <h4>Academic Excellence</h4>
            <p>IMSc 1st rank holder (Years 4 & 5). 2nd overall among MSc + IMSc (Year 5).</p>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section class="section" id="education">
      <div class="container">
        <h3>Education</h3>
        <div class="grid">
          <div class="card reveal">
            <h4>Integrated Master’s — Chemical Sciences</h4>
            <p>University of Hyderabad, 2025</p>
            <ul>
              <li>Sem 10: 9.05</li>
              <li>Sem 9: 8.57</li>
              <li>Sem 8: 8.28</li>
              <li>Sem 7: 8.16</li>
              <li>Sem 1–6: 8.06 (Bachelor’s stage)</li>
            </ul>
          </div>
          <div class="card reveal">
            <h4>12th Grade</h4>
            <p>D.A.V. Public School, 2020 — 94.25%</p>
          </div>
          <div class="card reveal">
            <h4>10th Grade</h4>
            <p>Jindal School, 2018 — 90.2%</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section" id="contact">
      <div class="container">
        <h3>Contact</h3>
        <div class="grid">
          <div class="card reveal">
            <h4>Reach out</h4>
            <p>Email: <a href="mailto:lohitaksha.koppada123@gmail.com">lohitaksha.koppada123@gmail.com</a></p>
            <p>Alt Email: <a href="mailto:sitarama.lohitaksha@gmail.com">sitarama.lohitaksha@gmail.com</a></p>
            <p>Phone: <a href="tel:+919989927436">+91 99899 27436</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/lohitaksha-0b174622a" target="_blank" rel="noreferrer">/in/lohitaksha-0b174622a</a></p>
            <p>Website: <a href="https://lohitakshakoppada.wixsite.com/lohitakshaden" target="_blank" rel="noreferrer">lohitakshaden</a></p>
          </div>
          <div class="card reveal">
            <h4>Quick note</h4>
            <form onsubmit="event.preventDefault();alert('Thanks, I\'ll get back to you soon!');this.reset();">
              <label>Name<br><input required style="width:100%;padding:10px;border-radius:10px;border:1px solid rgba(148,163,184,.3);background:transparent;color:var(--text)"></label><br><br>
              <label>Email<br><input type="email" required style="width:100%;padding:10px;border-radius:10px;border:1px solid rgba(148,163,184,.3);background:transparent;color:var(--text)"></label><br><br>
              <label>Message<br><textarea required rows="4" style="width:100%;padding:10px;border-radius:10px;border:1px solid rgba(148,163,184,.3);background:transparent;color:var(--text)"></textarea></label><br><br>
              <button class="btn primary" type="submit">Send message</button>
            </form>
          </div>
          <div class="card reveal">
            <h4>Resume</h4>
            <p>Download the latest CV as PDF.</p>
            <a class="btn" href="/mnt/data/Lohitaksha's cv.pdf" download>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>© <span id="year"></span> Lohitaksha Koppada. Built with vanilla HTML/CSS/JS.</p>
    </div>
  </footer>

  <button id="toTop" class="btn" style="position:fixed;right:16px;bottom:16px;display:none">↑ Top</button>

  <script>
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Dark/Light mode
    const root = document.documentElement;
    const modeBtn = document.getElementById('modeToggle');
    const saved = localStorage.getItem('theme');
    if(saved==='light'){document.documentElement.style.setProperty('--bg','#f8fafc');}
    modeBtn.addEventListener('click',()=>{
      const currentBg = getComputedStyle(root).getPropertyValue('--bg').trim();
      const light = '#f8fafc';
      if(currentBg===light){
        // switch to dark
        root.style.removeProperty('--bg'); // allow dark defaults
        localStorage.removeItem('theme');
      }else{
        // switch to light explicitly
        root.style.setProperty('--bg', light);
        root.style.setProperty('--panel', '#ffffff');
        root.style.setProperty('--card', '#ffffff');
        root.style.setProperty('--text', '#111827');
        root.style.setProperty('--muted', '#4b5563');
        root.style.setProperty('--shadow', '0 10px 30px rgba(2,6,23,.08)');
        localStorage.setItem('theme','light');
      }
    });

    // Mobile menu
    const mobile = document.getElementById('mobile');
    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click',()=> mobile.classList.toggle('open'));
    mobile.addEventListener('click', (e)=>{ if(e.target.tagName==='A' || e.target===mobile) mobile.classList.remove('open'); });

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal, .t-item, .card, .skill');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
    }, {threshold: .12});
    revealEls.forEach(el=> io.observe(el));

    // Animate skill meters when visible
    const bars = document.querySelectorAll('.bar');
    const io2 = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ const pct=e.target.dataset.pct||70; e.target.style.width=pct+'%'; io2.unobserve(e.target);} });
    }, {threshold:.4});
    bars.forEach(b=> io2.observe(b));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const id=a.getAttribute('href');
        if(id.length>1){ e.preventDefault(); document.querySelector(id).scrollIntoView({behavior:'smooth'}); }
      })
    })

    // Back to top button
    const toTop = document.getElementById('toTop');
    window.addEventListener('scroll',()=>{
      toTop.style.display = window.scrollY>600 ? 'inline-flex' : 'none';
    });
    toTop.addEventListener('click',()=> window.scrollTo({top:0,behavior:'smooth'}));
  </script>
</body>
</html>
