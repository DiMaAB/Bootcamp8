/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/
let list= document.querySelector('ul')
let li;
do{
   li = prompt('Введите что нибудь')
   if(li==null){
    break;
}else{
  let newLi= document.createElement('li')
  newLi.textContent=li;
  list.append(newLi)
}}while(li!=null)

