let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let form = document.querySelector('form');

function submit(){
    let URL=`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${input.value}&category=backgrounds&order=latest&per_page=18`
    fetch(URL).then(response=>response.json())
    .then(image=>img(image))
    
// console.log(input.value);
// form.reset();
}

// form.addEventListener('submit',submit)
function move(){
let URL = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${input.value}&category=backgrounds&order=latest&per_page=18`
fetch(URL)
.then(response=>response.json())
.then(image=>img(image))
event.preventDefault()
form.reset();
}
form.addEventListener('submit',move)
form.addEventListener('DOMContentLoaded',submit)
let cont=document.querySelector('#container')
function img(ret){
cont.innerHTML='';
for(let el of ret.hits){
let div=document.createElement('div')
div.classList.add('one');
let p=document.createElement('p');
p.textContent=el.tags;
let img=document.createElement('img');
img.setAttribute('src',el.largeImageURL)
div.append(p,img)
cont.append(div)
}}