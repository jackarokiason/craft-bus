//eslint-disable-next-line
import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket },dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:'Remove_from_Basket',
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}/>
        <div className="checkoutProduct_info">
            <p className="checkoutproduct_title">{title}</p>
            <p className="checkout_price">
                <small>₹</small>  <strong>{price}</strong> </p>
   
        <div className="checkoutProduct_rating">
            {Array(rating)
            .fill()
            .map((_,i)=>(
                <p>⭐</p>
            ))}
        </div>
           <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>

        </div>
    )
}

export default CheckoutProduct
