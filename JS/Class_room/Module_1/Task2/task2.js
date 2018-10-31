// let str = 'Hello world';
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.includes('world'));
// console.log(str[6]);
// console.log(str.indexOf('w')); //работает до 1 совпадения, ищит тоько 1 букву , давже если мы введем слово то он выведет индекс 1 буквы слова.
// console.log(str.split(' '));
// let arr = str.split(' ');
// console.log(arr);
// let strNew = arr.join(' '); // применяется для масива(переводит масив в строку)
// console.log(strNew);
// str = 'The qiul red over the lazzy';
// console.log(str.slice(0,3)); // 1 цифра  с какой позиции вырезать, 2 цифра по какую позицию вырезать.
// // console.log(substr(0,3)); // 1 цифра с какой позиции вырезать , 2 цифра сколько символов.
// let w = str.substr(0,3);
// console.log(w);
// let q = str.substring(0,3);
// console.log(q)

// // math //для математических операций
// console.log(Math.floor(2.99)); //округляет до меньшего числа (тут будет 2)
// console.log(Math.ceil(2.0000001)); //округление до большего чила (тут будет 3)
// console.log(Math.round(2.4999)); //реагирует на 1 цифру после запятой(тут будет 2. а если 2,5 то будет 3)
// console.log(Math.abs(10)); //значение по модулю всегда +
// console.log(Math.pow(9,2)); // возведение числа в степень, первое число это число , а второе его степень.
// console.log(Math.sqrt(4)); //корень числа.
// console.log(Math.max(-50,-40)); // максимальное значение.
// console.log(Math.min(9/12,3/4)); // минимальное значение
// console.log(Math.random()); // рамдомное число от 0 да 0,9999(1 не выведет). можно делать умнодение дя премещение запятой
// console.log(Math.floor(Math.random()*100)); // рамдомное числа и выводит целую часть благодаря Math.floor.
// console.log(Math.floor(Math.random()*100)+1); //благодяря +и число мы вибираем диапазон откакого числа (в данном случаи от 1 до 99, если будет +3 то от 3 , а если будет *500 то от 3 до 499).

// // let password = prompt( 'Enter password');
// // console.log(password.length>4);   // водится пароль больше 4 символов.

// let a=5;
// let b=5;
// console.log(a===b); // еси 1 = то это присваивание , если === приравнивание(с учетом типов данных если разные то будет фолс), если == тоже приравнивание тоько не учитывае типы данных(только значения).

// != не равно без учета типа данных, а !== с учетоом типа данных.
// && -и(работают до 1 false, если все true то выведет последнюю true) , || -или(если не ни одного варианта который соответствует true он выведет последний false, и работает до 1 true).
//что-бы передать false можно передавать: 0. пустая строка без пробелов.NaN, undefined, null, -0, false.
// что-бы предать true можно передать: Infinity(бескнечность), пустая строка с пробелом

// let time = prompt('Enter time');
// console.log(time);
// if(Number(time)){
//    if(time<=22){
//     alert('Look footbool');
// }  else{
//         alert('Иди спать');
//     }
// }else{
//         alert('ВВеди число');
//     }
   
// if(!Number.isNan(time)){

// }else{
//     alert('ВВеди число');
// }


// let month = prompt('Enter month').toLowerCase();
// if(month==='грудень'|| month==='січень'||month==='лютий'){
// alert('Winter');
// }else if(month==='березень'||month==='квітень'||month==='травень'){
// alert('sprint');
// }else if(month==='червень'||month==='липень'||month==='серпень'){
//     alert('Summer')
// }else if(month==='вересень'||month==='жовтень'||month==='листопад'){
//     alert('Autum');
// } else {
//     alert('Помилка вводу');
// }


// switch(month){  // можно писать true что-бы запустился switch,а сами проверки внутри кейсов.
//     case 'грудень':
//          alert('Winter');
//          break;
//     case 'січень':
//          alert('Winter');
//          break;
//     case 'лютий':
//          alert('Winter');
//          break;
//     case 'березень':
//     case 'квітень':
//     case 'травень':
//         alert('Spring');
//         break;
//     // case(month>5):
//     // alert('Test');    
//      default: 
//      alert('Помилка вводу');
//         break;
// }
// let age = prompt('Enter age');
// let result = age > 15 ? 'студент': 'Учень'; // ? еси услов true, : если условие false. 
// let result = age>15 ? 'Студент' : age<15&&age>8 ?'Учень' : 'Дитина';


// let quest='Mango';
// let name='';
// name=quest;
// console.log(name);

// let name = prompt('Enter name');
// alert(name);

// const name = 'Mango';
// const date = '14.06.2031';
// const roomType = 'Люкс';
// const message = `${name} Прибытие на базу отдыха ${date} = ${roomType}`;
// console.log(message);


// const padding = '20px';
// const border = '5px';
// const contentWidth = '100px';
// let totalWidth = parseInt(padding)+parseInt(border)+parseInt(contentWidth);
// console.log(totalWidth+'px');

// let year = prompt('Какой сейчас год');
// if(year==2018){
//     alert('все верно')
// }else{
//     alert('Только на дворе 2018!')
// }

// let ramdom = prompt('Введите произвольное целое число');
// if(ramdom==null){
//     alert('Приходите еще');
// }else if(ramdom%1==0){
//     alert('Спасибо')
// } else{
//     alert('Необходимо было ввести целое число')
// }



// let type;
// const num = Number.parseInt(Math.random()*100);
// if(num%2==0){
//  type='odd'
// } else{
//     type='even'
// }
// console.log(`${num} is ${type}`);



// let hours = 7;
// let minutes = 3;
// let seconds =42;
// if(hours<=9){
//     hours='0'+hours;
// } 
// if(minutes<=9){
//     minutes='0'+minutes;
// } 
// if(seconds<=9){
//     seconds='0'+seconds;
// }
// const time = `${hours}:${minutes}:${seconds}`;
// console.log('Tima is: ',time);





let num = prompt('Введите число от 1 до 5');

if(num>=1 && num<=5){

    switch(num){
        case '1':
        alert('Каталог хостелов');
         break;
        case '2':
        
        alert('Каталог бюджетных отелей');
        break;
        case '3':
       
        alert('Каталог отелей ***');
        break;
        case '4':
       
        alert('Каталог отелей ****');
        break;
        case '5':
       
        alert('Каталог лучших отелей');
        break;
    }
   
}  if(num==null){
    alert('очень жаль, приходите еще!');
}   
else{
    alert('Неверный ввод, возможные варианты 1-5!');
}
