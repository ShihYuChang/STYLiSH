export interface Variants {
  [key: string]: string;
}

interface ProductVariants {
  color_code: string;
  size: string;
  stock: number;
}

interface ProductColors {
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
