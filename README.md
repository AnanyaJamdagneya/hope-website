# HOPE website

Single-page, tab-based site for HOPE (the largest student-led service club at TAMS).
Refined cream + indigo + gold look, photo-forward, zero build step. Open `index.html`.

## Structure
- `index.html` - the seven tabs (Home, HOPE Auction, Blood Drives, Service Showcase, Committees, Board, Get Involved)
- `styles.css` - design tokens at the top in `:root`, then all styles
- `data.js` - text content: stats, events, 18 committees, board bios (edit text here)
- `app.js` - tab routing, galleries, lightbox, committee filter
- `assets/logo-kangaroo.png`, `assets/favicon.svg`
- `assets/ds/`, `assets/execs/` - committee + board photos
- `assets/gallery/<category>/` - the photo galleries
- `gen-gallery.py` - rebuilds the gallery list after you add photos

## Adding photos (important)
Photos must be FILES on the computer. Drop image files into the matching folder:
- `assets/gallery/auction/`
- `assets/gallery/blooddrives/`
- `assets/gallery/showcase/`

Then run:
```
cd hope-website
python3 gen-gallery.py
```
That regenerates `assets/gallery/manifest.js` and the new photos show up automatically.

### Main photo for an event tab
The first photo (alphabetical) in a category becomes the big header image for that tab,
unless you override it in `data.js` under `mainPhoto`, e.g.
```
mainPhoto: { auction: 'assets/gallery/auction/green-group.jpg' }
```

## View it locally
```
cd hope-website
python3 -m http.server 8080
# open http://localhost:8080
```

## Edit notes
- Colors: `:root` in `styles.css` (`--ink`, `--gold`, `--sky`, `--cream`).
- Real links: search `index.html` for `href="#"` (Instagram, email) and paste real URLs.
- The local scripts use `?v=3` cache-busting; bump the number if a change does not show.
