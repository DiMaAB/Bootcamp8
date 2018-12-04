
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно 
      отображаться в абзаце с классом input-value 
*/

let inp=document.querySelector('.input');
let pa=document.querySelector('input-value')

function gg(){
  console.log('Input is in focus!');
}
inp.addEventListener('focus', gg);

function text(){
    let tex=inp.value;
    console.log(tex);
    pa.innerHTML = `Current input value: ${tex}`;
    
}
inp.addEventListener('input', text);