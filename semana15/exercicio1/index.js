
const nome =  process.argv[2];
const idade = process.argv[3];
const idadeFutura = Number(idade) + 7

if (nome && idade){
    console.log("\033[33m", `Olá ${nome}! você tem ${idade} anos. Em 7 anos você terá ${idadeFutura}`)
} else {
    console.log("\033[33m", "você precisa adicionar 2 parâmetros")
}

