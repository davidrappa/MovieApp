# Guia da Apresentação — Acessibilidade em Apps Mobile

Duração total: ~50 minutos + 10 min para perguntas

---

## Bloco 1 — Por que isso importa (5 min)

**O que falar:**

Comece com dados. Não precisa de slide elaborado, só 3 números:

- **1.3 bilhão** de pessoas no mundo têm alguma deficiência (OMS, 2023)
- **16%** da população mundial — 1 em cada 6 pessoas
- No Brasil, a **Lei Brasileira de Inclusão (LBI 13.146/2015)** obriga aplicativos a serem acessíveis — tem implicação jurídica

Depois quebre a ideia de que acessibilidade é só para cegos:

> "Acessibilidade não é só leitor de tela. É a pessoa com tremor no ônibus tentando tocar num botão pequeno. É quem está com o sol na tela e contraste baixo. É quem está com um bebê no colo e só tem uma mão livre. É quem tem 60 anos e aumentou a fonte do celular. Todos esses cenários são resolvidos com as mesmas técnicas."

---

## Bloco 2 — Como funciona o VoiceOver/TalkBack (10 min)

**O que falar antes da demo:**

> "O VoiceOver no iOS e o TalkBack no Android leem uma estrutura chamada árvore de acessibilidade. Não é o que você vê na tela — é o que o sistema entende que está lá. E se você não construir essa estrutura com cuidado, o leitor de tela vai ler lixo."

**Demo ao vivo — ANTES (branch antigo ou git stash):**

1. Ative o VoiceOver: `Ajustes → Acessibilidade → VoiceOver` (iOS) ou `Configurações → Acessibilidade → TalkBack` (Android)
2. Navegue pela tela de Populares
3. Deixe o leitor ler o MovieCard sem acessibilidade — vai ler título, nota e ano separados, como itens independentes, sem contexto
4. Tente pressionar o botão de lixeira — o leitor não vai anunciar nada útil

**O que falar durante:**

> "Reparem que o leitor leu o título, depois a nota, depois o ano — três focagens para um card que deveria ser uma coisa só. E o botão de remover favorito? Silêncio. A pessoa não sabe o que aquele botão faz."

**Demo ao vivo — DEPOIS (branch atual):**

1. Navegue pelo mesmo card
2. O leitor lê tudo em uma frase: *"Filme Inception, nota 8.8 lançado em 2010. Botão. Abra e veja os detalhes do filme."*
3. Pressione o botão de lixeira — anuncia: *"Remover dos favoritos. Botão."*

> "Mesma tela, mesma informação. A diferença é só como construímos a estrutura."

---

## Bloco 3 — Os 3 padrões que resolvem 80% dos casos (15 min)

### Padrão 1 — Elemento Interativo (5 min)

**Arquivo para mostrar:** `src/ui/components/BackButton.tsx`

**O que falar:**

> "Todo elemento tocável precisa de três coisas: role, label e hint. Role diz o que é. Label diz o nome. Hint diz o que acontece quando você toca."

```tsx
accessibilityRole="button"   // o que é
accessibilityLabel="Voltar"  // o nome
accessibilityHint="Toque duas vezes para voltar para a tela anterior" // o que faz
```

> "E reparem no minHeight 44 e no hitSlop. A área de toque é maior do que o botão visualmente. Vou falar mais sobre isso no bloco de tamanho de toque."

**Mostrar também:** que o ícone filho tem `accessibilityLabel=""` para não duplicar na leitura.

---

### Padrão 2 — Estado Dinâmico (5 min)

**Arquivo para mostrar:** `src/ui/containers/movie-details/MovieDetailsBottom.tsx`

**O que falar:**

> "Quando o visual muda, a acessibilidade precisa mudar junto. Um botão de favorito que sempre anuncia 'Favorito' é inútil — eu não sei se já favoritei ou não."

```tsx
accessibilityLabel={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
accessibilityState={{ selected: isFavorite }}
```

> "O accessibilityState com selected é o que faz o leitor anunciar 'selecionado' ou 'não selecionado' automaticamente. O sistema operacional cuida do anúncio — você só declara o estado."

---

### Padrão 3 — Agrupar e Esconder (5 min)

**Arquivo para mostrar:** `src/ui/components/MovieCard.tsx`

**O que falar:**

> "Esse é o padrão mais importante e o mais ignorado. Quando o elemento pai já descreve tudo, os filhos precisam sumir da árvore de acessibilidade. Senão o leitor lê tudo duas vezes."

```tsx
// Pai descreve tudo
accessibilityLabel="Filme Inception, nota 8.8 lançado em 2010"

// Filhos somem
accessibilityElementsHidden={true}      // iOS
importantForAccessibility="no"          // Android
```

> "Duas propriedades, uma para cada plataforma. O React Native não tem uma prop unificada para isso ainda — você precisa das duas."

---

## Bloco 4 — A inconsistência como lição (10 min)

**O que mostrar:** `git diff` das três telas ou comparar `index.tsx` com `search.tsx` e `favorites.tsx`

**O que falar:**

> "Vou mostrar um problema real do projeto. A tela de Populares tem acessibilityRole='list' na FlatList. As telas de Busca e Favoritos não tinham. Mesmo projeto, mesmo time, três telas com comportamento diferente."

Mostrar o diff no terminal ou no VS Code:

```bash
git diff HEAD~1 -- app/\(tabs\)/search.tsx app/\(tabs\)/favorites.tsx
```

> "Isso acontece porque acessibilidade sem convenção de equipe vira acidente. Quem fez a primeira tela sabia o que estava fazendo. Quem fez as outras duas talvez não soubesse, ou esqueceu, ou não tinha referência."

**A lição:**

> "Você precisa de padrão, não de boa vontade individual. Um componente base, um checklist de PR, um lint rule — qualquer coisa que force a consistência. Porque boa intenção não escala."

---

## Bloco 5 — Tamanho de toque: a regra dos 44pt (5 min)

**O que falar:**

> "Apple e Google convergem em uma coisa: todo elemento tocável precisa ter no mínimo 44x44 pontos. Não é opinião, é guideline oficial das duas plataformas."

Mostrar o botão de lixeira no `MovieCard.tsx` — ele tem `width={36}`, abaixo do mínimo.

```tsx
// Visualmente pequeno, mas área de toque correta
style={{ minHeight: 44 }}
hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
```

> "O hitSlop expande a área de toque sem mudar o visual. A pessoa com tremor ou mobilidade reduzida consegue acertar o botão mesmo que o dedo não caia exatamente em cima."

---

## Bloco 6 — Bônus: o que o Expo já faz por você (5 min)

> "Uma coisa que ajuda saber: você não está partindo do zero. O React Native já faz algumas coisas automaticamente."

- **`<Text>` é acessível por padrão** — qualquer Text já é lido pelo VoiceOver sem configuração
- **`accessible={true}` em uma View concatena os filhos** — é por isso que o padrão 3 funciona
- **Expo Router anuncia trocas de tela** — quando você navega, o leitor fala o título da tela automaticamente se você configurar `options={{ title: "..." }}`
- **TabNavigator anuncia a aba ativa** — o tabBarAccessibilityLabel que usamos no projeto é exatamente para personalizar isso

> "O framework já lê seus textos. O problema é que ele não sabe qual é o contexto, o estado e a intenção — isso é responsabilidade sua."

---

## Fechamento (2 min)

Deixe no slide final e fale devagar:

> "Acessibilidade feita cedo é uma feature.
> Feita depois é uma dívida técnica.
> Feita nunca é exclusão."

---

## Checklist rápido para o dia a dia

Para deixar no slide ou distribuir:

- Todo botão tem `role` + `label` + `hint`
- Labels mudam com o estado — nunca fixos em elementos dinâmicos
- Ícones decorativos têm `accessible={false}`
- Listas têm `accessibilityRole="list"` + `importantForAccessibility="no"`
- Elementos tocáveis têm no mínimo 44x44pt
- Componentes compostos agrupam no pai e escondem os filhos
- Teste com VoiceOver/TalkBack ligado antes do PR

---

## Dicas práticas para a apresentação

**Para a demo ao vivo:**
Crie dois branches antes de apresentar para não depender de git stash na hora:

```bash
# Branch com o código sem acessibilidade (para mostrar o "antes")
git checkout -b apresentacao/antes
# Reverta as correções de acessibilidade aqui

# Branch com o código corrigido (para mostrar o "depois")
git checkout main  # já está correto
```

**Se o VoiceOver travar durante a demo:**
- iOS: toque triplo no botão lateral para desativar rapidamente
- Android: segure os dois botões de volume por 3 segundos

**Ferramenta extra para mencionar:**
O **Accessibility Inspector** do Xcode permite auditar a árvore de acessibilidade sem precisar de dispositivo físico — útil para mostrar ao vivo no simulador sem precisar de celular.

---

## Referências para citar se perguntarem

- OMS — Disability and Health: who.int/news-room/fact-sheets/detail/disability-and-health
- Apple HIG — Accessibility: developer.apple.com/design/human-interface-guidelines/accessibility
- Android Accessibility: developer.android.com/guide/topics/ui/accessibility
- Lei Brasileira de Inclusão: planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm
- React Native Accessibility docs: reactnative.dev/docs/accessibility
