import React from 'react';
import SingleTeam from '../../components/singleTeam/SingleTeam';
import FotbalServices from './../../services/FotbalServices';
import Error from './../../components/error/Error';
import Spinner from './../../components/spinner/Spinner';
import Header from './../../components/header/Header';
import Navigation from './../../components/navigation/Navigation';

const SingleTeamPage = () => {

  const { error, loading } = FotbalServices();

  const err = error ? <Error /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !loading && !error ? <SingleTeam /> : null;

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