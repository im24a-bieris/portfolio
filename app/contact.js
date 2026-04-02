export default function Contact() {
  return (
    <main>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h1>Kontakt</h1>
            <p className="mt-4">
              Hast du ein Projekt oder eine Frage? Schreib mir gerne. Ich antworte in der Regel innerhalb von 24 Stunden.
            </p>

            <div className="contact-cards mt-8">
              <div className="card contact-card">
                <h3>E-Mail</h3>
                <a className="button-text" href="mailto:samuelbieri343@gmail.com">samuelbieri343@gmail.com</a>
              </div>
              <div className="card contact-card">
                <h3>Telefon</h3>
                <a className="button-text" href="tel:+41775060634">+41 77 506 06 34</a>
              </div>
              <div className="card contact-card">
                <h3>Standort</h3>
                <p>Basel, Schweiz</p>
              </div>
            </div>
          </div>

          <form className="card contact-form">
            <div className="form-grid">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">E-Mail</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            <div>
              <label htmlFor="subject">Betreff</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div>
              <label htmlFor="message">Nachricht</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>

            <button type="submit" className="button-primary">
              Senden
            </button>
            <p style={{ fontSize: "14px", marginTop: "12px" }}>
              Hinweis: Das Formular ist aktuell als UI vorbereitet. Versand kann als nächsten Schritt mit Formspree oder einer Next.js API Route aktiviert werden.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

