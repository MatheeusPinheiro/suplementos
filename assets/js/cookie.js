
let msgCookie = document.querySelector('.cookies-msg')


let btn_aceitar = document.querySelector('.cookies-btn button')

const aceito = ()=>{
    localStorage.lgpd = 'sim'
    msgCookie.classList.remove('mostrar')
}



btn_aceitar.addEventListener('click',aceito)

if(localStorage.lgpd == 'sim'){
    msgCookie.classList.remove('mostrar')
}else{
    msgCookie.classList.add('mostrar')
}