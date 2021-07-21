// Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n

export const calculateToN = (n: number, start: number = 0): number => {
    if (n === 0) {
        return start;
    }
    return calculateToN(n - 1, start + n);
};

console.log(calculateToN(7));