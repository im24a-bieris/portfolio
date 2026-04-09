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
          <div className="container footer-simple">
            <p>&copy; 2026 Samuel</p>
            <div className="footer-inline-links">
              <a href="https://github.com/im24a-bieris" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.instagram.com/samuel_b_zh" target="_blank" rel="noreferrer">Instagram</a>
              <a href="mailto:samuelbieri343@gmail.com">E-Mail</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
