/* =====================================================
   FEMME UI — LIBRARY JS
   Sidebar navigation and component interactions
   ===================================================== */

'use strict';

// ── SECTION NAVIGATION ─────────────────────────────────────
function showSection(id, btn) {
  // Hide all sections
  document.querySelectorAll('.lib-section').forEach(s => s.classList.remove('active'));
  // Show target
  const target = document.getElementById('sec-' + id);
  if (target) {
    target.classList.add('active');
    document.querySelector('.lib-main').scrollTop = 0;
  }
  // Update sidebar active state
  document.querySelectorAll('.lib-nav-item').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  // Update count
  updateComponentCount(id);
}

// Show first section on load
document.addEventListener('DOMContentLoaded', () => {
  showSection('colors', document.querySelector('.lib-nav-item'));
  renderCalendar();
  goToTestimonial(0);
  startTestimonialAuto();
  updateComponentCount('colors');
});

// ── COMPONENT COUNT ────────────────────────────────────────
const sectionCounts = {
  colors: 20, typography: 20, tokens: 18,
  buttons: 30, badges: 28, cards: 25,
  forms: 22, avatars: 20, progress: 24,
  navigation: 20, overlays: 12, notifications: 20,
  products: 20, services: 15, booking: 6,
  cart: 5, animations: 20, layout: 10
};

function updateComponentCount(id) {
  const el = document.getElementById('lib-count');
  if (el) el.textContent = (sectionCounts[id] || '—') + ' components';
}

// ── SEARCH ─────────────────────────────────────────────────
function searchComponents(query) {
  const q = query.toLowerCase().trim();
  const navItems = document.querySelectorAll('.lib-nav-item');
  navItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = (!q || text.includes(q)) ? '' : 'none';
  });
}

// ── DARK MODE ──────────────────────────────────────────────
let isDark = false;
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
  document.getElementById('theme-btn').textContent = isDark ? '☀️' : '🌙';
}

// ── MODAL ──────────────────────────────────────────────────
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

// ── TOAST ──────────────────────────────────────────────────
const toastIcons = { success:'✅', warning:'⚠️', error:'❌', info:'💜' };

function showToast(type, title, message, duration = 4500) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${toastIcons[type]||'💬'}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      ${message ? `<div class="toast-body">${message}</div>` : ''}
    </div>
    <button class="toast-close" onclick="dismissToast(this.closest('.toast'))">✕</button>`;
  container.appendChild(toast);
  setTimeout(() => dismissToast(toast), duration);
}

function dismissToast(toast) {
  if (!toast?.parentNode) return;
  toast.classList.add('removing');
  setTimeout(() => toast.remove(), 300);
}

// ── TABS (for nav section) ─────────────────────────────────
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

// ── ACCORDION ──────────────────────────────────────────────
function toggleAccordion(trigger) {
  const item = trigger.closest('.accordion-item');
  const body = item.querySelector('.accordion-body');
  const icon = item.querySelector('.accordion-icon');
  const isOpen = item.classList.contains('active');
  document.querySelectorAll('.accordion-item').forEach(i => {
    i.classList.remove('active');
    i.querySelector('.accordion-body').style.display = 'none';
    i.querySelector('.accordion-icon').textContent = '↓';
  });
  if (!isOpen) {
    item.classList.add('active');
    body.style.display = 'block';
    icon.textContent = '↑';
  }
}

// ── TAGS ───────────────────────────────────────────────────
function toggleTag(el) { el.classList.toggle('active'); }

// ── WISHLIST ───────────────────────────────────────────────
function toggleWishlist(btn) {
  btn.classList.toggle('active');
  showToast(btn.classList.contains('active') ? 'success' : 'info',
            btn.classList.contains('active') ? '💖 Added to Wishlist' : 'Removed from Wishlist', '');
}

// ── ADD TO CART ────────────────────────────────────────────
function addToCart(name, price) {
  showToast('success', `🛍️ Added to Bag!`, `${name} (${price}) has been added.`);
}

// ── CART QUANTITY ──────────────────────────────────────────
function adjustQty(btn, delta) {
  const w = btn.closest('.qty-stepper');
  const v = w.querySelector('.qty-val');
  let n = parseInt(v.textContent) + delta;
  if (n < 1) n = 1; if (n > 99) n = 99;
  v.textContent = n;
}

// ── REMOVE CART ITEM ───────────────────────────────────────
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

// ── LOADING BUTTON ─────────────────────────────────────────
function loadingBtn(btnId, spinnerId) {
  const btn = document.getElementById(btnId);
  const spinner = document.getElementById(spinnerId);
  const text = btn.querySelector('span:first-child');
  btn.disabled = true;
  text.textContent = 'Processing…';
  spinner.classList.remove('hidden');
  setTimeout(() => {
    btn.disabled = false;
    text.textContent = '✓ Done!';
    spinner.classList.add('hidden');
    btn.style.background = 'linear-gradient(135deg,#A8E6CF,#4CAF80)';
    showToast('success','✓ Order Confirmed!','Your order is being processed.');
    setTimeout(() => { text.textContent = 'Place Order'; btn.style.background = ''; }, 3000);
  }, 2000);
}

// ── NEWSLETTER ─────────────────────────────────────────────
function subscribeNewsletter(inputId) {
  const input = document.getElementById(inputId || 'nl-email');
  const email = input?.value.trim();
  if (!email || !email.includes('@')) {
    showToast('error','Invalid email','Please enter a valid email address.'); return;
  }
  showToast('success','💌 Welcome to the circle!',`We'll send beauty tips to ${email}`);
  if (input) input.value = '';
}

// ── TESTIMONIALS ───────────────────────────────────────────
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

// ── BOOKING CALENDAR ───────────────────────────────────────
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
  let html = `<h5 style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:12px;font-weight:600">Available Times · ${MONTH_NAMES[calMonth]} ${day}</h5><div class="time-slots-grid">`;
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
  showToast('success', '🕐 Time Selected', `${time} is reserved. Click Confirm to book.`);
}

function shiftMonth(delta) {
  calMonth += delta;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  if (calMonth < 0)  { calMonth = 11; calYear--; }
  renderCalendar();
}
