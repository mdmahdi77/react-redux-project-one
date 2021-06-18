import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/action/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props)
    const { products, addToCart } = props
    return (
        <div>
            <h1>This is shop</h1>
            {
                products.map(pd => <Product
                     pd={pd}
                     key={pd.id}
                     addToCart={addToCart}
                     ></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps) (Shop);