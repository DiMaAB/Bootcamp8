/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

let but=document.querySelector('.button');
let a=0;
function add(){
   
    a+=1;
    but.textContent=a;
    return a;
}
but.addEventListener('click', add)