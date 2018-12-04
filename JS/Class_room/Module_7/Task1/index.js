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
// let text=document.querySelector('.par');
// console.log(text);
// console.log(text.classList.length);  // показывает кличество классов в html документе
// text.classList.add('big-text');
// text.classList.remove('par'); // удаляет класс(скрывает для браузера)
// text.classList.toggle('par'); // добавляет класс если его не существует и не добавляет если такой есть
// console.log(text.classList.contains('title'));
// const lnk=document.querySelector('.link');
// console.log(lnk.hasAttribute('href')); // проверяет есть ли этот атрибут в элементе возвращает (true  false);
// console.log(lnk.getAttribute('title'));
// console.log(lnk.getAttribute('href')); // читаеи информацию с атрибута.

// lnk.setAttribute('title','super link'); // создает новый атрибут 1 значение название атрибута 2 значение это его знчение.  
// lnk.setAttribute('id','idFromJs');
// lnk.removeAttribute('title')// удаление атрибута


// let li=document.querySelector('#one'); // хранит все атрубуты которые мы создали и дает право к ним обратиться.
// console.log(li.dataset.number);

// // let p =document.querySelector('.text'); // выводит содержимое тега
// // console.log(p.textContent);
// let p =document.querySelector('.text').innerHTML; // выводит содержимое тега(второй вариант)
// console.log(p);

// let ul = document.querySelector('.list');
// console.log(ul.textContent);  // выводит текстовые значения
// console.log(ul.innerHTML); // выводит в формате строки.



// let mainTitle=document.createElement('h1'); // создание элента
// mainTitle.classList.add('text'); // добавление
// mainTitle.textContent ='I am so fucking bad';

// let container = document.querySelector('.container');
// container.append(mainTitle); // вставляет в конец контейнера.
// container.prepend(mainTitle);  // вставляет в начало контейнера.
// container.before(mainTitle); // вставляет в начало перед контейнером.
// container.after(mainTitle); // вставляет в конец после контейнера.
// let h2 = document.querySelector('.title');
// h2.after(mainTitle);
// console.log(mainTitle);
// let result = mainTitle.cloneNode(true);  // делает копию элемента, если написать false  то делает копию html документа без напилнения(текстовой облости).
// console.log(result);

// let h2 = document.querySelector('.title');
// h2.replaceWith(mainTitle); // замена

// let list= document.querySelector('.list');
// list.remove();   // удалет элемент из html дерева



// let input = document.querySelector('.name');
// console.log(input);
// console.log(input.value);   // считывание информации который ввел пользователь.

// let checkBox=document.querySelector('#box');
// console.log(checkBox.checked);

// let arcticleTitle = document.querySelector('h2');
// arcticleTitle.style.color='red';
// arcticleTitle.style.fontSize='60px';



// создаем ссылку и вставить ее внутрь артикла в конец.

let art = document.querySelector('.article');
// let a =document.createElement('a');
// a.setAttribute('href','#');
// a.textContent='link';
// art.append(a);


let str = `<a href ="#">link</a>`
art.innerHTML+=str; // стирает всю разметку и записывает по новой разметке.что-бы добавить не стирае старой разметки пишем +