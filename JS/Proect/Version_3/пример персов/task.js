'use strict'

let button=document.querySelector('button')
let four=document.querySelector('#run4')
let five=document.querySelector('#run5')
// class Personag={


function move(){
    four.classList.remove('statikOneR');
    four.classList.remove('statikOneR_Mystique');
    four.classList.add('runPrRight');
    four.classList.add('runPrRight_Mystique');
    

    five.classList.remove('statikTwoL');
    five.classList.remove('statikTwoL_Mystique');
    five.classList.add('runPrLeft');
    five.classList.add('runPrLeft_Mystique');
    console.log('sdfghjkl;');
    const timer=setTimeout(()=>{
        four.classList.remove('runPrRight');
        four.classList.remove('runPrRight_Mystique');
    five.classList.remove('runPrLeft');
    five.classList.remove('runPrLeft_Mystique');
        four.classList.add('gansAtackL');
        four.classList.add('gansAtackL_Mystique');
    five.classList.add('kickOne');
    five.classList.add('kickOneL_Mystique');
    },2000)
    const block = setTimeout(()=>{
        four.classList.add('kickLOneS');
        four.classList.add('kickLOneS_Mystique');
        four.classList.remove('gansAtackL');
        four.classList.remove('gansAtackL_Mystique');

    },3700)
    const backt =setTimeout(()=>{
        // back1
        four.classList.remove('kickLOneS');
        four.classList.remove('kickLOneS_Mystique');
        four.classList.add('backOne');
        four.classList.add('backOne_Mystique');
        five.classList.remove('kickOne');
        five.classList.remove('kickOneL_Mystique');
        five.classList.add('backTwo');
        five.classList.add('backTwo_Mystique');
    },4700)
    const ba =setTimeout(()=>{
        four.classList.remove('backOne');
        four.classList.remove('backOne_Mystique');
        four.classList.add('statikOneR');
        four.classList.add('statikOneR_Mystique');
        five.classList.remove('backTwo');
        five.classList.remove('backTwo_Mystique');
        five.classList.add('statikTwoL');
        five.classList.add('statikTwoL_Mystique');
},7701)
}

button.addEventListener('click',move)
// animation
// создать кнопку при клику навішать функцию которая 
// будет актив анимация передвежения 2 персонажих через таймаут 3 секи 
// активируеться анимация на удар и потом через пол секит возврат на свои
//  позиции 