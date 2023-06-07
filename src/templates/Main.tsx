import type { ReactNode } from 'react';

import Navbar from '@/components/Navbar';

type IMainProps = {
    meta?: ReactNode;
    children?: ReactNode;
};

const Main = (props: IMainProps) => (
    <div className="flex w-full flex-col">
        {props.meta}
        <div className="">
            <Navbar />
            <main className="text-xl">{props.children}</main>
        </div>
    </div>
);

export { Main };
