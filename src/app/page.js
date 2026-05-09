import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ============ HERO — photo with text overlay ============ */}
      <section style={{
        position: "relative",
        width: "100%",
        minHeight: "clamp(520px, 75vh, 780px)",
        backgroundImage: "url('/finandoakhero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "var(--soft-ink)",
        overflow: "hidden",
      }}>
        {/* Dark gradient overlay — bottom of photo darkens for text readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(26,26,26,0) 35%, rgba(26,26,26,0.55) 70%, rgba(26,26,26,0.85) 100%)",
          pointerEvents: "none",
        }} aria-hidden="true" />

        {/* Hero content — sits at the bottom of the photo */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "clamp(2rem, 6vw, 4rem) var(--gutter)",
          textAlign: "center",
          color: "var(--cream)",
        }}>
          <div style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--caramel-light)",
            marginBottom: "1rem",
          }}>
            Opening July 2026
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(2rem, 5.5vw, 3.5rem)",
            lineHeight: 1.15,
            color: "var(--cream)",
            margin: "0 auto 0.5rem",
            maxWidth: "20ch",
            textShadow: "0 2px 16px rgba(0,0,0,0.4)",
          }}>
            Small batches. Big messes. Happy critters.
          </h1>

          <div style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(2.25rem, 6vw, 4rem)",
            color: "var(--caramel-light)",
            lineHeight: 1,
            marginBottom: "0.5rem",
            fontFeatureSettings: '"liga" 1, "dlig" 1, "clig" 1',
            textShadow: "0 2px 16px rgba(0,0,0,0.4)",
          }}>
            What&rsquo;s better than that?
          </div>
        </div>
      </section>

      {/* ============ SUB / EMAIL SIGNUP — clean cream section under photo ============ */}
      <section className="section section-cream" style={{ paddingTop: "clamp(3rem, 6vw, 4rem)", paddingBottom: "clamp(2.5rem, 5vw, 3.5rem)", textAlign: "center" }}>
        <div className="content">
          <p className="hero-sub" style={{ marginBottom: "2rem" }}>
            Handmade treats for dogs and cats from a mom-and-daughter bakery
            in the heart of the Annapolis Valley. Real ingredients. Spoiled regulars.
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

      {/* ============ DIVIDER ============ */}
      <div className="rule-ear" aria-hidden="true">
        <span></span>
        <img src="/ears/ear-03.svg" alt="" />
        <span></span>
      </div>

      {/* ============ ABOUT — three pillars ============ */}
      <section className="section section-cream">
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
      <section className="section section-warm">
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
