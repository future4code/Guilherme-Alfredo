//Exercícios de interpretação de código

//Exercício 1 
//O código vai ler a operação em forma de loop enquanto "i" for menor do que 5, ou seja, i=1, i=2, i=3, i=4. 
//Cada vez que ele lê a variável "i", ao final ele soma o valor dele e joga na variável "valor". (1+2+3+4)
//No final, ele imprime este valor na tela (10). 

//Exercício 2
//a) O código vai percorrer todos os elementos do array e vai imprimir na tela todos os números encontrados que são maiores de 18 (19, 21, 23, 25, 27, 30)
//b) Utilizar o for of seria suficiente sim, 


//Exercícios de escrita de código

//Exercício 1 
const arrayOriginal = [16, 13, 26, 60, 86, 130, 21, 77, 61, 146, 22]
let numero = 0
console.log("Números do array")
for (let numero of arrayOriginal) {
    console.log(numero)
}

//Exercício 2 
console.log("Números divididos por 10")

let divisao = 10
for (let numero of arrayOriginal) {
    numero = numero/divisao
    console.log(numero)
}

