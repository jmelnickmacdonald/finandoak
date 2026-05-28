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
          <p className="eyebrow">The Menu</p>
          <h1 className="treats-headline">
            A small line, <em>baked thoughtfully.</em>
          </h1>
          <p className="treats-lead">
            Six recipes to start. Made by hand in small batches, from
            real ingredients, in our home kitchen at Raven House.
          </p>
          <p className="treats-disclosure">
            A preview menu. Final recipes, prices, and packaging confirmed
            closer to our July 2026 launch.
          </p>
        </div>
      </section>

      {/* ─── Dogs ─── */}
      <section className="treats-section">
        <div className="section-header">
          <h2 className="section-title">For Dogs</h2>
          <p className="section-sub">Three to start. A seasonal fourth coming in fall.</p>
        </div>
        <div className="product-grid">
          {dogs.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ─── Cats ─── */}
      <section className="treats-section treats-section--alt">
        <div className="section-header">
          <h2 className="section-title">For Cats</h2>
          <p className="section-sub">One recipe. Tested by six in-house critics.</p>
        </div>
        <div className="product-grid product-grid--single">
          {cats.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ─── Mixed ─── */}
      <section className="treats-section">
        <div className="section-header">
          <h2 className="section-title">For Both</h2>
          <p className="section-sub">Single-ingredient. Allergy-friendly.</p>
        </div>
        <div className="product-grid product-grid--single">
          {mixed.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ─── Horses ─── */}
      <section className="treats-section treats-section--alt">
        <div className="section-header">
          <h2 className="section-title">For the Big Kids</h2>
          <p className="section-sub">For horses, ponies, donkeys. Anyone at the fence.</p>
        </div>
        <div className="product-grid product-grid--single">
          {horses.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ─── Footer note ─── */}
      <section className="treats-footnote">
        <p>
          Real ingredients. Spoiled regulars.
        </p>
      </section>
    </main>
  );
}

function ProductCard({ product }) {
  return (
    <Link href={`/treats/${product.slug}`} className="product-card">
      <div className="product-card-image">
        {/* Image placeholder — swap in real photos when ready */}
        <div className="product-card-placeholder">
          <span>{product.name}</span>
        </div>
      </div>
      <div className="product-card-body">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-tagline">{product.tagline}</p>
        <p className="product-card-desc">{product.shortDescription}</p>
        <div className="product-card-meta">
          <span className="product-card-weight">{product.weight}</span>
          <span className="product-card-price">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
}
