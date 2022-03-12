import React from 'react';
// import { NavLink } from 'react-router-dom';
import NavigationButton from './../navigationButton/NavigationButton';
import './navigation.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavigationButton
        title={'Teams'}
        link={'/team'} />

      <NavigationButton
        title={'Players'}
        link={'/player'} />
    </div>
  )
}
export default Navigation;