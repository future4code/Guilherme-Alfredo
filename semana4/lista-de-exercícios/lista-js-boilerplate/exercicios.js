//Exercício 1

function inverteArray(array) {
   let arrayInverso = []
   for (let i = array.length - 1; i >=0; i--) {
      arrayInverso.push(array[i])
   } 
   
   return arrayInverso
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
let arrayPar = array.filter ((item) =>{
      return item %2 === 0
   })

   arrayElevadoADois = arrayPar.map ((item) =>{
      return item*item
   })

   return arrayElevadoADois 
}

//Exercício 3

function retornaNumerosPares (array) {
   let arrayPar = array.filter ((item) =>{
      return item %2 === 0
   })

   return arrayPar
}


//Exercício 4

function retornaMaiorNumero(array) {
   let maior = 0
   for (item of array) {
      if (item > maior){
         
         maior = item
      }
   } 
   return maior
}


//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   let respostas = [false, false, true, true, true]

   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   array = []

   for (let i =0; i < n; i++) {
      array.push (i*2)
   }

   return array

}

// Exercício 8

function checaTriangulo(a, b, c) {
   if (a === b && b === c && a === c){
   return "Equilátero"
   } else if (a === b || b === c || a === c) {
   return "Isósceles"
   } else { 
      return "Escaleno"
   }
   
}


// Exercício 9

function comparaDoisNumeros(num1, num2) {

let objeto = {
   maiorNumero: num1,
   maiorDivisivelporMenor: false,
   diferenca: 0
}

if (num1 < num2){
   objeto.maiorNumero = num2
   if (objeto.maiorNumero % num1 === 0) {
      objeto.maiorDivisivelporMenor = true
   } 

   objeto.diferenca = objeto.maiorNumero - num1
} else {
   if (objeto.maiorNumero % num2 === 0){
      objeto.maiorDivisivelporMenor = true
   }
   objeto. diferenca = maiorNumero - num2
}
   return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {
   array = ordenaArray(array)
   let novoArray = [array [array.length - 2], array [1]]
   return novoArray
}

//Exercício 11

function ordenaArray(array) {
   return array.sort((num1, num2) => num1 - num2); 
}

// Exercício 12

function filmeFavorito() {
   let filme = {
      nome: "O Diabo Veste Prada", 
      ano: 2006, 
      diretor: "David Frankel", 
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
   return filme
}

// Exercício 13

function imprimeChamada() {
   let filme = {
      nome: "O Diabo Veste Prada", 
      ano: 2006, 
      diretor: "David Frankel", 
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   let retangulo = {
   largura: lado1,
   altura: lado2,
   perimetro: 2 *(lado1 + lado2),
   area: (lado1 * lado2)
   }
   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   pessoa.nome = "ANÔNIMO"
   return pessoa
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
let arrayAdulto = []
for (pessoa of arrayDePessoas){
   if (pessoa.idade >= 20){
      arrayAdulto.push(pessoa)
      
   }   
}
   return arrayAdulto   
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   let arrayMenores = []
   for (pessoa of arrayDePessoas){
      if (pessoa.idade < 20){
         arrayMenores.push(pessoa)
         
      }   
   }
      return arrayMenores  
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   let arrayDobro = []
   for (item of array){
      arrayDobro.push(item*2)
   }
   return arrayDobro
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   let arrayString = []
   for (item of array){
      arrayString.push(String (item*2))
   }
   return arrayString
}

// Exercício 17, letra C

function verificaParidade(array) {
   let arrayFrase = []
   for (item of array){
      if (item %2 === 0){
         arrayFrase.push(`${item} é par`)
      } else {
         arrayFrase.push (`${item} é ímpar`)
      }
   }
   return arrayFrase
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   let arrayAutorizadas = []
   for (pessoa of pessoas){
   if (pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
      arrayAutorizadas.push(pessoa)
   }
   }
   return arrayAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   let arrayBarradas = []
   for (pessoa of pessoas){
   if (pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60){
      arrayBarradas.push(pessoa)
   }
   }
   return arrayBarradas
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta() {
   let textoEmail  = []
   let pronome
   let titulo
   for (pessoa of consultas) {
      if (pessoa.genero === "feminino"){
         titulo = "Sra."
         pronome = "la"
      } else if (pessoa.genero === "masculino") {
         titulo = "Sr."
         pronome = "lo"
      }
   
   if (pessoa.cancelada === true) {
      textoEmail.push(`Olá, ${titulo} ${pessoa.nome}. Infelizmente sua consulta marcada para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)
   
   } else {
      textoEmail.push(`Olá, ${titulo} ${pessoa.nome}. Estamos enviando esta mensagem para lembrá-${pronome} da sua consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse o recebimento deste-email.`) 
   }
}
   return textoEmail

}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   contas.forEach((cliente) => {
   let despesa = 0
   for (valor of cliente.compras){
   despesa += valor
   }
   cliente.saldoTotal -= despesa
   })
   return contas
}