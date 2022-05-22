import { useEffect, useState } from 'react';
import ShopItemCard from '../../Components/ShopItem/ShopItemCard';
import { getShopItems, ShopItem } from '../../Data/Products/shopItems';

const ShopPage = () => {
  const [shopItems, setShopItems] = useState<ShopItem[]>();
  const [visibleItems, setVisibleItems] = useState(3);

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
      <button onClick={showMoreItems}>Load More</button>
    </div>
  );
};
export default ShopPage;
