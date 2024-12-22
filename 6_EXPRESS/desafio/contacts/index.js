const express = require('express')
const router = express.Router()

const path = require("path");

const basePath = path.join(__dirname, "../templates");

router.get("/contato", (req, res) => {
  res.sendFile(`${basePath}/contato.html`);
});

router.post("/save", (req, res) => {
  console.log(req.body);

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuario e ${name} e ele tem ${age} anos`)

  res.sendFile(`${basePath}/about.html`)
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  // leitura da tabela users, resgatar um usuario do banco
  console.log(`Estamos buscando pelo usuario:${id}`);

  res.sendFile(`${basePath}/contato.html`);
});

router.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

module.exports = router