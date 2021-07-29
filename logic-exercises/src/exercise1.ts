// função que recebe um array de 0 a 100 e informe o número que está faltando

const findMissingNumber = (array: number[]): number => {
    const total = 5050;
    let totalArray = 0;
    for (const num of array) {
        totalArray += num;
    }
    return total - totalArray;
};

