import { LocalStorageItem, ProductColors, ProductData } from '../types/types';

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

export function getCartQty(
  colorOnly: boolean,
  cartItems: LocalStorageItem[],
  product: ProductData,
  selectedColor: ProductColors,
  selectedSize?: string
): number {
  if (product && selectedColor) {
    const colorMatch = (item: LocalStorageItem) =>
      item.id === product.id && item.color.code === selectedColor.code;
    const currentItem = cartItems.find((item) =>
      colorOnly
        ? colorMatch(item)
        : colorMatch(item) && item.size === selectedSize
    );
    const currentQty = currentItem ? currentItem.qty : 0;
    return currentQty;
  }
  return 0;
}
