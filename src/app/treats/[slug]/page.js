
// src/app/treats/[slug]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "../../products";

// Generate static pages for each product slug at build time
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Per-product metadata
export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Not Found — Fin & Oak" };
  return {
    title: `${product.name} — Fin & Oak Bark Bakery`,
    description: product.shortDescription,
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  // Other products from the same category, or fallback to any others
  const related = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="product-page">
      {/* ─── Breadcrumb ─── */}
      <div className="product-breadcrumb">
        <Link href="/treats">← Back to the menu</Link>
      </div>

      {/* ─── Hero (image + intro) ─── */}
      <section className="product-hero">
        <div className="product-hero-image">
          <img
            src={product.image}
            alt={product.name}
            className="product-hero-photo"
          />
        </div>
        <div className="product-hero-content">
          <p className="product-eyebrow">{categoryLabel(product.category)}</p>
          <h1 className="product-name">{product.name}</h1>
          <p className="product-tagline">{product.tagline}</p>
          <p className="product-description">{product.longDescription}</p>

          <div className="product-meta-row">
            <div className="product-meta-item">
              <span className="product-meta-label">Size</span>
              <span className="product-meta-value">{product.weight}</span>
            </div>
            <div className="product-meta-item">
              <span className="product-meta-label">Price</span>
              <span className="product-meta-value product-meta-price">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Snipcart buy button will go here. For now: placeholder */}
          <button
            type="button"
            className="product-buy-button"
            disabled
            aria-label="Add to cart (available July 2026)"
          >
            Available July 2026
          </button>
          <p className="product-disclosure">
            A preview menu. Final recipes and packaging confirmed closer
            to our launch.
          </p>
        </div>
      </section>

      {/* ─── Ingredients ─── */}
      <section className="product-ingredients">
        <div className="product-ingredients-inner">
          <p className="section-eyebrow">What's in it</p>
          <h2 className="ingredients-title">
            <em>The whole list.</em>
          </h2>
          <ul className="ingredients-list">
            {product.ingredients.map((ingredient, i) => (
              <li key={i} className="ingredients-item">
                {ingredient}
              </li>
            ))}
          </ul>
          {product.bestFor && (
            <p className="ingredients-bestfor">
              <span className="bestfor-label">Best for:</span>{" "}
              {product.bestFor}
            </p>
          )}
        </div>
      </section>

      {/* ─── Related ─── */}
      <section className="product-related">
        <div className="product-related-header">
          <p className="section-eyebrow">More from the menu</p>
          <h2 className="related-title">
            <em>Keep browsing.</em>
          </h2>
        </div>
        <div className="related-grid">
          {related.map((p) => (
            <Link
              key={p.id}
              href={`/treats/${p.slug}`}
              className="related-card"
            >
              <div className="related-card-image">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="related-card-body">
                <h3 className="related-card-name">{p.name}</h3>
                <p className="related-card-tagline">{p.tagline}</p>
                <p className="related-card-price">${p.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

/* ─── Helper: turn category slug into a label ─── */
function categoryLabel(category) {
  switch (category) {
    case "dogs":
      return "The Dog Menu";
    case "cats":
      return "The Cat Menu";
    case "mixed":
      return "For Both";
    case "horses":
      return "The Barn Crowd";
    default:
      return "From the menu";
  }
}
