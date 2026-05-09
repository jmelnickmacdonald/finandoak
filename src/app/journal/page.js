export default function Journal() {
  return (
    <>
      {/* HERO */}
      <section className="section section-cream" style={{ paddingTop: "5rem", paddingBottom: "3rem", textAlign: "center" }}>
        <div className="container">
          <div className="hero-eyebrow">Journal</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 3.25rem)", maxWidth: "20ch", margin: "0 auto 1rem" }}>
            Notes from the <em>kitchen.</em>
          </h1>
          <p className="section-lead">
            Behind-the-scenes from the bakery, the household, the dogs, and the
            occasional chicken with strong opinions.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="rule-ear" aria-hidden="true">
        <span></span>
        <img src="/ears/ear-04.svg" alt="" />
        <span></span>
      </div>

      {/* PLACEHOLDER */}
      <section className="section section-cream" style={{ textAlign: "center", paddingTop: 0 }}>
        <div className="content">
          <p style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1.4rem",
            color: "var(--muted-ink)",
            marginBottom: "2.5rem",
            lineHeight: 1.5,
          }}>
            The journal will live here. We&rsquo;re writing the first few posts now &mdash;
            an intro, a tribute to Fin, a few recipes, a tour of the farm.
          </p>
          <p style={{ color: "var(--muted-ink)", marginBottom: "2rem" }}>
            Want them in your inbox when they&rsquo;re ready?
          </p>
          <div className="signup">
            <input type="email" placeholder="your email, please" aria-label="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </div>
      </section>

      {/* QUIET PROMISE */}
      <section className="section section-sage" style={{ textAlign: "center" }}>
        <div className="content">
          <p style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1.25rem",
            color: "var(--soft-ink)",
            lineHeight: 1.5,
            marginBottom: "0.75rem",
          }}>
            Notes only when we have something worth saying.
          </p>
          <p style={{ color: "var(--soft-ink)", opacity: 0.75, fontSize: "0.95rem" }}>
            Once a month, maybe less. Never more.
          </p>
        </div>
      </section>
    </>
  );
}
