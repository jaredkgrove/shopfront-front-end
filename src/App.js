import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './containers/ProductsList'
import Header from './containers/Header'


function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsList/>
    </div>
  );
}

export default App;
