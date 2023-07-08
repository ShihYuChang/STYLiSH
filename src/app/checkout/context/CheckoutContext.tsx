/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */
import { createContext, useState, ReactNode, SetStateAction } from 'react';
import { LocalStorageItem } from '@/types/types';

interface ContextProps {
  totalPrice: number;
  setTotalPrice: React.Dispatch<SetStateAction<number>>;
  cartItems: LocalStorageItem[];
  setCartItems: React.Dispatch<SetStateAction<LocalStorageItem[]>>;
  userInput: { [key: string]: string | number };
  setUserInput: React.Dispatch<
    SetStateAction<{ [key: string]: string | number }>
  >;
}

export const CheckoutContext = createContext<ContextProps>({
  totalPrice: 0,
  setTotalPrice: () => {},
  cartItems: [],
  setCartItems: () => {},
  userInput: {},
  setUserInput: () => {},
});

export default function CheckoutContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartItems, setCartItems] = useState<LocalStorageItem[]>([]);
  const [userInput, setUserInput] = useState<{
    [key: string]: string | number;
  }>({});

  return (
    <CheckoutContext.Provider
      value={{
        totalPrice,
        setTotalPrice,
        cartItems,
        setCartItems,
        userInput,
        setUserInput,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
