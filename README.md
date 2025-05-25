
## 📦 Instalação Inicial

```bash
npm init -y                      # Cria o package.json
mkdir src                        # Cria a pasta de código-fonte
echo 'console.log("Hello TS")' > src/index.ts
````

### 🧱 Instale as dependências de desenvolvimento

```bash
npm install -D typescript tsx tsup
```

### 🎯 Inicialize o TypeScript

```bash
npx tsc --init
```

---

## ⚙️ Exemplo básico de `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

## 🛠️ Scripts recomendados (`package.json`)

```json
"scripts": {
  "dist": "tsup src",                     
  "start-dev": "tsx src/index.ts",        
  "start-watch": "tsx watch src/index.ts",
  "start-dist": "npm run dist && node dist/index.js"
}
```

---

## 🧪 Boas práticas e dicas

* ✅ Adicione `node_modules/` no `.gitignore`
* ✅ Utilize a extensão `.ts` em vez de `.js`
* ✅ Configure `outDir` no `tsconfig.json` para evitar arquivos duplicados
* ✅ Prefira `tsup` para transpile mais limpo e rápido
* ✅ Use `tsx` para rodar TypeScript sem transpilar em dev

---

## 🚀 Execução rápida

```bash
npm run start-dev     # Roda direto com TSX (modo dev)
npm run start-watch   # Modo watch
npm run dist          # Transpila usando TSUP
npm run start-dist    # Roda JS já transpilado
```

---

## 📚 Recursos úteis

* 🌐 [Documentação TypeScript](https://www.typescriptlang.org/pt/docs/)
* ⚙️ [Referência do tsconfig](https://www.typescriptlang.org/pt/tsconfig)
* 📈 [Tendência de pacotes NPM](https://www.npmtrends.com/)

---

## ✅ Setup automático (alternativo)

```bash
npm init -y typescript -D
```

> ⚠️ Pode solicitar permissão para execução de script. Apenas confirme com `yes`.

---

