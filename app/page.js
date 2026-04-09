import Link from "next/link";

export default function Home() {
  const strengths = [
    {
      id: 1,
      title: "Klares Frontend",
      description: "Ich baue Oberflächen, die ruhig, strukturiert und auf Desktop wie Mobile konsistent wirken.",
    },
    {
      id: 2,
      title: "Saubere Umsetzung",
      description: "Mir sind verständlicher Code, nachvollziehbare Komponenten und eine solide technische Basis wichtig.",
    },
    {
      id: 3,
      title: "Design mit System",
      description: "Ich achte auf Typografie, Abstände, Hierarchie und einen visuellen Stil, der nicht beliebig wirkt.",
    },
  ];

  const works = [
    {
      id: 1,
      title: "SmashAmMeerkat",
      description: "Ein kleines Spielkonzept mit klarer Interaktion, schnellem Feedback und einfacher visueller Sprache.",
      stack: ["Java", "Game Logic", "UI"],
      preview: "Spieloberfläche",
      source: "https://github.com/im24a-bieris",
    },
    {
      id: 2,
      title: "Turnverein Video-Plattform",
      description: "Eine Plattform-Idee für Trainingsvideos mit Beschreibungen, Tipps und besserem Zugang zu Lerninhalten.",
      stack: ["JavaScript", "Konzept", "Frontend"],
      preview: "Video-Plattform",
      source: "https://github.com/im24a-bieris",
    },
  ];

  const profileNotes = [
    {
      id: 1,
      title: "Wie ich arbeite",
      text: "Ich mag klare Strukturen, nachvollziehbare Entscheidungen und digitale Lösungen, die langfristig gepflegt werden können.",
    },
    {
      id: 2,
      title: "Was mich interessiert",
      text: "Besonders spannend finde ich Frontend-Themen, UI-Gestaltung und die Verbindung von Technik und visueller Qualität.",
    },
    {
      id: 3,
      title: "Was Sie hier sehen",
      text: "Diese Seite zeigt ausgewählte Arbeiten, meine Schwerpunkte und einen Eindruck davon, wie ich digitale Produkte denke.",
    },
  ];

  return (
    <main>
      <section className="section" style={{ paddingTop: "64px" }}>
        <div className="container">
          <div className="hero-panel hero-layout">
            <div>
              <h1>Frontend mit Sinn für Klarheit, Struktur und visuelle Qualität.</h1>
              <p>
                Ich bin Samuel und interessiere mich für Webentwicklung mit Fokus auf saubere Oberflächen, verständliche
                Nutzerführung und eine Umsetzung, die technisch wie gestalterisch überzeugt.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#arbeiten">Arbeiten ansehen</a>
                <Link className="button-secondary" href="/about">Mehr über mich</Link>
              </div>
            </div>

            <div className="hero-note">
              <span className="hero-note-label">Samuel Bieri</span>
              <h3>Frontend Development</h3>
              <p>Schwerpunkt auf moderne Websites, verständliche Interfaces und eine ruhige visuelle Sprache.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Das sind meine Stärken</h2>
            <p>Die Bereiche, auf die ich mich besonders konzentriere und in denen ich Mehrwert bringe.</p>
          </div>

          <div className="feature-grid">
            {strengths.map((strength) => (
              <article key={strength.id} className="card">
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="arbeiten">
        <div className="container">
          <div className="section-heading">
            <h2>Ausgewählte Arbeiten</h2>
            <p>Ein Einblick in Arbeiten und Konzepte, an denen ich bereits gestaltet oder entwickelt habe.</p>
          </div>

          <div className="project-grid">
            {works.map((work) => (
              <article key={work.id} className="card project-card">
                <div className="project-preview">
                  <span>{work.preview}</span>
                </div>
                <div className="project-meta">
                  {work.stack.map((item) => (
                    <span key={item} className="pill">{item}</span>
                  ))}
                </div>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <div className="project-links">
                  <a className="button-text" href={work.source} target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Kurz zu mir</h2>
            <p>Ein kurzer Einblick in meine Arbeitsweise, Interessen und die Perspektive, die ich in Frontend-Arbeit einbringe.</p>
          </div>

          <div className="note-grid">
            {profileNotes.map((note) => (
              <article key={note.id} className="card">
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </div>

          <div className="hero-actions mt-8">
            <Link className="button-primary" href="/about">Zur Seite Über mich</Link>
            <Link className="button-secondary" href="/contact">Kontakt</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
