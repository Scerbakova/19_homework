import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ShopItemCard from '../../Components/ShopItem/ShopItemCard';
import { getShopItems, ShopItem } from '../../Data/Products/shopItems';
import { RootState } from '../../store';

const ShopPage = () => {
  const [shopItems, setShopItems] = useState<ShopItem[]>();
  const [visibleItems, setVisibleItems] = useState(3);
  const cart = useSelector((state: RootState) => state.cart.cartItems);

  useEffect(() => {
    const allShopItems = getShopItems();
    setShopItems(allShopItems);
  }, []);

  const showMoreItems = () => {
    setVisibleItems((prevValue) => prevValue + 3);
  };

  return (
    <div>
      <div>
        {shopItems && shopItems.slice(0, visibleItems).map(({
          id, name, price, img, count,
        }) => (
          <ShopItemCard key={id} id={id} name={name} price={price} count={count} img={img} />
        ))}
      </div>
      {/* {cart.map((i) => <div>{i.name}</div>)} */}
      <button onClick={showMoreItems}>Load More</button>
    </div>
  );
};
export default ShopPage;
