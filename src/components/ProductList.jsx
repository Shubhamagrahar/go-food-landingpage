import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

const products = {
  'Meat and Seafood': [
    { id: 1, name: 'Italian-Style Chicken Meatballs', price: 8.45 },
    { id: 2, name: 'Crispy Classic Buffalo Wings', price: 8.45 },
    { id: 3, name: 'Seafoods Stuffed Alaskan Salmon', price: 8.45 },
    { id: 4, name: 'Grass-fed 85_15 Ground Beef', price: 8.45 },
    { id: 5, name: 'Choice Angus Beef Stew Meat', price: 8.45 },
  ],
  // Add other categories and products here...
};

const ProductList = ({ category }) => {
  return (
    <div className="ProductList">
      {products[category].map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
