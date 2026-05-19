import Link from "next/link";

export default function Treats() {
  return (
    <>
      {/* HERO */}
      <section className="section section-cream" style={{ paddingTop: "5rem", paddingBottom: "3rem", textAlign: "center" }}>
        <div className="container">
          <div className="hero-eyebrow">Treats</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 3.25rem)", maxWidth: "20ch", margin: "0 auto 1rem" }}>
            Real ingredients.<br /><em>Spoiled regulars.</em>
          </h1>
          <p className="section-lead">
            Small-batch treats for dogs and cats, made by hand, with ingredients
            we&rsquo;d happily feed our own crew. Given the size of our crew,
            that&rsquo;s a higher bar than it sounds.
          </p>
        </div>
      </section>

      {/* CATEGORIES — cream background, with stamps */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-eyebrow">What we make</div>
          <h2 className="section-title">
            Coming <em>July 2026.</em>
          </h2>

          <div className="pillars">
            <div className="pillar">
              <img src="/dogstamp.png" alt="" className="pillar-stamp" />
              <h3>For Dogs</h3>
              <p>
                Biscuits, training treats, every time you pass them in the
                living room and they stare at you with those sweet little
                puppy dogs eyes... you know, the everyday stuff. (Only
                joking... like all good things, in moderation of course.)
                Baked for dogs whose humans don&rsquo;t cut corners.
              </p>
            </div>
            <div className="pillar">
              <img src="/catstamp.png" alt="" className="pillar-stamp" />
              <h3>For Cats</h3>
              <p>
                Yes, them too. Whether they admit they want them or not.
                These are taking some time to refine because... cats. Before
                long, though, they&rsquo;ll be gracing our shelves and page.
              </p>
            </div>
            <div className="pillar" style={{ opacity: 0.85 }}>
              <img src="/horsestamp.png" alt="" className="pillar-stamp" />
              <h3>For Horses</h3>
              <p>
                Coming soon. We&rsquo;re not stopping there, either. (At
                least that&rsquo;s what the cows, pigs, goats, and chickens
                told us.)
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
          }}>
            Recipes built carefully and thoughtfully. Tested by an extensive
            committee of in-house and on-farm critics.
          </h2>
        </div>
      </section>

      {/* SIGNUP */}
      <section className="section section-cream" style={{ textAlign: "center" }}>
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
            <input type="email" placeholder="your email, please" aria-label="Email address" />
            <button className="btn btn-primary" type="button">Tell Me When</button>
          </div>
        </div>
      </section>
    </>
  );
}
