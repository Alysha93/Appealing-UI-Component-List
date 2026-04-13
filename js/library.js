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

// -- COMPONENT REGISTRY (20 Distinct Variants Each) --
const COMPONENT_REGISTRY = {
  tables:     () => getTemplateArray('table'),
  lists:      () => getTemplateArray('list'),
  badges:     () => getTemplateArray('badge'),
  avatars:    () => getTemplateArray('avatar'),
  loaders:    () => getTemplateArray('loader'),
  selection:  () => getTemplateArray('selection'),
  dropdowns:  () => getTemplateArray('dropdown'),
  overlays:   () => getTemplateArray('overlays'),
  inputs:     () => getTemplateArray('inputs'),
  forms:      () => getTemplateArray('forms'),
  pickers:    () => getTemplateArray('pickers'),
  navigation: () => getTemplateArray('navigation'),
  tabs:       () => getTemplateArray('tabs'),
  layout:     () => getTemplateArray('layout'),
  hero:       () => getTemplateArray('hero'),
  footers:    () => getTemplateArray('footers'),
  advanced:   () => getTemplateArray('advanced'),
  dashboard:  () => getTemplateArray('dashboard'),
  cards:      () => getTemplateArray('cards')
};

function renderSection(id) {
  const container = document.getElementById('render-' + id);
  if (!container) return;
  if (container.children.length > 0) return;
  const generator = COMPONENT_REGISTRY[id];
  if (generator) {
    const variants = generator();
    container.innerHTML = '<div class="comp-row wrap" style="gap:28px;">' + variants.join('') + '</div>';
  }
}

function updateComponentCount(sectionId) {
  const counter = document.getElementById('lib-count');
  if (!counter) return;
  const counts = {
    colors:100,typography:100,tokens:18,
    tables:20,lists:20,badges:20,avatars:20,loaders:20,
    selection:20,dropdowns:20,overlays:20,
    inputs:20,forms:20,pickers:20,
    navigation:20,tabs:20,layout:20,hero:20,footers:20,
    advanced:20,cards:20,dashboard:20
  };
  counter.textContent = (counts[sectionId] || 0) + ' components';
}

function copyComponentHTML(el) {
  const clone = el.cloneNode(true);
  const btn = clone.querySelector('.copy-btn-pop');
  if (btn) btn.remove();
  copyToClipboard(clone.innerHTML.trim()).then(() => {
    showToast('success','HTML Copied!','Paste it anywhere.');
  }).catch(() => showToast('error','Copy Failed','Try again.'));
}

const toastIcons = {success:'OK',warning:'!',error:'X',info:'i'};
function showToast(type, title, message, duration=3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.innerHTML = '<div class="toast-icon">' + (toastIcons[type]||'i') + '</div><div class="toast-content"><div class="toast-title">' + title + '</div>' + (message ? '<div class="toast-body">' + message + '</div>' : '') + '</div><button class="toast-close" onclick="this.closest(\'.toast\').remove()">x</button>';
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity='0'; setTimeout(()=>toast.remove(),300); }, duration);
}

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) return await navigator.clipboard.writeText(text);
    const t = document.createElement('textarea');
    t.value = text; t.style.position='fixed'; t.style.left='-9999px';
    document.body.appendChild(t); t.focus(); t.select();
    document.execCommand('copy'); t.remove();
  } catch(e) { console.error(e); }
}

function copyHex(el) {
  const hex = el.querySelector('.color-hex')?.textContent || '';
  if (hex) copyToClipboard(hex).then(() => showToast('success','Color Copied!', hex));
}

function searchComponents(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.lib-nav-item').forEach(item => {
    item.classList.toggle('hidden', q !== '' && !item.textContent.toLowerCase().includes(q));
  });
  document.querySelectorAll('.sidebar-section').forEach(section => {
    const visible = section.querySelectorAll('.lib-nav-item:not(.hidden)').length;
    section.style.display = (q === '' || visible > 0) ? 'block' : 'none';
  });
}

let isDark = false;
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
}


function cp(html) { return '<div class="comp-preview">' + html + '</div>'; }
function cpw(html, w) { return '<div class="comp-preview" style="width:100%;max-width:' + w + 'px;">' + html + '</div>'; }
function copyBtn() { return '<button class="copy-btn-pop" onclick="copyComponentHTML(this.parentElement)">Copy</button>'; }

function getTemplateArray(type) {
  const b = copyBtn();
  switch(type) {

  case 'badge': return [
    cp(b + '<span style="background:linear-gradient(135deg,#F8A8C4,#E86FA3);color:#fff;padding:4px 14px;border-radius:999px;font-size:12px;font-weight:700;">NEW</span>'),
    cp(b + '<span style="background:transparent;border:2px solid #E86FA3;color:#E86FA3;padding:3px 12px;border-radius:999px;font-size:12px;font-weight:700;">SALE</span>'),
    cp(b + '<span style="background:#D4AF37;color:#fff;padding:4px 12px;border-radius:4px;font-size:11px;font-weight:800;letter-spacing:1px;">GOLD</span>'),
    cp(b + '<span style="background:#1a1a2e;color:#CDB4FF;padding:4px 16px;border-radius:999px;font-size:11px;font-weight:700;border:1px solid #CDB4FF;">PRO</span>'),
    cp(b + '<span style="background:#EDE5FF;color:#5D3FD3;padding:4px 12px;border-radius:8px;font-size:12px;font-weight:700;">Beta</span>'),
    cp(b + '<span style="display:inline-flex;align-items:center;gap:5px;background:#FFF0F5;border:1px solid #F8A8C4;color:#E86FA3;padding:4px 12px;border-radius:999px;font-size:12px;"><span style="width:7px;height:7px;background:#4CAF50;border-radius:50%;display:inline-block;"></span>Online</span>'),
    cp(b + '<span style="background:linear-gradient(135deg,#D4AF37,#C5A059);color:#fff;padding:5px 16px;border-radius:4px;font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">VIP</span>'),
    cp(b + '<span style="background:#FFF5F5;color:#D44D5C;padding:4px 14px;border-radius:0;font-size:12px;font-weight:700;border-left:3px solid #D44D5C;">HOT</span>'),
    cp(b + '<span style="background:#E0F2F1;color:#00796B;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:600;">Verified &#10003;</span>'),
    cp(b + '<span style="background:#1a1a2e;color:#FFD700;padding:5px 14px;border-radius:999px;font-size:11px;font-weight:800;">&#9733; FEATURED</span>'),
    cp(b + '<span style="display:inline-flex;align-items:center;gap:6px;background:#FFF9C4;border:1px solid #F9E076;color:#856404;padding:4px 12px;border-radius:8px;font-size:12px;">&#9889; Flash</span>'),
    cp(b + '<span style="background:#F8A8C4;color:#fff;padding:6px 16px;border-radius:12px;font-size:11px;font-weight:700;box-shadow:0 4px 12px rgba(248,168,196,0.5);">TRENDING</span>'),
    cp(b + '<span style="background:rgba(205,180,255,0.15);backdrop-filter:blur(8px);border:1px solid rgba(205,180,255,0.4);color:#5D3FD3;padding:4px 14px;border-radius:999px;font-size:12px;">Glass</span>'),
    cp(b + '<span style="background:#fff;color:#333;padding:4px 12px;border-radius:8px;font-size:11px;font-weight:700;box-shadow:3px 3px 6px rgba(0,0,0,0.1),-1px -1px 4px rgba(255,255,255,0.8);">Soft</span>'),
    cp(b + '<span style="background:linear-gradient(135deg,#9B72FF,#E86FA3);color:#fff;padding:4px 14px;border-radius:999px;font-size:12px;font-weight:700;">&#10024; Magic</span>'),
    cp(b + '<div style="display:inline-flex;align-items:center;background:#fff;border:1px solid #eee;border-radius:999px;padding:3px 10px 3px 4px;gap:8px;"><img src="https://i.pravatar.cc/20?u=1" style="width:20px;height:20px;border-radius:50%;"><span style="font-size:11px;font-weight:600;">Sophie</span></div>'),
    cp(b + '<div style="position:relative;display:inline-block;"><span style="background:#E86FA3;color:#fff;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700;">Inbox</span><span style="position:absolute;top:-6px;right:-6px;background:#D44D5C;color:#fff;width:18px;height:18px;border-radius:50%;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;border:2px solid #fff;">3</span></div>'),
    cp(b + '<span style="background:transparent;color:#888;padding:3px 10px;border-radius:4px;font-size:11px;border:1px dashed #ccc;font-weight:600;">Draft</span>'),
    cp(b + '<span style="background:linear-gradient(90deg,#F8A8C4,#CDB4FF,#9B72FF);color:#fff;padding:5px 16px;border-radius:999px;font-size:12px;font-weight:700;">Aurora</span>'),
    cp(b + '<span style="background:#1a1a2e;color:#fff;padding:4px 14px;border-radius:6px;font-size:11px;font-weight:700;letter-spacing:1px;">SOLD OUT</span>'),
  ];

  case 'inputs': return [
    cpw(b + '<div><label style="display:block;font-size:10px;font-weight:700;color:#E86FA3;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Email Address</label><input type="email" style="width:100%;border:1.5px solid #F8A8C4;border-radius:12px;padding:12px 16px;font-size:14px;outline:none;background:#fff;box-sizing:border-box;" placeholder="hello@femme.com"></div>', 320),
    cpw(b + '<div><label style="display:block;font-size:11px;font-weight:600;color:#555;margin-bottom:6px;">Your Name</label><input type="text" style="width:100%;border:none;border-bottom:2px solid #F8A8C4;border-radius:0;padding:10px 0;font-size:14px;outline:none;background:transparent;box-sizing:border-box;" placeholder="Sophia Rose"></div>', 300),
    cpw(b + '<input type="search" style="width:100%;border:1.5px solid #eee;border-radius:999px;padding:12px 20px;font-size:14px;outline:none;background:#FFF7FB;box-sizing:border-box;" placeholder="&#128269; Search...">', 320),
    cpw(b + '<div style="position:relative;"><input type="text" style="width:100%;border:2px solid #D4AF37;border-radius:12px;padding:12px 16px;font-size:14px;outline:none;background:#FFFDF5;box-sizing:border-box;" placeholder="Gold luxury input"><span style="position:absolute;right:14px;top:50%;transform:translateY(-50%);color:#D4AF37;">&#10022;</span></div>', 320),
    cpw(b + '<div style="position:relative;"><span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#E86FA3;font-size:16px;">@</span><input type="text" style="width:100%;border:1.5px solid #F8A8C4;border-radius:8px;padding:12px 16px 12px 38px;font-size:14px;outline:none;background:#fff;box-sizing:border-box;" placeholder="username"></div>', 280),
    cpw(b + '<div style="position:relative;display:flex;"><input type="text" style="flex:1;border:1.5px solid #eee;border-radius:12px 0 0 12px;padding:12px 16px;font-size:14px;outline:none;background:#fff;border-right:none;" placeholder="Enter code..."><button style="background:linear-gradient(135deg,#F8A8C4,#E86FA3);color:#fff;border:none;border-radius:0 12px 12px 0;padding:12px 18px;font-size:12px;font-weight:700;cursor:pointer;">Apply</button></div>', 320),
    cpw(b + '<div style="background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.3);border-radius:16px;padding:4px;box-shadow:0 4px 20px rgba(248,168,196,0.1);"><input type="text" style="width:100%;background:transparent;border:none;outline:none;padding:12px 16px;font-size:14px;color:#333;box-sizing:border-box;" placeholder="Glass input field..."></div>', 300),
    cpw(b + '<div><div style="display:flex;justify-content:space-between;margin-bottom:4px;"><label style="font-size:11px;font-weight:600;color:#555;">Bio</label><span style="font-size:10px;color:#aaa;">0 / 150</span></div><textarea style="width:100%;border:1.5px solid #eee;border-radius:12px;padding:12px 16px;font-size:14px;outline:none;resize:none;height:90px;box-sizing:border-box;font-family:inherit;" placeholder="Write something beautiful..."></textarea></div>', 320),
    cpw(b + '<div style="background:#1a1a2e;padding:20px;border-radius:16px;"><label style="display:block;font-size:10px;font-weight:700;color:#CDB4FF;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Password</label><div style="position:relative;"><input type="password" style="width:100%;background:rgba(255,255,255,0.1);border:1px solid rgba(205,180,255,0.3);border-radius:10px;padding:12px 40px 12px 16px;color:#fff;font-size:14px;outline:none;box-sizing:border-box;" placeholder="••••••••"><span style="position:absolute;right:12px;top:50%;transform:translateY(-50%);color:#9B72FF;cursor:pointer;">&#128065;</span></div></div>', 300),
    cpw(b + '<div style="display:flex;gap:8px;justify-content:center;">' + Array(6).fill(0).map(()=>'<input type="text" maxlength="1" style="width:42px;height:48px;border:2px solid #F8A8C4;border-radius:10px;text-align:center;font-size:20px;font-weight:700;outline:none;color:#E86FA3;">').join('') + '</div>', 340),
    cpw(b + '<div style="position:relative;"><input type="text" style="width:100%;border:2px solid #eee;border-radius:12px;padding:12px 16px;font-size:14px;outline:none;box-sizing:border-box;padding-right:90px;" placeholder="yoursite"><span style="position:absolute;right:0;top:0;background:#F8F8F8;height:100%;display:flex;align-items:center;padding:0 14px;border-radius:0 12px 12px 0;font-size:13px;color:#888;border-left:1px solid #eee;">.com</span></div>', 300),
    cpw(b + '<div style="border:1.5px solid #4CAF50;border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:10px;"><input type="text" style="flex:1;border:none;outline:none;font-size:14px;" value="sophia@femme.co" readonly><span style="color:#4CAF50;font-size:16px;">&#10003;</span></div>', 300),
    cpw(b + '<div style="border:1.5px solid #D44D5C;border-radius:12px;padding:12px 16px;"><input type="text" style="width:100%;border:none;outline:none;font-size:14px;color:#D44D5C;box-sizing:border-box;" placeholder="Invalid field"><div style="font-size:10px;color:#D44D5C;margin-top:4px;">&#9888; This field is required</div></div>', 300),
    cpw(b + '<div style="display:flex;align-items:center;background:#fff;border:1.5px solid #eee;border-radius:8px;overflow:hidden;"><span style="background:#FFF0F5;padding:12px 14px;color:#E86FA3;font-weight:700;font-size:14px;border-right:1px solid #eee;">$</span><input type="number" style="flex:1;border:none;outline:none;padding:12px;font-size:14px;" placeholder="0.00"></div>', 280),
    cpw(b + '<div style="display:flex;flex-wrap:wrap;gap:6px;border:1.5px solid #F8A8C4;border-radius:12px;padding:10px;"><span style="background:#FFF0F5;color:#E86FA3;padding:4px 10px;border-radius:999px;font-size:12px;display:flex;align-items:center;gap:4px;">Design <span style="cursor:pointer;opacity:0.6;">&#215;</span></span><span style="background:#FFF0F5;color:#E86FA3;padding:4px 10px;border-radius:999px;font-size:12px;display:flex;align-items:center;gap:4px;">UI Kit <span style="cursor:pointer;opacity:0.6;">&#215;</span></span><input style="border:none;outline:none;padding:4px 8px;font-size:13px;flex:1;min-width:80px;" placeholder="Add tag..."></div>', 320),
    cpw(b + '<div><label style="font-size:10px;font-weight:700;color:#9B72FF;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px;">Card Number</label><div style="display:flex;align-items:center;border:1.5px solid #CDB4FF;border-radius:12px;padding:12px 16px;gap:10px;"><span>&#128179;</span><input type="text" style="flex:1;border:none;outline:none;font-size:15px;letter-spacing:3px;" placeholder="4242  4242  4242" maxlength="19"></div></div>', 320),
    cpw(b + '<div style="position:relative;padding-top:20px;"><span style="position:absolute;top:4px;left:12px;font-size:10px;font-weight:700;color:#E86FA3;background:#fff;padding:0 4px;">Full Name</span><input type="text" style="width:100%;border:1.5px solid #F8A8C4;border-radius:8px;padding:14px 16px;font-size:14px;outline:none;box-sizing:border-box;background:#fff;" placeholder=" "></div>', 300),
    cpw(b + '<input type="text" style="width:100%;border:none;border-bottom:1.5px solid #eee;border-radius:0;padding:12px 0;font-size:14px;outline:none;background:transparent;box-sizing:border-box;color:#888;" placeholder="Minimal — no border...">', 280),
    cpw(b + '<div style="background:#F0F4F8;border-radius:12px;padding:4px;display:flex;align-items:center;gap:8px;"><span style="padding:10px 14px;color:#888;">&#128269;</span><input type="search" style="flex:1;border:none;background:transparent;outline:none;font-size:14px;padding:10px 0;" placeholder="Quick search..."><span style="background:#fff;padding:6px 12px;border-radius:8px;font-size:11px;color:#aaa;white-space:nowrap;">Enter</span></div>', 320),
    cpw(b + '<div style="display:flex;gap:6px;flex-wrap:wrap;">' + ['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>'<button style="padding:8px 12px;border-radius:8px;border:1.5px solid #F8A8C4;background:' + (i===1?'linear-gradient(135deg,#F8A8C4,#E86FA3)':'#fff') + ';color:' + (i===1?'#fff':'#666') + ';font-size:12px;font-weight:600;cursor:pointer;">' + d + '</button>').join('') + '</div>', 340),
  ];

  case 'avatar': return [
    cp(b + '<img src="https://i.pravatar.cc/72?u=1" style="width:72px;height:72px;border-radius:50%;border:3px solid #F8A8C4;display:block;">'),
    cp(b + '<img src="https://i.pravatar.cc/64?u=2" style="width:64px;height:64px;border-radius:12px;border:3px solid #D4AF37;display:block;">'),
    cp(b + '<div style="position:relative;display:inline-block;"><img src="https://i.pravatar.cc/60?u=3" style="width:60px;height:60px;border-radius:50%;border:2px solid #9B72FF;display:block;"><span style="position:absolute;bottom:2px;right:2px;width:14px;height:14px;background:#4CAF50;border:2px solid #fff;border-radius:50%;"></span></div>'),
    cp(b + '<div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#F8A8C4,#E86FA3);display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px;font-weight:700;font-family:serif;">SL</div>'),
    cp(b + '<div style="display:flex;">' + [1,2,3,4].map((n,i)=>'<img src="https://i.pravatar.cc/44?u=' + n + '" style="width:44px;height:44px;border-radius:50%;border:3px solid #fff;margin-left:' + (i?'-14px':'0') + ';z-index:' + (4-i) + ';position:relative;">').join('') + '<div style="width:44px;height:44px;border-radius:50%;background:#FFF0F5;border:3px solid #fff;margin-left:-14px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#E86FA3;z-index:0;">+8</div></div>'),
    cp(b + '<div style="text-align:center;"><img src="https://i.pravatar.cc/80?u=5" style="width:80px;height:80px;border-radius:50%;border:4px solid #F8A8C4;display:block;margin:0 auto 8px;"><div style="font-size:13px;font-weight:700;">Sophie L.</div><div style="font-size:11px;color:#E86FA3;">Art Director</div></div>'),
    cp(b + '<div style="display:flex;align-items:center;gap:12px;"><img src="https://i.pravatar.cc/48?u=6" style="width:48px;height:48px;border-radius:50%;border:2px solid #F8A8C4;"><div><div style="font-size:13px;font-weight:700;">Elena V.</div><div style="font-size:11px;color:#aaa;">Active now</div></div></div>'),
    cp(b + '<div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#D4AF37,#C5A059);display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;font-weight:800;box-shadow:0 4px 16px rgba(212,175,55,0.4);">M</div>'),
    cp(b + '<div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#9B72FF,#5D3FD3);display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px;">&#128102;</div>'),
    cp(b + '<div style="display:flex;flex-direction:column;align-items:center;gap:10px;">' + [1,2,3].map((n,i)=>'<div style="display:flex;align-items:center;gap:10px;"><img src="https://i.pravatar.cc/36?u=' + n + '" style="width:36px;height:36px;border-radius:50%;"><span style="font-size:12px;font-weight:600;">User ' + n + '</span></div>').join('') + '</div>'),
    cp(b + '<div style="display:flex;align-items:center;gap:10px;background:#FFF7FB;padding:10px 14px;border-radius:12px;border:1px solid #FFE4F0;"><img src="https://i.pravatar.cc/40?u=7" style="width:40px;height:40px;border-radius:50%;border:2px solid #F8A8C4;"><div style="flex:1;"><div style="font-size:13px;font-weight:700;">Mia Chen</div><div style="font-size:11px;color:#aaa;">Sent you a message</div></div><button style="background:linear-gradient(135deg,#F8A8C4,#E86FA3);color:#fff;border:none;border-radius:999px;padding:5px 12px;font-size:11px;font-weight:700;cursor:pointer;">Reply</button></div>'),
    cp(b + '<img src="https://i.pravatar.cc/72?u=8" style="width:72px;height:72px;border-radius:16px;border:3px solid #CDB4FF;display:block;">'),
    cp(b + '<div style="position:relative;display:inline-block;"><img src="https://i.pravatar.cc/60?u=9" style="width:60px;height:60px;border-radius:50%;filter:grayscale(1);display:block;"><span style="position:absolute;bottom:2px;right:2px;width:14px;height:14px;background:#D44D5C;border:2px solid #fff;border-radius:50%;"></span></div>'),
    cp(b + '<div style="display:flex;gap:8px;">' + [1,2,3].map((n,i)=>'<div style="<text-align:center;"><img src="https://i.pravatar.cc/48?u=' + (n+9) + '" style="width:48px;height:48px;border-radius:50%;border:2px solid ' + ['#F8A8C4','#D4AF37','#9B72FF'][i] + ';display:block;margin:0 auto 4px;"><div style="font-size:10px;font-weight:700;color:#666;">User ' + n + '</div></div>').join('') + '</div>'),
    cp(b + '<div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#F8A8C4,#9B72FF);display:flex;align-items:center;justify-content:center;font-size:24px;">&#128151;</div>'),
    cp(b + '<div style="text-align:center;"><div style="position:relative;display:inline-block;"><img src="https://i.pravatar.cc/80?u=10" style="width:80px;height:80px;border-radius:50%;display:block;"><div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#D4AF37,#C5A059);color:#fff;font-size:9px;font-weight:800;padding:2px 8px;border-radius:999px;white-space:nowrap;">VIP</div></div></div>'),
    cp(b + '<div style="display:flex;align-items:center;gap:12px;background:#1a1a2e;padding:12px 16px;border-radius:12px;"><img src="https://i.pravatar.cc/44?u=11" style="width:44px;height:44px;border-radius:50%;border:2px solid #9B72FF;"><div><div style="font-size:13px;font-weight:700;color:#fff;">Luna Dark</div><div style="font-size:11px;color:#9B72FF;">&#9679; Online</div></div></div>'),
    cp(b + '<div style="display:flex;flex-direction:column;gap:8px;">' + ['Sophia','Elena','Mia'].map((n,i)=>'<div style="display:flex;align-items:center;gap:8px;"><img src="https://i.pravatar.cc/36?u=' + (i+12) + '" style="width:36px;height:36px;border-radius:50%;border:2px solid #F8A8C4;"><span style="font-size:12px;font-weight:600;">' + n + '</span><span style="margin-left:auto;width:8px;height:8px;background:#4CAF50;border-radius:50%;"></span></div>').join('') + '</div>'),
    cp(b + '<div style="width:64px;height:64px;border-radius:50%;background:#f0f0f0;display:flex;align-items:center;justify-content:center;font-size:26px;border:2px dashed #ccc;">+</div>'),
    cp(b + '<img src="https://i.pravatar.cc/80?u=15" style="width:80px;height:80px;border-radius:0;border:3px solid #1a1a2e;display:block;">'),
  ];

  case 'loader': return [
    cp(b + '<div style="width:40px;height:40px;border:4px solid #FFF0F5;border-top:4px solid #E86FA3;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto;"></div>'),
    cp(b + '<div style="width:200px;height:6px;background:#FFF0F5;border-radius:3px;overflow:hidden;"><div style="height:100%;width:65%;background:linear-gradient(90deg,#F8A8C4,#E86FA3);border-radius:3px;animation:shimmer 1.5s ease-in-out infinite;"></div></div>'),
    cp(b + '<div style="display:flex;gap:6px;justify-content:center;">' + [0,1,2].map(i=>'<div style="width:10px;height:10px;background:#E86FA3;border-radius:50%;animation:bounce 1.4s ease-in-out ' + (i*0.2) + 's infinite;"></div>').join('') + '</div>'),
    cp(b + '<div style="position:relative;width:60px;height:60px;margin:0 auto;"><svg viewBox="0 0 42 42" width="60" height="60" style="transform:rotate(-90deg);"><circle cx="21" cy="21" r="16" fill="none" stroke="#FFF0F5" stroke-width="4"/><circle cx="21" cy="21" r="16" fill="none" stroke="#E86FA3" stroke-width="4" stroke-dasharray="60 40" stroke-linecap="round"/></svg></div>'),
    cp(b + '<div style="display:flex;gap:4px;align-items:center;justify-content:center;">' + [1,2,3,4,5].map((n,i)=>'<div style="width:4px;background:#E86FA3;border-radius:2px;animation:bar 1.2s ease-in-out ' + (i*0.15) + 's infinite;height:' + [20,32,24,36,20][i] + 'px;"></div>').join('') + '</div>'),
    cp(b + '<div style="width:200px;background:#f5f5f5;border-radius:12px;overflow:hidden;"><div style="height:12px;background:linear-gradient(90deg,#FFF0F5 25%,#F8A8C4 50%,#FFF0F5 75%);background-size:200%;animation:shimmer 1.5s infinite;"></div></div>'),
    cp(b + '<div style="width:200px;"><div style="height:10px;background:#f5f5f5;border-radius:8px;margin-bottom:8px;overflow:hidden;"><div style="width:80%;height:100%;background:linear-gradient(90deg,#FFF0F5 25%,#F8A8C4 50%,#FFF0F5 75%);background-size:200%;animation:shimmer 1.5s infinite;"></div></div><div style="height:8px;background:#f5f5f5;border-radius:8px;width:60%;overflow:hidden;"><div style="height:100%;background:linear-gradient(90deg,#FFF0F5 25%,#F8A8C4 50%,#FFF0F5 75%);background-size:200%;animation:shimmer 1.5s infinite;"></div></div></div>'),
    cp(b + '<div style="width:40px;height:40px;border:4px solid #D4AF37;border-top:4px solid transparent;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto;"></div>'),
    cp(b + '<div style="width:40px;height:40px;border:4px solid transparent;border-top:4px solid #9B72FF;border-right:4px solid #9B72FF;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto;"></div>'),
    cp(b + '<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#FFF7FB;border-radius:12px;border:1px solid #FFE4F0;"><div style="width:36px;height:36px;border:3px solid #F8A8C4;border-top:3px solid #E86FA3;border-radius:50%;animation:spin 1s linear infinite;flex-shrink:0;"></div><span style="font-size:13px;color:#888;font-weight:600;">Loading...</span></div>'),
    cp(b + '<div style="width:48px;height:48px;margin:0 auto;position:relative;animation:spin 2s linear infinite;"><div style="width:10px;height:10px;background:#F8A8C4;border-radius:50%;position:absolute;top:0;left:50%;transform:translateX(-50%);"></div><div style="width:10px;height:10px;background:#E86FA3;border-radius:50%;position:absolute;bottom:0;left:50%;transform:translateX(-50%);"></div><div style="width:10px;height:10px;background:#CDB4FF;border-radius:50%;position:absolute;left:0;top:50%;transform:translateY(-50%);"></div><div style="width:10px;height:10px;background:#9B72FF;border-radius:50%;position:absolute;right:0;top:50%;transform:translateY(-50%);"></div></div>'),
    cp(b + '<div style="width:200px;padding:16px;background:#fff;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.06);"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(90deg,#f5f5f5 25%,#e9e9e9 50%,#f5f5f5 75%);background-size:200%;animation:shimmer 1.5s infinite;"></div><div style="flex:1;"><div style="height:10px;background:linear-gradient(90deg,#f5f5f5 25%,#e9e9e9 50%,#f5f5f5 75%);background-size:200%;animation:shimmer 1.5s infinite;border-radius:4px;margin-bottom:6px;"></div><div style="height:8px;width:60%;background:linear-gradient(90deg,#f5f5f5 25%,#e9e9e9 50%,#f5f5f5 75%);background-size:200%;animation:shimmer 1.5s infinite;border-radius:4px;"></div></div></div><div style="height:10px;background:linear-gradient(90deg,#f5f5f5 25%,#e9e9e9 50%,#f5f5f5 75%);background-size:200%;animation:shimmer 1.5s infinite;border-radius:4px;margin-bottom:6px;"></div><div style="height:10px;width:75%;background:linear-gradient(90deg,#f5f5f5 25%,#e9e9e9 50%,#f5f5f5 75%);background-size:200%;animation:shimmer 1.5s infinite;border-radius:4px;"></div></div>'),
    cp(b + '<div style="text-align:center;"><div style="font-size:10px;font-weight:700;color:#aaa;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">Loading</div><div style="display:flex;justify-content:center;gap:4px;">' + [1,2,3,4,5,6,7,8].map((n,i)=>'<div style="width:3px;height:' + [12,18,24,30,30,24,18,12][i] + 'px;background:' + ['#F8A8C4','#E86FA3','#CDB4FF','#9B72FF','#9B72FF','#CDB4FF','#E86FA3','#F8A8C4'][i] + ';border-radius:2px;animation:bar 1.2s ease-in-out ' + (i*0.1) + 's infinite;"></div>').join('') + '</div></div>'),
    cp(b + '<div style="width:200px;height:6px;background:#EDE5FF;border-radius:3px;overflow:hidden;"><div style="height:100%;background:linear-gradient(90deg,#9B72FF,#CDB4FF);border-radius:3px;width:45%;animation:progress 2s ease-in-out infinite;"></div></div>'),
    cp(b + '<div style="width:56px;height:56px;margin:0 auto;border:5px solid #FFF0F5;border-radius:50%;position:relative;animation:spin 1s linear infinite;"><div style="position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;border:5px solid transparent;border-top:5px solid #E86FA3;border-radius:50%;animation:spin 0.75s linear infinite reverse;"></div></div>'),
    cp(b + '<div style="display:flex;align-items:center;gap:8px;padding:10px 16px;background:#1a1a2e;border-radius:12px;width:200px;"><div style="width:28px;height:28px;border:3px solid #9B72FF;border-top:3px solid transparent;border-radius:50%;animation:spin 0.8s linear infinite;flex-shrink:0;"></div><span style="font-size:13px;color:#CDB4FF;font-weight:600;">Processing...</span></div>'),
    cp(b + '<div style="text-align:center;"><div style="display:inline-flex;align-items:flex-end;gap:3px;height:40px;"><div style="width:8px;background:linear-gradient(0deg,#F8A8C4,#E86FA3);border-radius:4px 4px 2px 2px;animation:bar 1s ease-in-out 0s infinite;" style="height:60%;"></div><div style="width:8px;background:linear-gradient(0deg,#CDB4FF,#9B72FF);border-radius:4px 4px 2px 2px;animation:bar 1s ease-in-out 0.2s infinite;"></div><div style="width:8px;background:linear-gradient(0deg,#F8A8C4,#E86FA3);border-radius:4px 4px 2px 2px;animation:bar 1s ease-in-out 0.4s infinite;"></div></div></div>'),
    cp(b + '<div style="text-align:center;padding:20px;"><div style="font-size:11px;font-weight:700;color:#E86FA3;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">Please wait</div><div style="width:160px;height:4px;background:#FFF0F5;border-radius:2px;overflow:hidden;margin:0 auto;"><div style="height:100%;background:linear-gradient(90deg,#F8A8C4,#E86FA3,#F8A8C4);background-size:200%;animation:shimmer 1.5s infinite;"></div></div></div>'),
    cp(b + '<div style="display:flex;flex-direction:column;gap:8px;width:200px;">' + [90,70,55].map(w=>'<div style="height:10px;background:#f5f5f5;border-radius:5px;width:' + w + '%;overflow:hidden;"><div style="height:100%;background:linear-gradient(90deg,#f5f5f5 25%,#e9e9e9 50%,#f5f5f5 75%);background-size:200%;animation:shimmer 1.5s infinite;"></div></div>').join('') + '</div>'),
    cp(b + '<div style="display:flex;align-items:center;gap:10px;padding:14px;background:#fff;border-radius:12px;border:1px dotted #F8A8C4;width:200px;"><div style="display:flex;gap:4px;">' + [0,1,2].map(i=>'<div style="width:8px;height:8px;border-radius:50%;background:#F8A8C4;animation:bounce 1.2s ease-in-out ' + (i*0.2) + 's infinite;"></div>').join('') + '</div><span style="font-size:12px;color:#E86FA3;font-weight:600;">Typing...</span></div>'),
  ];

  default: return [cp(b + '<div style="padding:20px;background:#FFF0F5;border-radius:12px;font-weight:700;color:#E86FA3;">' + type + ' variant</div>')];
  }
}

