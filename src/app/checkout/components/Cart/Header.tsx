import Title from '../Title';

interface QtyAndPriceOption {
  label: string;
  value: 'qty' | 'price' | 'totalPrice';
  selector?: boolean;
}

export const options: QtyAndPriceOption[] = [
  { label: '數量', value: 'qty', selector: true },
  { label: '單價', value: 'price' },
  { label: '小計', value: 'totalPrice' },
];

export default function Header() {
  return (
    <>
      <div className='flex'>
        <Title>
          <div className='xl:mr-[490px]'>購物車</div>
          {options.map((option, index) => (
            <div
              key={index}
              className='hidden xl:block w-[32px] shrink-0 mr-[160px]'
            >
              {option.label}
            </div>
          ))}
        </Title>
      </div>
      <hr className='w-full border-black mb-[20px] xl:hidden' />
    </>
  );
}
