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
    <a href="/privacy">Privacy Policy</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<header className="page-header">
  <div className="page-header-texture"></div>
  <div className="page-header-teal"></div>
  <div className="page-header-content">
    <div className="page-overline">
      <div className="overline-rule"></div>
      <span className="overline-text">Fresh Eye Foundation · Legal &amp; Governance</span>
    </div>
    <h1 className="page-title">Data Governance <em>Charter</em></h1>
    <p className="page-sub">Fresh Eye Foundation collects data from people inside public systems to generate intelligence for the institutions that serve them. <strong>Anonymity is not a feature of how we operate — it is the architecture.</strong> This charter documents what we collect, what we never collect, and the principles that govern every decision in between.</p>
    <div className="page-meta-row">
      <div><div className="meta-label">Version</div><div className="meta-value">1.0</div></div>
      <div><div className="meta-label">Effective</div><div className="meta-value">2024</div></div>
      <div><div className="meta-label">Governing Law</div><div className="meta-value">DPDP Act 2023 · IT Act 2000</div></div>
      <div><div className="meta-label">Applies To</div><div className="meta-value">CatalystBox · All Future FEF Instruments</div></div>
    </div>
  </div>
</header>

<div className="doc-body">
  <aside className="doc-toc">
    <div className="toc-label">Contents</div>
    <ul className="toc-list">
      <li><a href="#principles">Foundational Principles</a></li>
      <li><a href="#collect">What We Collect</a></li>
      <li><a href="#never">What We Never Collect</a></li>
      <li><a href="#lifecycle">Data Lifecycle</a></li>
      <li><a href="#access">Access &amp; Disclosure</a></li>
      <li><a href="#minors">Data Involving Minors</a></li>
      <li><a href="#retention">Retention &amp; Deletion</a></li>
      <li><a href="#rights">Respondent Rights</a></li>
      <li><a href="#oversight">Oversight &amp; Review</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="toc-contact">
      <p>Questions about this charter?</p>
      <a href="#contact">support@fresheyefoundation.com</a>
    </div>
  </aside>

  <article>

    <div className="doc-section reveal">
      <span className="section-anchor" id="principles"></span>
      <span className="doc-section-kicker">Section 01</span>
      <h2>Foundational Principles</h2>
      <p>Every data governance decision we make flows from these principles. They are not aspirational — they are the constraints within which all our systems are designed. They cannot be overridden by business rationale or institutional pressure.</p>
      <div className="principle-block">
        <div className="pb-head"><span className="pb-num">P-01</span><span className="pb-title">Anonymity by design, not by policy</span></div>
        <p className="pb-body">We do not collect personal identifiers and then promise not to use them. We build systems where those identifiers cannot be collected at all. A policy can change. An architecture with no field for a name cannot leak one.</p>
      </div>
      <div className="principle-block">
        <div className="pb-head"><span className="pb-num">P-02</span><span className="pb-title">Data minimisation at every layer</span></div>
        <p className="pb-body">We collect only what is necessary to generate the intelligence our instruments produce. If a data point does not contribute to a measurable output, we do not collect it.</p>
      </div>
      <div className="principle-block">
        <div className="pb-head"><span className="pb-num">P-03</span><span className="pb-title">Aggregation as the unit of disclosure</span></div>
        <p className="pb-body">No individual response is ever surfaced to any party — including the school that generated it. All outputs are statistical aggregates. A school receives a score and a trend, never a record traceable to a specific respondent.</p>
      </div>
      <div className="principle-block">
        <div className="pb-head"><span className="pb-num">P-04</span><span className="pb-title">Independence of data from power</span></div>
        <p className="pb-body">The people most likely to generate valuable feedback are also the people most vulnerable to retaliation from the institutions they are describing. Our anonymity architecture exists specifically to protect this asymmetry. A school principal cannot identify what any specific student said.</p>
      </div>
      <div className="principle-block">
        <div className="pb-head"><span className="pb-num">P-05</span><span className="pb-title">No commercial use of raw response data</span></div>
        <p className="pb-body">We will never sell, licence, or transfer raw response data to any third party for commercial purposes. Our commercial model is built on aggregated, anonymised intelligence products — not on the underlying responses.</p>
      </div>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="collect"></span>
      <span className="doc-section-kicker">Section 02</span>
      <h2>What We Collect</h2>
      <p>CatalystBox collects the following through anonymous QR-based feedback forms. Future Fresh Eye Foundation instruments will publish their own schedules as annexures to this charter.</p>
      <table className="id-table">
        <thead><tr><th>Data Field</th><th>Type</th><th>Purpose</th><th>Collected</th></tr></thead>
        <tbody>
          <tr><td className="col-field">School Identifier Code</td><td>Institutional</td><td>Attribute responses to the correct school</td><td><span className="allowed">Yes</span></td></tr>
          <tr><td className="col-field">Academic Year</td><td>Temporal</td><td>Year-on-year trend analysis</td><td><span className="allowed">Yes</span></td></tr>
          <tr><td className="col-field">Respondent Type</td><td>Category only (Student / Teacher / Parent)</td><td>Segment responses for dimension weighting</td><td><span className="allowed">Yes</span></td></tr>
          <tr><td className="col-field">Scaled Survey Responses</td><td>Numeric ratings</td><td>Input to school quality dimension scores</td><td><span className="allowed">Yes</span></td></tr>
          <tr><td className="col-field">Open Text Response (optional)</td><td>Unstructured text</td><td>Qualitative signal extraction via AI sentiment analysis</td><td><span className="allowed">Yes</span></td></tr>
          <tr><td className="col-field">Gender (student forms only)</td><td>Category (aggregated)</td><td>Equity-disaggregated scoring for girl student experience metric</td><td><span className="allowed">Yes</span></td></tr>
          <tr><td className="col-field">Submission Timestamp</td><td>Server-generated</td><td>Fraud detection; submission frequency analysis at school level</td><td><span className="allowed">Yes</span></td></tr>
        </tbody>
      </table>
      <div className="notice">
        <div className="notice-head">On the open text response</div>
        <p>The optional free-text field is processed by AI for sentiment classification only. Raw text is never shared externally and is subject to a shorter retention period than numeric responses. We ask respondents not to include personal names or contact details in this field.</p>
      </div>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="never"></span>
      <span className="doc-section-kicker">Section 03</span>
      <h2>What We Never Collect</h2>
      <p>The following are permanently excluded. These are not fields we collect but promise not to use — our systems are designed so they cannot be collected at all.</p>
      <table className="id-table">
        <thead><tr><th>Data Category</th><th>Collected</th><th>Reason</th></tr></thead>
        <tbody>
          <tr><td className="col-field">Name</td><td><span className="denied">Never</span></td><td>Primary anonymity guarantee; foundational to respondent trust</td></tr>
          <tr><td className="col-field">Email address</td><td><span className="denied">Never</span></td><td>No login required; no contact collection of any kind</td></tr>
          <tr><td className="col-field">Phone number</td><td><span className="denied">Never</span></td><td>Not requested; not required for submission</td></tr>
          <tr><td className="col-field">Device ID or fingerprint</td><td><span className="denied">Never</span></td><td>Fraud prevention uses session-based methods only; no persistent device tracking</td></tr>
          <tr><td className="col-field">IP address (stored)</td><td><span className="denied">Never stored</span></td><td>Transiently visible at network layer but never logged or associated with any response</td></tr>
          <tr><td className="col-field">Location data</td><td><span className="denied">Never</span></td><td>School identified by pre-filled code; no location capture performed</td></tr>
          <tr><td className="col-field">Biometric data</td><td><span className="denied">Never</span></td><td>Not required; not requested; not captured under any circumstance</td></tr>
          <tr><td className="col-field">Social profile or linked account</td><td><span className="denied">Never</span></td><td>No social login; no account creation required to respond</td></tr>
          <tr><td className="col-field">Caste, religion, or community identity</td><td><span className="denied">Never</span></td><td>Sensitive personal data under DPDP Act 2023; entirely outside our scope</td></tr>
        </tbody>
      </table>
      <div className="doc-pull">
        <p>The school identifier code is the deepest identifier in our system. It identifies an institution, never a person. That is the boundary we will not cross.</p>
      </div>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="lifecycle"></span>
      <span className="doc-section-kicker">Section 04</span>
      <h2>Data Lifecycle</h2>
      <p>Every piece of data passes through a defined lifecycle from submission to institutional delivery.</p>
      <h3>Collection</h3>
      <p>A respondent scans a school-specific QR code. The form loads with the school's identifier and academic year pre-filled. <strong>No personal information is requested at any point in this flow.</strong></p>
      <h3>Processing &amp; scoring</h3>
      <p>Responses are processed into school-level quality scores across multiple dimensions. The individual response is the input; a school-level aggregate is the only output carried forward. Individual records are not exposed in any downstream layer.</p>
      <h3>AI analysis</h3>
      <p>Open text responses are analysed by an AI system for sentiment classification and signal extraction. Results are aggregated at school level before delivery. The original text is retained only in secured internal systems, subject to our retention schedule, and never appears in dashboard outputs.</p>
      <h3>Institutional delivery</h3>
      <p>Dashboards display aggregate scores, trends, and comparative benchmarks. <strong>No individual response data appears at any point in the delivery layer.</strong></p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="access"></span>
      <span className="doc-section-kicker">Section 05</span>
      <h2>Access &amp; Disclosure</h2>
      <table className="id-table">
        <thead><tr><th>Party</th><th>Can Access</th><th>Cannot Access</th></tr></thead>
        <tbody>
          <tr><td className="col-field">School</td><td>Own school aggregate scores, trends, dimension breakdowns</td><td>Individual responses, any other school's data</td></tr>
          <tr><td className="col-field">Education Board</td><td>Affiliated schools' aggregates, board-level distribution</td><td>Individual responses, non-affiliated schools</td></tr>
          <tr><td className="col-field">Research Partners</td><td>Anonymised aggregate datasets (minimum cohort threshold applies)</td><td>Individual responses, school-identified data without agreement</td></tr>
          <tr><td className="col-field">CSR Funders</td><td>Aggregate programme-level impact metrics per funding agreement</td><td>Individual responses, school scores beyond agreed scope</td></tr>
          <tr><td className="col-field">Government / Law Enforcement</td><td>Only under a valid binding legal order — no voluntary disclosure</td><td>Any voluntary disclosure without legal compulsion</td></tr>
        </tbody>
      </table>
      <p>We do not disclose individual response data to any third party except as required by valid legal order, to research partners under signed Data Sharing Agreements with anonymisation requirements, or to infrastructure processors necessary to operate our systems. Research disclosures are subject to minimum cohort size requirements to prevent re-identification.</p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="minors"></span>
      <span className="doc-section-kicker">Section 06</span>
      <h2>Data Involving Minors</h2>
      <p>A significant proportion of CatalystBox respondents are students below the age of 18. The DPDP Act 2023 establishes specific protections for children's data. Our architecture applies additional protections beyond the legal minimum.</p>
      <div className="principle-block">
        <div className="pb-head"><span className="pb-num">M-01</span><span className="pb-title">No personal data from minors, under any circumstance</span></div>
        <p className="pb-body">Because we collect no personal identifiers from any respondent, we do not hold personal data about children in the conventional sense. We treat the DPDP Act 2023's standards for children's data as a floor — not a ceiling — across all student-facing collection.</p>
      </div>
      <div className="principle-block">
        <div className="pb-head"><span className="pb-num">M-02</span><span className="pb-title">No profiling, targeting, or commercial use — ever</span></div>
        <p className="pb-body">We do not build individual profiles from student responses. We do not use student data for advertising, recommendations, or targeting of any kind. Data derived from student responses will never be sold or commercially transferred in any form. This restriction is permanent and not subject to charter revision.</p>
      </div>
      <div className="principle-block">
        <div className="pb-head"><span className="pb-num">M-03</span><span className="pb-title">Schools as institutional mediators</span></div>
        <p className="pb-body">QR codes are distributed by schools — we have no direct contact with students outside the anonymous feedback form. Schools are responsible for communicating the voluntary and anonymous nature of participation, and for applying any child safety policies required by their own institutional rules.</p>
      </div>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="retention"></span>
      <span className="doc-section-kicker">Section 07</span>
      <h2>Retention &amp; Deletion</h2>
      <h3>Individual response records</h3>
      <p>Retained for <strong>24 months</strong> from the end of the academic year in which they were submitted. Deleted permanently at the end of this period. Cannot be restored once deleted.</p>
      <h3>Open text responses</h3>
      <p>Retained for <strong>12 months</strong> from submission — a shorter period given the greater potential for inadvertent personal information in free text. AI-derived sentiment scores are retained separately as part of the school aggregate record.</p>
      <h3>School-level aggregate scores</h3>
      <p>Retained <strong>indefinitely</strong> to enable longitudinal benchmarking. These records contain no individual-level data.</p>
      <h3>Audit logs</h3>
      <p>Retained for <strong>5 years</strong> for security review and regulatory compliance. Audit logs do not contain response content.</p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="rights"></span>
      <span className="doc-section-kicker">Section 08</span>
      <h2>Respondent Rights</h2>
      <p>Because our system collects no personal identifiers, certain rights under the DPDP Act 2023 apply differently than in systems that hold named records.</p>
      <h3>Right to access &amp; correction</h3>
      <p>We cannot retrieve or correct a specific individual's response because the record carries no identity. This is a deliberate design choice, not a limitation on willingness. All responses are deleted automatically per our retention schedule.</p>
      <h3>Right to erasure</h3>
      <p>Respondents who wish to confirm that responses from a specific school and period have been deleted may request written confirmation of our retention schedule compliance at <a href="#contact" style={{"color":"var(--teal)","fontWeight":"500"}}>support@fresheyefoundation.com</a>.</p>
      <h3>Right to object</h3>
      <p>Participation is entirely voluntary. A respondent who does not wish to submit feedback simply does not submit the form. Non-participation has no consequence.</p>
      <h3>Right to grievance redressal</h3>
      <p>Any concern may be raised at <a href="#contact" style={{"color":"var(--teal)","fontWeight":"500"}}>support@fresheyefoundation.com</a>. We respond within 10 business days and resolve within 30 days or provide a reasoned update.</p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="oversight"></span>
      <span className="doc-section-kicker">Section 09</span>
      <h2>Oversight &amp; Review</h2>
      <h3>Independent Advisory Board</h3>
      <p>Fresh Eye Foundation maintains an Independent Advisory Board comprising educators, psychologists, data privacy specialists, and child safety experts. The Board reviews data governance practices annually. Its recommendations on privacy protection are binding.</p>
      <h3>Charter revision</h3>
      <p>This charter is reviewed annually. <strong>Material changes</strong> — any change that reduces privacy protections for respondents — require a minimum 30-day public notice period before taking effect. Non-material changes may be made without notice. All versions are maintained in a public version history.</p>
      <h3>Security incidents</h3>
      <p>In the event of a security incident, we will contain it within 24 hours; assess scope within 72 hours; notify affected institutional partners within 72 hours; notify the relevant data protection authority as required under the DPDP Act 2023; and publish a public incident summary within 30 days. Given our anonymised architecture, a breach cannot expose personal information — the data does not contain any.</p>
    </div>

    <div className="doc-section reveal">
      <span className="section-anchor" id="contact"></span>
      <span className="doc-section-kicker">Section 10</span>
      <h2>Contact</h2>
      <p>Questions about this charter or specific data practices:</p>
      <p><strong>Fresh Eye Foundation — Data Governance</strong><br />
      <a href="#contact" style={{"color":"var(--teal)","fontWeight":"500"}}>support@fresheyefoundation.com</a></p>
      <p>We respond to all governance-related queries within 10 business days. For urgent security matters, mark your subject line <strong>URGENT: Data Security</strong>.</p>
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
      <a href="/privacy">Privacy Policy</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
  <div className="footer-bottom">
    <p>© 2024 Fresh Eye Foundation · NGO Registered · Uttar Pradesh, India</p>
    <p>Data Governance Charter v1.0 · DPDP Act 2023</p>
  </div>
</footer>
    </>
  );
}