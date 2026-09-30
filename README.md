# Recompilado Podcast

Site institucional do **Recompilado**, podcast sobre tecnologia e o trabalho de
criar e entregar software.

## Stack

- [Astro](https://astro.build) (site estático)
- CSS custom com design tokens, sem framework de UI

## Organização

```
docs/brand/           Documentação da marca (não servida pelo site).
public/brand/         Assets oficiais servidos pelo site.
src/components/       Componentes Astro (Header, Footer, EpisodeCard, …).
src/layouts/          Layouts de página.
src/pages/            Páginas (index, episodios, episodio/[numero], sobre).
src/styles/           Design tokens e estilos globais.
src/data/episodes.ts  Dados dos episódios.
```

## Comandos

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build estático para dist/
npm run preview  # pré-visualizar o build
```

## Identidade visual

Fonte de verdade: `docs/brand/Guia_de_Identidade_Visual_Recompilado_v1.5.pdf`.

O símbolo é servido a partir dos PNGs oficiais aprovados (v1.5). Cores sólidas da
paleta: `#080B0D`, `#141A1C`, `#2DD37D`, `#0B6B40`, `#F3F7F4`, `#A8B6AD`.
Sem gradientes, sombras ou brilhos sobre a marca.