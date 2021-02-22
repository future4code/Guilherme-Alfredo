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

let nomeInformado = prompt("Qual o seu nome?")
console.log(nomeInformado)

let idadeInformada = prompt("Qual o sua idade?")
console.log(idadeInformada) 
// Agora foram impressos os valores digitados pelo usuário. 
// Isso porque neste caso foram atribuídos valores para as variáveis. 

console.log("Olá", nomeInformado, "você tem", idadeInformada, "anos")

