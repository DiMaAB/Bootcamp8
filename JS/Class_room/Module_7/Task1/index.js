'use strict'
// let title=document.querySelector('.title'); // ещет 1 подходящий элемент.
// let text=document.querySelectorAll('p');  // ищит все р в html
// let text=[...document.querySelectorAll('p')] // делает сразу получаемые данные из псевдомассива в массив.
// let text2=Array.from(document.querySelectorAll('p')); // делает сразу получаемые данные из псевдомассива в массив.
// console.log(title);
// console.log(text);
// let li = document.getElementById('one'); //обращение по id
// let text3=document.getElementsByClassName('title');// обращение по классу.
// let ul = document.querySelector('.list');
// console.log(ul);
// console.log(ul.children);
// console.log(ul.parentNode);
// console.log(ul.previousElementSibling); // соседний перед ul.
// console.log(ul.nextElementSibling);// соседний следующий после ul.
let text=document.querySelector('.par');
console.log(text);
console.log(text.classList.length);  // показывает кличество классов в html документе
text.classList.add('big-text');

