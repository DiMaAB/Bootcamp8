import React from 'react';
import'./Gallery.css';
const Gallery = () => {
    let imgArr=[
        {src:"https://cloudstatic.eva.ru/eva/190000-200000/193381/channel/11797916849243365.jpg",id:1},
       { src:"https://telegraf.com.ua/files/2017/10/19761806_288824814915520_4133632780875595776_n.jpg",id:2},
        {src:"https://img.tsn.ua/cached/1518092914/tsn-84c75562ec6649b329b5d1cd14f9fd3c/thumbs/1200x630/c5/08/b8209e8ba7cf203a62540f558b7608c5.jpg",id:3},
        {src:"https://99px.ru/sstorage/53/2015/12/mid_153273_7822.jpg",id:4},
        {src:"https://avatanplus.com/files/resources/mid/5831700015947158811d8058.png",id:5},
        {src:"http://mignews.com.ua/modules/news/images/articles/photo/changing/19589673-kak-mikki-maus-polzovatelej-seti-pokori.jpg",id:6}
    ];
    return (
        <div className='gallery'>
        {imgArr.map(el=><img src={el.src} alt='gallery-item' key={el.id}/>)}   {/*в этих скобках нельзя писать if else map*/}
            
        </div>
    );
};

export default Gallery;