// src/app/treats/page.js
import Link from "next/link";
import { products } from "../products";

export const metadata = {
  title: "Treats — Fin & Oak Bark Bakery",
  description:
    "Small-batch treats for dogs, cats, and horses, baked by hand in Meadowvale, Nova Scotia.",
};

export default function TreatsPage() {
  const dogs = products.filter((p) => p.category === "dogs");
  const cats = products.filter((p) => p.category === "cats");
  const mixed = products.filter((p) => p.category === "mixed");
  const horses = products.filter((p) => p.category === "horses");

  return (
    <main className="treats-page">
      {/* Hero */}
      <section className="treats-hero">
        <div className="treats-hero-inner">
          <p className="treats-eyebrow">The Menu</p>
          <h1 className="treats-headline">
            Real ingredients. <em>Spoiled regulars.</em>
          </h1>
          <p className="treats-lead">
            Small-batch treats for dogs, cats, and a few of the larger
            residents. Made by hand in our kitchen at Raven House.
          </p>
        </div>
      </section>

      {/* Category stamps */}
      <section className="treats-stamps-row">
        <div className="treats-stamps-inner">
          <div className="treats-stamp">
            <img src="/dogstamp.png" alt="" className="treats-stamp-img" />
            <p className="treats-stamp-label">For Dogs</p>
          </div>
          <div className="treats-stamp">
            <img src="/catstamp.png" alt="" className="treats-stamp-img" />
            <p className="treats-stamp-label">For Cats</p>
          </div>
          <div className="treats-stamp">
            <img src="/horsestamp.png" alt="" className="treats-stamp-img" />
            <p className="treats-stamp-label">For Horses</p>
          </div>
        </div>
      </section>

      {/* Disclosure band */}
      <section className="treats-disclosure-band">
        <p>
          <em>
            Finalized recipes closer to launch. Available for pickup at our
            farm stand in Meadowvale, Nova Scotia.
          </em>
        </p>
      </section>

      {/* Dogs */}
      <section className="treats-section">
        <div className="section-intro">
          <p className="section-phrase">
            <em>Three to start, and a fourth in the fall.</em>
          </p>
        </div>
        <div className="product-grid">
          {dogs.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Cats */}
      <section className="treats-section">
        <div className="section-intro">
          <p className="section-phrase">
            <em>One recipe, six in-house critics.</em>
          </p>
        </div>
        <div className="product-grid product-grid--single">
          {cats.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Mixed */}
      <section className="treats-section">
        <div className="section-intro">
          <p className="section-phrase">
            <em>One ingredient. For dogs and cats both.</em>
          </p>
        </div>
        <div className="product-grid product-grid--single">
          {mixed.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Horses */}
      <section className="treats-section">
        <div className="section-intro">
          <p className="section-phrase">
            <em>For whoever is leaning over the fence.</em>
          </p>
        </div>
        <div className="product-grid product-grid--single">
          {horses.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Sage banner */}
      <section className="treats-sage-banner">
        <div className="treats-sage-inner">
          <p className="treats-sage-quote">
            <em>
              Recipes built carefully and thoughtfully. Tested by an
              extensive committee of in-house critics.
            </em>
          </p>
          <p className="treats-sage-sub">
            Three dogs, six cats, several chickens with strong opinions.
          </p>
        </div>
      </section>
    </main>
  );
}

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
