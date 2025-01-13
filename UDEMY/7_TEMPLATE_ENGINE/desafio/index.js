// Settings to use express and template engine: handlebars
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static('public'))

// Learning to use this tools

app.get("/produtos", (req, res) => {
    const produtos = [
      { title: 'Dunk cocoa', category: 'Tenis', body: 'A cor dele é marrom', comments: 4, id: 1 },
      { title: 'Dunk preto', category: 'Tenis', body: 'A cor dele é preto', comments: 4, id: 2 },
      { title: 'Blusa nike', category: 'Blusa', body: 'A cor dela é cinza', comments: 4, id: 3 }
    ];
  
    res.render("produtos", { produtos });
  });


  app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;
  
    const produtos = [
      { title: 'Dunk cocoa', category: 'Tenis', body: 'A cor dele é marrom', comments: 4, id: 1 },
      { title: 'Dunk preto', category: 'Tenis', body: 'A cor dele é preto', comments: 4, id: 2 },
      { title: 'Blusa nike', category: 'Blusa', body: 'A cor dela é cinza', comments: 4, id: 3 }
    ];
  
    const produto = produtos.find(p => p.id == id);
    if (produto) {
      res.render("produtos-detalhes", { produto });
    } else {
      res.status(404).send("Produto não encontrado");
    }
  });

app.get("/", (req, res) => {
  const user = {
    name: "Gustavo",
    surname: "Banares",
    age: "20",
  };

  const auth = true;

  res.render("home", { user: user, auth});
});

app.listen(5000, () => {
  console.log("App funcionando!");
});
