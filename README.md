# Settings Vue - Aplicação de Configurações

Aplicação de configurações moderna desenvolvida com Vue 3, inspirada em aplicativos como WhatsApp e Instagram. Inclui menu de navegação lateral/vertical com múltiplas opções e submenus que renderizam conteúdos específicos.

## 🚀 Stack Tecnológica

### Core

- **Vue 3** - Framework JavaScript progressivo
- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **Vue Router** - Gerenciamento de rotas

### UI & Styling

- **PrimeVue** - Biblioteca de componentes UI
- **Tailwind CSS** - Framework CSS utilitário
- **PrimeIcons** - Ícones
- **Tema Claro/Escuro** - Implementação completa com persistência

### Desenvolvimento & Qualidade

- **Storybook** - Documentação de componentes
- **TanStack Query (Vue Query)** - Gerenciamento de estado e requisições
- **Pinia** - Gerenciamento de estado global

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd settings-vue
```

2. Instale as dependências:

```bash
npm install
```

## 🎯 Executando o Projeto

### Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build de Produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`

### Preview da Build

```bash
npm run preview
```

## 📚 Storybook

Para visualizar e documentar os componentes:

```bash
npm run storybook
```

O Storybook estará disponível em `http://localhost:6006`

### Build do Storybook

```bash
npm run build-storybook
```

## 📁 Estrutura do Projeto

```
settings-vue/
├── .storybook/          # Configurações do Storybook
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── settings/    # Componentes de configurações específicas
│   │   └── ...
│   ├── composables/    # Composables (hooks) Vue
│   ├── layouts/         # Layouts da aplicação
│   ├── router/          # Configuração de rotas
│   ├── stores/          # Stores do Pinia
│   ├── views/           # Views/Páginas
│   ├── App.vue          # Componente raiz
│   ├── main.ts          # Entry point
│   └── style.css        # Estilos globais
├── index.html           # HTML principal
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração TypeScript
├── vite.config.ts       # Configuração Vite
└── tailwind.config.js   # Configuração Tailwind
```

## 🎨 Funcionalidades

### 1. Sistema de Rotas

- `/settings` - Tela principal com menu de configurações
- `/settings/:submenu` - Subpáginas de configurações
  - `/settings/conta` - Informações da conta
  - `/settings/privacidade` - Privacidade e segurança
  - `/settings/notificacoes` - Notificações
  - `/settings/aparencia` - Aparência e tema
  - `/settings/idioma` - Idioma e região
  - `/settings/armazenamento` - Armazenamento e dados

### 2. Menu Lateral Responsivo

- **Desktop**: Menu sempre visível na lateral
- **Mobile**: Menu exibido apenas na tela principal
- Navegação entre subpáginas com botão de voltar no mobile

### 3. Tema Claro/Escuro

- Toggle de tema funcional
- Persistência da preferência no localStorage
- Suporte aos temas Aura Light/Dark do PrimeVue

### 4. Modal de Logout

- Botão "Sair" no menu
- Modal de confirmação usando DynamicDialog do PrimeVue
- Mensagem: "Tem certeza que deseja sair?"
- Botões "Cancelar" e "Confirmar"

### 5. TanStack Query

- Requisição simulada para buscar dados do perfil do usuário
- Composable `useUserProfile` para gerenciar dados
- Estados de loading e error tratados

### 6. Storybook

- Documentação de 3+ componentes:
  - `SettingsMenu`
  - `ContaSettings`
  - `PrivacidadeSettings`
- Diferentes estados e variações documentados

## 🔧 Decisões Técnicas

### Arquitetura

- **Composables**: Uso extensivo de composables para lógica reutilizável
- **Pinia**: Gerenciamento de estado global (menu items)
- **TypeScript**: Tipagem completa em todos os componentes
- **Componentização**: Estrutura modular e componentes reutilizáveis

### UI/UX

- **PrimeVue**: Escolhido pela qualidade dos componentes e suporte a temas
- **Tailwind CSS**: Utilizado para estilização complementar
- **Responsividade**: Design mobile-first com breakpoint em 768px
- **Transições**: Animações suaves entre páginas

### Performance

- **Code Splitting**: Rotas lazy-loaded quando possível
- **Query Caching**: TanStack Query gerencia cache automaticamente
- **Otimizações Vite**: Build otimizado com tree-shaking

## 📝 Componentes Documentados no Storybook

1. **SettingsMenu**: Menu de navegação lateral

   - Estado padrão
   - Item ativo

2. **ContaSettings**: Informações da conta do usuário

   - Com dados do perfil
   - Sem dados (estado vazio)
   - Com bio longa

3. **PrivacidadeSettings**: Configurações de privacidade
   - Estado padrão
   - Todas opções habilitadas
   - Todas opções desabilitadas

## 🐛 Tratamento de Erros

- Erros de requisição tratados com TanStack Query
- Mensagens de erro exibidas ao usuário
- Loading states implementados
- Fallbacks para estados vazios

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

## 👤 Autor

Desenvolvido como projeto de demonstração das capacidades do Vue 3 com TypeScript e ecossistema moderno.
