const timer={
  timerStart :null,
  timerDelta:null,
  isActife:false,
  id:null,
 }

let p =document.querySelector('.js-time')
let reset =document.querySelector('.js-reset')
let start =document.querySelector('.js-start')
let lap= document.querySelector('.js-take-lap')
let ul=document.querySelector('.laps')

function startTimer(){
 timer.timerStart =  Date.now();
  if (!timer.isActife){
    timer.isActife=true;
    timer.id = setInterval(time,100)
    start.textContent='Pause'

  }else if (start.textContent==='Continue'){
    timer.timerStart= Date.now() -time.timerDelta
    timer.id = setInterval(taim,100)
    start.textContent='Pause'
  }
  else {
    clearInterval(timer.id)
    start.textContent='Continue'
  }

function time(){
  let two =Date.now()
  timer.timerDelta =two-timer.timerStart;
let sec =Math.floor(timer.timerDelta/1000%60);
let fsec=sec<10 ? `0${sec}`  :sec;
let i =Math.floor(timer.timerDelta
  /1000/60%60);
let min=i<10 ? `0${i}`: i;
  p.innerHTML=`${min}:${fsec}.${Math.floor(timer.timerDelta/100%10)}`
 }
}

function stopTime(){
  clearInterval(timEr)
  start.classList.remove('.move')
  start.classList.add('js-start')
}

function Reset(){
   p.textContent='00:00.0'
  clearInterval(timer.id)
  timer.isActife=false;
}

function circle(){
  let lab=[];
  lab.push(p.textContent);
for(let el of lab){
  let li=document.createElement('li');
  li.textContent=el;
  ul.append(li);
 }
}

start.addEventListener('click', startTimer);
lap.addEventListener('click',circle)
reset.addEventListener('click',Reset)