export default function About() {
  const strengths = [
    {
      id: 1,
      icon: "FE",
      title: "Frontend",
      text: "React, Next.js und moderne UI-Umsetzung mit Fokus auf Lesbarkeit und Struktur.",
    },
    {
      id: 2,
      icon: "UI",
      title: "UI Design",
      text: "Gespür für Typografie, Abstände, visuelle Hierarchie und eine ruhige Gestaltung.",
    },
    {
      id: 3,
      icon: "UX",
      title: "Nutzerführung",
      text: "Inhalte und Funktionen so aufbauen, dass Orientierung und Verständlichkeit im Vordergrund stehen.",
    },
    {
      id: 4,
      icon: "DEV",
      title: "Technische Basis",
      text: "Sauber strukturierter Code, wartbare Komponenten und ein solides Fundament für Erweiterungen.",
    },
  ];

  const focusAreas = [
    {
      id: 1,
      title: "Responsive Interfaces",
      text: "Layouts, die auf unterschiedlichen Geräten konsistent, ruhig und präzise funktionieren.",
    },
    {
      id: 2,
      title: "Design und Entwicklung zusammen denken",
      text: "Ich arbeite gerne an Oberflächen, bei denen Gestaltung und technische Umsetzung eng zusammenspielen.",
    },
    {
      id: 3,
      title: "Klare digitale Auftritte",
      text: "Mich interessieren Websites und Oberflächen, die Vertrauen schaffen und nicht überladen wirken.",
    },
  ];

  return (
    <main>
      <section className="section" style={{ paddingTop: "64px" }}>
        <div className="container about-hero">
          <div className="about-intro hero-panel">
            <small className="hero-kicker">Über mich</small>
            <h1>Ich entwickle digitale Oberflächen mit einem klaren Blick für Struktur und Gestaltung.</h1>
            <p>
              Ich bin Samuel und interessiere mich besonders für Frontend-Entwicklung, moderne Websites und die Frage,
              wie man Inhalte digital ruhig, klar und verständlich präsentiert.
            </p>
            <p>
              Dabei reizt mich vor allem die Verbindung von Technik und Design: Eine gute Oberfläche soll nicht nur
              funktionieren, sondern sich auch stimmig, hochwertig und bewusst gestaltet anfühlen.
            </p>
          </div>

          <aside className="profile-visual">
            <div className="profile-portrait">
              <span>SB</span>
            </div>
            <div className="profile-meta">
              <h3>Samuel Bieri</h3>
              <p>Zürich, Schweiz</p>
              <p>Frontend, UI und digitale Gestaltung</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Fähigkeiten</h2>
            <p>Die Themen, in denen ich meine Stärken besonders sehe.</p>
          </div>

          <div className="icon-grid">
            {strengths.map((strength) => (
              <article key={strength.id} className="icon-card">
                <div className="icon-badge">{strength.icon}</div>
                <h3>{strength.title}</h3>
                <p>{strength.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Das sind meine Schwerpunkte</h2>
            <p>Bereiche, auf die ich mich in meiner Arbeit besonders konzentriere.</p>
          </div>

          <div className="project-grid">
            {focusAreas.map((area) => (
              <article key={area.id} className="card">
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
