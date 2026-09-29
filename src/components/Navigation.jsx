// DAY 4: Functional Component with Navigation

import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({
  currentPage,
  onNavigate
}) => {

  const navItems = [
    { id: 'home', label: '🏠 Home' },
    { id: 'products', label: '📦 Products' },
    { id: 'cart', label: '🛒 Cart' },
    { id: 'checkout', label: '💳 Checkout' }
  ];

  return (
    <nav className="navigation-bar">
      <div className="nav-container">

        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${
              currentPage === item.id ? 'active' : ''
            }`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}

      </div>
    </nav>
  );
};

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default Navigation;