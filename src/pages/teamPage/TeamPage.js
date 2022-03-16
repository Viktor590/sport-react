import React, { useState, useEffect } from 'react';
import Search from '../../components/search/Search';
import FotbalServices from '../../services/FotbalServices';
import TeamCard from '../../components/teamCard/TeamCard';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import List from '../../components/list/List';
import Spinner from '../../components/spinner/Spinner';
import Error from '../../components/error/Error';


const TeamPage = (props) => {

  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([])

  const { getSearchTeam, loading, error } = FotbalServices();

  useEffect(() => {
    onRequestTeam(inputValue)
  }, [inputValue])


  const addTeam = (value) => {
    setInputValue(value);
  }

  const onRequestTeam = (value) => {
    getSearchTeam(value)
      .then(onTeamLoaded)
  }
  const onTeamLoaded = (arr) => {
    setData(arr)
  }

  const err = error ? <Error /> : null;

  const spiner = loading ? <Spinner /> : null;

  const content = !loading && !error ?
    <>
      <Search onAdd={addTeam} />
      <List>
        <TeamCard team={data} />
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
export default TeamPage;