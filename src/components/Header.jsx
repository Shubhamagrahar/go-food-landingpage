import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <h1>Go Food</h1>
      <p>Buy Fresh And Organic Grocery Food</p>
      <button>Shop Now</button>
      <div>
        <span>35k+ Users</span>
        <span>18k+ Products</span>
      </div>
    </header>
  );
};

export default Header;
