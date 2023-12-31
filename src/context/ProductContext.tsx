/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */
'use client';
import { ColorSizeList, ProductData, SelectedColor } from '@/types/types';
import { ReactNode, SetStateAction, createContext, useState } from 'react';

interface ContextProps {
  product: null | ProductData;
  setProduct: React.Dispatch<SetStateAction<ProductData | null>>;
  colorSizeList: ColorSizeList;
  setColorSizeList: React.Dispatch<SetStateAction<ColorSizeList>>;
  selectedColor: null | SelectedColor;
  setSelectedColor: React.Dispatch<SetStateAction<SelectedColor | null>>;
  selectedSize: null | string;
  setSelectedSize: React.Dispatch<SetStateAction<string | null>>;
  quantity: number;
  setQuantity: React.Dispatch<SetStateAction<number>>;
  cartQty: number;
  setCartQty: React.Dispatch<SetStateAction<number>>;
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
  selectedSize: null,
  setSelectedSize: () => {},
  quantity: 0,
  setQuantity: () => {},
  cartQty: 0,
  setCartQty: () => {},
});

export default function ProductContextProvider({ children }: ProviderProps) {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [colorSizeList, setColorSizeList] = useState<ColorSizeList>({});
  const [selectedColor, setSelectedColor] = useState<null | SelectedColor>(
    null
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [cartQty, setCartQty] = useState<number>(0);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        colorSizeList,
        setColorSizeList,
        selectedColor,
        setSelectedColor,
        selectedSize,
        setSelectedSize,
        quantity,
        setQuantity,
        cartQty,
        setCartQty,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
