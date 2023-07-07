import { LocalStorageItem } from '@/types/types';

function updateLocalStorage(
  e: React.ChangeEvent<HTMLSelectElement>,
  item: LocalStorageItem
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
  }
}

function updateQty(
  e: React.ChangeEvent<HTMLSelectElement>,
  item: LocalStorageItem
) {
  updateLocalStorage(e, item);
}

export default function QtySelector({
  stock,
  item,
}: {
  stock: number;
  item: LocalStorageItem;
}) {
  const availableQty = [];
  for (let i = 1; i <= stock; i++) {
    availableQty.push(i);
  }

  return (
    <select
      className='w-full bg-[#f3f3f3] border boder-solid border-[#949494] rounded-[8px] text-center outline-none'
      onChange={(e) => updateQty(e, item)}
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
