import Carousel from './components/Carousel';
import Products from './pages/Home/Products';

export default function Home() {
  return (
    <div className='mb-[96px]'>
      <Carousel />
      <Products />
    </div>
  );
}
