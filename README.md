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
| **Navegação Institucional**        | O cliente pode acessar as seções `Home`, `Serviços` e `Agendar Agora`.                                                                                                                              |
  | **Agendamento Online**             | 1. O cliente acessa a seção `Agendar Agora`. 2. Preenche os campos obrigatórios (Nome, Email, Serviço, Data/Hora). 3. Clica em `Agendar Agora`. 4. O agendamento é registrado no `[Supabase]`. |
| **Contato Direto (Personalizado)** | O botão flutuante de **WhatsApp** permite contato imediato para dúvidas ou remarcações.                                                                                                           |
| **Responsividade**                 | A aplicação é totalmente acessível em dispositivos móveis (celular e tablet).                                                                                                                     |

---

### 4. 🎨 Customização Manual (Low-Code/Código)

Para demonstrar o domínio de personalização e agregar valor, os seguintes elementos foram customizados manualmente com código:

| Elemento Customizado                       | Tipo de Código                                                    | Valor Agregado                                                                                                                                                                                                                                                   |
| :----------------------------------------- | :---------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Botão "Confirmar Agendamento"**          | **CSS Customizado** (`.btn-classic-cut` injetado no `index.html`) | Alinhamento total com a identidade visual premium da marca (tons bordô e escuros). O uso de **CSS puro** com `!important` e o efeito `transform: translateY` no `hover` demonstra **domínio da cascata e melhoria de UX** (feedback visual).                     |
| **Widget de Contato Flutuante (WhatsApp)** | **HTML/CSS Embed** (`<a>` e `<style>` no `index.html`)            | Adiciona um **canal de comunicação instantâneo** e vital, garantindo que o cliente possa tirar dúvidas imediatamente. O uso de `position: fixed` no **CSS** e a injeção do **HTML SVG** provam a capacidade de estender a funcionalidade da ferramenta Low-Code. |

---

### 5. ♿ Acessibilidade e Ética Digital

- **Acessibilidade:** Uso de títulos semânticos (`<h1>`, `<h2>`) e texto alternativo (`alt` tags) nas imagens. Garantia de **contraste de cores** suficiente.
- **Ética Digital:** Coleta de dados limitada ao estritamente necessário para o agendamento (Nome, Contato e Serviço), respeitando a privacidade do usuário.
