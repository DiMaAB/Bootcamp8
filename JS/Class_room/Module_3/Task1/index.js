// function addTwoNumbers(){
//     console.log(5+6);
// }

// addTwoNumbers();


// const addTwoNumbers = function(){  //второй способ создания фукнции.( в таком случи вызывать ее можно только после обьявления)
//     console.log(5+6);
// }
// addTwoNumbers();



// function addTwoNumbers(){
//     let result =5+6;
//     return result;
// }

// console.log(addTwoNumbers());


// function addTwoNumbers(a,b){
//     let result = a+b;
//     return result;
// }
// addTwoNumbers(5,6)


// const century = function(year){  // определяет какой сейчас год.
//     return Math.ceil(year/100);
// }  
// console.log(century(1958));
// console.log(century(2018));
// console.log(century(1548));




// function add(){   // создаетя псевдо массив, (используется если мы не знаем сколько элементов нам надо передать или количество ожет меняться)
//     console.log(arguments);
//     let arr =Array.from(arguments);  // создает псевдо-массив из аргументов.
//     let total =0;
//     for(let element of arr){
//         total+=element;
//     }
//     return total;
// }

// add(5,10,20);
// console.log(add(10,20,30));



// function connect(par1=3,par2=5,par3=100){  // можно задавать параметры по умолчанию, но если мы передаем параметры то они заменят стандартные, а если мы не передали ничего то перется параметр по умолчанию.(если у нас 3 параметра а мы передали 1 и 3 то во 2 возмется значение по умолчанию, если нету параметра по умолчанию будет underfied)
//     return par1 + par2 + par3;
// }
//     connect(5,6);
//     connect(null,2); // первій раз передаетс null (проускает 1 параметр или любой параметр зависит где стоит null) в даном случаи будет 102(1 параметр мы пропускаем, второй стает 2 а 3 по умолчанию 100)




/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// // Вызовы функции для проверки
// function checkNumberType(num){
//     if(num%2==0){
//         return 'Even'
//         // alert('Even')
//     }else{
//         return 'Odd'
//         // alert('Odd')
//     }
// }
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'








/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// Вызовы функции для проверки
// function formatString(str){
    
//     if(str.length<=40){
//         return str;
//     }else{
//         let cut = str.slice(0,40); // slice для строки вырезает как splice для масивов.
//         return cut+'...'
//     }
// }
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка
  
//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка










/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки
// function checkForSpam(str){
//     if(str.toLowerCase().includes('span') || str.includes('sale')){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true






/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/
// function getPx(str){
//     if(typeof(str)==='string'){
//        return Number.parseFloat(str)
//       }else{
//           return null;
//       }
// }


// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null








// /*  
//   Создайте фукнцию findLongestWord(str),
//   которая получает аргументом произвольную строку и
//   возвращает самое длинное слово в этой строке.   
  
//   Важное условие - в строке могут быть только пробелы
//   и символы букв и цифр!
// */
// const string = "May the force be with you";
// function findLongestWord(str){


// let arr = str.split(' ');
// let longestWord = arr[0];
// let count = arr[0].length;
// for(let i=0;i<arr.length;i++){
// if(arr[i].length > count){
//     count = arr[i].length;
//    longestWord=arr[i];
// }
// } 
// return longestWord;
// }


// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // вернет 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // вернет 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // вернет 'force'












/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// function findLargestNumber(numbers){
// // let arr = numbers.split(' ');
// let longestWord = numbers[0];
// // let count = arr[0].length;
// for(let i=0;i<numbers.length;i++){
// if(numbers[i] > longestWord){
//     // count = arr[i].length;
//    longestWord=numbers[i];
// }
// }
// return longestWord;
// }

// // Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // вернет 3
  
//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // вернет 27
  
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // вернет 128
  
  
  









/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/
// const uniqueNumbers  = [2, 1, 4, 9];
// function addUniqueNumbers(){
//     let arr =Array.from(arguments);
//     // console.log(arr);
//     for(let element of arr){
//         if(!uniqueNumbers.includes(element)){
//             uniqueNumbers.push(element);
//     }
   
//     }
//     return uniqueNumbers;
// } 

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
  







/*
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/
// function removeFromArray(arr){
//     // console.log(arr);
//     let newArr =Array.from(arguments).slice(1);
//     // console.log(newArr);
//     for(let element of newArr){
//         if(arr.includes(element)){
//             arr.splice(arr.indexOf(element),1);
//         }
//     }
//     return arr;
//  }
// // Вызовы функции для проверки
// console.log(
//     removeFromArray([1, 2, 3, 4, 5], 2, 4)
//   ); // [1, 3, 5]
  
//   console.log(
//     removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
//   ); // [12, 8, 17]








/*
Написати ф-ю convertToRem(px) яка приймає строку і повертає значення в rem
console.log('16px'); // 1rem
console.log('24px'); // 1.5rem
console.log('0px'); // 0rem
*/
function convertToRem(px){
    
    return parseFloat(px) /16+'rem'
}
console.log(convertToRem('16px')); // 1rem
console.log(convertToRem('24px')); // 1.5rem
console.log(convertToRem('0px')); // 0rem







// let a=10;  //  область видимости активируется только при ее вызове(и поик параметров происходит в этой функции, если нету то едет в своего родителя(если такой есть) родитель не может идти в дачернюю функцию)
// let b = 20;
// function showNumber(){
//     let a=50;
//     console.log(a);
//     console.log(b);
// }
// showNumber();