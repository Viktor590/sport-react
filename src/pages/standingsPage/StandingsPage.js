import React from 'react';
import { useParams } from 'react-router-dom';
import Error from '../../components/error/Error';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import FotbalServices from '../../services/FotbalServices';
import Spinner from './../../components/spinner/Spinner';

const StandingsPage = () => {
  const { leagueId } = useParams();
  console.log(leagueId);
  const { loading, error } = FotbalServices()

  const today = new Date();
  const year = today.getFullYear()

  const err = error ? <Error /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !loading && !error ?
    <div id="wg-api-football-standings"
      data-host="v3.football.api-sports.io"
      data-league={leagueId}
      data-season={year - 1}
      data-key="df639f2bb8fa2ee38658c35901849d56"
      data-show-errors="false"
      className="api_football_loader"></div> : null;

  return (
    <>
      <Header />
      <div className='content'>
        <Navigation />
        <div className='content__wrapper'>
          {err}
          {spinner}
          {content}
        </div>
      </div>
    </>

  )
}
export default StandingsPage;