import React from 'react';
import Search from '../search/Search';
import Navigation from '../navigation/Navigation';
import Header from '../header/Header';
import PlayerCard from '../playerCard/PlayerCard';
import './playerList.scss';

const PlayerList = () => {
  return (
    <>
      <Header />
      <div className='content'>
        <Navigation />
        <div className="content__wrapper">
          <Search />
          <ul className='content__list'>
            <PlayerCard />
          </ul>
        </div>
      </div>
    </>
  )
}
export default PlayerList;