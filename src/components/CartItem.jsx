import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../utils/helpers';

const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove
}) => {

  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">

        <h3>{item.name}</h3>

        <p>
          {formatPrice(item.price)}
        </p>

        <div className="quantity-controls">

          <button
            onClick={() => onDecrease(item.id)}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => onIncrease(item.id)}
          >
            +
          </button>

        </div>

      </div>

      <div className="cart-item-total">

        <strong>
          {formatPrice(
            item.price * item.quantity
          )}
        </strong>

        <button
          className="remove-button"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>

      </div>

    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,

  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default CartItem;