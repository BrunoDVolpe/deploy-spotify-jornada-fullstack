# Projeto Spotify Clone

### Aplicação Fullstack desenvolvida durante a Semana Fullstack da Hashtag Treinamentos

Este projeto foi desenvolvido durante a **Semana Fullstack da Hashtag Treinamentos** e é inspirado na plataforma Spotify. O objetivo foi criar uma aplicação fullstack utilizando tecnologias modernas no frontend e backend.

> ⚙️ Foram realizadas algumas alterações para viabilizar o **deploy**, utilizando **variáveis de ambiente** em vez de informações "chumbadas" (hardcoded), como demonstrado no vídeo complementar.

---

## 🚀 Como Rodar o Projeto

1. **Configure os arquivos `.env`** tanto no **frontend** quanto no **backend**, conforme os modelos fornecidos.
2. Certifique-se de estar na **raiz do projeto**.
3. Execute os comandos abaixo no terminal:

```bash
npm run build
npm run start
```

Por padrão, a aplicação será executada em: [http://localhost:3001](http://localhost:3001)

---

## 💾 Configuração do Banco de Dados (MongoDB Atlas)

Foi utilizada uma conta gratuita no **MongoDB Atlas**, com um **cluster free**. Os dados foram incluídos utilizando o método `insertMany`.

### Passos para configurar o banco:

1. **Criar duas collections**:

   - Database name: `spotifyAula`
   - Collection name: `artists`
   - _Additional preferences_ pode ser deixado em branco
   - Depois repita o processo criando a collection `songs`

2. **Configurar IP de acesso**:

   - Acesse a aba `Network Access` no MongoDB Atlas.
   - Clique em `+ ADD IP ADDRESS`.
   - Use o IP `0.0.0.0/0` caso ainda não saiba seu IP (⚠️ **não recomendado** em produção – altere assim que possível).
   - Confirme a alteração.

3. **Conectar o banco à aplicação**:
   - No painel do MongoDB Atlas:
     - Vá em `Connect` > `Drivers`
     - Escolha:
       - **Driver:** Node.js
       - **Version:** Mais recente
     - Copie a **Connection String** gerada
     - Insira essa string no seu arquivo `.env`

---

## 📦 Inserção de Dados com `insertMany`

No arquivo `insertMany`, há instruções específicas para importar os dados:

1. **No frontend** (`frontend/src/assets/database`):
   - Descomente os dados nos arquivos `songs.js` e `artists.js`
   - Comente os **imports automáticos** (mantenha apenas os `export`)
2. **No arquivo `insertMany.js` (backend)**:
   - Descomente as linhas `responseSongs` e `responseArtists`
3. Execute o script para inserir os dados
4. Após a execução:
   - **Comente novamente** as linhas descomentadas para evitar duplicidade
   - Restaure os comentários nos arquivos `songs.js` e `artists.js`

---

## ☁️ Deploy com Render

O deploy pode ser feito através do [Render](https://render.com/):

1. Crie uma conta no Render.
2. Suba o projeto para o seu GitHub.
3. Conecte o repositório ao Render.
4. Configure as variáveis de ambiente necessárias (de acordo com os arquivos `.env`).

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- React
- Vite
- HTML5
- CSS3
- JavaScript
- Git & GitHub

### Backend

- Node.js
- Express.js
- MongoDB (Atlas)

---

## 📌 Observações Finais

- Este projeto é uma adaptação didática baseada na estrutura do Spotify.
- O uso de variáveis de ambiente melhora a segurança e a flexibilidade do sistema.
- A configuração adequada do banco de dados é essencial para que a aplicação funcione corretamente.

---

👨‍💻 **Desenvolvido com dedicação para aprendizado e treinamento.**
