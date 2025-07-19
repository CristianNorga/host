### 🧪 ¿Cómo usar esta Action en un workflow?
```yaml
jobs:
  tag:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Usar acción de tag
        uses: ./.github/actions/tag-commit
        with:
          tag-name: 'ci/context/pull_request'
```

### 🚀 Bonus: también puedes publicar esta action
Si la pones en un repo independiente con action.yml en la raíz,

La puedes usar así:

```yaml
uses: cristiannorga/tag-commit-action@v1
```

### 🛡 Alternativa: usar @vercel/ncc para empaquetar todo
Puedes usar ncc para empaquetar toda tu acción en un solo archivo JS (recomendado si quieres evitar subir node_modules).

```bash
npx @vercel/ncc build index.js -o ./compiled -m
```
Esto crea un solo `compiled/index.js` que ya incluye todas las dependencias.

### Luego tu action.yml apunta a:

```yaml
Copiar
Editar
runs:
  using: 'node20'
  main: 'compiled/index.js'
```
### 📁 Estructura final:

```pgsql
my-action/
├── action.yml
├── dist/index.js
├── package.json
└── README.md
```