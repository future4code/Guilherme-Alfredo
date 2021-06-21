import { performPurchase, User } from "../src/index";

describe("Testando a função performPurchase",()=> {

//a. Faça um teste com um usuário com o saldo maior do que o valor de compra
    test("Testing balance greater than value",()=> {
        const user: User ={
            name: "Guilherme",
            balance: 200
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            name:"Guilherme",
            balance: 150
        })
    });

//b. Faça um teste com um usuário com o saldo igual ao valor de compra
    test("Testing balance grater than value ", () => {

        const user: User ={
            name: "Guilherme",
            balance: 200
        }
    
        const result = performPurchase(user, 200)
    
        expect(result).toEqual({
            ...user,
            balance:0
        })
    })

//c. Faça um teste com um usuário com o saldo menor do que o valor de compra
    test("Testing balance grater than value ", () => {
        const user: User ={
            name: "Guilherme",
            balance: 200
        }

        const result = performPurchase(user, 250)

        expect(result).not.toBeDefined()
    })
})