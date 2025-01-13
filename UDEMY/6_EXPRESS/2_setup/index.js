const express = require("express");
const app = express();
const port = 3000; // variavel ambiente

app.get("/", (req, res) => {
  res.send("Ola, Mundo!");
});

app.listen(port, () => {
  console.log(`App esta rodando na porta ${port}`);
});
