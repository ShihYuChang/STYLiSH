import CardInfo from './CardInfo';
import OrderSummary from './OrderSummary';

export default function Payment() {
  return (
    <div className='flex flex-col gap-[24px]'>
      <CardInfo />
      <OrderSummary />
    </div>
  );
}
