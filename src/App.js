// Imports
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartProvider from './context/CartContext';
import {Outlet} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
     <Outlet />
       <Footer />
     </CartProvider>
    </div>
  );
}

export default App;
