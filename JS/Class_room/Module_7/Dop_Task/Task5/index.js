/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/



let checkBox=document.querySelectorAll('.size-filter>li>label>input');
console.log(checkBox);
let arr= Array.from(checkBox).filter(el=>el.checked===true)
console.log(arr);
function getInputsData(inputs){
  return inputs.map(el=>el.value);
 }
console.log(getInputsData(arr));







let a = {
  "total": 4692,
  "totalHits": 500,
  "hits": [
      {
          "id": 195893,
          "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
          "type": "photo",
          "tags": "blossom, bloom, flower",
          "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg",
          "previewWidth": 150,
          "previewHeight": 84,
          "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
          "webformatWidth": 640,
          "webformatHeight": 360,
          "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
          "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
          "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
          "imageWidth": 4000,
          "imageHeight": 2250,
          "imageSize": 4731420,
          "views": 7671,
          "downloads": 6439,
          "favorites": 1,
          "likes": 5,
          "comments": 2,
          "user_id": 48777,
          "user": "Josch13",
          "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
      },
  ]
  
  }
  console.log(a.total);
  console.log(a['total']);
  console.log(a.hits[0].id);
  console.log(a.hits[0]['id']);