// src/app/treats/page.js
import Link from "next/link";
import { products } from "../products";

export const metadata = {
  title: "Treats — Fin & Oak Bark Bakery",
  description:
    "A small line of handmade treats for dogs, cats, and horses. Baked in small batches in Meadowvale, Nova Scotia.",
};

export default function TreatsPage() {
  const dogs = products.filter((p) => p.category === "dogs");
  const cats = products.filter((p) => p.category === "cats");
  const mixed = products.filter((p) => p.category === "mixed");
  const horses = products.filter((p) => p.category === "horses");

  return (
    <main className="treats-page">
      {/* ─── Hero ─── */}
      <section className="treats-hero">
        <div className="treats-hero-inner">
          <p className="treats-eyebrow">The Menu</p>
          <h1 className="treats-headline">
            A small line, <em>baked thoughtfully.</em>
          </h1>
          <p className="treats-lead">
            Six recipes to start. Made by hand in small batches, from
            real ingredients, in our home kitchen at Raven House.
          </p>
          <p className="treats-disclosure">
            A preview menu. Final recipes, prices, and packaging
            confirmed closer to our July 2026 launch.
          </p>
        </div>
      </section>

      {/* ─── Stamp divider ─── */}
      <StampDivider numeral="I" label="The Dog Menu" />

      {/* ─── Dogs ─── */}
      <section className="treats-section">
        <div className="section-header">
          <p className="section-sub">
            Three to start. A seasonal fourth coming in fall.
          </p>
        </div>
        <div className="product-grid">
          {dogs.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ─── Stamp divider ─── */}
      <StampDivider numeral="II" label="The Cat Menu" />

      {/* ─── Cats ─── */}
      <section className="treats-section">
        <div className="section-header">
          <p className="section-sub">
            One recipe. Tested by six in-house critics.
          </p>
        </div>
        <div className="product-grid product-grid--single">
          {cats.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ─── Stamp divider ─── */}
      <StampDivider numeral="III" label="For Both" />

      {/* ─── Mixed ─── */}
      <section className="treats-section">
        <div className="section-header">
          <p className="section-sub">
            Single-ingredient. Allergy-friendly. Suits everyone in the
            house.
          </p>
        </div>
        <div className="product-grid product-grid--single">
          {mixed.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ─── Stamp divider ─── */}
      <StampDivider numeral="IV" label="The Barn Crowd" />

      {/* ─── Horses ─── */}
      <section className="treats-section">
        <div className="section-header">
          <p className="section-sub">
            For horses, ponies, donkeys. Anyone leaning over the fence.
          </p>
        </div>
        <div className="product-grid product-grid--single">
          {horses.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ─── Footer note ─── */}
      <section className="treats-footnote">
        <p>Real ingredients. Spoiled regulars.</p>
      </section>
    </main>
  );
}

/* ─── Wax stamp section divider ─── */
function StampDivider({ numeral, label }) {
  return (
    <div className="stamp-divider" aria-hidden="false">
      <div className="stamp-divider-line" />
      <div className="stamp-mark">
        <svg
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
          className="stamp-svg"
        >
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle
            cx="40"
            cy="40"
            r="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.4"
            strokeDasharray="2 3"
          />
          <text
            x="40"
            y="48"
            textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontSize="22"
            fontStyle="italic"
            fill="currentColor"
          >
            {numeral}
          </text>
        </svg>
      </div>
      <div className="stamp-divider-label">{label}</div>
      <div className="stamp-divider-line" />
    </div>
  );
}

/* ─── Product card ─── */
function ProductCard({ product }) {
  return (
    <Link href={`/treats/${product.slug}`} className="product-card">
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-photo"
        />
      </div>
      <div className="product-card-body">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-tagline">{product.tagline}</p>
        <p className="product-card-desc">{product.shortDescription}</p>
        <div className="product-card-meta">
          <span className="product-card-weight">{product.weight}</span>
          <span className="product-card-price">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}
