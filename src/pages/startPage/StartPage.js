import React, { useState, useEffect } from 'react';
import Error from '../../components/error/Error';
import Header from '../../components/header/Header';
import List from '../../components/list/List';
import Navigation from '../../components/navigation/Navigation';
import FotbalServices from '../../services/FotbalServices';
import PlayerCard from '../../components/playerCard/PlayerCard';
import Spinner from './../../components/spinner/Spinner';
import SelectLigue from '../../components/selectLigue/SelectLigue';




const StartPage = () => {
  const { getTopScoresPlayer, getAllCountries, getAllSeasons, getTopSelect, loading, error } = FotbalServices();

  const [data, setData] = useState([]);
  const [countriesData, setCountriesData] = useState([1, 2])
  const [seasonsData, setSeasonsData] = useState([1, 2])
  const [selectLiga, setSelectLiga] = useState(null);
  const [selectSeason, setSelectSeason] = useState(null);


  useEffect(() => {
    onRequest();
    console.log(data);
  }, [])

  // useEffect(() => {
  //   onRequestSelect(selectLiga, selectSeason)
  //   console.log(selectLiga);
  //   console.log(selectSeason);
  // }, [selectLiga])


  // const onRequestSelect = (value, season) => {
  //   getTopSelect(value, season)
  //     .then(res => console.log(res))
  // }

  const onRequest = () => {
    getTopScoresPlayer(selectLiga, selectSeason)
      .then(onTopLoaded);

    getAllCountries()
      .then(onCoutriesData);

    getAllSeasons()
      .then(onSeasonsData);

  }

  const onTopLoaded = (arr) => {
    setData(arr)
  }

  const onSelectLoaded = (arr) => {
    setSelectLiga(arr)
  }


  const onCoutriesData = (arr) => {
    setCountriesData(1, 2, 3)
  }

  const onSeasonsData = (arr) => {
    setSeasonsData(1, 2, 3)
  }

  const addSelectLigue = (value) => {
    setSelectLiga(value)
  }

  const addSelectSeason = (value) => {
    setSelectSeason(value)
  }

  const err = error ? <Error /> : null;

  const spiner = loading ? <div
    className='spin'
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Spinner />
  </div> : null;

  const content = !loading && !error ? <List><PlayerCard players={data} /></List> : null

  return (
    <>
      <Header />
      <div className='content'>
        <Navigation />
        <div className="content__wrapper">
          <SelectLigue
            onSelectLigue={addSelectLigue}
            onSelectSeason={addSelectSeason}
            countries={countriesData}
            season={seasonsData}
          />
          {err}
          {spiner}
          {content}
        </div>
      </div>
    </>
  )
}
export default StartPage;