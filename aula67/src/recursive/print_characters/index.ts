const printStringRecursive = (str: string, index: number = 0): void =>{
//strings são arrays de caracteres. string.length. ['J', 'o', 'ã', 'o'] str[4] = "J"

    //caso base: se o nosso index é igual ao último caractere, para de fazer a recursao
    if(index === str.length){
        return;
    }
    //"Yuzo é TOP", index = 1. " é"
    console.log(str[index]); 
    printStringRecursive(str, index+1);
}

printStringRecursive("Yuzo é TOP");