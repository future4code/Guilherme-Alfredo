
let arrayObjeto = []

function receberPost() {

let inputTitulo = document.getElementById("titulo-post")
let inputAutor = document.getElementById("autor-post")
let conteudoPost = document.getElementById("conteudo-post")
let containerDePosts = document.getElementById("container-de-posts")

const objetosInput = {
    titulo: inputTitulo.value,
    autor: inputAutor.value,
    conteudo: conteudoPost.value,
}

arrayObjeto.push(objetosInput)

inputTitulo.value = ""
inputAutor.value = ""
conteudoPost.value = ""

console.log(objetosInput)

containerDePosts.innerHTML += `<h1>${objetosInput.titulo}</h1>`
containerDePosts.innerHTML += `<h2>${objetosInput.autor}</h2>`
containerDePosts.innerHTML += `<p>${objetosInput.conteudo}</p>`

} 


