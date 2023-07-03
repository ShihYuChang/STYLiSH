import { useState, useEffect } from 'react';

export function useCarousel(data: any[]) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (!isHover && data.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
      }, 5000);

      isHover && clearInterval(interval);

      return () => clearInterval(interval);
    }
    return undefined;
  }, [data, isHover]);

  return { currentIndex, setCurrentIndex, isHover, setIsHover };
}
