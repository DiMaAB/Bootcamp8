/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Используйте делегирование.
*/
let ul=document.querySelector('.images');
let listItems=Array.from(ul.children);
 
function FindImag(){
    let listItems=event.target;
    let src=listItems.src;
    alert(`${src}`)
   
};
 ul.addEventListener('click',FindImag);