/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */
'use client';
import { ColorSizeList, ProductData } from '@/utils/types';
import { ReactNode, SetStateAction, createContext, useState } from 'react';

interface ContextProps {
  product: null | ProductData;
  setProduct: React.Dispatch<SetStateAction<ProductData | null>>;
  colorSizeList: ColorSizeList;
  setColorSizeList: React.Dispatch<SetStateAction<ColorSizeList>>;
}

interface ProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext<ContextProps>({
  product: null,
  setProduct: () => {},
  colorSizeList: {},
  setColorSizeList: () => {},
});

export default function ProductContextProvider({ children }: ProviderProps) {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [colorSizeList, setColorSizeList] = useState<ColorSizeList>({});
  return (
    <ProductContext.Provider
      value={{ product, setProduct, colorSizeList, setColorSizeList }}
    >
      {children}
    </ProductContext.Provider>
  );
}
