// ============================================================
// MENU — one entry per dish. Prices marked verified came from
// the restaurant's live Grubhub listing; replace ALL prices
// from the owner's paper in-store menu before launch (app
// prices are often marked up).
//
// featured: true  → photo card in Best Sellers (needs "image")
// featured: false → text row in From the Menu
// ============================================================

const MENU = [
  {
    name: "Pad See Ew",
    price: "$18.95",                    // verified (Grubhub)
    desc: "Wide rice noodles stir-fried in sweet black soy with egg and Chinese broccoli.",
    tag: "Popular",
    image: "images/pad-see-ew.jpg",
    featured: true
  },
  {
    name: "Pad Thai",
    price: "$17.95+",                   // verified (Grubhub)
    desc: "Thin rice noodles in tamarind sauce with egg, bean sprouts, and crushed peanuts. Choice of protein.",
    tag: "Bestseller",
    image: "images/pad-thai.jpg",
    featured: true
  },
  {
    name: "Spicy Crispy Basil Chicken",
    price: "$20.95",                    // UNVERIFIED — confirm on paper menu
    desc: "Crisp chicken stir-fried with hot chili, garlic, bell peppers, and crispy basil.",
    tag: "Chef Choice 🌶️",
    image: "images/basil-chicken.jpg",
    featured: true
  },
  {
    name: "Orange Crispy Chicken",
    price: "$19.95",                    // UNVERIFIED — confirm on paper menu
    desc: "Golden-crisp chicken tossed in a tangy orange glaze with broccoli.",
    tag: "Specialty",
    image: "images/orange-chicken.jpg",
    featured: true
  },
  {
    name: "Panang Curry",
    price: "$18.95+",                   // verified (Grubhub)
    desc: "Rich panang curry with kaffir lime leaf and coconut cream. Choice of protein.",
    featured: false
  },
  {
    name: "Kee Mao Noodle",
    price: "$18.95+",                   // verified (Grubhub)
    desc: "Stir-fried wide rice noodle with fresh chili and garlic, bell pepper, onion, tomato, broccoli, ga-chai herb, and sweet basil.",
    featured: false
  },
  {
    name: "Spring Rolls",
    price: "$12.95",                    // verified (Grubhub)
    desc: "Crispy vegetable rolls served with sweet plum sauce.",
    featured: false
  },
  {
    name: "Crab Delight",
    price: "$14.95",                    // verified (Grubhub)
    desc: "Imitation crabmeat and cream cheese wrapped in wonton, deep fried. Sweet plum sauce.",
    featured: false
  },
  {
    name: "Thai Fresh Rolls",
    price: "$13.95",                    // verified (Grubhub)
    desc: "Green vegetables and tofu in thin rice wrapper with tamarind-sesame dipping sauce.",
    featured: false
  },
  {
    name: "Thai Iced Tea",
    price: "$6.95",                     // verified (Grubhub)
    desc: "Sweet, creamy, and cold.",
    featured: false
  },
  {
    name: "Jasmine Rice",
    price: "$3.50",                     // verified (Grubhub)
    desc: "Steamed jasmine rice.",
    featured: false
  }
];
