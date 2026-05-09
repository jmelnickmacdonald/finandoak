export default function FindUs() {
  return (
    <>
      {/* HERO */}
      <section className="section section-cream" style={{ paddingTop: "5rem", paddingBottom: "3rem", textAlign: "center" }}>
        <div className="container">
          <div className="hero-eyebrow">Find Us</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5.5vw, 3.5rem)", maxWidth: "22ch", margin: "0 auto" }}>
            A small wooden stand <em>at the edge of the property.</em>
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
          <p style={{ marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            We bake out of the Annapolis Valley, Nova Scotia &mdash; in Meadowvale,
            just down the road from Greenwood. Smack dab in the middle of apple
            and farm country &mdash; the kind of place where you can drive five minutes
            and pass half a dozen hay bales, a few barn cats, and some sheep
            before you&rsquo;ll pass half as many humans. We bake from our small
            kitchen and sell our treats from our little farm stand on the property.
          </p>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.75rem",
            color: "var(--coastal-blue)",
            fontWeight: 500,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}>
            The farm stand.
          </h2>
          <p style={{ marginBottom: "1.25rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            A small wooden stand at the edge of the Raven House property, run on
            the honour system when no one&rsquo;s there. Cream signage, hand-lettered
            when possible. A small chalkboard for what&rsquo;s fresh that day.
          </p>
          <p style={{ marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            The farm stand isn&rsquo;t an outpost. It&rsquo;s the bakery.
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
            <a href="mailto:hello@finoakbarkbakery.com" style={{ color: "var(--coastal-blue)", borderBottom: "1px solid var(--coastal-blue)" }}>
              hello@finoakbarkbakery.com
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
            fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
            fontWeight: 500,
            lineHeight: 1.3,
            color: "var(--cream)",
            marginBottom: "1rem",
          }}>
            Small batches. Big messes. Happy critters.
          </h2>
          <div className="hero-script" style={{ color: "var(--caramel-light)", fontSize: "clamp(2rem, 4.5vw, 3rem)", marginBottom: 0 }}>
            What&rsquo;s better than that?
          </div>
        </div>
      </section>
    </>
  );
}
