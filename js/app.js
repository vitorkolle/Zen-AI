'use strict'

const inputUsuario = document.getElementById('usuario')
const inputSenha = document.getElementById('senha')

const btn = document.getElementById('entrar')
btn.addEventListener('click', validarLogin)

inputUsuario||inputSenha.addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
        validarLogin()
    }
})

async function validarLogin() {
    const url = 'https://back-login.vercel.app/usuarios'
    const response = await fetch(url)
    const usuarios = await response.json()

    const usuario = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value

    if(usuario == '' || senha == ''){
        alert('Preencha todos os campos!!')
    }

    usuarios.forEach(element => {
        if (usuario === element.nome && senha === element.senha) {
            alert('Usuário logado com sucesso!!!')
            window.location.href = '../home.html'
        }
    });

}