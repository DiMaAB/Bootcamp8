/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
let root = document.querySelector('#root');
let num = prompt('Enter number:');
let container = document.createElement('div');
let wight = 30;
let height = 30;
for(let i=0; i < num; i+=1) {
  let div = document.createElement('div');
  div.style.width = `${wight}px`;
  div.style.height = `${height}px`;
  wight+=10;
  height+=10;
  div.style.backgroundColor='rgb('+Math.round(Math.random()*255+1)+','+Math.round(Math.random()*255+1)+','+Math.round(Math.random()*255+1)+')';
  div.style.margin = 'auto';
  container.append(div);
}
// console.log(container);

root.append(container);
