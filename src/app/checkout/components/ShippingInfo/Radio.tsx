'use client';
import { useContext } from 'react';
import { CheckoutContext } from '../../context/CheckoutContext';

export default function Radio({ label }: { label: string }) {
  const { userInput, setUserInput } = useContext(CheckoutContext);

  function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const newUserInput = { ...userInput };
    newUserInput.delieverTime = e.target.value;
    setUserInput(newUserInput);
  }

  return (
    <div className='flex gap-[6px]'>
      <label className='text-[14px] leading-[26px]'>{label}</label>
      <input
        type='radio'
        name={label}
        value={label}
        onChange={(e) => handleCheck(e)}
        checked={userInput.delieverTime === label}
      />
    </div>
  );
}
