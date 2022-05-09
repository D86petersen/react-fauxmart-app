import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './pages/ProductDetails';
import NotFound from './components/NotFound';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter> 
   <Routes>
    <Route path="/" element={<App />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products/:id" element={<ProductDetails />}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
    </Route>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

