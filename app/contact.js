export default function Contact() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>Kontakt</h1>
          <p style={{ marginTop: "16px", maxWidth: "600px" }}>
            Hast du ein Projekt oder eine Frage? Schreib mir gerne!
          </p>

          <form style={{ maxWidth: "600px", marginTop: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div>
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div>
              <label htmlFor="message">Nachricht</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="button-primary" style={{ border: "none", cursor: "pointer" }}>
              Senden
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}