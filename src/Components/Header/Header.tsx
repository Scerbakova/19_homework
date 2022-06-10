import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store';
import { showTotalPrice } from '../../store/reducers/cartReducer';

export type HeaderProps = {
  cart: number
}

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();

  const totalcount = useSelector((state: RootState) => state.shop.total);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="header__container">
      <div>
        <button onClick={() => navigate('/')}>
          LOGO
        </button>
      </div>
      <nav className="navigation">
        <button onClick={() => {
          navigate('/cart');
          dispatch(showTotalPrice());
        }}
        >
          Items in your cart:
          {' '}
          <span>{totalcount}</span>
        </button>
      </nav>
    </div>
  );
};
export default Header;
