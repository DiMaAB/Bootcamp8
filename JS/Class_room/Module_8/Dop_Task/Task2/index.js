/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/
let div=document.querySelector('.calc');
let res=document.querySelector('.result')
let but=document.querySelector('button')
let arr=[];
let sum=0;
function add(){
    let evener=event.target;
    let val=evener.value;  // что-юы взять значение которое мы ввели
    
        
    let arr=Array.from(document.querySelectorAll('[type="text"]'));
  
    sum=arr.reduce((acc,el)=>acc+Number(el.value),0); 
    // for (el of arr){  // второй способ
    //     sum+=+el.value
    // }
    res.textContent=sum;
    return res
}
but.addEventListener('click', add)