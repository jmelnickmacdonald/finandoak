import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* PANORAMA */}
      <section style={{ width: "100%" }}>
        <img
          src="/finandoakcollagehero.png"
          alt="Fin and Oak — moments from the household"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      {/* HERO */}
      <section style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "clamp(3rem, 6vw, 5rem) var(--gutter) clamp(3.5rem, 7vw, 5.5rem)",
        textAlign: "center",
      }}>
        {/* Eyebrow */}
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

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
          lineHeight: 1.3,
          color: "var(--soft-ink)",
          letterSpacing: "-0.005em",
          marginBottom: "1.5rem",
        }}>
          Small batches. Big messes. Happy critters.
        </h1>

        {/* Sub-line — widened, just the descriptive sentence */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "clamp(1.15rem, 1.5vw, 1.3rem)",
          lineHeight: 1.65,
          color: "var(--muted-ink)",
          maxWidth: "52ch",
          margin: "0 auto 2rem",
        }}>
          Handmade treats for dogs and cats from a mom-and-daughter bakery in
          the heart of the Annapolis Valley.
        </p>

        {/* Tagline — matches the headline style, slightly smaller */}
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
          lineHeight: 1.3,
          color: "var(--soft-ink)",
          letterSpacing: "-0.005em",
          marginBottom: "2.5rem",
        }}>
          Real ingredients. Spoiled regulars.
        </h2>

        {/* Signature image */}
        <div style={{
          maxWidth: "240px",
          margin: "0 auto 3rem",
        }}>
          <img
            src="/willow-and-mom.png"
            alt="— Willow & Mom"
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

      {/* THREE PILLARS */}
      <section className="section section-warm">
        <div className="container">
          <div className="section-eyebrow">What this brand is about</div>
          <h2 className="section-title">
            Three things, <em>in this order.</em>
          </h2>

          <div className="pillars">
            <div className="pillar">
              <img src="/ears/ear-01.svg" alt="" className="pillar-ear" />
              <h3>Made by hand, in a real kitchen.</h3>
              <p>
                Not a factory and not a co-packer. An actual kitchen, in an
                actual house (ours to be specific) in Meadowvale, Nova Scotia.
              </p>
            </div>
            <div className="pillar">
              <img src="/ears/ear-07.svg" alt="" className="pillar-ear" />
              <h3>Tested by a thorough and committed team of testers.</h3>
              <p>
                Two dogs, six cats, and a few chickens &mdash; who may not be the
                best judge of character (they&rsquo;ve been known to root through
                horse poop given the opportunity), but they are enthusiastic
                regardless.
              </p>
            </div>
            <div className="pillar">
              <img src="/ears/ear-12.svg" alt="" className="pillar-ear" />
              <h3>You&rsquo;ll know what&rsquo;s in it.</h3>
              <p>
                Every ingredient on the package and every reason why it&rsquo;s
                in there in the first place.
              </p>
            </div>
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
