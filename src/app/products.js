// src/app/products.js
// Fin & Oak Bark Bakery - product catalogue
// Prices and recipes subject to refinement before July 2026 launch.

export const products = [
  // DOGS
  {
    id: "apple-oat-rounds",
    slug: "apple-oat-rounds",
    name: "Apple & Oat Rounds",
    tagline: "Built on Annapolis Valley apples.",
    category: "dogs",
    price: 11.00,
    weight: "180g",
    image: "/dog1.png",
    shortDescription:
      "Whole rolled oats, fresh-grated apple from down the road, a touch of cinnamon, and a single egg. Baked low and slow until they snap.",
    longDescription:
      "Whole rolled oats, whole-wheat flour, fresh-grated Annapolis Valley apple, a touch of cinnamon, and a single egg to bind. Baked low and slow until they snap. Nothing else.",
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
    name: "Peanut Butter & Banana Bites",
    tagline: "The crowd-pleaser.",
    category: "dogs",
    price: 12.00,
    weight: "200g",
    image: "/dog2.png",
    shortDescription:
      "Natural peanut butter (no xylitol, ever), real banana, whole rolled oats, and one egg. Soft inside, slightly crisp at the edge.",
    longDescription:
      "Natural peanut butter (no xylitol, ever), real banana, whole rolled oats, a little whole-wheat flour, and one egg. Soft inside, with a slightly crisp edge.",
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
    image: "/dog3.png",
    shortDescription:
      "Pure pumpkin, oats, a hint of cinnamon. No added sugar. Made for our most particular eater first, and now everyone wants them.",
    longDescription:
      "Pure pumpkin puree, whole rolled oats, a little whole-wheat flour, cinnamon, and an egg. No added sugar, nothing fussy.",
    ingredients: [
      "Pumpkin puree",
      "Whole rolled oats",
      "Whole-wheat flour",
      "Egg",
      "Cinnamon",
    ],
    bestFor: "Sensitive stomachs, picky eaters, and seniors.",
  },

  // CATS
  {
    id: "salmon-catnip-crisps",
    slug: "salmon-catnip-crisps",
    name: "Salmon & Catnip Crisps",
    tagline: "Tested by six in-house critics.",
    category: "cats",
    price: 11.00,
    weight: "80g",
    image: "/cats.png",
    shortDescription:
      "A small oat-flour crisp built around wild salmon, slow-dehydrated until it is pure flavour, with a hit of dried catnip.",
    longDescription:
      "We dehydrate wild salmon for hours until it is concentrated flavour, then grind it into a small oat-flour crisp with whole egg and dried catnip. Shelf-stable, no fridge, no fuss. Small enough to be a real treat, not a snack.",
    ingredients: [
      "Oat flour",
      "Dehydrated wild salmon",
      "Whole egg",
      "Dried catnip",
      "Salmon oil",
    ],
    bestFor: "Cats who turn their noses up at everything except this.",
  },

  // MIXED
  {
    id: "sweet-potato-chews",
    slug: "sweet-potato-chews",
    name: "Sweet Potato Chews",
    tagline: "The whole ingredient list is one ingredient.",
    category: "mixed",
    price: 9.00,
    weight: "120g",
    image: "/dog1.png",
    shortDescription:
      "Just sweet potato. Sliced thin, dehydrated for hours, until what is left is sweetness and chew.",
    longDescription:
      "One ingredient. We slice fresh sweet potato by hand and dehydrate it low and slow for eight to ten hours. Suitable for dogs and cats.",
    ingredients: ["Sweet potato"],
    bestFor: "Dogs and cats. Allergy-friendly. Senior-friendly.",
  },

  // HORSES
  {
    id: "carrot-molasses-bites",
    slug: "carrot-molasses-bites",
    name: "Carrot & Molasses Bites",
    tagline: "Made bigger, for bigger appetites.",
    category: "horses",
    price: 11.00,
    weight: "250g",
    image: "/horse.png",
    shortDescription:
      "Whole oats, fresh-grated carrot, and a swirl of molasses. Hand-shaped for the bigger appetites at the gate.",
    longDescription:
      "Whole rolled oats, fresh-grated carrot, a generous spoon of molasses, and a little flour to hold them. Hand-shaped into larger bites because horses do not do small.",
    ingredients: [
      "Whole rolled oats",
      "Whole-wheat flour",
      "Fresh carrot",
      "Molasses",
      "Water",
    ],
    bestFor: "Horses, ponies, donkeys.",
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}
