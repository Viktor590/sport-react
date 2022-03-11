import React from 'react';
import ContentList from '../../components/contentList/ContentList';
import TeamCard from '../../components/teamCard/TeamCard';




const TeamPage = () => {
  return (
    <ContentList content={<TeamCard />} />
  )
}
export default TeamPage;