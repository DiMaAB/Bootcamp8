const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let login;
let colv

do{
    login= prompt('Введите логин')
    colv= passwords.includes(login)
    if(login==null){
        alert('Приходи еще');
        break;
    }else if(colv==true){
    alert('Добро пожаловать!')
    break;
   }else{
       attempts--
       alert('Неверный пароль')
   }
}while(attempts!==0);
if(attempts==0){
   alert( "У вас закончились попытки, аккаунт заблокирован!")
}