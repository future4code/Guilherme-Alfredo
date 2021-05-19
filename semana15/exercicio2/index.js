
const operacao = (process.argv[2])
const n1 =  Number(process.argv[3]);
const n2 = Number(process.argv[4]);

if (operacao && n1 && n2) {
    if (operacao === "add") {
            console.log( "\033[33m", "Resposta:", n1 + n2)
    } else if (operacao ==="sub") {
        console.log ("\033[33m", "Resposta:", n1 - n2)
    } else if (operacao === "div") {
        console.log("\033[33m", "Resposta:", n1 / n2)
    } else if (operacao === "multi") {
        console.log ("\033[33m", "Resposta:", n1 * n2) 
    }
} else {
    console.log("\033[33m", "Você deve passar 3 parâmetros")
}

