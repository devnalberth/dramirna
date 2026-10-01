export function initBioPhotos() {
  const group = document.querySelector('.bio__photos');
  if (!group) return;

  const photos = [...group.querySelectorAll('.bio__photo')];
  photos.forEach((photo) => {
    photo.addEventListener('click', () => {
      const selected = photo.classList.contains('bio__photo--portrait') ? 'portrait' : 'smiling';
      group.dataset.active = group.dataset.active === selected ? '' : selected;
      photos.forEach((item) => {
        const isActive = item === photo && group.dataset.active === selected;
        item.setAttribute('aria-pressed', String(isActive));
      });
    });
  });
}
