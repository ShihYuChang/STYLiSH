'use client';
import { ProductContext } from '@/context/ProductContext';
import { LocalStorageItem, ProductData, ProductVariants } from '@/types/types';
import { useContext } from 'react';

function combineProduct(cartItems: LocalStorageItem[]): LocalStorageItem[] {
  const output = cartItems.reduce<{ [key: string]: LocalStorageItem }>(
    (acc, cur) => {
      const key = `${cur.id}-${cur.color.code}-${cur.size}`;

      if (!acc[key]) {
        acc[key] = { ...cur };
        return acc;
      }
      acc[key].qty += cur.qty;
      acc[key].totalPrice += cur.totalPrice;

      return acc;
    },
    {}
  );
  return Object.values(output);
}

export default function AddToCart() {
  const {
    product,
    selectedColor,
    selectedSize,
    quantity,
    setQuantity,
    setSelectedColor,
    setSelectedSize,
    setCartQty,
  } = useContext(ProductContext);

  function addToLocalStorage(product: ProductData) {
    const currentItems = localStorage.getItem('cartItems');
    const productStock: ProductVariants =
      selectedColor &&
      product.variants.find(
        (item) =>
          item.color_code === selectedColor.code && item.size === selectedSize
      );
    if (currentItems && productStock) {
      const parsedItems = JSON.parse(currentItems);
      const itemDetails: LocalStorageItem = {
        color: { name: selectedColor?.name, code: selectedColor?.code },
        id: product.id,
        img: product.main_image,
        title: product.title,
        price: product.price,
        qty: quantity,
        size: selectedSize,
        totalPrice: product.price * quantity,
        stock: productStock.stock,
      };

      parsedItems.push(itemDetails);
      const combinedItems = combineProduct(parsedItems);

      localStorage.setItem('cartItems', JSON.stringify(combinedItems));
    }
  }

  function resetSelection() {
    setQuantity(0);
    setSelectedColor(null);
    setSelectedSize(null);
  }

  function updateCartQty() {
    setCartQty((prev) => prev + quantity);
  }

  function addToCart(product: ProductData) {
    addToLocalStorage(product);
    updateCartQty();
    resetSelection();
  }

  if (!product) return undefined;
  return (
    <button
      className='w-full h-[44px] xl:h-[64px] xl:text-[20px] bg-black text-white tracking-[3.2px] flex justify-center items-center mb-[28px]'
      onClick={() => addToCart(product)}
    >
      加入購物車
    </button>
  );
}
