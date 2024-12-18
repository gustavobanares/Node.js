// imports
import inquirer from "inquirer";
import chalk from "chalk";

inquirer
  .prompt([
    {
      name: "n1",
      message: "Qual seu nome?",
    },
    {
      name: "a1",
      message: "Qual sua idade?",
    },
  ])
  .then((answers) => {
    const name = answers.n1;
    const age = answers.a1;

    console.log(
      chalk.bgYellow.black(`O usuario se chama ${name} e tem ${age} anos.`)
    );
  })
  .catch((err) => console.log(err));
