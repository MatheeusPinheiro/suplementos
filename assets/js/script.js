



const trocarImg = (url)=>{
    document.querySelector('.big-img').src = url
}


const trocarCor = (color)=>{

    let right = document.querySelector('.right')
    let manaus = document.querySelector('.left h2 span')
    let btn = document.querySelector('.left a')

    right.style.background = color
    manaus.style.color = color
    btn.style.background = color
}


//menu mobile 

let menu_mobile =  document.querySelector('.header .menu-hamburguer i')


menu_mobile.addEventListener('click', ()=>{
    let menus = document.querySelector('.header nav ul')
    menus.classList.toggle('abrir')
})