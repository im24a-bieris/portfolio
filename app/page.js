import Link from "next/link";

export default function Home() {
  const strengths = [
    {
      id: 1,
      title: "Klares Frontend",
      description: "Ich mag Oberflächen, die ruhig wirken, gut lesbar sind und auf allen Geräten sauber funktionieren.",
    },
    {
      id: 2,
      title: "Saubere Umsetzung",
      description: "Strukturierter Code, verständliche Komponenten und eine Umsetzung, die auch später leicht gepflegt werden kann.",
    },
    {
      id: 3,
      title: "Visuelles Gespür",
      description: "Typografie, Abstände und Hierarchie sind für mich genauso wichtig wie die technische Basis.",
    },
  ];

  const works = [
    {
      id: 1,
      title: "SmashAMeerkat",
      description: "Ein kleines Spielkonzept mit klarer Interaktion, schnellem Feedback und einer einfachen visuellen Sprache.",
      status: "Spielidee",
      stack: ["Java", "Game Logic", "UI"],
      preview: "Spieloberfläche",
      source: "https://github.com/im24a-bieris",
    },
    {
      id: 2,
      title: "Turnverein-VideoWebsite",
      description: "Eine Plattform-Idee für Trainingsvideos mit Beschreibungen, Tipps und besserem Zugang zu Lerninhalten.",
      stack: ["JavaScript", "Konzept", "Frontend"],
      status: "Webkonzept",
      preview: "Video-Plattform",
      source: "https://github.com/im24a-bieris",
    },
  ];

  const notes = [
    {
      id: 1,
      title: "Wie ich arbeite",
      text: "Ich bevorzuge klare Strukturen, nachvollziehbare Entscheidungen und digitale Lösungen, die nicht überladen wirken.",
    },
    {
      id: 2,
      title: "Was mich interessiert",
      text: "Besonders spannend finde ich Frontend-Themen, UI-Gestaltung und die Verbindung von Technik und visueller Qualität.",
    },
    {
      id: 3,
      title: "Mehr über mich",
      text: "Auf der Seite Über mich steht mehr zu meinen Schwerpunkten, meinem Stil und den Themen, die mich besonders reizen.",
    },
  ];

  return (
    <main>
      <section className="section" style={{ paddingTop: "64px" }}>
        <div className="container">
          <div className="hero-panel home-hero">
            <div className="home-hero-copy">
              <h1>Frontend mit Sinn für Klarheit, Struktur und eine ruhige visuelle Sprache.</h1>
              <p>
                Ich bin Samuel und interessiere mich für Webentwicklung mit Fokus auf verständliche Interfaces, saubere
                Gestaltung und eine Umsetzung, die technisch wie visuell überzeugt.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#works">Arbeiten ansehen</a>
                <Link className="button-secondary" href="/about">Mehr über mich</Link>
              </div>
            </div>

            <div className="home-intro-card">
              <span className="home-intro-label">Samuel Bieri</span>
              <h3>Frontend Development</h3>
              <p>Schwerpunkt auf moderne Websites, klare Nutzerführung und eine Gestaltung, die bewusst reduziert bleibt.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Das sind meine Stärken</h2>
            <p>Die Bereiche, auf die ich mich besonders konzentriere und in denen ich meine Stärke sehe.</p>
          </div>

          <div className="feature-grid home-feature-grid">
            {strengths.map((strength) => (
              <article key={strength.id} className="plain-card home-feature-card">
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="works">
        <div className="container">
          <div className="section-heading">
            <h2>Ausgewählte Arbeiten</h2>
            <p>Ein Einblick in Arbeiten und Konzepte, an denen ich bereits gestaltet oder entwickelt habe.</p>
          </div>

          <div className="project-grid home-project-grid">
            {works.map((work) => (
              <article key={work.id} className="plain-card project-showcase-card">
                <div className="project-showcase-preview">
                  <div className="preview-window">
                    <span className="preview-title">{work.preview}</span>
                    <div className="preview-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>

                {work.status ? <span className="card-badge">{work.status}</span> : null}
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

          <div className="note-grid home-note-grid">
            {notes.map((note) => (
              <article key={note.id} className="plain-card home-note-card">
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
