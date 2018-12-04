/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
let ul= document.querySelector('.list')
let newe=elements.map(el=>{
  let newLi=document.createElement('li');
newLi.textContent=el;
ul.append(newLi)
})

// for(el of elements){
// let newLi=document.createElement('li');
// newLi.textContent=el;
// ul.append(newLi)
// }