/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/
let div=document.querySelector('.inputs')
let arr=Array.from(document.querySelectorAll('[type="text"]'));

function check(){
    let evenTar=event.target;
    let len = arr.indexOf(evenTar)
    let el = arr[len].value
    let col = +el.length;
    console.log(col);
    let itm=+arr[len].dataset.length
    console.log(itm);
    
        if(col<=itm){
            console.log('good');
            div.style.outline='2px solid green'
    }else{
         div.style.outline='2px solid red'
        console.log('bad');
    }
}
div.addEventListener('change', check);