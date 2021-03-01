//Exercícios de interpretação de código

//Exercício 1 
//a) No console será impresso os valores "2" e "10", multiplicados por "5", ou seja: "10" e "50".
//b) Não apareceria nada no console. Porque sem o "console.log", ele não irá imprimir nada na tela. 

//Exercício 2 
//a) Tendo em vista o "i < 2", ele irá imprimir apenas os elementos de index 0 e 1 no console. "Darvas e Caio". 
//b) Se mudasse o valor para "Amanda" e "Caio", estes seriam os 2 nomes impressos no console. 

//Exercício 3 
// Esta função irá incluir no arrayFinal todos os números pares do primeiro array, multiplicados por eles mesmos. 
// Um nome melhor poderia ser: numerosParesElevadosaDois 


//Exercícios de escrita de código

// //Exercício 4
// //a) 
function apresentacao() {
    console.log("Eu sou Guilherme, tenho 27 anos, moro em Belo Horizonte e sou estudante da Labenu.")
}

apresentacao()

// //b)

function apresentacao2(nome, idade, cidade, estudo) {
nome = prompt ("Digite seu nome")
idade = Number (prompt("Sua idade"))
cidade = prompt ("Sua cidade")
estudo = prompt ("Você é estudante? Responda com Sim ou Não")
    if (estudo === "sim") {
        console.log("Eu sou ", nome, "tenho ", idade, "anos, moro em ", cidade, "e sou estudante" )
    } else if (estudo === "não") {
        console.log("Eu sou ", nome, "tenho ", idade, "anos, moro em ", cidade, "e não sou estudante" )
    }
    
}

apresentacao2()

// //Exercício 5 
// //a)  

let numero1 = Number (prompt("Digite um número"))
let numero2 = Number (prompt("Digite outro número"))

function  somaNumeros ( numero1, numero2) {
    const soma = numero1 + numero2
    console.log("Primeiro número: ", numero1)
    console.log("Segundo número: ", numero2)
    return soma
}

const resultado = somaNumeros(numero1, numero2)
console.log("Soma: ", resultado)


// //b) 

let n1 = Number (prompt("Digite um número"))
let n2 = Number (prompt("Digite outro número"))

function doisNumeros (n1, n2){
    console.log("Primeiro número:", n1)
    console.log("Segundo número:", n2)
    if (n1 >= n2){
        return "O primeiro numero é maior ou igual ao segundo"
    } else {
        return "O primeiro número é menor que o segundo"
    }
}

let maiorNumero = doisNumeros (n1, n2)
console.log (maiorNumero)


// //c 
function mensagem (mensagemRepetida) {
    for (let i = 0; i < 10; i++) {
        console.log ("Mensagem repetida")
    }
}

let mensagem10x = mensagem()


//Exercício 6 
//a 
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
console.log(array)
function numerosArray(tamanho){
    for (let itens of tamanho){
    }
    return tamanho.length
}

const tamanhoArray = numerosArray(array)
console.log("Numero de elementos do array:", tamanhoArray)

// b
let numero3 = Number (prompt("Digite um número"))

function numeroPar (numero1){
    console.log("Numero recebido", numero1)
    if (numero3 %2 === 0){
        return "O número é par"
    } else {
        return "O número é impar"
    }

}

let verificacao = numeroPar(numero3)
console.log(verificacao)


// c

console.log(array)

let numerosPares = (array) => {
    let arrayPares = []
    for (let i of array) {
        if (i % 2 === 0) {
            arrayPares.push(i)
        }
    }
    return arrayPares.length;    
}

let quantidadePar = numerosPares(array)
console.log("Numeros pares do array: ", quantidadePar)

//d (NÃO CONSEGUI TERMINAR, DEU ERRADO)
let numerosPares2 = (array) => {
    let arrayPares2 = []
    for (let i of array) {
        if (numeroPar(arrayPares2)) {
            arrayPares2.push(i)
        }
    }
    return arrayPares2.length;    
}

let quantidadePar2 = numerosPares2(array)
console.log("Numeros pares do array: ", quantidadePar2)