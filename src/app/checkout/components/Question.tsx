'use client';
import { useContext } from 'react';
import { CheckoutQuestion } from '@/types/types';
import Radio from './ShippingInfo/Radio';
import { CheckoutContext } from '../context/CheckoutContext';

export default function Question({
  label,
  value,
  desciprtion,
  options,
  placehoder,
}: CheckoutQuestion) {
  const { userInput, setUserInput } = useContext(CheckoutContext);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>, key: string) {
    const newInput = { ...userInput, [key]: e.target.value };
    setUserInput(newInput);
  }

  return (
    <div className='w-full'>
      <div className='text-[14px] leading-[17px] mb-[10px]'>{label}</div>
      {options ? (
        <div className='flex gap-[26px]'>
          {options.map((option, index) => (
            <div key={index}>
              <Radio label={option} />
            </div>
          ))}
        </div>
      ) : (
        <input
          className='w-full h-[32px] border border-solid border-[#979797] rounded-[8px] mb-[6px] px-[8px]'
          placeholder={placehoder}
          onChange={(e) => handleInput(e, value)}
          value={userInput[value]}
        />
      )}
      {desciprtion && (
        <div className='text-[14px] leading-[17px] text-[#8b572a]'>
          {desciprtion}
        </div>
      )}
    </div>
  );
}
