# Landing page Dra. Mirna Santana

Implementação mobile first em HTML, CSS e JavaScript puros a partir dos frames mobile `20025:351` e desktop `20011:16` do Figma.

## Estado

**Fase 0 concluída.** Estrutura, tokens, documento HTML e assets locais preparados. O conteúdo das seções, componentes e interações serão implementados nas fases seguintes, uma seção por aprovação, conforme o briefing.

## Como executar

Na raiz do projeto, rode `python3 -m http.server 8000` e abra `http://localhost:8000/`.

## Estrutura

- `index.html`: head, dados estruturados da médica, skip link, header, main e footer.
- `assets/css/tokens.css`: cores, tipografia, espaçamentos, raios e sombras confirmados no Figma.
- `assets/css/base.css`: reset, estilos base e estrutura mínima do header e footer.
- `assets/css/components.css`: reservado para a Fase 1.
- `assets/css/sections.css`: reservado para a Fase 2 em diante.
- `assets/js/main.js` e `assets/js/modules/`: reservados para as interações futuras.
- `assets/img/`: fotos em WebP e fallback, favicon e imagem de compartilhamento.
- `assets/svg/`: vetores exportados do Figma.
- `ASSETS.md`: inventário com o peso de cada arquivo exportado.

## Pendências

- Confirmar domínio de produção para `canonical` e URLs absolutas de Open Graph e Twitter Card.
- Inserir as 11 perguntas e respostas do Figma em `FAQPage` ao implementar a seção FAQ.
- Confirmar bairro, sala, CEP, horário de atendimento, formação, residência, tipos de DIU, prazo do resultado da microscopia e convênios. Esses textos devem manter o marcador `<!-- PENDENTE: ... -->` e a classe `.is-pending` até a confirmação.
- Implementar navegação, módulos JavaScript, componentes e seções nas fases aprovadas.
- Revalidar o tamanho final de cada imagem contra seu slot quando a seção correspondente for construída. Os originais exportados foram limitados a 1600 px no lado maior nesta fase; o selo circular conserva a resolução original do Figma.

O header e o footer desta fase são esqueletos e ainda não representam a composição final dos frames.
