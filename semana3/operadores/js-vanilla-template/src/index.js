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

// Exercício 3 

let listaDeTarefas = []
let tarefa1 = prompt ("Digite uma tarefa que você precisa realizar hoje (índice 0)")
let tarefa2 = prompt ("Digite uma segunda tarefa que você precisa realizar hoje (índice 1)")
let tarefa3 = prompt ("Digite uma terceira tarefa que você precisa realizar hoje (índice 2)")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

let tarefaRealizada = prompt ("Digite o índice da tarefa que você já realizou utilizando o número que corresponde ao índice da tarefa (0, 1, 2)")

listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)

// Exercício 4 

let nome = prompt ("Digite seu nome")
let email = prompt ("Digite seu email")
console.log("O email " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome + "!")

// DESAFIO 1
let GRAUS_FAHRENHEIT = 77
let KELVIN = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
console.log("Conversão de 77°F em K:", KELVIN)

let grausCelsius = 80
let grausF = (grausCelsius)*9/5 + 32
console.log("Conversão de 80°C em F:", grausF)

let grausCelsius2 = 30
let grausF2 = (grausCelsius2)*9/5 + 32
console.log("Conversão de 30°C em F:", grausF2)
let kelvin = (grausCelsius2) + 273.15
console.log("Conversão de 30°C em K:", kelvin)

let valorUsuario = prompt ("Digite um valor em °C para conversão em F e K")
console.log(typeof Number (valorUsuario))
let conversaoKelvin = Number (valorUsuario) + 273.15
console.log("Conversão do valor digitado em F: ", (valorUsuario)*9/5 + 32) 
console.log("Conversão do valor digitado em K: ", conversaoKelvin)

// DESAFIO 2
let KWH = 280 
let consumoKWH = Number (KWH) *0.05
console.log("Valor a ser pago por uma residencia que consome 280 quilowatt-hora de energia: ",consumoKWH, " Reais")

let desconto = Number (consumoKWH) *0.15
let desconto2 = Number (consumoKWH) - (desconto)
console.log("Valor a ser pago com desconto de 15%: ",desconto2)

// DESAFIO 3 
let libra = 20
let kg = Number (libra) *0.4536
console.log("20lb equivalem a: ",kg, " kg")

let oz = 10.5
let quilograma = Number (oz) *0.0283495
console.log("10.5oz equivalem a: ",quilograma, " kg")

let milha = 100
let metro = Number (milha) *1609.34
console.log("100mi equivalem a: ",metro, " m")

let ft = 50
let m = Number (ft) *0.3048
console.log("50ft equivalem a: ",m, " m")

let gal = 103.56
let litro = Number (gal) *3.78541
console.log("103.56gal equivalem a: ",litro, " l")

let xicara = prompt ("Digite o número de xícaras que deseja converter em litros")
let li = Number (xicara) *0.24
console.log("450 xic equivalem a: ",li, " l")

