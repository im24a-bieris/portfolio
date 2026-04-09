const skills = [
  {
    id: 1,
    title: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 2,
    title: "Design",
    items: ["UI/UX", "Responsive Design", "Wireframing", "Design Systems"],
  },
  {
    id: 3,
    title: "Tools",
    items: ["Git", "VS Code", "Node.js", "Figma", "Vercel"],
  },
];

const profileNotes = [
  {
    id: 1,
    title: "Mein Fokus",
    text: "Websites, die ruhig, modern und vertrauenswürdig wirken und auf Mobile genauso sauber funktionieren wie auf Desktop.",
  },
  {
    id: 2,
    title: "So denke ich",
    text: "Design und Code gehören für mich zusammen. Eine gute Seite soll nicht nur schön aussehen, sondern sich klar und logisch anfühlen.",
  },
  {
      id: 3,
      title: "Platzhalter für Story",
      text: "Hier kannst du später kurz erzählen, wie du zur Webentwicklung gekommen bist oder was dich an Gestaltung reizt.",
  },
];

export default function About() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "64px" }}>
        <div className="container">
          <div className="about-intro hero-panel">
            <small className="hero-kicker">Über mich</small>
            <h1>Ich entwickle klare digitale Auftritte mit Sinn für Struktur.</h1>
            <p>
              Ich bin Samuel, Frontend-Entwickler mit Fokus auf moderne Websites, die schnell laden, klar strukturiert sind
              und auf jedem Gerät sauber funktionieren.
            </p>
            <p>
              Mein Schwerpunkt liegt auf der Verbindung von Design und Technik: gute Nutzerführung, wartbarer Code und
              ein Ergebnis, das nicht nur gut aussieht, sondern auch langfristig nachvollziehbar bleibt.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="note-grid">
            {profileNotes.map((note) => (
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
          <div className="section-heading">
            <h2>Fähigkeiten</h2>
            <p>Tools und Technologien, mit denen ich täglich arbeite.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article key={skill.id} className="card">
                <h3>{skill.title}</h3>
                <ul className="skill-list">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>So arbeite ich</h2>
            <p>Klare Abläufe für eine ruhige und nachvollziehbare Arbeitsweise.</p>
          </div>

          <div className="project-grid">
            <div className="card">
              <span className="card-badge">01 Analyse</span>
              <h3>Ziele verstehen</h3>
              <p>Wir definieren gemeinsam Anforderungen, Zielgruppe und Prioritäten.</p>
            </div>
            <div className="card">
              <span className="card-badge">02 Umsetzung</span>
              <h3>Sauber entwickeln</h3>
              <p>Ich baue eine performante Lösung mit wartbarer Struktur und klarem Design.</p>
            </div>
            <div className="card">
              <span className="card-badge">03 Launch</span>
              <h3>Live stellen</h3>
              <p>Deployment, letzte Tests und Übergabe mit Fokus auf Stabilität und Nachvollziehbarkeit.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
