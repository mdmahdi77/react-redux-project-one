import React from 'react';

const Product = (props) => {
    const {addToCart, pd} = props
    return (
        <div>
            <h5>{pd.name}</h5>
            <button onClick={() => addToCart(pd.id, pd.name)}>add to cart</button>
        </div>
    );
};

export default Product;