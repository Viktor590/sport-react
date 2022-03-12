import React, { useState, useEffect } from 'react';
// import ContentList from "../../components/contentList/ContentList";
import Header from '../../components/header/Header';
import List from '../../components/list/List';
import Navigation from '../../components/navigation/Navigation';
import Search from "../../components/search/Search";
import Spinner from '../../components/spinner/Spinner';
import FotbalServices from '../../services/FotbalServices';
import PlayerCard from '../../components/playerCard/PlayerCard';
import Error from '../../components/error/Error';



const PlayerPage = () => {

  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState('')

  const { getSearchPlayer, loading, error } = FotbalServices();

  useEffect(() => {
    onRequestPlayer(inputValue)
  }, [inputValue])

  const addPlayer = (value) => {
    setInputValue(value);
  }

  const onRequestPlayer = (value) => {
    getSearchPlayer(value)
      .then(onPlayerLoaded)
  }

  const onPlayerLoaded = (arr) => {
    setData(arr)
  }

  const err = error ? <Error /> : null;

  const spiner = loading ? <div
    className='spin'
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Spinner />
  </div> : null;

  const content = !loading && !error ?
    <List>
      <PlayerCard players={data} />
    </List> : null

  return (
    <>
      <Header />
      <div className='content'>
        <Navigation />
        <div className="content__wrapper">
          <Search onAdd={addPlayer} />
          {err}
          {spiner}
          {content}
        </div>
      </div>
    </>
  )

  // return (
  //   <ContentList content={<PlayerCard />}>
  //     <Search />
  //   </ContentList>
  // )
}
export default PlayerPage;
