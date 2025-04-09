import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, image }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
      </div>
    </div>
  );
};

export default ProductCard;