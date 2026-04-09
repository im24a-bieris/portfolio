export default function Contact() {
  const contactDetails = [
    {
      id: 1,
      title: "E-Mail",
      content: "samuelbieri343@gmail.com",
      href: "mailto:samuelbieri343@gmail.com",
    },
    {
      id: 2,
      title: "Telefon",
      content: "+41 77 506 06 34",
      href: "tel:+41775060634",
    },
    {
      id: 3,
      title: "Standort",
      content: "Zürich, Schweiz",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Kurz melden",
      text: "Schreib mir einfach kurz, worum es geht. Ein paar Sätze reichen völlig aus.",
    },
    {
      id: 2,
      title: "Rückmeldung erhalten",
      text: "Ich melde mich in der Regel innerhalb von 24 Stunden mit einer ersten Einschätzung.",
    },
    {
      id: 3,
      title: "Nächsten Schritt planen",
      text: "Danach klären wir Timing, Umfang und ob ein kurzes Kennenlerngespräch sinnvoll ist.",
    },
  ];

  return (
    <main>
      <section className="section" style={{ paddingTop: "64px" }}>
        <div className="container contact-layout">
          <div className="contact-info">
            <div className="hero-panel">
              <small className="hero-kicker">Kontakt</small>
              <h1>Lass uns einfach austauschen.</h1>
              <p>
                Wenn du Fragen hast oder mir etwas mitteilen möchtest, kannst du mir direkt schreiben. Wenn dir noch
                Infos fehlen, ist das ebenfalls okay - wir können mit einer groben Idee starten.
              </p>

              <ul className="contact-list">
                <li>Themen: Portfolio, Design, Frontend und allgemeiner Austausch</li>
                <li>Bevorzugte Sprache: Deutsch</li>
                <li>Weitere Details wie Budget oder Deadline: aktuell Platzhalter, nach Bedarf ergänzen</li>
              </ul>
            </div>

            <div className="contact-cards mt-8">
              {contactDetails.map((detail) => (
                <div key={detail.id} className="card plain-card contact-card">
                  <h3>{detail.title}</h3>
                  {detail.href ? (
                    <a className="button-text" href={detail.href}>{detail.content}</a>
                  ) : (
                    <p>{detail.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <small className="hero-kicker">Direkter Kontakt</small>
            <h2>Am einfachsten erreichst du mich per Mail oder Telefon.</h2>
            <p>
              Wenn du mir schreibst, kannst du einfach kurz sagen, worum es geht. Falls noch nicht alles feststeht,
              ist das völlig okay.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>So läuft der Kontakt ab</h2>
            <p>Damit du sofort weißt, was nach deiner Nachricht passiert.</p>
          </div>

          <div className="timeline">
            {steps.map((step) => (
              <article key={step.id} className="timeline-item">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
