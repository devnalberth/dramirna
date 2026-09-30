export function initFaq() {
  const list = document.querySelector('.faq__list');
  if (!list) return;

  const items = [...list.querySelectorAll('.faq-item')];
  list.addEventListener('click', (event) => {
    const button = event.target.closest('.faq-item__question');
    if (!button || !list.contains(button)) return;

    const clickedItem = button.closest('.faq-item');
    const shouldOpen = button.getAttribute('aria-expanded') !== 'true';
    items.forEach((item) => {
      const question = item.querySelector('.faq-item__question');
      const panel = item.querySelector('.faq-item__panel');
      const isOpen = item === clickedItem && shouldOpen;
      question.setAttribute('aria-expanded', String(isOpen));
      panel.hidden = !isOpen;
      item.classList.toggle('is-open', isOpen);
    });
  });
}
