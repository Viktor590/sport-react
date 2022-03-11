import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Link to="/" className="header__logo">
        <img className='header__logo-img' src="https://png.pngtree.com/template/20191029/ourlarge/pngtree-soccer-logo-american-logo-sports-vector-illustration-image_324852.jpg" alt="logo" />
      </Link>
    </header>
  )
}
export default Header;