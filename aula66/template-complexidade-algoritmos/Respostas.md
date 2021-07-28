# Complexidade dos exercícios abaixo

## Exercício 1 
    const findFirstRecurringCharacter = (input) => {
    const charHashMap = {};
    for (const char of input) {
        if (charHashMap[char] === true) {
        return char;
        }
        charHashMap[char] = true;
    }
    return null;
    };

Este exercício é de complexidade O(n), ume vez que n é o tamanho da string de imput. 

## Exercício 2 

    export const func = (
    source: string,
    comparison: string
    ): boolean => {
    if (
        comparison.length > source.length + 1 ||
        comparison.length < source.length - 1
    ) {
        return false;
    }
    let commonCharQuantity = 0;

    for (const char of comparison) {
        if (source !== comparison) {
        commonCharQuantity++;
        }
    }
    return (
        commonCharQuantity <= source.length + 1 &&
        commonCharQuantity >= source.length - 1
    );
    };

Este também é de complexidade O(n)

## Exercício 3 

    export const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
    ): void => {
    if (
        matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined
    ) {
        throw new Error("Fora do intervalo da matriz");
    }

    matrix[rowIndex][columnIndex] = value;
    };

Este é de complexidade O(1)

## Exercício 4 

    function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
    }
     return false;
    }

Este é de complexidade O(n²) por conta do if dentro do for
## Exercício 5 

    Coloque, em ordem de eficiência, os 4 algoritmos que você teve que calcular a complexidade

3, 1 e 2, 4
