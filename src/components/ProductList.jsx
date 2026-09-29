// DAY 6: Lists with Keys and Parent-Child Communication

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import { CATEGORIES } from '../utils/mockData';

const ProductList = ({
  products,
  onAddToCart
}) => {

  const [selectedCategory, setSelectedCategory] =
    useState('All');

  const [sortBy, setSortBy] =
    useState('name');

  // Filter products
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(
          (p) => p.category === selectedCategory
        );

  // Sort products
  const sortedProducts = [...filteredProducts].sort(
    (a, b) => {

      switch (sortBy) {

        case 'price-low':
          return a.price - b.price;

        case 'price-high':
          return b.price - a.price;

        case 'rating':
          return b.rating - a.rating;

        default:
          return a.name.localeCompare(b.name);
      }
    }
  );

  return (
    <div className="product-list-container">

      <div className="product-controls">

        <div className="control-group">

          <label>Category:</label>

          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value)
            }
            className="control-select"
          >
            {CATEGORIES.map((cat) => (
              <option
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            ))}
          </select>

        </div>

        <div className="control-group">

          <label>Sort By:</label>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="control-select"
          >
            <option value="name">
              Name (A-Z)
            </option>

            <option value="price-low">
              Price (Low to High)
            </option>

            <option value="price-high">
              Price (High to Low)
            </option>

            <option value="rating">
              Rating (High to Low)
            </option>
          </select>

        </div>

      </div>

      <div className="products-info">
        <p>
          Showing {sortedProducts.length} products
        </p>
      </div>

      {sortedProducts.length === 0 ? (

        <div className="empty-state">
          <p>
            No products found in this category.
          </p>
        </div>

      ) : (

        <div className="products-grid">

          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}

        </div>
      )}

    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ProductList;