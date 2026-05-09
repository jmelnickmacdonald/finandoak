import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ============ PANORAMA — full-width editorial band ============ */}
      <section style={{ width: "100%" }}>
        <img
          src="/finandoakcollagehero.png"
          alt="Fin and Oak — moments from the household"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      {/* ============ HERO TYPE — sits below the panorama ============ */}
      <section style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "clamp(3rem, 6vw, 5rem) var(--gutter) clamp(4rem, 8vw, 6rem)",
        textAlign: "center",
      }}>
        {/* Eyebrow with rules on both sides */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.85rem",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--caramel)",
          marginBottom: "1.5rem",
        }}>
          <span style={{ width: "36px", height: "1.5px", background: "var(--caramel)" }}></span>
          Fin &amp; Oak Bark Bakery
          <span style={{ width: "36px", height: "1.5px", background: "var(--caramel)" }}></span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)",
          lineHeight: 0.98,
          color: "var(--soft-ink)",
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
          maxWidth: "18ch",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          Small batches. Big messes. Happy critters.
        </h1>

        <div style={{
          fontFamily: "var(--font-script)",
          fontFeatureSettings: '"liga" 1, "dlig" 1, "clig" 1',
          fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
          color: "var(--caramel)",
          lineHeight: 1,
          marginBottom: "2.5rem",
        }}>
          What&rsquo;s better than that?
        </div>

        <p style={{
          fontSize: "1.05rem",
          lineHeight: 1.65,
          color: "var(--muted-ink)",
          maxWidth: "38rem",
          margin: "0 auto 2.25rem",
        }}>
          Handmade pet treats from a mom-and-daughter bakery in the heart of the
          Annapolis Valley. Real ingredients. Spoiled regulars.
        </p>

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
          }}>
            Read our story
          </Link>
        </div>
      </section>

      {/* ============ THREE PILLARS ============ */}
      <section className="section section-warm">
        <div className="container">
          <div className="section-eyebrow">What this brand is about</div>
          <h2 className="section-title">
            Three things, <em>in this order.</em>
          </h2>

          <div className="pillars">
            <div className="pillar">
              <img src="/ears/ear-01.svg" alt="" className="pillar-ear" />
              <h3>Real ingredients.</h3>
              <p>
                Nothing weird, nothing we can&rsquo;t pronounce. Recipes built carefully
                and thoughtfully.
              </p>
            </div>
            <div className="pillar">
              <img src="/ears/ear-07.svg" alt="" className="pillar-ear" />
              <h3>Real people.</h3>
              <p>
                A mom-and-daughter operation. Willow runs the show. The household
                runs the chaos.
              </p>
            </div>
            <div className="pillar">
              <img src="/ears/ear-12.svg" alt="" className="pillar-ear" />
              <h3>Real reasons.</h3>
              <p>
                Most of our customers can&rsquo;t say thank you in words, and they
                don&rsquo;t have to &mdash; you already know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SIGNUP CTA ============ */}
      <section id="signup" className="section section-cream" style={{ textAlign: "center" }}>
        <div className="content">
          <div className="section-eyebrow">First in line</div>
          <h2 className="section-title">
            Want to <em>know</em> when treats are ready?
          </h2>
          <p className="section-lead">
            Drop your email and you&rsquo;ll be among the first to hear when the
            bakery opens in July 2026. No spam. We promise.
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
