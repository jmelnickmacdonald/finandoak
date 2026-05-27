import "./globals.css";
import { Playfair_Display, Lato } from "next/font/google";
import Link from "next/link";
import Script from "next/script";

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
              alignItems: "center",
              flexWrap: "wrap",
              gap: 0,
            }}>
              <Link href="/" style={navLinkStyle}>Home</Link>
              <Link href="/treats" style={navLinkStyle}>Treats</Link>
              <Link href="/story" style={navLinkStyle}>Our Story</Link>
              <Link href="/journal" style={navLinkStyle}>Journal</Link>
              <Link href="/find-us" style={navLinkStyle}>Find Us</Link>
              <Link href="/ravenhouse" style={navLinkStyle}>Raven House</Link>
              <button
                className="snipcart-checkout nav-cart-button"
                aria-label="Open cart"
                style={navCartButtonStyle}
              >
                Cart
                <span
                  className="snipcart-items-count nav-cart-count"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </nav>
        </header>

        <main style={{ marginTop: 0 }}>{children}</main>

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-top">
              <div style={{
                maxWidth: "320px",
                margin: "0 auto 1rem",
              }}>
                <img
                  src="/madebyhand.png"
                  alt="Made by hand"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
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

        {/* ===== SNIPCART CART MOUNT ===== */}
        {/* The hidden #snipcart div is where Snipcart renders its UI. */}
        <div hidden id="snipcart" data-api-key="NjBmZjcyOWUtZGQ0Ny00NzA0LWI5MDUtMTgwOGE3ZGY1NzcxNjM5MTU1MjExOTkzMzE4MzM1"></div>

        {/* ===== SNIPCART LOADER ===== */}
        {/* Settings: CAD currency, side-drawer cart, lazy-load on user interaction.
            Pinned to v3.7.1 so future Snipcart updates can't break our styling. */}
        <Script id="snipcart-settings" strategy="afterInteractive">
          {`
            window.SnipcartSettings = {
              publicApiKey: "NjBmZjcyOWUtZGQ0Ny00NzA0LWI5MDUtMTgwOGE3ZGY1NzcxNjM5MTU1MjExOTkzMzE4MzM1",
              loadStrategy: "on-user-interaction",
              currency: "cad",
              modalStyle: "side",
              version: "3.7.1"
            };
            (()=>{var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var f=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,m=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(m.forEach(t=>document.addEventListener(t,o)),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],e=document.querySelector("#snipcart"),i=document.querySelector(\`src[src^="\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}"][src$="snipcart.js"]\`),n=document.querySelector(\`link[href^="\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}"][href$="snipcart.css"]\`);e||(e=document.createElement("div"),e.id="snipcart",e.setAttribute("hidden","true"),document.body.appendChild(e)),v(e),i||(i=document.createElement("script"),i.src=\`\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}/themes/v\${window.SnipcartSettings.version}/default/snipcart.js\`,i.async=!0,t.appendChild(i)),n||(n=document.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=\`\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}/themes/v\${window.SnipcartSettings.version}/default/snipcart.css\`,t.prepend(n)),m.forEach(g=>document.removeEventListener(g,o))}function v(t){!f||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
          `}
        </Script>
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

const navCartButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "1rem 1.5rem",
  fontSize: "0.78rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  fontWeight: 400,
  color: "var(--cream)",
  background: "transparent",
  border: "none",
  borderLeft: "1px solid rgba(255, 253, 249, 0.18)",
  cursor: "pointer",
  fontFamily: "inherit",
  transition: "color 0.2s ease",
};
