import { BsCart3 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

interface MenuItem {
  label: string;
  route: string;
  icon: React.ElementType;
  counter: boolean;
}

const options: MenuItem[] = [
  { label: '購物車', route: '/cart', icon: BsCart3, counter: true },
  { label: '會員', route: '/profile', icon: CgProfile, counter: false },
];

function Counter() {
  return (
    <div className='w-[24px] h-[24px] bg-[#8b572a] rounded-[50%] text-[16px] flex justify-center items-center absolute bottom-[-5px] right-0'>
      1
    </div>
  );
}

function SplitLine() {
  return <div className='w-[1px] h-[24px] bg-[#828282]' />;
}

export default function MobileFooter() {
  return (
    <div className='xl:hidden w-full h-[60px] sticky bottom-0 bg-[#313538] text-white flex'>
      {options.map((option, index) => {
        const IconComponent = option.icon;
        return (
          <div key={index} className='w-full flex items-center'>
            <div className='w-full flex items-center justify-center cursor-pointer'>
              <div className='w-[44px] text-[30px] text-white flex justify-center relative'>
                <IconComponent />
                {option.counter && <Counter />}
              </div>
              {option.label}
            </div>
            {index !== options.length - 1 && <SplitLine />}
          </div>
        );
      })}
    </div>
  );
}
