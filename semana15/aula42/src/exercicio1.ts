//a)
const minhaString: string = "Guilherme"
//ao atribuir um número para a váriável  minhaString ocorre um erro, porque definimos o tipo string anteriormente. 

//b) 
const meuNumero: number = 27
//para criar uma variável que aceite tanto string quanto numeros podemos usar a sintaxe string | number. 

//c) 

// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const pessoa1: pessoa = {
//     nome:"Guilherme", 
//     idade: 27,
//     corFavorita: "Azul"
// }

// const pessoa2: pessoa = {
//     nome:"Marina", 
//     idade: 26,
//     corFavorita: "Verde"
// }

// const pessoa3: pessoa = {
//     nome:"Valéria", 
//     idade: 50,
//     corFavorita: "Amarelo"
// }


//d)

enum CORES_DO_ARCO_IRIS {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo", 
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: pessoa = {
    nome:"Guilherme", 
    idade: 27,
    corFavorita: CORES_DO_ARCO_IRIS.AZUL
}

const pessoa2: pessoa = {
    nome:"Marina", 
    idade: 26,
    corFavorita: CORES_DO_ARCO_IRIS.VERDE
}

const pessoa3: pessoa = {
    nome:"Valéria", 
    idade: 50,
    corFavorita: CORES_DO_ARCO_IRIS.AMARELO
}

const pessoa4: pessoa = {
    nome:"Wagner", 
    idade: 55,
    corFavorita: CORES_DO_ARCO_IRIS.AZUL
}

const pessoas: pessoa[] = []
pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
pessoas.push(pessoa4)

// console.table(pessoas)