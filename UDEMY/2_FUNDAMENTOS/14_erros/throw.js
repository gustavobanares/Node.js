const x = '10'

// checar se x e um numero
if(!Number.isInteger(x)){
    throw new Error('O valor de x nao e um numero inteiro!')
}

console.log('Continuando o codigo...')