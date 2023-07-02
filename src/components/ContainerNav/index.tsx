/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import type { ReactNode } from 'react';

import ContainerNavWrapper from './style';

type ContainerNavProps = {
  children?: ReactNode;
  name: string;
  onlySearch: boolean;
  searchPlaceholder: string;
  isFilter: boolean;
  buttonName: string;
  buttonAction: string;
};

const ContainerNav = (props: ContainerNavProps) => {
  const { name, onlySearch, searchPlaceholder, isFilter, buttonName, buttonAction } = props;
  return (
    <ContainerNavWrapper className="flex flex-row items-center gap-4 bg-gray-300 p-2">
      <div className="_left flex flex-col items-start">
        <p className="text-sm font-semibold">{name}</p>
      </div>
      <div className="_center flex flex-1 flex-row items-center rounded-lg border border-gray-500 bg-white p-1">
        {onlySearch ? null : (
          <div className="flex items-center rounded-md border border-gray-400 bg-gray-300">
            <p className="px-1 text-sm font-semibold">Content type</p>
            <select className="rounded-r border border-green-700 bg-green-700 p-1 text-sm font-semibold text-cyan-50">
              <option value="any">Any</option>
              <option value="any">Problem</option>
              <option value="any">turtlemint</option>
            </select>
          </div>
        )}
        <div className="flex flex-1">
          <input type="text" className="flex flex-1 pl-2 text-sm font-medium" placeholder={searchPlaceholder} />
        </div>
        {isFilter ? (
          <div className="flex">
            <p className="text-sm font-medium">Filter</p>
          </div>
        ) : null}
      </div>
      <div className="_right flex flex-col items-end">
        <Link href={buttonAction} className="cursor-pointer rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
          {buttonName}
        </Link>
      </div>
      {props.children}
    </ContainerNavWrapper>
  );
};

export default ContainerNav;
