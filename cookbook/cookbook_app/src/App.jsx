import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import Recipe from './Recipe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:categoryId" element={<Category />} />
        <Route path="/recipes/:recipeId" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default App;
