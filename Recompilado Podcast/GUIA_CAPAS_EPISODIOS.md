# Guia de capas de episódios — Recompilado Podcast

Versão **1.1**, atualizada em **27/09/2026**. Referência visual principal para o grau de minimalismo: `recompilado_ep001_minimalista_1500x1500.png`. `capa_tecnica_aprovada.png` e `capa_geral_aprovada.png` continuam como referências da estrutura editorial, mas seus cenários e quantidade de objetos não são modelo para novas ilustrações. Referências de marca: `Guia_de_Identidade_Visual_Recompilado_v1.5.pdf` e `recompilado_logo_balao_verde.png` nos Sources. Em caso de divergência de marca, prevalece o guia de identidade visual mais recente aprovado.

## Objetivo

Criar uma capa distinta para cada episódio, reconhecível como Recompilado quando reduzida no player. A **ilustração do tema** muda; composição, tipografia editorial, número, classificação e assinatura permanecem consistentes. A estrutura toma as capas do Lambda3 Podcast como referência editorial inicial, sem copiar identidade, logo, cores ou ornamentos da Lambda3.

## Elementos fixos

Canvas quadrado, base de composição **1500 × 1500 px**. Para produção em 3000 × 3000 px, escale coordenadas e fontes por 2 e forneça uma ilustração de resolução adequada. Exportar RGB/sRGB em PNG ou JPEG. O limite de bytes deve ser conferido no destino de publicação; **500 KB não é uma regra universal**.

| Elemento | Regra na base de 1500 px |
| --- | --- |
| Ilustração | Cena minimalista sobre fundo liso preto esverdeado, com um assunto central nos dois terços superiores. Os 28% inferiores ficam escuros e vazios para o título. |
| Faixa superior | Linha verde sólida `#2DD37D`, 17 px de altura. |
| Número | Selo verde em `x=88–363`, `y=87–181`; `#001` etc., sem atribuir número sem confirmação. |
| Categoria | Rótulo discreto ao lado do número. `TÉCNICO` ou `GERAL`; se a pauta exigir outra classificação, confirmar antes de alterar o sistema. |
| Separador do título | Linha verde em `x=90–1410`, `y=1057`, 6 px. |
| Título | Branco `#F3F7F4`, à esquerda, geralmente duas linhas; faixa aproximada `y=1093–1270`. Quebra manual criteriosa. |
| Rodapé | Linha fina em `y=1341`; texto editorial `RECOMPILADO / PODCAST` à esquerda e símbolo oficial à direita (`x=1110`, `y=1360`, caixa de 106 px). |
| Margens | Cerca de 90 px nas bordas para os elementos editoriais. O símbolo conserva sua área de respiro e nunca é alterado internamente. |

Priorize o fundo já escuro e desocupado. Se necessário, uma camada escura de leitura pode começar gradualmente perto de `y=695` e chegar à opacidade máxima de 230/255 junto ao rodapé. Ela atua **sobre a ilustração**, jamais como brilho, degradê ou sombra do símbolo. O símbolo usa a cor sólida original.

### Cores

- Fundo da identidade: `#080B0D`.
- Verde do símbolo e acentos: `#2DD37D`.
- Texto principal: `#F3F7F4`.
- Texto auxiliar: `#A8B6AD`.
- Fundo da ilustração liso em preto esverdeado profundo, próximo de `#07120E`, com variação sutil de luz e sombra. Evite paisagens, folhas, texturas ornamentais e pontos de luz coloridos. Branco/cinza dos objetos temáticos cria contraste. Outros tons ficam restritos à ilustração, sem alterar o logo.

### Texto e tipografia

- Título editorial: sans-serif robusta, exemplo DejaVu Sans Bold. Preserve a grafia fornecida; não invente títulos, número, convidados ou subtítulos.
- Metadados e assinatura editorial: monoespaçada. O nome no rodapé é **texto editorial**, não uma reconstrução do lettering oficial da marca. Se a arte final do lettering oficial se tornar disponível, avalie sua aplicação sem alterar o símbolo.
- Duas linhas são o alvo. Se o título não couber, reduza a fonte dentro de limites legíveis ou faça uma quebra editorial; não comprima nem distorça letras. Evite títulos maiores que três linhas sem revisão específica.
- Não coloque texto gerado dentro da ilustração. Número, rótulo, título e assinatura são camadas de composição controlada.

## Direção da ilustração

**Estilo obrigatório para todas as novas capas:** pequena cena tridimensional minimalista de objetos ou personagens em argila digital branca/cinza claro, formas arredondadas, superfícies suaves, luz neutra macia e sombras discretas. Use **uma única metáfora visual**, com um elemento principal e, se indispensável à compreensão, até dois elementos de apoio. Personagens podem compor a mesma ação central. O tema deve ser reconhecível a 150 px. Deixe ampla área negativa ao redor da cena; use fundo liso preto esverdeado, sem cenário ambientado. Um pequeno acento verde pode aparecer somente quando contribuir para a leitura do tema. A cena se dissolve na área inferior vazia destinada ao texto.

**Teste de simplificação:** antes de finalizar, retire mentalmente cada objeto, personagem, detalhe de cenário e efeito. Se o tema ainda puder ser compreendido, remova o item. Evite repetir mesa, microfone, laptop ou blocos por hábito: só inclua objetos associados ao assunto específico do episódio. Não substitua a metáfora por uma coleção de ícones.

As capas anexadas do Lambda3 #499 e #500 orientaram **somente o tratamento de cena 3D clara**. Não reproduzir seus personagens, seus objetos específicos, a forma branca de fundo, elementos gráficos, paleta roxa/azul, selo vermelho, texto laranja ou marca.

Exemplos anteriores, válidos para a estrutura editorial e o tratamento de argila clara, mas com ilustrações mais carregadas que o novo padrão:

- Técnico: três módulos de software brancos ligados por ponte, engrenagens e ciclo de mudança.
- Geral: pessoa em pausa num banco sob árvore, laptop fechado sobre mesa. O assunto geral continua conectado ao trabalho em tecnologia.

**Referência atual de densidade visual:** episódio #001, “Qual é a desse novo podcast?” — duas figuras simples conversam diante de um microfone sobre fundo liso escuro. Para outros assuntos, mude a metáfora; preserve apenas a simplicidade, o espaço negativo e o tratamento de materiais.

### Prompt base para gerar apenas a ilustração

> Crie somente uma ilustração quadrada 1:1, **minimalista**, para a capa de um episódio do Recompilado Podcast sobre **[TEMA]**. Represente uma única metáfora visual: **[DESCREVER A AÇÃO OU O ELEMENTO CENTRAL]**. Use um elemento principal e, apenas se necessário, até dois elementos de apoio. Estilo de pequena cena 3D em argila digital clara, objetos ou personagens sem rosto detalhado em branco/cinza suave, formas arredondadas, luz neutra macia e sombras discretas. Fundo **liso** preto esverdeado profundo, próximo de `#07120E`, com amplo espaço negativo. Concentre a cena nos dois terços superiores; deixe o terço inferior escuro e vazio para receber o título. A imagem deve ser clara e legível como miniatura. **Não gerar cenário, árvores, folhas, pedras, móveis ou objetos extras que não expliquem o tema; não gerar palavras, letras, números, código, logotipos, selos, bordas ou elementos da identidade do Lambda3.** Não desenhar o símbolo do Recompilado. Sem efeitos luminosos ou decoração gratuita.

Inclua `recompilado_ep001_minimalista_1500x1500.png` como referência de **densidade visual** quando disponível. A nova cena deve representar **o tema novo**; não reutilize seus personagens ou microfone apenas para manter a aparência. Se o arquivo ainda não estiver nos Sources, use as regras e o prompt acima, sem depender dele.

## Processo e controle de qualidade

1. Confirme número, título exato e categoria; escolha a metáfora visual antes de gerar.
2. Gere a imagem **sem** os elementos fixos. A imagem deve ter resolução suficiente para a exportação desejada e não conter texto acidental. Confira que o fundo é liso e que só restaram os elementos necessários à metáfora.
3. Aplique a composição e o arquivo oficial do símbolo. Não regenere, vetorize ou redesenhe o símbolo. Não altere microfone, `>`, cursor, borda, ponta ou proporções.
4. Verifique legibilidade em 150 × 150 px e 75 × 75 px; título e número devem ser reconhecíveis, mesmo que detalhes finos da cena desapareçam.
5. Revise ortografia, quebra do título, contraste, margens, recorte do tema e posição do símbolo. Confira se a categoria é discreta e correta. Compare a densidade visual à capa minimalista do episódio #001; remova cenários e objetos supérfluos.
6. Exporte o original quadrado e, se necessário, uma versão menor otimizada para incorporar no MP3. A hospedagem pode exibir a capa individual em algumas plataformas e a capa principal em outras.

**Não são variações aprovadas:** cenários elaborados, paisagens ou vegetação de fundo, acúmulo de objetos, janela de snippet como área fixa, moldura grande para foto, mudança de posição do título, gradiente no logo, substituição do símbolo por uma geração parecida ou cópia da identidade do Lambda3.

## Pedido padrão para este Project

> Crie a capa do episódio **[NÚMERO]** do Recompilado Podcast, título exato **[TÍTULO]**, categoria **[TÉCNICO/GERAL]**, tema **[DESCRIÇÃO]**. Siga `GUIA_CAPAS_EPISODIOS.md`; use a capa minimalista do episódio #001 como referência de simplicidade e as capas anteriores apenas para a estrutura editorial. Gere uma única metáfora temática em 3D claro, com fundo escuro liso e ampla área negativa. Aplique número, título e símbolo oficial por composição controlada. Entregue PNG quadrado e mostre uma redução de 150 px para revisão.
