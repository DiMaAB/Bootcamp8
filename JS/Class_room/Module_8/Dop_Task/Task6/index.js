/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/


let list = document.querySelector('.list');
let buttonList = [...document.querySelectorAll('button')];
let listItem = [...document.querySelectorAll('li')];
function deleteListItem (e) {
   let x;
   for (let el of buttonList) {
       if (el === e.target) {
           x = buttonList.indexOf(el);
           listItem[x].remove();
       }
   }
}
list.addEventListener('click', deleteListItem);