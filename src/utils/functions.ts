import { LocalStorageItem } from '../types/types';
export function getTotalCartQty() {
  const cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    const parsedItems = JSON.parse(cartItems);
    const totalQty = parsedItems.reduce(
      (acc: number, cur: LocalStorageItem) => {
        acc += cur.qty;
        return acc;
      },
      0
    );
    return totalQty;
  }
  return undefined;
}
