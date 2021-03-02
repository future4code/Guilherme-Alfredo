/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros 
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// console.log("Bem vindo ao jogo de Blackjack!")

// const cartaSorteada = comprarCarta

// let sorteioDeCartas = [cartaSorteada(), cartaSorteada(), cartaSorteada(), cartaSorteada(), cartaSorteada()]

// let usuarioVence = Number (sorteioDeCartas[0].valor) + Number (sorteioDeCartas[1].valor)

// let computadorVence = Number (sorteioDeCartas[2].valor) + Number (sorteioDeCartas[3].valor)

// let inicio = confirm("Quer iniciar uma nova rodada?")

// if (inicio){

//    if (usuarioVence === 22) { //Se cair "AA" ele vai sortear denovo
//       usuarioVence = Number (sorteioDeCartas[0].valor) + Number (sorteioDeCartas[1].valor)

//    } 
   
//    if (computadorVence === 22) { //Se cair "AA" ele vai sortear denovo
//       computadorVence = Number (sorteioDeCartas[2].valor) + Number (sorteioDeCartas[3].valor)

//    }

//    let comprarOutraCarta = confirm("Suas cartas são: " + sorteioDeCartas[0].texto + " " + sorteioDeCartas[1].texto + ". " + "a carta revelada do computador é: " + sorteioDeCartas[2].texto +  "." + "\n"  + "Deseja comprar mais uma carta?")
//    if (comprarOutraCarta){
//       usuarioVence = Number (sorteioDeCartas[0].valor) + Number (sorteioDeCartas[1].valor + Number (sorteioDeCartas[4].valor))  
//    } 

//    console.log("Vamos lá!!")

//    console.log("Suas cartas: ", sorteioDeCartas[0].texto + " " + sorteioDeCartas[1].texto + " " + sorteioDeCartas[4].texto + " - pontuação " + usuarioVence)

//    console.log("Cartas do computador: ", sorteioDeCartas[2].texto + " " + sorteioDeCartas[3].texto + " - pontuação " + computadorVence)

//    if (usuarioVence > computadorVence) {
//       console.log ("Você venceu!!")

//    } else if(computadorVence > usuarioVence) {
//       console.log("O computador venceu!!")

//    } else if(usuarioVence === computadorVence) {
//       console.log("Deu empate")

//    } else if (usuarioVence > 21) {
//       console.log("O computador venceu!!")
//    }

// } else {
//    console.log("O jogo acabou! Volte mais tarde.")
// }
