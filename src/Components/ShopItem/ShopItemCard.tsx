import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { getShopItem, ShopItem } from '../../Data/Products/shopItems';
import { addToCart, decrement, increment } from '../../store/reducers/cartReducer';

const ShopItemCard: FC<ShopItem> = ({
  id, img, name, price, count,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [singleItem, setSingleItem] = useState<ShopItem>();
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const item = getShopItem(id);
    setSingleItem(item);
  }, []);

  return (
    <div>
      <img src={img} alt="item" />
      <div>{name}</div>
      <div>{price}</div>
      <button onClick={() => {
        dispatch(decrement({ item: singleItem, count: amount }));
        setAmount(amount > 0 ? amount - 1 : amount);
      }}
      >
        -
      </button>
      <span>
        {count}
        quantity
      </span>
      <span>
        {amount}
      </span>
      <button onClick={() => {
        dispatch(increment({ item: singleItem, count: amount }));
        setAmount(amount + 1);
      }}
      >
        +
      </button>
      {singleItem && (
      <button onClick={() => {
        dispatch(addToCart({ item: singleItem, count: amount }));
      }}
      >
        Add to cart
      </button>
      )}

    </div>
  );
};
export default ShopItemCard;
