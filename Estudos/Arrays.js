let numeros = [1, 2, 3, 4, 5, 6, 7, 89, 32, 14, 55, 26, 62]
let letras = ['a', 'a', 'a', 'v', 's', 'd', 'd', 'e', 'g', 'h', 'z', 'y', 'b', 'o']


// Retornando o dobro com For In
 let dobroForIn = []
for (i in numeros) {
    let n = i * 2;
    dobroForIn.push(n)

}
console.log(`Dobro com For In: ${dobroForIn}`)

// Retornando o dobro com Map

novoArray = [...numeros.map(a => a * 2)]
console.log(`Dobro com Map: ${novoArray}`)

// Retornando o dobro com FOR
let dobroFor = []
for (let i = 0; i < numeros.length; i++) {
   
    dobroFor.push(numeros[i] * 2)
}
console.log(`Dobro com FOR : ${dobroFor}`)

// Ordenando Elementos
    // **Números
/* Ordenando de forma crescente. 
1)Os parametros consistem em o elemento que vai ser comparado com todos os outros(a) e o elemento que esta sendo comparado com a atualmente (b)
2)Para Ordenar de forma descrescente, basta fazer b-a*/
console.log(`Números sem Ordenação Sort(): ${numeros}`)
console.log(`Números com Ordenação Sort(): ${numeros.sort((a, b) => a - b)}`)
// Também funciona com ordem alfabetica
console.log(`Sem Ordenação : ${letras}`)
console.log(`Com Ordenação : ${letras.sort()}`)

// Removendo elementos duplicados
letras2 = letras.filter((a, b) => letras.indexOf(a) == b).sort()
console.log(`Removendo duplicatas com Filter : ${letras2}`)

// Copiando outro array

let copiaLetras = [...letras2]
console.log(`Copiando com spread operator(...) ${copiaLetras}`)