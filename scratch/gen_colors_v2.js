const colors = [
  { n: 'Silk Pink', h: '#FFF0F5' }, { n: 'Blush Rose', h: '#F8A8C4' }, { n: 'Petal', h: '#FDDCEC' }, { n: 'Peony', h: '#FFB7CE' }, { n: 'Rose Quartz', h: '#F7CAC9' }, { n: 'Sakura', h: '#FFDDE2' }, { n: 'Desert Rose', h: '#E86FA3' }, { n: 'Flamingo', h: '#FC8EAC' }, { n: 'Berry', h: '#D44D5C' }, { n: 'Mauve', h: '#E0B0FF' },
  { n: 'Cotton Candy', h: '#FFBCD9' }, { n: 'Tulip', h: '#FFB3E6' }, { n: 'Camellia', h: '#F3A1BE' }, { n: 'Magnolia', h: '#F8F1F1' }, { n: 'Lavender', h: '#CDB4FF' }, { n: 'Amethyst', h: '#9B72FF' }, { n: 'Lilac', h: '#EDE5FF' }, { n: 'Wisteria', h: '#B9A2D8' }, { n: 'Iris', h: '#5D3FD3' }, { n: 'Periwinkle', h: '#CCCCFF' },
  { n: 'Thistle', h: '#D8BFD8' }, { n: 'Plum', h: '#DDA0DD' }, { n: 'Orchid', h: '#DA70D6' }, { n: 'Heather', h: '#A79AFF' }, { n: 'Violet', h: '#8F00FF' }, { n: 'Grape', h: '#6F2DA8' }, { n: 'Indigo', h: '#4B0082' }, { n: 'Mulberry', h: '#C54B8C' }, { n: 'Peach Glow', h: '#FFD6A5' }, { n: 'Apricot', h: '#FFB347' },
  { n: 'Cantaloupe', h: '#FEC89A' }, { n: 'Sunrise', h: '#FFD1DC' }, { n: 'Sherbet', h: '#FFDAB9' }, { n: 'Melon', h: '#FDBCB4' }, { n: 'Coral Rose', h: '#F88379' }, { n: 'Tea Rose', h: '#F4C2C2' }, { n: 'Misty Rose', h: '#FFE4E1' }, { n: 'Champagne', h: '#F7E7CE' }, { n: 'Ivory Blush', h: '#FFF5F5' }, { n: 'Cream', h: '#FFFDD0' },
  { n: 'Buttercup', h: '#FFF9C4' }, { n: 'Lemon Chiffon', h: '#FFFACD' }, { n: 'Banana', h: '#FFE135' }, { n: 'Honey', h: '#F9E076' }, { n: 'Amber', h: '#FFBF00' }, { n: 'Gold Dust', h: '#E6BE8A' }, { n: 'Luxury Gold', h: '#D4AF37' }, { n: 'Royal Gold', h: '#C5A059' }, { n: 'Bronze', h: '#CD7F32' }, { n: 'Copper', h: '#B87333' },
  { n: 'Mint Cream', h: '#F5FFFA' }, { n: 'Sage', h: '#BCCA8A' }, { n: 'Pistachio', h: '#93C572' }, { n: 'Honeydew', h: '#F0FFF0' }, { n: 'Seafoam', h: '#9FE2BF' }, { n: 'Aquamarine', h: '#7FFFD4' }, { n: 'Celeste', h: '#B2FFFF' }, { n: 'Eucalyptus', h: '#D0F0C0' }, { n: 'Jade', h: '#00A86B' }, { n: 'Emerald', h: '#50C878' },
  { n: 'Sky Blue', h: '#87CEEB' }, { n: 'Powder Blue', h: '#B0E0E6' }, { n: 'Alice Blue', h: '#F0F8FF' }, { n: 'Baby Blue', h: '#89CFF0' }, { n: 'Morning Mist', h: '#E0F2F1' }, { n: 'Azure Whisper', h: '#F0FFFF' }, { n: 'Cornflower', h: '#6495ED' }, { n: 'Forget-me-not', h: '#AAF0D1' }, { n: 'Slate Blossom', h: '#A0B2C6' }, { n: 'Deep Ocean', h: '#0047AB' },
  { n: 'Nude', h: '#E3BC9A' }, { n: 'Sand', h: '#F4A460' }, { n: 'Beige', h: '#F5F5DC' }, { n: 'Taupe', h: '#483C32' }, { n: 'Pebble', h: '#333333' }, { n: 'Charcoal', h: '#36454F' }, { n: 'Midnight', h: '#191970' }, { n: 'Rosewood', h: '#65000B' }, { n: 'Espresso', h: '#3D2B1F' }, { n: 'Mink', h: '#88716B' },
  { n: 'Pearl', h: '#FDEEF4' }, { n: 'Seashell', h: '#FFF5EE' }, { n: 'Linen', h: '#FAF0E6' }, { n: 'Snow', h: '#FFFAFA' }, { n: 'Vapor', h: '#F5F5F5' }, { n: 'Cloud', h: '#ECF0F1' }, { n: 'Silver', h: '#C0C0C0' }, { n: 'Platinum', h: '#E5E4E2' }, { n: 'Diamond', h: '#B9F2FF' }, { n: 'Stardust', h: '#FBFBFB' },
  { n: 'Berry Punch', h: '#FF1493' }, { n: 'Gummy Bear', h: '#FF69B4' }, { n: 'Sweet Tart', h: '#EE82EE' }, { n: 'Taffy', h: '#FFC0CB' }, { n: 'Marshmallow', h: '#F9F7F7' }, { n: 'Macaron', h: '#F7D7B5' }, { n: 'Meringue', h: '#FFFFFF' }, { n: 'Gelato', h: '#FADADD' }, { n: 'Sorbet', h: '#FFDAB9' }, { n: 'Cupcake', h: '#F8C8DC' }
];

const fs = require('fs');
let html = colors.map(c => `      <div class="color-swatch-wrapper" title="Click to copy hex code" onclick="copyHex(this)">
        <div class="color-swatch" style="background:${c.h}"></div>
        <div class="color-meta" style="pointer-events: none;">
          <span class="color-name">${c.n}</span>
          <span class="color-hex">${c.h}</span>
        </div>
      </div>`).join('\n');

fs.writeFileSync('scratch_colors_v2.html', `<div class="swatch-grid">\n${html}\n</div>`);
