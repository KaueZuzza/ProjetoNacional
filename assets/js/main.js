/* ==============================
   LOJAS NACIONAL — main.js
   ============================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- LOADER DE CARREGAMENTO ---- */
  const loader = document.getElementById('pageLoader');
  const barra  = document.getElementById('loaderProgresso');
  let progresso = 0;

  // Simula progresso suave até 90%
  const intervalo = setInterval(() => {
    const incremento = progresso < 60 ? 1.5 : progresso < 85 ? 0.5 : 0.15;
    progresso = Math.min(progresso + incremento, 90);
    barra.style.width = progresso + '%';
  }, 75);

  // Quando a página terminar de carregar: completa a barra e some
  window.addEventListener('load', () => {
    clearInterval(intervalo);
    barra.style.transition = 'width 0.3s ease';
    barra.style.width = '100%';

    setTimeout(() => {
      loader.classList.add('saindo');
      // Remove do DOM depois da transição
      setTimeout(() => loader.remove(), 650);
    }, 1500);
  });

  // Fallback: garante que some mesmo se load não disparar
  setTimeout(() => {
    if (!loader.classList.contains('saindo')) {
      clearInterval(intervalo);
      barra.style.width = '100%';
      setTimeout(() => {
        loader.classList.add('saindo');
        setTimeout(() => loader.remove(), 650);
      }, 300);
    }
  }, 7000);

  /* ---- IDIOMA (PT / EN) ---- */
  const translations = {
    pt: {
      ajuda: 'Ajuda', login: 'Login', cadastrese: 'Cadastre-se',
      baixeApp: 'Baixe o App', home: 'Home', produtos: 'Produtos',
      carrinho: '🛒 Carrinho', searchPh: 'Buscar produtos...',
      marquee: '🚚 Frete grátis para todo o Brasil &nbsp;&nbsp;|&nbsp;&nbsp; 💳 Até 12x sem juros &nbsp;&nbsp;|&nbsp;&nbsp; 🔒 Compra segura &nbsp;&nbsp;|&nbsp;&nbsp; 🎁 Troca grátis em 30 dias &nbsp;&nbsp;|&nbsp;&nbsp;',
      ofertasTitle: 'Ofertas Imperdíveis', confiraBtn: 'Confira Agora',
      novidades: 'Novidades', noticias: 'Notícias', departamentos: 'Departamentos',
      masculino: 'Masculino', feminino: 'Feminino', infantil: 'Infantil',
      perfumes: 'Perfumes', esportes: 'Esportes', calcados: 'Calçados', acessorios: 'Acessórios',
      oferta: 'Oferta', novo: 'Novo', comprar: 'Comprar', adicionado: '✓ Adicionado!',
      toastCart: 'Produto adicionado ao carrinho! 🛒',
      prodDestaque: 'Produtos em Destaque',
      footer: '© 2026 Lojas Nacional. Todos os direitos reservados.',
      carregando: 'Carregando...', igCaption: '📸 Siga no Instagram', langLabel: '🇧🇷 PT-BR',
    },
    en: {
      ajuda: 'Help', login: 'Login', cadastrese: 'Sign Up',
      baixeApp: 'Download App', home: 'Home', produtos: 'Products',
      carrinho: '🛒 Cart', searchPh: 'Search products...',
      marquee: '🚚 Free shipping across Brazil &nbsp;&nbsp;|&nbsp;&nbsp; 💳 Up to 12x interest-free &nbsp;&nbsp;|&nbsp;&nbsp; 🔒 Secure shopping &nbsp;&nbsp;|&nbsp;&nbsp; 🎁 Free returns in 30 days &nbsp;&nbsp;|&nbsp;&nbsp;',
      ofertasTitle: 'Unmissable Deals', confiraBtn: 'Shop Now',
      novidades: 'New Arrivals', noticias: 'News', departamentos: 'Departments',
      masculino: 'Men', feminino: 'Women', infantil: 'Kids',
      perfumes: 'Perfumes', esportes: 'Sports', calcados: 'Footwear', acessorios: 'Accessories',
      oferta: 'Sale', novo: 'New', comprar: 'Buy Now', adicionado: '✓ Added!',
      toastCart: 'Product added to cart! 🛒',
      prodDestaque: 'Featured Products',
      footer: '© 2026 Lojas Nacional. All rights reserved.',
      carregando: 'Loading...', igCaption: '📸 Follow on Instagram', langLabel: '🇺🇸 EN',
    },
  };

  function applyTranslation(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!(key in t)) return;
      if (key === 'marquee') el.innerHTML = t[key];
      else el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (key in t) el.placeholder = t[key];
    });
    document.getElementById('langToggle').textContent = t.langLabel;
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    window._lang = lang;
  }

  let currentLang = localStorage.getItem('lang') || 'pt';
  applyTranslation(currentLang);

  document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('lang', currentLang);
    applyTranslation(currentLang);
  });

  /* ---- TEMA CLARO / ESCURO ---- */
  const themeBtn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('tema') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  themeBtn.textContent = saved === 'dark' ? '☀️' : '🌙';

  themeBtn.addEventListener('click', () => {
    const atual = document.documentElement.getAttribute('data-theme');
    const novo = atual === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', novo);
    localStorage.setItem('tema', novo);
    themeBtn.textContent = novo === 'dark' ? '☀️' : '🌙';
  });

  /* ---- HEADER: ESCONDER AO ROLAR ---- */
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const cur = window.scrollY;
    header.classList.toggle('scrolled', cur > 10);
    header.classList.toggle('hide', cur > lastScroll && cur > 80);
    lastScroll = cur;

    // Botão voltar ao topo
    const btt = document.getElementById('backToTop');
    if (btt) btt.classList.toggle('visible', cur > 500);
  }, { passive: true });

  /* ---- VOLTAR AO TOPO ---- */
  document.getElementById('backToTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- REVEAL ON SCROLL ---- */
  // Adiciona classe reveal nos cards de produto e seções
  document.querySelectorAll('.product-card, .categoria-item, .bannerMenor').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---- CARRINHO (lógica centralizada em cart.js) ---- */

  /* ---- WISHLIST ---- */
  window.toggleWishlist = function (btn) {
    const isActive = btn.classList.toggle('active');
    btn.textContent = isActive ? '♥' : '♡';
    const msg = window._lang === 'en'
      ? (isActive ? 'Added to favorites! ♥' : 'Removed from favorites')
      : (isActive ? 'Adicionado aos favoritos! ♥' : 'Removido dos favoritos');
    showToast(msg);
  };

  /* ---- TOAST ---- */
  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  /* ---- BANNER: hover ripple nas categorias ---- */
  document.querySelectorAll('.categoria-item').forEach(item => {
    item.addEventListener('click', () => {
      const nome = item.querySelector('span')?.textContent || '';
      showToast(`Explorando: ${nome}`);
    });
  });

  /* ---- APP QR POPUP ---- */
  const appLink = document.getElementById('appLink');
  const appQrPopup = document.getElementById('appQrPopup');

  // Clique alterna o popup (útil no mobile onde não há hover)
  appLink.addEventListener('click', (e) => {
    e.preventDefault();
    appQrPopup.classList.toggle('visivel');
  });

  // Fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!appLink.closest('.app-qr-wrap').contains(e.target)) {
      appQrPopup.classList.remove('visivel');
    }
  });

  /* ---- SEARCH (só na home — products.html tem lógica própria em products.js) ---- */
  const onProductsPage = window.location.pathname.includes('products.html');

  if (!onProductsPage) {
    const searchInput = document.getElementById('searchInput');
    const searchBtn   = document.querySelector('.search-button');

    function doSearch() {
      const q = searchInput?.value.trim();
      if (!q) return;
      window.location.href = `pages/products.html?search=${encodeURIComponent(q)}`;
    }

    searchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { searchInput.value = ''; searchInput.blur(); }
      if (e.key === 'Enter')  doSearch();
    });

    searchBtn?.addEventListener('click', doSearch);
  }

});