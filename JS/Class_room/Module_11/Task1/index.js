// let obj=new Promise(function(ok,error){  // первый параметр отвечает за успешное выполнение промиса , 2 если неудачно.
//     let i=1;
//     let arr=[];
//     while(i<1000000){
//         arr.push(i);
//         i++
//     }
//     if(arr.length===999999){
//         ok(arr)
//     }else{
//         error('ERROR') // можно написать new Error вместо ERROR - и она покажет где имено у тебя ошибка.
//     }

// });
// obj.then(data=>console.log(data)).catch(err=>console.log(err))



// function asyncLoop(number){
// let obj= new Promise(function(resolve,reject){
//     let i=1;
//     let arr=[];
//     while(i,number){
//         arr.push(i);
//         i++
//     }
//     if(arr.length===number-1){
//         resolve(arr);
//     }else{
//         reject(new Error());
//     }
// })
// return obj;
// }
// asyncLoop(5)
// .then(data=>console.log(data))
// .then(err=>console.log(err))

// Promise.all([promiseA,promiseB]) // когда придет информация со всех промисов которые мы передаем. тогда мы в формате массива получаем информацию с них
// Promise.race([promiseA,promiseB]) // получаем инфомацию  с одного промиса из которые мы передаем.




// console.log(localStorage);
// localStorage.setItem('favorite',JSON.stringify(5))// инфа в json формате , так передаем
// let res=localStorage.getItem('favorite'); // считываем инфу с локал сторенчдж также нужно перевести с оыщт формата

// let a = JSON.parse(res);
// console.log(a);

// localStorage.removeItem('favorite')


let fontSizeSelect=document.querySelector('#fontSize');
const colorSelect=document.querySelector('#color');
const fontFamilySelect=document.querySelector('#fontFamily');
function readValue(e){
    e.preventDefault();
    // console.log(fontSizeSelect.value, colorSelect.value,fontFamilySelect.value);
    localStorage.setItem('settings', JSON.stringify({
        fontFamily: fontFamilySelect.value ,
        fontSize: fontSizeSelect.value,
        fontColor: colorSelect.value ,
    }))                 //  запись в лкол сторедж.
  getDataFormStorage();  
};
function getDataFormStorage(){
    let result=JSON.parse(localStorage.getItem('settings'));
    let allP=[...document.querySelectorAll('p')];
    for(let el of allP){
        el.style.color=result.fontColor;
        el.style.fontSize=result.fontSize+'px';
        el.style.fontFamily=result.fontFamily;
    }  // берем данные с локалсторедж и стилизируем р.
}

form.addEventListener('submit',readValue); 
window.addEventListener('DOMContentLoaded',getDataFormStorage); // что-бы при перезагрузки страницы не слетали настройки