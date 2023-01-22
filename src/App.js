import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductListings } from './components/ProductListings/ProductListings';
import Header from './components/Header/Header';
import ProductDetails from './components/ProductDetail/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListings />} />
          <Route path="/product/:prodId" exact element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
