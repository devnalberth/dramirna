export function initHeader() {
  const header = document.querySelector('.site-header');
  const toggle = header?.querySelector('.site-header__menu-toggle');
  const nav = header?.querySelector('.site-header__nav');
  const sentinel = document.querySelector('.header-sentinel');
  if (!header || !toggle || !nav) return;

  const setMenuOpen = (open, restoreFocus = false) => {
    header.classList.toggle('is-menu-open', open);
    document.body.classList.toggle('has-menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    if (open) nav.querySelector('a')?.focus();
    if (!open && restoreFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || !header.classList.contains('is-menu-open')) return;
    const target = link.hash && document.getElementById(decodeURIComponent(link.hash.slice(1)));
    setMenuOpen(false, !target);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('is-menu-open')) setMenuOpen(false, true);
  });
  document.addEventListener('click', (event) => {
    if (header.classList.contains('is-menu-open') && !header.contains(event.target)) setMenuOpen(false);
  });

  const desktop = window.matchMedia('(min-width: 1024px)');
  desktop.addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
  });

  if (sentinel && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => header.classList.toggle('is-scrolled', !entry.isIntersecting));
    observer.observe(sentinel);
  }
}
