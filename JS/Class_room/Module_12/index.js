// let x=5;
// ;(function(){
//     let x=10;
//     let y=20;
//     console.log(x);
//     console.log(y);
//     function add (a,b){
//         return a+b
//     }
//     console.log(add(5,10));
// })();
// // console.log(x);
// // console.log(y);

// // Anonymous closure

// const globalVar = 'I am a global variable!';

// (function () {
//     // Переменные и методы внутри будут приватными
//     const grades = [80, 45, 75, 64, 53, 82];

//     const average = () => {
//         const total = grades.reduce((acc, grade) => acc + grade, 0);

//         return `Аverage grade is ${Math.round(total / grades.length)}.`;
//     };

//     console.log(average());
//     console.log(globalVar);
// })();


// console.log(average());


// Global import

// const globalVar = {};

// (function (gv) {
//     // Приватная функция, доступная только внутри замыкания
//     const privateFn = () => console.log("Shhhh, this is private!");

//     const movieFetch =() => {
//          return fetch(url)
//         .then(response => response.json())
//         .then(data => data.sort())
//     }

//     // Откроем методы через интерфейс globalVariable,
//     // закрыв имплементацию внутри замыкания
//     gv.books = () => {
//         privateFn();
//         console.log("Hello, I am a global variable");
//     };

//     gv.music = ['sdfsd','sfsdfsdf0', 'sfsdfsdf'],

//     gv.movies = () => {
//         movieFetch()
//     }
// })(globalVar);
// console.log('global',globalVar);
// console.log(globalVar.music);
// // Shhhh, this is private!
// // Hello, I am a global variable

// privateFn();


// Object interface

// const GRADES_MODULE = (function () {
//     // Это будет приватная переменная внутри замыкания
//     const grades = [80, 45, 75, 64, 53, 82];

//     return {
//         average() {
//             const total = grades.reduce((acc, grade) => acc + grade, 0);

//             return `Average grade is ${Math.round(total / grades.length)}.`;
//         },

//         failing() {
//             const failingGrades = grades.filter(item => item < 70);
//             return 'You failed ' + failingGrades.length + ' times.';
//         }
//     }
// })();
// console.log(GRADES_MODULE);
// console.log(GRADES_MODULE.average());
// console.log(GRADES_MODULE.failing());


// Revealing module pattern

// const calcGrades = (function () {
//     // Переменные и методы внутри будут приватными
//     const grades = [80, 45, 75, 64, 53, 82];

//     const calcAverage = () => {
//         const total = grades.reduce((acc, grade) => acc + grade, 0);

//         return `Average grade is ${Math.round(total / grades.length)}.`;
//     };

//     const failingGrades = ()=> {
//         const failingGrades = grades.filter(item => item < 70);

//         return 'You failed ' + failingGrades.length + ' times.';
//     }

//     // явно укажем что мы хотим открыть и под какими именами
//     return {
//         average: calcAverage,   // создаться ключ average с функцией внутри
//         failiing: failingGrades       
//     };
// })();

// console.log(calcGrades);

// console.log(calcGrades.average());
// console.log(calcGrades.failing());





// // Написати модуль який на основі останього патерну буде мати 3 
// // ф-ї інтерфейсу:
// // 1) Знаходить суму всіх аргументів
// // 2) Знаходить різницю всіх аргументів
// // 3) Знаходить добуток всіх аргументів
// // 4) Викликати всі 3 метода і перевірити чи вони працюють




// const calcGrades = (function () {
//     // Переменные и методы внутри будут приватными
   
//     const calcAverage = (...Numbers) => {
//         const total = Numbers.reduce((acc, Numbers) => acc + Numbers, 0);

//         return `Sum ${total}.`;
//     };
//     const failingGrades = (...Numbers)=> {
//             const total = Numbers.reduce((acc, Numbers) => acc - Numbers);
//         return `Sub ${total}.`;
//     };

//     const failing = (...Numbers)=> {
//         const total = Numbers.reduce((acc, Numbers) => acc * Numbers);
//     return `mul ${total}.`;
// };
    


//     // явно укажем что мы хотим открыть и под какими именами
//     return {
//         average: calcAverage,   // создаться ключ average с функцией внутри
//         failiing: failingGrades,    
//         multi:failing   
//     };
// })();



// console.log(calcGrades.average(10,20,30,40));
// console.log(calcGrades.failiing(10,20,30,40));
// console.log(calcGrades.multi(10,20,30,40));







// За допомогою шаблона Global import створити дві IIFE наповнити глобальний обєкт методами які:
// 1) Перетворюють метри в см,дм, км, мм
// 2) Перетворюють метри в Ярди, Дюйми, Фути, Милі
// Після наповнення обєкта викликати 2 метода з першої категорії і 2 метода з 2-ї категорії

// Сайт для перевірки https://www.rapidtables.com/convert/length/index.html


const globalVar = {};

(function (gv) {
    // Приватная функция, доступная только внутри замыкания
    

    // const movieFetch =() => {
    //      return fetch(url)
    //     .then(response => response.json())
    //     .then(data => data.sort())
    // }

    // Откроем методы через интерфейс globalVariable,
    // закрыв имплементацию внутри замыкания
    gv.cm = (m) => {
        let cm= m*100;
        console.log(` cm ${cm}`);
    };
    gv.dm = (m) => {
        let dm= m*10;
        console.log(` dm ${dm}`);
    };
    gv.km = (m) => {
        let km= m/1000;
        console.log(` km ${km}`);
    };
    gv.mm = (m) => {
        let mm= m*1000;
        console.log(` mm ${mm}`);
    };

    // gv.music = ['sdfsd','sfsdfsdf0', 'sfsdfsdf'],

    // gv.movies = () => {
    //     movieFetch()
    // }
})(globalVar);
console.log(globalVar.cm(5));
console.log(globalVar.dm(5));
console.log(globalVar.km(5));
console.log(globalVar.mm(5));
// console.log('global',globalVar);
// console.log(globalVar.music);
// Shhhh, this is private!
// Hello, I am a global variable

// privateFn();