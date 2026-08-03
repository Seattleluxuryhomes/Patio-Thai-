// ============================================================
// CONFIG — every per-restaurant variable lives in this file.
// Restaurant #2 = copy the repo, edit this file and menu.js,
// swap the /images folder. Nothing else changes.
// ============================================================

const CONFIG = {

  // --- THE SQUARE VARIABLE (this is where it goes) -----------
  // Paste the restaurant's Square Online ordering page URL here.
  // Get it from: his Square Dashboard → Channels → Online ordering
  // (or the ordering page's published URL / order.<domain> subdomain).
  // While this is empty, the site runs in DEMO MODE: order buttons
  // open the preview modal. Once you paste a URL, every order
  // button sends customers to his real Square checkout.
  squareOrderingUrl: "",   // e.g. "https://order.patiothaidirect.com"

  // --- Delivery switch (the "driver is down" toggle) ---------
  // true  = banner and hero advertise delivery
  // false = site flips to pickup-only messaging, one word change
  deliveryAvailable: true,

  // --- Restaurant identity -----------------------------------
  name: "The Patio",
  tagline: "Fine Thai Cuisine",
  phone: "(206) 328-2406",
  address: "524 15th Ave E, Seattle, WA",
  domain: "patiothaidirect.com",
  logo: "images/logo.jpg",

  // --- Trust chips (hero) ------------------------------------
  chips: [
    { bold: "4.1★", text: " on Google · 275+ reviews" },
    { bold: "Our own driver", text: " · calls 3 min out" },
    { bold: "No marketplace", text: " commission" }
  ],

  // --- Brand colors ------------------------------------------
  colors: {
    accent: "#FFE600",     // The Patio logo yellow
    accentDeep: "#C9B400",
    bg: "#131210",
    card: "#1C1A16",
    border: "#2C2922"
  },

  // --- Dietary statement (owner approves every word) ---------
  dietary: {
    title: "Dietary Requests & Allergies",
    paragraphs: [
      "The Patio is not a dedicated gluten-free facility — our woks and fryers are shared. What we can do is take your request seriously: several dishes can be prepared with gluten-free tamari in place of soy sauce, and you can ask the kitchen to use separate equipment when you order.",
      "<strong>Every request you make at checkout prints directly on the kitchen ticket with your order.</strong> Tell us what matters, and it reaches the wok in writing — every time, including on our busiest nights."
    ]
  }
};
