// DAY 4: Functional Component with Props
// DAY 5: Props Validation

import React from 'react';
import PropTypes from 'prop-types';
import {
  formatPrice,
  getStarRating
} from '../utils/helpers';

const ProductCard = ({
  product,
  onAddToCart
}) => {

  return (
    <div className="product-card">

      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-rating">
          {getStarRating(product.rating)}
          <span> ({product.rating})</span>
        </div>

        <div className="product-footer">

          <strong className="product-price">
            {formatPrice(product.price)}
          </strong>

          <button
            className="add-cart-button"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
          >
            {product.inStock
              ? 'Add to Cart'
              : 'Out of Stock'}
          </button>

        </div>

      </div>

    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired
  }).isRequired,

  onAddToCart: PropTypes.func.isRequired
};

export default ProductCard;