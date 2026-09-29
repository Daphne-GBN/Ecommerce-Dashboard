import React, { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your shopping cart is empty.</p>

          <button
            className="primary-button"
            onClick={() => window.history.back()}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <h3>{item.title}</h3>

                <p>Price: ₹{item.price}</p>

                <button onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>

                <span> {item.quantity} </span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>

                <button onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{calculateTotal().toFixed(2)}</h3>

            <button
              className="primary-button"
              onClick={() => alert("Checkout clicked!")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}