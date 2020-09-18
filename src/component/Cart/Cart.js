import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.5;
    }
    else if(total = 0){
        shipping = 12.5
    }
    const tex = Math.round(total / 15); 
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Shipping : {shipping}</small></p>
             <p><small>Tex + Vat: {tex}</small></p>
            <b><p>Total: {Math.round(total) + shipping + tex}</p></b>
        </div>
    );
};

export default Cart;