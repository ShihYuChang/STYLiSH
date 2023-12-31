export interface Variants {
  [key: string]: string;
}

export interface ProductVariants {
  color_code: string;
  size: string;
  stock: number | string;
}

export interface ProductColors {
  code: string;
  name: string;
}

export interface ProductInfo {
  id: number;
  category: 'women' | 'men' | 'accessory';
  title: string;
  description: string;
  price: number;
  texture: string;
  wash: string;
  place: string;
  note: string;
  story: string;
  main_image: string;
  images: string[];
  variants: ProductVariants[];
  colors: ProductColors[];
  sizes: string[];
}

export interface ProductData {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  texture: string;
  wash: string;
  place: string;
  note: string;
  story: string;
  colors: { code: string; name: string }[];
  sizes: string[];
  variants: { color_code: string; size: string; stock: string }[];
  main_image: string;
  images: string[];
}

export interface ColorSizeList {
  [key: string]: { [key: string]: number | string };
}

export interface SizeProps {
  product: ProductData;
  colorSizeList: ColorSizeList;
}

export interface ProductProps {
  product: ProductData;
}

export interface SelectedColor {
  code: string;
  name: string;
}

export interface LocalStorageItem {
  color: { name: string | undefined; code: string | undefined };
  id: number;
  img: string;
  title: string;
  price: number;
  qty: number;
  size: string | null;
  totalPrice: number;
  stock: number;
}

export interface CheckoutQuestion {
  label: string;
  value: string;
  desciprtion?: string;
  options?: string[];
  placehoder?: string;
}

export interface OrderInfo {
  qty: number;
  price: number;
  totalPrice: number;
}
