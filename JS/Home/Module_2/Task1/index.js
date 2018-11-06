
const numbers =[];
let total=0;
let userInput;
do{
    userInput = prompt('Введите числа')

    if(userInput===null && numbers.length===0){
        alert('Вы ничего не ввели');
    } else if(!isNaN(userInput)&& userInput!==null){
        numbers.push(+userInput);
}else if (isNaN(userInput)) {
    alert('Было введено не число, попробуйте еще раз')
}
}
while(userInput!==null);

if(numbers.length>0){
    for(let el of numbers){
        total +=el;
 
}
alert(`Общая сумма равна ${total}`)
}
