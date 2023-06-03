import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

import HeaderWrapper from './style';

type HeaderProps = {
    children?: ReactNode;
    name?: string;
};

const Header = (props: HeaderProps) => {
    return (
        <HeaderWrapper>
            {props.children}
            {props.name}
            {AppConfig.title}
        </HeaderWrapper>
    );
};

export default Header;
