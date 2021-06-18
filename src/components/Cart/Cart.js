import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/action/cartActions';

const Cart = (props) => {
    console.log(props)
    const { cart, removeFromCart } = props
    return (
        <div>
            <h3>This is cart</h3>
            <ul>
                {
                    cart.map(item => <li key={item.cartId}>{item.name} <button onClick={() => removeFromCart(item.cartId)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);