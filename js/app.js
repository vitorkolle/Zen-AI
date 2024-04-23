'use strict'

const btn = document.getElementById('entrar')
btn.addEventListener('click', validarLogin)

function validarLogin(){
    const usuario = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value

    if(usuario == 'usuario' && senha == '1234'){
        window.location.href = 'home.html'
    }else{
        alert('Usuário e/ou senha inválidos!!!')
        location.reload()
    }
}