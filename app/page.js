import Link from "next/link";

export default function Home() {
  const stats = [
    { id: 1, label: "Umgesetzte Arbeiten", value: "12+" },
    { id: 2, label: "Jahre Erfahrung", value: "4+" },
    { id: 3, label: "Antwortzeit", value: "< 24h" },
  ];

  const services = [
    {
      id: 1,
      title: "Websites mit klarer Struktur",
      description: "Ich plane und baue Seiten, die ruhig wirken, schnell laden und Inhalte sauber auf den Punkt bringen.",
    },
    {
      id: 2,
      title: "Redesigns mit mehr Fokus",
      description: "Bestehende Seiten überarbeite ich so, dass Navigation, Lesefluss und visuelle Hierarchie besser funktionieren.",
    },
    {
      id: 3,
      title: "Saubere Frontend-Umsetzung",
      description: "Responsive Layouts, wartbare Komponenten und ein solides Fundament für spätere Erweiterungen.",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Landingpage",
      description: "Schnelle Marketing-Seite mit klarer Struktur, SEO-Basis und sauberem Responsive-Verhalten.",
      link: "/contact",
      cta: "Mehr erfahren",
      stack: ["Next.js", "CSS", "Vercel"],
      status: "Live Konzept",
    },
    {
      id: 2,
      title: "Business Dashboard",
      description: "Komponentenbasiertes Dashboard mit Fokus auf Lesbarkeit, Konsistenz und Performance.",
      link: "/about",
      cta: "Mein Arbeitsstil",
      stack: ["React", "REST API", "Charting"],
      status: "UI System",
    },
    {
      id: 3,
      title: "Portfolio Redesign",
      description: "Neuaufbau eines bestehenden Portfolios mit besserer Nutzerführung und strukturierter Content-Hierarchie.",
      link: "mailto:samuelbieri343@gmail.com",
      cta: "Kontakt aufnehmen",
      stack: ["UI", "UX", "Responsive"],
      status: "Persönliche Marke",
    },
  ];

  const notes = [
    {
      id: 1,
      title: "Derzeit offen für",
      text: "Neue Inhalte, frische Ideen und visuelle Weiterentwicklungen.",
    },
    {
      id: 2,
      title: "Arbeitsweise",
      text: "Direkt, strukturiert und mit Fokus auf ein Ergebnis, das später leicht gepflegt werden kann.",
    },
    {
      id: 3,
      title: "Platzhalter für Referenz",
      text: "Hier kannst du später ein Kundenfeedback, ein Siegel oder ein kurzes Testimonial einsetzen.",
    },
  ];

  return (
    <main>
      <section className="section" style={{ paddingTop: "64px" }}>
        <div className="container">
          <div className="hero-panel">
            <small className="hero-kicker">Digital Portfolio</small>
            <h1>Websites und Frontends, die ruhig wirken und trotzdem im Kopf bleiben.</h1>
            <p>
              Ich bin Samuel und entwickle moderne Websites mit klarer Struktur, sauberem Code und einem reduzierten Look.
              Der Fokus liegt auf Lesbarkeit, Vertrauen und einer präzisen Umsetzung statt auf visuellem Lärm.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">Arbeiten ansehen</a>
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

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Was ich anbiete</h2>
            <p>Von der ersten Idee bis zur fertigen Seite: klar, reduziert und mit einem Stil, der professionell statt beliebig wirkt.</p>
          </div>

          <div className="feature-grid">
            {services.map((service) => (
              <article key={service.id} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-heading">
            <h2>Ausgewählte Arbeiten</h2>
            <p>Eine Auswahl visueller und technischer Arbeiten mit Fokus auf Nutzererlebnis, Klarheit und einer sauberen Basis.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <div key={project.id} className="card">
                <span className="card-badge">{project.status}</span>
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
          <div className="section-heading">
            <h2>Kurz zu mir</h2>
            <p>Wenn noch Inhalte fehlen, ist das kein Problem. Wir können Texte, Referenzen oder weitere Details Schritt für Schritt ergänzen.</p>
          </div>

          <div className="note-grid">
            {notes.map((note) => (
              <article key={note.id} className="card">
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="hero-panel">
            <small className="hero-kicker">Kontakt</small>
            <h2>Wenn dir der Stil gefällt, melde dich gerne direkt.</h2>
            <p>Bei Fragen, Feedback oder Interesse an meiner Arbeit kannst du mir einfach eine kurze Nachricht schicken.</p>
            <div className="hero-actions">
              <Link className="button-primary" href="/contact">Kontaktseite</Link>
              <a className="button-secondary" href="mailto:samuelbieri343@gmail.com">Direkt per Mail</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
