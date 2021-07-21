const getIteractiveFactorial = (integer: number) => {

    let result = 1;
    for(let i = 1; i <=integer; i++){
  
        result *=i
        console.log(result);
    }
    return result;
}

console.log(getIteractiveFactorial(0));