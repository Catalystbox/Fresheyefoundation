"use client";
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof IntersectionObserver !== 'undefined') {
        const io = new IntersectionObserver(
          (entries) => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); }),
          { threshold: 0.08 }
        );
        document.querySelectorAll('.reveal').forEach(el => io.observe(el));
        return () => io.disconnect();
    }
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
  <div className="nav-right">
    <a href="/">Home</a>
    <a href="/governance">Data Governance</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<header className="page-header">
  <div className="page-header-texture"></div>
  <div className="page-header-teal"></div>
  <div className="page-header-content">
    <div className="page-overline">
      <div className="overline-rule"></div>
      <span className="overline-text">Fresh Eye Foundation · Legal</span>
    </div>
    <h1 className="page-title"><em>Privacy</em> Policy</h1>
    <p className="page-sub">This policy describes how Fresh Eye Foundation and its instruments handle the data of everyone who interacts with them. <strong>Our foundational commitment is simple and absolute: we will never collect, store, or use personal information that could identify you.</strong></p>
    <div className="page-meta-row">
      <div><div className="meta-label">Version</div><div className="meta-value">1.0</div></div>
      <div><div className="meta-label">Effective Date</div><div className="meta-value">2024</div></div>
      <div><div className="meta-label">Governing Legislation</div><div className="meta-value">DPDP Act 2023 · IT Act 2000</div></div>
      <div><div className="meta-label">Applies To</div><div className="meta-value">fresheyefoundation.com · catalystbox.in · All FEF instruments</div></div>
    </div>
  </div>
</header>

<div className="summary-banner">
  <div className="summary-inner">
    <span className="summary-kicker">Plain Language Summary</span>
    <h2 className="summary-title">The three things that matter most</h2>
    <div className="summary-grid">
      <div className="summary-card">
        <div className="sc-title">We never know who you are</div>
        <div className="sc-body">Our feedback forms do not ask for your name, email, or phone number. There is no account, no login. When you submit, all we know is which school it came from and whether you are a student, teacher, or parent. That is the complete extent of what we hold about you as an individual.</div>
      </div>
      <div className="summary-card">
        <div className="sc-title">Your response becomes a school score, not a record about you</div>
        <div className="sc-body">Your individual response is one input to a school-level calculation. What schools, boards, and everyone else sees is a score — not your specific answer. There is no way for a teacher, principal, or board administrator to find out what you said.</div>
      </div>
      <div className="summary-card">
        <div className="sc-title">We will never sell your data</div>
        <div className="sc-body">Fresh Eye Foundation does not sell, licence, or commercially transfer any data collected through our feedback instruments. Our revenue comes from institutional subscriptions, research partnerships, and CSR funding — not from selling the responses of students, teachers, or parents.</div>
      </div>
    </div>
  </div>
</div>

<div className="doc-body">
  <aside className="doc-toc">
    <div className="toc-label">Contents</div>
    <ul className="toc-list">
      <li><a href="#who">Who We Are</a></li>
      <li><a href="#scope">Scope</a></li>
      <li><a href="#respondents">Feedback Respondent Data</a></li>
      <li><a href="#visitors">Website Visitor Data</a></li>
      <li><a href="#dashboard">Dashboard User Data</a></li>
      <li><a href="#cookies">Cookies &amp; Tracking</a></li>
      <li><a href="#use">How We Use Data</a></li>
      <li><a href="#sharing">Sharing &amp; Disclosure</a></li>
      <li><a href="#children">Children's Privacy</a></li>
      <li><a href="#rights">Your Rights</a></li>
      <li><a href="#security">Security</a></li>
      <li><a href="#changes">Changes to This Policy</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="toc-contact">
      <p>Privacy concerns or requests?</p>
      <a href="#contact">support@fresheyefoundation.com</a>
    </div>
  </aside>

  <article>

    <div className="doc-section reveal">
      <span className="section-anchor" id="who"></span>
      <span className="doc-section-kicker">Section 01</span>
      <h2>Who We Are</h2>
      <p><strong>Fresh Eye Foundation</strong> is a civic intelligence organisation registered as a One Person Company under the Companies Act of India, headquartered in Uttar Pradesh. We build anonymous, AI-powered data intelligence infrastructure for India's public systems. Our first instrument is <strong>CatalystBox</strong> (catalystbox.in) — a national education feedback and intelligence platform.</p>
      <p>For the purposes of the Digital Personal Data Protection Act 2023, Fresh Eye Foundation is the <strong>Data Fiduciary</strong> for all data collected through its instruments and platforms. Privacy contact: <a href="#contact" style={{"color":"var(--teal)","fontWeight":"500"}}>support@fresheyefoundation.com</a>.</p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="scope"></span>
      <span className="doc-section-kicker">Section 02</span>
      <h2>Scope</h2>
      <p>This Privacy Policy applies to: the Fresh Eye Foundation website at <strong>fresheyefoundation.com</strong>, the CatalystBox platform at <strong>catalystbox.in</strong>, all anonymous feedback forms deployed by CatalystBox to schools, and any future instruments or platforms operated by Fresh Eye Foundation.</p>
      <p>It governs three distinct groups: <strong>feedback respondents</strong> (students, teachers, parents who submit feedback), <strong>website visitors</strong> (anyone browsing our sites), and <strong>dashboard users</strong> (school administrators and board officials who access the analytics platform). Each is addressed separately below.</p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="respondents"></span>
      <span className="doc-section-kicker">Section 03</span>
      <h2>Feedback Respondent Data</h2>
      <p>This is the most sensitive category of data we handle — and by design, the least identifying.</p>
      <div className="doc-pull">
        <p>We have built our system so that knowing who submitted a response is architecturally impossible — not difficult, not controlled by policy. Impossible.</p>
      </div>
      <h3>What we collect</h3>
      <ul>
        <li><strong>School identifier code</strong> — pre-filled in the form URL. Identifies the institution, not you.</li>
        <li><strong>Academic year</strong> — pre-filled. Used for year-on-year trend analysis.</li>
        <li><strong>Respondent type</strong> — student, teacher, or parent. A category, not an identity.</li>
        <li><strong>Scaled survey responses</strong> — numeric ratings for school quality questions.</li>
        <li><strong>Open text response</strong> — optional. Processed only for sentiment analysis. Never shared externally. We ask you not to include personal names in this field.</li>
        <li><strong>Gender</strong> — student forms only, collected in aggregate for the girl student experience metric. Not used for identification.</li>
        <li><strong>Submission timestamp</strong> — server-generated. Used for fraud detection at school level.</li>
      </ul>
      <h3>What we never collect</h3>
      <p>Name, email address, phone number, device identifier or fingerprint, IP address (not stored), GPS location, biometric data, social media profile, caste or religion. These fields do not exist in our forms. They cannot be submitted.</p>
      <h3>Legal basis</h3>
      <p>Processing is based on the voluntary <strong>consent</strong> of the respondent (by submitting the form) and on the <strong>legitimate interests</strong> of Fresh Eye Foundation in generating school quality intelligence for institutional use. Because we collect no personal identifiers, most of what we hold does not constitute "personal data" under the DPDP Act 2023 in the conventional sense. We nonetheless apply the Act's standards as a matter of policy.</p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="visitors"></span>
      <span className="doc-section-kicker">Section 04</span>
      <h2>Website Visitor Data</h2>
      <p>When you visit our websites, standard hosting infrastructure processes your IP address transiently to serve the page. <strong>We do not store it. We do not log it.</strong></p>
      <p>Fresh Eye Foundation does not use Google Analytics, Meta Pixel, or any third-party behavioural tracking on our sites. We do not track browsing behaviour across sessions or across sites. Our websites are static pages — they set no persistent cookies and communicate with no data collection services when you visit.</p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="dashboard"></span>
      <span className="doc-section-kicker">Section 05</span>
      <h2>Dashboard User Data</h2>
      <p>School administrators and board officials who access the CatalystBox analytics dashboard have accounts in our system. For these users we hold: email address (for authentication), assigned role, affiliated institution, and account timestamps.</p>
      <p>This data is used solely for providing authenticated access to the platform. It is not used for marketing or profiling. Dashboard accounts can be deleted at any time by writing to <a href="#contact" style={{"color":"var(--teal)","fontWeight":"500"}}>support@fresheyefoundation.com</a>. Accounts inactive for 12 months are deleted automatically.</p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="cookies"></span>
      <span className="doc-section-kicker">Section 06</span>
      <h2>Cookies &amp; Tracking</h2>
      <h3>Our websites</h3>
      <p>No cookies. No tracking scripts. No analytics. Visiting fresheyefoundation.com or catalystbox.in leaves no traceable record with us.</p>
      <h3>Feedback forms</h3>
      <p>Our feedback forms are delivered via a third-party form provider which may set functional cookies as part of their infrastructure. Those cookies are governed by the provider's own privacy policy. We do not read or process them.</p>
      <h3>Dashboard application</h3>
      <p>The dashboard uses a session token to maintain your authenticated session. This token expires automatically and is used for no purpose other than keeping you logged in.</p>
      <div className="amber-notice">
        <div className="notice-head">No advertising cookies. Ever.</div>
        <p>Fresh Eye Foundation does not run advertising campaigns and uses no advertising or remarketing technology anywhere on our properties. This is a permanent commitment.</p>
      </div>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="use"></span>
      <span className="doc-section-kicker">Section 07</span>
      <h2>How We Use Data</h2>
      <h3>Feedback response data</h3>
      <ul>
        <li><strong>Scoring:</strong> Compute school quality dimension scores and the composite benchmark index.</li>
        <li><strong>Sentiment analysis:</strong> Extract qualitative signals from open text to detect patterns.</li>
        <li><strong>Benchmarking:</strong> Aggregate school scores into city, district, state, and national comparisons.</li>
        <li><strong>Research:</strong> Provide anonymised, aggregated datasets to research partners (no individual response data).</li>
        <li><strong>Fraud prevention:</strong> Detect and remove anomalous or duplicate submissions at school level.</li>
      </ul>
      <h3>Website and dashboard data</h3>
      <ul>
        <li><strong>Page delivery:</strong> IP addresses processed transiently by hosting infrastructure to serve pages. Not stored by us.</li>
        <li><strong>Authentication:</strong> Dashboard account details used to verify identity and authorise access only.</li>
      </ul>
      <p><strong>We do not use any data for advertising, marketing, profiling, or the training of AI models. We do not sell data. We do not use data for any purpose not described above.</strong></p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="sharing"></span>
      <span className="doc-section-kicker">Section 08</span>
      <h2>Sharing &amp; Disclosure</h2>
      <p>We share data only in the following circumstances:</p>
      <ul>
        <li><strong>With schools:</strong> Their own aggregate metrics only. No individual responses, no other schools' data.</li>
        <li><strong>With education boards:</strong> Affiliated school aggregates. No individual responses.</li>
        <li><strong>With infrastructure providers:</strong> Third-party services that power our technical operations process data as necessary to run those services. Each operates under its own privacy policy and our data processing agreements.</li>
        <li><strong>With research partners:</strong> Anonymised, aggregated datasets under signed Data Sharing Agreements with explicit anonymisation requirements and minimum cohort size thresholds.</li>
        <li><strong>Under legal compulsion:</strong> Only when required by a valid, binding legal order from a competent Indian authority. We will notify affected parties to the extent we are legally permitted to do so.</li>
      </ul>
      <p>We never share individual response data, school scores with unaffiliated parties, or any data with advertisers or commercial data brokers under any circumstances.</p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="children"></span>
      <span className="doc-section-kicker">Section 09</span>
      <h2>Children's Privacy</h2>
      <p>Many CatalystBox respondents are students below the age of 18. The DPDP Act 2023 establishes specific protections for children's personal data. Our architecture goes further than the legal minimum.</p>
      <p>Because we collect no personal identifiers from any respondent, we do not — in practice — hold personal data about children. A numeric survey rating submitted without any name or identifier cannot be linked to a specific person. We nonetheless apply the following specific safeguards:</p>
      <ul>
        <li>No behavioural profiling of any kind from student response data</li>
        <li>No advertising, targeting, or recommendations using student data</li>
        <li>No sale or commercial transfer of any data derived from student responses — in any form, ever</li>
        <li>Open text responses from student forms are deleted after 12 months — shorter than numeric responses</li>
        <li>Schools that deploy our QR codes are responsible for communicating the voluntary and anonymous nature of participation to students</li>
        <li>Our Independent Advisory Board includes child safety specialists who review our data practices annually</li>
      </ul>
      <div className="amber-notice">
        <div className="notice-head">For parents and guardians</div>
        <p>If you have concerns about data from a student at your child's school, write to support@fresheyefoundation.com. Because we hold no identifying information about students, we cannot retrieve a specific student's response — but we can confirm our practices in writing and provide assurance of deletion per our retention schedule.</p>
      </div>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="rights"></span>
      <span className="doc-section-kicker">Section 10</span>
      <h2>Your Rights</h2>
      <p>Under the DPDP Act 2023, you have rights with respect to your personal data. Here is how those rights apply given our anonymised architecture.</p>
      <div className="rights-grid">
        <div className="right-card">
          <h4>Right to Access</h4>
          <p>For feedback respondents: we hold no identifying information, so there is no "your" record to provide. For dashboard users: contact us to receive a copy of your account data.</p>
        </div>
        <div className="right-card">
          <h4>Right to Correction</h4>
          <p>For feedback respondents: we cannot identify which response is yours. For dashboard users: contact us to update your account details.</p>
        </div>
        <div className="right-card">
          <h4>Right to Erasure</h4>
          <p>All response data is deleted per our retention schedule. Dashboard users may request account deletion at any time. Deletion occurs within 30 days of request.</p>
        </div>
        <div className="right-card">
          <h4>Right to Withdraw Consent</h4>
          <p>Participation is voluntary. Simply do not submit a form. Dashboard users may close their account at any time.</p>
        </div>
        <div className="right-card">
          <h4>Right to Grievance Redressal</h4>
          <p>Raise any concern at support@fresheyefoundation.com. We respond within 10 business days and resolve within 30 days.</p>
        </div>
        <div className="right-card">
          <h4>Right to Escalate</h4>
          <p>If unsatisfied with our response, you have the right to escalate to the Data Protection Board of India once established under the DPDP Act 2023 framework.</p>
        </div>
      </div>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="security"></span>
      <span className="doc-section-kicker">Section 11</span>
      <h2>Security</h2>
      <p>We implement technical and organisational security measures appropriate to the data we hold: encryption in transit (TLS/HTTPS), encryption at rest, role-based access controls with least-privilege principles, and audit logging.</p>
      <p>The single most effective security measure is architectural — <strong>a breach of our response data cannot expose personal information because the database contains none.</strong> The primary security risk in a breach would be to school-level aggregate metrics, which are not personal data.</p>
      <p>In the event of a security incident, we follow the incident response procedure in our <a href="/governance" style={{"color":"var(--teal)","fontWeight":"500"}}>Data Governance Charter</a> — notification of affected parties within 72 hours, public disclosure within 30 days.</p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="changes"></span>
      <span className="doc-section-kicker">Section 12</span>
      <h2>Changes to This Policy</h2>
      <p><strong>Material changes</strong> — any change that reduces privacy protections or alters how we use data in ways that affect respondents — will be published with a minimum 30-day notice period before taking effect.</p>
      <p><strong>Non-material changes</strong> — clarifications, corrections, additions for new instruments operating on the same data model — may be made without notice.</p>
      <p>The most current version is always at <a href="https://www.fresheyefoundation.com/privacy" style={{"color":"var(--teal)","fontWeight":"500"}}>fresheyefoundation.com/privacy</a>.</p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="contact"></span>
      <span className="doc-section-kicker">Section 13</span>
      <h2>Contact</h2>
      <p><strong>Fresh Eye Foundation</strong><br />Uttar Pradesh, India<br />
      <a href="#contact" style={{"color":"var(--teal)","fontWeight":"500"}}>support@fresheyefoundation.com</a></p>
      <p>We acknowledge all privacy communications within 3 business days and provide a substantive response within 10. For matters requiring investigation, we resolve or update within 30 days.</p>
      <p>For technical data architecture details, see our <a href="/governance" style={{"color":"var(--teal)","fontWeight":"500"}}>Data Governance Charter</a>.</p>
    </div>

  </article>
</div>

<footer id="contact">
  <div className="footer-row">
    <div className="footer-wordmark"><strong>Fresh Eye Foundation</strong> &nbsp;·&nbsp; Intelligence Infrastructure for India's Public Systems</div>
    <nav className="footer-links">
      <a href="/">Home</a>
      <a href="/#fields">Fields of Work</a>
      <a href="https://catalystbox.in" target="_blank">CatalystBox</a>
      <a href="/governance">Data Governance</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
  <div className="footer-bottom">
    <p>© 2024 Fresh Eye Foundation · NGO Registered · Uttar Pradesh, India</p>
    <p>Privacy Policy v1.0 · DPDP Act 2023</p>
  </div>
</footer>
    </>
  );
}