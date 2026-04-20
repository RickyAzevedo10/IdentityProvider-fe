# Zirku App

Aplicação React com autenticação OAuth2/OpenID Connect integrada com o servidor Zirku/OpenIddict.

## Características

- Login/logout com OpenID Connect
- Silent refresh de tokens
- Dashboard protegida
- Gestão de estado de autenticação com localStorage

## Tecnologias

- React 18
- React Router 6
- oidc-client-ts

## Pré-requisitos

- Node.js 18+
- Servidor Zirku a correr em https://localhost:44319

## Instalação

```bash
npm install
```

## Configuração

O ficheiro `src/services/authService.js` contém as configurações de autenticação. Ajuste conforme necessário:

- `authority`: URL do servidor de autenticação
- `client_id`: ID da aplicação cliente
- `redirect_uri`: URL de callback

## Executar

```bash
npm start
```

A aplicação estará disponível em http://localhost:3000

## Estrutura do Projeto

```
src/
├── components/
│   ├── Home.js          # Página inicial
│   ├── Callback.js      # Handler de callback
│   ├── SilentCallback.js # Silent refresh
│   └── Dashboard.js     # Dashboard protegida
├── services/
│   └── authService.js  # Configuração OIDC
├── App.js               # Componente principal
├── App.css              # Estilos
└── index.js             # Entry point
```

## Licença

MIT