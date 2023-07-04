interface Category {
  label: '關於 STYLiSH' | '服務條款' | '隱私政策' | '聯絡我們' | 'FAQ';
  route: '/';
}

const categories: Category[] = [
  { label: '關於 STYLiSH', route: '/' },
  { label: '服務條款', route: '/' },
  { label: '隱私政策', route: '/' },
  { label: '聯絡我們', route: '/' },
  { label: 'FAQ', route: '/' },
];

export default function Menu() {
  return (
    <div className='grid grid-cols-2 justify-center xl:flex xl:mr-[101px] gap-[8px]'>
      {categories.map((category, index) => (
        <div
          key={`${category}${index}`}
          className={`w-[134px] text-[14px] xl:text-[16px] xl:flex justify-center items-center leading-[20px] xl:leading-[22px] ${
            index === categories.length - 1
              ? null
              : 'xl:border-r xl:border-solid xl:border-[#828282]'
          } cursor-pointer`}
        >
          {category.label}
        </div>
      ))}
    </div>
  );
}
