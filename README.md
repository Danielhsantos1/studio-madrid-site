# Studio Madrid — Site

Site institucional em HTML/CSS/JS puro (sem framework, sem build). Pronto pra subir no GitHub e hospedar onde quiser (Vercel, Netlify, GitHub Pages, Hostinger).

## Estrutura
```
index.html        → estrutura da página (uma única página, seções por âncora)
css/style.css      → todo o visual (tokens de cor/tipografia no topo do arquivo)
js/script.js       → menu mobile + formulário de agendamento
```

## Sobre o "agendamento online"
Hoje o formulário é **front-end only**: o cliente preenche, e ao clicar em "Confirmar" o site monta uma mensagem pronta e abre o WhatsApp do Studio Madrid (wa.me) com tudo preenchido. Não há banco de dados nem calendário real ainda — é MVP funcional, mais rápido de entregar e já resolve o problema de "não converte visita em agendamento" da proposta.

Pra virar agendamento 100% automático (com calendário, confirmação automática, bloqueio de horário já ocupado), o próximo passo é plugar um backend — dá pra usar Supabase (mesma stack que você já usa no My Safety/DocDeck) + uma function que grava o agendamento e dispara notificação.

## Pra customizar
- Número de WhatsApp: variável `WHATSAPP_NUMBER` no topo de `js/script.js`
- Cores/fontes: bloco `:root` no topo de `css/style.css`
- Preços e textos dos serviços: seção `#servicos` no `index.html`
- Fotos reais: troque o bloco `.about__frame-inner` e adicione `<img>` no lugar do monograma quando tiver fotos em boa resolução do estúdio

## Rodar localmente
Abra `index.html` direto no navegador, ou rode um servidor simples:
```
python3 -m http.server 8000
```
