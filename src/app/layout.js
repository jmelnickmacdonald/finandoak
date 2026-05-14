import "./globals.css";
import { Playfair_Display, Lato } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
  metadataBase: new URL("https://finandoak.ca"),
  openGraph: {
    title: "Fin & Oak Bark Bakery",
    description:
      "Handmade pet treats from a mom-and-daughter bakery in the Annapolis Valley.",
    url: "https://finandoak.ca",
    siteName: "Fin & Oak Bark Bakery",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        <div style={{
          background: "transparent",
          padding: "0.65rem var(--gutter)",
          fontSize: "0.7rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--muted-ink)",
          textAlign: "center",
          borderBottom: "1px solid var(--tan-border)",
        }}>
          Opening July 2026 · Annapolis Valley, Nova Scotia
        </div>

        <header className="site-header" style={{ background: "var(--cream)" }}>
          <div style={{
            textAlign: "center",
            padding: "1.5rem var(--gutter)",
          }}>
            <Link
              href="/"
              style={{ display: "inline-block", maxWidth: "260px" }}
              aria-label="Fin & Oak Bark Bakery — home"
            >
              <img
                src="/finandoakbarkbakeryfinal.png"
                alt="Fin & Oak Bark Bakery"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Link>
          </div>

          <nav style={{
            background: "var(--soft-ink)",
            marginBottom: 0,
          }}>
            <div style={{
              maxWidth: "1400px",
              margin: "0 auto",
              padding: "0 var(--gutter)",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 0,
            }}>
              <Link href="/" style={navLinkStyle}>Home</Link>
              <Link href="/treats" style={navLinkStyle}>Treats</Link>
              <Link href="/story" style={navLinkStyle}>Our Story</Link>
              <Link href="/journal" style={navLinkStyle}>Journal</Link>
              <Link href="/find-us" style={navLinkStyle}>Find Us</Link>
              <Link href="/ravenhouse" style={navLinkStyle}>Raven House</Link>
            </div>
          </nav>
        </header>

        <main style={{ marginTop: 0 }}>{children}</main>

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
                <a href="mailto:hello@finandoak.ca">hello@finandoak.ca</a>
              </div>
            </div>

            <div className="footer-venture">
              <Link href="/ravenhouse">a Raven House venture</Link>
            </div>

            <div className="footer-poweredby">
              Powered by The Yellow Front Door
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

const navLinkStyle = {
  display: "block",
  padding: "1rem 1.5rem",
  fontSize: "0.78rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  fontWeight: 400,
  color: "var(--cream)",
  transition: "color 0.2s ease",
};
