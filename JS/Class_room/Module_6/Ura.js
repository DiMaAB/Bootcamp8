'use strict'

// Клас - ескіз(шаблон) обєкта з яким маємо працювати (машина) Атрибути класа це колеса, двигун і тд
// Методи - завестися, відкрити двері, збільшити швидкість
// Обєкт - екземпляр класа який створили з шаблона
// Інтерфейс - набір методів доступних для вмкористання іншими класами (приборна панель автомобіля, кнопки на автоматі з видачі вкусняшок)
// Абстракція - виділеня головних характеристик обєкту і відкидання незначних не вдаючисть в роздуми як методи працюють зсередини. (map, filter, sort)
// Інкапсуляція - приховання всіх внутрішніх процесів від користувача
// Наслідування - створення нового класу на базі існуюучого
// Поліморфізм - використання обєктів з однаковим інтерфейсом без інфи про внутрішню структуру.

// const Video = function (size, duration, title, format, hd, author) {
//     this.size = size;
//     this.duration = duration;
//     this.title = title;
//     this.format = format;
//     this.hd = hd;
//     this.author = author;
// //   }
  
// //   Video.prototype.getFullInfo = function () {
// //     return `${this.author} ${this.title} ${this.duration}`;
// //   }
  
// //   Video.prototype.archive = function (num) {
// //     this.size = parseFloat(this.size) / num + 'gb';
// //   }
  
// //   Video.prototype.changeAuthor = function (newAuthor) {
// //     this.author = newAuthor;
// //   }
  
// //   Video.prototype.changeTitle = function (newTitle) {
// //     this.title = newTitle;
// //   }
  
// //   const Stream = function(size, duration, title, format, hd, author, status) {
// //     Video.call(this, size, duration, title, format, hd, author);
// //     this.status = status;
// //   }
  
// //   Stream.prototype = Object.create(Video.prototype);
// //   Stream.prototype.constructor = Stream;
  
// //   Stream.prototype.changeStatus = function() {
// //     this.status = !this.status;
// //   }

// class Video {
//     constructor(size, duration, title, format, hd, author)
//     {
//         this.size = size;
//         this.duration = duration;
//         this.title = title;
//         this.format = format;
//         this.hd = hd;
//         this.author = author;
//     }

//     static greet(){
//         console.log('hello I am static method');
//     }

//     getFullInfo(){
//         return `${this.author} ${this.title} ${this.duration}`;
//     }
//     archive(num){
//         this,size=parseFloat(this.size)/num +'gb'
//     }
//     changeAuthor(newAuthor){
// this.author=newAuthor
//     }
//     changeTitle(newTitle){
//         this.title=newTitle
//     }
// }

// class Stream extends Video{
//     constructor(size, duration, title, format, hd, author,status){
//         super(size, duration, title, format, hd, author)
//         this.status=status // всегда писать ниже супер 

//     }
//     changeStatus()
//     {
//         this.status=!this.status;
//     }

// }
// let movie =new Video ('25gb','120min','Movie 43 ' , 'MPG4',true,'WB')
// console.log(movie);
// console.log(movie.changeTitle('lert') );

// Video.greet();


/*
  Создайте класс Car с указанными полями и методами.
*/

// class Car {
//     constructor(maxSpeed,value) {
//       this.speed =0;
//       this.maxSpeed = maxSpeed;
//       this.running;
//       this.distance;
//       // this._value=value;
//       /*
//         Добавьте свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
          
//           - maxSpeed - для хранения максимальной скорости 
          
//           - running - для отслеживания заведен ли автомобиль, 
//             возможные значения true или false. Изначально false.
            
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//     }
  
//         static getSpecs(obj){
//            console.log(`maxSpeed:${obj.maxSpeed} running:${obj.running} distance:${obj.distance}`);
//         }

//     turnOn() {
//         this.running=true;
//       // Добавьте код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//     }
  
//     turnOff() {
//         this.running=false;
//       // Добавьте код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//     }
    
//     accelerate(spd) {
//         if(spd<this.maxSpeed){
//             this.speed=spd;
//         }
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//     }
    
//     decelerate(spd) {
//         if(spd<this.maxSpeed && spd>0){
//             this.speed=spd;
//         }
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     }
//   get value(){
//     return this._value;
//   }
//   set value (value){
//     return this._value= value;
//   }
//     drive(hours) {
//         if(this.running==true){
//             this.distance=hours*this.speed;
//         }
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//     }
//   }
  
//   let mov = new Car(170);
//   console.log(mov);
//   mov.turnOff();
//   mov.decelerate(270)
//   mov.accelerate(270);
//   mov.drive(10)


  
//   // Добавьте к классу Car из предыдущего задания статический
//   // метод getSpecs, который получает объект-машину как аргумент
//   // и выводит в консоль значения полей maxSpeed, running и distance.
  
//   // Использование будет выглядеть следующим образом:
  
//   // const someCar = new Car(100);
//   // someCar.turnOn();
//   // someCar.drive(2);
  
//   // Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200

// const someCar = new Car(120);
// someCar.turnOn();
// someCar.accelerate(37);
// someCar.drive(2);

// console.log(someCar);
// Car.getSpecs(someCar);



//   Добавьте классу Car свойство value - цена автомобиля.
  
//   Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
//   Геттер вернет текущей значение поля this._value
//   Сеттер запишет в поле this._value то что ему присвоят
  
//   PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
//     не this.value а this._value
    
//   Использование выглядит следующим образом:



// class Car {
//   constructor(maxSpeed, value) {
//     // ... код
//     this.maxSpeed=maxSpeed
//     this._value = value;
//   }
//   // ... код
//   get value(){
//         return this._value;
//       }
//       set value (value){
//         return this._value= value;
//       }
// }
// const myCar = new Car(50, 2000);
// // console.log(myCar);
// console.log(myCar.value); // 2000
// myCar.value = 4000;
// // myCar.value; // 4000
// console.log(myCar.value); // 2000


// Гетері сетері 

// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     // private
//     this._name = name;
//     this._surname = surname;
//   }
//     getFullName() {
//       return `${this.name} ${this.surname}.`
//   }

//   static methodSTATIC() {
//       console.log(`HELLO`);
//   }

//   //
//   // // getter
//   //
//   get name() {
//     return this._name;
//   }

//   get surname() {
//     return this._surname;
//   }
//   //
//   // // // setter
//   // //

//   get age() {
//     return this._age;
//   }

//   set age(age) {
//     this._age = age;
//   }

//   //
//   get age() {
//       return this._age;
//   }
// }

// let  user = new User('Jou','Dou');
// // console.log();

/*
Part 1
Написати клас  Герой в якого будуть параметри (name, life, level, хр, stamina)
name - імя
life - житя =100
level - рівень = 1
хр - досвід = 0
stamina - витривалість = 100
Клас буде мати методи :
1) riseLevel - метод що збідьшує рівень героя на один, якщо хр = 1000
2) addXp - метод що приймає параметром хр і плюсує поки сума небуде 1000. Коли хр стає тисячу метод обнуляє поле до 0.
3) walk - метод що виводить в консоль фразу "name walking"
4) rest - метод що відновлює поле stamina до початкового значення і виводить в консоль фразу 'Recovered' 
Створити героя і викликати для нього метод addXp(50) і addXp(950)
Далі викликати метод riseLevel() що збільшить рівень до 2.
викликати метод walk.
*/
class Hero{
  constructor(name){
    this.name=name;
    this.life  =100;
    this.level  = 1;
    this.xp = 0;
    this.stamina = 100;
  }
  riseLevel(el){
    if(el>=1000){
      this.level++;
    }

  }
  addXp(xp){
    this.xp+=xp;
    
    if(this.xp>=1000){
      this.riseLevel(this.xp)
      this.xp=this.xp-1000 ;
    }
    
  }
  walk (){
   alert("name walking");
  }
  rest(){
    this.stamina=100;
    console.log("Recovered");
  }
}
// let daleb= new Hero();
// daleb.addXp(50) ;
// daleb.addXp(950);
// console.log(daleb);

/*
Part 2 
Написати класи Людина, Гном, Маг які будуть насладувати все від класа Герой.
Ці 3 класа будуть мати додаткову властивість race - раса.
Людина додатково матиме поле - strength = 100
Гном матиме додатково поле - rage = 100
Маг матиме додаткове поле - mana = 100
Для людини додати метод - wardenFight - який при кожному запуску зменьшує поле stamina на 20.
Коли поле stamina стане 0 потрібно викликати метод rest() щоб відновити її значення.
Для гнома додати метод berserk'sFury - який при кожному виклику збільшує поле 
rage на 30. Якщо rage = 100 обнулити поле stamina і rage та викликати метод rest().
Для мага додати метод spell який при виклику зменьшує занчення на 25 і stamina на 25.
Коли значення stamina стає 0 потрібно викликати метод rest(). 
Додати метод reload() який оновлює поле mana до 100
Створити по одному екземпляру кожного класу для кожного з них обнулити показник stamina викликом їхніх спеціальних методів, щоб в консолі зявилося повідомлення 'Recovered' 
*/
class Human extends Hero{
  constructor(name="People",race='Human',){
    super (name)
    this.strength=100;
  }
  wardenFight(){
    this.strength= this.strength-20;
    if(this.strength<=0){
      this.rest();
    }
  }

}
class Dwarf extends Hero{
  constructor(name="People",race="Dwarf"){
    super (name)
      this.rage = 100;
  }
  berserksFury(){
    this.rage=this.rage+30;
    if (this.rage>=100){
      this.stamina=0;
      this.rage=0;
      this.rest();

    }

  }
}
  class Wizard extends Hero{
    constructor(name="People",race="Wizard"){
      super (name)
        this.mana = 100;
    }
    spell(){
      this.mana =this.mana -25;
      this.stamina =this.stamina -25;
      if (this.stamina<=0){
        this.rest()
      }

    }
    reload(){
      this.mana=100;
    }
  }

    let numenor= new Human("Hurikat");
    let valenor = new Wizard('Astary')
    let arda = new Dwarf('Gloin')

    console.log(numenor);
    console.log(valenor);
    console.log(arda);
    numenor.wardenFight()
    numenor.wardenFight()
    numenor.wardenFight()
    numenor.wardenFight()

    arda.berserksFury()
    arda.berserksFury()
    arda.berserksFury()
    arda.berserksFury()
    arda.berserksFury()
    arda.berserksFury()
/*
Part 3 
Створити клас FireMage який наслідує всі властивості від Мага і має додаткову властивість skill
skill - поле де додається навик 'fireball'
Додати метод shootFireBall - який виведе в консоль фразу "Вогняний шар запущений і нанесен шкоди на ${рандомне число від 1 до 30}" і запустить метод spell();
Створити екземпляр класу FireMage і запустити 4 рази метод shootFireBall(). після цього в консолі має зявитися напис 'Recovered'.*/

class FireMage extends Wizard{
constructor(name){
super (name);
this.skill='fireball';
}
  shotFireBall(){
    console.log(`Вогняний шар запущений і нанесен шкоди на ${(Math.random()*30).toFixed(0)}`);
    this.spell();
  }
}

let talier = new FireMage('Lovewarry');
console.log(talier);
talier.shotFireBall()
talier.shotFireBall()
talier.shotFireBall()
talier.shotFireBall()
talier.shotFireBall()