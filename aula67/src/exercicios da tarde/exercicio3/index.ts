//Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade).

export const calculateTonIterative = (n: number): number => {
	let result = 0
	for (let i = 0; i <= n; i++) {
		result += i;
	}
	return result;
};

console.log(calculateTonIterative(7))