
const numbers =[];
let total=0;
let userInput;
do{
    userInput = prompt('Введите числа')
    if(!isNaN(user)){
        numbers.push(+userInput);
}else{
    alert('Было введено не число, попробуйте еще раз')
}
}
while(uuserInputser!==null );

if(numbers.length>0 && userInput!==null){
    for(let el of numbers){
        total +=el;
 
}
alert(`Общая сумма равна ${total}`)
}else{
    alert('Вы ничего не ввели')
}

