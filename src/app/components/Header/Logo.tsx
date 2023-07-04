interface LogoProps {
  hasClickSearch: boolean;
}

export default function Logo({ hasClickSearch }: LogoProps) {
  return (
    <a
      href='/'
      className={`${
        hasClickSearch && 'hidden'
      } w-[258px] xl:h-full bg-logo xl:mr-[57px] bg-contain bg-no-repeat bg-center`}
    ></a>
  );
}
