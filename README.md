# Landing page Dra. Mirna Santana

Landing page responsiva em HTML, CSS e JavaScript puros, implementada a partir dos frames mobile `20025:351` e desktop `20011:16` do Figma. Cada fase foi registrada em um commit curto.

## Executar

Na raiz do projeto, rode `python3 -m http.server 8000` e abra `http://localhost:8000/`.

## Estrutura

- `index.html`: conteúdo, SEO, dados estruturados, seções e rodapé.
- `assets/css/`: tokens, base, componentes e estilos das seções.
- `assets/js/modules/`: menu, FAQ, faixas em movimento e links de WhatsApp.
- `assets/img/` e `assets/svg/`: fotos e vetores locais exportados do Figma.
- `assets/fonts/`: fontes locais em WOFF2 e respectivas licenças OFL.
- `ASSETS.md`: inventário dos arquivos de imagem e vetor.
- `preview-componentes.html`: prévia de desenvolvimento dos componentes base.

## Pendências antes da publicação

- Confirmar o domínio de produção para adicionar `canonical` e URLs absolutas de Open Graph e Twitter Card.
- Confirmar se há sala a informar no endereço. Confirmar também horário, formação, residência, tempo de atuação, tipos de DIU, prazo do resultado da microscopia e convênios; os campos exibidos que ainda estão pendentes têm `.is-pending` ou comentários `PENDENTE` no HTML.
- Revisar as respostas das perguntas 2 a 11 do FAQ. O Figma apresenta a resposta completa apenas da primeira pergunta; as demais receberam textos provisórios para manter o acordeão funcional.
- O mapa interativo do Google Maps usa o endereço informado. Caso haja um perfil oficial da clínica, conferir se o pin aponta para a entrada correta do consultório.

## Verificações

O HTML foi validado com `html-validate` e Nu Html Checker; CSS e JavaScript passaram por análise de sintaxe. A página foi conferida em 360, 390, 768, 1024, 1440 e 1920 px, incluindo menu mobile, FAQ, âncoras e links de WhatsApp. No Lighthouse local, as pontuações foram 90/100/100/100 no mobile e 100/100/100/100 no desktop para desempenho, acessibilidade, boas práticas e SEO.
