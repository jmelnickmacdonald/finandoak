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

      {/* OPENING + BODY */}
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

          {/* KEYSTONE PHOTO: Willow + Fin */}
          <figure style={{
            margin: "0 auto 2.5rem",
            maxWidth: "70%",
            textAlign: "center",
          }}>
            <img
              src="/willow-and-fin.jpg"
              alt="Willow as a toddler, leaning against Fin, reading"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "2px" }}
            />
            <figcaption style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "var(--caramel)",
              marginTop: "0.75rem",
            }}>
              Willow &amp; Fin
            </figcaption>
          </figure>

          <p style={{ marginBottom: "1.25rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Julianna and Willow have been talking about a pet treat business since
            Willow was six. They&rsquo;d float ideas, sketch out names, go
            through efforts to craft logos, get a little serious about it, and
            then dinner would happen &mdash; or homework, or a laptop battery
            would die, or it would be bedtime, or someone would need a snack,
            or life would just keep lifeing. The conversation would get shelved
            until the next round.
          </p>

          <p style={{ marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Well, life be darned, it&rsquo;s time! We&rsquo;re doing this now.
            Largely because at eleven, Willow is pretty darn awesome and
            self-sufficient and I can confidently trust she won&rsquo;t lose a
            finger to the mixer without me in the room. Just don&rsquo;t give
            the kid a grapefruit knife. But that&rsquo;s a story for another
            day.
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
            Fin &amp; Oak Bark Bakery is officially Willow&rsquo;s gig. Mom is
            her partner on the build &mdash; on oven timers, on anything that
            requires a credit card, and on the parts that require grown-up
            expertise (just don&rsquo;t tell her that, she&rsquo;ll say
            otherwise). Her siblings are the rest of the team: assembly line,
            taste-testers, official second opinions, and frequent dissenters.
            Dad has, on more than one occasion, taste-tested the inventory
            before remembering what it&rsquo;s for. The animals supervise.
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
            Fin was Mom and Dad&rsquo;s first baby &mdash; the dog they brought
            every one of the kids home to. By the time Willow arrived
            he&rsquo;d already taken on the role of canine household manager.
            She loved him fiercely her whole life, the very same way he loved
            her &mdash; patiently, steadily, and always nearby. He passed
            peacefully this past spring, just shy of thirteen years old. While
            our hearts will always be a bit emptier without him here in person
            to fill the gap, he epitomized what a great dog life looked like.
            And what a great dog looked like, while he was at it. He set a high
            standard here, I tell you.
          </p>

          <figure style={{
            margin: "2rem auto 2.5rem",
            maxWidth: "70%",
            textAlign: "center",
          }}>
            <img
              src="/fin-in-shade.jpg"
              alt="Fin lying in the shade, calm and watching"
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "2px" }}
            />
            <figcaption style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "var(--caramel)",
              marginTop: "0.75rem",
            }}>
              Fin
            </figcaption>
          </figure>

          <p style={{ marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Oak came along a few years after Fin and learned the job from him.
            He&rsquo;s the easiest-going creature in the house &mdash; the dog
            who lives to sunbathe on the deck, who lets the chaos happen
            around him, who has never had a complicated day in his life.
            He&rsquo;s still on duty, mostly by being present. Just don&rsquo;t
            make him use his brain cell as he&rsquo;d rather not. Jokes aside,
            he&rsquo;s an amazing pup as well and we&rsquo;ve been very
            blessed. We named the bakery for both of them because they&rsquo;re
            the dogs who taught this family what a dog could be and how dog
            breath, pup pillows, and just their presence is like glue in this
            family.
          </p>

          <figure style={{
            margin: "2rem auto 2.5rem",
            maxWidth: "70%",
            textAlign: "center",
          }}>
            <img
              src="/oak-and-eliot.jpg"
              alt="Oak and Eliot the cat, head to head"
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "2px" }}
            />
            <figcaption style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "var(--caramel)",
              marginTop: "0.75rem",
            }}>
              Oak &amp; Eliot
            </figcaption>
          </figure>

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
            Piper came after the name was settled. She&rsquo;s the youngest,
            and a study in contradictions. She&rsquo;s afraid of her own shadow
            most of the time, but ready to take on the world the moment
            somebody looks sideways at one of the kids. The whole farm loves
            her. The chickens, the cats, every creature here has, at some
            point, curled up next to Piper. (Except the geese. The geese
            don&rsquo;t like anyone.) She is Willow&rsquo;s girl, through and
            through. Most of her best habits are Willow&rsquo;s... and so are
            all of her worst. This will be immediately evident when she jumps
            up on you for a hug, just the way Willow likes!
          </p>

          <figure style={{
            margin: "0 auto 2.5rem",
            maxWidth: "70%",
            textAlign: "center",
          }}>
            <img
              src="/piper-in-snow.jpg"
              alt="Piper bounding through the snow, looking at the camera"
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "2px" }}
            />
            <figcaption style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "var(--caramel)",
              marginTop: "0.75rem",
            }}>
              Piper
            </figcaption>
          </figure>
        </div>
      </section>

      {/* THREE PILLARS — UNCHANGED, original ear-graphic version */}
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

      {/* SIGNATURE + sign-off */}
      <section className="section section-cream" style={{ textAlign: "center", paddingTop: "2rem", paddingBottom: "4rem" }}>
        <div className="content">
          <div style={{ maxWidth: "240px", margin: "0 auto 1.5rem" }}>
            <img
              src="/xowillowandjulianna.png"
              alt="xo, Willow & Julianna"
              style={{ width: "350%", height: "auto", display: "block" }}
            />
          </div>
          <p style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1.1rem",
            color: "var(--caramel)",
            margin: 0,
          }}>
            Tell your dog we said hi.
          </p>
        </div>
      </section>
    </>
  );
}
