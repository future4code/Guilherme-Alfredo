//Exercícios de interpretação de código

//Exercício 1 
//O código vai ler a operação em forma de loop enquanto "i" for menor do que 5, ou seja, i=1, i=2, i=3, i=4. 
//Cada vez que ele lê a variável "i", ao final ele soma o valor dele e joga na variável "valor". (1+2+3+4)
//No final, ele imprime este valor na tela (10). 

//Exercício 2
//a) O código vai percorrer todos os elementos do array e vai imprimir na tela todos os números encontrados que são maiores de 18 (19, 21, 23, 25, 27, 30)
//b) Com o for...of.. não conseguimos acessar o índice dos elementos.  


//Exercícios de escrita de código

//Exercício 3
// Letra a 
const arrayOriginal = [16, 13, 26, 60, 86, 130, 21, 77, 61, 146, 22]
let numero = 0
console.log("Números do array")
for (let numero of arrayOriginal) {
    console.log(numero)
}

//Letra b 
console.log("Números divididos por 10")

let divisao = 10
for (let numero of arrayOriginal) {
    numero = numero / divisao
    console.log(numero)
}

//Letra c
console.log("Array com os numeros pares")

let novoArray = []

for (let numero of arrayOriginal) {

    if (numero % 2 === 0) {

        novoArray.push(numero)


    }
}

console.log(novoArray)

//Letra d 

for (let i = 0; i < arrayOriginal.length; i++) {

    let numero = arrayOriginal[i]
    console.log("O elemento do Index ", i, " é ", numero)
}

// Letra e

let maior = 0
let menor = arrayOriginal[0]

for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] > maior) {

        maior = arrayOriginal[i]


    }

    if (arrayOriginal[i] < menor) {

        menor = arrayOriginal[i]
    }
}

console.log("O maior numero é ", maior, " e o menor é", menor)


//DESAFIOS 

// 1) 

// let digiteUmNumero = Number(prompt("Digite um número aleatório"))
// console.log("Vamos jogar!")

// let tentativas = []
// let chute

// while (digiteUmNumero !== chute) {
//     chute = Number(prompt("Qual foi o número escolhido?"))
//     console.log("O número chutado foi: ", chute)
//     if (digiteUmNumero > chute) {
//         console.log("Errou. O número escolhido é maior");
//     }
//     else if (digiteUmNumero < chute) {
//         console.log("Errou. O número escolhido é menor");
//     }
//     tentativas.push(chute)
// }
// if ((digiteUmNumero = chute)) {
//     console.log("Acertou!");
//     console.log("O número de tentativas foi: ", tentativas.length);
// }

//2

let numeroAleatorio = Math.ceil(Math.random()*100);
console.log("Vamos jogar!")

let tentativas = []
let chute

while (numeroAleatorio !== chute) {
    chute = Number(prompt("Qual foi o número escolhido?"))
    console.log("O número chutado foi: ", chute)
    if (numeroAleatorio > chute) {
        console.log("Errou. O número escolhido é maior");
    }
    else if (numeroAleatorio < chute) {
        console.log("Errou. O número escolhido é menor");
    }
    tentativas.push(chute)
}
if ((numeroAleatorio = chute)) {
    console.log("Acertou!");
    console.log("O número de tentativas foi: ", tentativas.length);
}

