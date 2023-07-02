/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';

import NavItemStyle from './style';

const NavItem = ({ text, href, isActive, icon }: any) => {
  return (
    <NavItemStyle>
      <Link href={href} className={`link ${isActive ? 'active' : ''}`}>
        <div className="icon">{icon}</div>
        {text}
      </Link>
    </NavItemStyle>
  );
};

export default NavItem;
