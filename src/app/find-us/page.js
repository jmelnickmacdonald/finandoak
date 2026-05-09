import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ============ PANORAMA — full-width editorial band ============ */}
      <section style={{ width: "100%", marginTop: "0.5rem" }}>
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
          Small batches. Big <span style={{ color: "var(--coastal-blue)" }}>messes.</span> Happy critters.
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
            transition: "background 0.2s ease",
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

      {/* ============ ABOUT — three pillars ============ */}
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

      {/* ============ STORY PREVIEW ============ */}
      <section className="section section-cream">
        <div className="content">
          <div className="section-eyebrow" style={{ textAlign: "left" }}>
            Our Story
          </div>
          <h2 className="section-title" style={{ textAlign: "left" }}>
            Most good ideas in this family <em>start at the kitchen counter.</em>
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.25rem", color: "var(--soft-ink)" }}>
            Mom and Willow have been talking about a pet treat business since
            Willow was six. Five years of kitchen-counter conversations have a
            way of becoming a plan.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2rem", color: "var(--soft-ink)" }}>
            Fin &amp; Oak Bark Bakery is officially Willow&rsquo;s gig. Mom is her
            partner on the build. The household &mdash; three dogs, six cats, a whole
            farmyard &mdash; supervises.
          </p>
          <Link href="/story" className="btn btn-outline">
            Read the whole story
          </Link>
        </div>
      </section>

      {/* ============ TAGLINE BANNER ============ */}
      <section className="section section-blue">
        <div className="content" style={{ textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 500,
            lineHeight: 1.3,
            color: "var(--cream)",
            marginBottom: "1.5rem",
          }}>
            &ldquo;You said &lsquo;just one treat.&rsquo;<br />
            We both know you&rsquo;re lying.&rdquo;
          </h2>
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--caramel-light)",
            fontWeight: 700,
          }}>
            For everyone with paws on the table
          </div>
        </div>
      </section>

      {/* ============ FIND US ============ */}
      <section className="section section-cream">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">Find Us</div>
          <h2 className="section-title">
            Baked in the <em>Raven House Kitchen.</em>
          </h2>
          <p className="section-lead">
            We sell our treats from a little farm stand on the property
            in Meadowvale, Nova Scotia &mdash; just down the road from Greenwood,
            in the heart of the Annapolis Valley.
          </p>
          <Link href="/find-us" className="btn btn-primary">
            Visit the farm stand
          </Link>
        </div>
      </section>
    </>
  );
}
