import React from 'react';
import './CategoryMenu.css';

const CategoryMenu = ({ onCategoryChange }) => {
  const categories = ['Fruits and Vegetables', 'Bakery', 'Meat and Seafood', 'Beverage', 'Biscuit and Snacks'];

  return (
    <div className="CategoryMenu">
      {categories.map((category) => (
        <button key={category} onClick={() => onCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu;
