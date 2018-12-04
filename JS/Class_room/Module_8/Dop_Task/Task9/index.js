/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal" 
    и классом js-open-modal, модальное окно с классом modal, 
    должно появляться, тобишь необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop), 
    модальное окно должно закрываться.
*/
let but=document.querySelector('.js-open-modal')
let div=document.querySelector('.modal-hidden')
let con=document.querySelector('.modal-content')
let butClose=document.querySelector('.close-btn')
let divMod=document.querySelector('.js-modal-backdrop')

function mod(){
    div.classList.remove('modal-hidden')
}
but.addEventListener('click',mod)
function close(){
    div.classList.add('modal-hidden')
}
butClose.addEventListener('click',close)

function close2(){
    div.classList.add('modal-hidden')
}
divMod.addEventListener('click',close2)