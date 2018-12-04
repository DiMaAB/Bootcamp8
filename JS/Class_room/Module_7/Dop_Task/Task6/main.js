/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
function createPostCard(){
let body = document.querySelector('body');
let div = document.createElement('div');
div.classList.add('post');
body.prepend(div);

let img = document.createElement('img');
img.classList.add("post__image");
img.setAttribute('src', 'http://via.placeholder.com/400x150');
img.setAttribute('alt', 'post image');
div.prepend(img);

let h2 = document.createElement('h2');
h2.classList.add("post__title");
h2.textContent = 'Lorem ipsum dolor';
div.append(h2);

let p = document.createElement('p');
p.classList.add("post__text");
p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
div.append(p);

let a = document.createElement('a');
a.classList.add('button');
a.setAttribute('href', '#');
a.textContent = 'Read more';
div.append(a);
}
window.addEventListener('DOMContentLoaded',createPostCard)





