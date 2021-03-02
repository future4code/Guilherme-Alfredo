function adicionarTarefa() {
    const meuInput = document.getElementById("tarefa")
    const selectDia = document.getElementById("dias-semana")

    if (meuInput.value !== "") {
        if (selectDia.value === "domingo") {
            const listaDomingo = document.getElementById("domingo")
            listaDomingo.innerHTML += `<li onclick="riscar(this)">${meuInput.value}</li>`
            meuInput.value = ""
        } else if (selectDia.value === "segunda") {
            const listaSegunda = document.getElementById("segunda")
            listaSegunda.innerHTML += `<li onclick="riscar(this)">${meuInput.value}</li>`
            meuInput.value = ""
        } else if (selectDia.value === "terca") {
            const listaTerca = document.getElementById("terca")
            listaTerca.innerHTML += `<li onclick="riscar(this)">${meuInput.value}</li>`
            meuInput.value = ""
        } else if (selectDia.value === "quarta") {
            const listaQuarta = document.getElementById("quarta")
            listaQuarta.innerHTML += `<li onclick="riscar(this)">${meuInput.value}</li>`
            meuInput.value = ""
        } else if (selectDia.value === "quinta") {
            const listaQuinta = document.getElementById("quinta")
            listaQuinta.innerHTML += `<li onclick="riscar(this)">${meuInput.value}</li>`
            meuInput.value = ""
        } else if (selectDia.value === "sexta") {
            const listaSexta = document.getElementById("sexta")
            listaSexta.innerHTML += `<li onclick="riscar(this)">${meuInput.value}</li>`
            meuInput.value = ""
        } else if (selectDia.value === "sabado") {
            const listaSabado = document.getElementById("sabado")
            listaSabado.innerHTML += `<li onclick="riscar(this)">${meuInput.value}</li>`
            meuInput.value = ""
        }
    } else {
        alert ("Você deve inserir uma tarefa!")
    }
}

function riscar(element){
    element.style = "text-decoration: line-through"

}

function limparTarefa(){

    const limparLista = document.getElementsByTagName("li")
    limparLista.innerHTML = ""
}

