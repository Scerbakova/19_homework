import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import CartItemCard from '../../Components/ShopItem/CartItemCard';
// import shopItems from '../../Data/Products/shopItems';
import { AppDispatch, RootState } from '../../store';
import { clearCart, removeFromCart } from '../../store/reducers/cartReducer';

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.shop.items);
  const totalPrice = useSelector((state: RootState) => state.shop.totalPrice);
  const navigate = useNavigate();

  const itemsToBuy = cart.filter((item) => item.addedToCart === true);

  return (
    <div>
      <h1>Your Cart</h1>
      {itemsToBuy && itemsToBuy.length === 0 ? (
        <div>
          <span>
            Empty
          </span>
          <button onClick={() => navigate('/')}>Start shopping</button>
        </div>
      ) : (
        <div>
          <div>
            TOTAL:
            {' '}
            {totalPrice}
          </div>
          {itemsToBuy.map(({
            id, name, img, price, count, addedToCart,
          }) => (
            <div key={id}>
              <CartItemCard
                id={id}
                name={name}
                img={img}
                price={price}
                count={count}
                addedToCart={addedToCart}
              />
              <button onClick={() => dispatch(removeFromCart(id))}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
