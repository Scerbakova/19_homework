import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ShopItemCard from '../../Components/ShopItem/ShopItemCard';
import { AppDispatch, RootState } from '../../store';
import { clearCart, removeFromCart } from '../../store/reducers/cartReducer';

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart && cart.length === 0 ? (
        <div>
          <span>
            Empty
          </span>
          <button onClick={() => navigate('/')}>Start shopping</button>
        </div>
      ) : (
        <div>
          {cart.map(({
            id, name, img, price, count,
          }) => (
            <div>
              <ShopItemCard
                id={id}
                name={name}
                img={img}
                price={price}
                count={count}
              />
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
