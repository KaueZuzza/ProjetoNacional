/* ==============================
   LOJAS NACIONAL — cart.js
   Lógica do carrinho (localStorage)
   ============================== */

const CART_KEY = 'ln_cart';
const FRETE_GRATIS_MIN = 199;
const FRETE_VALOR = 19.90;
const CUPONS = { 'NACIONAL10': 0.10, 'DESCONTO15': 0.15 };

/* ── STORE ── */
const CartStore = {
  get() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  },
  save(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    CartStore.syncBadge();
  },
  add(product) {
    const cart = CartStore.get();
    const idx  = cart.findIndex(i => i.id === product.id);
    if (idx > -1) { cart[idx].qty = Math.min(cart[idx].qty + 1, 99); }
    else          { cart.push({ ...product, qty: 1 }); }
    CartStore.save(cart);
  },
  remove(id) {
    CartStore.save(CartStore.get().filter(i => i.id !== id));
  },
  updateQty(id, delta) {
    const cart = CartStore.get();
    const idx  = cart.findIndex(i => i.id === id);
    if (idx === -1) return;
    cart[idx].qty = Math.max(1, Math.min(99, cart[idx].qty + delta));
    CartStore.save(cart);
  },
  setQty(id, qty) {
    const cart = CartStore.get();
    const idx  = cart.findIndex(i => i.id === id);
    if (idx === -1) return;
    const n = parseInt(qty, 10);
    if (isNaN(n) || n < 1) return;
    cart[idx].qty = Math.min(99, n);
    CartStore.save(cart);
  },
  clear() {
    localStorage.removeItem(CART_KEY);
    CartStore.syncBadge();
  },
  subtotal() {
    return CartStore.get().reduce((s, i) => s + i.price * i.qty, 0);
  },
  count() {
    return CartStore.get().reduce((s, i) => s + i.qty, 0);
  },
  syncBadge() {
    const el = document.getElementById('cartCount');
    if (!el) return;
    const n = CartStore.count();
    el.textContent = n;
    el.style.transform = 'scale(1.5)';
    setTimeout(() => el.style.transform = '', 250);
  },
};

/* ── Expor globalmente ── */
window.CartStore = CartStore;

/* ── addToCart global: salva produto e atualiza badge ── */
window.addToCart = function(btn) {
  const d = btn.dataset;
  const img = (d.img || '').replace(/^\.\.\//, '');

  CartStore.add({
    id:       parseInt(d.id, 10) || Date.now(),
    name:     d.name     || 'Produto',
    price:    parseFloat(d.price)    || 0,
    oldPrice: parseFloat(d.oldPrice) || null,
    img:      img,
    cat:      d.cat || '',
  });

  /* feedback visual no botão */
  const original = btn.textContent;
  btn.textContent = '✓ Adicionado!';
  btn.classList.add('btn-added');
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.classList.remove('btn-added');
    btn.disabled = false;
  }, 2000);

  /* toast */
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = '🛒 Produto adicionado ao carrinho!';
  toast.classList.add('show');
  clearTimeout(window._cartToast);
  window._cartToast = setTimeout(() => toast.classList.remove('show'), 3000);
};

/* ── Inicializa badge ao carregar qualquer página ── */
document.addEventListener('DOMContentLoaded', () => CartStore.syncBadge());
