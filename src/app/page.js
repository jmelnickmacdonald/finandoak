import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* PANORAMA HERO — unchanged */}
      <section style={{ width: "100%" }}>
        <img
          src="/finandoakcollagehero.png"
          alt="Fin and Oak — moments from the household"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      {/* HEADLINE BLOCK — the dramatic typographic moment */}
      <section style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "clamp(3.5rem, 7vw, 6rem) var(--gutter) clamp(2rem, 4vw, 3rem)",
        textAlign: "center",
      }}>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(2.75rem, 7.5vw, 5.5rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "var(--soft-ink)",
          margin: "0 auto",
          maxWidth: "16ch",
        }}>
          <span style={{ display: "block" }}>Small batches.</span>
          <span style={{ display: "block", color: "var(--coastal-blue)" }}>Big messes.</span>
          <span style={{ display: "block" }}>Happy critters.</span>
        </h1>

        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
          lineHeight: 1.65,
          color: "var(--muted-ink)",
          maxWidth: "48ch",
          margin: "clamp(2rem, 3.5vw, 2.75rem) auto 0",
        }}>
          Handmade treats for dogs and cats from a mom-and-daughter bakery in
          the heart of the Annapolis Valley.
        </p>
      </section>

      {/* SIGNATURE MOMENT — Real ingredients. Spoiled regulars. + xo signoff */}
      <section style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "clamp(2rem, 4vw, 3rem) var(--gutter) clamp(3.5rem, 6vw, 5rem)",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
          lineHeight: 1.3,
          color: "var(--soft-ink)",
          marginBottom: "1.75rem",
        }}>
          Real ingredients. Spoiled regulars.
        </h2>

        <div style={{ maxWidth: "240px", margin: "0 auto 2.5rem" }}>
          <img
            src="/xowillowandmom.png"
            alt="xo, Willow & Mom"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* CTAs */}
        <div style={{
          display: "inline-flex",
          gap: "1.5rem",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          <a href="#signup" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "1rem 1.75rem",
            background: "var(--coastal-blue)",
            color: "var(--cream)",
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            borderRadius: "100px",
            textDecoration: "none",
          }}>
            Tell me when →
          </a>
          <Link href="/story" style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--soft-ink)",
            borderBottom: "1.5px solid var(--soft-ink)",
            paddingBottom: "2px",
            textDecoration: "none",
          }}>
            Read our story
          </Link>
        </div>
      </section>

      {/* SCRIPT TRANSITION — one decorative beat between cream and blue */}
      <div style={{
        textAlign: "center",
        padding: "0 var(--gutter) clamp(2rem, 4vw, 3rem)",
      }}>
        <p style={{
          fontFamily: "var(--font-script), 'Snell Roundhand', 'Apple Chancery', cursive",
          fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
          lineHeight: 1,
          color: "var(--caramel)",
          margin: 0,
          fontWeight: 400,
        }}>
          meanwhile,
        </p>
      </div>

      {/* PILLARS — Coastal Blue, knockout numerals, magazine feel */}
      <section style={{
        background: "var(--coastal-blue)",
        color: "var(--cream)",
        padding: "clamp(4rem, 8vw, 7rem) var(--gutter)",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}>
          <div style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255, 253, 249, 0.65)",
            marginBottom: "1rem",
          }}>
            What this brand is about
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            lineHeight: 1.15,
            color: "var(--cream)",
            marginBottom: "clamp(3rem, 5vw, 4.5rem)",
            letterSpacing: "-0.01em",
          }}>
            Three things, <em style={{ fontStyle: "italic", color: "var(--apple-leaf, #A6B088)" }}>in this order.</em>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "clamp(2.5rem, 4vw, 3.5rem)",
            textAlign: "left",
          }}>
            {[
              {
                num: "01",
                title: "Made by hand, in a real kitchen.",
                body: "Not a factory and not a co-packer. An actual kitchen, in an actual house (ours to be specific) in Meadowvale, Nova Scotia.",
              },
              {
                num: "02",
                title: "Tested by a thorough and committed team of testers.",
                body: "Two dogs, six cats, and a few chickens — who may not be the best judge of character (they've been known to root through horse poop given the opportunity), but they are enthusiastic regardless.",
              },
              {
                num: "03",
                title: "You'll know what's in it.",
                body: "Every ingredient on the package and every reason why it's in there in the first place.",
              },
            ].map((p) => (
              <div key={p.num}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(3rem, 5.5vw, 4.25rem)",
                  lineHeight: 1,
                  color: "var(--apple-leaf, #A6B088)",
                  marginBottom: "1rem",
                }}>
                  {p.num}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "1.25rem",
                  lineHeight: 1.3,
                  color: "var(--cream)",
                  marginBottom: "0.85rem",
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "rgba(255, 253, 249, 0.85)",
                  margin: 0,
                }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="section section-cream" style={{ textAlign: "center" }}>
        <div className="content">
          <div className="section-eyebrow">First in line</div>
          <h2 className="section-title">
            Want to <em>know</em> when treats are ready?
          </h2>
          <p className="section-lead">
            Drop your email and you&rsquo;ll be among the first to hear when the
            bakery opens in July 2026. No spam, we promise!
          </p>
          <div className="signup">
            <input
              type="email"
              placeholder="your email, please"
              aria-label="Email address"
            />
            <button className="btn btn-primary" type="button">
              Tell Me When
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
