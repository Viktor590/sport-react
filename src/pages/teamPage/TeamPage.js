import React, { useState, useEffect } from 'react';
import Search from '../../components/search/Search';
import FotbalServices from '../../services/FotbalServices';
import TeamCard from '../../components/teamCard/TeamCard';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import List from '../../components/list/List';
import Spinner from '../../components/spinner/Spinner';




const TeamPage = (props) => {

  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([])

  const { getSearchTeam, loading } = FotbalServices();

  useEffect(() => {
    onRequest(inputValue)
  }, [inputValue])

  const addTeam = (value) => {
    setInputValue(value);
  }

  const onRequest = (value) => {
    getSearchTeam(value)
      .then(onTeamLoaded)
  }
  const onTeamLoaded = (arr) => {
    setData(arr)
  }

  const content = !loading ?
    <List>
      <TeamCard team={data} />
    </List> : <Spinner />


  return (
    <>
      <Header />
      <div className='content'>
        <Navigation />
        <div className="content__wrapper">
          <Search onAdd={addTeam} />
          {/* {err}
          {spiner} */}
          {content}
        </div>
      </div>
    </>
    // <ContentList content={<TeamCard team={data} />}>
    //   <Search onAdd={addTeam} />
    // </ContentList>
  )
}
export default TeamPage;