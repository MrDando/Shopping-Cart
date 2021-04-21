import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import Home from './Components/Home'
import Shop from './Components/Shop/Shop'
import ProductDetails from './Components/Shop/ProductDetails'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/shop/product/:id' component={ProductDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
