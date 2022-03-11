import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavLink
        style={({ isActive }) => ({ background: isActive ? '#C60E2E' : 'inherit', color: isActive ? '#fff' : 'inherit' })}
        to="/team"
        className='navigation__link'>
        Teams
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ background: isActive ? '#C60E2E' : 'inherit', color: isActive ? '#fff' : 'inherit' })}
        to="/player"
        className='navigation__link'>
        Players
      </NavLink>
    </div>
  )
}
export default Navigation;