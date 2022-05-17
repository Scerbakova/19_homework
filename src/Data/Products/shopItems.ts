export type ShopItem = {
  id: number,
  img: string,
  name: string,
  price: number,
  count: number,
}

const shopItems: ShopItem[] = [
  {
    id: 1,
    img: 'book.jpg',
    name: 'book',
    price: 9.99,
    count: 0,
  },
  {
    id: 2,
    img: 'table.jpg',
    name: 'table',
    price: 98.99,
    count: 0,
  },
  {
    id: 3,
    img: 'pillow.jpg',
    name: 'pillow',
    price: 5.99,
    count: 0,
  },
  {
    id: 4,
    img: '/icecream.jpg',
    name: 'ice cream',
    price: 2.99,
    count: 0,
  },
  {
    id: 5,
    img: '/keyboard.jpg',
    name: 'keyboard',
    price: 4.99,
    count: 0,
  },
  {
    id: 6,
    img: 'book.jpg',
    name: 'book',
    price: 9.99,
    count: 0,
  },
  {
    id: 7,
    img: 'table.jpg',
    name: 'table',
    price: 98.99,
    count: 0,
  },
  {
    id: 8,
    img: 'pillow.jpg',
    name: 'pillow',
    price: 5.99,
    count: 0,
  },
  {
    id: 9,
    img: '/icecream.jpg',
    name: 'ice cream',
    price: 2.99,
    count: 0,
  },
  {
    id: 10,
    img: '/keyboard.jpg',
    name: 'keyboard',
    price: 4.99,
    count: 0,
  },
];

export const getShopItems = () => [...shopItems];
export const getShopItem = (id: number) => shopItems.find((item) => item.id === id);

export default shopItems;
