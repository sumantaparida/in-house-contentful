import { useRouter } from 'next/router';
import React, { useState } from 'react';

import NavItem from '../NavItem';
import NavigationStyle from './style';

const MENU_LIST = [
  {
    text: 'Home',
    href: '/',
    icon: (
      <svg data-test-id="cf-ui-icon" viewBox="0 0 16 16" aria-hidden="true" width="20" height="20">
        <g clipPath="url(#Home_svg__a)">
          <path
            d="m13.675 6.481-5-4.544a1 1 0 0 0-1.35 0l-5 4.544A1 1 0 0 0 2 7.22v5.756A.995.995 0 0 0 3 14h3a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 1 7 10h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3c.166.001.33-.04.475-.119A1.005 1.005 0 0 0 14 13V7.219a1 1 0 0 0-.325-.738Z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="Home_svg__a">
            <path fill="#fff" d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    text: 'Content Model',
    href: '/contentModel',
    icon: (
      <svg data-test-id="cf-ui-icon" viewBox="0 0 16 16" aria-hidden="true" width="20" height="20">
        <g clipPath="url(#Wrench_svg__a)">
          <path
            d="M13.181 9.181a4.537 4.537 0 0 1-4.994.944l-3.25 3.762c-.006.013-.018.02-.025.025a1.993 1.993 0 0 1-2.825 0 1.993 1.993 0 0 1 0-2.825l.025-.025 3.763-3.25a4.5 4.5 0 0 1 5.881-5.95.493.493 0 0 1 .281.605.5.5 0 0 1-.125.208l-2.43 2.431.23 1.181 1.182.232 2.43-2.432a.5.5 0 0 1 .813.157 4.481 4.481 0 0 1-.956 4.937Z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="Wrench_svg__a">
            <path fill="#fff" d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    text: 'Content',
    href: '/content',
    icon: (
      <svg data-test-id="cf-ui-icon" viewBox="0 0 16 16" aria-hidden="true" width="20" height="20">
        <g clipPath="url(#Pen_svg__a)">
          <path
            d="M14.5 5.794 10.206 1.5a1.006 1.006 0 0 0-1.412 0L7.225 3.069 3.594 4.43a.994.994 0 0 0-.631.769l-1.3 7.787a.25.25 0 0 0 .425.22l3.437-3.445a2 2 0 1 1 .712.712l-3.443 3.438a.25.25 0 0 0 .219.425l7.787-1.293a1.014 1.014 0 0 0 .769-.638l1.362-3.631 1.57-1.569a.994.994 0 0 0 0-1.412Zm-2 2L8.206 3.5 9.5 2.206 13.794 6.5 12.5 7.794Z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="Pen_svg__a">
            <path fill="#fff" d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    text: 'Media',
    href: '/media',
    icon: (
      <svg data-test-id="cf-ui-icon" viewBox="0 0 32 32" aria-hidden="true" width="20" height="20">
        <path
          fill="#fff"
          d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM6 6h20v9.672l-3.086-3.087a2 2 0 0 0-2.828 0L6.671 26H6V6Zm4 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
        />
      </svg>
    ),
  },
];
const Navbar = () => {
  const router = useRouter();
  const activeTab = router.pathname;
  const [active, setActive] = useState(activeTab);

  return (
    <NavigationStyle className="bg-gray-800 px-4 py-2">
      <nav className="flex flex-row gap-x-2.5">
        {MENU_LIST.map(menu => (
          <div
            onClick={() => {
              setActive(menu.href);
            }}
            key={menu.text}
            role="presentation"
          >
            <NavItem isActive={active === menu.href} {...menu} />
          </div>
        ))}
      </nav>
    </NavigationStyle>
  );
};

export default Navbar;
