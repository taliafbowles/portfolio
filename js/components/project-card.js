function createProjectCard({ href, image, alt, title, description }) {
  return `
    <a class="card" href="${href}">
      <div class="card__image-wrap">
        <img class="card__image" src="${image}" alt="${alt}" loading="lazy" />
      </div>
      <div class="card__body">
        <div class="card__meta">
          <span class="card__year">${year}</span>
        </div>
        <h3 class="card__title">${title}</h3>
        <p class="card__description">${description}</p>
        <ul class="card__tags">
          ${tags.map(tag => `<li class="card__tag">${tag}</li>`).join('')}
        </ul>
      </div>
    </a>
  `;

}
