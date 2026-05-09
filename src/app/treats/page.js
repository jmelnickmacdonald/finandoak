import Link from "next/link";

export default function Treats() {
  return (
    <>
      {/* HERO */}
      <section className="section section-cream" style={{ paddingTop: "5rem", paddingBottom: "3rem", textAlign: "center" }}>
        <div className="container">
          <div className="hero-eyebrow">Treats</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 3.25rem)", maxWidth: "20ch", margin: "0 auto 1rem" }}>
            Real ingredients. <em>Spoiled regulars.</em>
          </h1>
          <p className="section-lead">
            Small-batch treats for dogs and cats, made by hand, with ingredients we&rsquo;d
            happily feed our own crew. Given the size of our crew, that&rsquo;s a higher
            bar than it sounds.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="rule-ear" aria-hidden="true">
        <span></span>
        <img src="/ears/ear-05.svg" alt="" />
        <span></span>
      </div>

      {/* CATEGORIES PREVIEW */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-eyebrow">What we make</div>
          <h2 className="section-title" style={{ marginBottom: "3rem" }}>
            Coming July 2026.
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
            maxWidth: "64rem",
            margin: "0 auto",
          }}>
            <div style={{
              background: "var(--cream-warm)",
              padding: "2.5rem 2rem",
              borderRadius: "8px",
              textAlign: "center",
            }}>
              <img src="/ears/ear-02.svg" alt="" style={{ width: "48px", height: "48px", margin: "0 auto 1rem", opacity: 0.85 }} />
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--coastal-blue)", marginBottom: "0.75rem" }}>
                For Dogs
              </h3>
              <p style={{ color: "var(--muted-ink)", fontSize: "0.95rem" }}>
                Biscuits, training treats, the everyday stuff &mdash; baked for dogs
                whose people don&rsquo;t cut corners.
              </p>
            </div>

            <div style={{
              background: "var(--cream-warm)",
              padding: "2.5rem 2rem",
              borderRadius: "8px",
              textAlign: "center",
            }}>
              <img src="/ears/ear-09.svg" alt="" style={{ width: "48px", height: "48px", margin: "0 auto 1rem", opacity: 0.85 }} />
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--coastal-blue)", marginBottom: "0.75rem" }}>
                For Cats
              </h3>
              <p style={{ color: "var(--muted-ink)", fontSize: "0.95rem" }}>
                Yes, them too. Whether they admit they want them or not.
              </p>
            </div>

            <div style={{
              background: "var(--cream-warm)",
              padding: "2.5rem 2rem",
              borderRadius: "8px",
              textAlign: "center",
              opacity: 0.7,
            }}>
              <img src="/ears/ear-14.svg" alt="" style={{ width: "48px", height: "48px", margin: "0 auto 1rem", opacity: 0.85 }} />
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--coastal-blue)", marginBottom: "0.75rem" }}>
                For Horses
              </h3>
              <p style={{ color: "var(--muted-ink)", fontSize: "0.95rem" }}>
                Coming soon. We&rsquo;re not stopping there, either.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAGE BANNER */}
      <section className="section section-sage" style={{ textAlign: "center" }}>
        <div className="content">
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 500,
            lineHeight: 1.5,
            color: "var(--soft-ink)",
            marginBottom: "1.5rem",
          }}>
            Recipes built carefully and thoughtfully.
            Tested by an extensive committee of in-house critics.
          </h2>
          <p style={{ color: "var(--soft-ink)", opacity: 0.8, fontSize: "0.95rem" }}>
            Three dogs, six cats, several chickens with strong opinions.
          </p>
        </div>
      </section>

      {/* SIGNUP CTA */}
      <section className="section section-cream" style={{ textAlign: "center" }}>
        <div className="content">
          <div className="section-eyebrow">First in line</div>
          <h2 className="section-title">
            Want to <em>know</em> when treats are ready?
          </h2>
          <p className="section-lead">
            Drop your email and you&rsquo;ll be among the first to hear when the bakery opens
            in July 2026. No spam. We promise.
          </p>
          <div className="signup">
            <input type="email" placeholder="your email, please" aria-label="Email address" />
            <button className="btn btn-primary" type="button">Tell Me When</button>
          </div>
        </div>
      </section>
    </>
  );
}
