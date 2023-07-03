'use client';
import { useState, useEffect } from 'react';
import Text from './Text';
import { api } from '@/utils/api';
import { useCarousel } from '@/hooks/useCarousel';

interface Banner {
  id: number;
  product_id: number;
  picture: string;
  story: string;
}

export default function Carousel() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const { currentIndex } = useCarousel(banners);

  useEffect(() => {
    async function fetchBanners() {
      const { data } = await api.getBanners();
      setBanners(data);
    }

    fetchBanners();
  }, []);

  return (
    <div className='w-full h-[500px] mb-[70px]'>
      {banners.map((img, index) => (
        <div
          key={`${img.product_id}`}
          className={`${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } w-full h-[500px] bg-banner1 absolute bg-cover bg-center transition-opacity ease-in duration-300`}
          style={{ backgroundImage: `url(${img.picture})` }}
        >
          <Text />
          <div className='flex gap-[22px] absolute bottom-[34px] left-[50%]'>
            {banners.map((img, index) => (
              <div
                key={img.id}
                className={`w-[10px] h-[10px] rounded-[50%] ${
                  index === currentIndex ? 'opacity-100' : 'opacity-40'
                } ${index === currentIndex ? 'bg-[#8b572a]' : 'bg-white'}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
