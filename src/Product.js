import React from 'react';
import "./product.css";
import { useStateValue } from './StateProvider';
function  product({id,title,image,price,rating}) {
    const[{basket}, dispatch] = useStateValue();
    console.log('this is the basket >>>',basket);
    const addToBasket = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };
    return (
        <div className="product ">
            <div className="product_info">
    <p className="product_name">{title}</p>
            <p className="product_price">
                <small>₹</small>
    <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating).fill().map((_,i)=>(
                          <p>⭐</p>
                ))}
              
                
            </div>
            <img className="image1"src={image} alt="" />
            
            </div>
            <button className="product_button" onClick={addToBasket}>Add to Basket</button>
            
        </div>
        
    )
}

export default  product;
