const fonts = [
  "Playfair Display", "Cormorant Garamond", "Cinzel", "Bodoni Moda", "Lora", "Merriweather", "Prata", "EB Garamond", "Libre Baskerville", "Cardo",
  "Crimson Text", "Domine", "Old Standard TT", "Alice", "Spectral", "Vollkorn", "Nelas", "Zilla Slab", "Bitter", "Abril Fatface",
  "Arvo", "Josefin Slab", "Rokkitt", "Vidaloka", "Gentium Book Plus",
  "Poppins", "Montserrat", "Raleway", "Inter", "Lato", "Open Sans", "Roboto", "Quicksand", "Outfit", "Mulish",
  "Work Sans", "Nunito", "Montserrat Alternates", "Josefin Sans", "Urbanist", "League Spartan", "Questrial", "Tenor Sans", "Kumbh Sans", "Lexend",
  "Space Grotesk", "Syne", "Manrope", "Be Vietnam Pro", "Public Sans",
  "Righteous", "Comfortaa", "Fredoka", "DM Serif Display", "Syncopate", "Michroma", "Forum", "Marcellus", "Bellefair", "Yeseva One",
  "Italiana", "Julius Sans One", "Unna", "Gilda Display", "Rozha One", "Cinzel Decorative", "Major Mono Display", "Monoton", "Staatliches", "Bebas Neue",
  "Oswald", "Anton", "Lobster", "Pacifico", "Caveat",
  "Great Vibes", "Dancing Script", "Alex Brush", "Sacramento", "Allura", "Pinyon Script", "Petit Formal Script", "Mrs Saint Delafield", "Arizona", "Meow Script",
  "Homemade Apple", "Reenie Beanie", "Nothing You Could Do", "Shadows Into Light", "Indie Flower", "Gloria Hallelujah", "Amatic SC", "Cookie", "Yellowtail",
  "Satisfy", "Courgette", "Kaushan Script", "Grand Hotel", "Damion"
];

const uniqueFonts = [...new Set(fonts)];
const fontParams = uniqueFonts.map(f => `family=${f.replace(/ /g, '+')}:wght@300;400;500;600;700`).join('&');
const linkTag = `<link href="https://fonts.googleapis.com/css2?${fontParams}&display=swap" rel="stylesheet"/>`;

let html = '<div class="comp-group">\n  <h3 class="comp-group-title">100 Premium Fonts Preview</h3>\n  <div class="type-list">\n';
uniqueFonts.forEach(f => {
  html += `    <div class="type-row"><span class="type-label">${f}</span><div style="font-family:'${f}', sans-serif; font-size: 2rem; color: var(--text)">The quick brown fox jumps over the lazy dog.</div></div>\n`;
});
html += '  </div>\n</div>';

process.stdout.write("LINK_TAG_START\n" + linkTag + "\nLINK_TAG_END\n");
process.stdout.write("FONTS_HTML_START\n" + html + "\nFONTS_HTML_END\n");
