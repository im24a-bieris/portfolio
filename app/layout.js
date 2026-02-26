import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <nav>
          <div className="container">
            <a href="/" className="logo">Samuel</a>
            <div className="links">
              <a href="/">Home</a>
              <a href="/about">Über mich</a>
              <a href="/contact">Kontakt</a>
            </div>
          </div>
        </nav>

        {children}

        <footer>
          <div className="container">
            <div>
              <h4>Navigation</h4>
              <a href="/">Home</a>
              <a href="/about">Über mich</a>
              <a href="/contact">Kontakt</a>
            </div>
            <div>
              <h4>Links</h4>
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
            <div>
              <h4>Kontakt</h4>
              <a href="mailto:info@example.com">info@example.com</a>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>+41 XX XXX XX XX</p>
            </div>
          </div>
          <div className="container footer-bottom">
            <p>&copy; 2026 Samuel. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}