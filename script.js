const slider = document.querySelector('#slider')
let botao = document.querySelector('.button')

let tamanho = document.querySelector('#valor')
let password = document.querySelector('.password')
let mostrarsenha = document.querySelector('.copy')

let mostrar = document.querySelector('.container_password')

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTYVWXYZ123456789!@$%"
let novasenha = ""

tamanho.innerHTML = slider.value

slider.oninput = function() {
    tamanho.innerHTML = this.value
}

function gerarsenha(){
    let senha = ""
    for (let i = 0, s = charset.length; i< slider.value; i++)
    senha += charset.charAt(Math.floor(Math.random() * s))

    mostrar.classList.remove('hide')
    password.innerHTML = senha
    novasenha = senha
}

function copiar() {
    navigator.clipboard.writeText(novasenha)
    mostrarsenha.innerHTML = 'A senha foi copiada com sucesso!'
}