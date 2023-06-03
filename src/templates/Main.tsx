// import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="flex w-full flex-col">
    {props.meta}
    <div className="">
      <header className="border-b p-2">
        <div>left</div>
        <div>middle</div>
        <div>middle</div>
        {AppConfig.title}
      </header>
      <main className="content text-xl">{props.children}</main>
      {/* <footer className="border-t border-gray-300 bg-teal-950 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{" "}
        <a href="#">Anas,Swapnil,Shudhansu</a>.
      </footer> */}
    </div>
  </div>
);

export { Main };
