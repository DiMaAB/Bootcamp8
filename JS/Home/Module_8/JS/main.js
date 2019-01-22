'use strict'

const galleryItems = [
  {preview: './IMG/Preview/pexels1.jpeg', fullview: './IMG/Fullview/pexels1.jpeg', alt: "alt text 1"},
  {preview: './IMG/Preview/pexels2.jpeg', fullview: './IMG/Fullview/pexels2.jpeg', alt: "alt text 2"},
  {preview: './IMG/Preview/pexels3.jpeg', fullview: './IMG/Fullview/pexels3.jpeg', alt: "alt text 3"},
  {preview: './IMG/Preview/pexels4.jpeg', fullview: './IMG/Fullview/pexels4.jpeg', alt: "alt text 4"},
  {preview: './IMG/Preview/pexels5.jpeg', fullview: './IMG/Fullview/pexels5.jpeg', alt: "alt text 5"},
  {preview: './IMG/Preview/pexels6.jpeg', fullview: './IMG/Fullview/pexels6.jpeg', alt: "alt text 6"},
  {preview: './IMG/Preview/pexels7.jpeg', fullview: './IMG/Fullview/pexels7.jpeg', alt: "alt text 7"},
  {preview: './IMG/Preview/pexels8.jpeg', fullview: './IMG/Fullview/pexels8.jpeg', alt: "alt text 8"},
  {preview: './IMG/Preview/pexels9.jpeg', fullview: './IMG/Fullview/pexels9.jpeg', alt: "alt text 9"},
  {preview: './IMG/Preview/pexels10.jpeg', fullview: './IMG/Fullview/pexels10.jpeg', alt: "alt text 10"},
];

const body = document.querySelector('body');
const main = document.createElement('div');
main.classList.add('image-gallery', 'js-image-gallery');
body.append(main);
const div = document.createElement('div');
div.classList.add('fullview');
main.append(div);
const img = document.createElement('img');
img.classList.add('imgFullview');
img.setAttribute('src', galleryItems[Math.floor(Math.random() * galleryItems.length)].fullview);
div.append(img);

function getFullview(){
  img.setAttribute('src', event.target.dataset.fullview)
}

function Gallery(arr) {
  const ul = document.createElement('ul');
  ul.classList.add('preview');
  main.append(ul);
  for(const el of arr){
    const li = document.createElement('li');
    ul.append(li);
    const imgPreview = document.createElement('img');
    imgPreview.classList.add('active');
    imgPreview.setAttribute('src', el.preview);
    imgPreview.setAttribute('data-fullview', el.fullview);
    imgPreview.setAttribute('alt', el.alt);
    li.append(imgPreview);
  }
  ul.addEventListener('click', getFullview);
  ul.addEventListener('click', activeImg);
}

function activeImg(evn) {
  let imgActive =[...document.querySelectorAll(".active")];
  imgActive.forEach(el => {
    if (evn.target !== el) {
      el.classList.remove("hover");
    } else {
      el.classList.add("hover");
    }
  })

  }
Gallery(galleryItems);