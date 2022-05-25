import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { ShopItem } from '../../Data/Products/shopItems';
import {
  addCount, addToCart, removeCount, showTotal,
} from '../../store/reducers/cartReducer';

const ShopItemCard: FC<ShopItem> = ({
  img, name, price, count, id,
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
        }}
        >
          -
        </button>
        <span>
          {count}
        </span>
        <button onClick={() => {
          dispatch(addCount(id));
        }}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(addToCart(id));
            dispatch(showTotal());
          }}
        >
          Add to cart
        </button>
      </div>

    </div>
  );
};
export default ShopItemCard;
