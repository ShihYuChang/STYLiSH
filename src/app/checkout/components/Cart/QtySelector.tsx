import { LocalStorageItem, OrderInfo } from '@/types/types';
import { SetStateAction } from 'react';
import { useContext } from 'react';
import { CheckoutContext } from '../../context/CheckoutContext';

interface SelectorProps {
  stock: number;
  item: LocalStorageItem;
  orderInfo: OrderInfo;
  setOrderInfo: React.Dispatch<SetStateAction<OrderInfo>>;
}

function updateCartItems(
  newItems: LocalStorageItem[],
  setCartItems: React.Dispatch<SetStateAction<LocalStorageItem[]>>
) {
  setCartItems(newItems);
}

function updateLocalStorage(
  e: React.ChangeEvent<HTMLSelectElement>,
  item: LocalStorageItem,
  setCartItems: React.Dispatch<SetStateAction<LocalStorageItem[]>>
) {
  const cartItems = localStorage.getItem('cartItems');
  const newItem = { ...item };
  if (cartItems) {
    const parsedItems = JSON.parse(cartItems);
    const newQty = Number(e.target.value);
    const itemIndex = parsedItems.findIndex(
      (obj: LocalStorageItem) => obj.id === item.id
    );
    newItem.qty = newQty;
    newItem.totalPrice = newItem.price * newQty;
    parsedItems[itemIndex] = newItem;
    localStorage.setItem('cartItems', JSON.stringify(parsedItems));
    updateCartItems(parsedItems, setCartItems);
  }
}

function updateQtyAndTotalPrice(
  orderInfo: OrderInfo,
  setOrderInfo: React.Dispatch<SetStateAction<OrderInfo>>,
  newQty: number
) {
  const newOrderInfo = { ...orderInfo };
  newOrderInfo.qty = newQty;
  newOrderInfo.totalPrice = orderInfo.price * newQty;
  setOrderInfo(newOrderInfo);
}

export default function QtySelector({
  stock,
  item,
  orderInfo,
  setOrderInfo,
}: SelectorProps) {
  const { setCartItems } = useContext(CheckoutContext);
  const availableQty = [];
  for (let i = 1; i <= stock; i++) {
    availableQty.push(i);
  }

  function handleQtyChange(
    e: React.ChangeEvent<HTMLSelectElement>,
    item: LocalStorageItem
  ) {
    updateLocalStorage(e, item, setCartItems);
    updateQtyAndTotalPrice(orderInfo, setOrderInfo, Number(e.target.value));
  }

  return (
    <select
      className='w-full xl:w-[80px] xl:h-[32px] xl:mr-[56px] bg-[#f3f3f3] border boder-solid border-[#949494] rounded-[8px] text-center outline-none'
      onChange={(e) => handleQtyChange(e, item)}
      defaultValue={item.qty}
    >
      {availableQty.map((num, index) => (
        <option key={index} value={num}>
          {num}
        </option>
      ))}
    </select>
  );
}
