import React, { useState, useEffect } from 'react';
import Error from '../../components/error/Error';
import Header from '../../components/header/Header';
import List from '../../components/list.js/List';
import Navigation from '../../components/navigation/Navigation';
import FotbalServices from '../../services/FotbalServices';
import PlayerCard from './../../components/playerCard/PlayerCard';
import Spinner from './../../components/spinner/Spinner';




const StartPage = () => {
  const { getTopScoresPlayer, loading, error } = FotbalServices();

  const [data, setData] = useState([])


  useEffect(() => {
    onRequest()
  }, [])

  const onRequest = () => {
    getTopScoresPlayer()
      .then(onTopLoaded)
  }

  const onTopLoaded = (arr) => {
    setData(arr)
  }

  const err = error ? <Error /> : null;

  const spiner = loading ? <div
    className='spin'
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Spinner />
  </div> : null;

  const content = !loading && !error ? <List><PlayerCard topPlayers={data} /></List> : null

  return (
    <>
      <Header />
      <div className='content'>
        <Navigation />
        <div className="content__wrapper">
          {err}
          {spiner}
          {content}
        </div>
      </div>
    </>
  )
}
export default StartPage;