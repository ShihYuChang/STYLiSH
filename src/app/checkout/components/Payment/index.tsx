import CardInfo from './CardInfo';
import OrderSummary from './OrderSummary';
import { useEffect, useContext } from 'react';
import { CheckoutContext } from '../../context/CheckoutContext';

export default function Payment() {
  const rawCartItems = localStorage.getItem('cartItems');
  const { setCartItems } = useContext(CheckoutContext);

  useEffect(() => {
    if (rawCartItems) {
      const parsedItems = JSON.parse(rawCartItems);
      setCartItems(parsedItems);
    }
  }, []);

  return (
    <div className='flex flex-col gap-[24px]'>
      <CardInfo />
      <OrderSummary />
    </div>
  );
}
