import React from 'react';
import Link from 'next/link';
import './navItem.scss';


interface NavItemProps {
  href: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
  disabled = false,
}) => {
  return (
    <Link
      className={`nav-item ${disabled ? 'disabled' : ''}`}
      href={href}
      aria-disabled={disabled}
      {...(disabled ? { tabIndex: -1 } : {})}
    >
      {children}
    </Link>
  );
};

export default NavItem;
