export function initGallery() {
  const grid = document.querySelector('.gallery__grid');
  if (!grid || !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();

    grid.querySelectorAll('.gallery__item').forEach((item, index) => {
      item.animate(
        [
          { opacity: 0, transform: 'translateY(28px) scale(.97)' },
          { opacity: 1, transform: 'translateY(0) scale(1)' },
        ],
        {
          duration: 800,
          delay: index * 140,
          easing: 'cubic-bezier(.22, 1, .36, 1)',
          fill: 'backwards',
        },
      );
    });
  }, { threshold: .12 });

  observer.observe(grid);
}
