const getRecursiveFactorial = (integer: number): number =>
{
    if(integer <=0){
        return 1;
    }
 return integer * getRecursiveFactorial(integer-1);
}

console.log(getRecursiveFactorial(5));