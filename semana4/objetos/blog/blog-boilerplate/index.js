
let arrayObjeto = []

function receberPost() {

let inputTitulo = document.getElementById("titulo-post")
let inputAutor = document.getElementById("autor-post")
let conteudoPost = document.getElementById("conteudo-post")
let containerDePosts = document.getElementById("container-de-posts")
let inputImagem = document.getElementById("inputImagem")

const objetosInput = {
    titulo: inputTitulo.value,
    autor: inputAutor.value,
    conteudo: conteudoPost.value,
    imagem: inputImagem.value 
}

arrayObjeto.push(objetosInput)

inputTitulo.value = ""
inputAutor.value = ""
conteudoPost.value = ""

console.log(objetosInput)

containerDePosts.innerHTML += `<h1>Título: ${objetosInput.titulo}</h1>`
containerDePosts.innerHTML += `<h3>Autor: ${objetosInput.autor}</h3>`
containerDePosts.innerHTML += `<p>${objetosInput.conteudo}</p>`

if (inputImagem.value.includes(".jpg") || inputImagem.value.includes(".png") && inputImagem.value.includes("http")){
    containerDePosts.innerHTML += `<img src=${inputImagem.value}>`
    inputImagem.value = ""
}
}