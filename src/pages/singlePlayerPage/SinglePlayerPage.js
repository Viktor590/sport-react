import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './../../components/navigation/Navigation';
import Header from './../../components/header/Header';
import SinglePlayer from './../../components/singlePlayer/SinglePlayer';
import FotbalServices from './../../services/FotbalServices';
import Error from './../../components/error/Error';
import Spinner from './../../components/spinner/Spinner';

const SinglePlayerPage = () => {

  const { playerId } = useParams();

  const { getSinglePlayer, loading, error } = FotbalServices();

  const [data, setdata] = useState([]);

  useEffect(() => {
    console.log(playerId);
    getSinglePlayer(playerId)
      .then(onPlayerLoaded)
  }, [playerId])

  const onPlayerLoaded = (arr) => {
    setdata(arr);
  }

  const err = error ? <Error /> : null;

  const spiner = loading ? <Spinner /> : null;

  const content = !loading && !error ? <SinglePlayer player={data} /> : null

  return (
    <>
      <Header />
      <div className='content'>
        <Navigation />
        <div className='content__wrapper'>
          {err}
          {spiner}
          {content}
        </div>
      </div>
    </>
  )
}
export default SinglePlayerPage;