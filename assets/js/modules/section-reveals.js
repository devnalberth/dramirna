const revealGroups = [
  ['.hero__content', '.hero__media'],
  ['.credentials__card'],
  ['.problem__intro', '.problem__turn', '.problem__cards', '.problem__cta'],
  ['.solution__inner'],
  ['.process__intro', '.process__steps', '.process__actions'],
  ['.diu__inner'],
  ['.care__header', '.care__cards'],
  ['.bio__inner'],
  ['.differentials__header', '.differentials__body', '.differentials__inner > .btn'],
  ['.gallery__header'],
  ['.faq__inner'],
  ['.location__card', '.location__map'],
  ['.final-cta__card'],
];

export function initSectionReveals() {
  if (!('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) return;

  const delays = new Map();
  const animations = new Set();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;

      observer.unobserve(entry.target);
      const animation = entry.target.animate(
        [
          { opacity: 0, transform: 'translateY(24px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        {
          duration: 700,
          delay: delays.get(entry.target) * 100,
          easing: 'cubic-bezier(.22, 1, .36, 1)',
          fill: 'backwards',
        },
      );
      animations.add(animation);
      animation.finished.then(() => animations.delete(animation)).catch(() => animations.delete(animation));
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });

  for (const group of revealGroups) {
    group.forEach((selector, index) => {
      const element = document.querySelector(selector);
      if (!element) return;
      delays.set(element, index);
      observer.observe(element);
    });
  }

  motionQuery.addEventListener('change', () => {
    if (!motionQuery.matches) return;
    observer.disconnect();
    animations.forEach((animation) => animation.cancel());
  });
}
