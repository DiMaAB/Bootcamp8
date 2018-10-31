// let a = 10;
// let b = 20;
// function show{
//     let a = 50;
//     console.log(a);
//     console.log(b);
// }


// function counter(){
//     let count = 0;

// function increment(){
//     count++;
//     // console.log(count);
//     return count;
// }
// return increment;     // из-за того что нету скобочек возвращает тод функции increment.
// }
// let user = counter();
// user();     // получает данные с функции штскуьуте т.к.  не находит идет в функцию counter и увеличивает счетчик на 1.
// let user2 = counter();





// const  HOTEL_NAME  = 'Resort Hotel';
// const STARS = 5;
// const STATUS = 'LUX';
// const ROOM_NUMBERS = 100;


// let hotel = ['Resort Hotel' ,5 ,'LUX', 100];

// const HOTEL = {
//     name: 'Resort Hotel',
//     stars: 5,
//     status: 'LUX',
//     capacity: 100, //можно еще так писать 'room-numbers' если ключи задавать строкой то и все ключи надо задавать строкой (в кавычках)
// };

// console.log(HOTEL.name);  // получаем данные с ключа name.
// console.log(HOTEL.stars);
// //можно еще так.
// console.log['status']; // если название ключа попадает как функция или в фрмате переменой. или мы не знаем какое название ключа придет(откуда-то внешне)

// let key = 'status'
// console.log(HOTEL[key]); // ищим ключ который приходит в ввиде переменной и она может находиться вне обьекта.Или мы ищим переменую(в данном случаи выведится status)
// console.log(HOTEL.key);  // мы ещим в обьекте ключ key т.к. его нету будет андерфаинд.

// HOTEL.manager = 'Chack Noris'; // добавляет в массив.
// HOTEL.stars =10; // если такое поле есть то перезаписывает данные.
// delete HOTEL.stars;
// console.log(HOTEL);


// let name = 'Dima';
// let stars = 5;

// const hotel= {
//     name: name,
//     stars: stars,
// };
// // или можно так(более укороченой вариант)
// const hotel ={
//     name,
//     stars,
// }


// const hotel = {
//     name: 'Resort Hotel',
//     stars: 4,
//     pool: {
//         volume: '50m',
//         temp: '25C',
//     }
// };

// let hasStars = hotel.hasOwnProperty('pool');
// let hasPool = 'pool' in hotel; // находит есть ли такой ключ в обьекте.
// console.log(hasStars);



// const BMW ={
//     wheels: 4,
//     color: 'red',
//     year: 2018,
//     model: 'X5',
//     fullComplect: false,
//     move: function(){
//         console.log('Im move'); // добавление функции в обьект
//     },
//     stop(){
//         console.log('Stoped'); // более укороченая запись.
//     }
// }
// BMW.move(); // вызов функции из обьекта.
// BMW.stop();


// const  obj1= {
//     name: string
// };

// let obj2 = abj1; //не создает копию а создает переменую которая ссылаетс на один и тотже обьект(как работа в гугл ворд)
// obj1.age = 50;
// console.log(obj1);
// console.log(obj2);





// let user ={
//     name: 'Bob',
//     age:45,
//     isHappy: true,
// }


// let user2 = Object.assign({},user);

// user.age = 40;
// console.log(user2);
// console.log(user);

// const first={name: 'Tony'};
// const last = {lastName: 'Stark'};
// Object.assign(first,last); //обьединение массива.



// ...//распределение обьекта
// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};

// const c = Object.assign({},a,b);

// const c={
// ...a,  // x:0,y:2,z=3,d=2000;
// ...b,
// d:2000,  //копирование обьекта
// };


// let hotel = {
//     name: '7 Days',
//     stars: 4,
//     rooms:150,
// };
// for (let key in hotel){  
//     if(hotel.hasOwnProperty(key)) // в key попадает название ключей
//     // console.log(key);
//     // console.log(hotel[key]);
//     // или 
//     console.log(`${key}:${hotel[key]}`);
// }


// const keys = Object.keys(hotel);  /// ключи обьектов
// const values = Object.values(hotel); // значения обьектов
// const entries = Object.entries(hotel);
// console.log(entries);
// console.log(values);

// let hotel ={
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity:100,
// };
// let name = hotel.name;  // разбивает на переменные(не удобно)
// let stars = hotel.stars;
// let capacity = hotel.capacity;
// // упращеная запись
// const { name,start,capacity} = hotel; // разбирает на переменные (удобно)
// console.log(name);





// let dog = {
//     name: 'Mango',
//     age: 5,
//     isHappy: true,
// };

// function showObjVal(obj) {
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.isHappy);
// }

// showObjVal(dog);

// function showObjVal({name, age, isHappy}) {
//     console.log(name);
//     console.log(age);
//     console.log(isHappy);
//     // return `dog name is ${name} age is ${age} happy ${isHappy}`;
// }
// //
// showObjVal(dog);


// let strNum = ['one','two','three'];
// let[a,b,c] = strNum;
// console.log(a);
// console.log(b);
// console.log(c);








/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };

//   user.mode = 'happy';
//   user.hobby = 'javascript';
//   delete user.premium;
//   for(let key in user){
//       if(user.hasOwnProperty(key)){
//       console.log(`${key}: ${user[key]}`);
//   }
// }

// for(let key of Object.keys(user)){
//     console.log(`${key}: ${user[key]}`);
// }


// const entries = Object.entries(user);
// for(let entry of entries) {
//  const key = entry[0];
//  const value = entry[1];
//  console.log(`${key}: ${value}`)
// }








/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };
//   let num =0;
//   let kluch ;
//   for( let key in tasksCompleted){
//       if(num < tasksCompleted[key]){
//           num = tasksCompleted[key];
//           kluch=key;
//       }
//   }
//   console.log(`${kluch} :${num}`);















/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
console.log(
    countProps({})
  ); // 0
  
  console.log(
    countProps({a: 1, b: 3, c: 'hello'})
  ); // 3
  