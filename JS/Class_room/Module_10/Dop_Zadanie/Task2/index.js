
const input = document.querySelector("input");
const submitBtn = document.querySelector("#js-submit");
const result = document.querySelector(".result");
const apiUrl = "https://api.github.com/users/";
let form=document.querySelector('.search-form')
submitBtn.addEventListener("click", fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
    evt.preventDefault();
    result.innerHTML='';
fetch(`${apiUrl}${input.value}`)
.then(res=>res.json())
.then(data=>create(data))
// .catch(error=>console.log(error))
  
form.reset();
}
function create(arr){
    let avatar=document.createElement('img');
        avatar.setAttribute('src',arr.avatar_url);

        let  Username=document.createElement('p');
        Username.textContent=` Username ${arr.login}`;
        let bio=document.createElement('p');
        bio.textContent=`bio ${arr.bio}`;
        let  Public=document.createElement('p');
        Public.textContent=`Main currency:${arr.public_repos}`;
        
        result.append(avatar,Username,bio,Public)
  
}











