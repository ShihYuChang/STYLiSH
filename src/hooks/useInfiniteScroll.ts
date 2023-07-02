import { useState, useEffect } from 'react';

export default function useInfiniteScoll() {
  const [page, setPage] = useState(0);
  const [hasLoadData, setHasLoadData] = useState(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      const threshold = 200;

      if (
        hasNextPage &&
        !hasLoadData &&
        scrollBottom >= documentHeight - threshold
      ) {
        setPage((prevPage) => prevPage + 1);
        setHasLoadData(true);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, hasLoadData, hasNextPage]);

  return { page, setHasLoadData, setHasNextPage };
}
