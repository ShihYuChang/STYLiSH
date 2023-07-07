import React from 'react';

export default function QtySelector({ stock }: { stock: number }) {
  const availableQty = [];
  for (let i = 1; i <= stock; i++) {
    availableQty.push(i);
  }
  return (
    <select className='w-full bg-[#f3f3f3] border boder-solid border-[#949494] rounded-[8px] text-center outline-none'>
      {availableQty.map((num, index) => (
        <option key={index} value={num}>
          {num}
        </option>
      ))}
    </select>
  );
}
