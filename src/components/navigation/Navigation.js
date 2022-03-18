import React from 'react';
import NavigationButton from './../navigationButton/NavigationButton';
import './navigation.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavigationButton
        title={'Football'}
        link={'/team'} />
    </div>
  )
}
export default Navigation;