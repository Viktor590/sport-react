import React from 'react';
import Search from '../search/Search';
import Navigation from '../navigation/Navigation';
import TeamCard from '../teamCard/TeamCard';
import Header from '../header/Header';
import './teamList.scss';

const TeamList = () => {
  return (
    <>
      <Header />
      <div className='content'>
        <Navigation />
        <div className="content__wrapper">
          <Search />
          <ul className='content__list'>
            <TeamCard />
          </ul>
        </div>
      </div>
    </>
  )
}
export default TeamList;