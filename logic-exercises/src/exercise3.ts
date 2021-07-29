//função que recebe uma string que pode conter somente os seguintes caracteres: '(',  ')',  '[',  ']',  '{',  '}' , e retorna true para uma string válida, e false para uma inválida.
// Só pode ser fechada pelo mesmo tipo 

const checaParenteses = (str: string): boolean => {
    const stack = [];

    for (let char of str) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            const lastOpeningChar = stack.pop();
            if (!lastOpeningChar) {
                return false
            } else if (
                (lastOpeningChar === "(" && char !== ")") ||
                (lastOpeningChar === "[" && char !== "]") ||
                (lastOpeningChar === "{" && char !== "}")
            ) {
                return false;
            }
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;
}

