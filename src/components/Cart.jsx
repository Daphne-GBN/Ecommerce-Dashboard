import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../components/CartItem';
import {
  calculateTotal,
  formatPrice
} from '../utils/helpers';

const Cart = ({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
  onContinueShopping
}) => {

  const total = calculateTotal(cartItems);

  if (cartItems.length === 0) {

    return (
      <div className="cart-container empty-cart">

        <h2>🛒 Your Cart</h2>

        <p>
          Your shopping cart is empty.
        </p>

        <button
          className="primary-button"
          onClick={onContinueShopping}
        >
          Continue Shopping
        </button>

      </div>
    );
  }

  return (
    <div className="cart-container">

      <h2>🛒 Your Cart</h2>

      <div className="cart-items">

        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
          />
        ))}

      </div>

      <div className="cart-summary">

        <h3>
          Total: {formatPrice(total)}
        </h3>

        <button
          className="primary-button"
          onClick={onCheckout}
        >
          Proceed to Checkout
        </button>

      </div>

    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired,
  onContinueShopping: PropTypes.func.isRequired
};

export default Cart;