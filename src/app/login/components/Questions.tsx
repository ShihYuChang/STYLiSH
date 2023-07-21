'use client';
import { useContext } from 'react';
import { Context } from '../context/Context';

interface Question {
  label: string;
  value: string;
  type: string;
}

const questions: Question[] = [
  { label: 'Email', value: 'email', type: 'email' },
  { label: '密碼', value: 'password', type: 'password' },
];

export default function Questions() {
  const { userInput, setUserInput } = useContext(Context);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>, key: string) {
    const newInput = { ...userInput };
    newInput[key] = e.target.value;
    setUserInput(newInput);
  }

  return (
    <div className='flex flex-col gap-[10px] xl:gap-[30px] mb-[20px] xl:mb-[70px]'>
      {questions.map((question, index) => (
        <div
          key={index}
          className='w-full flex flex-col xl:flex-row gap-[10px]'
        >
          <div className='text-[14px] leading-[19px] xl:w-[120px] xl:flex items-center'>
            {question.label}
          </div>
          <input
            className='w-full xl:w-[576px] h-[32px] border border-solid border-[#979797] rounded-[8px] px-[10px] text-[14px]'
            type={question.type}
            value={userInput[question.value]}
            onChange={(e) => handleInput(e, question.value)}
          />
        </div>
      ))}
    </div>
  );
}
