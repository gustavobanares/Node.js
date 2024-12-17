const chalk = require('chalk')

const nota = 7

if(nota >=7){
    console.log(chalk.green.bold('Parabens voce esta aprovado!'))
} else{
    console.log(chalk.bgRed.black('Voce precisa fazer a prova de recuperacao'))
}

