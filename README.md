# Patio Thai Direct — site template

Branded direct-ordering front end. Square handles payments and the kitchen;
this repo handles everything the customer sees first.

## Where the variables go

**All of them are in two files:**

| File | What lives there |
|---|---|
| `config.js` | Restaurant name, phone, address, colors, logo path, dietary statement, **the Square ordering URL**, and the delivery on/off switch |
| `menu.js` | Every dish: name, price, description, photo, featured flag |

No other file needs editing. `index.html` renders itself from those two.

## The one Square variable

`config.js`, first setting: `squareOrderingUrl`.

- **Empty** (`""`) → the site runs in **demo mode**: order buttons open the
  preview modal with the prep options and allergy notes. This is the pitch mode.
- **Set** to his Square Online ordering page URL → the site goes **live**:
  every order button and the header CTA send customers straight to his real
  Square checkout. His account, his deposits, his kitchen printer.

Get the URL from his Square Dashboard → Channels → Online ordering
(published page URL, or the custom subdomain like `order.patiothaidirect.com`).

## The delivery switch

`config.js` → `deliveryAvailable`.
Set `false` on a driver-down day: banner, hero, and footer flip to
pickup-only messaging automatically. Set `true` when he's back.

## Deploying (GitHub Pages, free)

1. Push this folder to a GitHub repo.
2. Repo → Settings → Pages → deploy from `main` branch, root.
3. Point the custom domain (patiothaidirect.com) at Pages per GitHub's
   DNS instructions. SSL is automatic.

No server, no Railway, no secrets. Nothing in this repo is sensitive —
the Square URL is public by definition (customers visit it).

## On a phone (home screen)

`manifest.webmanifest`, `sw.js`, `offline.html` and `images/icon-*.png`, `images/apple-touch-icon.png` make the site installable (Android
Chrome: Install app; iPhone Safari: Share, Add to Home Screen). The worker keeps no menu, price or photo: every page and file is the
network, and with no signal it shows `offline.html`. The icons are made from `images/logo.jpg` (a 220-pixel file, so they are soft:
replace `logo.jpg` with a larger one and make the icons again). `node scripts/pwa-check.mjs` checks all of it.

## Restaurant #2

1. Copy this repo (or click "Use this template" after marking it a
   template repo on GitHub).
2. Replace `config.js`, `menu.js`, the `/images` folder, and the name and colours in `manifest.webmanifest` and `offline.html`.
3. Deploy. Done.

## Before launch checklist

- [ ] Replace ALL prices from the owner's paper in-store menu
      (two prices in `menu.js` are marked UNVERIFIED)
- [ ] Owner approves every word of the dietary statement in `config.js`
- [ ] Square ordering page built: menu items + prep-option modifiers +
      item notes enabled
- [ ] `squareOrderingUrl` set
- [ ] Kitchen test: place a real order with an allergy note, watch the
      ticket print
