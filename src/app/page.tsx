import Carousel from './components/Carousel';
import Products from './pages/Home/Products';
import { fetchData } from '@/utils/api';

export default async function Home() {
  return (
    <div className='mb-[96px]'>
      <Carousel />
      <Products />
    </div>
  );
}
