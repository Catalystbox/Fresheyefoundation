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
          <a href="/#manifesto">Our Purpose</a>
          <a href="/#model">The Model</a>
          <a href="/#fields">Fields of Work</a>
          <a href="/#initiative">CatalystBox</a>
          <a href="/#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-right">
          <span className="nav-tag">India</span>
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
            <span className="overline-text">Fresh Eye Foundation &middot; India</span>
          </div>
          <h1 className="masthead-headline reveal d1">
            India&apos;s public systems<br />
            shape <em>billions</em> of lives.<br />
            Most of them operate<br />
            without <span className="amber-word">data.</span>
          </h1>
          <div className="masthead-body-col reveal d2">
            <p className="masthead-mission">
              <strong>Fresh Eye Foundation builds intelligence infrastructure for India&apos;s underserved public systems.</strong>
              We identify domains where the gap between lived experience and institutional knowledge is widest —
              and we build the data layer that closes it.
              Anonymous. AI-powered. Designed for board-level adoption.
              We began with <strong>education.</strong>
            </p>
            <div className="masthead-meta">
              <div>
                <div className="meta-label">First Domain</div>
                <div className="meta-value">Education Intelligence</div>
              </div>
              <div>
                <div className="meta-label">First Instrument</div>
                <div className="meta-value">CatalystBox</div>
              </div>
              <div>
                <div className="meta-label">Ambition</div>
                <div className="meta-value">Public digital infrastructure, domain by domain</div>
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
            <h2 className="reveal d1">Public systems run on trust.<br />Trust requires transparency.</h2>
            <p className="reveal d2">
              India&apos;s public systems — education, healthcare, civic governance — serve over a billion people.
              They are among the most consequential institutions on earth. And yet most of them operate with
              <strong>minimal structured feedback</strong>. Decisions are made on census data taken years apart,
              annual surveys with narrow samples, and institutional intuition handed down through generations.
            </p>
            <div className="manifesto-pull reveal d3">
              <p>&quot;The people inside a system always know more about what is broken than the people above it. The problem is they have no channel.&quot;</p>
            </div>
            <p className="reveal d3">
              Fresh Eye Foundation was built around a single conviction: <strong>the people inside public systems —
              students, teachers, nurses, frontline workers, citizens — are sitting on vast reservoirs of knowledge
              about what works and what doesn&apos;t.</strong> That knowledge is currently invisible to the institutions
              that could act on it. Our work is to make it visible — anonymously, safely, and in a form
              that institutions can actually use.
            </p>
            <p className="reveal d4">
              We are not an NGO that runs programmes. We are not a think tank that publishes reports.
              <strong>We build infrastructure</strong> — replicable, scalable data-collection and intelligence systems
              designed to be adopted as standard practice inside public institutions.
              The model is the same in every domain we enter. The instruments change.
            </p>
          </div>
        </div>
      </section>

      {/* MODEL */}
      <section id="model">
        <div className="model-header reveal">
          <span className="section-kicker">How We Work</span>
          <h2 className="section-h2">The same playbook. A new domain each time.</h2>
        </div>
        <div className="model-steps">
          <div className="model-step reveal">
            <div className="step-seq">Step 01</div>
            <div className="step-icon-line"></div>
            <div className="step-title">Identify the gap</div>
            <div className="step-body">We choose domains where lived experience is richest and institutional knowledge is poorest — where the loudest signal is going unheard.</div>
          </div>
          <div className="model-step reveal d1">
            <div className="step-seq">Step 02</div>
            <div className="step-icon-line"></div>
            <div className="step-title">Build anonymous infrastructure</div>
            <div className="step-body">Mobile-first, anonymous data collection tools designed for the people inside the system. No personal identifiers. Compliant with DPDP Act 2023. Ever.</div>
          </div>
          <div className="model-step reveal d2">
            <div className="step-seq">Step 03</div>
            <div className="step-icon-line"></div>
            <div className="step-title">Apply AI intelligence</div>
            <div className="step-body">NLP, sentiment analysis, trend detection, and composite scoring convert raw responses into structured intelligence — benchmarks, dimension scores, early warnings.</div>
          </div>
          <div className="model-step reveal d3">
            <div className="step-seq">Step 04</div>
            <div className="step-icon-line"></div>
            <div className="step-title">Deliver to institutions</div>
            <div className="step-body">Intelligence packaged for decision-makers: boards, ministries, administrators. Dashboards, indexes, policy-grade reports. In a form they can act on.</div>
          </div>
          <div className="model-step reveal d4">
            <div className="step-seq">Step 05</div>
            <div className="step-icon-line"></div>
            <div className="step-title">Become infrastructure</div>
            <div className="step-body">The goal is not to remain a product. It is to be absorbed into standard institutional practice — like UDISE+, like GSTN — and become part of the system itself.</div>
          </div>
        </div>
      </section>

      {/* FIELDS OF WORK */}
      <section id="fields">
        <div className="fields-header">
          <div>
            <span className="section-kicker reveal">Fields of Work</span>
            <h2 className="section-h2 reveal d1">We entered education first.<br />We will not stop there.</h2>
          </div>
          <p className="fields-header-right reveal d2">
            Each field we enter follows the same model: anonymous collection, AI intelligence,
            composite benchmark index, institutional adoption. Education is where we proved it.
            The others are coming.
          </p>
        </div>

        <div className="fields-list reveal">
          <div className="field-row active">
            <div className="field-index">01</div>
            <div className="field-main">
              <div className="field-domain">Education Intelligence</div>
              <div className="field-name">School quality, student voice,<br />teaching effectiveness</div>
              <div className="field-desc">
                India has 1.5 million schools and 250 million students generating almost no structured feedback.
                CatalystBox collects anonymous data from students, teachers, and parents — and converts it into
                the CatalystBox Benchmark Index (CBI): a composite school quality score usable by education boards
                and policymakers implementing NEP 2020. Once CatalystBox demonstrates proof at scale in schools,
                the same infrastructure will expand to India&apos;s <strong style={{color: "rgba(255,255,255,0.85)"}}>42,000+ colleges and universities</strong> —
                capturing student and faculty voice at the higher education level, where the feedback gap is equally severe.
              </div>
              <a href="/#initiative" className="field-instrument">
                Instrument: CatalystBox
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
              <div className="field-domain">Public Health Intelligence</div>
              <div className="field-name">Community health systems,<br />frontline worker voice</div>
              <div className="field-desc">
                Primary healthcare centres, ASHA workers, and community health volunteers hold detailed knowledge
                about what is failing in last-mile health delivery. A Fresh Eye instrument here would surface
                those signals — anonymously, systematically, and at the scale of a national health infrastructure.
              </div>
            </div>
            <div className="field-status">
              <span className="status-pill status-building">Building framework</span>
            </div>
          </div>

          <div className="field-row">
            <div className="field-index">03</div>
            <div className="field-main">
              <div className="field-domain">Civic Governance Intelligence</div>
              <div className="field-name">Local government accountability,<br />citizen experience data</div>
              <div className="field-desc">
                Municipal services, panchayat delivery, public infrastructure — millions of daily interactions
                that leave no structured trace. Fresh Eye&apos;s civic instrument would create a continuous, anonymous
                feedback loop between citizens and local administration, making governance responsive to ground reality.
              </div>
            </div>
            <div className="field-status">
              <span className="status-pill status-next">On the horizon</span>
            </div>
          </div>

          <div className="field-row">
            <div className="field-index">04</div>
            <div className="field-main">
              <div className="field-domain">Workforce &amp; Labour Intelligence</div>
              <div className="field-name">Informal sector, gig economy,<br />industrial worker experience</div>
              <div className="field-desc">
                India&apos;s 400 million informal workers have no systematic channel to report conditions, violations,
                or systemic patterns. An intelligence instrument here could make the invisible workforce audible —
                safely, without reprisal, and at a scale that changes policy.
              </div>
            </div>
            <div className="field-status">
              <span className="status-pill status-next">Future domain</span>
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
              <span className="initiative-type">Education Intelligence</span>
            </div>
            <h2 className="initiative-h2 reveal d1">
              CatalystBox — the nation&apos;s first <em>education feedback infrastructure</em>
            </h2>
            <p className="initiative-body reveal d2">
              CatalystBox is Fresh Eye Foundation&apos;s first operational instrument — a
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
              being activated. Board-level dashboards are live. We are not describing a vision.
              We are building the thing.
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

      {/* ABOUT */}
      <section id="about">
        <div className="about-masthead">
          <div>
            <span className="about-kicker reveal">About the Foundation</span>
            <h1 className="about-h1 reveal d1">A fresh eye on systems that have stopped <em>seeing themselves</em></h1>
          </div>
          <div>
            <p className="about-intro-lead reveal d2">
              We are not here to run programmes, publish reports, or consult for fees. We are here to build
              the data infrastructure that India&apos;s public systems should have had a generation ago.
            </p>
            <p className="about-intro reveal d3">
              Fresh Eye Foundation is a civic intelligence organisation. We identify the domains where lived
              experience is richest and institutional knowledge is poorest — where millions of people interact
              with public systems daily, generate profound signal about what is working and what is broken,
              and have no channel to make that signal visible. Then we build that channel.
              <strong>Permanently. Anonymously. At scale.</strong>
            </p>
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
              Every institution, however well-intentioned, eventually develops a kind of institutional blindness.
              Familiarity dulls perception. The systems that have been running for decades — schools, hospitals,
              local governments — stop asking basic questions about whether they are actually working, because
              asking would require hearing the answer.
            </p>
            <p className="reveal d1">
              <strong>A fresh eye is what those systems lack.</strong> Not an audit. Not a ranking. Not a survey
              conducted once a decade. A continuous, trusted, anonymous channel through which the people inside
              the system — the student in Seat 23, the ASHA worker at the PHC, the resident waiting at the
              municipal counter — can tell the institution what they actually see, feel, and experience.
            </p>
            <div className="about-pull reveal d2">
              <p>The most valuable knowledge about what is broken usually lives at the bottom of the hierarchy. Fresh Eye Foundation&apos;s entire purpose is to move it to the top.</p>
            </div>
            <h3 className="reveal d2">The founding observation</h3>
            <p className="reveal d2">
              India manages its public systems with data that is old, narrow, and collected from the outside.
              Census surveys. Annual inspections. Board examinations. These are valuable, but they are
              snapshots — taken by outsiders, infrequently, with limited scope. <strong>They cannot capture
              the texture of daily experience.</strong> They cannot tell you that the teacher in Class 8B has
              been demoralised for three terms. They cannot tell you that students in a particular district
              consistently feel unsafe. They cannot tell you that a new health protocol is being misapplied
              at the ground level because no one trained the frontline workers properly.
            </p>
            <p className="reveal d3">
              The people who could tell you those things — students, teachers, parents, workers, citizens —
              are silent. Not because they have nothing to say, but because no one has built a trustworthy,
              anonymous, persistent channel for them to say it. <strong>That is what Fresh Eye Foundation builds.</strong>
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
              These are not aspirational statements. They are operational constraints. Every instrument we build,
              every decision we make about data architecture, every partnership we accept or decline — these
              values are the filter through which every choice passes.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card reveal">
              <div className="value-num">Value 01</div>
              <h4>Anonymity is non-negotiable</h4>
              <p>We will never collect personal identifiers. Not names, not email addresses, not device IDs, not biometric markers. The moment a respondent has reason to wonder whether their response can be traced back to them, the feedback system fails. School codes are the only identifier in our architecture — and that is a permanent design choice, not a current limitation.</p>
            </div>
            <div className="value-card reveal d1">
              <div className="value-num">Value 02</div>
              <h4>Infrastructure, not influence</h4>
              <p>Our job is to build the pipe, not to control what flows through it. We collect data, process it into intelligence, and deliver it to institutions. We do not advocate for specific policy outcomes. We do not publish rankings designed to shame. We do not use our position as data intermediaries to push institutional behaviour in any particular direction. The data speaks. We translate. Institutions decide.</p>
            </div>
            <div className="value-card reveal d2">
              <div className="value-num">Value 03</div>
              <h4>Honest zeros, always</h4>
              <p>We will never inflate our numbers, overstate our reach, or claim capabilities we have not built. When we have ten pilot schools, we say ten. When a data pipeline is broken, we fix it before we report on it. Institutional trust — from education boards, from ministries, from CSR funders — is our most important asset, and it can only be built on a foundation of radical honesty about what we have and have not achieved.</p>
            </div>
            <div className="value-card reveal d3">
              <div className="value-num">Value 04</div>
              <h4>Safety before signal</h4>
              <p>Our respondents include children. That is a profound responsibility. We will not optimise for engagement, response rate, or data volume at the expense of respondent safety. The DPDP Act 2023 sets the legal floor. Our ethical standards sit higher. No gamification that could manipulate a child&apos;s response. No data retention beyond what is necessary. No third-party access to individual-level data under any commercial arrangement.</p>
            </div>
            <div className="value-card reveal d1">
              <div className="value-num">Value 05</div>
              <h4>Built to be absorbed</h4>
              <p>The highest expression of our work is when an instrument we built becomes so standard that people forget we built it — when the CBI appears in ministry reports the way UDISE+ data does today, unremarkable because it is simply there. We do not build for brand recognition. We build for adoption. Every design choice we make should make our instruments easier for institutions to own, not harder.</p>
            </div>
            <div className="value-card reveal d2">
              <div className="value-num">Value 06</div>
              <h4>Parallel, not sequential</h4>
              <p>India&apos;s problems do not wait. We do not build one thing, declare victory, and then begin the next. We move across domains in parallel, at different stages of development — proving the model in education while scoping it in health, building while planning, learning while operating. This is not impatience. It is the appropriate pace for a country of 1.4 billion people and systems that have been underfunded for decades.</p>
            </div>
          </div>
        </div>

        <div className="education-path">
          <div className="path-header">
            <div>
              <span className="about-kicker reveal">Education Roadmap</span>
              <h2 className="section-h2 reveal d1" style={{maxWidth: "260px"}}>Schools first. Then the full education system.</h2>
            </div>
            <p className="path-body reveal d2">
              CatalystBox was deliberately scoped to schools first — where the feedback gap is widest, the
              institutional receptivity to NEP 2020 alignment is highest, and the data infrastructure is most
              absent. But education does not end at Class 12. The second phase of our education intelligence
              work will extend into India&apos;s colleges and universities — a system of comparable scale, with
              the same near-total absence of structured student voice.
            </p>
          </div>
          <div className="path-track">
            <div className="path-card active-path reveal">
              <div className="path-phase">Phase I — Active</div>
              <div className="path-title">School Intelligence Infrastructure</div>
              <div className="path-desc">
                CatalystBox builds the CBI — CatalystBox Benchmark Index — across five dimensions of school
                quality: student wellbeing, teaching effectiveness, parent engagement, learning environment,
                and future readiness. Anonymous QR-based feedback from students, teachers, and parents.
                Board-level and school-level dashboards. 28,000+ CBSE and CISCE schools in directory.
                Pilot schools being activated now.
              </div>
              <div className="path-stat">
                <div className="path-stat-val">1.5<span>M</span></div>
                <div className="path-stat-label">Target schools across India</div>
              </div>
            </div>
            <div className="path-card reveal d1">
              <div className="path-phase">Phase II — After School Proof</div>
              <div className="path-title">College &amp; University Intelligence Infrastructure</div>
              <div className="path-desc">
                Once CatalystBox achieves sustained adoption at the school level — board integration, a
                recognised CBI as a standard quality metric — the same infrastructure will extend to India&apos;s
                colleges and universities. A new composite index, new respondent types (faculty, students,
                alumni), and alignment with UGC and NAAC frameworks. The feedback gap in higher education is
                equally severe. Our model is equally applicable.
              </div>
              <div className="path-stat">
                <div className="path-stat-val">42<span>K+</span></div>
                <div className="path-stat-label">Colleges and universities in India</div>
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
                <div className="not-card-head"><span className="not-x">✕</span> Not an NGO with programmes</div>
                <p>We do not run after-school activities, teacher training workshops, or scholarship schemes. Those are valuable. They are not what we do. We build the data layer that tells others where those interventions are most needed.</p>
              </div>
              <div className="not-card is-yes reveal d1">
                <div className="not-card-head"><span className="not-check">✓</span> A civic intelligence organisation</div>
                <p>We build anonymous, AI-powered data collection and intelligence infrastructure designed for adoption by public institutions. We are measured not by programmes delivered but by institutions that use our data to make better decisions.</p>
              </div>
              <div className="not-card reveal d1">
                <div className="not-card-head"><span className="not-x">✕</span> Not a think tank or consultancy</div>
                <p>We do not publish reports. We do not offer advisory retainers. We do not produce white papers on what should be done. We build the actual thing — working software, real data pipelines, live dashboards.</p>
              </div>
              <div className="not-card is-yes reveal d2">
                <div className="not-card-head"><span className="not-check">✓</span> An infrastructure builder</div>
                <p>The analogy we reach for is GSTN, UDISE+, or the UPI stack — not a product that schools subscribe to, but infrastructure that becomes part of how the system operates. That is the ambition. That is what we are building toward.</p>
              </div>
              <div className="not-card reveal d2">
                <div className="not-card-head"><span className="not-x">✕</span> Not a data broker</div>
                <p>We will never sell individual-level data, respondent-identifiable records, or any dataset that could be used to profile, target, or penalise specific people or institutions. Our commercial relationships are built on aggregated intelligence, not on selling raw data.</p>
              </div>
              <div className="not-card is-yes reveal d3">
                <div className="not-card-head"><span className="not-check">✓</span> An independent signal keeper</div>
                <p>We sit between the people inside public systems and the institutions that run them. Our independence — from government, from schools, from commercial EdTech — is the source of our value. The signal is only credible if no one with power over the respondents also has power over us.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="founding-facts">
          <div className="reveal">
            <div className="about-aside-label">Organisation details</div>
          </div>
          <div className="facts-grid reveal d1">
            <div className="fact-cell">
              <div className="fc-key">Legal structure</div>
              <div className="fc-val">NGO (Section 8) &middot; CatalystBox applies as an OPC</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Headquartered</div>
              <div className="fc-val">Uttar Pradesh, India</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Organisation type</div>
              <div className="fc-val">Civic Intelligence Infrastructure</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">First domain</div>
              <div className="fc-val">Education Intelligence</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Flagship instrument</div>
              <div className="fc-val">CatalystBox — catalystbox.in</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Policy alignment</div>
              <div className="fc-val">NEP 2020 &middot; SDG 4 &middot; MCA Schedule VII</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Privacy standard</div>
              <div className="fc-val">DPDP Act 2023 &middot; Zero personal identifiers</div>
            </div>
            <div className="fact-cell">
              <div className="fc-key">Governance</div>
              <div className="fc-val">Independent Advisory Board &middot; Educators, Psychologists, Policy Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section id="partner">
        <div className="partner-layout">
          <div>
            <span className="section-kicker reveal">Get Involved</span>
            <h2 className="partner-h2 reveal d1">Help us build the intelligence layer India&apos;s systems need</h2>
            <p className="partner-body reveal d2">
              We are at the early stages of proving this model in education. We are looking for partners
              who share the conviction that public systems deserve better data — and who have the reach,
              resources, or relationships to help us get there.
            </p>
            <div className="partner-actions reveal d3">
              <a href="mailto:support@fresheyefoundation.com" className="partner-action">
                <div>
                  <div className="pa-title">Education Boards &amp; State Departments</div>
                  <div className="pa-sub">Pilot CBI data collection with affiliated schools</div>
                </div>
                <span className="pa-arrow">&rarr;</span>
              </a>
              <a href="mailto:support@fresheyefoundation.com" className="partner-action">
                <div>
                  <div className="pa-title">CSR Foundations &amp; NGO Funders</div>
                  <div className="pa-sub">Fund infrastructure, not a project. MCA Schedule VII aligned.</div>
                </div>
                <span className="pa-arrow">&rarr;</span>
              </a>
              <a href="mailto:support@fresheyefoundation.com" className="partner-action">
                <div>
                  <div className="pa-title">Research Institutions</div>
                  <div className="pa-sub">Access anonymised school intelligence for systemic research</div>
                </div>
                <span className="pa-arrow">&rarr;</span>
              </a>
              <a href="mailto:support@fresheyefoundation.com" className="partner-action">
                <div>
                  <div className="pa-title">Technology &amp; AI Partners</div>
                  <div className="pa-sub">Multilingual NLP, responsible AI for minors, scale architecture</div>
                </div>
                <span className="pa-arrow">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="reveal d2">
            <div className="reach-header">The scale this infrastructure needs to reach</div>
            <div className="reach-grid">
              <div className="reach-row">
                <span className="reach-label">Schools in India</span>
                <div className="reach-val">1.5<span>M</span></div>
              </div>
              <div className="reach-row">
                <span className="reach-label">Students</span>
                <div className="reach-val">250<span>M</span></div>
              </div>
              <div className="reach-row">
                <span className="reach-label">Teachers</span>
                <div className="reach-val">9<span>M+</span></div>
              </div>
              <div className="reach-row">
                <span className="reach-label">CBSE + CISCE schools in directory</span>
                <div className="reach-val">28<span>K+</span></div>
              </div>
              <div className="reach-row">
                <span className="reach-label">National feedback infrastructure today</span>
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
            <div className="footer-wordmark" style={{marginBottom: "1rem"}}><strong>Fresh Eye Foundation</strong> &nbsp;&middot;&nbsp; Intelligence Infrastructure for India&apos;s Public Systems</div>
            <div style={{fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.2rem"}}>For partnerships and general inquiries:</div>
            <a href="mailto:support@fresheyefoundation.com" style={{fontSize: "1.05rem", color: "var(--teal-light)", fontWeight: 600, textDecoration: "none", transition: "color 0.2s"}}>support@fresheyefoundation.com</a>
          </div>
          <nav className="footer-nav">
            <a href="/#manifesto">Purpose</a>
            <a href="/#model">Model</a>
            <a href="/#fields">Fields</a>
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
