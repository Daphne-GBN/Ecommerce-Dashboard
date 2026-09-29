// DAY 10: Debug Panel

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DebugPanel = ({
  cartItems,
  currentPage
}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="debug-panel-container">

      <button
        className="debug-button"
        onClick={() => setIsOpen(!isOpen)}
        title="Toggle debug panel"
      >
        🐛 Debug
      </button>

      {isOpen && (

        <div className="debug-panel">

          <h3>Debug Information</h3>

          <div className="debug-item">
            <strong>Current Page:</strong>
            <span>{currentPage}</span>
          </div>

          <div className="debug-item">
            <strong>Cart Items:</strong>
            <span>{cartItems.length}</span>
          </div>

          <div className="debug-item">
            <strong>Timestamp:</strong>
            <span>
              {new Date().toLocaleTimeString()}
            </span>
          </div>

          <div className="debug-item">
            <strong>Environment:</strong>
            <span>Development</span>
          </div>

        </div>
      )}

    </div>
  );
};

DebugPanel.propTypes = {
  cartItems: PropTypes.array.isRequired,
  currentPage: PropTypes.string.isRequired
};

export default DebugPanel;