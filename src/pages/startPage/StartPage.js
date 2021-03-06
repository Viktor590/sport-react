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
  const {
    getTopScoresPlayer,
    getAllCountries,
    getAllSeasons,
    loading,
    error } = FotbalServices();

  const [data, setData] = useState([]);
  const [countriesData, setCountriesData] = useState([])
  const [seasonsData, setSeasonsData] = useState([])
  const [selectLiga, setSelectLiga] = useState(61);
  const [selectSeason, setSelectSeason] = useState(2020);


  useEffect(() => {
    onRequest(selectLiga, selectSeason);
  }, [selectLiga, selectSeason])


  useEffect(() => {
    getAllCountries()
      .then(onCoutriesData);

    getAllSeasons()
      .then(onSeasonsData);
  }, [])

  const onRequest = (value, season) => {
    getTopScoresPlayer(value, season)
      .then(onTopLoaded);
  }

  const onTopLoaded = (arr) => {
    setData(arr)
  }

  const onCoutriesData = (arr) => {
    setCountriesData(arr)
  }

  const onSeasonsData = (arr) => {
    setSeasonsData(arr)
  }

  const addSelectLigue = (value) => {
    setSelectLiga(value)
  }

  const addSelectSeason = (value) => {
    setSelectSeason(value)
  }

  const err = error ? <Error /> : null;
  const spiner = loading ? <Spinner /> : null;
  const content = !loading && !error ?
    <>
      <SelectLigue
        onSelectLigue={addSelectLigue}
        onSelectSeason={addSelectSeason}
        countries={countriesData}
        season={seasonsData}
      />
      <List>
        <PlayerCard players={data} />
      </List>
    </> : null;

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