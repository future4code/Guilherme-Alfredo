// Escreva uma função recursiva que consiga imprimir todos os elementos de um array

const array = [1, 2, 3, 4];
export const printArray = (array: number[], iten: number = array.length - 1) => {
	if (iten >= 0) {
		printArray(array, iten - 1);
		console.log(`Elemento ${iten}: `, array[iten]);
	}
};

printArray(array);