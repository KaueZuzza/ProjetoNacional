/* ==============================
   LOJAS NACIONAL — products.js
   ============================== */

/* ---------- BANCO DE PRODUTOS ---------- */
const PRODUCTS = [
  /* ---- CALÇADOS ---- */
  { id: 1,  name: 'Tênis Running Pro',         cat: 'calcados',   catLabel: 'Calçados',   price: 99.90,  oldPrice: 199.90, rating: 5, reviews: 128, tag: 'oferta', img: '../assets/images/FotoCalcado.jpeg',   disc: 50 },
  { id: 2,  name: 'Sapatênis Casual Couro',     cat: 'calcados',   catLabel: 'Calçados',   price: 149.90, oldPrice: null,   rating: 4, reviews: 52,  tag: null,     img: '../assets/images/FotoCalcado.jpeg',   disc: null },
  { id: 3,  name: 'Bota Cano Médio Feminina',   cat: 'calcados',   catLabel: 'Calçados',   price: 149.90, oldPrice: 249.90, rating: 5, reviews: 181, tag: 'oferta', img: '../assets/images/FotoCalcado.jpeg',   disc: 40 },
  { id: 4,  name: 'Sandália Feminina Clássica', cat: 'calcados',   catLabel: 'Calçados',   price: 89.90,  oldPrice: 139.90, rating: 4, reviews: 76,  tag: null,     img: '../assets/images/FotoCalcado.jpeg',   disc: 35 },
  { id: 5,  name: 'Tênis Casual Slip-On',       cat: 'calcados',   catLabel: 'Calçados',   price: 119.90, oldPrice: 179.90, rating: 5, reviews: 94,  tag: 'novo',   img: '../assets/images/FotoCalcado.jpeg',   disc: 33 },
  { id: 6,  name: 'Chinelo Slide Premium',      cat: 'calcados',   catLabel: 'Calçados',   price: 49.90,  oldPrice: 79.90,  rating: 4, reviews: 203, tag: 'oferta', img: '../assets/images/FotoCalcado.jpeg',   disc: 37 },
  { id: 7,  name: 'Tênis Feminino Glitter',     cat: 'calcados',   catLabel: 'Calçados',   price: 129.90, oldPrice: 199.90, rating: 5, reviews: 61,  tag: 'novo',   img: '../assets/images/FotoCalcado.jpeg',   disc: 34 },
  { id: 8,  name: 'Oxford Social Masculino',    cat: 'calcados',   catLabel: 'Calçados',   price: 179.90, oldPrice: 269.90, rating: 4, reviews: 43,  tag: null,     img: '../assets/images/FotoCalcado.jpeg',   disc: 33 },

  /* ---- ACESSÓRIOS ---- */
  { id: 9,  name: 'Bolsa Feminina Premium',     cat: 'acessorios', catLabel: 'Acessórios', price: 149.90, oldPrice: 299.90, rating: 4, reviews: 64,  tag: 'novo',   img: '../assets/images/FotoAcessorio.jpeg', disc: 50 },
  { id: 10, name: 'Cinto de Couro Masculino',   cat: 'acessorios', catLabel: 'Acessórios', price: 59.90,  oldPrice: 99.90,  rating: 4, reviews: 38,  tag: 'oferta', img: '../assets/images/FotoAcessorio.jpeg', disc: 40 },
  { id: 11, name: 'Carteira Slim Couro',         cat: 'acessorios', catLabel: 'Acessórios', price: 79.90,  oldPrice: null,   rating: 5, reviews: 112, tag: null,     img: '../assets/images/FotoAcessorio.jpeg', disc: null },
  { id: 12, name: 'Mochila Executiva Premium',   cat: 'acessorios', catLabel: 'Acessórios', price: 199.90, oldPrice: 329.90, rating: 5, reviews: 87,  tag: 'oferta', img: '../assets/images/FotoAcessorio.jpeg', disc: 39 },
  { id: 13, name: 'Bolsa Tote de Lona',          cat: 'acessorios', catLabel: 'Acessórios', price: 89.90,  oldPrice: null,   rating: 4, reviews: 29,  tag: 'novo',   img: '../assets/images/FotoAcessorio.jpeg', disc: null },

  /* ---- INFANTIL ---- */
  { id: 14, name: 'Conjunto Infantil Colorido',  cat: 'infantil',   catLabel: 'Infantil',   price: 79.90,  oldPrice: 129.90, rating: 5, reviews: 89,  tag: null,     img: '../assets/images/FotoInfantil.jpeg',  disc: 38 },
  { id: 15, name: 'Vestido Infantil Floral',      cat: 'infantil',   catLabel: 'Infantil',   price: 79.90,  oldPrice: 119.90, rating: 5, reviews: 71,  tag: 'novo',   img: '../assets/images/FotoInfantil.jpeg',  disc: 33 },
  { id: 16, name: 'Pijama Infantil Estampado',    cat: 'infantil',   catLabel: 'Infantil',   price: 59.90,  oldPrice: null,   rating: 5, reviews: 44,  tag: null,     img: '../assets/images/FotoInfantil.jpeg',  disc: null },
  { id: 17, name: 'Macacão Bebê Soft',            cat: 'infantil',   catLabel: 'Infantil',   price: 79.90,  oldPrice: 109.90, rating: 5, reviews: 123, tag: 'oferta', img: '../assets/images/FotoInfantil.jpeg',  disc: 27 },
  { id: 18, name: 'Blusa Infantil Listrada',       cat: 'infantil',   catLabel: 'Infantil',   price: 39.90,  oldPrice: 69.90,  rating: 4, reviews: 56,  tag: 'oferta', img: '../assets/images/FotoInfantil.jpeg',  disc: 42 },
  { id: 19, name: 'Camiseta Infantil Temática',    cat: 'infantil',   catLabel: 'Infantil',   price: 34.90,  oldPrice: 59.90,  rating: 4, reviews: 88,  tag: 'oferta', img: '../assets/images/FotoInfantil.jpeg',  disc: 41 },

  /* ---- PERFUMES ---- */
  { id: 20, name: 'Perfume Floral 100ml',         cat: 'perfumes',   catLabel: 'Perfumes',   price: 99.90,  oldPrice: 189.90, rating: 5, reviews: 215, tag: 'oferta', img: '../assets/images/FotoPerfume.jpeg',   disc: 47 },
  { id: 21, name: 'Eau de Toilette 50ml',          cat: 'perfumes',   catLabel: 'Perfumes',   price: 99.90,  oldPrice: null,   rating: 4, reviews: 93,  tag: null,     img: '../assets/images/FotoPerfume.jpeg',   disc: null },
  { id: 22, name: 'Body Splash 200ml',             cat: 'perfumes',   catLabel: 'Perfumes',   price: 99.90,  oldPrice: 159.90, rating: 4, reviews: 37,  tag: 'novo',   img: '../assets/images/FotoPerfume.jpeg',   disc: 37 },
  { id: 23, name: 'Perfume Masculino 75ml',        cat: 'perfumes',   catLabel: 'Perfumes',   price: 139.90, oldPrice: 219.90, rating: 5, reviews: 158, tag: 'oferta', img: '../assets/images/FotoPerfume.jpeg',   disc: 36 },
  { id: 24, name: 'Kit Presente Perfumaria',       cat: 'perfumes',   catLabel: 'Perfumes',   price: 199.90, oldPrice: 299.90, rating: 5, reviews: 67,  tag: 'novo',   img: '../assets/images/FotoPerfume.jpeg',   disc: 33 },
];

/* ---------- ESTADO ---------- */
const PER_PAGE = 8;
let currentPage = 1;
let filtered = [...PRODUCTS];

const activeFilters = {
  categories: [],
  maxPrice: 350,
  ratings: [],
  tags: [],
  search: '',
};

/* ---------- HELPERS ---------- */
function fmt(n) {
  return n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function starsHtml(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

function calcInstallments(price) {
  if (price >= 150) return 12;
  if (price >= 90)  return 6;
  if (price >= 50)  return 3;
  return 2;
}

/* ---------- RENDER CARD ---------- */
function cardHtml(p) {
  const tagHtml = p.tag
    ? `<span class="product-tag${p.tag === 'novo' ? ' tag-new' : ''}">${p.tag === 'oferta' ? 'Oferta' : 'Novo'}</span>`
    : '';
  const discHtml = p.disc
    ? `<span class="product-discount">-${p.disc}%</span>`
    : '';
  const oldPriceHtml = p.oldPrice
    ? `<span class="price-old">R$ ${fmt(p.oldPrice)}</span>`
    : '';

  const inst = calcInstallments(p.price);
  const instVal = fmt(p.price / inst);

  return `
    <div class="product-card reveal">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${tagHtml}
        ${discHtml}
        <button class="product-wishlist" onclick="toggleWishlist(this)" title="Favoritar">♡</button>
      </div>
      <div class="product-info">
        <span class="product-category">${p.catLabel}</span>
        <h3>${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${starsHtml(p.rating)}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-prices">
          ${oldPriceHtml}
          <span class="price-new">R$ ${fmt(p.price)}</span>
        </div>
        <span class="price-installment">${inst}x de R$ ${instVal} sem juros</span>
        <button onclick="addToCart(this)"
          data-id="${p.id}"
          data-name="${p.name}"
          data-price="${p.price}"
          data-old-price="${p.oldPrice || ''}"
          data-img="${p.img}"
          data-cat="${p.catLabel}">Comprar</button>
      </div>
    </div>
  `;
}

/* ---------- RENDER GRID ---------- */
function render() {
  const grid   = document.getElementById('productsGrid');
  const noRes  = document.getElementById('semResultados');
  const countEl = document.getElementById('produtosCount');
  const heroTotal = document.getElementById('heroTotal');

  const start = (currentPage - 1) * PER_PAGE;
  const page  = filtered.slice(start, start + PER_PAGE);

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noRes.style.display = 'block';
    document.getElementById('paginacao').innerHTML = '';
    if (countEl) countEl.innerHTML = 'Nenhum produto encontrado';
    if (heroTotal) heroTotal.textContent = '0';
    return;
  }

  noRes.style.display = 'none';
  grid.innerHTML = page.map(cardHtml).join('');

  const total = filtered.length;
  const label = total === 1 ? 'produto' : 'produtos';
  if (countEl) countEl.innerHTML = `Exibindo <strong>${total}</strong> ${label}`;
  if (heroTotal) heroTotal.textContent = total;

  /* Animação reveal nos cards recém-renderizados */
  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 55}ms`;
      requestAnimationFrame(() => el.classList.add('visible'));
    });
  });

  renderPagination();
}

/* ---------- PAGINAÇÃO ---------- */
function renderPagination() {
  const total = Math.ceil(filtered.length / PER_PAGE);
  const pg = document.getElementById('paginacao');
  if (total <= 1) { pg.innerHTML = ''; return; }

  const btn = (label, page, disabled = false, active = false, ellipsis = false) => {
    if (ellipsis) return `<span class="pg-btn pg-ellipsis">…</span>`;
    return `<button class="pg-btn${active ? ' active' : ''}" ${disabled ? 'disabled' : ''} onclick="goPage(${page})">${label}</button>`;
  };

  let html = btn('‹', currentPage - 1, currentPage === 1);

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || Math.abs(i - currentPage) <= 1) {
      html += btn(i, i, false, i === currentPage);
    } else if (Math.abs(i - currentPage) === 2) {
      html += btn('', 0, false, false, true);
    }
  }

  html += btn('›', currentPage + 1, currentPage === total);
  pg.innerHTML = html;
}

window.goPage = function (n) {
  const total = Math.ceil(filtered.length / PER_PAGE);
  if (n < 1 || n > total) return;
  currentPage = n;
  render();
  document.querySelector('.produtos-main').scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/* ---------- FILTRAGEM ---------- */
function applyFilters() {
  filtered = PRODUCTS.filter(p => {
    if (activeFilters.categories.length && !activeFilters.categories.includes(p.cat)) return false;
    if (p.price > activeFilters.maxPrice) return false;
    if (activeFilters.ratings.length && !activeFilters.ratings.includes(p.rating)) return false;
    if (activeFilters.tags.length && !activeFilters.tags.includes(p.tag)) return false;
    if (activeFilters.search) {
      const q = activeFilters.search.toLowerCase();
      if (!p.name.toLowerCase().includes(q) && !p.catLabel.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  applySort();
  currentPage = 1;
  render();
  renderActiveTags();
  syncTabsFromFilters();
}

/* ---------- ORDENAÇÃO ---------- */
function applySort() {
  const val = document.getElementById('sortSelect')?.value || 'relevancia';
  if (val === 'menor')   filtered.sort((a, b) => a.price - b.price);
  else if (val === 'maior')   filtered.sort((a, b) => b.price - a.price);
  else if (val === 'vendidos') filtered.sort((a, b) => b.reviews - a.reviews);
  else if (val === 'novos')    filtered.sort((a, b) => (b.tag === 'novo' ? 1 : 0) - (a.tag === 'novo' ? 1 : 0));
  else filtered.sort((a, b) => a.id - b.id);
}

/* ---------- TAGS ATIVAS ---------- */
function renderActiveTags() {
  const wrap = document.getElementById('filtrosAtivos');
  const tags = [];

  activeFilters.categories.forEach(c => {
    const label = PRODUCTS.find(p => p.cat === c)?.catLabel || c;
    tags.push({
      label,
      remove: () => {
        activeFilters.categories = activeFilters.categories.filter(x => x !== c);
        document.querySelector(`input[name="cat"][value="${c}"]`).checked = false;
        applyFilters();
      },
    });
  });

  if (activeFilters.maxPrice < 350) {
    tags.push({
      label: `Até R$ ${activeFilters.maxPrice}`,
      remove: () => {
        activeFilters.maxPrice = 350;
        document.getElementById('priceRange').value = 350;
        document.getElementById('priceMaxLabel').textContent = 'R$ 350';
        applyFilters();
      },
    });
  }

  activeFilters.ratings.forEach(r => {
    tags.push({
      label: '★'.repeat(r),
      remove: () => {
        activeFilters.ratings = activeFilters.ratings.filter(x => x !== r);
        document.querySelector(`input[name="rating"][value="${r}"]`).checked = false;
        applyFilters();
      },
    });
  });

  activeFilters.tags.forEach(t => {
    tags.push({
      label: t === 'oferta' ? 'Oferta' : 'Novo',
      remove: () => {
        activeFilters.tags = activeFilters.tags.filter(x => x !== t);
        document.getElementById(t === 'oferta' ? 'filterOferta' : 'filterNovo').checked = false;
        applyFilters();
      },
    });
  });

  wrap.innerHTML = tags
    .map((t, i) => `<button class="tag-ativa" data-idx="${i}"><span>${t.label}</span><span class="tag-x">×</span></button>`)
    .join('');

  wrap.querySelectorAll('.tag-ativa').forEach((btn, i) =>
    btn.addEventListener('click', () => tags[i].remove())
  );
}

/* ---------- CONTAGEM POR CATEGORIA ---------- */
function updateCategoryCounts() {
  const cats = ['calcados', 'acessorios', 'infantil', 'perfumes'];
  cats.forEach(c => {
    const el = document.getElementById(`cnt-${c}`);
    if (el) el.textContent = PRODUCTS.filter(p => p.cat === c).length;
  });
}

/* ---------- ACCORDION FILTROS ---------- */
function initAccordion() {
  document.querySelectorAll('.filtro-titulo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      const isFechado = target.classList.toggle('fechado');
      btn.classList.toggle('fechado', isFechado);
    });
  });
}

/* ---------- CATEGORY TABS ---------- */
function initCatTabs() {
  const tabs = document.querySelectorAll('.cat-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.cat;

      /* Atualiza visual das tabs */
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      /* Sincroniza filtro de categoria */
      activeFilters.categories = cat ? [cat] : [];

      /* Desmarca todos os checkboxes de categoria e remarca o correto */
      document.querySelectorAll('input[name="cat"]').forEach(cb => {
        cb.checked = cat ? cb.value === cat : false;
      });

      currentPage = 1;
      applyFilters();
    });
  });
}

/* Sincroniza tabs ao clicar em checkbox do sidebar */
function syncTabsFromFilters() {
  const tabs = document.querySelectorAll('.cat-tab');
  if (activeFilters.categories.length === 1) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.cat === activeFilters.categories[0]));
  } else if (activeFilters.categories.length === 0) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.cat === ''));
  } else {
    /* Múltiplas categorias: nenhuma tab fica ativa */
    tabs.forEach(t => t.classList.remove('active'));
  }
}

/* ---------- VIEW TOGGLE ---------- */
function initViewToggle() {
  const grid = document.getElementById('productsGrid');
  const btn4 = document.getElementById('viewGrid4');
  const btn2 = document.getElementById('viewGrid2');
  if (!btn4 || !btn2) return;

  btn4.addEventListener('click', () => {
    grid.classList.remove('view-2col');
    btn4.classList.add('active');
    btn2.classList.remove('active');
  });

  btn2.addEventListener('click', () => {
    grid.classList.add('view-2col');
    btn2.classList.add('active');
    btn4.classList.remove('active');
  });
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  updateCategoryCounts();
  initAccordion();
  initCatTabs();
  initViewToggle();
  render();

  /* ---- Categoria ---- */
  document.querySelectorAll('input[name="cat"]').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) activeFilters.categories.push(cb.value);
      else activeFilters.categories = activeFilters.categories.filter(c => c !== cb.value);
      applyFilters();
    });
  });

  /* ---- Preço ---- */
  const priceRange = document.getElementById('priceRange');
  const priceLabel = document.getElementById('priceMaxLabel');
  priceRange.addEventListener('input', () => {
    priceLabel.textContent = `R$ ${priceRange.value}`;
    activeFilters.maxPrice = Number(priceRange.value);
    applyFilters();
  });

  /* ---- Avaliação ---- */
  document.querySelectorAll('input[name="rating"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const v = Number(cb.value);
      if (cb.checked) activeFilters.ratings.push(v);
      else activeFilters.ratings = activeFilters.ratings.filter(r => r !== v);
      applyFilters();
    });
  });

  /* ---- Tipo (oferta / novo) ---- */
  ['filterOferta', 'filterNovo'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', function () {
      const val = this.value;
      if (this.checked) activeFilters.tags.push(val);
      else activeFilters.tags = activeFilters.tags.filter(t => t !== val);
      applyFilters();
    });
  });

  /* ---- Ordenação (desktop) ---- */
  document.getElementById('sortSelect')?.addEventListener('change', () => {
    const mob = document.getElementById('sortSelectMobile');
    if (mob) mob.value = document.getElementById('sortSelect').value;
    applyFilters();
  });

  /* ---- Ordenação (mobile) ---- */
  document.getElementById('sortSelectMobile')?.addEventListener('change', function () {
    const desk = document.getElementById('sortSelect');
    if (desk) desk.value = this.value;
    applyFilters();
  });

  /* ---- Limpar tudo ---- */
  document.getElementById('limparFiltros')?.addEventListener('click', () => {
    activeFilters.categories = [];
    activeFilters.maxPrice = 350;
    activeFilters.ratings = [];
    activeFilters.tags = [];
    activeFilters.search = '';

    document.querySelectorAll('.filtros-sidebar input[type="checkbox"]').forEach(cb => (cb.checked = false));
    document.getElementById('priceRange').value = 350;
    document.getElementById('priceMaxLabel').textContent = 'R$ 350';

    const si = document.getElementById('searchInput');
    if (si) si.value = '';

    applyFilters();
  });

  /* ---- Busca em tempo real ---- */
  document.getElementById('searchInput')?.addEventListener('input', function () {
    activeFilters.search = this.value.trim();
    applyFilters();
  });

  /* ---- Toggle sidebar mobile ---- */
  const btnMobile  = document.getElementById('btnMobileFiltro');
  const sidebar    = document.getElementById('filtrosSidebar');
  const overlay    = document.getElementById('filtroOverlay');

  function openSidebar()  { sidebar.classList.add('aberto'); overlay.classList.add('visivel'); }
  function closeSidebar() { sidebar.classList.remove('aberto'); overlay.classList.remove('visivel'); }

  btnMobile?.addEventListener('click', () => {
    sidebar.classList.contains('aberto') ? closeSidebar() : openSidebar();
  });

  overlay?.addEventListener('click', closeSidebar);

  /* Fecha sidebar ao confirmar filtro no mobile (clicando no btn-limpar ou fora) */
  document.getElementById('limparFiltros')?.addEventListener('click', closeSidebar);
});
