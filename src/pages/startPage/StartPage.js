import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import List from '../../components/list.js/List';
import Navigation from '../../components/navigation/Navigation';
import FotbalServices from '../../services/FotbalServices';


const StartPage = () => {
  // const { getTopScoresPlayer } = FotbalServices();
  // useEffect(() => {
  //   getTopScoresPlayer()
  // }, [])

  return (
    <>
      <Header />
      <div className='content'>
        <Navigation />
        <div className="content__wrapper">
          <List />
        </div>
      </div>
    </>
  )
}
export default StartPage;