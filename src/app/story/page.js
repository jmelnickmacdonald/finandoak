export default function Story() {
  return (
    <>
      {/* HERO */}
      <section className="section section-cream" style={{ paddingTop: "5rem", paddingBottom: "3rem", textAlign: "center" }}>
        <div className="container">
          <div className="hero-eyebrow">Our Story</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5.5vw, 3.5rem)", maxWidth: "20ch", margin: "0 auto" }}>
            How a kitchen-counter idea <em>became a bakery.</em>
          </h1>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="rule-ear" aria-hidden="true">
        <span></span>
        <img src="/ears/ear-08.svg" alt="" />
        <span></span>
      </div>

      {/* OUR STORY — main copy */}
      <section className="section section-cream" style={{ paddingTop: 0 }}>
        <div className="content">
          <p style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1.5rem",
            lineHeight: 1.5,
            color: "var(--soft-ink)",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}>
            Most good ideas in this family start at the kitchen counter.{" "}
            <span style={{ color: "var(--coastal-blue)" }}>This one took a few years to leave it.</span>
          </p>

          <p style={{ marginBottom: "1.25rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Mom and Willow have been talking about a pet treat business since
            Willow was six. They&rsquo;d float ideas, sketch out names, get a little
            serious about it, and then dinner would happen &mdash; or homework, or one
            of the cats would knock something over, or it would be bedtime, or
            someone would need a snack, or life would just keep lifeing. The
            conversation would get shelved until the next round.
          </p>

          <p style={{ marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Well, life be darned. We&rsquo;re doing this now. Partly because at eleven,
            Willow is pretty darn awesome and self-sufficient &mdash; I can confidently
            trust she won&rsquo;t lose a finger to the mixer without me in the room.
            Just don&rsquo;t give the kid a grapefruit knife. But that&rsquo;s a story for
            another day.
          </p>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.75rem",
            color: "var(--coastal-blue)",
            fontWeight: 500,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}>
            Willow&rsquo;s team.
          </h2>

          <p style={{ marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Fin &amp; Oak Bark Bakery is officially Willow&rsquo;s gig. Mom is her partner
            on the build &mdash; on ovens, on anything that requires a credit card, and
            on the parts that require grown-up expertise (just don&rsquo;t tell her that,
            she&rsquo;ll say otherwise). Her siblings are the rest of the team:
            assembly line, taste-testers, official second opinions, frequent
            dissenters. Dad has, on more than one occasion, taste-tested the
            inventory before remembering what it&rsquo;s for. The animals supervise.
          </p>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.75rem",
            color: "var(--coastal-blue)",
            fontWeight: 500,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}>
            About the name.
          </h2>

          <p style={{ marginBottom: "1.25rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Fin was Mom and Dad&rsquo;s first baby &mdash; the dog they brought every one of
            the kids home to. By the time Willow arrived he&rsquo;d already taken on the
            role of senior household manager. She loved him fiercely her whole
            life, the way he loved her &mdash; patiently, steadily, always nearby. He
            passed peacefully this past spring, just shy of thirteen years old.
          </p>

          <p style={{ marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Oak came along a few years after Fin and learned the job from him.
            He&rsquo;s the easiest-going creature in the house &mdash; the dog who lives to
            sunbathe on the deck, who lets the chaos happen around him, who has
            never had a complicated day in his life. He&rsquo;s still on duty, mostly
            by being present. We named the bakery for both of them because
            they&rsquo;re the dogs who taught this family what a dog could be.
          </p>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.75rem",
            color: "var(--coastal-blue)",
            fontWeight: 500,
            marginTop: "3rem",
            marginBottom: "1.25rem",
          }}>
            About Piper.
          </h2>

          <p style={{ marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Piper came after the name was settled. She&rsquo;s the youngest, and a
            study in contradictions &mdash; afraid of her own shadow most of the time,
            but ready to take on the world the moment somebody looks sideways at
            one of the kids. The whole farm loves her. The chickens, the cats,
            every creature here has, at some point, curled up next to Piper.
            (Except the geese. The geese don&rsquo;t like anyone.) She is Willow&rsquo;s
            girl, through and through. Most of her best habits are Willow&rsquo;s.
            Most of her worst habits are Willow&rsquo;s too.
          </p>
        </div>
      </section>

      {/* WHO WE ARE — three pillars */}
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
              <p>Nothing weird, nothing we can&rsquo;t pronounce.</p>
            </div>
            <div className="pillar">
              <img src="/ears/ear-07.svg" alt="" className="pillar-ear" />
              <h3>Real people.</h3>
              <p>Willow runs the show. The household runs the chaos.</p>
            </div>
            <div className="pillar">
              <img src="/ears/ear-12.svg" alt="" className="pillar-ear" />
              <h3>Real reasons.</h3>
              <p>You already know.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="section section-cream" style={{ textAlign: "center", paddingTop: "2rem" }}>
        <div className="content">
          <p style={{
            fontFamily: "var(--font-script)",
            fontSize: "2.75rem",
            color: "var(--coastal-blue)",
            lineHeight: 1,
            fontFeatureSettings: '"liga" 1, "dlig" 1, "clig" 1',
          }}>
            &mdash; Willow &amp; Mom
          </p>
        </div>
      </section>
    </>
  );
}
