'use client';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const [userInput, setUserInput] = useState<string>('');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setUserInput(input);
  }

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search/${userInput}`);
  }

  return (
    <form
      className='hidden xl:flex  w-[214px] h-[44px] items-center border border-solid border-custom-grey rounded-[20px] pl-[20px] pr-[10px]'
      onSubmit={handleSearch}
    >
      <input
        className='w-full h-[24px] outline-none text-[20px] text-custom-brown'
        placeholder='搜尋'
        onChange={handleInput}
      />
      <button
        type='submit'
        className='h-full w-[44px] shrink-0 text-[30px] text-icon-brown flex items-center justify-center cursor-pointer'
      >
        <CiSearch />
      </button>
    </form>
  );
}
