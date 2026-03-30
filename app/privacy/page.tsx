export const metadata = {
  title: "Privacy Policy | Fresh Eye Foundation",
};

export default function PrivacyPage() {
  return (
    <div style={{ padding: "12rem 5vw", minHeight: "100vh", backgroundColor: "var(--paper)" }}>
      <h1 className="about-h1" style={{ marginBottom: "2rem" }}>Privacy Policy</h1>
      <p style={{ fontSize: "1.05rem", color: "var(--ink-soft)", maxWidth: "680px" }}>
        The detailed Privacy Policy is currently being formalised in accordance with the 
        Digital Personal Data Protection (DPDP) Act 2023. Our foundational commitment to 
        zero personal identifiers and complete anonymity remains our operational standard.
      </p>
      <br />
      <a href="/" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--teal)", textDecoration: "none" }}>&larr; Return Home</a>
    </div>
  );
}
