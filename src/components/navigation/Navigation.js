import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <NavLink to="/team" className='navigation__item-link'>
            Teams
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to="/player" className='navigation__item-link'>
            Players
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
export default Navigation;