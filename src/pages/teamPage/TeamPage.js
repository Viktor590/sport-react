import React, { useState } from 'react';

import ContentList from '../../components/contentList/ContentList';
import TeamCard from '../../components/teamCard/TeamCard';




const TeamPage = () => {

  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);


  return (
    <ContentList content={<TeamCard />} />
  )
}
export default TeamPage;