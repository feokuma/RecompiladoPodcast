export type Category = "TECNICO" | "GERAL";

export interface Episode {
  numero: number;
  numeroLabel: string;
  titulo: string;
  categoria: Category;
  descricao: string;
  convidados: string[];
  capa: string;
  publicadoEm: string;
  duracao?: string;
  slug: string;
}

// Conteúdo editorial provisório. Episódios reais serão adicionados conforme forem
// confirmados (número, título, categoria e convidados). Não inventar dados oficiais.
export const episodes: Episode[] = [
  {
    numero: 1,
    numeroLabel: "#001",
    titulo: "Qual é a desse novo podcast?",
    categoria: "GERAL",
    descricao:
      "O Recompilado apresenta sua proposta: conversas que ajudam a construir o próximo build, falando de tecnologia e do trabalho de criar e entregar software.",
    convidados: [],
    capa: "/brand/capa-tecnica.png",
    publicadoEm: "Em breve",
    slug: "qual-e-a-desse-novo-podcast"
  }
];

export function getEpisode(numero: string | number): Episode | undefined {
  const n = Number(numero);
  return episodes.find((e) => e.numero === n);
}

export function episodePath(e: Episode): string {
  return `/episodio/${e.slug}`;
}