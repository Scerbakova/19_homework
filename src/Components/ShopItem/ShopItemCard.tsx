import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppDispatch, RootState } from '../../store';
import { getShopItem, getShopItems, shopItem } from '../../Data/Products/shopItems';
import { addToCart, increment, decrement } from '../../store/reducers/cartReducer';

const ShopItemCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.cart.value);
  const [allShopItems, setAllShopItems] = useState<shopItem[]>();
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const item = getShopItems();
    setAllShopItems(item);
  }, []);

  const showMoreItems = () => {
    setVisibleItems((prevValue) => prevValue + 3);
  };

  return (
    <div>
      <div>
        {allShopItems && allShopItems.slice(0, visibleItems).map(({
          id, img, name, price,
        }) => (
          <div key={id}>
            <img src={img} alt="item" />
            <div>{name}</div>
            <div>{price}</div>
            <button
              onClick={() => dispatch(decrement(1))}
            >
              -
            </button>
            <span>{product}</span>
            <button
              onClick={() => dispatch(increment(1))}
            >
              +
            </button>
            <button onClick={() => dispatch(addToCart(getShopItem(id)))}>Add to cart</button>
          </div>
        ))}
        <div>
          <button onClick={showMoreItems}>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default ShopItemCard;
