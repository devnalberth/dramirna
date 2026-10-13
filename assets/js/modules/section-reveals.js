const revealGroups = [
  ['.hero__content', '.hero__media'],
  ['.problem__intro', '.problem__turn', '.problem__cards .card-sintoma', '.problem__cta'],
  ['.solution__media', '.solution__eyebrow', '.solution__title', '.solution__lead', '.solution__text', '.solution__list', '.solution__cta'],
  ['.process__intro', '.process__steps .card-etapa', '.process__actions'],
  ['.diu__eyebrow', '.diu__title', '.diu__lead', '.diu__text', '.diu__list', '.diu__cta', '.diu__media'],
  ['.care__header', '.care__cards .card-servico'],
  ['.bio__photos', '.bio__content > .eyebrow', '.bio__title', '.bio__lead', '.bio__text', '.bio__credentials', '.bio__content > .btn'],
  ['.differentials__header', '.differentials__photo', '.differentials__cards .card-sintoma', '.differentials__inner > .btn'],
  ['.gallery__header', '.gallery__item', '.gallery__inner > .btn'],
  ['.faq .eyebrow', '.faq__title', '.faq__description', '.faq__contact', '.faq__list .faq-item'],
  ['.location__card', '.location__map'],
  ['.final-cta__content', '.final-cta__photo'],
];

export function initSectionReveals() {
  if (!('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) return;

  const pending = new Set();
  const hidden = new Set();
  const animations = new Map();
  const delays = new Map();

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) reveal(entry.target);
    }
  }, { rootMargin: '0px 0px -6% 0px', threshold: .06 });

  function reveal(element) {
    if (!pending.delete(element)) return;
    observer.unobserve(element);

    const startsHidden = hidden.delete(element);
    const animation = element.animate(
      [
        { opacity: startsHidden ? 0 : 1, transform: `translate3d(0, ${startsHidden ? 24 : 12}px, 0)` },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      ],
      {
        duration: startsHidden ? 700 : 550,
        delay: delays.get(element),
        easing: 'cubic-bezier(.22, 1, .36, 1)',
        fill: 'both',
      },
    );
    animations.set(element, animation);
    animation.finished.then(() => {
      element.style.opacity = '';
      animation.cancel();
      animations.delete(element);
    }).catch(() => animations.delete(element));
  }

  for (const group of revealGroups) {
    let index = 0;
    for (const selector of group) {
      for (const element of document.querySelectorAll(selector)) {
        if (!element.getClientRects().length) continue;

        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        const containsImage = !!element.querySelector('img[loading="lazy"]') || element.matches('.hero__media');
        if (!isVisible && !containsImage) {
          element.style.opacity = '0';
          hidden.add(element);
        }

        delays.set(element, Math.min(index, 4) * 70);
        pending.add(element);
        observer.observe(element);
        element.addEventListener('focusin', () => reveal(element), { once: true });
        index++;
      }
    }
  }

  motionQuery.addEventListener('change', () => {
    if (!motionQuery.matches) return;
    observer.disconnect();
    animations.forEach((animation) => animation.cancel());
    pending.forEach((element) => { element.style.opacity = ''; });
    animations.forEach((_, element) => { element.style.opacity = ''; });
    pending.clear();
    hidden.clear();
    animations.clear();
  });
}
