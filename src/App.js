import React from 'react';
import Cart from './components/Cart/Cart';
import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navbar/Navbar'
import Product from './components/Product/Product'
import ProductPage from './components/ProductPage/ProductPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainScreen from './components/MainScreen';



function App() {
  return (
    <Router>
    <Navigation/>
    <Switch>
      <Route exact path="/">
        <MainScreen />
      </Route>
      <Route exact path="/products">
        <Product/>
      </Route>
      <Route exact path="/product">
        <ProductPage />
      </Route>
      <Route exact path="/cart">
        <Cart/>
      </Route>
    </Switch>
  
    </Router>
   
  )
}

export default App;
