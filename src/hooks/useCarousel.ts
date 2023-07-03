import { useState, useEffect } from 'react';

export function useCarousel(data: any[]) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [data]);

  return { currentIndex };
}
