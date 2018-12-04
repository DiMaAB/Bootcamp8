/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/
// let form=document.querySelector('.question-form')
// let div=document.querySelector('.options')
// let but=document.querySelector('.btn')
// let p=document.querySelector('.result')
// let arr = [...document.querySelectorAll('[type="radio"]')];

let result = document.querySelector('.result');
let form = document.querySelector('.question-form');
let arr = [...document.querySelectorAll('[type="radio"]')];
let span = document.createElement('span');

function ShowChoice(event) {
    event.preventDefault();
    span.innerHTML = '';
    let res = arr.filter(el => el.checked === true);
    span.append(res[0].value.toUpperCase());
    result.append(span);
}
form.addEventListener('submit', ShowChoice);