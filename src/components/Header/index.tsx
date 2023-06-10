/* eslint-disable tailwindcss/no-custom-classname */
import type { ReactNode } from 'react';

import HeaderWrapper from './style';

type HeaderProps = {
    children?: ReactNode;
};

const Header = (props: HeaderProps) => {
    return (
        <HeaderWrapper>
            <div className="top-nav bg-gray-900 p-2 text-white">sdsd</div>
            {props.children}
        </HeaderWrapper>
    );
};

export default Header;
