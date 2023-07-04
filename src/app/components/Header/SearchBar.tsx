'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchBarProps {
  hasClickSearch: boolean;
}

export default function SearchBar({ hasClickSearch }: SearchBarProps) {
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
      className={`${
        hasClickSearch ? 'flex' : 'hidden'
      } xl:flex w-full xl:w-[214px] h-[40px] xl:h-[44px] items-center border border-solid border-custom-grey rounded-[20px] pl-[20px] pr-[10px]`}
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
