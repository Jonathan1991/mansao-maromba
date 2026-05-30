# Mansão Maromba - Landing Page de Alta Performance ⚡

Este repositório contém o código completo e os ativos da Landing Page do produto fictício **Mansão Maromba**, um energético voltado para o público fitness e de alta performance. O projeto foi desenvolvido utilizando Inteligência Artificial de ponta através do assistente **Antigravity** com **Google Gemini**.

Esta documentação foi estruturada para demonstrar o cumprimento de cada uma das etapas exigidas na atividade.

---

## 📋 Relatório de Desenvolvimento da Atividade

### 4.1 Planejamento com IA (Antigravity)
Utilizamos engenharia de prompt para mapear os pilares estratégicos do produto:
*   **Público-alvo:** Praticantes de musculação (bodybuilders), atletas de elite, praticantes de crossfit e profissionais que necessitam de alto nível de energia e foco cognitivo prolongado.
*   **Proposta de Valor:** "Energia física imediata combinada com foco cerebral contínuo, zero açúcar, baixo sódio e sabor refrescante premium (sem sabor residual químico)."
*   **Estrutura Definida:**
    1. Hero Section (Visual da lata, Headline agressiva e CTAs)
    2. Benefícios (Grade de cards explicativos com ícones)
    3. Sobre o Produto (Fórmula científica ativa e público)
    4. Estatísticas Animadas (Métricas fictícias de impacto)
    5. Depoimentos (Prova social com foto, cidade e avaliação 5 estrelas)
    6. Tabela Comparativa (Diferenciais contra concorrentes)
    7. FAQ (Acordeão de dúvidas frequentes)
    8. CTA Final (Gatilho de urgência + oferta + cronômetro regressivo)
    9. Footer (Redes sociais, links legais e créditos)

---

### 4.2 Geração da Landing Page (Antigravity)
O prompt inicial de geração de interface combinou o copywriting persuasivo ao design de alta fidelidade:
> *Prompt Utilizado:* "Crie uma landing page responsiva para o energético 'Mansão Maromba' com slogan 'O sabor energético'. O público-alvo são atletas e praticantes de academia. Divida a página em Hero Section, Benefícios, Sobre, Destaques, Depoimentos, Comparação e FAQ. Utilize paleta com fundo preto profundo (#050505), cinza escuro (#101010) e detalhes de luz e glow em verde neon (#39FF14) e vermelho intenso (#FF2D2D) para uma estética agressiva, premium e inspirada em e-sports e alta performance."

---

### 4.3 Processo de Refinamento de Prompt (Mínimo de 3 Iterações)

Para alcançar a excelência estética, de usabilidade e conversão exigida, realizamos **3 iterações de refinamento de prompt** sobre o código:

*   **Iteração 1: Design e Estética Premium (Cyber-Fitness)**
    *   *Prompt de Refinamento:* `Melhore o design visual das seções. Aplique bordas suaves com degradês neon, sombras do tipo box-shadow com efeito glow em verde e vermelho e estilização glassmorphism nas caixas de texto e cards. Importe a fonte 'Rajdhani' para títulos e 'Inter' para o corpo.`
*   **Iteração 2: Otimização de Conversão e Urgência (CRO)**
    *   *Prompt de Refinamento:* `Destaque a hierarquia visual dos botões de ação (CTAs). Crie um efeito pulsar animado nos botões principais de compra. Adicione uma seção de CTA final com um cronômetro regressivo evergreen de 2 horas (gerenciado via localStorage) para criar senso de urgência e escassez.`
*   **Iteração 3: Microinterações e Experiência do Usuário (UX/UI)**
    *   *Prompt de Refinamento:* `Adicione microinterações dinâmicas. Desenvolva um efeito de partículas de energia flutuantes que reagem ao movimento do mouse utilizando HTML5 Canvas em segundo plano. Crie um efeito de contagem progressiva nas estatísticas que ative apenas quando o usuário rolar até a seção, e garanta que o acordeão do FAQ abra e feche com transições suaves de altura.`

---

### 4.4 Geração de Imagens com IA (Google Gemini)
Evitando prompts simples ou genéricos, foram criados prompts descritivos detalhados para a geração de ativos na plataforma:

*   **Lata do Produto (`images/maromba_can.png`):**
    > *Prompt Utilizado:* `Sleek, photorealistic 3D render of a premium energy drink can labeled 'Mansão Maromba'. Matte black finish with vibrant glowing neon green lightning bolt accents and deep red design highlights. Drops of fresh condensation on the metallic surface. Dark studio lighting with green and red laser beams reflecting off the can, hyper-detailed, 8k resolution. No text other than 'Mansão Maromba'.`
*   **Fundo da Hero Section (`images/hero_bg.png`):**
    > *Prompt Utilizado:* `Dark, futuristic cyberpunk gym interior. Glowing neon green and neon red laser lights cutting through the atmosphere. Floating dust particles, high-contrast dramatic studio lighting, blurred premium fitness equipment in the background, immersive high-energy vibe, 8k resolution, aspect ratio 16:9. No text or logos.`
*   **Imagem da Seção Sobre (`images/fitness_about.png`):**
    > *Prompt Utilizado:* `Cinematic photorealistic portrait of an athlete in action in a dark futuristic gym, covered in sweat, glowing neon green and neon red energy trails surrounding their body, high contrast, active athletic pose, ultra-detailed fitness aesthetic. No text or logos.`
*   **Avatares dos Clientes (`images/avatar_1.png` a `images/avatar_4.png`):**
    > *Prompt Utilizado:* `Close-up face portrait of an athletic trainer [man/woman], intense gaze, in a gym, cinematic studio lighting with neon [green/red] glow, photorealistic, 8k resolution. No text or logos.`

---

### 4.5 Organização e Refatoração do Código (CSS Componentizado)
O código CSS foi totalmente desacoplado da estrutura HTML e refatorado em arquivos individuais organizados por componentes e responsabilidade, utilizando nomenclatura descritiva inspirada no padrão BEM:

```text
/CursoAntigravit
├── /css
│   ├── style.css                 # Reset global, fontes, variáveis de cores e base
│   └── /components
│       ├── button.css            # Estilo dos botões e animações pulsantes
│       ├── cards.css             # Seção de benefícios, sobre e tabela comparativa
│       ├── faq.css               # Acordeão expansível dinâmico
│       ├── footer.css            # Rodapé e cronômetro regressivo de oferta
│       ├── hero.css              # Cabeçalho de navegação e visual principal do Hero
│       └── testimonials.css      # Depoimentos e avaliações de atletas
```

---

### 4.6 Publicação no GitHub Pages
Para visualizar o projeto em funcionamento online, siga os comandos de publicação:

1.  Crie um repositório público no GitHub com o nome `mansao-maromba`.
2.  Inicialize o git localmente na pasta `CursoAntigravit` e realize o upload:
    ```bash
    git init
    git add .
    git commit -m "feat: landing page mansao maromba completa"
    git branch -M main
    git remote add origin https://github.com/SEU-USUARIO/mansao-maromba.git
    git push -u origin main
    ```
3.  Vá em **Settings** > **Pages** no repositório do GitHub.
4.  Selecione a branch `main`, mantenha a pasta `/ (root)` e clique em **Save**.
5.  O site será gerado em: `https://seu-usuario.github.io/mansao-maromba/`

---

## 🏆 Desafio Extra: Prompt Mestre (Single Prompt)

Como parte do desafio de consolidar o planejamento, o design e o código em um único comando de IA estruturado, desenvolvemos o seguinte **Prompt Mestre**. Ele é capaz de guiar um assistente a construir toda a solução descrita de forma imediata:

> ### 📌 Prompt Mestre (Copie e Cole para gerar a Landing Page completa)
>
> "Aja como um Engenheiro Front-End Sênior e Especialista em Conversão (CRO). Crie o código completo para uma Landing Page de alta conversão do energético fictício **Mansão Maromba** com o slogan **'O sabor energético'**.
> 
> A página deve ser voltada para o público fitness de alta performance e ter uma identidade visual baseada em **Cyber-Fitness / E-Sports**.
> 
> ### 🎨 Design System e Estilos
> - **Cores principais:** Fundo preto profundo (`#050505`) e cinza-escuro (`#101010`). Destaques e glows em Verde Neon (`#39FF14`) e Vermelho Intenso (`#FF2D2D`).
> - **Tipografia:** Fontes 'Rajdhani' (títulos) e 'Inter' (texto corrido) do Google Fonts.
> - **Efeitos:** Efeito de vidro (glassmorphism), glows e sombras suaves nas bordas, e microinterações reativas.
> 
> ### 📁 Estrutura de Código Componentizado
> Forneça a solução dividida e organizada no padrão de arquivos a seguir:
> 1. **`index.html`:** Contendo a estrutura semântica HTML5 com tags SEO OpenGraph e referenciando os estilos componentizados.
> 2. **`css/style.css`:** Resets globais, variáveis CSS (Design Tokens) e fontes.
> 3. **`css/components/hero.css`:** Menu de navegação responsivo fixo e seção inicial com título principal em Rajdhani, slogan e lata flutuante.
> 4. **`css/components/button.css`:** CTAs primários de compra (glow verde neon e pulsar) e secundários (borda vermelha neon).
> 5. **`css/components/cards.css`:** Grid de benefícios de 5 itens com efeitos de hover (translate e neon box-shadow), seção sobre o produto e tabela comparativa.
> 6. **`css/components/testimonials.css`:** Grade de depoimentos com avaliação por estrelas e avatares arredondados com borda brilhante.
> 7. **`css/components/faq.css`:** Caixa de FAQ com acordeões que abrem/fecham suavemente.
> 8. **`css/components/footer.css`:** Rodapé com redes sociais e contagem regressiva de oferta.
> 9. **`js/script.js`:** Lógica nativa em Vanilla JS contendo:
>    - Canvas interativo de partículas flutuantes que reagem ao mouse no plano de fundo.
>    - Cronômetro regressivo persistente no `localStorage` (evergreen).
>    - Animação progressiva de números das estatísticas (+95%, +10.000, +500, +1M).
>    - Acordeão do FAQ com cálculo de scroll height para transição de altura.
>
> Forneça o código limpo, documentado em português e utilizando a metodologia BEM."
