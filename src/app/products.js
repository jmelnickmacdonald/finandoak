// src/app/products.js
// Fin & Oak Bark Bakery — product catalogue
// Prices and recipes subject to refinement before July 2026 launch.

export const products = [
  // ─────────────────────────────────────────────────────────────
  // DOGS
  // ─────────────────────────────────────────────────────────────
  {
    id: "apple-oat-rounds",
    slug: "apple-oat-rounds",
    name: "Apple & Oat Rounds",
    tagline: "The everyday biscuit.",
    category: "dogs",
    price: 11.00,
    weight: "180g",
    image: "/products/apple-oat-rounds.jpg",
    shortDescription:
      "A simple, golden biscuit built on rolled oats and fresh apple. The one we reach for first.",
    longDescription:
      "Whole rolled oats, whole-wheat flour, fresh-grated apple, a touch of cinnamon, and a single egg to bind. Baked low and slow until they snap. Nothing else.",
    ingredients: [
      "Whole rolled oats",
      "Whole-wheat flour",
      "Fresh apple",
      "Egg",
      "Cinnamon",
      "Water",
    ],
    bestFor: "Dogs of all sizes. Daily-driver biscuit.",
  },
  {
    id: "pbb-bites",
    slug: "pbb-bites",
    name: "PB&B Bites",
    tagline: "The crowd-pleaser.",
    category: "dogs",
    price: 12.00,
    weight: "200g",
    image: "/products/pbb-bites.jpg",
    shortDescription:
      "Natural peanut butter and ripe banana, mixed into a chewy oat bite. The one that disappears first.",
    longDescription:
      "Natural peanut butter (no xylitol, ever), real banana, whole rolled oats, a little flour, and one egg. Soft inside, with a slightly crisp edge. The bag will be empty by Tuesday.",
    ingredients: [
      "Natural peanut butter",
      "Banana",
      "Whole rolled oats",
      "Whole-wheat flour",
      "Egg",
    ],
    bestFor: "Dogs who hear the treat jar from three rooms away.",
  },
  {
    id: "pumpkin-cinnamon-cookies",
    slug: "pumpkin-cinnamon-cookies",
    name: "Pumpkin & Cinnamon Cookies",
    tagline: "For the sensitive ones.",
    category: "dogs",
    price: 10.00,
    weight: "180g",
    image: "/products/pumpkin-cinnamon-cookies.jpg",
    shortDescription:
      "Gentle on the stomach, easy on everything. Pumpkin, oats, a hint of cinnamon. Made for the dogs who need something soft.",
    longDescription:
      "Pure pumpkin purée, whole rolled oats, a little flour, cinnamon, and an egg. No added sugar, nothing fussy. The treat we made for our most particular eater, and now everyone wants them.",
    ingredients: [
      "Pumpkin purée",
      "Whole rolled oats",
      "Whole-wheat flour",
      "Egg",
      "Cinnamon",
    ],
    bestFor: "Sensitive stomachs, picky eaters, and seniors.",
  },

  // ─────────────────────────────────────────────────────────────
  // CATS
  // ─────────────────────────────────────────────────────────────
  {
    id: "salmon-catnip-crisps",
    slug: "salmon-catnip-crisps",
    name: "Salmon & Catnip Crisps",
    tagline: "Tested by six in-house critics.",
    category: "cats",
    price: 11.00,
    weight: "80g",
    image: "/products/salmon-catnip-crisps.jpg",
    shortDescription:
      "A small oat-flour crisp built around wild salmon, slow-dehydrated until it's pure flavour, with a hit of dried catnip.",
    longDescription:
      "We dehydrate wild salmon for hours until it's concentrated flavour, then grind it into a small oat-flour crisp with whole egg and dried catnip. Shelf-stable, no fridge, no fuss. Small enough to be a real treat, not a snack.",
    ingredients: [
      "Oat flour",
      "Dehydrated wild salmon",
      "Whole egg",
      "Dried catnip",
      "Salmon oil",
    ],
    bestFor: "Cats who turn their noses up at everything except this.",
  },

  // ─────────────────────────────────────────────────────────────
  // MIXED
  // ─────────────────────────────────────────────────────────────
  {
    id: "sweet-potato-chews",
    slug: "sweet-potato-chews",
    name: "Sweet Potato Chews",
    tagline: "The whole ingredient list is one ingredient.",
    category: "mixed",
    price: 9.00,
    weight: "120g",
    image: "/products/sweet-potato-chews.jpg",
    shortDescription:
      "Just sweet potato. Sliced thin, dehydrated for hours, until what's left is sweetness and chew.",
    longDescription:
      "One ingredient. We slice fresh sweet potato by hand and dehydrate it low and slow for eight to ten hours, until the slices are leathery and concentrated. That's the whole recipe. Suitable for dogs and cats.",
    ingredients: ["Sweet potato"],
    bestFor: "Dogs and cats. Allergy-friendly. Senior-friendly.",
  },

  // ─────────────────────────────────────────────────────────────
  // HORSES
  // ─────────────────────────────────────────────────────────────
  {
    id: "carrot-molasses-bites",
    slug: "carrot-molasses-bites",
    name: "Carrot & Molasses Bites",
    tagline: "For the big kids.",
    category: "horses",
    price: 14.00,
    weight: "400g",
    image: "/products/carrot-molasses-bites.jpg",
    shortDescription:
      "Oats, fresh carrot, and a swirl of molasses. Made bigger, for the bigger appetites at the gate.",
    longDescription:
      "Whole rolled oats, fresh-grated carrot, a generous spoon of molasses, and a little flour to hold them. Hand-shaped into larger bites because horses don't do small. The bag is twice the size of our dog treats, because we know who's eating them.",
    ingredients: [
      "Whole rolled oats",
      "Whole-wheat flour",
      "Fresh carrot",
      "Molasses",
      "Water",
    ],
    bestFor: "Horses, ponies, donkeys. Whoever's leaning over the fence.",
  },
];

// Helper to get a product by slug (used by detail pages)
export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

// Helper to get products by category
export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}
