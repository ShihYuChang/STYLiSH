import Carousel from './components/Carousel';
import HomeProducts from './Home/HomeProducts';

export default async function Home() {
  return (
    <div className='mb-[96px]'>
      <Carousel />
      <HomeProducts />
    </div>
  );
}
