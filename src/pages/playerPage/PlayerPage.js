import React, { useState } from 'react';
import ContentList from "../../components/contentList/ContentList";
import Search from "../../components/search/Search";
import PlayerCard from './../../components/playerCard/PlayerCard';



const PlayerPage = () => {



  return (
    <ContentList content={<PlayerCard />}>
      <Search />
    </ContentList>
  )
}
export default PlayerPage;
