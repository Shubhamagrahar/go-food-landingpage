import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <div className="ProductItem">
    <div className="Item-box">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
      <button>Shop Now</button>
    </div>
  );
};

export default ProductItem;
