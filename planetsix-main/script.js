
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
const header = document.querySelector('.site-header');
const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', updateHeader, { passive:true });
updateHeader();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold:.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
