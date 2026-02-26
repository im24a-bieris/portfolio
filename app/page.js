export default function Home() {
  const stats = [
    { id: 1, label: "Projekte live", value: "12" },
    { id: 2, label: "Jahre Erfahrung", value: "4+" },
    { id: 3, label: "Response-Zeit", value: "< 24h" },
  ];

  const projects = [
    {
      id: 1,
      title: "Projekt 1",
      description: "Landingpage mit Fokus auf Performance, klarer Typografie und ruhigem Visual Design.",
      link: "#",
      stack: ["Next.js", "CSS", "Vercel"],
    },
    {
      id: 2,
      title: "Projekt 2",
      description: "Dashboard mit reduzierter Farbwelt, gut lesbaren Charts und präziser Nutzerführung.",
      link: "#",
      stack: ["React", "API", "Charting"],
    },
    {
      id: 3,
      title: "Projekt 3",
      description: "Portfolio-Redesign mit weichen Kontrasten, modularen Komponenten und mobiler Optimierung.",
      link: "#",
      stack: ["UI", "UX", "Responsive"],
    },
  ];

  return (
    <main>
      <section className="section" style={{ paddingTop: "64px" }}>
        <div className="container">
          <div className="hero-panel">
            <small className="hero-kicker">Digital Portfolio</small>
            <h1>Samuel Portfolio</h1>
            <p>Clean. Ruhig. Kontrolliert. Fokus auf klare Inhalte statt laute Effekte.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">Projekte ansehen</a>
              <a className="button-secondary" href="/contact">Kontakt</a>
            </div>
          </div>

          <div className="stat-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <p>{stat.label}</p>
                <h3>{stat.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-heading">
            <h2>Projekte</h2>
            <p>Eine Auswahl aktueller Arbeiten mit klarem Fokus auf Nutzererlebnis und Code-Qualität.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <div key={project.id} className="card">
                <div className="project-meta">
                  {project.stack.map((item) => (
                    <span key={item} className="pill">{item}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a className="button-text" href={project.link}>
                  Mehr ansehen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

