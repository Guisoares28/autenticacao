const express = require("express");
const app = express();
require("dotenv-safe").config(); //Permite a API ter acesso as variaveis de ambiente
const jwt = require("jsonwebtoken");

app.use(express.json()); //Middleware que trata todas as respostas como um Json

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Token não informado" });

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Falha na autenticação do token" });
    req.user = decoded.user;
    next();
  });
}

app.post("/login", (req, res, next) => {
  if (req.body.user === "Guilherme" && req.body.password === "123") {
    //Verifica se o usuario e o password foi enviado no body da requisição
    const user = req.body.user;
    const token = jwt.sign({ user }, process.env.SECRET, {
      expiresIn: 300, // expira em 5 minutos
    });
    console.log(token);
    return res.json({ token: token }); //Retorna o Token
  }
  res.status(500).json({ message: "Login invalido" });
});

app.get("/foo-bar", verifyToken, (req, res) => {
  //
  res.status(200).json({ message: "Usuario Autenticado" });
});

app.listen(3000, () => {
  console.log(`Escutando na porta 3000`);
});

//Guilherme Soares Campos
