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
  selectedColor: null | string;
  setSelectedColor: React.Dispatch<SetStateAction<string | null>>;
}

interface ProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext<ContextProps>({
  product: null,
  setProduct: () => {},
  colorSizeList: {},
  setColorSizeList: () => {},
  selectedColor: null,
  setSelectedColor: () => {},
});

export default function ProductContextProvider({ children }: ProviderProps) {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [colorSizeList, setColorSizeList] = useState<ColorSizeList>({});
  const [selectedColor, setSelectedColor] = useState<null | string>(null);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        colorSizeList,
        setColorSizeList,
        selectedColor,
        setSelectedColor,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
