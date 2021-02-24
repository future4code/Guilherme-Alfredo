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

//Exercício 4
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

//Exercício 7 

const filme = prompt ("Qual genero de filme gostaria de assistir? Fantasia, Terror ou Comédia?")
const preço = Number (prompt ("Qual o valor do ingresso? R$"))
if (filme === "Fantasia" && preço < 15) {
    console.log("Bom Filme!")
} else{
    console.log("Escolha outro filme :(")
}