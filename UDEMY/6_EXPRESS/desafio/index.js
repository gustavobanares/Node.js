// setup
const express = require("express");
const app = express();
const port = 5000;

// arquivos estaticos
app.use(express.static('public'))

const path = require("path");

const contacts = require('./contacts')

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const basePath = path.join(__dirname, "templates");

app.use('/contacts', contacts)

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log("App rodando na porta 5000");
});
