// função que recebe um número e imprime todos os inteiros de 0 até esse número no console em ordem crescente

const printNumbers = (n:number) => {
    if (n >= 0) {
        printNumbers(n - 1)
        console.log(n)
    }
}

// função que recebe um número e imprime todos os inteiros de 0 até esse número no console em ordem decrescente
console.log(printNumbers(4))

const printNumbersReverse = (n: number) => {
	if (n >= 0) {
		console.log(n);
		printNumbersReverse(n - 1);
	}
};

console.log(printNumbersReverse(4))