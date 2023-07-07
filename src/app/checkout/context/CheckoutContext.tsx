/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */
import { createContext, useState, ReactNode, SetStateAction } from 'react';
import { LocalStorageItem } from '@/types/types';

interface ContextProps {
  totalPrice: number;
  setTotalPrice: React.Dispatch<SetStateAction<number>>;
  cartItems: LocalStorageItem[];
  setCartItems: React.Dispatch<SetStateAction<LocalStorageItem[]>>;
}

export const CheckoutContext = createContext<ContextProps>({
  totalPrice: 0,
  setTotalPrice: () => {},
  cartItems: [],
  setCartItems: () => {},
});

export default function CheckoutContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartItems, setCartItems] = useState<LocalStorageItem[]>([]);

  return (
    <CheckoutContext.Provider
      value={{ totalPrice, setTotalPrice, cartItems, setCartItems }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
