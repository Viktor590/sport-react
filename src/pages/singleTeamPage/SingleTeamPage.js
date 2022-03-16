import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleTeam from '../../components/singleTeam/SingleTeam';
import FotbalServices from './../../services/FotbalServices';
import Error from './../../components/error/Error';
import Spinner from './../../components/spinner/Spinner';
import Header from './../../components/header/Header';
import Navigation from './../../components/navigation/Navigation';

const SingleTeamPage = () => {

  const { teamId } = useParams();

  const { error, loading, getSingleTeamSquads, getSingleTeam, getCoach, getCurrentLeague } = FotbalServices();

  const [dataTeam, setDataTeam] = useState();
  const [dataSquads, setDataSquads] = useState();
  const [dataCoach, setDataCoach] = useState();
  const [dataLeague, setDataLeague] = useState();

  useEffect(() => {
    getSingleTeamSquads(teamId)
      .then(onSquadsLoaded)

    getSingleTeam(teamId)
      .then(onTeamLoaded)

    getCoach(teamId)
      .then(onCoachLoading)

    getCurrentLeague(teamId)
      .then(onCurrentLeaguesLoaded)

  }, [teamId])

  const onSquadsLoaded = (arr) => {
    setDataSquads(arr)
  }

  const onTeamLoaded = (arr) => {
    setDataTeam(arr)
  }

  const onCoachLoading = (arr) => {
    setDataCoach(arr)
  }

  const onCurrentLeaguesLoaded = (arr) => {
    setDataLeague(arr)
  }

  const err = error ? <Error /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !loading && !error ?
    <SingleTeam
      leagues={dataLeague}
      coach={dataCoach}
      team={dataTeam}
      roster={dataSquads} /> : null;

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
export default SingleTeamPage;