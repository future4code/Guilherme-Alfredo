//Exercícios de interpretação de código:

// Exercício 1
// Primeiramente será impresso o valor de "b" que é "10"
// Depois será impresso os valores de "a" e o valor alterado de "b", então será "10" e "5"

// Exercício 2 
// Serão impressos os valores atribuídos para as variáveis, na ordem solicitada. "10", "20", "a"

//Exercícios de escrita de código:

//Exercício 1 

let nome;
let idade;
console.log(typeof nome)
console.log(typeof idade)
// foi impresso o tipo "undefined". 
// Isso aconteceu porque não foi atribuído nenhum valor às variáveis criadas. 

nome = prompt("Qual o seu nome?")
console.log(nome)

idade = prompt("Qual o sua idade?")
console.log(idade) 
// Agora foram impressos os valores digitados pelo usuário. 
// Isso porque neste caso foram atribuídos valores para as variáveis. 

console.log("Olá", nome, "você tem", idade, "anos")

//Exercício 2 

let endereço = prompt("Qual o seu endereço?")
console.log("Endereço:", endereço)

let corFavorita = prompt("Qual a sua cor favorita?")
console.log("Cor favorita:", corFavorita)

let signo = prompt("Qual o seu signo?")
console.log("Signo:", signo)

let animalPreferido = prompt("Qual animal preferido?")
console.log("Animal Preferido:", animalPreferido)

let timeDoCoração = prompt("Qual o seu time do coração?")
console.log("Time do Coração:", timeDoCoração)

