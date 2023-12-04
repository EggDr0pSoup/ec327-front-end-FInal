# ECS 327 Front-end

## Project setup

- Install [Node.js](https://nodejs.org/en/) 20.10.0 (Latest LTS)

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies for production

```bash
npm run build
```

### Custom theme

See `src/styles/element/index.scss`.


### Import models from backend

```bash
npx openapi-typescript http://localhost:8000/openapi.json --output ./src/api/models.ts
```

### Environment variables

- In `.env.development` and `.env.production` files

```bash
VITE_BASE_API = 'http://127.0.0.1:8000/'
```

- Change `VITE_BASE_API` to your backend API address