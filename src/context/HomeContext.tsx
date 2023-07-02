'use client';
import { createContext, useState, ReactNode } from 'react';
import { ProductInfo } from '@/utils/types';

interface ContextProps {
  products: ProductInfo[];
  setProducts: (products: ProductInfo[]) => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const HomeContext = createContext<ContextProps>({
  products: [],
  setProducts: () => {},
});

export default function HomeContextProvider({ children }: ProviderProps) {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  return (
    <HomeContext.Provider value={{ products, setProducts }}>
      {children}
    </HomeContext.Provider>
  );
}
