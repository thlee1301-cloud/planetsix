const grid = document.getElementById('worksGrid');
works.forEach((work, index) => {
  const card = document.createElement('article');
  card.className = 'work-card';
  const media = work.thumbnail
    ? `<img class="work-thumb" src="${work.thumbnail}" alt="${work.title} 썸네일">`
    : `<div class="work-thumb work-placeholder">썸네일을 넣어주세요</div>`;
  const link = work.video
    ? `<a class="work-link" href="${work.video}" target="_blank" rel="noopener">영상 보기 →</a>`
    : '';
  card.innerHTML = `${media}<div class="work-body"><span class="work-no">${String(index + 1).padStart(2,'0')} · ${work.category}</span><h3>${work.title}</h3><p>${work.description}</p>${link}</div>`;
  grid.appendChild(card);
});
