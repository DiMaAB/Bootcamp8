'use strict'

let button=document.querySelector('button')
let four=document.querySelector('#run4')
let five=document.querySelector('#run5')
function move(){
    four.classList.remove('statik');
    four.classList.add('four');

    five.classList.remove('statik2');
    five.classList.add('five');
    console.log('sdfghjkl;');
    const timer=setTimeout(()=>{
        four.classList.remove('four');
    five.classList.remove('five');
        four.classList.add('jump');
    five.classList.add('three');
    },2000)
    const backt =setTimeout(()=>{
        // back1
        four.classList.remove('jump');
        four.classList.add('back1');
        five.classList.remove('three');
        five.classList.add('back2');
    },3700)
    const ba =setTimeout(()=>{
        four.classList.remove('back1');
        four.classList.add('statik');
        five.classList.remove('back2');
        five.classList.add('statik2');
},6701)
}

button.addEventListener('click',move)
// animation
// создать кнопку при клику навішать функцию которая 
// будет актив анимация передвежения 2 персонажих через таймаут 3 секи 
// активируеться анимация на удар и потом через пол секит возврат на свои
//  позиции 