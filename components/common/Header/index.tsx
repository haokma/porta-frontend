import { useRouter } from 'next/router';
import { HeaderDesktop } from './header-desktop';
import HeaderMobile from './header-mobile';

export const Header = () => {
  const router = useRouter();

  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
};
