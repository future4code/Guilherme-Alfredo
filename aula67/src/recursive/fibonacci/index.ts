const getRecursiveFibonacci = (integer: number): number =>{
// const result = (resultado da propria funcao -1) + (resultado da propria funcao-2)

    //caso base. Quando o valor for qualquer coisa que seja menor que 2, o valor a ser usado no calculo é = 1
    if(integer <=2){
        return 1
    }
    //chamada da função recursiva
    const result = getRecursiveFibonacci(integer-1) + getRecursiveFibonacci(integer-2);
    return result;

}


console.log(getRecursiveFibonacci(4));