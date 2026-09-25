const grid = document.getElementById('worksGrid');

works.forEach((work, index) => {
  const card = document.createElement('article');
  card.className = 'work-card featured-work';
  card.innerHTML = `
    <button class="work-media" type="button" aria-label="${work.title} 영상 재생">
      <img class="work-thumb" src="${work.thumbnail}" alt="${work.title} 썸네일">
      <span class="play-button" aria-hidden="true">▶</span>
      <span class="work-media-label">PLAY FILM</span>
    </button>
    <div class="work-body">
      <span class="work-no">${String(index + 1).padStart(2,'0')} · ${work.category} · ${work.year}</span>
      <h3>${work.title}</h3>
      <p class="work-en">${work.englishTitle}</p>
      <p>${work.description}</p>
      <button class="work-link" type="button">영상 보기 →</button>
    </div>
  `;

  const openButtons = card.querySelectorAll('.work-media, .work-link');
  openButtons.forEach(button => button.addEventListener('click', () => openVideo(work)));

  grid.appendChild(card);
});

const modal = document.createElement('div');
modal.className = 'video-modal';
modal.setAttribute('aria-hidden', 'true');
modal.innerHTML = `
  <div class="video-modal-backdrop"></div>
  <section class="video-modal-dialog" role="dialog" aria-modal="true" aria-label="작품 영상">
    <button class="video-modal-close" type="button" aria-label="영상 닫기">×</button>
    <div class="video-frame-wrap">
      <iframe class="video-frame" title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    <div class="video-modal-caption"></div>
  </section>
`;
document.body.appendChild(modal);

const frame = modal.querySelector('.video-frame');
const caption = modal.querySelector('.video-modal-caption');
const closeButton = modal.querySelector('.video-modal-close');

function openVideo(work) {
  frame.src = `https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0`;
  caption.innerHTML = `<strong>${work.title}</strong><span>${work.englishTitle}</span>`;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  closeButton.focus();
}

function closeVideo() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  frame.src = '';
  document.body.classList.remove('modal-open');
}

closeButton.addEventListener('click', closeVideo);
modal.querySelector('.video-modal-backdrop').addEventListener('click', closeVideo);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) closeVideo();
});
