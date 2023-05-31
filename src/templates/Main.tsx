// import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full flex flex-col">
    {props.meta}
    <div className="">
      <header className="border-b border-gray-300 bg-teal-950 py-2">
        {AppConfig.title}
      </header>
      <main className="content py-5 text-xl">{props.children}</main>
      <footer className="border-t border-gray-300 bg-teal-950 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{" "}
        <a href="#">Anas,Swapnil,Shudhansu</a>.
      </footer>
    </div>
  </div>
);

export { Main };
