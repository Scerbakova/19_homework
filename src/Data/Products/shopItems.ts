export type shopItem = {
  id: number,
  img: string,
  name: string,
  price: number,
}

const shopItems: shopItem[] = [
  {
    id: 1,
    img: 'book.jpg',
    name: 'book',
    price: 9.99,

  },
  {
    id: 2,
    img: 'table.jpg',
    name: 'table',
    price: 98.99,

  },
  {
    id: 3,
    img: 'pillow.jpg',
    name: 'pillow',
    price: 5.99,

  },
  {
    id: 4,
    img: '/icecream.jpg',
    name: 'ice cream',
    price: 2.99,

  },
  {
    id: 5,
    img: '/keyboard.jpg',
    name: 'keyboard',
    price: 4.99,

  },
];

export const getShopItems = () => [...shopItems];
export const getShopItem = (id: number) => shopItems.find((item) => item.id === id);

export default shopItems;
