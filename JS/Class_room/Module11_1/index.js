// const context = {
//     city: "London",
//     street: "Baker Street",
//     number: "221B"
// };
// // 1) получить доступ к шаблону.
// const source=document.querySelector('#address-template').innerHTML.trim();
// console.log(source);
// // 2) запускаем функцию шаблонизатора.
// const temp = Handlebars.compile(source) // передаем шаблом и получаем функцию
// // console.log(temp);
// // 3) передаём в функцию обьект.
// const mark=temp(context)
// console.log(mark);
// // 4) готовую разметку ставлять на экран.
// const container=document.querySelector('.content-placeholder');
// container.innerHTML=mark


// const info = {
//     title: 'Handlebars',
//     helpers: 'Each and if',
//     func: 'compile'
// }
// const sours=document.querySelector('#address-template').innerHTML.trim();
// const temp=Handlebars.compile(sours)
// const mark=temp(info)
// const container=document.querySelector('.content-placeholder')
// container.innerHTML=mark




// //задание
// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ]
// };

// const source=document.querySelector('#example-template').innerHTML.trim();
// const templateFunc=Handlebars.compile(source);
// const markup=templateFunc(data);
// const container=document.querySelector('.content-placeholder');
// container.innerHTML=markup


// задание
// const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
// };
// const source=document.querySelector('#example-template').innerHTML.trim();
// const templateFunc=Handlebars.compile(source);
// const markup=templateFunc(menuData);
// const container=document.querySelector('.content-placeholder');
// container.innerHTML=markup


// // задание
// const data = {
//     animals: [
//         {
//             name: "cow",
//             noise: "moooo"
//         },
//         {
//             name: "cat",
//             noise: "meow"
//         },
//         {
//             name: "fish",
//             noise: ""
//         },
//         {
//             name: "farmer",
//             noise: "Get off my property!"
//         }
//     ]
// };
// let source = document.querySelector('#built-in-helpers-template').innerHTML.trim();

// let tmp = Handlebars.compile(source);

// let mark = tmp(data);

// let container = document.querySelector('.content-placeholder');

// container.innerHTML = mark;






//задача 
const gallery = {
    title: 'Gallery',
    items: [
        {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
        {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
        {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
        {img: 'https://placeimg.com/300/150/people', text: 'people'},
        {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
        {img: 'https://placeimg.com/300/150/any', text: 'random'}
    ]
};

const source=document.querySelector('#gallery').innerHTML.trim();
const templateFunc=Handlebars.compile(source);
const markup=templateFunc(gallery);
const container=document.querySelector('.gallery-content ');
container.innerHTML=markup
