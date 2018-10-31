// let arr = [52, 23,12,10];
// let arr2 = new Array(2, 5 ,10); // второй способ создания массива.
// console.log(arr);

// let firstArray = [1,2,3,4,5,6,10,9,5];
// console.log(firstArray.length);   // определяем длину массива.
// console.log(firstArray[1]);  // обращение к элементу массива.


// let arr = [1,2,3,4,[1,2,5,9,12,15,[23,24,124,2,[34.3,5,98,['Error']]]]];

// console.log(arr[2]);
// console.log(arr[4] [3]);
// console.log(arr[4] [6] [2]);
// console.log(arr[4] [6] [4] [3] [0]);


// let firstArray = [1,2,3];
// console.log(firstArray[0]);
// firstArray[0] = 100;
// console.log(firstArray)     //  замена элемента массива.


// let firstArray = ['Іван', 'Вася','Сергій'];
// firstArray.push('Петро','Іраклій');
// console.log(firstArray);  // добавление в массив.


// let class1 = ['Іван', 'Вася','Сергій'];
// let class2 = ['Ідан','Дарій','Наполеон'];
// class1.push('Петро','Іраклій');  //добавляет в конец массива.
// let user = class1.pop();  // удаляет с конца массива.
// console.log(user);
// console.log(class1) ;
// class2.push(user);
// console.log(class2);



// let firstArray = [1,2,3,4];
// console.log(firstArray.shift());  //удаляет в начале массива.
// console.log(firstArray);



//  let firstArray = [1,2,3,4];
//  console.log(firstArray.unshift(27,52));  //добавлет в начало массива.
//  console.log(firstArray);


// let firstArray = [5,8,13,14,25,26,98,75];
// let lengthArr = firstArray.length;
// console.log(firstArray[lengthArr-1]); // обращение впоследнему элементу массива.



// let firstArray = ['abc', 'h', 'b', 'd','f','h','j'];
// console.log(firstArray.indexOf('b'));
// // console.log(firstArray.indexOf('abc')); // показывает какой индекс у элемента.
// // console.log(firstArray.indexOf('h'));
// // console.log(firstArray.indexOf("q"));
// // console.log(firstArray.indexOf('y'));


// let firstArray = [11, 112, 23, 45];
// console.log(firstArray.includes(23));
// console.log(firstArray.includes(150)); //показывает есть ли в массиве такое значение.



// let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col']
// let log = prompt('Enter logins');
// if(logins.includes(log)){
//     alert('Такий логін вже існує')
// }else{
//     alert('Вітаємо')
//     logins.push(log);
//     }
// console.log(logins);

//тоже самое тоько через тернальность.
// let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col'];
// let log = prompt('Enter logins');
// logins.includes(log) ? alert('Error') : alert('Good');

// 1) Запитати логін через prompt
// 2) Перевірити чи існує логін в масиві logins
// 3) Якщо логін існує вивести алерт ("Такий логін вже існує")
// 4) Якщо логін не існує вивести алерт ("Вітаємо")





// let firstArray = [10, 8, 7, 5];
// let secondArr = [12, 13, 16, 19, 87];
// let newArray = ['add me', 'join us'];
//  //обьединение массивов(добавление всего в 1 массив) обязательно надо задавать новый массив!!!(пред concat мы указываем с какого массива начинать).
// let result = firstArray.concat(secondArr,newArray);
// console.log(result);
 // console.log(firstArray);
 // console.log(newArray);



// slice and splice
// slice start index and end index do not includes
// splice start index and how many  // меняет оригинальные данные

// let arr = [5, 10, 12, 15, 25];
// let newArr = arr.slice(2,4);  // в скобачказ с какого и до какого элемента работать не включая последний индекс.
//                                 // создает копию массива( лучше всего делать копию а потом изменять ее т.е. сначала slice(), а потом splice).    
// let arr3 = arr.slice(3);  
// console.log(arr3) 
// console.log(newArr);


// let arr = [1, 5, 9, 8, 7, 10];
// // // delete
// let x = arr.slice();
// x.splice(2,1);  // вырезать из массива элемент(в скобачках 1 цифра-индекс с какого элемента вырезать , 2 цифра сколько элементов)
// // console.log(arr);
// console.log(x);
// x.splice(2,0,999)
// console.log(x);
// x.splice(2,2,13) // в скобачках 1 цифра с какого элемента начать(указываем его индекс) 2 цифра сколько элементов вырезать(еслиничего то ничего не вырежиться 3 цифра значение элементов каких нужно добавить)
// console.log(x);
// // // paste
// // let a = arr.splice(4, 1, 'b','c','f');
// // arr.splice(1, 0, 'javascript');
// // console.log(arr);
// // // replace
// // arr.splice(5, 1, 'abc');
// // console.log(arr);
// // arr.splice(1, 4, 'java', 'script');
// // console.log(arr);

// let arr = [1, 5, 9, 8, 7, 10];
// let newArr = arr.slice().reverse(); // реверс делает в массиве(лучше перед этим создать копию массива)
// console.log(arr);
// console.log(newArr);





// let string = prompt("Введите полиндром");
// let arr = string.split('');      //переводит из строки в массив
// let newArr = arr.slice().reverse().join();

// if(arr==newArr){
//     alert('Полиндром')
// }else{
//     alert('Не полиндром')
// }



// //Вывести рамдомное животное

// let animals = ["cat","dog","rabbit","bird","fish"];
// let arr = animals.length;
// let user = Math.floor(Math.random()*arr);
// alert(animals[user])

// 

// let animals = ["cat","dog","rabbit","bird","fish"];
// let arr = animals.length;
// let index = Math.floor(Math.random()*arr);
// alert(animals[index])
// // let comp = ;
// let user = prompt('Введи животное')
// if(animals[index]==user){
//     alert('Ты выграл')
// }else{
//     alert('Ты проиграл')
// }







// /*
//   Есть массив имен пользователей.
//   В первом console.log вывести длину массива.
  
//   В последующих console.log дополнить конструкцию
//   так, чтобы в консоль вывелись указаные в комментариях 
//   элементы массива.
// */

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length); // 4

// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax




// /* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// // Удалить из начала массива нулевой элемент
// users.shift(0);
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить из конца массив последний элемент
// users.pop();
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива любое имя
// users.unshift('Dima');

// console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// // Добавить в конец массива два любых имени за одну операцию
// users.push('Dima','Vova')
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]



// Написати гру Камінь Ножиці Папір.
// Варіанти вибору потрібно зберігати в масиві
// Користувач вводить свій варіант
// Компютер вибирає свій рандомний варівант з масиву
// Первіряємо вибір користувача і вибір компютера. 
// Опрацювати всі варіанти:
// 1) Варіанти де виграє користувач
// 2) Варіанти де виграє компютер
// 3) Варіанти де виходить нічия.

let game = ["камень","ножницы","бумага"];
let arr = game.length;
let index =game[ Math.floor(Math.random()*arr)];
// alert(index)

let user = prompt('Введи камень или ножницы или бумагу')
if( user=='ножницы'&&index=='бумага'|| user=='камень'&&index=='ножницы'||user=='бумага'&&index=='камень'){
    alert('Ты выграл')
}else if(user=='камень'&& index=='бумага' || user=='бумага'&&index=='ножницы'|| user=='ножницы'&&index=='камень'){
    alert('Ты проиграл')
}else if(user==index){
    alert('Ничья')
}else if(user==null){
    alert('Приходи еще')
}else{
    alert('Вы ввели неправильное значение')
}