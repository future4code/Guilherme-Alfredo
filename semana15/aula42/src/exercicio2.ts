//a) como entrada a função vai receber um array de numeros e na saída irá devolver um array de estatísticas que contém o maior, menor e a média dos números. 


type amostra = {
    numeros: number[]
    obterEstatisticas: (numeros: number[]) => info
}

type info = {
    maior: number,
    menor: number,
    media: number, 
} 

function obterEstatisticas(numeros: number[]):info {

    const numerosOrdenados: number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: info = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b) esta função é composta pelas variáveis:
//numeros: array de numero;
//numerosOrdenados: array de numeros ordenados;
//"a" e "b": number;
//soma: number;
//estatística: objeto com 3 variáveis de números. 

//c) 

console.table(obterEstatisticas([1,3,7,8,78,90]))