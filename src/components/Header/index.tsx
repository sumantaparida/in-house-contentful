/* eslint-disable tailwindcss/no-custom-classname */
import type { ReactNode } from 'react';

import LeftDrawer from '@/components/LeftDrawer';

import HeaderWrapper from './style';

type HeaderProps = {
  children?: ReactNode;
};

const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <div className="top-nav bg-gray-900 px-4 py-2 text-white">
        <LeftDrawer />
      </div>
      {props.children}
    </HeaderWrapper>
  );
};

export default Header;
