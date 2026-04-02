import Link from "next/link";

export default function Home() {
  const stats = [
    { id: 1, label: "Projekte live", value: "12" },
    { id: 2, label: "Jahre Erfahrung", value: "4+" },
    { id: 3, label: "Response-Zeit", value: "< 24h" },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Landingpage",
      description: "Schnelle Marketing-Seite mit klarer Struktur, SEO-Basis und sauberem Responsive-Verhalten.",
      link: "/contact",
      cta: "Anfragen",
      stack: ["Next.js", "CSS", "Vercel"],
    },
    {
      id: 2,
      title: "Business Dashboard",
      description: "Komponentenbasiertes Dashboard mit Fokus auf Lesbarkeit, Konsistenz und Performance.",
      link: "/about",
      cta: "Mehr zu meiner Arbeit",
      stack: ["React", "REST API", "Charting"],
    },
    {
      id: 3,
      title: "Portfolio Redesign",
      description: "Neuaufbau eines bestehenden Portfolios mit besserer Nutzerführung und strukturierter Content-Hierarchie.",
      link: "mailto:samuelbieri343@gmail.com",
      cta: "Projekt starten",
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
              <Link className="button-secondary" href="/contact">Kontakt</Link>
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
                {project.link.startsWith("/") ? (
                  <Link className="button-text" href={project.link}>
                    {project.cta}
                  </Link>
                ) : (
                  <a className="button-text" href={project.link}>
                    {project.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="hero-panel">
            <small className="hero-kicker">Zusammenarbeit</small>
            <h2>Bereit für dein nächstes Projekt?</h2>
            <p>Wenn du eine neue Website oder ein Redesign planst, lass uns kurz über Ziele, Timing und Budget sprechen.</p>
            <div className="hero-actions">
              <Link className="button-primary" href="/contact">Kostenloses Erstgespräch</Link>
              <a className="button-secondary" href="mailto:samuelbieri343@gmail.com">Direkt per Mail</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


