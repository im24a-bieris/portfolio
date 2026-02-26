export default function About() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>Über mich</h1>
          <p style={{ marginTop: "16px", fontSize: "18px", maxWidth: "600px" }}>
            Hallo! Ich bin Samuel, ein  Entwickler
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--white)" }}>
        <div className="container">
          <h2>Fähigkeiten</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginTop: "32px" }}>
            <div className="card">
              <h3>Frontend</h3>
              <p>React, Next.js, HTML, CSS, JavaScript</p>
            </div>
            <div className="card">
              <h3>Design</h3>
              <p>UI/UX Design, Responsive Design, Tailwind CSS</p>
            </div>
            <div className="card">
              <h3>Tools</h3>
              <p>Git, VS Code, Node.js, ESLint</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}