let ul=document.querySelector('.task-list')
let input=document.querySelector('[type="text"]');
let form=document.querySelector('#form')

function loadTasks(){
    fetch('http://localhost:3001/tasks')
    .then(res=>res.json())
    .then(data=>createLi(data))
}
function postTask(evt){
    evt.preventDefault();
    let value=input.value;
    if(value!==''){
   fetch('http://localhost:3001/tasks',{
       method:'post',
       body: JSON.stringify({text:value}),
       headers:{
        'Content-Type': 'application/json',
       }
   })
   .then(res=>res.json())
   .then(data=>createNewLi(data))
}
    form.reset()
}

function createNewLi(obj){
    let li = document.createElement('li');
    li.textContent = obj.text;
    li.setAttribute('data-id', obj.id);
    ul.append(li); // добавлет без перезагрузки страницы
   }
function createLi(arr){
    for(let el of arr){
        let li=document.createElement('li');
        li.textContent=el.text;
        li.setAttribute('data-id',el.id)
        ul.append(li); //добавлет но нало перезагрушать страницу
    }
}

function deleteLi(e){
   let id=e.target.dataset.id;
    fetch(`http://localhost:3001/tasks/${id}`,{
    method: 'delete',
})
.then(()=>e.target.remove())
}

function updateData(){
    fetch('http://localhost:3001/tasks/4',{
        method: 'put',
        body:JSON.stringify({text:'Oгірок'}),
        headers:{
            'Content-Type': 'application/json',
        }

    })
}
updateData();
ul.addEventListener('click',deleteLi);
form.addEventListener('submit',postTask)
window.addEventListener('DOMContentLoaded',loadTasks)