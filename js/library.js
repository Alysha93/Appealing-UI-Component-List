/**
 * FEMME UI â€” LIBRARY JS
 * Global controller for sidebar navigation, component interactions, 
 * and library-wide utility functions (like copy-to-clipboard).
 * 
 * This file is designed for easy learning and extension.
 */

'use strict';

/**
 * Navigation handler to switch between component sections.
 * @param {string} id - The ID suffix of the section to show (e.g., 'colors').
 * @param {HTMLElement} btn - The sidebar button that was clicked.
 */
function showSection(id, btn) {
  // Render the section if it hasn't been rendered yet
  renderSection(id);

  // Hide all sections using a common class selector
  document.querySelectorAll('.lib-section').forEach(s => s.classList.remove('active'));
  
  // Show the target section by its ID
  const target = document.getElementById('sec-' + id);
  if (target) {
    target.classList.add('active');
    // Reset scroll position to top when switching sections
    const mainContent = document.querySelector('.lib-main');
    if (mainContent) mainContent.scrollTop = 0;
  }
  
  // Update sidebar active state for visual feedback
  document.querySelectorAll('.lib-nav-item').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  
  // Update the component counter in the header
  updateComponentCount(id);
}

/**
 * Updates the component count in the top-left header logo area.
 */
function updateComponentCount(sectionId) {
  const counter = document.getElementById('lib-count');
  if (!counter) return;
  
  const counts = {
    colors: 100, typography: 100, tokens: 18,
    tables: 50, lists: 50, badges: 50, avatars: 50, loaders: 50,
    selection: 50, dropdowns: 50, overlays: 50,
    inputs: 50, forms: 50, pickers: 50,
    navigation: 50, tabs: 50, layout: 50, hero: 50, footers: 50,
    advanced: 50, cards: 50, dashboard: 50, buttons: 50
  };
  
  const count = counts[sectionId] || 0;
  counter.textContent = count + ' components';
}

// Show first section on load
document.addEventListener('DOMContentLoaded', () => {
  populateLibrary();
  showSection('colors', document.querySelector('.lib-nav-item'));
  updateComponentCount('colors');
});

/**
 * Filters sidebar navigation items based on search input.
 * @param {string} query - The search string.
 */
function searchComponents(query) {
  const q = query.toLowerCase().trim();
  const items = document.querySelectorAll('.lib-nav-item');
  const sections = document.querySelectorAll('.sidebar-section');
  
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    const isMatch = text.includes(q);
    item.classList.toggle('hidden', !isMatch);
  });

  // Hide empty sections
  sections.forEach(section => {
    const visibleItems = section.querySelectorAll('.lib-nav-item:not(.hidden)');
    section.style.display = visibleItems.length > 0 || q === '' ? 'block' : 'none';
  });
}

// â”€â”€ COMPONENT DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const COLOR_PALETTE = [
  { name: 'Silk Pink', hex: '#FFF0F5' }, { name: 'Blush Rose', hex: '#F8A8C4' }, { name: 'Petal', hex: '#FDDCEC' },
  { name: 'Peony', hex: '#FFB7CE' }, { name: 'Rose Quartz', hex: '#F7CAC9' }, { name: 'Sakura', hex: '#FFDDE2' },
  { name: 'Desert Rose', hex: '#E86FA3' }, { name: 'Flamingo', hex: '#FC8EAC' }, { name: 'Berry', hex: '#D44D5C' },
  { name: 'Mauve', hex: '#E0B0FF' }, { name: 'Cotton Candy', hex: '#FFBCD9' }, { name: 'Tulip', hex: '#FFB3E6' },
  { name: 'Camellia', hex: '#F3A1BE' }, { name: 'Magnolia', hex: '#F8F1F1' }, { name: 'Lavender', hex: '#CDB4FF' },
  { name: 'Amethyst', hex: '#9B72FF' }, { name: 'Lilac', hex: '#EDE5FF' }, { name: 'Wisteria', hex: '#B9A2D8' },
  { name: 'Iris', hex: '#5D3FD3' }, { name: 'Periwinkle', hex: '#CCCCFF' }, { name: 'Thistle', hex: '#D8BFD8' },
  { name: 'Plum', hex: '#DDA0DD' }, { name: 'Orchid', hex: '#DA70D6' }, { name: 'Heather', hex: '#A79AFF' },
  { name: 'Violet', hex: '#8F00FF' }, { name: 'Grape', hex: '#6F2DA8' }, { name: 'Indigo', hex: '#4B0082' },
  { name: 'Mulberry', hex: '#C54B8C' }, { name: 'Peach Glow', hex: '#FFD6A5' }, { name: 'Apricot', hex: '#FFB347' },
  { name: 'Cantaloupe', hex: '#FEC89A' }, { name: 'Sunrise', hex: '#FFD1DC' }, { name: 'Sherbet', hex: '#FFDAB9' },
  { name: 'Melon', hex: '#FDBCB4' }, { name: 'Coral Rose', hex: '#F88379' }, { name: 'Tea Rose', hex: '#F4C2C2' },
  { name: 'Misty Rose', hex: '#FFE4E1' }, { name: 'Champagne', hex: '#F7E7CE' }, { name: 'Ivory Blush', hex: '#FFF5F5' },
  { name: 'Cream', hex: '#FFFDD0' }, { name: 'Buttercup', hex: '#FFF9C4' }, { name: 'Lemon Chiffon', hex: '#FFFACD' },
  { name: 'Banana', hex: '#FFE135' }, { name: 'Honey', hex: '#F9E076' }, { name: 'Amber', hex: '#FFBF00' },
  { name: 'Gold Dust', hex: '#E6BE8A' }, { name: 'Luxury Gold', hex: '#D4AF37' }, { name: 'Royal Gold', hex: '#C5A059' },
  { name: 'Bronze', hex: '#CD7F32' }, { name: 'Copper', hex: '#B87333' }, { name: 'Mint Cream', hex: '#F5FFFA' },
  { name: 'Sage', hex: '#BCCA8A' }, { name: 'Pistachio', hex: '#93C572' }, { name: 'Honeydew', hex: '#F0FFF0' },
  { name: 'Seafoam', hex: '#9FE2BF' }, { name: 'Aquamarine', hex: '#7FFFD4' }, { name: 'Celeste', hex: '#B2FFFF' },
  { name: 'Eucalyptus', hex: '#D0F0C0' }, { name: 'Jade', hex: '#00A86B' }, { name: 'Emerald', hex: '#50C878' },
  { name: 'Sky Blue', hex: '#87CEEB' }, { name: 'Powder Blue', hex: '#B0E0E6' }, { name: 'Alice Blue', hex: '#F0F8FF' },
  { name: 'Baby Blue', hex: '#89CFF0' }, { name: 'Morning Mist', hex: '#E0F2F1' }, { name: 'Azure Whisper', hex: '#F0FFFF' },
  { name: 'Cornflower', hex: '#6495ED' }, { name: 'Forget-me-not', hex: '#AAF0D1' }, { name: 'Slate Blossom', hex: '#A0B2C6' },
  { name: 'Deep Ocean', hex: '#0047AB' }, { name: 'Nude', hex: '#E3BC9A' }, { name: 'Sand', hex: '#F4A460' },
  { name: 'Beige', hex: '#F5F5DC' }, { name: 'Taupe', hex: '#483C32' }, { name: 'Pebble', hex: '#333333' },
  { name: 'Charcoal', hex: '#36454F' }, { name: 'Midnight', hex: '#191970' }, { name: 'Rosewood', hex: '#65000B' },
  { name: 'Espresso', hex: '#3D2B1F' }, { name: 'Mink', hex: '#88716B' }, { name: 'Pearl', hex: '#FDEEF4' },
  { name: 'Seashell', hex: '#FFF5EE' }, { name: 'Linen', hex: '#FAF0E6' }, { name: 'Snow', hex: '#FFFAFA' },
  { name: 'Vapor', hex: '#F5F5F5' }, { name: 'Cloud', hex: '#ECF0F1' }, { name: 'Silver', hex: '#C0C0C0' },
  { name: 'Platinum', hex: '#E5E4E2' }, { name: 'Diamond', hex: '#B9F2FF' }, { name: 'Stardust', hex: '#FBFBFB' },
  { name: 'Berry Punch', hex: '#FF1493' }, { name: 'Gummy Bear', hex: '#FF69B4' }, { name: 'Sweet Tart', hex: '#EE82EE' },
  { name: 'Taffy', hex: '#FFC0CB' }, { name: 'Marshmallow', hex: '#F9F7F7' }, { name: 'Macaron', hex: '#F7D7B5' },
  { name: 'Meringue', hex: '#FFFFFF' }, { name: 'Gelato', hex: '#FADADD' }, { name: 'Sorbet', hex: '#FFDAB9' },
  { name: 'Cupcake', hex: '#F8C8DC' }
];

const FONT_LIST = [
  'Playfair Display', 'Cormorant Garamond', 'Cinzel', 'Bodoni Moda', 'Lora', 'Merriweather', 'Prata', 'EB Garamond',
  'Libre Baskerville', 'Cardo', 'Crimson Text', 'Domine', 'Old Standard TT', 'Alice', 'Spectral', 'Vollkorn',
  'Zilla Slab', 'Bitter', 'Abril Fatface', 'Arvo', 'Josefin Slab', 'Rokkitt', 'Vidaloka', 'Gentium Book Plus',
  'Poppins', 'Montserrat', 'Raleway', 'Inter', 'Lato', 'Open Sans', 'Roboto', 'Quicksand',
  'Outfit', 'Mulish', 'Work Sans', 'Nunito', 'Montserrat Alternates', 'Josefin Sans', 'Urbanist', 'League Spartan',
  'Questrial', 'Tenor Sans', 'Kumbh Sans', 'Lexend', 'Space Grotesk', 'Syne', 'Manrope', 'Be Vietnam Pro',
  'Public Sans', 'Righteous', 'Comfortaa', 'Fredoka', 'DM Serif Display', 'Syncopate', 'Michroma', 'Forum',
  'Marcellus', 'Bellefair', 'Yeseva One', 'Italiana', 'Julius Sans One', 'Unna', 'Gilda Display', 'Rozha One',
  'Cinzel Decorative', 'Major Mono Display', 'Monoton', 'Staatliches', 'Bebas Neue', 'Oswald', 'Anton', 'Lobster',
  'Pacifico', 'Caveat', 'Great Vibes', 'Dancing Script', 'Alex Brush', 'Sacramento', 'Allura', 'Pinyon Script',
  'Petit Formal Script', 'Mrs Saint Delafield', 'Meow Script', 'Homemade Apple', 'Reenie Beanie', 'Nothing You Could Do',
  'Shadows Into Light', 'Indie Flower', 'Gloria Hallelujah', 'Amatic SC', 'Cookie', 'Yellowtail', 'Satisfy', 'Courgette',
  'Kaushan Script', 'Grand Hotel', 'Damion', 'Clicker Script', 'Herr Von Muellerhoff', 'Parisienne', 'Rochester'
];

function populateLibrary() {
  // Populate Colors
  const colorGrid = document.getElementById('main-swatch-grid');
  if (colorGrid) {
    colorGrid.innerHTML = COLOR_PALETTE.map(c => `
      <div class="color-swatch-wrapper comp-preview">
        <button class="copy-btn-pop" onclick="copyHex(this.parentElement)">Copy Hex</button>
        <div class="color-swatch" style="background:${c.hex}"></div>
        <div class="color-meta" style="pointer-events: none;">
          <span class="color-name">${c.name}</span>
          <span class="color-hex">${c.hex}</span>
        </div>
      </div>
    `).join('');
  }

  // Populate Fonts
  const fontList = document.getElementById('main-type-list');
  if (fontList) {
    fontList.innerHTML = FONT_LIST.map(f => `
      <div class="type-row comp-preview">
        <button class="copy-btn-pop" onclick="copyToClipboard('${f}')">Copy Font</button>
        <span class="type-label" style="pointer-events:none;">${f}</span>
        <div style="font-family:'${f}', sans-serif; font-size: 2rem; color: var(--text); pointer-events:none;">Elegant Typography Sample</div>
      </div>
    `).join('');
  }
}

// â”€â”€ COMPONENT REGISTRY (Expansion 50x) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const COMPONENT_REGISTRY = {
  tables: () => generateVariants('table', 50),
  lists: () => generateVariants('list', 50),
  badges: () => generateVariants('badge', 50),
  avatars: () => generateVariants('avatar', 50),
  loaders: () => generateVariants('loader', 50),
  selection: () => generateVariants('selection', 50),
  dropdowns: () => generateVariants('dropdown', 50),
  overlays: () => generateVariants('overlays', 50),
  inputs: () => generateVariants('input', 50),
  forms: () => generateVariants('form', 50),
  pickers: () => generateVariants('picker', 50),
  navigation: () => generateVariants('navigation', 50),
  tabs: () => generateVariants('tabs', 50),
  layout: () => generateVariants('layout', 50),
  hero: () => generateVariants('hero', 50),
  footers: () => generateVariants('footers', 50),
  advanced: () => generateVariants('advanced', 50),
  dashboard: () => generateVariants('dashboard', 50),
  cards: () => generateVariants('cards', 50)
};

/**
 * Main entry point for rendering expanded sections.
 */
function renderSection(id) {
  const container = document.getElementById('render-' + id);
  if (!container) return;
  
  // Only render if empty to save performance
  if (container.children.length > 0) return;

  const generator = COMPONENT_REGISTRY[id];
  if (generator) {
    const variants = generator();
    container.innerHTML = `<div class="comp-row wrap" style="gap:24px;">${variants.join('')}</div>`;
  }
}

/**
 * Factory function to generate N unique variants for a type.
 * This is where the 'girly fancy' magic happens.
 */
function generateVariants(type, count) {
  const variants = [];
  for (let i = 1; i <= count; i++) {
    variants.push(getTemplate(type, i));
  }
  return variants;
}

/**
 * Template switcher for all component types.
 * Each type has a set of styles (Rose, Gold, Glass, Neumorphic, etc.)
 */
function getTemplate(type, index) {
  const styles = ['rose', 'gold', 'glass', 'neumorphic', 'dark', 'outline', 'glow', 'minimal'];
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  const style = styles[(index - 1) % styles.length];
  const size = sizes[(index - 1) % sizes.length];

  switch(type) {
    case 'badge': {
      const icons = ['', 'âœ¦ ', 'â¤ ', 'âœ¨ ', 'âœ“ ', 'âœ‰ ', 'ðŸ›’ ', 'âŒ› '];
      const icon = icons[index % icons.length];
      const radii = ['var(--radius-full)', 'var(--radius-sm)', '0', 'var(--radius-md)'];
      return `<div class="comp-preview">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        <span class="badge badge-${style}" style="font-size:${8 + (index % 10)}px; border-radius:${radii[index % radii.length]};">${icon}Badge ${index}</span>
      </div>`;
    }

    case 'table': {
      const tStyles = ['table-rose','table-gold','table-glass','table-neumorphic'];
      const tExtras = ['','table-striped-rose','table-striped-gold','table-bordered','table-dashed-gold','table-glow-rose','table-tight','table-airy'];
      const baseClass = tStyles[index % tStyles.length];
      const extraClass = tExtras[index % tExtras.length];
      const hasIcon = index % 3 === 0;
      const colLabels = [['#ID','Member','Dues'],['Ref','Design','Phase'],['No.','Asset','Value']][index % 3];
      return `<div class="comp-preview" style="width:100%;max-width:480px;">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        <table class="table ${baseClass} ${extraClass}" style="width:100%;">
          <thead><tr><th>${colLabels[0]}</th><th>${colLabels[1]}</th><th>${colLabels[2]}</th></tr></thead>
          <tbody>
            <tr><td>${index.toString().padStart(3,'0')}</td><td>${hasIcon?'âœ¦ ':''}Luxury Item ${index}</td><td style="font-weight:700;">$${(index+1)*45}</td></tr>
            <tr><td>${(index+1).toString().padStart(3,'0')}</td><td>${hasIcon?'âœ¨ ':''}Edition ${index}</td><td><span class="badge badge-${style}">Variant</span></td></tr>
          </tbody>
        </table>
      </div>`;
    }

    case 'layout': {
      const layouts = ['grid-2','grid-3','grid-stack'];
      const lType = index % layouts.length;
      const lAccent = style === 'gold' ? 'gold' : 'primary-light';
      const box = `padding:18px;border-radius:12px;border:1.5px solid var(--border);background:var(--surface);text-align:center;transition:0.3s;cursor:pointer;`;
      return `<div class="comp-preview" style="width:100%;max-width:500px;">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        <div class="grid-preview ${layouts[lType]}" style="gap:15px;border:1px dashed var(--${lAccent});padding:10px;border-radius:15px;">
          <div style="${box}" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'"><h5 style="margin:0;font-size:12px;">Panel A (${index})</h5></div>
          <div style="${box}" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'"><h5 style="margin:0;font-size:12px;">Panel B (${index})</h5></div>
          ${lType === 2 ? `<div style="${box}"><h5 style="margin:0;font-size:12px;">Panel C</h5></div>` : ''}
        </div>
      </div>`;
    }

    case 'avatar': {
      const shapes = ['50%','12px','4px','30%'];
      const borderColors = ['var(--primary)','var(--gold)','var(--border)','transparent'];
      const shape = shapes[index % shapes.length];
      const bColor = borderColors[index % borderColors.length];
      const sz = 48 + (index % 40);
      return `<div class="comp-preview">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        <div class="avatar-wrap" style="position:relative;display:inline-block;">
          <img src="https://i.pravatar.cc/150?u=${index}" class="avatar avatar-${style}"
               style="width:${sz}px;height:${sz}px;border-radius:${shape};border-color:${bColor};${index%10===0?'filter:grayscale(1);':''}">
          ${index % 4 === 0 ? '<span style="position:absolute;bottom:2px;right:2px;width:10px;height:10px;background:#4CAF50;border:2px solid #fff;border-radius:50%;"></span>' : ''}
        </div>
      </div>`;
    }

    case 'loader': {
      if (index % 2 === 0) {
        const sz = 20 + (index % 30);
        return `<div class="comp-preview">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div class="loader-petal" style="border-top-color:var(--${style==='gold'?'gold':'primary'});width:${sz}px;height:${sz}px;"></div>
        </div>`;
      } else {
        return `<div class="comp-preview" style="width:200px;">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div class="loader-shimmer" style="height:${4+(index%10)}px;background:var(--surface-alt);"></div>
          <span style="font-size:10px;color:var(--text-muted);margin-top:4px;display:block;">Loading Luxe ${index}%</span>
        </div>`;
      }
    }

    case 'list': {
      const listTypes = ['notif','user','message','task','activity'];
      const lType = listTypes[index % listTypes.length];
      const lAccent = style === 'gold' ? 'gold' : 'primary';
      if (lType === 'notif') {
        return `<div class="comp-preview" style="width:100%;max-width:300px;">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div class="notif-item" style="border:1px solid var(--border);background:${index%4===0?'var(--primary-light)':'var(--surface)'};">
            <div class="notif-icon" style="background:var(--grad-${style==='gold'?'luxury':'rose'});">âœ¦</div>
            <div class="notif-content">
              <div class="notif-title">Elite Status Update ${index}</div>
              <div class="notif-body">Your luxury experience has been upgraded.</div>
            </div>
          </div>
        </div>`;
      } else if (lType === 'user') {
        return `<div class="comp-preview" style="width:100%;max-width:320px;">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--surface);border-radius:12px;border:1px solid var(--border);">
            <img src="https://i.pravatar.cc/100?u=${index}" style="width:40px;height:40px;border-radius:50%;border:2px solid var(--${lAccent});">
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:700;">Curator ${index}</div>
              <div style="font-size:11px;color:var(--text-muted);">${index%2===0?'Active Now':'Last seen 2h ago'}</div>
            </div>
            <button class="btn btn-pill" style="padding:4px 12px;font-size:10px;">Follow</button>
          </div>
        </div>`;
      } else if (lType === 'message') {
        return `<div class="comp-preview" style="width:100%;max-width:280px;">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div style="padding:12px;background:var(--${style==='gold'?'surface-alt':'primary-light'});border-radius:16px 16px 16px 4px;">
            <p style="margin:0;font-size:12px;line-height:1.4;">Hey! The ${style} collection is simply stunning. âœ¨</p>
            <span style="font-size:9px;opacity:0.6;display:block;margin-top:4px;">12:0${index%10} PM</span>
          </div>
        </div>`;
      } else {
        return `<div class="comp-preview" style="width:100%;max-width:300px;">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div style="display:flex;justify-content:space-between;align-items:center;padding:15px;border-bottom:1px solid var(--border);">
            <span style="font-size:13px;font-weight:600;">Luxury Milestone ${index}</span>
            <span class="badge badge-${style}" style="font-size:9px;">Completed</span>
          </div>
        </div>`;
      }
    }

    case 'selection': {
      const selType = index % 3;
      const radii = ['4px','var(--radius-full)','0','12px'];
      const sRadius = radii[index % radii.length];
      if (selType === 0) {
        const icons = ['âœ“','âœ¦','â¤','âœ¨'];
        return `<div class="comp-preview">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div style="display:flex;align-items:center;gap:10px;">
            <div class="ux-box ${style} ${index%2===0?'active':''}" style="border-radius:${sRadius}">${index%2===0?icons[index%icons.length]:''}</div>
            <span style="font-size:14px;font-weight:500;">Selection ${index}</span>
          </div>
        </div>`;
      } else if (selType === 1) {
        return `<div class="comp-preview">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div style="display:flex;align-items:center;gap:10px;">
            <div class="ux-radio ${style} ${index%2===0?'active':''}" style="border-width:${index%3+1}px;${index%5===0?'box-shadow:var(--shadow-glow);':''}"></div>
            <span style="font-size:14px;font-weight:500;">Choice ${index}</span>
          </div>
        </div>`;
      } else {
        return `<div class="comp-preview">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div style="display:flex;align-items:center;gap:12px;">
            <div class="ux-toggle ${index%2===0?'active':''}"
                 style="transform:scale(${0.9+(index%3)*0.1});background:${index%2===0?`var(--grad-${style==='gold'?'luxury':'rose'})`:'var(--border)'};"
                 onclick="this.classList.toggle('active')"></div>
            <span style="font-size:14px;font-weight:500;">Toggle Lux ${index}</span>
          </div>
        </div>`;
      }
    }

    case 'dropdown': {
      const dStyles = ['','select-rose','select-gold','select-glass','select-minimal'];
      const dShapes = ['','select-pill'];
      const dArrows = ['','select-arrow-gold','select-arrow-dot'];
      const dStyle = dStyles[index % dStyles.length];
      const dShape = dShapes[index % dShapes.length];
      const dArrow = dArrows[index % dArrows.length];
      const labels = ['Pick a Collection','Select Tier','Choose Edition','Style Option','Luxe Category'];
      return `<div class="comp-preview">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        <div style="position:relative;width:fit-content;">
          <select class="select-lux ${dStyle} ${dShape}">
            <option>${labels[index % labels.length]} ${index}</option>
            <option>Silk Rose Series</option>
            <option>Golden Hour Elite</option>
            <option>Glass Prism Collection</option>
          </select>
          <div class="select-arrow ${dArrow}">${dArrow===''?'â–¼':''}</div>
        </div>
      </div>`;
    }

    case 'overlays': {
      if (index % 3 === 0) {
        return `<div class="comp-preview">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div class="tooltip-lux tooltip-${style}">Premium Insight ${index}</div>
        </div>`;
      } else if (index % 3 === 1) {
        return `<div class="comp-preview">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div style="width:240px;padding:15px;background:var(--surface);border-radius:12px;box-shadow:var(--shadow-heavy);border:1px solid var(--border);position:relative;">
            <div style="font-size:12px;font-weight:700;color:var(--primary-dark);">Toast Notification ${index}</div>
            <div style="font-size:10px;color:var(--text-muted);">Successfully synchronized.</div>
            <div style="position:absolute;top:8px;right:8px;font-size:10px;opacity:0.3;">âœ•</div>
          </div>
        </div>`;
      } else {
        return `<div class="comp-preview">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div style="width:200px;height:120px;background:rgba(255,255,255,0.7);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.3);border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;box-shadow:0 20px 40px rgba(0,0,0,0.1);">
            <div style="width:30px;height:30px;background:var(--grad-${style==='gold'?'luxury':'rose'});border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;">âœ“</div>
            <span style="font-size:11px;font-weight:700;">Confirmed ${index}</span>
          </div>
        </div>`;
      }
    }

    case 'inputs': {
      const iRadii = ['var(--radius-full)','var(--radius-lg)','0','12px'];
      const iBorders = [
        '1.5px solid var(--border)',
        'none; border-bottom:2px solid var(--primary); border-radius:0;',
        '2px solid var(--primary-light)',
        '1px solid var(--gold)'
      ];
      const iRadius = iRadii[index % iRadii.length];
      const iBorder = iBorders[index % iBorders.length];
      const hasIcon = index % 5 === 0;
      return `<div class="comp-preview" style="width:100%;max-width:320px;">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        <div style="margin-bottom:10px;">
          <label style="display:block;font-size:11px;font-weight:700;color:var(--primary-dark);margin-bottom:4px;text-transform:uppercase;letter-spacing:0.05em;">Luxe Label ${index}</label>
          <div style="position:relative;">
            <input type="${index%7===0?'password':'text'}" class="input-lux"
                   style="border-radius:${iRadius};border:${iBorder};padding-left:${hasIcon?'40px':'20px'};"
                   placeholder="Enter Details ${index}...">
            ${hasIcon ? '<span style="position:absolute;left:15px;top:50%;transform:translateY(-50%);font-size:12px;color:var(--text-muted);">âœ¦</span>' : ''}
          </div>
        </div>
      </div>`;
    }

    case 'forms': {
      const fType = index % 3;
      if (fType === 0) {
        return `<div class="comp-preview" style="width:100%;max-width:320px;">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div class="form-lux" style="border-top:4px solid var(--${style==='gold'?'gold':'primary'});box-shadow:0 15px 40px rgba(0,0,0,0.05);">
            <h4 style="font-family:var(--font-heading);font-size:18px;margin-bottom:5px;">Luxe Login ${index}</h4>
            <p style="font-size:11px;color:var(--text-muted);margin-bottom:15px;">Enter your credentials to enter the circle.</p>
            <input type="text" class="input-lux" placeholder="Email Address">
            <input type="password" class="input-lux" placeholder="Secret Key">
            <button class="btn btn-primary" style="width:100%;margin-top:10px;">Enter</button>
          </div>
        </div>`;
      } else if (fType === 1) {
        return `<div class="comp-preview" style="width:100%;max-width:400px;">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div style="display:flex;gap:10px;background:var(--surface-alt);padding:20px;border-radius:var(--radius-full);border:1.5px solid var(--border);">
            <input type="email" class="input-lux" style="border:none;background:transparent;padding:0 10px;flex:1;" placeholder="Newsletter ${index}...">
            <button class="btn btn-pill btn-${style==='gold'?'gold':'primary'}" style="white-space:nowrap;">Join List</button>
          </div>
        </div>`;
      } else {
        return `<div class="comp-preview" style="width:100%;max-width:300px;">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:24px;padding:30px;text-align:center;">
            <div style="width:50px;height:50px;background:var(--grad-rose);border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;color:#fff;">âœ‰</div>
            <h4 style="font-size:16px;margin-bottom:15px;">Inquiry ${index}</h4>
            <textarea class="input-lux" style="height:80px;resize:none;margin-bottom:15px;" placeholder="Message..."></textarea>
            <button class="btn btn-gold" style="width:100%;">Send Request</button>
          </div>
        </div>`;
      }
    }

    case 'pickers': {
      const pStyleCls = ['','slider-rose','slider-gold','slider-glass'][index % 4];
      const pThickCls = ['','slider-thick','slider-thin'][index % 3];
      const pShapeCls = ['','slider-pill'][index % 2];
      return `<div class="comp-preview" style="width:100%;max-width:280px;">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        <div style="display:flex;flex-direction:column;gap:12px;padding:10px;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:11px;font-weight:700;color:var(--primary-dark);text-transform:uppercase;">Volume Level ${index}</span>
            <span style="font-size:10px;color:var(--text-muted);font-weight:600;">${index * 2}%</span>
          </div>
          <input type="range" class="slider-lux ${pStyleCls} ${pThickCls} ${pShapeCls}" value="${index % 100}">
          ${index % 3 === 0 ? '<div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text-muted);font-weight:700;"><span>MIN</span><span>MAX</span></div>' : ''}
        </div>
      </div>`;
    }

    case 'hero': {
      const hType = index % 3;
      if (hType === 0) {
        return `<div class="comp-preview" style="width:100%;max-width:400px;">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div class="hero-mini" style="background:var(--grad-${style==='gold'?'luxury':'rose'});">
            <h2 style="font-size:24px;">Editorial Hero ${index}</h2>
            <p style="font-size:11px;opacity:0.8;">The world's first ${style} collection for avant-garde brands.</p>
            <button class="btn btn-pill" style="margin-top:15px;background:#fff;color:var(--text);border:none;">Explore</button>
          </div>
        </div>`;
      } else if (hType === 1) {
        return `<div class="comp-preview" style="width:100%;max-width:450px;">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div style="padding:60px 20px;text-align:center;border:2px solid var(--${style==='gold'?'gold':'primary-light'});border-radius:20px;background:var(--surface);">
            <span style="font-size:10px;font-weight:700;color:var(--primary);letter-spacing:2px;">NEW ARRIVAL ${index}</span>
            <h1 style="font-family:var(--font-heading);font-size:32px;margin:10px 0;">Style &amp; Grace</h1>
            <div style="height:2px;width:40px;background:var(--primary);margin:20px auto;"></div>
            <p style="font-size:13px;max-width:300px;margin:0 auto;">Limited edition ${style} curated just for you.</p>
          </div>
        </div>`;
      } else {
        return `<div class="comp-preview" style="width:100%;max-width:400px;">
          <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
          <div style="height:200px;border-radius:20px;overflow:hidden;position:relative;display:flex;align-items:flex-end;padding:20px;background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400&auto=format&fit=crop');background-size:cover;">
            <div style="color:#fff;">
              <h3 style="margin:0;font-size:18px;">Visual Collection ${index}</h3>
              <span style="font-size:10px;opacity:0.7;">Modern ${style.toUpperCase()} Aesthetic</span>
            </div>
          </div>
        </div>`;
      }
    }

    case 'footers': {
      const fAccent = style === 'gold' ? 'gold' : 'primary';
      return `<div class="comp-preview" style="width:100%;max-width:400px;">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        <footer style="background:var(--surface-alt);padding:24px;border-radius:15px;display:flex;justify-content:space-between;align-items:center;border-left:5px solid var(--${fAccent});">
          <span style="font-family:var(--font-heading);font-weight:800;font-size:16px;color:var(--primary-dark);">FEMME ${index}</span>
          <div style="display:flex;gap:15px;font-size:11px;font-weight:600;color:var(--text-muted);">
            <span>Terms</span><span>Privacy</span><span>Inquiry</span>
          </div>
        </footer>
      </div>`;
    }

    case 'advanced': {
      return `<div class="comp-preview" style="width:100%;max-width:320px;">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        <div class="accordion-item" style="border:1px solid var(--border);border-radius:12px;background:var(--surface);overflow:hidden;">
          <div style="padding:15px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;" onclick="this.nextElementSibling.classList.toggle('hidden')">
            <span style="font-size:13px;font-weight:700;">Expansion Module ${index}</span>
            <span style="color:var(--primary);font-size:18px;">+</span>
          </div>
          <div class="hidden" style="padding:0 20px 20px;font-size:12px;color:var(--text-muted);line-height:1.5;">
            Luxury accordion system with ${style} accents. Optimized for mobile and desktop.
          </div>
        </div>
      </div>`;
    }

    case 'cards': {
      const cAccent = style === 'gold' ? 'luxury' : 'rose';
      return `<div class="comp-preview" style="width:100%;max-width:280px;">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        <div style="padding:24px;border-radius:16px;border:1px solid var(--border);background:var(--surface);box-shadow:var(--shadow-soft);">
          <div style="height:120px;border-radius:8px;background:var(--grad-${cAccent});margin-bottom:15px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;">âœ¦</div>
          <h4 style="margin:0;font-size:16px;">Luxe Card ${index}</h4>
          <p style="font-size:12px;color:var(--text-muted);margin:8px 0;">Premium card variant with ${style} accents.</p>
          <button class="btn btn-pill" style="width:100%;font-size:11px;">View Detail</button>
        </div>
      </div>`;
    }

    case 'buttons': {
      const bType = index % 4;
      const bTexts = ['Explore','Reserve','Purchase','Contact'];
      const bText = bTexts[index % bTexts.length];
      let bHtml;
      if (bType === 0) {
        bHtml = `<button class="btn btn-pill btn-${style}">${bText} ${index}</button>`;
      } else if (bType === 1) {
        bHtml = `<button class="btn btn-outline" style="border-color:var(--${style==='gold'?'gold':'primary'})">${bText} ${index}</button>`;
      } else if (bType === 2) {
        bHtml = `<button class="btn" style="background:var(--grad-${style==='gold'?'luxury':'rose'});color:#fff;box-shadow:var(--shadow-glow);border:none;">âœ¦ ${bText} ${index}</button>`;
      } else {
        bHtml = `<button class="btn btn-glass">${bText} ${index} âœ¨</button>`;
      }
      return `<div class="comp-preview">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        ${bHtml}
      </div>`;
    }

    case 'dashboard': {
      const dAccent = style === 'gold' ? 'luxury' : 'rose';
      const dColor = style === 'gold' ? 'gold-dark' : 'primary-dark';
      return `<div class="comp-preview" style="width:100%;max-width:260px;">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        <div class="dash-card" style="position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;right:0;width:60px;height:60px;background:var(--grad-${dAccent});opacity:0.1;border-radius:0 0 0 100%;"></div>
          <span style="font-size:11px;text-transform:uppercase;color:var(--text-muted);font-weight:700;letter-spacing:1px;">Market Cap ${index}</span>
          <div class="dash-stat" style="color:var(--${dColor});margin:5px 0;">$${(index*242).toLocaleString()}</div>
          <div style="height:4px;width:100%;background:var(--border);border-radius:2px;margin-top:8px;">
            <div style="height:100%;width:${20+(index%70)}%;background:var(--grad-${dAccent});border-radius:2px;"></div>
          </div>
          <div style="font-size:9px;margin-top:10px;color:#4CAF50;font-weight:700;">+${index%12}% from yesterday</div>
        </div>
      </div>`;
    }

    default:
      return `<div class="comp-preview">
        <button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy Code</button>
        <div class="placeholder-${style}" style="padding:${20+(index%20)}px;">Luxury ${type} variant ${index}</div>
      </div>`;
  }
}






function copyComponentHTML(el) {
  // Create a deep clone to manipulate without affecting DOM
  const clone = el.cloneNode(true);
  
  // Remove the copy button itself and any specific library overlays
  const copyBtn = clone.querySelector('.copy-btn-pop');
  if (copyBtn) copyBtn.remove();
  
  // Get the innerHTML of the remaining content
  const htmlToCopy = clone.innerHTML.trim();
  
  copyToClipboard(htmlToCopy).then(() => {
    showToast('success', 'ðŸ§¬ HTML Copied!', 'The component code is ready for use.');
  }).catch(err => {
    showToast('error', 'Copy Failed', 'Please try again.');
  });
}

/**
 * Enhanced toast notification system.
 */
function showToast(type, message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.style.cssText = `
    background: var(--text);
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    gap: 12px;
    animation: toastScaleIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    font-size: 14px;
    font-weight: 500;
  `;
  
  const icon = type === 'success' ? 'âœ“' : 'âœ•';
  toast.innerHTML = `<span style="background:rgba(255,255,255,0.2); width:20px; height:20px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:10px;">${icon}</span> ${message}`;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'toastScaleOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Add these to CSS keyframes if missing
// @keyframes toastScaleIn { from { transform: scale(0.8) translateY(20px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
// @keyframes toastScaleOut { from { transform: scale(1); opacity: 1; } to { transform: scale(0.8) translateY(20px); opacity: 0; } }

// â”€â”€ DARK MODE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let isDark = false;
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
  document.getElementById('theme-btn').textContent = isDark ? 'â˜€ï¸' : 'ðŸŒ™';
}

// â”€â”€ MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function openModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.add('hidden'); document.body.style.overflow = ''; }
}

function closeModalOnBackdrop(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape')
    document.querySelectorAll('.modal-backdrop:not(.hidden)').forEach(m => { m.classList.add('hidden'); document.body.style.overflow = ''; });
});

// â”€â”€ TOAST â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const toastIcons = { success:'âœ…', warning:'âš ï¸', error:'âŒ', info:'ðŸ’œ' };

function showToast(type, title, message, duration = 4500) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${toastIcons[type]||'ðŸ’¬'}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      ${message ? `<div class="toast-body">${message}</div>` : ''}
    </div>
    <button class="toast-close" onclick="dismissToast(this.closest('.toast'))">âœ•</button>`;
  container.appendChild(toast);
  setTimeout(() => dismissToast(toast), duration);
}

/**
 * Logic to dismiss a toast notification with a fade-out animation.
 */
function dismissToast(toast) {
  if (!toast) return;
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(10px) scale(0.95)';
  setTimeout(() => toast.remove(), 300);
}

/**
 * Generic utility to copy text to the user's clipboard.
 * @param {string} text - The string to copy.
 * @returns {Promise} Resolves when the copy is complete.
 */
async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      return await navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
        document.execCommand('copy') ? res() : rej();
        textArea.remove();
      });
    }
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

/**
 * Specialized handler for copying color hex codes from swatch UI elements.
 * Extracts the hex code from the .color-hex sibling of the clicked element.
 * @param {HTMLElement} el - The clicked swatch wrapper.
 */
function copyHex(el) {
  const hex = el.querySelector('.color-hex')?.textContent || '';
  if (hex) {
    copyToClipboard(hex).then(() => {
      showToast('success', 'ðŸŽ¨ Color Copied!', `${hex} is now in your clipboard.`);
    });
  }
}

// â”€â”€ TABS (for nav section) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function switchTab2(groupId, contentId, btn) {
  const group = document.getElementById(groupId);
  if (!group) return;
  // Hide all panes belonging to this group
  const allIds = Array.from(group.querySelectorAll('button')).map(b => {
    const m = b.getAttribute('onclick')?.match(/switchTab2\('[^']+','([^']+)'/);
    return m ? m[1] : null;
  }).filter(Boolean);
  allIds.forEach(id => { const p = document.getElementById(id); if (p) p.classList.add('hidden'); });
  // Show target
  const target = document.getElementById(contentId);
  if (target) target.classList.remove('hidden');
  // Update tabs
  group.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// â”€â”€ ACCORDION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function toggleAccordion(trigger) {
  const item = trigger.closest('.accordion-item');
  const body = item.querySelector('.accordion-body');
  const icon = item.querySelector('.accordion-icon');
  const isOpen = item.classList.contains('active');
  document.querySelectorAll('.accordion-item').forEach(i => {
    i.classList.remove('active');
    i.querySelector('.accordion-body').style.display = 'none';
    i.querySelector('.accordion-icon').textContent = 'â†“';
  });
  if (!isOpen) {
    item.classList.add('active');
    body.style.display = 'block';
    icon.textContent = 'â†‘';
  }
}

// â”€â”€ TAGS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function toggleTag(el) { el.classList.toggle('active'); }

// â”€â”€ WISHLIST â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function toggleWishlist(btn) {
  btn.classList.toggle('active');
  showToast(btn.classList.contains('active') ? 'success' : 'info',
            btn.classList.contains('active') ? 'ðŸ’– Added to Wishlist' : 'Removed from Wishlist', '');
}

// â”€â”€ ADD TO CART â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function addToCart(name, price) {
  showToast('success', `ðŸ›ï¸ Added to Bag!`, `${name} (${price}) has been added.`);
}

// â”€â”€ CART QUANTITY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function adjustQty(btn, delta) {
  const w = btn.closest('.qty-stepper');
  const v = w.querySelector('.qty-val');
  let n = parseInt(v.textContent) + delta;
  if (n < 1) n = 1; if (n > 99) n = 99;
  v.textContent = n;
}

// â”€â”€ REMOVE CART ITEM â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function removeCartItem(btn) {
  const item = btn.closest('.cart-item');
  if (item) {
    item.style.transition = 'all .3s ease';
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    setTimeout(() => item.remove(), 300);
    showToast('info', 'Item removed', '');
  }
}

// â”€â”€ LOADING BUTTON â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function loadingBtn(btnId, spinnerId) {
  const btn = document.getElementById(btnId);
  const spinner = document.getElementById(spinnerId);
  const text = btn.querySelector('span:first-child');
  btn.disabled = true;
  text.textContent = 'Processingâ€¦';
  spinner.classList.remove('hidden');
  setTimeout(() => {
    btn.disabled = false;
    text.textContent = 'âœ“ Done!';
    spinner.classList.add('hidden');
    btn.style.background = 'linear-gradient(135deg,#A8E6CF,#4CAF80)';
    showToast('success','âœ“ Order Confirmed!','Your order is being processed.');
    setTimeout(() => { text.textContent = 'Place Order'; btn.style.background = ''; }, 3000);
  }, 2000);
}

// â”€â”€ NEWSLETTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function subscribeNewsletter(inputId) {
  const input = document.getElementById(inputId || 'nl-email');
  const email = input?.value.trim();
  if (!email || !email.includes('@')) {
    showToast('error','Invalid email','Please enter a valid email address.'); return;
  }
  showToast('success','ðŸ’Œ Welcome to the circle!',`We'll send beauty tips to ${email}`);
  if (input) input.value = '';
}

// â”€â”€ TESTIMONIALS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let currentTestimonial = 0;
let testimonialTimer = null;

function goToTestimonial(index) {
  const cards = document.querySelectorAll('.testimonial-card');
  const dots  = document.querySelectorAll('.t-dot');
  cards.forEach(c => c.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  if (cards[index]) cards[index].classList.add('active');
  if (dots[index])  dots[index].classList.add('active');
  currentTestimonial = index;
}

function startTestimonialAuto() {
  testimonialTimer = setInterval(() => {
    const total = document.querySelectorAll('.testimonial-card').length;
    goToTestimonial((currentTestimonial + 1) % total);
  }, 5000);
}

// â”€â”€ BOOKING CALENDAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let calYear = 2026, calMonth = 3;
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_NAMES   = ['Su','Mo','Tu','We','Th','Fr','Sa'];
const BOOKED      = ['9:00 AM','11:00 AM','3:00 PM'];

function renderCalendar() {
  const grid = document.getElementById('calendar-grid');
  if (!grid) return;
  document.getElementById('cal-month-label').textContent = `${MONTH_NAMES[calMonth]} ${calYear}`;
  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const today = new Date();
  let html = DAY_NAMES.map(d => `<div class="cal-day-header">${d}</div>`).join('');
  for (let i = 0; i < firstDay; i++) html += `<div class="cal-day cal-empty"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(calYear, calMonth, d);
    const isToday = date.toDateString() === today.toDateString();
    const isPast  = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let cls = 'cal-day' + (isToday ? ' cal-today' : '') + (isPast ? ' cal-past' : '');
    html += `<div class="${cls}" onclick="selectDay(this,${d})">${d}</div>`;
  }
  grid.innerHTML = html;
}

function selectDay(el, day) {
  if (el.classList.contains('cal-past') || el.classList.contains('cal-empty')) return;
  document.querySelectorAll('.cal-day.cal-selected').forEach(d => d.classList.remove('cal-selected'));
  el.classList.add('cal-selected');
  renderTimeSlots(day);
}

function renderTimeSlots(day) {
  const slots = document.getElementById('time-slots');
  const allSlots = ['9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM'];
  let html = `<h5 style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:12px;font-weight:600">Available Times Â· ${MONTH_NAMES[calMonth]} ${day}</h5><div class="time-slots-grid">`;
  allSlots.forEach(slot => {
    const booked = BOOKED.includes(slot);
    html += `<button class="time-slot ${booked ? 'booked' : ''}" onclick="selectTimeSlot(this,'${slot}')" ${booked ? 'disabled' : ''}>${slot}</button>`;
  });
  html += `</div>`;
  slots.innerHTML = html;
}

function selectTimeSlot(el, time) {
  document.querySelectorAll('.time-slot.selected').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  showToast('success', 'ðŸ• Time Selected', `${time} is reserved. Click Confirm to book.`);
}

function shiftMonth(delta) {
  calMonth += delta;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  if (calMonth < 0)  { calMonth = 11; calYear--; }
  renderCalendar();
}
