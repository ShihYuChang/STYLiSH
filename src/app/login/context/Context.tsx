/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */
'use client';
import { SetStateAction, createContext, useState } from 'react';

interface UserInput {
  [key: string]: string;
}

interface ContextProps {
  userInput: UserInput;
  setUserInput: React.Dispatch<SetStateAction<UserInput>>;
}

export const Context = createContext<ContextProps>({
  userInput: {
    email: '',
    password: '',
  },
  setUserInput: () => {},
});

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userInput, setUserInput] = useState<UserInput>({
    email: '',
    password: '',
  });
  return (
    <Context.Provider value={{ userInput, setUserInput }}>
      {children}
    </Context.Provider>
  );
}
