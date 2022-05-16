import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header__container">
      <div>
        <button onClick={() => navigate('/')}>
          LOGO
        </button>
      </div>
      <nav className="navigation">
        <div>
          <select name="languages" id="languages">
            <option value="en">EN</option>
            <option value="lv">LV</option>
          </select>
        </div>
        <button onClick={() => navigate('/cart')}>
          Cart
          {' '}
          <span> 0 </span>
        </button>
      </nav>
    </div>
  );
};
export default Header;
