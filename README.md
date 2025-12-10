### 💈 The Classic Cut

_Website de Agendamento Online para Barbearia_

Este projeto foi desenvolvido como uma solução digital de baixo custo para pequenos negócios locais, utilizando uma abordagem **Low-Code/No-Code** combinada com **personalização de código** (HTML, CSS, JS) para garantir flexibilidade e adesão aos Padrões Web.

---

### 1. 🚀 Visão Geral e Link da Aplicação

| Tópico                              | Detalhe                                                                                                     |
| :---------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| **Finalidade do Projeto**           | Site institucional e plataforma de agendamento online para a barbearia "The Classic Cut".                   |
| **Problema Resolvido**              | Simplificação do processo de agendamento, reduzindo ligações e otimizando a gestão de horários do barbeiro. |
| **Ferramenta Principal (Low-Code)** | **Lovable.dev** (Plataforma de IA Generativa para desenvolvimento Web).                                     |
| **Link Público**                    | https://theclassiccutt.lovable.app                                                                          |

---

### 2. 🛠️ Tecnologias e Integrações

Este projeto demonstra a aplicação de padrões web fundamentais dentro de um ambiente Low-Code.

#### A. Padrões Web Integrados

| Padrão         | Aplicação na Ferramenta                                                                                                                                               |
| :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HTML**       | Estrutura base gerada pelo Lovable. Uso de `HTML Embed` para inserir o widget de WhatsApp.                                                                            |
| **CSS**        | Estilização principal gerada pelo Lovable. **CSS Customizado Injetado** para alterar cores, fontes e adicionar efeitos `hover` na seção de [**Ex: Serviços/Botões**]. |
| **JavaScript** | Lógica de interface e interatividade básica gerada pela IA.                                                                                                           |

#### B. Integração Dinâmica

- **Base de Dados Visual:** Supabase.
- **Finalidade da Integração:** Gerenciar e armazenar todos os agendamentos realizados através do formulário, garantindo a dinamicidade da aplicação.

---

### 3. ⚙️ Funcionalidades e Instruções de Uso

O site oferece as seguintes funcionalidades principais:

| Funcionalidade                     | Instrução de Uso                                                                                                                                                                                  |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Navegação Institucional**        | O cliente pode acessar as seções `Home`, `Quem Somos`,  `Serviços` e `Agendar Agora`.                                                                                                                              |
  | **Agendamento Online**             | 1. O cliente acessa a seção `Agendar Agora`. 2. Preenche os campos obrigatórios (Nome, Email, Serviço, Data/Hora). 3. Clica em `Agendar Agora`. 4. O agendamento é registrado no `[Supabase]`. |
| **Contato Direto (Personalizado)** | O botão flutuante de **WhatsApp** permite contato imediato para dúvidas ou remarcações.                                                                                                           |
| **Responsividade**                 | A aplicação é totalmente acessível em dispositivos móveis (celular e tablet).                                                                                                                     |

---

### 4. 🎨 Customização Manual (Low-Code/Código)

Para demonstrar domínio técnico, refino visual e capacidade de ir além do básico oferecido pela plataforma Low-Code, foram aplicadas as seguintes customizações manuais:

| Elemento Customizado                               | Tipo de Código                                                    | Valor Agregado                                                                                                                                                                                                                                                     |
| :------------------------------------------------- | :---------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Widget de Contato Flutuante (WhatsApp)**         | **HTML/CSS Embed** (`<a>` e `<style>` no `index.html`)            | Adiciona um **canal de comunicação instantâneo**, garantindo suporte rápido ao cliente. O uso de `position: fixed` e SVG customizado demonstra habilidade em **estender funcionalidades além do que o editor visual oferece**.                                     |
| **Card “14+ Anos de Experiência”** (Quem Somos)    | **React + Tailwind CSS Customizado**                              | O card foi totalmente remodelado com **melhor uso do espaço**, efeitos de **glow premium**, sombras personalizadas, gradientes dourados e tipografia reforçada. Demonstra domínio em **UI moderna**, **animações com Framer Motion** e **design refinado**.         |
| **Layout da Seção “Quem Somos”**                   | **CSS/React estruturado manualmente**                             | A seção recebeu ajustes de espaçamento, contraste, fundo com camadas, sombras e profundidade. Isso elevou visualmente a página, mostrando capacidade de **refinar componentes**, garantir consistência e entregar uma **experiência premium**.                      |

---

### 5. ♿ Acessibilidade e Ética Digital

- **Acessibilidade:** Uso de títulos semânticos (`<h1>`, `<h2>`) e texto alternativo (`alt` tags) nas imagens. Garantia de **contraste de cores** suficiente.
- **Ética Digital:** Coleta de dados limitada ao estritamente necessário para o agendamento (Nome, Contato e Serviço), respeitando a privacidade do usuário.
