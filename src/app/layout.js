import "./globals.css";
import { Playfair_Display, Lato } from "next/font/google";
import Link from "next/link";

// ---- Google Fonts: Playfair Display (display serif) + Lato (body sans) ----
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display-loaded",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-body-loaded",
});

export const metadata = {
  title: "Fin & Oak Bark Bakery",
  description:
    "Small batches. Big messes. Happy critters. Handmade pet treats from a mom-and-daughter bakery in the Annapolis Valley, Nova Scotia.",
  metadataBase: new URL("https://finoakbarkbakery.com"),
  openGraph: {
    title: "Fin & Oak Bark Bakery",
    description:
      "Handmade pet treats from a mom-and-daughter bakery in the Annapolis Valley.",
    url: "https://finoakbarkbakery.com",
    siteName: "Fin & Oak Bark Bakery",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        {/* Announcement bar */}
        <div className="announcement">
          Opening July 2026 · Annapolis Valley, Nova Scotia
        </div>

        {/* Header with centered logo */}
        <header className="header">
          <Link href="/" className="header-logo" aria-label="Fin & Oak Bark Bakery — home">
            <img src="/finoak-logo-knockout.png" alt="Fin & Oak Bark Bakery" />
          </Link>
        </header>

        {/* Primary nav */}
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/">Home</Link>
            <Link href="/treats">Treats</Link>
            <Link href="/story">Our Story</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/find-us">Find Us</Link>
          </div>
        </nav>

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-top">
              <div className="footer-script">made by hand.</div>
              <div className="footer-tagline">Small batches. Big messes. Happy critters.</div>
            </div>

            <div className="footer-cols">
              <div className="footer-col">
                <h4>The Bakery</h4>
                <Link href="/treats">Treats</Link>
                <Link href="/story">Our Story</Link>
                <Link href="/journal">Journal</Link>
                <Link href="/find-us">Find Us</Link>
              </div>
              <div className="footer-col">
                <h4>Find Us</h4>
                <p>Meadowvale, NS</p>
                <p>Annapolis Valley</p>
                <p>Nova Scotia, Canada</p>
              </div>
              <div className="footer-col">
                <h4>Say Hello</h4>
                <a href="mailto:hello@finoakbarkbakery.com">hello@finoakbarkbakery.com</a>
              </div>
              <div className="footer-col">
                <h4>Follow Along</h4>
                <a href="https://instagram.com/finoakbarkbakery" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>

            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Fin &amp; Oak Bark Bakery</span>
              <span>Baked in the Annapolis Valley · Made with flour and love</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
