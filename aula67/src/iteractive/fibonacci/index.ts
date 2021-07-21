const getIteractiveFibonacci= (
    integer: number
 ): number => {
 
    let previous = 1
    let current = 1
    // next -> 2
 
    for(let i = 3; i <= integer; i++){
        //desestruturação para alterar os valores de current (o valor atual) e previous (o valor anterior)
       [current, previous] = [
          current + previous,
          current
       ]
 
       // [a,b] = [b,a]
    }
 
    return current
 }