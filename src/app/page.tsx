import Carousel from './components/Carousel';

interface ProductInfo {
  title: string;
  img: string;
  colors: string[];
  price: number;
}

const products: ProductInfo[] = new Array(6).fill({
  title: '前開叉扭結佯裝',
  img: 'bg-dress',
  colors: ['white', '#ddffbb', '#d3d3d3'],
  price: 799,
});

export default function Home() {
  return (
    <div>
      <Carousel />
      <div className='grid grid-cols-3'>
        {products.map((product, index) => (
          <div key={`${product}${index}`} className='w-[360px]'>
            <div className={`${product.img}`}></div>
            <div className='flex'>
              {product.colors.map((color, index) => (
                <div
                  key={`${color}${index}`}
                  className={`w-[24px] h-[24px] bg-[${color}]`}
                ></div>
              ))}
            </div>
            <div>{product.title}</div>
            <div>{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
