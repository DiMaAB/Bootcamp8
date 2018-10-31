// let number = 0;
// let arr = [];

// while(number<=3){
//     let result = +prompt('Enter number');
//     arr.push(result);
//     number += 1
//     }
// console.log(arr);


// let number = 0;
// let arr = [];
// while (number < 4) {
//     let userNumber = prompt('Enter number');
//     if(userNumber !== null && userNumber !== '') {
//         if(Number(userNumber) === 9){
//             alert('9 плохое число');
//             // number+=1;
//         continue  // пропускает итерацию
//     } else {
//       arr.push(Number(userNumber));
//       number+=1;
//     } 
// }else{
//     break
// }
// }
    
// console.log(arr);



// let number = 1;
// do{                       // полюбому 1 раз цикл.
//     console.log(number);
//     number++;
// } while(number<5);


// while(number<5){
//     console.log(number);
//     number++;
// }


// let arr = []
// for(let i =0; i<10;i++){
//     let number = prompt('Enter string');
//     arr.push(number);
// }
// console.log(arr);


// let arr = [5, 10, 25, 68, 78, 95];
// let arrTenPrc = [];
// for(let i=0,max = arr.length; i<max; i++){
//     arrTenPrc.push(Number((arr[i]*1.1).toFixed(2)));
// }
// console.log(arrTenPrc);



// let arr = [5, 10, 25, 68, 78, 95];  //element это элемент массива в этом цикли уже встроеные условия(с шагом 1 и до конца цикла)
// arrTenPrc = [];
// for(let element of arr){
//     arrTenPrc.push(Number((element*1.1).toFixed(2)));
// }




// /*
//   Попросить пользователя ввести произвольную строку
//   и записать ее в переменную string
  
//   PS: для перебора массива используте цикл for или for...of
// */
//  let string = prompt('Введите данные');
//  let arr=[];
//  // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
//  console.log( arr=string.split(' '));

// // Вывести в консоли общую длину массива arr
//  console.log(arr.length);

//  // Используя цикл, вывести в консоль все индексы массива arr
//   for(i=0, max=arr.length; i<max; i++){
//       console.log(i)
//   }
//  // for(let element of arr){     // второй способ решени задачи(только при for of при повторяющихся элементах у них одинаковые индексы)
// //   console.log(arr.indexOf(element));
// //  }                                  
// // Используя цикл, вывести в консоль все элементы массива arr
// for(let element of arr){
//  console.log(element);
// }
//  // Используя цикл, bывести в консоли все пары индекс:значение массива arr
//  for(i=0, max=arr.length; i<max; i++){
//  console.log((i),':',(arr[i]));
//  }












/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/

// do{
//      user = prompt('Введие число больше 100')
   
// } while(user<100 && user!==null)
    

    

   /*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;
// let b;
// for(i=min;i<max;i++){
//     if(i%3===0){
       
//         b='Fizz'
//     }else if(i%5===0 && i%3!==0){
//         b='Buzz'
//     }else{ 
//             b=i;

// }console.log(b)
// }


// второй вариант решения
// const min = 1;
// const max = 100;
// for (let i = min; i<=max; i+=1) {
//     if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }





/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for(let element of numbers){
//     if(element>10){
//         newArray.push(element);
//     }
// }console.log(newArray)





/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/


// const string = "May the force be with you";

// let arr = string.split(' ');
// let longestWord = arr[0];

// let count = arr[0].length;
// for(let i=0;i<arr.length;i++){
// if(arr[i].length > count){
//     count = arr[i].length;
//    longestWord=arr[i];
// }
// }
// console.log(longestWord); // 'force' 


/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  
  - Заканчивает запрашивать числа, как только посетитель введёт не число 
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод, 
    это разрешённое число.
  
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

// let user;
// let arr = [];
// let sum =0;
// do{
//      user = prompt('Введите числа');
//      if(!isNaN(user)&& user!==null){
//     arr.push(+user);
// }

// } while(!isNaN(user) && user!==null)
// console.log(arr)

// if(arr.length<=0){
//     alert('Вы ничего не ввели')
// }else {
//     for(let element of arr){
//         sum += element;
//     }
// } console.log(sum)








/*
  ***ЗАДАНИЕ ПОВЫШЕНОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

const numbers = [12, 15, 25, 37, 41];
let arr=[]
const min = 12;
const max = 41;
if(isNaN(min)&&isNaN(max)){
    alert('Введино не число')
} else{
  for(i=0;i<numbers.length;i++){
      if(numbers.includes(min) || numbers.includes(max)){
            alert('Поздравляю вы выграли');
            break;
      }else{
          alert('Сожалеем, вы не угадали');
          break;
      }
  }
}