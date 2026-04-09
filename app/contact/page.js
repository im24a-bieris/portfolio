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
    {
      id: 4,
      title: "GitHub",
      content: "github.com/im24a-bieris",
      href: "https://github.com/im24a-bieris",
    },
  ];

  return (
    <main>
      <section className="section" style={{ paddingTop: "64px" }}>
        <div className="container contact-layout">
          <div className="contact-info">
            <div className="hero-panel">
              <small className="hero-kicker">Kontakt</small>
              <h1>Ich freue mich über Ihre Nachricht.</h1>
              <p>
                Wenn Sie Fragen zu meinem Portfolio haben oder mit mir in Kontakt treten möchten, erreichen Sie mich am
                einfachsten per E-Mail oder telefonisch.
              </p>
              <p>
                Gerne sende ich bei Bedarf weitere Informationen zu meinen Arbeiten, Interessen und technischen
                Schwerpunkten.
              </p>
            </div>
          </div>

          <div className="contact-cards contact-cards-plain">
            {contactDetails.map((detail) => (
              <div key={detail.id} className="card plain-card contact-card">
                <h3>{detail.title}</h3>
                {detail.href ? (
                  <a className="button-text" href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel={detail.href.startsWith("http") ? "noreferrer" : undefined}>
                    {detail.content}
                  </a>
                ) : (
                  <p>{detail.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
