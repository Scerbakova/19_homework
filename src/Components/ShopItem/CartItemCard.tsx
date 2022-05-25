import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { ShopItem } from '../../Data/Products/shopItems';
import { addCount, removeCount, showTotalPrice } from '../../store/reducers/cartReducer';

const CartItemCard: FC<ShopItem> = ({
  id, img, name, price, count,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div>
        <img src={img} alt="item" />
        <div>{name}</div>
        <div>{price}</div>
        <button onClick={() => {
          dispatch(removeCount(id));
          dispatch(showTotalPrice());
        }}
        >
          -
        </button>
        <span>
          {count}
        </span>
        <button onClick={() => {
          dispatch(addCount(id));
          dispatch(showTotalPrice());
        }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default CartItemCard;
