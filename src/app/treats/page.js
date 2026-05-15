export default function FindUs() {
  return (
    <>
      {/* HERO */}
      <section className="section section-cream" style={{ paddingTop: "5rem", paddingBottom: "3rem", textAlign: "center" }}>
        <div className="container">
          <div className="hero-eyebrow">Find Us</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5.5vw, 3.5rem)", maxWidth: "22ch", margin: "0 auto" }}>
            Where to <em>find us.</em>
          </h1>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="rule-ear" aria-hidden="true">
        <span></span>
        <img src="/ears/ear-11.svg" alt="" />
        <span></span>
      </div>

      {/* WHERE WE ARE */}
      <section className="section section-cream" style={{ paddingTop: 0 }}>
        <div className="content">
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.75rem",
            color: "var(--coastal-blue)",
            fontWeight: 500,
            marginBottom: "1.25rem",
          }}>
            Where we are.
          </h2>
          <p style={{ marginBottom: "2rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            We bake out of our home in Nova Scotia&rsquo;s beautiful Annapolis Valley.
            To be more specific, we are located in Meadowvale, just a hop, skip and
            a jump away from Greenwood. That basically puts us smack dab in the
            middle of apple and farm country &mdash; the kind of place where you can
            drive five minutes and pass half a dozen hay bales, a few barn cats, and
            some sheep before you&rsquo;ll pass half as many humans.
          </p>

          {/* Farm stand photos */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            margin: "0 0 2rem",
          }}>
            <img
              src="/farmstand1.jpg"
              alt="The farm stand at Raven House"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "2px",
              }}
            />
            <img
              src="/farmstand2.jpg"
              alt="The farm stand at Raven House"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "2px",
              }}
            />
          </div>

          <p style={{ marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            We sell our treats from the cutest little wooden stand (even if I
            do say so myself) nestled at the edge of the Raven House property.
            Our hope is to expand into some local shops come Fall 2026, so stay
            tuned!
          </p>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.75rem",
            color: "var(--coastal-blue)",
            fontWeight: 500,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}>
            Hours.
          </h2>
          <p style={{ marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Opening July 2026. We&rsquo;ll post hours here closer to launch.
          </p>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.75rem",
            color: "var(--coastal-blue)",
            fontWeight: 500,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}>
            Get in touch.
          </h2>
          <p style={{ marginBottom: "0.5rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            For wholesale, custom orders, or just to say hello:
          </p>
          <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
            <a href="mailto:hello@finandoak.ca" style={{ color: "var(--coastal-blue)", borderBottom: "1px solid var(--coastal-blue)" }}>
              hello@finandoak.ca
            </a>
          </p>
        </div>
      </section>

      {/* TAGLINE BANNER */}
      <section className="section section-blue" style={{ textAlign: "center" }}>
        <div className="content">
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 400,
            lineHeight: 1.3,
            color: "var(--cream)",
            margin: 0,
          }}>
            Real ingredients. <em style={{ color: "var(--apple-leaf-light)" }}>Spoiled regulars.</em>
          </h2>
        </div>
      </section>
    </>
  );
}
