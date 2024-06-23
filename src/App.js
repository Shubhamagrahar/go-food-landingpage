import React, { useState } from 'react';
import Header from './components/Header';
import CategoryMenu from './components/CategoryMenu';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  const [category, setCategory] = useState('Meat and Seafood');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="App">
      <Header />
      <CategoryMenu onCategoryChange={handleCategoryChange} />
      <ProductList category={category} />
    </div>
  );
};

export default App;
