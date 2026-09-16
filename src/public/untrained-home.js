class UntrainedHome extends HTMLElement {
  connectedCallback() {
    if (this.dataset.rendered === 'true') return;
    this.dataset.rendered = 'true';

    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host{display:block;width:100%;font-family:Aptos,"Segoe UI",Arial,sans-serif;color:#101010;background:#fff}
        *{box-sizing:border-box} a{color:inherit}.shell{width:min(1180px,calc(100% - 40px));margin:0 auto}
        .eyebrow{margin:0 0 14px;color:#d71920;font-size:.75rem;font-weight:850;letter-spacing:.14em;text-transform:uppercase}
        .btnrow{display:flex;flex-wrap:wrap;gap:12px}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:13px 22px;border:2px solid #d71920;border-radius:10px;background:#d71920;color:#fff;text-decoration:none;font-weight:800}.btn.alt{background:#fff;color:#111;border-color:#111}
        .hero{padding:86px 0 78px;border-bottom:1px solid #e8e8e8}.hero-grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(300px,.65fr);gap:60px;align-items:center}.hero h1{margin:0 0 22px;max-width:820px;font-size:clamp(3rem,7vw,6rem);font-weight:850;line-height:.93;letter-spacing:-.06em}.hero h1 span{color:#d71920}.hero-copy{max-width:720px;margin:0 0 30px;color:#3b3b3b;font-size:clamp(1.08rem,2vw,1.3rem);line-height:1.55}.side{padding:28px;border:1px solid #ddd;border-radius:22px;background:#f7f7f7;box-shadow:0 20px 48px rgba(0,0,0,.09)}.side h2{margin:0 0 10px;font-size:1.7rem;line-height:1.1}.side p{color:#666;line-height:1.55}.quick{border-top:1px solid #ddd}.quick a{display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid #ddd;text-decoration:none;font-weight:800}.quick a span{color:#d71920}
        .two{padding:72px 0;background:#f6f6f6}.two h2,.services h2{margin:0 0 30px;font-size:clamp(2.3rem,5vw,4.5rem);line-height:1;letter-spacing:-.045em}.audience{display:grid;grid-template-columns:1fr 1fr;gap:18px}.card{display:flex;flex-direction:column;min-height:300px;padding:32px;border:1px solid #ddd;border-radius:20px;text-decoration:none;background:#fff}.card.dark{background:#111;color:#fff}.label{margin-bottom:auto;color:#d71920;font-size:.74rem;font-weight:850;letter-spacing:.13em;text-transform:uppercase}.card.dark .label{color:#ff4b52}.card h3{margin:42px 0 12px;font-size:clamp(1.6rem,3vw,2.5rem);line-height:1.05}.card p{margin:0 0 18px;color:#666;line-height:1.55}.card.dark p{color:rgba(255,255,255,.7)}.link{margin-top:auto;font-weight:800;color:#d71920}
        .services{padding:80px 0}.services-head{display:grid;grid-template-columns:1fr .75fr;gap:40px;align-items:end;margin-bottom:34px}.services-head p{margin:0;color:#666;line-height:1.55}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.svc{min-height:240px;padding:26px;border:1px solid #ddd;border-radius:18px;background:#fff;box-shadow:0 8px 24px rgba(0,0,0,.05)}.num{display:block;margin-bottom:34px;color:#d71920;font-size:.75rem;font-weight:850;letter-spacing:.12em}.svc h3{margin:0 0 10px;font-size:1.2rem}.svc p{margin:0;color:#666;line-height:1.55}
        .cta{padding:72px 0;background:#111;color:#fff}.cta-inner{display:grid;grid-template-columns:1.2fr .8fr;gap:40px;align-items:center}.cta h2{margin:0 0 14px;font-size:clamp(2.2rem,5vw,4.2rem);line-height:1}.cta p{margin:0;color:rgba(255,255,255,.72);font-size:1.08rem;line-height:1.55}.cta .btnrow{justify-content:flex-end}
        .foot{padding:28px 0;background:#0a0a0a;color:#aaa;border-top:1px solid #222}.foot-inner{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap}.foot a{color:#fff;text-decoration:none}
        @media(max-width:900px){.hero-grid,.services-head,.cta-inner{grid-template-columns:1fr}.grid{grid-template-columns:1fr 1fr}.cta .btnrow{justify-content:flex-start}}
        @media(max-width:620px){.shell{width:min(100% - 28px,1180px)}.hero{padding:54px 0}.hero-grid{gap:30px}.audience,.grid{grid-template-columns:1fr}.card{min-height:260px;padding:24px}.svc{min-height:auto}.btn{width:100%}}
      </style>

      <main>
        <section class="hero">
          <div class="shell hero-grid">
            <div>
              <p class="eyebrow">Business + Home Technology</p>
              <h1>Technology should make life <span>easier.</span></h1>
              <p class="hero-copy">Websites, IT support, automation, business systems, and practical home technology help—without bouncing between a different provider for every problem.</p>
              <div class="btnrow">
                <a class="btn" href="https://untrainedmomentum.com/business-services.html">Business Services →</a>
                <a class="btn alt" href="https://untrainedmomentum.com/local-tech-help.html">Home Tech Help</a>
              </div>
            </div>
            <aside class="side">
              <p class="eyebrow">Start Here</p>
              <h2>What do you need help with?</h2>
              <p>Pick the problem, not the technical category. We can figure out the rest.</p>
              <div class="quick">
                <a href="https://untrainedmomentum.com/managed-website-rental.html">Website help <span>→</span></a>
                <a href="https://untrainedmomentum.com/business-services.html">Business IT & systems <span>→</span></a>
                <a href="https://untrainedmomentum.com/workflow-automation-small-business.html">Workflow automation <span>→</span></a>
                <a href="https://untrainedmomentum.com/business-startup-support.html">Start a business <span>→</span></a>
                <a href="https://untrainedmomentum.com/local-tech-help.html">Home & smart tech <span>→</span></a>
              </div>
            </aside>
          </div>
        </section>

        <section class="two">
          <div class="shell">
            <p class="eyebrow">Two Ways We Help</p>
            <h2>For your business. For your home.</h2>
            <div class="audience">
              <a class="card dark" href="https://untrainedmomentum.com/business-services.html">
                <span class="label">For Businesses</span>
                <h3>One person who can see the whole system.</h3>
                <p>Websites, cloud tools, forms, customer workflows, onboarding, documentation, automation, and ongoing technology support.</p>
                <span class="link">Explore Business Services →</span>
              </a>
              <a class="card" href="https://untrainedmomentum.com/local-tech-help.html">
                <span class="label">For Homes</span>
                <h3>Practical technology help where you live.</h3>
                <p>Computers, printers, Wi-Fi, cameras, video doorbells, sensors, smart locks, streaming, and connected-home technology.</p>
                <span class="link">Explore Home Tech Help →</span>
              </a>
            </div>
          </div>
        </section>

        <section class="services">
          <div class="shell">
            <div class="services-head">
              <div><p class="eyebrow">What Untrained Momentum Does</p><h2>Support without the runaround.</h2></div>
              <p>Start with one problem or bring the messy pile. Services can stand alone or work together as your needs grow.</p>
            </div>
            <div class="grid">
              <article class="svc"><span class="num">01</span><h3>Business Technology</h3><p>Practical support for the systems, devices, cloud tools, and everyday technology your business depends on.</p></article>
              <article class="svc"><span class="num">02</span><h3>Websites</h3><p>Sites that look professional, answer customer questions, and make the next step obvious.</p></article>
              <article class="svc"><span class="num">03</span><h3>Workflow Automation</h3><p>Connect the tools you already use and cut down repetitive administrative work.</p></article>
              <article class="svc"><span class="num">04</span><h3>Startup Assistance</h3><p>Domains, email, forms, payments, booking, websites, and the systems needed to actually operate.</p></article>
              <article class="svc"><span class="num">05</span><h3>AI That Saves Time</h3><p>Useful AI for drafts, follow-ups, summaries, repetitive tasks, and real workflow improvements.</p></article>
              <article class="svc"><span class="num">06</span><h3>Home Tech Help</h3><p>Remote and on-site help for the technology that keeps your home connected and easier to manage.</p></article>
            </div>
          </div>
        </section>

        <section class="cta">
          <div class="shell cta-inner">
            <div><p class="eyebrow">Need Something Fixed?</p><h2>Start with the problem.</h2><p>You do not need to know what software, service, or technical category it belongs in before reaching out.</p></div>
            <div class="btnrow"><a class="btn" href="https://untrainedmomentum.com/book.html">Book a Call →</a><a class="btn alt" href="mailto:info@untrainedmomentum.com">Email Us</a></div>
          </div>
        </section>
      </main>

      <footer class="foot"><div class="shell foot-inner"><span>© Untrained Momentum, LLC</span><span><a href="https://untrainedmomentum.com">untrainedmomentum.com</a></span></div></footer>
    `;
  }
}

if (!customElements.get('untrained-home')) {
  customElements.define('untrained-home', UntrainedHome);
}
