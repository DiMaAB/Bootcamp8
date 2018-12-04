/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  */
//  let ul=document.querySelector('.categories');
//  console.log(ul.children[0].firstChild.data.trim());

 let ul=document.querySelectorAll('.categories>li');
// console.log(ul);

 ul.forEach(el=>console.log(el.firstChild.data.trim(),el.firstElementChild.childElementCount));


 