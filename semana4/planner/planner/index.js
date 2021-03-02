function adicionarTarefa() {
    const meuInput = document.getElementById("tarefa")
    const selectDia = document.getElementById("dias-semana")

    if (selectDia.value === "domingo") {
        const listaDomingo = document.getElementById("domingo")
        listaDomingo.innerHTML += `<li>${meuInput.value}</li>`
        meuInput.value = ""
    } else if (selectDia.value === "segunda") {
        const listaSegunda = document.getElementById("segunda")
        listaSegunda.innerHTML += `<li>${meuInput.value}</li>`
        meuInput.value = ""
    } else if (selectDia.value === "terca") {
        const listaTerca = document.getElementById("terca")
        listaTerca.innerHTML += `<li>${meuInput.value}</li>`
        meuInput.value = ""
    } else if (selectDia.value === "quarta") {
        const listaQuarta = document.getElementById("quarta")
        listaQuarta.innerHTML += `<li>${meuInput.value}</li>`
        meuInput.value = ""
    } else if (selectDia.value === "quinta") {
        const listaQuinta = document.getElementById("quinta")
        listaQuinta.innerHTML += `<li>${meuInput.value}</li>`
        meuInput.value = ""
    } else if (selectDia.value === "sexta") {
        const listaSexta = document.getElementById("sexta")
        listaSexta.innerHTML += `<li>${meuInput.value}</li>`
        meuInput.value = ""
    } else if (selectDia.value === "sabado") {
        const listaSabado = document.getElementById("sabado")
        listaSabado.innerHTML += `<li>${meuInput.value}</li>`
        meuInput.value = ""
    }





}




