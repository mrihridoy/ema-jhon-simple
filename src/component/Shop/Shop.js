import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import fakeData from '../../fakeData';
import '../Shop/Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10)
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        
        const newCart = [...cart, product];
        setCart(newCart)
        
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                {
                product.map(product => <Product
                    handleAddProduct = {handleAddProduct}
                    product={product}></Product>)
                }
            </ul>
            </div>

            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
            

     
        
        </div>
    );
};

export default Shop;