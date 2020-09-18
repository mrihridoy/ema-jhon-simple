import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../Product/Product.css'

const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, category, url} = props.product;
    return (
        <div className="product-list">
            <div>
            <img src={img} alt=""/>
            </div>
            <div className="product-name">
            <a href={url}><h4>{name}</h4></a>
            <br/>
            By: <b>{seller}</b>  | Category: <b>{category}</b>
            <br/><br/>
            Price: <b>${price}</b><br/>
            <button 
            className="add-to-cart-btn"
            onClick={() => props.handleAddProduct(props.product)}
            >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;