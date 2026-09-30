export function initMarquees() {
  const marquees = document.querySelectorAll('.marquee:not(.is-ready)');
  if (!marquees.length) return;

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          target.dataset.inView = String(isIntersecting);
          target.classList.toggle('is-paused', !isIntersecting || motionQuery.matches);
        });
      })
    : null;

  marquees.forEach((marquee) => {
    const track = marquee.querySelector('.marquee__track');
    const group = track?.querySelector('.marquee__group');
    if (!track || !group) return;

    const original = group.innerHTML;
    const fill = () => {
      track.replaceChildren(group);
      group.innerHTML = original;
      while (group.getBoundingClientRect().width < marquee.clientWidth + 100) {
        group.insertAdjacentHTML('beforeend', original);
      }
      const duplicate = group.cloneNode(true);
      duplicate.setAttribute('aria-hidden', 'true');
      track.append(duplicate);
    };

    fill();
    window.addEventListener('resize', fill, { passive: true });
    marquee.classList.add('is-ready');
    marquee.classList.toggle('is-paused', motionQuery.matches);
    observer?.observe(marquee);
  });

  motionQuery.addEventListener?.('change', ({ matches }) => {
    marquees.forEach((marquee) => marquee.classList.toggle('is-paused', matches || marquee.dataset.inView === 'false'));
  });
}
