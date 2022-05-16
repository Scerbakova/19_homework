import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { AppDispatch, RootState } from '../../store';
import { clearCart, removeFromCart } from '../../store/reducers/cartReducer';

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.cartItems.length === 0 ? (
        <div>
          <span>
            Empty
          </span>
          <button onClick={() => navigate('/')}>start shopping</button>
        </div>
      ) : (
        <div>
          {cart.cartItems?.map(({
            id, name, img, price,
          }) => (
            <div>
              <div>{id}</div>
              <div>{name}</div>
              <div>
                <img src={img} alt="product" />
              </div>
              <div>{ price }</div>
              <button onClick={() => dispatch(removeFromCart({
                id, name, img, price,
              }))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => dispatch(clearCart([]))}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
