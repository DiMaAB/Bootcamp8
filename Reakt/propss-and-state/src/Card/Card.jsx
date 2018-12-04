import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'
const Card = ({title,desc,bgt,productDesc,productDescSecond,bage,caption,sizes,colors,price,retail,increment}) => {
    // console.log(props);
    return (
        <div className="container"> 
        <div className="card">
          <div className="card-head">
            <img src="https://s5.postimg.cc/wy79025cz/nike_Logo_White.png" alt="logo" className="card-logo"/>
            <img src="https://s5.postimg.cc/j9r8yf9gn/sws1.png" alt="Shoe" className="product-img"/>
            <div className="product-detail">
              <h2>{title}</h2> {desc}
            </div>
            <span className="back-text">
                    {bgt}
                  </span>
          </div>
          <div className="card-body">
            <div className="product-desc">
              <span className="product-title">
                    {productDesc}  <b>{productDescSecond}</b>
                      <span className="badge">
                        {bage}
                      </span>
              </span>
              <span className="product-caption">
                      {caption}
                    </span>
            </div>
            <div className="product-properties">
              <span className="product-size">
                      <h4>Size</h4>
                      <ul className="ul-size">
                      {sizes.map(size=><li key={title+size}><a href="#">{size}</a></li>)}
                      {/* {el.sizes.map(size=>
                        <li key={el.title+size}><a href="#">{size}</a></li>)} */}
                       
                      </ul>
                    </span>
              <span className="product-color">
                      <h4>Colour</h4>
                      <ul className="ul-color">
                      {colors.map(color=>
                         <li key={title+color}><a href="#" className={color}></a></li>)}
                      {/* {el.colors.map(color=>
                         <li key={el.title+color}><a href="#" className={color}></a></li>)} */}
                      
                      </ul>
                    </span>
              <span className="product-price">
                      USD<b>{price}</b>
                    </span>
            </div>
            <button className='add' onClick={increment} data-title={title}>Add to cart</button>
          </div>
        </div>
        </div>
    );
};
Card.propTypes={
    title:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired, //обязательный пропс.
    bgt:PropTypes.string,
    productDesc:PropTypes.string.isRequired,
    productDescSecond:PropTypes.string.isRequired,
    bage:PropTypes.string.isRequired,
    caption:PropTypes.string.isRequired,
    sizes:PropTypes.arrayOf(PropTypes.number).isRequired,
    colors:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.string.isRequired,
    // retail:PropTypes.shape({
    //     buy:PropTypes.number,
    //     seil:PropTypes.number,
    // })
    increment: PropTypes.func.isRequired,
}
Card.defaultProps={  // если мы не передадим пропс то возмется дефолтное значение котоое мы припишем в данном случаи FAS
    bgt:'FAS',
}

export default Card;