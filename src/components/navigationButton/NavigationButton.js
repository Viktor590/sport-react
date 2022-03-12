import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigationButton.scss';


const NavigationButton = (props) => {
  const { title, link } = props
  return (
    <NavLink
      style={({ isActive }) => ({ background: isActive ? '#C60E2E' : 'inherit', color: isActive ? '#fff' : 'inherit' })}
      to={link}
      className='navigation__link'>
      {title}
    </NavLink>
  )
}
export default NavigationButton;