const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];
  
  
  
  
  
  function createPostCard(el){
    let body = document.querySelector('body');
    let div = document.createElement('div');
    div.classList.add('post');
    body.append(div);
  
    let img=document.createElement('img')
    img.classList.add("post__image");
    img.setAttribute('src', el.img);
    img.setAttribute('alt', 'post image');
    div.prepend(img);
    
    let h2=document.createElement('h2')
    h2.classList.add("post__title");
    h2.textContent = el.title;
    div.append(h2);
  
    let p = document.createElement('p');
    p.classList.add("post__text");
    p.textContent = el.text;
    div.append(p);
  
    let a = document.createElement('a');
    a.classList.add('button');
    a.setAttribute('href', '#');
    a.textContent = el.link;
    div.append(a);
  
  }
  
  function createCards(posts){
    for(let el of posts){
      createPostCard(el)
    }
  }
  createCards(posts)