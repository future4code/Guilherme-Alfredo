// EXERCÍCIO DE INTERPRETAÇÃO

//1. 
//a. false, 
//b. false, 
//c. true, 
//e. boolean

//2. 
//a. undefined 
//b. null 
//c. 11
//d. 3 
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f. 9

// EXERCÍCIO DE ESCRITA DE CÓDIGO

// Exercício 1 

let idade = prompt ("Qual a sua idade?")
let idadeAmigo = prompt ("Qual a idade do seu melhor amigo ou amiga?")

console.log("Sua idade é maior do qua a do seu melhor amigo? ", idade > idadeAmigo)
console.log("Diferença de idade: ", idade - idadeAmigo)

// Exercício 2 

let numeroPar = prompt ("Insira um número par")
console.log(typeof Number (numeroPar))
console.log( "Resto da divisão do número digitado por 2: ", numeroPar %= 2)

// o resto sempre da "0", porque quando dividimos um número par por "2" ele não terá resto. 
// caso o  usuário escreva um número ímpar, o programa imprime na tela o valor do "resto da divisão"
