import React from 'react';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.css';
import openMenu from '../images/7-web-icons/open-menu.svg';
import closeMenu from '../images/7-web-icons/close-menu.svg';

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const toggleMobileMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <nav className="navbar">
      <div className="box-container">
        <div className="site-logo">
          <Link to="/" className='site-logo-name'>NGA NGUYEN</Link>
        </div>

        <div className={isOpenMenu ? 'site-menu show' : 'site-menu hide'}>
          <div className="site-menu-items">
            <li>
              <Link
                to="/"
                className={
                  currentPath === '/'
                    ? 'site-menu-item active-menu-item'
                    : 'site-menu-item'
                }
                onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-me"
                className={
                  currentPath === '/about-me'
                    ? 'site-menu-item active-menu-item'
                    : 'site-menu-item'
                }
                onClick={toggleMobileMenu}>
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/marketing-portfolio"
                className={
                  currentPath === '/marketing-portfolio'
                    ? 'site-menu-item active-menu-item'
                    : 'site-menu-item'
                }
                onClick={toggleMobileMenu}>
                Marketing Works
              </Link>
            </li>
            <li>
              <Link
                to="/uxui-project-portfolio"
                className={
                  currentPath === '/uxui-project-portfolio'
                    ? 'site-menu-item active-menu-item'
                    : 'site-menu-item'
                }
                onClick={toggleMobileMenu}>
                Web Projects
              </Link>
            </li>
            <li>
              <Link
                to="/graphic-design-portfolio"
                className={
                  currentPath === '/graphic-design-portfolio'
                    ? 'site-menu-item active-menu-item'
                    : 'site-menu-item'
                }
                onClick={toggleMobileMenu}>
                Design Portfolio
              </Link>
            </li>
          </div>

          <div className="navbar-btn">
            <Link
              to="/hire-full-stack-marketer"
              className="site-menu-item btn-yellow"
              onClick={toggleMobileMenu}>
              Hire Me
            </Link>
          </div>
        </div>

        <div className="mobile-menu-icons">
          <div
            className={isOpenMenu ? 'open-menu hide' : 'open-menu show'}
            onClick={toggleMobileMenu}>
            <img src={openMenu} alt="open menu btn" />
          </div>
          <div
            className={isOpenMenu ? 'close-menu show' : 'close-menu hide'}
            onClick={toggleMobileMenu}>
            <img src={closeMenu} alt="close menu btn" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
