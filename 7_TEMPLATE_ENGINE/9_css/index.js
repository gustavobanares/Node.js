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

app.get("/dashboard", (req, res) => {
  const items = ["Item a", "Item b", "Item c"];

  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "Javascript",
    body: "Este artigo vai te ajudar a aprender Node.js...",
    comments: 4,
  };

  res.render("blogpost", { post });
});

app.get('/blog', (req, res) =>{

  const posts = [
    {
      title: 'Aprender Node.js',
      category: 'Javascript',
      body: 'teste',
      comments: 4
    },
    {
      title: 'Aprender PHP',
      category: 'PHP',
      body: 'teste',
      comments: 4
    },
    {
      title: 'Aprender Python',
      category: 'Python',
      body: 'teste',
      comments: 4
    },
  ]

  res.render('blog', {posts})
})

app.get("/", (req, res) => {
  const user = {
    name: "Gustavo",
    surname: "Banares",
    age: "20",
  };

  const palavra = "Teste";

  const auth = false;

  const approved = true;

  res.render("home", { user: user, palavra, auth, approved });
});

app.listen(3000, () => {
  console.log("App funcionando!");
});
