import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* PANORAMA HERO */}
      <section style={{ width: "100%" }}>
        <img
          src="/finandoakcollagehero.png"
          alt="Fin and Oak — moments from the household"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      {/* HEADLINE + SIGNATURE — now with watermark behind it */}
      <section className="section section-cream headline-section" style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)", textAlign: "center" }}>
        <div className="container">

          <h1 className="home-headline" style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "var(--soft-ink)",
            margin: "0 auto",
            maxWidth: "18ch",
          }}>
            <span className="home-headline-line">Small batches.</span>
            <span className="home-headline-line" style={{ color: "var(--coastal-blue)" }}>Big messes.</span>
            <span className="home-headline-line">Happy critters.</span>
          </h1>

          <p className="home-headline-sub" style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
            lineHeight: 1.65,
            color: "var(--muted-ink)",
            maxWidth: "48ch",
            margin: "clamp(1.5rem, 3vw, 2rem) auto clamp(3rem, 5vw, 4rem)",
          }}>
            Handmade treats for dogs and cats from a mom-and-daughter bakery in
            the heart of the Annapolis Valley.
          </p>

          <div style={{
            width: "40px",
            height: "1px",
            background: "var(--caramel)",
            opacity: 0.4,
            margin: "0 auto clamp(2.5rem, 4vw, 3.5rem)",
          }} />

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)",
            lineHeight: 1.3,
            color: "var(--soft-ink)",
            marginBottom: "1.25rem",
          }}>
            Real ingredients. Spoiled regulars.
          </h2>

          <div style={{ maxWidth: "340px", margin: "0 auto clamp(2.5rem, 4vw, 3.5rem)" }}>
            <img
              src="/xowillowandmom.png"
              alt="xo, Willow & Mom"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div style={{
            display: "inline-flex",
            gap: "1.5rem",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            <a href="#signup" className="btn btn-primary">
              Tell me when →
            </a>
            <Link href="/story" style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--soft-ink)",
              borderBottom: "1.5px solid var(--soft-ink)",
              paddingBottom: "2px",
            }}>
              Read our story
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container">
          <div className="section-eyebrow">The non-negotiables</div>
          <h2 className="section-title">
            Three things, <em>in this order.</em>
          </h2>

          <div className="pillars">
            <div className="pillar">
              <img src="/dogstamp.png" alt="" className="pillar-stamp" />
              <h3>Made by hand, in a real kitchen.</h3>
              <p>
                Not a factory and not a co-packer. An actual kitchen, in an
                actual house (ours to be specific) in Meadowvale, Nova Scotia.
              </p>
            </div>
            <div className="pillar">
              <img src="/catstamp.png" alt="" className="pillar-stamp" />
              <h3>Tested by a thorough and committed team of testers.</h3>
              <p>
                Two dogs, six cats, and a few chickens &mdash; who may not be the
                best judge of character (they&rsquo;ve been known to root through
                horse poop given the opportunity), but they are enthusiastic
                regardless.
              </p>
            </div>
            <div className="pillar">
              <img src="/horsestamp.png" alt="" className="pillar-stamp" />
              <h3>You&rsquo;ll know what&rsquo;s in it.</h3>
              <p>
                Every ingredient on the package, and every reason why it&rsquo;s
                in there in the first place. No &ldquo;natural flavours,&rdquo;
                no mystery binders, no fine print that needs a magnifying glass.
                If we wouldn&rsquo;t feed it to our own, it doesn&rsquo;t go in.
              </p>
            </div>
          </div>
        </div>
      </section>

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
