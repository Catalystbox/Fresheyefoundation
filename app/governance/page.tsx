export const metadata = {
  title: "Data Governance | Fresh Eye Foundation",
};

export default function GovernancePage() {
  return (
    <div style={{ padding: "12rem 5vw", minHeight: "100vh", backgroundColor: "var(--paper)" }}>
      <h1 className="about-h1" style={{ marginBottom: "2rem" }}>Data Governance</h1>
      <p style={{ fontSize: "1.05rem", color: "var(--ink-soft)", maxWidth: "680px" }}>
        Fresh Eye Foundation collects data directly for public intelligence without ever holding personal identifiers.
        Our Data Governance charter ensures anonymity by design. Complete documentation of our data lifecycle 
        and security architecture will be published here shortly.
      </p>
      <br />
      <a href="/" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--teal)", textDecoration: "none" }}>&larr; Return Home</a>
    </div>
  );
}
