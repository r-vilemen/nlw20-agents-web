# NLW20 Agents - Web Application

## 🚀 Tecnologias Utilizadas

### Core

- **React 19.1.0** - Biblioteca principal para construção da interface
- **TypeScript 5.8.3** - Tipagem estática para JavaScript
- **Vite 7.0.4** - Build tool e dev server

### Styling & UI

- **Tailwind CSS 4.1.11** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Biblioteca de ícones
- **Class Variance Authority** - Sistema de variantes para componentes
- **Tailwind Merge** - Utilitário para mesclar classes do Tailwind

### State Management & Data Fetching

- **TanStack React Query 5.83.0** - Gerenciamento de estado do servidor e cache

### Routing

- **React Router DOM 7.6.3** - Roteamento da aplicação

### Development Tools

- **Biome 2.0.6** - Linter e formatter (substitui ESLint + Prettier)
- **Ultracite** - Configuração de linting otimizada

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/           # Componentes UI reutilizáveis (shadcn/ui)
├── lib/
│   └── utils.ts      # Utilitários (cn function)
├── pages/            # Páginas da aplicação
│   ├── create-room.tsx
│   └── room.tsx
├── app.tsx           # Componente principal
├── main.tsx          # Entry point
└── index.css         # Estilos globais
```

## 🎨 Padrões de Projeto

### Componentes UI (shadcn/ui)

- Utiliza o padrão **shadcn/ui** para componentes reutilizáveis
- Componentes baseados em **Radix UI** para acessibilidade
- Sistema de variantes com **Class Variance Authority**
- Configuração em `components.json`

### Roteamento

- **React Router DOM** para navegação
- Rotas definidas no componente `App`
- Parâmetros dinâmicos (`/room/:roomId`)

### Data Fetching

- **TanStack React Query** para gerenciamento de estado do servidor
- Cache automático e revalidação
- Loading states integrados

### Styling

- **Tailwind CSS** com configuração moderna (v4)
- Sistema de design tokens
- CSS Variables para temas
- Utilitário `cn()` para composição de classes

## 🛠️ Setup e Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone <repository-url>
cd web
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
# Crie um arquivo .env se necessário
# O projeto atualmente faz requisições para http://localhost:3333
```

4. **Execute o projeto**

```bash
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Preview do build de produção
```

## 🔧 Configurações

### Vite

- Plugin React configurado
- Alias `@` para `./src`
- Tailwind CSS integrado

### TypeScript

- Configuração estrita habilitada
- Path mapping configurado
- Tipos para React 19

### Biome (Linting)

- Configuração baseada em **Ultracite**
- Formatação automática
- Regras de linting otimizadas

### Tailwind CSS

- Versão 4.x (mais recente)
- CSS Variables habilitadas
- Base color: zinc
- Configuração via `components.json`

## 📱 Funcionalidades

### Páginas

- **Create Room**: Lista salas disponíveis e permite navegação
- **Room**: Página de detalhes da sala (em desenvolvimento)

### Integração com API

- Requisições para `http://localhost:3333/rooms`
- Gerenciamento de estado com React Query
- Loading states implementados

## 🎯 Próximos Passos

- Implementar funcionalidades completas da página Room
- Adicionar autenticação
- Implementar WebSocket para comunicação em tempo real
- Adicionar testes unitários
- Configurar CI/CD

## 📚 Recursos Adicionais

- [Documentação do React](https://react.dev/)
- [Documentação do TanStack Query](https://tanstack.com/query)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [NLW20 - Agents](https://rocketseat.com.br/nlw)

---

\*Este projeto foi Desenvolvido e baseado no NLW20 - Agents da Rocketseat
