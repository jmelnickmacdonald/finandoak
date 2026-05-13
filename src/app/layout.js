import Link from "next/link";

export const metadata = {
  title: "Raven House · Fin & Oak Bark Bakery",
  description:
    "The homestead behind Fin & Oak Bark Bakery. Mud boots, chores, calamity, and joy in the Annapolis Valley.",
};

// Strip photos in display order. Alternating subjects so the eye stays interested.
const stripPhotos = [
  { src: "/dogs-and-geese.jpg",     alt: "Oakley and Piper on patrol with the goose squad" },
  { src: "/babygoatfun.jpg",        alt: "Baby goat" },
  { src: "/quinnandluna.jpg",       alt: "Quinn and Luna" },
  { src: "/goats-portrait.jpg",     alt: "Two goats, looking at the camera" },
  { src: "/roryandmax.jpg",         alt: "Rory and Max" },
  { src: "/mama-and-kids.jpg",      alt: "A mama goat watching her two newborns in the hay" },
  { src: "/willow-and-chick.jpg",   alt: "Willow with a baby chick" },
  { src: "/sageonastra.jpg",        alt: "Sage on Astra" },
  { src: "/baby-goat-nuzzle.jpg",   alt: "A baby goat, nuzzling in" },
  { src: "/willowandastra.jpg",     alt: "Willow and Astra" },
  { src: "/mom-and-calf.jpg",       alt: "Mom and a newborn calf" },
  { src: "/sageandmax.jpg",         alt: "Sage and Max" },
  { src: "/eggs-and-teapot.jpg",    alt: "A morning's eggs and a painted teapot" },
];

export default function RavenHousePage() {
  return (
    <>
      <article style={{
        maxWidth: "780px",
        margin: "0 auto",
        padding: "3rem var(--gutter) 2rem",
        color: "var(--soft-ink)",
        fontFamily: "var(--font-body-loaded), system-ui, sans-serif",
      }}>
        {/* Eyebrow */}
        <p style={{
          textAlign: "center",
          fontSize: "0.7rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--caramel)",
          margin: "0 0 0.75rem",
        }}>
          Raven House
        </p>

        {/* Headline */}
        <h1 style={{
          textAlign: "center",
          fontFamily: "var(--font-display-loaded), Georgia, serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          lineHeight: 1.2,
          margin: "0 0 1.25rem",
        }}>
          Chaos and magic, in equal measure.
        </h1>

        {/* Caramel rule */}
        <div style={{
          width: "40px",
          height: "1px",
          background: "var(--caramel)",
          opacity: 0.5,
          margin: "0 auto 2.5rem",
        }} />

        {/* Body */}
        <div style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
          <p style={{ margin: "0 0 1.25rem" }}>
            Life at Raven House is equal parts mud boots, chores, calamity and joy.
            Our animals keep us busy (and laughing), the gardens give us what the
            seasons allow (except, of course, last summer &mdash; no water = one
            very sad garden!), and the kitchen often smells like something fresh.
            (Unless it smells like paint from whatever new project I&rsquo;ve decided
            to tackle.)
          </p>

          <p style={{ margin: "0 0 1.25rem" }}>
            We don&rsquo;t aim for perfect, thank goodness, because if so we&rsquo;d
            be consistently disappointed. Some days it&rsquo;s eggs in the basket,
            vegetables on the table, and goat&rsquo;s milk in the jar. Other days
            it&rsquo;s chasing goats out of the flower beds for the hundredth time,
            shooing birds from the deck, or finding muddy handprints and footprints
            everywhere. It&rsquo;s all part of the (chaotic, albeit lovely) rhythm
            here.
          </p>

          <p style={{ margin: "0 0 1.25rem" }}>
            Raven House wouldn&rsquo;t be what it is without the animals who call it
            home. Mabel, our family milk cow, gives us morning milk; her calf Luna
            mostly gives us reasons to laugh. Clarabelle the heifer is spunky in a
            way that suggests trouble. Astra, our horse, has opinions. The goats
            &mdash; June, Fern, Poppy, Ivy, Auggie, and Pip &mdash; provide milk and
            mayhem. The pig gang are the comedians: Flora, Fauna, Rosita, Piggie
            Smalls, Piggie Azalea, Peppa, Pua, Georgie, and Hammy. Chickens, ducks,
            and geese scatter across the yard. Oakley and Piper do regular perimeter
            checks. Our cats claim every warm spot they can find, from hay bales to
            laundry baskets.
          </p>

          <p style={{ margin: "0 0 1.5rem" }}>
            This is our world. It&rsquo;s not perfect, but it&rsquo;s home. One day
            you&rsquo;re feeling like a homesteading hero with fresh bread and happy
            animals, the next day you&rsquo;re chasing escaped goats while explaining
            to your kids why everything green in the garden has been nibbled down to
            stubs. But that&rsquo;s exactly what makes it so entertaining. It&rsquo;s
            messy, hilarious, VERY loud and absolutely worth sharing. At the end of
            every chaotic day, when the animals are finally settled and the kids are
            telling stories about their adventures, we&rsquo;re reminded why we chose
            this life. Raven House is home &mdash; chaos and magic in equal measure.
          </p>
        </div>
      </article>

      {/* Strip section — breaks out of the 780px article so the strip can run wider */}
      <section
        aria-label="A glimpse around the homestead"
        style={{ padding: "1.5rem 0 4rem" }}
      >
        {/* Caramel rule */}
        <div style={{
          width: "40px",
          height: "1px",
          background: "var(--caramel)",
          opacity: 0.5,
          margin: "0 auto 1.5rem",
        }} />

        {/* Strip eyebrow */}
        <p style={{
          textAlign: "center",
          fontSize: "0.7rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--caramel)",
          margin: "0 0 0.5rem",
        }}>
          A glimpse
        </p>
        <p style={{
          textAlign: "center",
          fontFamily: "var(--font-body-loaded), system-ui, sans-serif",
          fontSize: "0.85rem",
          color: "var(--muted-ink)",
          fontStyle: "italic",
          margin: "0 0 2rem",
        }}>
          scroll &rarr;
        </p>

        {/* The strip */}
        <div className="rh-strip">
          {stripPhotos.map((photo) => (
            <div key={photo.src} className="rh-strip-item">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
