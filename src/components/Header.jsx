// DAY 4: Functional Component with Props
// DAY 5: Props Validation

import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="header-section">
      <div className="header-container">

        <div className="header-logo">
          <h1>🛒 TechStore</h1>
          <p className="tagline">
            Your Tech Supermarket
          </p>
        </div>

        <div className="header-info">

          <div className="user-info">
            <span>👤 Welcome, Guest</span>
          </div>

          <button
            className="cart-button"
            onClick={onCartClick}
            title="Go to cart"
          >
            🛍️ Cart ({cartItemCount})
          </button>

        </div>

      </div>

      <div className="header-banner">
        <p>
          🎉 Summer Sale! Get 10% off on orders over $500
        </p>
      </div>
    </header>
  );
};

Header.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired
};

Header.defaultProps = {
  cartItemCount: 0
};

export default Header;