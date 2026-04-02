import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Samuel Portfolio",
  description: "Portfolio von Samuel - Webentwicklung mit Fokus auf klare, performante und moderne Websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <nav>
          <div className="container">
            <Link href="/" className="logo">Samuel</Link>
            <div className="links">
              <Link href="/">Home</Link>
              <Link href="/about">Über mich</Link>
              <Link href="/contact">Kontakt</Link>
            </div>
          </div>
        </nav>

        {children}

        <footer>
          <div className="container">
            <div>
              <h4>Navigation</h4>
              <Link href="/">Home</Link>
              <Link href="/about">Über mich</Link>
              <Link href="/contact">Kontakt</Link>
            </div>
            <div>
              <h4>Links</h4>
              <a href="https://github.com/im24a-bieris" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.instagram.com/samuel_b_zh" target="_blank" rel="noreferrer">Instagram</a>
            </div>
            <div>
              <h4>Kontakt</h4>
              <a href="mailto:samuelbieri343@gmail.com">samuelbieri343@gmail.com</a>
              <a href="tel:+41775060634">+41 77 506 06 34</a>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>Basel, Schweiz</p>
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

