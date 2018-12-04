const input = document.querySelector("input");
const submitBtn = document.querySelector(".js-submit");
const result = document.querySelector(".js-result");
const apiUrl = "https://restcountries.eu/rest/v2/name/";
let form=document.querySelector('.search-form')
let ul=document.createElement('ul')

submitBtn.addEventListener("click", fetchCountryData);



/*
  @param {FormEvent} evt
*/
function fetchCountryData(evt) {
    evt.preventDefault();
    result.innerHTML='';
fetch(`${apiUrl}${input.value}`)
.then(res=>res.json())
.then(data=>create(data))
.catch(error=>console.log(error))
  
form.reset();
}

function create(arr){
    for(let el of arr){
        let name=document.createElement('p');
        name.textContent=`Country name ${el.name}`;
        let capital=document.createElement('p');
        capital.textContent=`Capital ${el.capital}`;
        let Main=document.createElement('p');
        Main.textContent=`Main currency:${el.currencies[0].name}`;
        let flag=document.createElement('img');
        flag.setAttribute('src',el.flag);
        result.append(name,capital,Main,flag)
  }
}




