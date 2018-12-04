/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию fetchUsers, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить таблицу состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
  
    ID | NAME | AGE
    id | name | age  
    id | name | age  
*/

const getBtn = document.querySelector(".js-get");
const result = document.querySelector(".result");
let form=document.querySelector('.search-form')
let table=document.querySelector('.table')

getBtn.addEventListener("click", fetchUsers);

/*
  @param {FormEvent} evt
*/
function fetchUsers(evt) {
    evt.preventDefault();
   
fetch(' https://test-users-api.herokuapp.com/users/')
.then(res=>res.json())
.then(data=>create(data))
// .catch(error=>console.log(error))
}
let tr=document.createElement('tr')
let td1=document.createElement('td');
let td2=document.createElement('td');
let td3=document.createElement('td');
td1.textContent='ID';
td2.textContent='Name'
td3.textContent='Age'
tr.append(td1,td2,td3)
table.append(tr)
function create(arr){
    for(let el of arr.data){
        let tr=document.createElement('tr')
        let id=document.createElement('td')
        id.textContent=el.id;
        let name=document.createElement('td')
        name.textContent=el.name;
        let age=document.createElement('td')
        age.textContent=el.age;
        tr.append(id,name,age);
        table.append(tr)
    }}


   




















