// Exercícios de interpretação de código

// Exercício 1 
// O código pede que o usuário digite um número, e depois confere se aquele número digitado, ao ser dividido por 2, o resultado é igual a 0.
// Se o resto for igual a 0, imprime a mensagem "Passou no teste", se não for igual a 0 imprime "Não passou no teste". 
// Ou seja, ele vai imprimir "passou no teste" para os números pares e "não passou no teste" para os números ímpares.

// Exercício 2 
// a) O código acima serve para que o usuário digite o nome de uma fruta e receba uma mensagem falando o valor da fruta escolhida. 
// b) Se o usuário digitar "Maçã", a mensagem será "O preço da fruta Maçã é R$ 2.25". 
// c) Ao tirar o "break" logo acima do default o console ia imprimir o valor do próximo item que contenha o "break". A mensagem seria "O preço da fruta Pêra é R$ 5".

// Exercício 3 
// a) Esta pedindo que o usuário digite um número e ja está convertendo o que for digitado no prompt para uma variável number. 
// b) Se o usuário digitar 10, a resposta vai ser "Esse número passou no teste". Se digitar -10 nao vai ocorrer nada, pois não tem função para os números menores que 0.
// c) Sim, haverá um erro, porque a var


//Exercícios de escrita de código

// Exercício 4
const idade = Number (prompt ("Digite sua idade"))

if(idade >= 18){
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir")
}

//Exercício 5 
const turno = prompt ("Informe o turno que você estuda: M (matutino), V (Vespertino) ou N (Noturno)")
if(turno === "M"){
    console.log("Bom Dia!")
} else if(turno === "V"){
    console.log("Boa tarde!")
} else if(turno === "N"){
    console.log("Boa noite!")
} else{
    console.log("Isso não é uma opção de turno")
}

//Exercício 6

const turno2 = prompt ("Informe o turno que você estuda: M (matutino), V (Vespertino) ou N (Noturno)")
switch (turno2) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Isso não é uma opção de turno")
}

//Exercício 7 + Desafio 1

const filme = prompt ("Qual genero de filme gostaria de assistir? Fantasia, Terror ou Comédia?")
const preço = Number (prompt ("Qual o valor do ingresso? R$"))
if (filme === "Fantasia" && preço < 15) {
    const snack = prompt("Qual snack você quer comprar?")
    console.log("Bom Filme! ", "com", snack)
} else{
    console.log("Escolha outro filme :(")
}

// Desario 2 

const nomeCompleto = prompt ("Informe seu nome completo")
const tipoDeJogo = prompt ("Selecione o tipo de jogo: IN (internacional) ou DO (doméstico)")
const etapaDoJogo = prompt ("Selecione a etapa do jogo: SF (semi-final), DT (decisão de terceiro lugar) ou FI (final)")
const categoria = Number (prompt ("Informe a categoria do ingresso: 1, 2, 3 ou 4"))
const quantidaDeIngressos = Number (prompt ("Informe a quantidade de ingressos que deseja comprar"))
let valor 
let valorTotal  
let valorDollar 
let totalDollar 


console.log("---Dados da Compra---")

console.log("Nome Completo: ", nomeCompleto)

if (tipoDeJogo === "IN"){
    console.log("Tipo de jogo: Internacional")
} else if (tipoDeJogo === "DO"){
    console.log("Tipo de jogo: Doméstico")
} else {
    console.log("Tipo de jogo não informado")
}

if (etapaDoJogo === "SF") {
    console.log("Etapa do jogo: Semi-final ")
} else if (etapaDoJogo === "DT") {
    console.log("Etapa do jogo: Decisão de terceiro lugar")
} else if (etapaDoJogo === "FI") {
    console.log("Etapa do jogo: Final")
} else {
    console.log("Etapa não informada")
}

if (categoria === 1) { 
    console.log("Categoria: 1")
} else if (categoria === 2) { 
    console.log("Categoria: 2")
} else if (categoria === 3) { 
    console.log("Categoria: 3")
} else if (categoria === 4) { 
    console.log("Categoria: 4")
} else { 
    console.log("Categoria inexistente")
}   

console.log ("Quantidade de ingressos: ", quantidaDeIngressos, " ingressos")

console.log("---Valores---")

if (etapaDoJogo === "SF" && categoria === 1 && tipoDeJogo === "DO") {
    valor = 1320
    valorTotal = valor*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "R$ ", valor)
    console.log("Valor total: ", "R$ ",valorTotal)
}

if (etapaDoJogo === "SF" && categoria === 1 && tipoDeJogo === "IN") {
    valorDollar = 1350*4.1
    totalDollar = valorDollar*quantidaDeIngressos
    console.log("Valor do Ingresso: ","U$ ", valorDollar)
    console.log("Valor total: ","U$ ", totalDollar)
}

if (etapaDoJogo === "SF" && categoria === 2 && tipoDeJogo === "DO") {
    valor = 880
    valorTotal = valor*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "R$ ",valor)
    console.log("Valor total: ", "R$ ",valorTotal)
}

if (etapaDoJogo === "SF" && categoria === 2 && tipoDeJogo === "IN") {
    valorDollar = 880*4.1
    totalDollar = valorDollar*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "U$ ",valorDollar)
    console.log("Valor total: ", "U$ ",totalDollar)
}

if (etapaDoJogo === "SF" && categoria === 3 && tipoDeJogo === "DO") {
    valor = 550
    valorTotal = valor*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "R$ ",valor)
    console.log("Valor total: ", "R$ ",valorTotal)
}

if (etapaDoJogo === "SF" && categoria === 3 && tipoDeJogo === "IN") {
    valorDollar = 550*4.1
    totalDollar = valorDollar*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "U$ ",valorDollar)
    console.log("Valor total: ", "U$ ",totalDollar)
}

if (etapaDoJogo === "SF" && categoria === 4 && tipoDeJogo === "DO") {
    valor = 220
    valorTotal = valor*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "R$ ",valor)
    console.log("Valor total: ", "R$ ",valorTotal)
}

if (etapaDoJogo === "SF" && categoria === 4 && tipoDeJogo === "IN") {
    valorDollar = 220*4.1
    totalDollar = valorDollar*quantidaDeIngressos
    console.log("Valor do Ingresso: ","U$ ", valorDollar)
    console.log("Valor total: ", "U$ ",totalDollar)
}

if (etapaDoJogo === "DT" && categoria === 1 && tipoDeJogo === "DO") {
    valor = 660
    valorTotal = valor*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "R$ ",valor)
    console.log("Valor total: ", "R$ ",valorTotal)
}

if (etapaDoJogo === "DT" && categoria === 1 && tipoDeJogo === "IN") {
    valorDollar = 660*4.1
    totalDollar = valorDollar*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "U$ ",valorDollar)
    console.log("Valor total: ", "U$ ",totalDollar)
}

if (etapaDoJogo === "DT" && categoria === 2 && tipoDeJogo === "DO") {
    valor = 440
    valorTotal = valor*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "R$ ",valor)
    console.log("Valor total: ", "R$ ",valorTotal)
}

if (etapaDoJogo === "DT" && categoria === 2 && tipoDeJogo === "IN") {
    valorDollar = 440*4.1
    totalDollar = valorDollar*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "U$ ",valorDollar)
    console.log("Valor total: ", "U$ ",totalDollar)
}

if (etapaDoJogo === "DT" && categoria === 3 && tipoDeJogo === "DO") {
    valor = 330
    valorTotal = valor*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "R$ ",valor)
    console.log("Valor total: ", "R$ ",valorTotal)
}

if (etapaDoJogo === "DT" && categoria === 3 && tipoDeJogo === "IN") {
    valorDollar = 330*4.1
    totalDollar = valorDollar*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "U$ ",valorDollar)
    console.log("Valor total: ", "U$ ",totalDollar)
}

if (etapaDoJogo === "DT" && categoria === 4 && tipoDeJogo === "DO") {
    valor = 170
    valorTotal = valor*quantidaDeIngressos
    console.log("Valor do Ingresso: ","R$ ",valor)
    console.log("Valor total: ", "R$ ",valorTotal)
}

if (etapaDoJogo === "DT" && categoria === 4 && tipoDeJogo === "IN") {
    valorDollar = 170*4.1
    totalDollar = valorDollar*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "U$ ",valorDollar)
    console.log("Valor total: ", "U$ ",totalDollar)
}

if (etapaDoJogo === "FI" && categoria === 1 && tipoDeJogo === "DO") {
    valor = 1980
    valorTotal = valor*quantidaDeIngressos
    console.log("Valor do Ingresso: ","R$ ", valor)
    console.log("Valor total: ", "R$ ",valorTotal)
}

if (etapaDoJogo === "FI" && categoria === 1 && tipoDeJogo === "IN") {
    valorDollar = 1980*4.1
    totalDollar = valorDollar*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "U$ ",valorDollar)
    console.log("Valor total: ", "U$ ","U$ ",totalDollar)
}

if (etapaDoJogo === "FI" && categoria === 2 && tipoDeJogo === "DO") {
    valor = 1320
    valorTotal = valor*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "R$ ",valor)
    console.log("Valor total: ","R$ ", valorTotal)
}

if (etapaDoJogo === "FI" && categoria === 2 && tipoDeJogo === "IN") {
    valorDollar = 1320*4.1
    totalDollar = valorDollar*quantidaDeIngressos
    console.log("Valor do Ingresso: ","U$ ", valorDollar)
    console.log("Valor total: ", "U$ ",totalDollar)
}

if (etapaDoJogo === "FI" && categoria === 3 && tipoDeJogo === "DO") {
    valor = 880
    valorTotal = valor*quantidaDeIngressos
    console.log("Valor do Ingresso: ","R$ ", valor)
    console.log("Valor total: ",  "R$ ",valorTotal)
}

if (etapaDoJogo === "FI" && categoria === 3 && tipoDeJogo === "IN") {
    valorDollar = 880*4.1
    totalDollar = valorDollar*quantidaDeIngressos
    console.log("Valor do Ingresso: ","U$ ", valorDollar)
    console.log("Valor total: ",  "U$ ",totalDollar)
}

if (etapaDoJogo === "FI" && categoria === 4 && tipoDeJogo === "DO") {
    valor = 330
    valorTotal = valor*quantidaDeIngressos
    console.log("Valor do Ingresso: ", "R$ ",valor)
    console.log("Valor total: ",  "R$ ",valorTotal)
}

if (etapaDoJogo === "FI" && categoria === 4 && tipoDeJogo === "IN") {
    valorDollar = 330*4.1
    totalDollar = valorDollar*quantidaDeIngressos
    console.log("Valor do Ingresso: ","U$ ", valorDollar)
    console.log("Valor total: ", "U$ ", totalDollar)
}

