import React, { Component } from 'react';
import Card from './Card/Card';
import './App.css'

class App extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         shoes:[{
    //             logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
    //             item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
    //             title: 'Hartbeespoort',
    //             desc: 'Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness',
    //             bgt: 'FAS',
    //             productDesc: 'Hartbee',
    //             productDescSecond: 'spoort',
    //             bage: 'New',
    //             caption: 'Basket Ball Collection',
    //             sizes: [7,8,9,10,11],
    //             colors: ['orange', 'green', 'yellow'],
    //             price: '23.453',
    //         },
    //         {
    //             logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
    //             item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
    //             title: 'Nike Air Jordan ',
    //             desc: 'Nike Air Jordan I 1 Retro Mens Shoes Leather Black Blue',
    //             bgt: 'NAJ',
    //             productDesc: 'Nike',
    //             productDescSecond: 'Air Jordan',
    //             bage: 'New',
    //             caption: "Men's Basketball",
    //             sizes: [6,7,8,12],
    //             colors: ['green', 'yellow'],
    //             price: '88.19',
    //         },{
    //             logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
    //             item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
    //             title: 'Nike Air Huarache',
    //             desc: 'Nike Air Huarache Run Ultra BR Running Shoes Sneakers Dark Grey Menta Black',
    //             bgt: 'NAH',
    //             productDesc: 'Nike',
    //             productDescSecond: 'Air Huarache',
    //             bage: 'sale',
    //             caption: 'Unisex Running',
    //             sizes: [10,11,12,13],
    //             colors: ['orange'],
    //             price: '78.21',
    //         }]
    //     }

    // }       // для Es6

    state={
        shoes:[{
            logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
            item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
            title: 'Hartbeespoort',
            desc: 'Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness',
            bgt: 'FAS',
            productDesc: 'Hartbee',
            productDescSecond: 'spoort',
            bage: 'New',
            caption: 'Basket Ball Collection',
            sizes: [7,8,9,10,11],
            colors: ['orange', 'green', 'yellow'],
            price: '23.453',
        },
        {
            logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
            item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
            title: 'Nike Air Jordan ',
            desc: 'Nike Air Jordan I 1 Retro Mens Shoes Leather Black Blue',
            bgt: 'NAJ',
            productDesc: 'Nike',
            productDescSecond: 'Air Jordan',
            bage: 'New',
            caption: "Men's Basketball",
            sizes: [6,7,8,12],
            colors: ['green', 'yellow'],
            price: '88.19',
        },{
            logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
            item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
            title: 'Nike Air Huarache',
            desc: 'Nike Air Huarache Run Ultra BR Running Shoes Sneakers Dark Grey Menta Black',
            bgt: 'NAH',
            productDesc: 'Nike',
            productDescSecond: 'Air Huarache',
            bage: 'sale',
            caption: 'Unisex Running',
            sizes: [10,11,12,13],
            colors: ['orange'],
            price: '78.21',
            // retail:{
            //     buy:55.12,
            // sell:78.21,
            //                     }
        }],
        cartCounter:0,
        cart:[],
    }
    increment =(evt)=>{      
        let title =evt.target.dataset.title;      
        let result=this.state.shoes.find(el=>el.title===title)
        this.setState(prev=>({     // prev предыдущее значение
            cartCounter:prev.cartCounter+1,
            cart:[...prev.cart,result],
            // totalPrice:prev.totalPrice+price,
        }))
        // this.setState({
        //     cartCounter:5 //чтобы при 1  пкупки счетчик увеличивался на 5 сразу. 
        // })
    }
    render() { // не рекомендуется делать баинд он сильно понижает продуктивность сайта
        const {shoes,cartCounter,totalPrice,cart}=this.state;
        let sum=cart.reduce((acc,el)=>acc+Number(el.price),0)
        return (
            <div className='box'>
            <div className='info'>
            <div className='cart'>
            {cart.map(el=><p key={el.title} className="cartInfo"><span>{el.title}</span><span>{el.price}</span></p>)}
            <p className='counter total'>Total price {sum.toFixed(2)}</p>
            {/* <p className='counter total'>Total price {totalPrice.toFixed(2)}</p> */}
            </div>
            {/* <p className='counter'> Amount {cartCounter}</p>
            <p className='counter'>Total price {totalPrice.toFixed(2)}</p> */}
            </div>
            {shoes.map(el=><Card key={el.title} title={el.title} desc={el.desc} bgt={el.bgt} productDesc={el.productDesc} productDescSecond={el.productDescSecond} bage={el.bage}caption={el.caption}sizes={el.sizes}colors={el.colors}price={el.price}retail={el.retail} increment={this.increment}/>)}
               
                {/* <button onClick={this.increment}>plus</button> */}
                
            </div>
        );
    }
}

export default App;




















// import React from 'react';
// import './App.css'

// const App = () => {
//     let shoes = [{
//         logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
//         item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
//         title: 'Hartbeespoort',
//         desc: 'Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness',
//         bgt: 'FAS',
//         productDesc: 'Hartbee',
//         productDescSecond: 'spoort',
//         bage: 'New',
//         caption: 'Basket Ball Collection',
//         sizes: [7,8,9,10,11],
//         colors: ['orange', 'green', 'yellow'],
//         price: '23.453',
//     },
//     {
//         logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
//         item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
//         title: 'Nike Air Jordan ',
//         desc: 'Nike Air Jordan I 1 Retro Mens Shoes Leather Black Blue',
//         bgt: 'NAJ',
//         productDesc: 'Nike',
//         productDescSecond: 'Air Jordan',
//         bage: 'New',
//         caption: "Men's Basketball",
//         sizes: [6,7,8,12],
//         colors: ['green', 'yellow'],
//         price: '88.19',
//     },{
//         logo: 'https://s5.postimg.cc/wy79025cz/nike_Logo_White.png',
//         item: 'https://s5.postimg.cc/j9r8yf9gn/sws1.png',
//         title: 'Nike Air Huarache',
//         desc: 'Nike Air Huarache Run Ultra BR Running Shoes Sneakers Dark Grey Menta Black',
//         bgt: 'NAH',
//         productDesc: 'Nike',
//         productDescSecond: 'Air Huarache',
//         bage: 'sale',
//         caption: 'Unisex Running',
//         sizes: [10,11,12,13],
//         colors: ['orange'],
//         price: '78.21',
//     }]
//     return (
//         <div className='box'>
//         {shoes.map(el=>
//         <div class="container" key={el.title}> 
//             <div class="card">
//               <div class="card-head">
//                 <img src="https://s5.postimg.cc/wy79025cz/nike_Logo_White.png" alt="logo" class="card-logo"/>
//                 <img src="https://s5.postimg.cc/j9r8yf9gn/sws1.png" alt="Shoe" class="product-img"/>
//                 <div class="product-detail">
//                   <h2>{el.title}</h2> {el.desc}
//                 </div>
//                 <span class="back-text">
//                         {el.bgt}
//                       </span>
//               </div>
//               <div class="card-body">
//                 <div class="product-desc">
//                   <span class="product-title">
//                           {el.productDesc}<b>{el.productDescSecond}</b>
//                           <span class="badge">
//                             {el.bage}
//                           </span>
//                   </span>
//                   <span class="product-caption">
//                           {el.caption}
//                         </span>
//                 </div>
//                 <div class="product-properties">
//                   <span class="product-size">
//                           <h4>Size</h4>
//                           <ul class="ul-size">
//                           {el.sizes.map(size=>
//                             <li key={el.title+size}><a href="#">{size}</a></li>)}
//                             {/* <li><a href="#">8</a></li>
//                             <li><a href="#">9</a></li>
//                             <li><a href="#">10</a></li>
//                             <li><a href="#">11</a></li> */}
//                           </ul>
//                         </span>
//                   <span class="product-color">
//                           <h4>Colour</h4>
//                           <ul class="ul-color">
//                           {el.colors.map(color=>
//                              <li key={el.title+color}><a href="#" className={color}></a></li>)}
//                            {/* <li><a href="#" class="green"></a></li>
//                             <li><a href="#" class="yellow"></a></li> */}
//                           </ul>
//                         </span>
//                   <span class="product-price">
//                           USD<b>23,453</b>
//                         </span>
//                 </div>
//               </div>
//             </div>
//             </div>
//             )};
//           </div>


    
//     )}


// export default App;