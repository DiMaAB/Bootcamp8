const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let log = prompt('Введите логин');
if(log==null){
    alert('Отменено пользователем!');
}else if(log==adminLogin){
     pas = prompt('Введите пароль')
}else{
    alert('Доступ запрещен!')
} 
 if(pas==adminPassword){
    alert('Добро пожаловать!')
}else if(pas==null){
    alert('Отменено пользователем!')
}else{
    alert('Доступ запрещен!')
}



