import ContentList from "../../components/contentList/ContentList";
import PlayerCard from './../../components/playerCard/PlayerCard';



const PlayerPage = () => {
  return (
    <ContentList content={<PlayerCard />} />
  )
}
export default PlayerPage;