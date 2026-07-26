
const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

button?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    button?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelectorAll('.work-visual button').forEach((btn) => {
  btn.addEventListener('click', () => {
    alert('이 자리에 교수님의 실제 포트폴리오 영상 링크를 연결하면 됩니다.');
  });
});
