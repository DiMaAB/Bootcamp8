let num = 6;
let num2 = 15;
let num3 = 25;

let ask = prompt('Введите количество человек');
 if(ask==null){
    alert('Приходите еще')
}else if( ask<=0 || !Number.isInteger(Number(ask))){
    alert('Вы ввели неверно число');
}else if(ask<num){
    alert('У вас есть возможность поехать в 3 тура');
   let user= prompt('Если вы введете 1 вы поедете в - sharm. Если вы введете 2 вы поедете в - hurgada. Если вы введете 3 вы поедете в - taba')
    switch(Number(user)){
        case(1):
        alert('Вы едете в sharm');
        break;
        case(2):
        alert('Вы едете в hurgada');
        break;
        case(3):
        alert('Вы едете в taba')
        break;
    }
}

 if(num<=ask && ask<=num2){
    alert('У вас есть возможность поехать в 2 тура');
   let user= prompt('Если вы введете 1 вы поедете в - hurgada. Если вы введете 2 вы поедете в - taba')
    switch(Number(user)){
        case(1):
        alert('Вы едете в hurgada');
        break;
        case(2):
        alert('Вы едете в  taba');
        break;
        }
}else if(ask>num2 &&ask<=num3){
    alert('Вы едете в  taba');
   }else if(ask>num3){
       alert('Вы ввели число больше 25, к сожалению у нас не таких потевок')
   } 