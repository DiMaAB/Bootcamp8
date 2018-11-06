// let animal = {
//     canEat: true,
//     canSleep: true,
//     canWalk: true,
//     canJump() {
//         return 'I can jump';
//     }
// };

// let dog = {
//     canBark: true,
//     canSwim: true,
// };

// let dog = Object.create(animal); // метод обьекта.(связываем с animal) и создает обьект
// // console.log(animal);
// dog.canBrark = true;
// dog.canSwim = true;
// console.log(dog);
// console.log(dog.canSwim);
// console.log(dog.canWalk);



// function Human(name,age,gender){
// this.name = name;
// this.age = age;
// this.gender = gender;
// this.breathe=function(){
//     console.log(`${this.name} can breathe`);
// }
// this.wall=function() {
//     console.log(`${this.name} can walk`);
// }
// this.speak= function(words){
//     console.log(`${this.name} say ${words}`);
// }
// this.speak = function(){
//     console.log(`I'm ${this.name} ${this.age} ${this.gender}`);
// };
// }

// Human.prototype.fullInfo= function(){
//     console.log(`I'm ${this.name} ${this.age} ${this.gender}`); // так как в 2 обьектах  есть одинаковые функци мы их помещаем в родителя(ими может пользоваться все дочерние функции)
// };
// Human.prototype.speak = function(words){
//     console.log(`${this.name} say ${words}`);
// };
// Human.prototype.walk = function() {
//     console.log(`${this.name} can walk`);
//    };
//    Human.prototype.breathe = function() {
//     console.log(`${this.name} can breathe`);
//    };

// Human.prototype.friends = ['Bob','Jack','Bill'];

//    let poly = new Human('Poly', 1,'female');
// let mango = new Human('Mango',2,'male');
// console.log(poly);
// console.log(mango);
// mango.speak('Hello');
// poly.speak('Hi');
// console.log(mango.friends);
// poly.friends.pop();
// console.log(mango.friends);
// // в prototype пишуться характеристики и переменые общие для всех, ф в конструкторе все характеристики разные для каждого.
// // __proto__ это ключ экзкмпляра в середине обьекта который создала функция кнструктор. хранится ссылка на prototype( на обьект где  берется данные) в __proto__:ссылка на данные      Human.prototype=[данные]
// // prototype это поле в середине функции конструктора.поле в середине конструктоа где храняться обьекты.

// function Ukrainian(name,age,gender,national){
// // this={};
//     Human.call(this,name,age,gender);
//     this.national=national;
// }

// Ukrainian.prototype = Object.create(Human.prototype);  // связывается 2 прототайпа.
// Ukrainian.prototype.constructor = Ukrainian; // записываем ссылку на конструктор(для себя)
// const uk = new Ukrainian('Petro',25,'male','ukrainian');
// console.log(uk);









// 1) Створити конструктор User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити конструктор Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn (рік вступу)
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран




// function User(name,surname){
//     this.name = name;
//     this.surname = surname;
    

// // this.getFullName=function() {
// //         console.log(`${this.name} - ${this.surname}`);
// //     }
// }
// User.prototype.getFullName= function(){
//     return `${this.name}  ${this.surname}`; 
// };
//     function Student(name,surname,yearIn){
//         // this={};
//             User.call(this,name,surname);
//             this.yearIn=yearIn;
            
            
//             // this.getCourse=function(){
//             //   console.log(`${this.year}-${this.yearIn}`);
//             // }
//         }
//         Student.prototype = Object.create(User.prototype);  
//         Student.prototype.constructor = Student; 

//         Student.prototype.getCourse=function(){
//             this.year=2018;
//             this.cour=this.year - this.yearIn;
//             return `Учится на ${this.cour} курсе`;
//         }
            






//         Student.prototype.getFullInfo=function(){
//        console.log(`${this.getFullName()} ${this.getCourse()}`);

//         }
//         // let poly = new User('Dima','Abramov');
//         // poly.getFullName('Dima','Abramov');
    
//         let mango = new Student('Dima','Abramov',2014);
//         mango.getCourse();
//         mango.getFullInfo();
        

                         
        
        
                          //Доп задания  1 задание
/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// function Account(login,email,friendsCount){
//     this.login = login;
//     this.email = email;
//     this.friendsCount = friendsCount;
    

// // this.getFullName=function() {
// //         console.log(`${this.name} - ${this.surname}`);
// //     }
// }
// Account.prototype.getAccountInfo=function(){
//     console.log(`${this.login} ${this.email} ${this.friendsCount}`);
// }

// let mango = new Account('Dima','Abramov@gmail.com',50);
// let poly = new Account('Natasha','Arshinova@gmail.com', 70);

// mango.getAccountInfo();
// poly.getAccountInfo();

             // 2 Доп задание
             /*
  Напишите функцию-конструктор StringBuilder.
  
  На вход она получает один параметр string - строку.
  
  Добавьте следующие методы в prototype функции-конструктора.
  
    - getValue() - выводит в консоль текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/


// function StringBuilder(string = "") {
//     this.value = string;
//   }

//   StringBuilder.prototype.getValue=function(){
//       console.log(`${this.value}`);
//   }
//   StringBuilder.prototype.append=function(str){
//       this.str = str;
//     console.log(`${this.value} ${this.str}`);
// }
// StringBuilder.prototype.prepend=function(str){
//     this.str = str;
//     console.log(`${this.str} ${this.value}`);
// }
// StringBuilder.prototype.pad=function(str){
//     this.str = str;
//     console.log(`${this.str} ${this.value} ${this.str}`);
// }

// let mango = new StringBuilder('Dima');
// mango.getValue();
// let pole = new StringBuilder('Dima');
// pole.append('Abramov');
// pole.prepend('Natasha');
// pole.pad('Anton');


// Просто задача

// let books = [];
// let order = [];
// Part 1
// Створити конструктор Book який створює обєкти такого типу {title: title, author:author, pages: pages, price: price, curentPage: 0};
// Помістити в прототип метод  buy(arr) який приймає аргументом масив order додає ціну книжки в нього.
// Помістити в прототип метод read(num) який приймає аргументом кількість сторінок що прочитано і змінює значення поля curentPage;
// Створити 3 обєкта книжки викликати для них методи buy() та read(num); 
// Порахувати загальну вартість замовлення з масива order.
// Вивести в консоль змінене значення поля curentPage після запуску методів read(num); 
// Всі куплені книги додати в масив books.
//  Part 2
// Створити ф-ю констпуктор E-Book який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле fileSize де вказується розмір книги в кілобайтах.
// Додати в прототип E-Book метод download() який при виклику виводить в консоль напис 'Book {title} has been dowloaded, app was downloaded {fileSize} kb';
// Створити 2 книги конструктором E-Book і викликати для них метод buy(arr) щоб додати їх до масиву order.
// Викликати для них метод download()
// Part 3 
// Створити корструктор PapperBook який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле cover.
// Додати в прототип PapperBook метод burn(arr) який приймає аргументом масив books з частини №1 при виклику виводить в консоль напис 'Book {title} has been burned' і видаляє з масива books ту книгу для якої викликаємо цей метод.

// Створити 3 книги конструктором PapperBook і викликати для них метод buy(arr) щоб додати їх до масиву order.
// Викликати для першої і другої книги методи burn(arr), щоб видатити їх з масива order


let books = [];
let order = [];

function Book(title,author,pages,price){
    this.title =title;
    this.author=author;
    this.pages=pages;
    this.price=price;
    this.curentPage = 0;
}
Book.prototype.buy=function(arr){
  arr.push(this.price);
  books.push(this.title);

}

Book.prototype.reed=function(num){
    this.curentPage=num;
}
let mango = new Book('Серый кукловод','Роман Цуканов', 500,250)

mango.buy(order);
mango.reed(50);
console.log(mango);
let pole = new Book('Каждой твари по паре','ика Ерш', 800,450)

pole.buy(order);
pole.reed(150);
console.log(pole);
let poly = new Book('Проект Любовь','Мария Геррер', 650,300)

poly.buy(order);
poly.reed(70);
console.log(poly);

let sum=order.reduce((acc,el)=>acc+el,0)
console.log(sum);
console.log(books);

