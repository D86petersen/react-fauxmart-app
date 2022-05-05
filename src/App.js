// Imports
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './pages/ProductDetails';
import NotFound from './components/NotFound';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductDetails />}/>
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
