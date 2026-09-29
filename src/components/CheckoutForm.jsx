import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  formatPrice,
  validateEmail,
  validatePhoneNumber,
  generateOrderId
} from '../utils/helpers';

const CheckoutForm = ({
  total,
  onOrderComplete
}) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');

  const handleChange = (e) => {

    const {
      name,
      value
    } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (!validatePhoneNumber(formData.phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    if (!formData.address.trim()) {
      setError('Please enter your address.');
      return;
    }

    setError('');

    const newOrderId = generateOrderId();

    setOrderId(newOrderId);

    if (onOrderComplete) {
      onOrderComplete(newOrderId);
    }
  };

  if (orderId) {

    return (
      <div className="order-success">

        <h2>🎉 Order Placed Successfully!</h2>

        <p>
          Thank you, {formData.name}.
        </p>

        <p>
          Your order ID is:
        </p>

        <strong>{orderId}</strong>

        <p>
          Total paid: {formatPrice(total)}
        </p>

      </div>
    );
  }

  return (
    <div className="checkout-form-container">

      <h2>💳 Checkout</h2>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

        </div>

        <div className="form-group">

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

        </div>

        <div className="form-group">

          <label>Phone</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />

        </div>

        <div className="form-group">

          <label>Address</label>

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows="4"
          />

        </div>

        <div className="checkout-total">

          <strong>
            Total: {formatPrice(total)}
          </strong>

        </div>

        <button
          type="submit"
          className="primary-button"
        >
          Place Order
        </button>

      </form>

    </div>
  );
};

CheckoutForm.propTypes = {
  total: PropTypes.number.isRequired,
  onOrderComplete: PropTypes.func
};

CheckoutForm.defaultProps = {
  onOrderComplete: () => {}
};

export default CheckoutForm;