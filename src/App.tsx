import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import CartPage from './Pages/Cart/CartPage';
import ShopPage from './Pages/Shop/ShopPage';

const App = () => (
  <div className="app">
    <Router>
      <Header cart={0} />
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<ShopPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
