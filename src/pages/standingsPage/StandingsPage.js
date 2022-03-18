import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';

const StandingsPage = () => {
  const { leagueId } = useParams();
  const today = new Date();
  const year = today.getFullYear()

  return (
    <>
      <Header />
      <div className='content'>
        <Navigation />
        <div className='content__wrapper'>
          <div id="wg-api-football-standings"
            data-host="v3.football.api-sports.io"
            data-league={leagueId}
            data-team=""
            data-season={year - 1}
            data-key="67b1fac92cb9e4d503fef476a7e6de85"
            data-show-errors="false"
            className="api_football_loader"></div>
        </div>
      </div>
    </>

  )
}
export default StandingsPage;