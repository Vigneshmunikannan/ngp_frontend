import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home'
import Categories from './Categories'
import Cart from './Cart'
import ProductList from './ProductList';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} >
            <Route path='/categories' element={<Categories/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path="/category/:category" element={<ProductList/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
