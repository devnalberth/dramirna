export const WA_NUMBER = '5527997930889';

export const WA_MESSAGES = {
  header: 'Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Mirna.',
  flutuante: 'Olá! Vim pelo site e gostaria de agendar uma consulta com a Dra. Mirna.',
  hero: 'Olá! Vim pelo site e quero agendar uma consulta com a Dra. Mirna.',
  problema: 'Olá! Tenho um corrimento que sempre volta e quero entender a causa. Como faço para agendar?',
  solucao: 'Olá! Quero agendar uma consulta com microscopia do conteúdo vaginal.',
  como: 'Olá! Quero agendar minha avaliação com a Dra. Mirna.',
  diu: 'Olá! Quero conversar sobre anticoncepção, DIU ou Implanon.',
  rotina: 'Olá! Quero agendar minha consulta de rotina ginecológica.',
  climaterio: 'Olá! Quero agendar uma consulta sobre climatério e menopausa.',
  geral: 'Olá! Quero agendar uma consulta ginecológica.',
  bio: 'Olá! Quero agendar uma consulta com a Dra. Mirna.',
  diferenciais: 'Olá! Quero agendar minha consulta com a Dra. Mirna.',
  galeria: 'Olá! Quero agendar minha consulta com a Dra. Mirna.',
  faq: 'Olá! Tenho uma dúvida antes de agendar a consulta.',
  final: 'Olá! Vim pelo site e quero agendar minha consulta.',
};

export function initWhatsAppLinks() {
  document.querySelectorAll('a[data-wa]').forEach((link) => {
    const message = WA_MESSAGES[link.dataset.wa];
    if (!message) return;
    link.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener';
  });
}
