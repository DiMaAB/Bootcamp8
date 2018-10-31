'use strict'
// const hotel ={
//     name: '7 Days',
//     stars: 4,
//     rooms:150,
//     hasSwPool: true,
//     hasCort: false,
//     showName(){
//         console.log(`${this.name}`);
//     },

// changeRooms(number){
//     this.rooms = this.rooms - number;
//     return this.rooms;
// },
// openCort(){
//     this.hasCort = !this.hasCort;
// },
// // showThis(){
// //     console.log(this);  // в обычной функции создается контекст выполнения.
// // }
// wrapper(){
// const showThis = () =>{
//     console.log('Show this context',this); // для стрелочной функции определяется в моментее написания. В стрелочной функции слово this  нет. (она берет this у родетеля, а так как у обьекта нету своего контекст выполнения(как и у стрелочной функции) тоже нету то будет window)
// }; 
// showThis(); // так как в стрелочной функции нет this , она берет у родителя ( в даном случаи это wrapper , так как wrapper обычна функция при запуске в this попадает обьект(hotel потомучто при запуске перед .this стоит hotel))
// }
// }

// function showThis(){
//     console.log(this);
// }
// showThis();  // если нету оьбекта то в строгом режиме будет undefined, если нету строгово режима то будет window(глобальный обьект в котором делается весь js). выполнение определется вызовом
// console.log(hotel.stars);
// hotel.showName();
// hotel.changeRooms(10);
// console.log(hotel.rooms);
// hotel.openCort();
// console.log(hotel.hasCort);
// // this назначается в момент запуска функции, и равняется тому что мы напишем перед точкой(в данном случаи this=hotel) в this попадает обьект(который запускает функцию)
// // hotel.showThis();
// hotel.wrapper();



// Есть 3 обьекта с которым надо сделать одни и теже действия.
// call - мы пишем 1 раз функцию и потом с помощью call вызываем с тем с чем мы ее вызываем(в данном случаи с разными обьектами)

// При запуске выводит название отелей.
const hotel = {
    name: 'Resort Hotel',
    price: 2500,
};
const hotel2 = {
    name: '4 Seasons Hotel',
    price: 500,
};
const hotel3 = {
    name: '7 days Hotel',
    price: 700,
};

// function showInfo(){
//     console.log(`${this.name} and ${this.price}`);
// }

function showInfo(name='User',age=18){
    console.log(`Hello ${name} you live in ${this.name} and ${this.price} ${age}`);
}

// showInfo.call(hotel);
// showInfo.call(hotel3);

// showInfo.call(hotel, 'Homer' , 25); // первый  аргумент обьект с каким обьектом нужно запустить метод call, а остальные с кикими аргументами ты запускаешь  
// showInfo.call(hotel3, 'Fry',32);

 
//bind - создает копия функции и привязывает ее к обьекту(который в кавычках).(оригинал не меняется)
const boundShowInfo = showInfo.bind(hotel);
boundShowInfo();  //мы можем вызывать ее где хотим не думает о this.

                   //Конструктор
// const Tank = {
//     speed: 100,
//     armor: 50,
//     life: 100,
//     damage: 20,
//     name: 'Tiger',
//     nickName: 'Tankist',
//     amunition: 10,
//     x: 0,
//     y: 0,

//     move(a,b){
//        this.x=a;
//        this.y=b;
//    },
//    fire() {
//     this.amunition>0 ? this.amunition-=1 :alert('Enter card number');
//    },
//    heal(size){
//        this.life + size>100 ? this.life =100 :this.life+=size;
//    },
// };

// Tank.move(50,150);
// Tank.fire();
// Tank.fire();
// Tank.fire();
// Tank.life = 50;



                          // Конструкторы
    function Tank(speed,amunition,armor,nickName,x,y){        // по договорености конструкторы пишуться с большой буквы
// this -пустой обьект
this.speed=speed;
this.armor =armor;
this.life = 100;
this.damage =20;
this.name = 'Tiger';
this.nickName = nickName;
this.amunition=amunition;
this.x=x;
this.y=y;
this.move=function(a,b){
    this.x=a;
    this.y=b;
};
this.fire=function(){
    this.amunition>0 ? this.amunition-=1 :alert('Enter card number');
};
this.heal=function(size){
    this.life + size>100 ? this.life =100 :this.life+=size;
};

// return this
    }
    let tiger = new Tank(50,8,20,'Tester',10,12); // если перед функцией стоит New то в this попадает пустой обьект(это конструктор)
    console.log(tiger);  //на выходе получаем обьект. Если вызываем еще раз то получим обьект только с другими параметрами.
    let scorpion = new Tank(45,10,5,'SC',52,10);
    scorpion.move(50,16);
    console.log(scorpion);
    