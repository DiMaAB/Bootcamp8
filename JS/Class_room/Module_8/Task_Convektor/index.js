let form= document.querySelector('#convcm')
let listItems=Array.from(form);
const arr=[]

 function convect(){
     event.preventDefault();
    let val=listItems.map(el=>el.value)
    console.log(val);
    
 }
 form.addEventListener('submit',convect);
 