/* -- Header: esconder ao rolar -- */
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const cur = window.scrollY;
  header.classList.toggle('scrolled', cur > 10);
  header.classList.toggle('hide', cur > lastScroll && cur > 80);
  lastScroll = cur;
}, { passive: true });

/* -- Tema claro / escuro -- */
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