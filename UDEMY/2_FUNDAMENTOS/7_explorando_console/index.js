// mais de um valor
const x = 10
const y = 'Gustavo'
const z = [2, 8]

console.log(x, y, z)

// contagem de impressoes
console.count(`O valor de x e: ${x}, contagem`)
console.count(`O valor de x e: ${x}, contagem`)
console.count(`O valor de x e: ${x}, contagem`)
console.count(`O valor de x e: ${x}, contagem`)

// variavel entre string
console.log('O nome e %s, ele e programador', y)

// limpar o console
setTimeout(() =>{
    console.clear()
}, 2000)