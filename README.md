# Landing page Dra. Mirna Santana

Implementação mobile first em HTML, CSS e JavaScript puros a partir dos frames mobile `20025:351` e desktop `20011:16` do Figma.

## Estado

**Fase 0 registrada no commit `fe122e5`. Fase 1 registrada no commit `c41d911`. Seção 00 da Fase 2 implementada para revisão.** Estrutura, tokens, assets locais, componentes compartilhados e cabeçalho responsivo preparados. As demais seções serão implementadas uma por aprovação, conforme o briefing.

## Como executar

Na raiz do projeto, rode `python3 -m http.server 8000` e abra `http://localhost:8000/`.

## Estrutura

- `index.html`: head, dados estruturados da médica, skip link, header, main e footer.
- `assets/css/tokens.css`: cores, tipografia, espaçamentos, raios e sombras confirmados no Figma.
- `assets/css/base.css`: reset, estilos base e estrutura mínima do header e footer.
- `assets/css/components.css`: botões, etiquetas, selo, credenciais, cards, FAQ, faixas e divisores da Fase 1.
- `preview-componentes.html`: prévia de desenvolvimento para conferir as variantes da Fase 1.
- `assets/css/sections.css`: cabeçalho responsivo; demais seções serão adicionadas nas próximas etapas.
- `assets/js/main.js` e `assets/js/modules/`: menu, rolagem do cabeçalho e links contextuais do WhatsApp; FAQ e faixas ficam para suas seções.
- `assets/img/`: fotos em WebP e fallback, favicon e imagem de compartilhamento.
- `assets/svg/`: vetores exportados do Figma.
- `ASSETS.md`: inventário com o peso de cada arquivo exportado.

## Pendências

- Confirmar domínio de produção para `canonical` e URLs absolutas de Open Graph e Twitter Card.
- Inserir as 11 perguntas e respostas do Figma em `FAQPage` ao implementar a seção FAQ.
- Confirmar bairro, sala, CEP, horário de atendimento, formação, residência, tipos de DIU, prazo do resultado da microscopia e convênios. Esses textos devem manter o marcador `<!-- PENDENTE: ... -->` e a classe `.is-pending` até a confirmação.
- Os destinos dos links do menu (`#inicio`, `#corrimento`, `#como-funciona`, `#diu-e-implanon`, `#sobre`, `#duvidas`) serão criados com as respectivas seções.
- Implementar as demais seções, o FAQ e as faixas nas fases aprovadas.
- Revalidar o tamanho final de cada imagem contra seu slot quando a seção correspondente for construída. Os originais exportados foram limitados a 1600 px no lado maior nesta fase; o selo circular conserva a resolução original do Figma.

O header e o footer desta fase são esqueletos e ainda não representam a composição final dos frames.
