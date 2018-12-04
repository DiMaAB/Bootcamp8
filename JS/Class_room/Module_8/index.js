// let btn = document.querySelector('#btn');
// function Hello (){
//    alert('hello user');
//    btn.removeEventListener('click', Hello)
// }

// function eventInfo(){
//     console.log(event); // выводит информацию о действии которое сейчас произошло.
//     console.log(event.target);// ключ оьекта ивент в котором сохраняется информация о HTML элементе в котором произошло событие
// }
// btn.addEventListener('click',eventInfo)



// let sendDataBtn=document.querySelector('[type="submit"]');
// let form= document.querySelector('#form')
// let name = document.querySelector('#name');
// let lastName=document.querySelector('#lastName')
// function readValue(){
//     event.preventDefault();// отменет дефолтную поведение браузера(в данном случаи не будет перезагружаться страничка данные не будут отправляться)
//     console.log(name.value);
//     console.log(lastName.value);
//     form.reset(); // тоже сомое что и value=''; (очищает поля)
//     name.value=''; // очищает поля после отправки
//     lastName.value='';
// }
// // sendDataBtn.addEventListener('click',readValue)
// form.addEventListener('submit',readValue)
// // Делегирование- делаем в контейнере а не для каждого элемента.
// // event.target - это блок на котором мы начали всплытие(клики) активация клика
// // event.currentTarget. = это где остановилось всплытие (элемент до которого дошло всплытие)


// Задача вывести порядковый номер li на который мы нажиаем
 let list=document.querySelector('#list');
 let listItems=Array.from(list.children);
 
 function FindIndex(){
    let index=event.target;
    console.log(index);
    let indexOfElem=listItems.indexOf(index);
    console.log(indexOfElem+1);
};
 list.addEventListener('click',FindIndex);