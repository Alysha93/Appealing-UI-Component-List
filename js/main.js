/* =====================================================
   FEMME UI — MAIN JAVASCRIPT
   Interactions, animations, and component logic
   ===================================================== */

'use strict';

// ── SCROLL REVEAL ──────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal, .reveal-delay').forEach(el => {
  revealObserver.observe(el);
});

// ── NAVBAR SCROLL EFFECT ───────────────────────────────────
const navbar = document.getElementById('main-navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = 'var(--shadow-soft)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ── MOBILE MENU ────────────────────────────────────────────
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

// ── DARK MODE TOGGLE ───────────────────────────────────────
let isDark = false;
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
  document.getElementById('theme-toggle').textContent = isDark ? '☀️' : '✨';
}

// ── MODAL ──────────────────────────────────────────────────
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function closeModalOnBackdrop(event, id) {
  if (event.target === document.getElementById(id)) {
    closeModal(id);
  }
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop:not(.hidden)').forEach(m => {
      m.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }
});

// ── TOAST NOTIFICATIONS ────────────────────────────────────
const toastIcons = {
  success: '✅',
  warning: '⚠️',
  error:   '❌',
  info:    '💜'
};

function showToast(type, title, message, duration = 4500) {
  const container = document.getElementById('toast-container');

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${toastIcons[type] || '💬'}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      ${message ? `<div class="toast-body">${message}</div>` : ''}
    </div>
    <button class="toast-close" onclick="dismissToast(this.closest('.toast'))">✕</button>
  `;

  container.appendChild(toast);

  // Auto dismiss
  setTimeout(() => dismissToast(toast), duration);
}

function dismissToast(toast) {
  if (!toast || !toast.parentNode) return;
  toast.classList.add('removing');
  setTimeout(() => toast.remove(), 300);
}

// ── TABS ───────────────────────────────────────────────────
function switchTab(contentId, btn) {
  // Hide all tab contents in same parent
  const tabsContainer = btn.closest('[id$="-tabs"]') || btn.parentNode;
  const contentContainer = tabsContainer.parentNode;

  contentContainer.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
  tabsContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

  const target = document.getElementById(contentId);
  if (target) target.classList.remove('hidden');
  btn.classList.add('active');
}

// ── ACCORDION ──────────────────────────────────────────────
function toggleAccordion(trigger) {
  const item = trigger.closest('.accordion-item');
  const body = item.querySelector('.accordion-body');
  const icon = item.querySelector('.accordion-icon');
  const isOpen = item.classList.contains('active');

  // Close all
  document.querySelectorAll('.accordion-item').forEach(i => {
    i.classList.remove('active');
    i.querySelector('.accordion-body').style.display = 'none';
    i.querySelector('.accordion-icon').textContent = '↓';
  });

  // Open this one if was closed
  if (!isOpen) {
    item.classList.add('active');
    body.style.display = 'block';
    icon.textContent = '↑';
  }
}

// ── TAGS ───────────────────────────────────────────────────
function toggleTag(el) {
  el.classList.toggle('active');
}

// ── TESTIMONIALS ───────────────────────────────────────────
let currentTestimonial = 0;
const testimonialInterval = setInterval(() => {
  goToTestimonial((currentTestimonial + 1) % document.querySelectorAll('.testimonial-card').length);
}, 5000);

function goToTestimonial(index) {
  const cards = document.querySelectorAll('.testimonial-card');
  const dots  = document.querySelectorAll('.t-dot');

  cards.forEach(c => c.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  if (cards[index]) cards[index].classList.add('active');
  if (dots[index])  dots[index].classList.add('active');
  currentTestimonial = index;
}

// ── PAGINATION ─────────────────────────────────────────────
function changePage(btn, value) {
  document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
  if (value !== 'prev' && value !== 'next') {
    btn.classList.add('active');
  }
}

// ── WISHLIST ───────────────────────────────────────────────
function toggleWishlist(btn) {
  btn.classList.toggle('active');
  const isActive = btn.classList.contains('active');
  if (isActive) {
    showToast('success', '💖 Added to Wishlist', 'You can find it in your saved items.');
  } else {
    showToast('info', 'Removed from Wishlist', '');
  }
}

// ── CART ADD DEMO ──────────────────────────────────────────
function addToCartDemo() {
  showToast('success', '🛍️ Added to Bag!', 'Rose Velvet Lip Crème in Ruby Blush has been added.');
}

// ── CART QUANTITY ──────────────────────────────────────────
function adjustQty(btn, delta) {
  const wrapper = btn.closest('.qty-stepper');
  const val = wrapper.querySelector('.qty-val');
  let num = parseInt(val.textContent) + delta;
  if (num < 1) num = 1;
  if (num > 99) num = 99;
  val.textContent = num;
}

// ── REMOVE CART ITEM ───────────────────────────────────────
function removeCartItem(btn) {
  const item = btn.closest('.cart-item');
  if (item) {
    item.style.animation = 'fadeOut 0.3s ease forwards';
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.3s ease';
    setTimeout(() => item.remove(), 300);
    showToast('info', 'Item removed', 'The item has been removed from your bag.');
  }
}

// ── LOADING BUTTON ─────────────────────────────────────────
function triggerLoadingDemo() {
  const btn    = document.getElementById('loading-btn');
  const text   = btn.querySelector('.btn-text');
  const spinner= btn.querySelector('.btn-spinner');

  btn.disabled = true;
  text.textContent = 'Processing…';
  spinner.classList.remove('hidden');

  setTimeout(() => {
    btn.disabled = false;
    text.textContent = '✓ Order Placed!';
    spinner.classList.add('hidden');
    btn.style.background = 'linear-gradient(135deg,#A8E6CF,#4CAF80)';
    showToast('success', '✓ Order Confirmed!', 'Your order has been placed. Thank you!');

    setTimeout(() => {
      text.textContent = 'Place Order';
      btn.style.background = '';
    }, 3000);
  }, 2000);
}

// ── NEWSLETTER SUBSCRIBE ───────────────────────────────────
function subscribeNewsletter() {
  const input = document.getElementById('nl-email');
  const email = input.value.trim();

  if (!email || !email.includes('@')) {
    showToast('error', 'Invalid email', 'Please enter a valid email address.');
    input.focus();
    return;
  }

  showToast('success', '💌 You\'re in the circle!', `Welcome! We'll send beauty tips to ${email}`);
  input.value = '';
}

// ── BOOKING CALENDAR ───────────────────────────────────────
let calYear  = 2026;
let calMonth = 3; // April = 3 (0-indexed)
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_NAMES   = ['Su','Mo','Tu','We','Th','Fr','Sa'];
const BOOKED_SLOTS = ['9:00 AM', '11:00 AM', '3:00 PM'];

function renderCalendar() {
  const grid = document.getElementById('calendar-grid');
  if (!grid) return;

  document.getElementById('cal-month-label').textContent = `${MONTH_NAMES[calMonth]} ${calYear}`;

  const firstDay   = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth= new Date(calYear, calMonth + 1, 0).getDate();
  const today      = new Date();

  let html = '';

  // Day headers
  DAY_NAMES.forEach(d => {
    html += `<div class="cal-day-header">${d}</div>`;
  });

  // Empty prefix
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-day cal-empty"></div>`;
  }

  // Days
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(calYear, calMonth, d);
    const isToday = date.toDateString() === today.toDateString();
    const isPast  = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());

    let cls = 'cal-day';
    if (isToday) cls += ' cal-today';
    if (isPast)  cls += ' cal-past';

    html += `<div class="${cls}" onclick="selectDay(this, ${d})">${d}</div>`;
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

  let html = `<h5 style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--space-sm);font-weight:600;">Available Times · ${MONTH_NAMES[calMonth]} ${day}</h5>`;
  html += `<div class="time-slots-grid">`;
  allSlots.forEach(slot => {
    const isBooked = BOOKED_SLOTS.includes(slot);
    html += `<button class="time-slot ${isBooked ? 'booked' : ''}" onclick="selectTimeSlot(this, '${slot}')" ${isBooked ? 'disabled' : ''}>${slot}</button>`;
  });
  html += `</div>`;
  slots.innerHTML = html;
}

function selectTimeSlot(el, time) {
  document.querySelectorAll('.time-slot.selected').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  setTimeout(() => {
    showToast('success', '📅 Time Selected', `${time} has been reserved. Click confirm to book.`);
  }, 100);
}

function shiftMonth(delta) {
  calMonth += delta;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  if (calMonth < 0)  { calMonth = 11; calYear--; }
  renderCalendar();
}

// ── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();

  // Trigger first testimonial
  goToTestimonial(0);

  // Animate progress bars on scroll
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.progress-fill');
        fills.forEach(fill => {
          const target = fill.style.width;
          fill.style.width = '0';
          requestAnimationFrame(() => {
            setTimeout(() => { fill.style.width = target; }, 100);
          });
        });
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.misc-block').forEach(el => progressObserver.observe(el));
});
