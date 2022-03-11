import React from 'react';
import Search from './../search/Search';
import Navigation from './../navigation/Navigation';
import TeamCard from '../teamCard/TeamCard';
import './content.scss';

const Content = () => {
  return (
    <div className='content'>
      <Navigation />
      <div className="content__wrapper">
        <Search />
        <ul>
          <TeamCard />
        </ul>
      </div>
    </div>
  )
}
export default Content;