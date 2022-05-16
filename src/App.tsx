import './App.scss';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Header from './Components/Header/Header';
import CartPage from './Pages/Cart/CartPage';
import ShopPage from './Pages/Shop/ShopPage';

const App = () => (
  <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
