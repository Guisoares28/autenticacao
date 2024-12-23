# 🛡️ API de Autenticação com JWT

Este projeto é uma **API de autenticação** simples utilizando **Node.js**, **Express** e **JSON Web Tokens (JWT)**. Ele demonstra como proteger rotas usando tokens gerados durante o login.

# 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web rápido e minimalista.
- **dotenv-safe**: Gerenciamento de variáveis de ambiente.
- **jsonwebtoken**: Biblioteca para geração e verificação de JWT.

# 🛠️ Funcionalidades

- **Login**: O usuário envia suas credenciais e recebe um token JWT válido por 5 minutos.
- **Proteção de Rotas**: Utiliza middleware para verificar a validade do token antes de acessar rotas protegidas.
- **Resposta em JSON**: Todas as respostas são estruturadas em JSON.

# 📂 Estrutura do Projeto

```bash
├── .env.example     # Exemplo de configuração das variáveis de ambiente
├── app.js           # Código principal da API
├── package.json     # Dependências do projeto
```

# 🔧 Configuração do Ambiente

## 1. Clone este repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

## 2. Instale as dependências

```bash
npm install
```

## 3. Configure as variáveis de ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```env
SECRET=sua_chave_secreta_aqui
```

## 4. Inicie o servidor

```bash
node app.js
```

A aplicação estará rodando em: **http://localhost:3000**

# 🧮 Testando a API

## **1. Login**

**Rota:** `POST /login`  
**Descrição:** Gera um token para o usuário.  
**Requisição:**

```json
{
  "user": "Guilherme",
  "password": "123"
}
```

**Resposta de sucesso:**

```json
{
  "token": "seu_token_aqui"
}
```

## **2. Rota Protegida**

**Rota:** `GET /foo-bar`  
**Descrição:** Requer um token JWT válido no cabeçalho `Authorization`.  
**Cabeçalho:**

```
Authorization: Bearer <seu_token>
```

**Resposta de sucesso:**

```json
{
  "message": "Usuario Autenticado"
}
```

# 🛡️ Middleware de Verificação de Token

A função `verifyToken` é responsável por:

- Validar se o token foi enviado no cabeçalho.
- Verificar se o token é válido usando a chave secreta.
- Decodificar o token e anexar o usuário à requisição.

# 🌟 Demonstração de Fluxo

1. Faça login usando `POST /login` com as credenciais corretas.
2. Copie o token gerado na resposta.
3. Use o token no cabeçalho `Authorization` para acessar `GET /foo-bar`.

# 📜 Licença

Este projeto está sob a licença **MIT**. Sinta-se à vontade para usar e modificar. 😊

---

**Desenvolvido com ❤️ por Guilherme Soares Campos**
