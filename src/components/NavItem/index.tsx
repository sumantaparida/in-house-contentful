import Link from 'next/link';

import styles from '../../styles/Navbar.module.css';

const NavItem = ({ text, href, active, icon }: any) => {
    return (
        <Link
            href={href}
            className={`${styles.link} ${active ? `${styles.active}` : ''}`}
        >
            <div className={styles.icon}>{icon}</div>
            {text}
        </Link>
    );
};

export default NavItem;
