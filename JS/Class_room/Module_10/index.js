// // синхроный запрос

// // https://jsonplaceholder.typicode.com/
// const req = new XMLHttpRequest();
// // console.log(req);
// // settings
// // req.open(method, URL, async);
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', false);  // методы : get - считать данные, post - записать информаци, delete - удалить инфу, put - обновить инфу
// req.setRequestHeader('Content-Type', 'application/json');
// // // req.send([body])
// req.send();

// // req.abort()

// // status
// // https://developer.mozilla.org/ru/docs/Web/HTTP/Status

// if (req.status !== 200) {  // если 200 то запрос успешный, если что-то другое то по ссылке ввыше коды ошибок
//     console.error(`${req.status}: ${req.statusText} `)
// } else {
//     console.log(JSON.parse(req.response));
// }
// console.log(`test`);

// // асинхронный рапрос
// const req = new XMLHttpRequest();
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
// req.setRequestHeader('Content-Type', 'application/json');
// req.send();
// req.onreadystatechange = function () {
//     if (req.readyState !== 4) {              
//         // 0 - початок
//         // 1 - викликаний open
//         // 2 - отримані заголовки
//         // 3 - отримуємо данні
//         // 4 - запит закінчено
//         console.log(req.readyState);
//         return
//     }

//     if (req.status !== 200) {
//         console.error(`${req.status}: ${req.statusText} `)
//     } else {
//         console.log(JSON.parse(req.response));
//     }
// };

// запросы в ES6
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response=>response.json())  // получает доступ к результату запроса 
// // .then(data=>console.log(data))
// .then(data=>dev(data))
// let body=document.querySelector('body');
// let ul = document.createElement('ul');
// body.append(ul);
// function dev( ret){
// for(let el of ret){
//     let li=document.createElement('li');
//     li.textContent=el.name
//     ul.append(li);
// }}
// JSON.parse()  // изменяет из формата строки в формат котором был создан(массив обьект)
// JSON.stringify()// что-бы отпраить инормацию на сервер (переделыает в вормат строки)
// CRUD
// POST - CREATE
// GET - READ
// PUT - UPDATE
// DELETE - DELETE

// endpoint - точка входу (https://pixabay.com/)
// resourse - ресурс до якого ми звертаємося (api)
// ? - параметри запиту
// & - перерахування декількох параметрів запиту

let URL = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&category=backgrounds&order=latest&per_page=9'
fetch(URL)
.then(response=>response.json())
.then(image=>img(image))

let body =document.querySelector('body');
let ul = document.createElement('ul');
body.append(ul);
function img(img){
    for(let el of img.hits){
        
        let img =document.createElement('img')
        img.setAttribute('src',el.largeImageURL);
        body.append(img);
        
    }
}