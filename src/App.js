import{ Routes, Route, Navigate } from 'react-router-dom';
import{ Home } from './components/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductList } from './components/ProductList';
import { CartDetail} from './components/ProductDetail';
import { Contact } from './components/Contact';
import { Cart } from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
      
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="cartdetail" element={<CartDetail />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="/admin" element={<Navigate to="/products" />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}
 
export default App;
