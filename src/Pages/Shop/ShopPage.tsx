import { useState } from 'react';
import { useSelector } from 'react-redux';
import ShopItemCard from '../../Components/ShopItem/ShopItemCard';
import { RootState } from '../../store';

const ShopPage = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const shop = useSelector((state: RootState) => state.shop.items);

  const showMoreItems = () => {
    setVisibleItems((prevValue) => prevValue + 3);
  };

  return (
    <div className="shop--page__wrapper">
      <div className="shop--cards__wrapper">
        {shop && shop.slice(0, visibleItems).map(({
          id, name, price, img, count, addedToCart,
        }) => (
          <div key={id}>
            <ShopItemCard
              addedToCart={addedToCart}
              id={id}
              name={name}
              price={price}
              count={count}
              img={img}
            />
          </div>
        ))}
      </div>
      <button onClick={showMoreItems}>Load More</button>
    </div>
  );
};
export default ShopPage;
