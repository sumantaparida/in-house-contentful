import Button from '@mui/material/Button';
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
            <h4 className="text-white">{AppConfig.title}</h4>
            <Button color="success" className="bg-green-400 text-green-500">
                Success Pagayts
            </Button>
        </HeaderWrapper>
    );
};

export default Header;
