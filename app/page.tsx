"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        nav.style.borderBottomColor = window.scrollY > 40 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav>
        <a href="/" className="nav-wordmark">
          <div className="nav-shield">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 6.5V11.5C4 16 7.6 20.1 12 21.5C16.4 20.1 20 16 20 11.5V6.5L12 2Z" stroke="#1aada7" strokeWidth="1.6" strokeLinejoin="round"/>
              <path d="M9 12L11 14.5L15.5 9.5" stroke="#E8922A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          Fresh Eye Foundation
        </a>
        <div className="nav-center">
          <a href="/#manifesto">Our Vision</a>
          <a href="/#model">How We Support</a>
          <a href="/#fields">Areas of Work</a>
          <a href="/#initiative">CatalystBox</a>
          <a href="/#joir">Next: Joir</a>
          <a href="/#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-right">
          <span className="nav-tag">Lucknow &middot; India</span>
          <a href="/#partner" className="nav-contact">Partner &rarr;</a>
        </div>
      </nav>

      {/* MASTHEAD */}
      <section id="masthead">
        <div className="masthead-texture"></div>
        <div className="masthead-teal-bar"></div>
        <div className="masthead-content">
          <div className="masthead-overline reveal">
            <div className="overline-rule"></div>
            <span className="overline-text">Fresh Eye Foundation &middot; Lucknow, India</span>
          </div>
          <h1 className="masthead-headline reveal d1">
            Supporting <em>products</em><br />
            and <span className="amber-word">services</span><br />
            that improve<br />
            <em>lives.</em>
          </h1>
          <div className="masthead-body-col reveal d2">
            <p className="masthead-mission">
              <strong>Fresh Eye Foundation is a non-profit that builds, backs and partners on products and services that improve people&apos;s lives.</strong>
              Education, health, skills, children and youth, human rights, the environment and more —
              wherever a good product or service can make a life better, we build it, back it, or help it reach the people who need it.
              Charitable in purpose. Practical in method. One test: <strong>does it improve lives?</strong>
              We began with <strong>education.</strong>
            </p>
            <div className="masthead-meta">
              <div>
                <div className="meta-label">Our Scope</div>
                <div className="meta-value">Education, health, skills &amp; more</div>
              </div>
              <div>
                <div className="meta-label">First Initiative</div>
                <div className="meta-value">CatalystBox &middot; Education</div>
              </div>
              <div>
                <div className="meta-label">How We Help</div>
                <div className="meta-value">Build &middot; Back &middot; Partner &middot; Scale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto">
        <div className="manifesto-layout">
          <div className="reveal">
            <span className="aside-number">Why</span>
            <div className="aside-label">Our founding<br />conviction</div>
          </div>
          <div className="manifesto-body">
            <h2 className="reveal d1">Life is not divided into sectors.<br />Neither should our support be.</h2>
            <p className="reveal d2">
              A student&apos;s learning depends on her health. Her family&apos;s health depends on their livelihood.
              Their livelihood depends on access to money, markets and technology. Every one of these runs on
              <strong> products and services</strong> — and far too many of them are missing, broken, unaffordable or built
              without listening to the people who use them.
            </p>
            <div className="manifesto-pull reveal d3">
              <p>&quot;If it touches a human life, it deserves a product or service that is built well, delivered fairly and improved by the people it serves.&quot;</p>
            </div>
            <p className="reveal d3">
              Fresh Eye Foundation was founded on a single conviction: <strong>the best way to improve lives at scale is to
              make good products and services easier to create, easier to trust and easier to reach.</strong>
              That is why we work across education, health, skills, children and youth, rights, the environment and more. We look at life as a whole —
              and ask where a fresh eye, a working product and a committed team can change what people experience every day.
            </p>
            <p className="reveal d4">
              We build our own initiatives where we see a gap no one is filling. We support other people&apos;s products and services
              where they are doing the work already. And wherever we operate, we hold ourselves to the same standard:
              <strong> useful, honest, respectful of people, and built to last.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* MODEL */}
      <section id="model">
        <div className="model-header reveal">
          <span className="section-kicker">How We Support</span>
          <h2 className="section-h2">Five ways we put a product or service into the world.</h2>
        </div>
        <div className="model-steps">
          <div className="model-step reveal">
            <div className="step-seq">Way 01</div>
            <div className="step-icon-line"></div>
            <div className="step-title">Spot the need</div>
            <div className="step-body">We start with real life — what people struggle to find, afford, trust or use — and look for the products and services that are missing or failing them.</div>
          </div>
          <div className="model-step reveal d1">
            <div className="step-seq">Way 02</div>
            <div className="step-icon-line"></div>
            <div className="step-title">Build &amp; support</div>
            <div className="step-body">Where impact is needed, we step in. CatalystBox, the education feedback platform supported by the Foundation, is our first initiative.</div>
          </div>
          <div className="model-step reveal d2">
            <div className="step-seq">Way 03</div>
            <div className="step-icon-line"></div>
            <div className="step-title">Back what already works</div>
            <div className="step-body">Founders, teams and institutions already building products and services that improve lives can partner with us for guidance, pilots, introductions and shared capability.</div>
          </div>
          <div className="model-step reveal d3">
            <div className="step-seq">Way 04</div>
            <div className="step-icon-line"></div>
            <div className="step-title">Share the foundations</div>
            <div className="step-body">Technology, AI, data protection, compliance and design practice — the hard, expensive parts — made reusable across everything we support.</div>
          </div>
          <div className="model-step reveal d4">
            <div className="step-seq">Way 05</div>
            <div className="step-icon-line"></div>
            <div className="step-title">Help it reach people</div>
            <div className="step-body">A product only matters when it is used. We connect good products and services with the institutions, funders and communities that can carry them to scale.</div>
          </div>
        </div>
      </section>

      {/* AREAS OF LIFE */}
      <section id="fields">
        <div className="fields-header">
          <div>
            <span className="section-kicker reveal">Areas of Work</span>
            <h2 className="section-h2 reveal d1">We started with education.<br />We do not stop there.</h2>
          </div>
          <p className="fields-header-right reveal d2">
            These are the parts of life where we look for products and services worth building or backing.
            They follow the sectors our charter commits us to. Anything outside them, we do not take on.
          </p>
        </div>

        <div className="fields-list reveal">
          <div className="field-row active">
            <div className="field-index">01</div>
            <div className="field-main">
              <div className="field-domain">Education &amp; Literacy</div>
              <div className="field-name">Schools, colleges, skills<br />and lifelong learning</div>
              <div className="field-desc">
                Where we began. CatalystBox collects anonymous feedback from students, teachers and parents and
                turns it into the CatalystBox Benchmark Index (CBI) — a school quality score for education boards and
                policymakers implementing NEP 2020. Once proven in schools, the same approach extends to India&apos;s
                <strong style={{color: "rgba(255,255,255,0.85)"}}> 42,000+ colleges and universities.</strong>
              </div>
              <a href="/#initiative" className="field-instrument">
                Initiative: CatalystBox
                <svg viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div className="field-status">
              <span className="status-pill status-active">
                <span className="status-dot"></span> Active
              </span>
            </div>
          </div>

          <div className="field-row">
            <div className="field-index">02</div>
            <div className="field-main">
              <div className="field-domain">Health &amp; Family Welfare</div>
              <div className="field-name">Care, prevention and<br />family wellbeing</div>
              <div className="field-desc">
                Products and services that make care easier to find, afford and trust — from community health delivery to everyday wellbeing and family welfare.
                Next up: <strong style={{color: "var(--ink)"}}>Joir</strong>, a relationship and marriage app supported by the Foundation.
              </div>
              <a href="/#joir" className="field-instrument" style={{color: "var(--teal)"}}>
                Next project: Joir
                <svg viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div className="field-status">
              <span className="status-pill status-building">Next &middot; Joir</span>
            </div>
          </div>

          <div className="field-row">
            <div className="field-index">03</div>
            <div className="field-main">
              <div className="field-domain">Skill Development &amp; Livelihood</div>
              <div className="field-name">Skills, jobs and<br />fair opportunity</div>
              <div className="field-desc">
                Services that help people learn employable skills, find work and earn with dignity — including young people and workers with few formal channels.
              </div>
            </div>
            <div className="field-status">
              <span className="status-pill status-next">Open</span>
            </div>
          </div>

          <div className="field-row">
            <div className="field-index">04</div>
            <div className="field-main">
              <div className="field-domain">Children, Youth, Women &amp; Empowerment</div>
              <div className="field-name">Safe, supported growth<br />for every young person and woman</div>
              <div className="field-desc">
                Products and services that help children and youth grow up safe and capable, and that support women&apos;s development and empowerment.
              </div>
            </div>
            <div className="field-status">
              <span className="status-pill status-next">Open</span>
            </div>
          </div>

          <div className="field-row">
            <div className="field-index">05</div>
            <div className="field-main">
              <div className="field-domain">Human Rights &amp; Civic Life</div>
              <div className="field-name">Dignity, access and<br />a voice for citizens</div>
              <div className="field-desc">
                Tools that help people understand and claim their rights and make public services more responsive and accountable to those they serve.
              </div>
            </div>
            <div className="field-status">
              <span className="status-pill status-next">Open</span>
            </div>
          </div>

          <div className="field-row">
            <div className="field-index">06</div>
            <div className="field-main">
              <div className="field-domain">Environment, Agriculture &amp; Animal Welfare</div>
              <div className="field-name">Land, water, food<br />and the living world</div>
              <div className="field-desc">
                Products and services that help communities farm, live and consume sustainably, protect forests and the environment, and care for animals.
              </div>
            </div>
            <div className="field-status">
              <span className="status-pill status-next">Open</span>
            </div>
          </div>

          <div className="field-row">
            <div className="field-index">07</div>
            <div className="field-main">
              <div className="field-domain">Art &amp; Culture</div>
              <div className="field-name">Heritage, creativity<br />and expression</div>
              <div className="field-desc">
                Services that help preserve, teach and share India&apos;s arts and culture, and open creative livelihoods to more people.
              </div>
            </div>
            <div className="field-status">
              <span className="status-pill status-next">Open</span>
            </div>
          </div>

          <div className="field-row">
            <div className="field-index">08</div>
            <div className="field-main">
              <div className="field-domain">Disaster Management</div>
              <div className="field-name">Preparedness, relief<br />and recovery</div>
              <div className="field-desc">
                Products and services that help communities prepare for, respond to and recover from disasters.
              </div>
            </div>
            <div className="field-status">
              <span className="status-pill status-next">Open</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATALYSTBOX INITIATIVE */}
      <section id="initiative">
        <div className="initiative-grid">
          <div>
            <div className="initiative-label-row reveal">
              <span className="initiative-num-badge">Initiative 01</span>
              <span className="initiative-type">Education</span>
            </div>
            <h2 className="initiative-h2 reveal d1">
              CatalystBox — the nation&apos;s first <em>education feedback infrastructure</em>
            </h2>
            <p className="initiative-body reveal d2">
              Fresh Eye Foundation supports <strong>CatalystBox</strong> — a
              <strong> national education intelligence platform</strong> collecting anonymous QR-based
              feedback from students, teachers, and parents, processed through an AI analytics engine
              to generate the CatalystBox Benchmark Index.
            </p>
            <p className="initiative-body reveal d2">
              The CBI is a composite school quality score designed to sit alongside UDISE+ and ASER data
              in board-level policy conversations. It operationalises NEP 2020&apos;s mandates on holistic
              education, student wellbeing, and data-driven governance — dimensions that exam scores
              alone cannot capture.
            </p>
            <p className="initiative-body reveal d3">
              <strong>28,000+ CBSE and CISCE schools</strong> are in the directory. Pilot schools are
              being activated. Board-level dashboards are live. It is proof of how we work:
              pick a part of life, build the thing, and make it useful.
            </p>
            <a href="https://catalystbox.in" target="_blank" rel="noreferrer" className="initiative-cta reveal d3">
              Explore CatalystBox
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          <div className="initiative-panel reveal d2">
            <div className="panel-header">
              <div className="panel-logo">Catalyst<span>Box</span></div>
              <div className="panel-tag">Live &middot; India</div>
            </div>
            <div className="panel-body">
              <div className="panel-metric-grid">
                <div className="panel-metric">
                  <div className="pm-val">28<span>K+</span></div>
                  <div className="pm-label">Schools in directory</div>
                </div>
                <div className="panel-metric">
                  <div className="pm-val">250<span>M</span></div>
                  <div className="pm-label">Target student reach</div>
                </div>
                <div className="panel-metric">
                  <div className="pm-val">3</div>
                  <div className="pm-label">Respondent types</div>
                </div>
                <div className="panel-metric">
                  <div className="pm-val">5</div>
                  <div className="pm-label">Index dimensions</div>
                </div>
              </div>
              <div>
                <div className="pi-title">CatalystBox Benchmark Index — Dimension Weights</div>
                <div className="pi-row">
                  <div className="pi-label">Student Wellbeing (SEI)</div>
                  <div className="pi-track"><div className="pi-fill" style={{width: "45%"}}></div></div>
                  <div className="pi-pct">45%</div>
                </div>
                <div className="pi-row">
                  <div className="pi-label">Teaching Effectiveness (TEI)</div>
                  <div className="pi-track"><div className="pi-fill" style={{width: "30%"}}></div></div>
                  <div className="pi-pct">30%</div>
                </div>
                <div className="pi-row">
                  <div className="pi-label">Parent Trust Index (PTI)</div>
                  <div className="pi-track"><div className="pi-fill" style={{width: "25%", background: "var(--amber)"}}></div></div>
                  <div className="pi-pct" style={{color: "var(--amber)"}}>25%</div>
                </div>
                <div className="pi-row">
                  <div className="pi-label">Learning Environment</div>
                  <div className="pi-track"><div className="pi-fill" style={{width: "20%", background: "#7ec8c5"}}></div></div>
                  <div className="pi-pct" style={{color: "#7ec8c5"}}>20%</div>
                </div>
                <div className="pi-row">
                  <div className="pi-label">Future Readiness</div>
                  <div className="pi-track"><div className="pi-fill" style={{width: "20%", background: "#c9a04a"}}></div></div>
                  <div className="pi-pct" style={{color: "#c9a04a"}}>20%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT: JOIR */}
      <section id="joir">
        <div className="initiative-grid">
          <div>
            <div className="initiative-label-row reveal">
              <span className="initiative-num-badge">Next project</span>
              <span className="initiative-type">Relationships &amp; Family Welfare</span>
            </div>
            <h2 className="initiative-h2 reveal d1">
              Joir — finding the right partner by what you <em>bring</em> and what you <em>need</em>
            </h2>
            <p className="initiative-body reveal d2">
              Fresh Eye Foundation is supporting <strong>Joir</strong>, a dating and marriage app for people who are
              looking for a life partner. Instead of swiping on photos, each person says two honest things:
              what they bring to a relationship, and what they need from a partner.
            </p>
            <p className="initiative-body reveal d2">
              Joir matches on those answers, so people meet others whose strengths and needs genuinely fit —
              a calmer, more intentional route to a lasting relationship. Its promise is simple:
              <strong> &quot;You just need the One!&quot;</strong>
            </p>
            <p className="initiative-body reveal d3">
              Strong families begin with relationships built on honesty and fit. We support Joir because most
              apps in this space reward attention, not compatibility. Joir is being designed around the
              Foundation&apos;s privacy standard — collect only what the product needs, with the DPDP Act 2023 as the floor.
            </p>
            <p className="initiative-body reveal d3">
              <strong>Joir is in early design.</strong> We will announce what is live when it is live, and not before.
            </p>
            <a href="mailto:support@fresheyefoundation.com?subject=Joir" className="initiative-cta reveal d3">
              Talk to us about Joir
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          <div className="initiative-panel reveal d2">
            <div className="panel-header">
              <div className="panel-logo">Jo<span>ir</span></div>
              <div className="panel-tag">In design &middot; India</div>
            </div>
            <div className="panel-body">
              <div className="panel-metric-grid">
                <div className="panel-metric">
                  <div className="pi-title" style={{marginBottom: "0.5rem"}}>What you bring</div>
                  <div className="pm-label" style={{fontSize: "0.85rem", lineHeight: 1.6}}>Your values, strengths and way of life — stated up front.</div>
                </div>
                <div className="panel-metric">
                  <div className="pi-title" style={{marginBottom: "0.5rem"}}>What you need</div>
                  <div className="pm-label" style={{fontSize: "0.85rem", lineHeight: 1.6}}>What matters in a partner — stated just as plainly.</div>
                </div>
              </div>
              <div>
                <div className="pi-title">How Joir works</div>
                <div className="pi-row">
                  <div className="pi-pct" style={{textAlign: "left"}}>01</div>
                  <div className="pi-label" style={{minWidth: 0}}>Say what you bring and what you need</div>
                </div>
                <div className="pi-row">
                  <div className="pi-pct" style={{textAlign: "left", color: "var(--amber)"}}>02</div>
                  <div className="pi-label" style={{minWidth: 0}}>Get matches ranked by genuine fit</div>
                </div>
                <div className="pi-row">
                  <div className="pi-pct" style={{textAlign: "left", color: "#7ec8c5"}}>03</div>
                  <div className="pi-label" style={{minWidth: 0}}>Take it forward, at your own pace</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-masthead">
          <div>
            <span className="about-kicker reveal">About the Foundation</span>
            <h1 className="about-h1 reveal d1">A fresh eye on what makes <em>lives</em> better</h1>
          </div>
          <div>
            <p className="about-intro-lead reveal d2">
              We are here to support the products and services that improve people&apos;s lives —
              across the sectors our charter commits us to, whoever builds them.
            </p>
            <p className="about-intro reveal d3">
              Fresh Eye Foundation is a non-profit for building and backing products and services across education, health, skills and the other sectors in our charter. We look at where people are underserved, where good work is already happening,
              and where a committed team, the right technology and a fresh way of seeing can make the difference.
              Then we build it, back it, or help it reach the people who need it.
              <strong> Wide in scope. Disciplined in standards.</strong>
            </p>
          </div>
        </div>

        <div className="founding-facts">
          <div className="reveal">
            <div className="about-aside-label">Organisation details</div>
          </div>
          <div className="facts-grid reveal d1">
            <div className="fact-cell">
              <div className="fc-key">Legal structure</div>
              <div className="fc-val">Section 8 Company (non-profit) &middot; CIN U88900UP2025NPL234296</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Headquartered</div>
              <div className="fc-val">Uttar Pradesh, India</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Organisation type</div>
              <div className="fc-val">Non-profit for products &amp; services that improve lives</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Scope</div>
              <div className="fc-val">Education, health, skills, environment &amp; more &middot; Education first</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Supported initiative</div>
              <div className="fc-val">Supports CatalystBox &mdash; catalystbox.in</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Policy alignment</div>
              <div className="fc-val">NEP 2020 &middot; SDGs &middot; MCA Schedule VII</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Privacy standard</div>
              <div className="fc-val">DPDP Act 2023 &middot; Privacy by design</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Governance</div>
              <div className="fc-val">Independent Advisory Board &middot; Educators, Psychologists, Policy Experts</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Founder</div>
              <div className="fc-val">Yatesh Srivastava</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Registrations</div>
              <div className="fc-val">12A &amp; 80G Registered</div>
            </div>
          </div>
        </div>

        <div className="about-origin">
          <div className="reveal">
            <div className="about-aside-label">The origin</div>
            <p className="about-aside-quote">&quot;The name is the idea. A fresh eye sees what familiarity has made invisible.&quot;</p>
          </div>
          <div className="about-body">
            <h3 className="reveal">Why this name</h3>
            <p className="reveal d1">
              Familiarity dulls perception. Products stay unchanged because &quot;that&apos;s how it has always been done.&quot;
              Services stay out of reach because no one asked who was left out. Whole parts of life go underserved
              because they sit between sectors, and nobody&apos;s job covers them.
            </p>
            <p className="reveal d1">
              <strong>A fresh eye is what changes that.</strong> Not a report. Not a ranking. A willingness to look at
              any part of life — learning, health, skills, the environment, community — and ask plainly:
              what product or service would actually make this better, and who is best placed to build it?
            </p>
            <div className="about-pull reveal d2">
              <p>The biggest opportunities to improve lives are rarely inside one sector. They live between them. Fresh Eye Foundation is built to work there.</p>
            </div>
            <h3 className="reveal d2">The founding observation</h3>
            <p className="reveal d2">
              We began in education and learned something that applies everywhere: the people who use a product
              or service know more about what is broken than the people who run it — and <strong>the best products
              are built by listening to them.</strong> That lesson is not specific to schools. It holds for a clinic,
              a marketplace, a community service, a financial tool.
            </p>
            <p className="reveal d3">
              So we built a foundation, not a single product. One that can start, support and scale products
              and services wherever people need them most — with the same care for people and the same honesty about results.
              <strong> That is what Fresh Eye Foundation is for.</strong>
            </p>
          </div>
        </div>

        <div className="values-section">
          <div className="values-header">
            <div>
              <span className="about-kicker reveal">Our Values</span>
              <h2 className="section-h2 reveal d1" style={{maxWidth: "240px"}}>What we stand for, without compromise</h2>
            </div>
            <p className="values-intro reveal d2">
              Because our scope is wide, our standards have to be firm. These are operating rules, not slogans.
              Every product we build and every service we support passes through them.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card reveal">
              <div className="value-num">Value 01</div>
              <h4>People come first</h4>
              <p>Every product and service we touch must make life better for the people who use it. If it does not serve them — their dignity, safety, access and trust — we do not build it and we do not back it.</p>
            </div>
            <div className="value-card reveal d1">
              <div className="value-num">Value 02</div>
              <h4>Privacy by design</h4>
              <p>We collect only what a product needs. Where anonymity is the promise — as in CatalystBox — it is a permanent design choice, not a current limitation. The DPDP Act 2023 is the legal floor; our standard sits higher, especially wherever children are involved.</p>
            </div>
            <div className="value-card reveal d2">
              <div className="value-num">Value 03</div>
              <h4>Honest zeros, always</h4>
              <p>We never inflate numbers, overstate reach or claim capabilities we have not built. When we have ten pilot schools, we say ten. Trust from institutions, partners and funders can only rest on radical honesty about what we have and have not achieved.</p>
            </div>
            <div className="value-card reveal d3">
              <div className="value-num">Value 04</div>
              <h4>Charity first</h4>
              <p>Everything we build or back must serve our charitable objects and the public good. Surplus is reinvested in the mission, never paid out. Each initiative must be useful, lawful, safe and sustainable — and we say no to what does not meet that bar, however attractive.</p>
            </div>
            <div className="value-card reveal d1">
              <div className="value-num">Value 05</div>
              <h4>Built to last</h4>
              <p>We build for adoption and longevity, not for headlines. The best outcome is a product or service so useful that it becomes part of how people and institutions simply get things done.</p>
            </div>
            <div className="value-card reveal d2">
              <div className="value-num">Value 06</div>
              <h4>Many fronts, in parallel</h4>
              <p>Life&apos;s problems do not queue. We prove one initiative while scoping the next, building while planning, learning while operating — at the pace a country of 1.4 billion people needs.</p>
            </div>
          </div>
        </div>

        <div className="education-path">
          <div className="path-header">
            <div>
              <span className="about-kicker reveal">Roadmap</span>
              <h2 className="section-h2 reveal d1" style={{maxWidth: "260px"}}>Education first. Then the rest of our charter.</h2>
            </div>
            <p className="path-body reveal d2">
              We chose education as our starting point because the need is clear, the scale is vast and the lesson
              carries over. Once the model is proven, we take the same discipline — listen, build, measure, scale —
              into the other areas of work in our charter where products and services are most needed.
            </p>
          </div>
          <div className="path-track">
            <div className="path-card active-path reveal">
              <div className="path-phase">Phase I — Active</div>
              <div className="path-title">Education: CatalystBox</div>
              <div className="path-desc">
                CatalystBox builds the CBI — CatalystBox Benchmark Index — across five dimensions of school
                quality: student wellbeing, teaching effectiveness, parent engagement, learning environment,
                and future readiness. Anonymous QR-based feedback from students, teachers, and parents.
                Board-level and school-level dashboards. 28,000+ CBSE and CISCE schools in directory.
                Pilot schools being activated now. Colleges and universities follow once schools are proven.
              </div>
              <div className="path-stat">
                <div className="path-stat-val">1.5<span>M</span></div>
                <div className="path-stat-label">Target schools across India</div>
              </div>
            </div>
            <div className="path-card reveal d1">
              <div className="path-phase">Phase II — Next</div>
              <div className="path-title">Next: Joir, then the rest of our charter</div>
              <div className="path-desc">
                Next up is Joir, a relationship and marriage app now in design. After it:
                health, skills and livelihood, children, youth and women, human rights and civic life,
                environment and agriculture, art and culture, disaster management. For each, we decide case by case whether to build our own initiative,
                support an existing one, or partner with the people already doing the work. Nothing is announced
                as live until it is.
              </div>
              <div className="path-stat">
                <div className="path-stat-val">7</div>
                <div className="path-stat-label">Further areas of work in scope</div>
              </div>
            </div>
          </div>
        </div>

        <div className="not-section">
          <div className="reveal">
            <div className="about-aside-label">What we are<br />and are not</div>
          </div>
          <div>
            <div className="not-grid">
              <div className="not-card reveal">
                <div className="not-card-head"><span className="not-x">✕</span> Not a single-product company</div>
                <p>We are not defined by one product, one sector or one technology. CatalystBox is our first initiative, not our limit.</p>
              </div>
              <div className="not-card is-yes reveal d1">
                <div className="not-card-head"><span className="not-check">✓</span> A non-profit for products &amp; services that improve lives</div>
                <p>We build, back and partner on products and services across the sectors in our charter — from learning to livelihood to wellbeing — guided by one test: does it improve lives?</p>
              </div>
              <div className="not-card reveal d1">
                <div className="not-card-head"><span className="not-x">✕</span> Not a think tank or consultancy</div>
                <p>We do not publish reports for their own sake or offer advisory retainers. We build the actual thing — working software, real services, live systems.</p>
              </div>
              <div className="not-card is-yes reveal d2">
                <div className="not-card-head"><span className="not-check">✓</span> A builder and a backer</div>
                <p>We create our own initiatives where the gap is clear, and we support other teams where good work is already underway — with technology, guidance and access.</p>
              </div>
              <div className="not-card reveal d2">
                <div className="not-card-head"><span className="not-x">✕</span> Not a data broker</div>
                <p>We will never sell individual-level data, respondent-identifiable records, or any dataset that could be used to profile, target, or penalise specific people. Our work is built on trust, not on selling raw data.</p>
              </div>
              <div className="not-card is-yes reveal d3">
                <div className="not-card-head"><span className="not-check">✓</span> Independent and accountable</div>
                <p>We choose what we build and back on merit, not on who pays. We report honestly on what works and what does not, and we answer to the people our products and services are meant to serve.</p>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* PARTNER */}
      <section id="partner">
        <div className="partner-layout">
          <div>
            <span className="section-kicker reveal">Get Involved</span>
            <h2 className="partner-h2 reveal d1">Building or backing something that improves lives? Let&apos;s talk.</h2>
            <p className="partner-body reveal d2">
              We work with people who share the conviction that the right product or service, built well,
              can change a life. If your idea or organisation works in education, health, skills, the environment
              or another area we support, we would like to hear from you.
            </p>
            <div className="partner-actions reveal d3">
              <a href="mailto:support@fresheyefoundation.com" className="partner-action">
                <div>
                  <div className="pa-title">Founders &amp; Product Teams</div>
                  <div className="pa-sub">Building a product or service that improves lives? Explore support and partnership.</div>
                </div>
                <span className="pa-arrow">&rarr;</span>
              </a>
              <a href="mailto:support@fresheyefoundation.com" className="partner-action">
                <div>
                  <div className="pa-title">CSR Foundations &amp; Funders</div>
                  <div className="pa-sub">Fund real products and services, not just projects. MCA Schedule VII aligned.</div>
                </div>
                <span className="pa-arrow">&rarr;</span>
              </a>
              <a href="mailto:support@fresheyefoundation.com" className="partner-action">
                <div>
                  <div className="pa-title">Institutions &amp; Government</div>
                  <div className="pa-sub">Education boards, health bodies, local government — pilot with us</div>
                </div>
                <span className="pa-arrow">&rarr;</span>
              </a>
              <a href="mailto:support@fresheyefoundation.com" className="partner-action">
                <div>
                  <div className="pa-title">Technology, AI &amp; Research Partners</div>
                  <div className="pa-sub">Responsible AI, scale architecture, research collaboration</div>
                </div>
                <span className="pa-arrow">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="reveal d2">
            <div className="reach-header">Where we are today</div>
            <div className="reach-grid">
              <div className="reach-row">
                <span className="reach-label">Areas of work in scope</span>
                <div className="reach-val">8</div>
              </div>
              <div className="reach-row">
                <span className="reach-label">Initiatives live (CatalystBox)</span>
                <div className="reach-val">1</div>
              </div>
              <div className="reach-row">
                <span className="reach-label">CBSE + CISCE schools in directory</span>
                <div className="reach-val">28<span>K+</span></div>
              </div>
              <div className="reach-row">
                <span className="reach-label">Target student reach (CatalystBox)</span>
                <div className="reach-val">250<span>M</span></div>
              </div>
              <div className="reach-row">
                <span className="reach-label">Other initiatives announced as live</span>
                <div className="reach-val" style={{color: "var(--ink-muted)"}}>Zero</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-row" style={{alignItems: "flex-start"}}>
          <div>
            <div className="footer-wordmark" style={{marginBottom: "1rem"}}><strong>Fresh Eye Foundation</strong> &nbsp;&middot;&nbsp; Supporting Products &amp; Services That Improve Lives</div>
            <div style={{fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.2rem"}}>For partnerships and general inquiries:</div>
            <a href="mailto:support@fresheyefoundation.com" style={{fontSize: "1.05rem", color: "var(--teal-light)", fontWeight: 600, textDecoration: "none", transition: "color 0.2s"}}>support@fresheyefoundation.com</a>
          </div>
          <nav className="footer-nav">
            <a href="/#manifesto">Vision</a>
            <a href="/#model">How We Support</a>
            <a href="/#fields">Areas of Work</a>
            <a href="https://catalystbox.in" target="_blank" rel="noreferrer">CatalystBox</a>
            <a href="/#about">About</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Fresh Eye Foundation &middot; NGO Registered &middot; Uttar Pradesh, India</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/governance">Data Governance</a>
            <a href="https://catalystbox.in" target="_blank" rel="noreferrer">catalystbox.in &rarr;</a>
          </div>
        </div>
      </footer>
    </>
  );
}
