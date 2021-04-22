import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState, useEffect} from 'react'

import Nav from './Components/Nav'
import Home from './Components/Home'
import Shop from './Components/Shop/Shop'
import ProductDetails from './Components/Shop/ProductDetails'
import Cart from './Components/Shop/Cart'

function App() {
  const [selectedProduct, setSelectedProduct] = useState({})
  const [cart, setCart] = useState([])

  function getSelectedProduct(product) {
    setSelectedProduct(product)
  }

  function updateCart(productObj) {
    console.log('update cart', productObj)

  }

  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/shop'>
            <Shop getSelectedProduct={getSelectedProduct}/>
          </Route>
          <Route exact path='/shop/product/:id'>
            <ProductDetails product={selectedProduct} updateCart={updateCart}/>
          </Route>
          <Route exact path='/shop/cart'>
            <Cart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
