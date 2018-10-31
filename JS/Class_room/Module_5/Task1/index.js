// let numbers =[10,2,4];
// console.log(numbers);
// let result = arr.method(function(num,index,arr){
//     num>arr[index+1]
// })

// let money = [500,800,100,400,1000];
// let result = [];
//     for(let al of money){
//         result.push(el*0.7);
// }
// console.log(result);

 // map создает копию оригинального массива, и делает изменения которые нужно(пушит в новый массив, который сам создает).В мап есть 3 параметра 1 элемент, 2 индек, 3 новый массив.(обязатеьно надо указать 1 элемент)
// map переберает все элементы массива.

 // let result = money.map(function(el){
//     return el*0.7;
// })
// console.log(result);
// тоже самое только через стрелочные функции.
// let result = money.map(el=>el>500 ? el*0.7 :el);
// console.log(result);




// const inventors = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }
// ];


// let result = [];    
// for(let el of inventors){
//     result.push(el.first);
// }
// console.log(result);
// второй способ через map.
// let result = inventors.map(function(el){
//     return el.first;
// })
// // через стрелочную функцию
// let result = inventors.map(el=>el.first);




// const numbers = [250, 1, 10, 3, 25, 5, 60, 7, 12, 9];
// let result = [];
// for(let el of numbers){
//     if(el<10){
//         result.push(el)
//     }
// }
// console.log(result);

// let result = numbers.filter(function(el){
//     if(el<=10){
//         return el;
//     }
// });

// let result = numbers.filter(el=>{
//     if(el<10){
//     return el;
//     }
//  });
// еще 1 способ
// let result = numbers.filter(el=>el<=10 ? el : null)
// // или так)
// let result = numbers.filter(el=>el<=10) // если при этом условии true мы записываем в новый массив если false то ничего не делаем(это вшито в этот метод)




// const inventors = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }
// ];
// //найти людей которые родились в 15 столетии.
// let result = inventors
// .filter(el=>el.year>=1500 && el.year<1600)
// .map(el=>el.first);  
// console.log(result);// фильтр выводит на экран весь обьект который удовлетворет условию(нельза вытянуть отделано какой-то ключ) для того что-бы вывести 1 значение массива (в данном случаи имя) мы добавляет map/






// const numbers = [0, 1, 10, 3, 25, 5, 60, 7, 12, 9];
// let result = numbers.find(el=>el>5);  // находит и выводит тоkько первый найденый и удовлетворяющее условию элемент.
// console.log(result); // испоьзуется для вытягивания уникального элемента.



// const temperature = [25, 15, -10, 28, 5];
// let result = temperature.every(el=>el>0); // чтобы было true надо что-юы все элементы массива удовлетворяли условию.(еси хотябы 1 элемент массива не удовлетворяет условию то будет false )
// console.log(result);
// let result = temperature.some(el=>ae>0); // будет true если хотябы 1 элемент удовлетворяет условю.

// // reduse  оьединяеет массивы или строки или оьбектов(допустим мы добавляем в крзину несколько товаров и он выводит сразу сумму) обязательно должно быть 2 параметра 1 - функци(в которой тоже обязательно должно быть 2 параметра) 2 -начальное значение аккамулятора.
// // Задание обьединить все элементы массива
// const numbers = [250,1,10,1];
// let result = numbers.reduce(function(acc,element){
//     return acc+element;
// },0)  // 0 это начаьное значение аккамулятора(асс еси работаем с цифрами можно не писать) если обьекты то надо ставить начальное значение обязательно(в данном случаи 0, если работаем со строками то то вместо 0 пишем '')
// console.log(result)// при 1 проходе асс=0 element=250 при 2 проходе асс=250 element=1 при 3 асс=251 element=10 и. т. д.
// //тоже самое только через стрелочную функцию
// let result = numbers.reduce((acc,el)=>acc+el,0);
// console.log(result);




// const hoursWorkedPerWeek = [
//     {day: 'M',number: 9},
//     {day: 'T',number: 10},
//     {day: 'W',number: 11},
//     {day: 'T',number: 5},
//     {day: 'F',number: 12}
//     ];
// //найти сумму numbers
//     let result = hoursWorkedPerWeek.reduce((acc,el)=>acc+el.number,0);
//     console.log(result);
    


// //sort сртировка если строки то по алфовиту или наоборот , если число то по возрастанию или по убыванию.(изменяет исходный массив)
// const numbers = [1, 250, 10, 3, 25, 5, 60, 7, 12, 9];
// numbers.sort(function(a,b){
//     if(a>b){
//         return 1
//     }else{
//         return -1
//     }            // если условие верное то возвращается положительное число(в данном случаи 1 можно поставить любое положительное число) и если при проверки возвращается положительное число то перемена а поменяется местами с переменой в, если возвращается отрицательное то ничего е делает
// })

// numbers.sort(function(a,b){
//     return a-b;  // в порядке возрастания(b-a в поряде убывания)
// })
// //тоже сомое тоько через стрелочные функции
// numbers.sort((a,b)=>a-b);




// const words = ['a', 'q', 'b', 's', 'z'];
// // words.sort();// сортировка по алфавиту(подходит только если строки)
// // words.sort().reverse;// сортировка в обратном порядке (подходит только если строки)
// // console.log(words); 

// words.sort((a,b)=>a>b)  //еще 1 способ сотрировки по алфовиту(если поставить a<b то будет в обратном порядке)(используется когда обьекты то в а и b попадает обекты и что-бы обратмться к элементу обькта мы пишем a.name (name название ключа можно поставить любой ключ)
// console.log(words); 

// words.sort((a,b)=>a>b ? 1 : -1); // если предыдущий способ не работает используем этот универсальный способ.
// console.log(words); 













// const scientist = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
// },
// {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
// },
// {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
// },
// {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
// },
// {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
// },
// {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
// },
// {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
// },
// {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
// },
// {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
// },
// {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
// },
// {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
// },
// {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
// }
// ];

// 1) отримати масив вчених що народилися в 19 ст
// let result = scientist.filter(el=>el.year>=1800 && el.year<1900)
// console.log(result);//
// 2) знайти суму років скільки прожили всі вченні
// let result = scientist.reduce((acc,el)=>acc+el.year,0)
// console.log(result);
// 3) Відсортувати вчених по алфавіту
// scientist.sort((a,b)=>a.first>b.first ? 1 : -1)  
// console.log(scientist);
// 4) Відсортувати вчених по даті народження
// scientist.sort((a,b)=>a.year-b.year)  
// console.log(scientist);
// 5) Відсортувати вчених по кількості прожитих років
// let result = scientist.sort((a,b)=>a.passed-a.year>b.passed-b.year ? 1 : -1);
// console.log(result);
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// let result = scientist.filter(el=>el.year<=1400 || el.year>1700)
// console.log(result);
// 7) Знайти вченого який народився найпізніше.
// let resylt = scientist.sort((a,b)=>b.year-a.year); 
// console.log(resylt[0]);
// 8) Знайти рік народження Albert Einstein
// let result = scientist.find(el=>el.first==='Albert'&& el.last==='Einstein');  
// console.log(result.year); 
// 9) Знайти вчених прізвище яких починається на літеру С

// let result = scientist.filter(el=>el.last[0]==='C')
// console.log(result);
// 10) Видалити з масива всіх вчених імя яких починається на A
// let result = scientist.filter(el=>el.first[0]!=='A')
// console.log(result);

                



                             // 5 модуль доп задания
  /*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => {
//     const result = [];
  
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       if (arr[i] > num) {
//         result.push(arr[i]);
//       }
//     }
  
//     return result;
//   };
//упрощенный вариант
// const findGreaterThan = (num, arr) => {
//  return arr.filter(function(el) {
//         if (el > num) {
//             return el;
//         }
//     })
// };
// еще более короткий вариант
// const findGreaterThan = (num, arr) =>arr.filter(el=>el>num)

  
//   console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
//   console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
//   console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
  
//   /* 
//     Функция multiplyBy принимает два аргумента - число и массив. 
//     Возвращает массив все значения которого умножены на число.
//   */
//    const multiplyBy = (num, arr) => {
//      let result = [];
  
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//      result.push(arr[i] * num);
//    }
  
//     return result;
//   };
              // Решение
//   const multiplyBy = (num, arr) =>arr.map(el=>el*num)

//   console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//   console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//   console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
  
  /* 
    Функция summAllNumbers принимает любое число аргументов.
    Возвращает число - сумму всех аргументов.
  */
//   function summAllNumbers(...args) {
//     let accumulator = 0;
  
//     for (let i = 0, max = args.length; i < max; i += 1) {
//       accumulator += args[i];
//     }
  
//     return accumulator;
//   }
//             // Решение
//   const summAllNumbers = (...args) =>args.reduce((acc,el)=>acc+el,0)

//   console.log( summAllNumbers(1, 2, 3) ); // 6
//   console.log( summAllNumbers(1, 2, 3, 4) ); // 10
//   console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
  
  /* 
    Функция findEvery получает два аргумента - число и массив.
    Возвращает true если все элементы массива больше или равны числу.
    Иначе если есть хоть один элемент меньше числа, то возвращается false.
  */
//   const findEvery = (num, arr) => {
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       if (arr[i] < num) {
//         return false;
//       }
//     }
  
//     return true;
//   };
//                      //Решение
//   const findEvery = (num, arr) =>arr.every(el=>el<num ? false : true)

//   console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//   console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//   console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true

                         // 2 Задание
                         /*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
  
//  const  getPropValues = (arr,prop)=>arr.map(el=>el[prop])
//   // Вызовы функции для проверки
//   console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
  
//   console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
  
//   console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
                  
               // 3 Задание
               /*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
//   ];
  
//     const setGuestState = (guests, period)=>guests.map(el=>el.inactiveDays<period ?isActive=true : isActive=false)
//   // Вызовы функции для проверки
//   console.log(
//     setGuestState(guests, 10)
//   ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
  
//   console.log(
//     setGuestState(guests, 20)
//   ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
  
//   console.log(
//     setGuestState(guests, 50)
//   ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

                           // 4 Задание

                           /*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.
         
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
  
//   const getActiveGuests = (guests)=>guests.filter(el=>el.isActive===true)

//   // Вызовы функции для проверки
//   console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
  

                       // 5 Задание
                       /*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
  
//   const getGuestsOlderThan = (guests, age)=>guests.filter(el=>el.age>age)

//   // Вызовы функции для проверки
//   console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
  
//   console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
  
//   console.log(getGuestsOlderThan(guests, 55)); // []


                        //6 Задание
                        /*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
//   ];

//   const getGuestById = (guests, id)=>guests.find(el=>el.id===id)
  
//   // Вызовы функции для проверки
//   console.log(
//     getGuestById(guests, 3)
//   ); // {id: 3, name: 'Ajax', age: 30}
  
//   console.log(
//     getGuestById(guests, 1)
//   ); // {id: 1, name: 'Mango', age: 20}
  
//   console.log(
//     getGuestById(guests, 5)
//   ); // undefined
  

                  // 7 Задание
                  /*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 



// const order = {
//     bread: 10,
//     apples: 25,
//     chicken: 60,
//     milk: 15,
//     cheese: 40
//   };
  
//   let arr = Object.values(order)
//   let result = arr.reduce((acc,el)=>acc+el,0);
//   console.log(result); // 150
  

                     // 8 Задание
 /*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  PS: используйте метод reduce
*/

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    cheese: 30,
    chicken: 40
  };
  
  const orderA = {
    bread: 2,
    apples: 4,
    chicken: 1
  };
  
  const orderB = {
    bread: 1,
    milk: 2,
    cheese: 3
  };
  const getTotalPrice=(products,order)=>{
  let arr =[];
//   console.log(order);
 for(let key in order){
    arr.push(order[key]*products[key])
//  console.log(arr); 
}
//  return arr;
let result = arr.reduce((acc,el)=>acc+el,0)
return result;
}
//вы функции для проверки
  console.log(getTotalPrice(products, orderA)); // 140
  
  console.log(getTotalPrice(products, orderB)); // 130
  


                     //9 Задание
                     /*     
  Напишите функию allGuestsActive(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать true если значение поля isActive 
  всех объектов true, в противном случае false.
  
  PS: используйте метод every или some, никаких for!
*/

// const guestsA = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true }
//   ];
  
//   const guestsB = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: true },
//     { name: "Ajax", isActive: true }
//   ];
  
//   const allGuestsActive=(guests)=>guests.every(el=>el.isActive===true)

//   // Вызовы функции для проверки
//   console.log(allGuestsActive(guestsA)); // false
  
//   console.log(allGuestsActive(guestsB)); // true
  