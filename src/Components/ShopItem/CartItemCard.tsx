import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { ShopItem } from '../../Data/Products/shopItems';
import {
  addCount, removeCount, showTotal, showTotalPrice,
} from '../../store/reducers/cartReducer';

const CartItemCard: FC<ShopItem> = ({
  id, img, name, price, count, totalPrice,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div>
        <img src={img} alt="item" />
        <div>{name}</div>
        <div>{totalPrice}</div>
        <div>{price}</div>
        <button onClick={() => {
          dispatch(removeCount(id));
          dispatch(showTotalPrice());
          dispatch(showTotal());
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
          dispatch(showTotal());
        }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default CartItemCard;
