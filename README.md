# Router (React + Vite) — Projeto de estudos

Projeto simples para praticar **React Router**, **consumo de API (fetch)**, estados de **loading/erro** e um componente básico de **SEO** (title + meta description).

## Stack

- React + Vite
- React Router DOM
- Tailwind CSS

## Funcionalidades

- Listagem de produtos consumindo a API pública da Origamid (Ranek)
- Página de detalhes do produto por rota dinâmica (`:id`)
- Página de contato
- Atualização de `<title>` e `<meta name="description">` via componente `PageHead`

## Rotas

- `/` → lista de produtos
- `/produto/:id` → detalhes do produto
- `/contato` → contato

## Como rodar

1) Instale as dependências:

```bash
npm install
```

2) Rode o servidor de desenvolvimento:

```bash
npm run dev
```

3) Build e preview (opcional):

```bash
npm run build
npm run preview
```

## Estrutura (resumo)

- `src/App.jsx` — configuração das rotas e layout (Header/Main/Footer)
- `src/Components/Produtos.jsx` — página de listagem + skeleton loading
- `src/Components/Produto.jsx` — página de detalhes (`useParams`) + skeleton loading
- `src/Components/Contato.jsx` — página de contato
- `src/Seo/PageHead.jsx` — título e meta description

## Observações

- As páginas de produtos dependem de internet (dados vêm da API `https://ranekapi.origamid.dev`).
- Repositório voltado a estudo/prática, com foco em rotas e fluxo de carregamento.
