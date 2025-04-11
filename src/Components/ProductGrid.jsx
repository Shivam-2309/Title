// src/components/ProductGrid.jsx
import React from 'react';
import './ProductGrid.css';

const ProductGrid = ({ items }) => {
  return (
    <div className="product-grid-container">
      {items.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.title} className="product-image" />
          <h3 className="product-title">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
