/*
  Дан спан и кнопки +1, -1, которые будут увеличивать 
  и уменьшать на 1 значение спана. Сделайте так, чтобы 
  это значение не могло стать меньше нуля.
*/
let butAdd=document.querySelector('.js-add')
let butSub=document.querySelector('.js-sub')
let val=document.querySelector('.js-value')
let a=0;
function add(){
  a+=1;
  val.textContent=a;
  return a;
}
butAdd.addEventListener('click', add)

function sub(){
 
  val.textContent=a;
  if(a<=0){
    return a=0;
  }else{
    return a-=1;
  }
  
  
}
butSub.addEventListener('click', sub)