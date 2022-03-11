import { useHttp } from './../hooks/http.hooks';

const FotbalServices = () => {
  const { loading, request, error, clearError } = useHttp();

  const GETBASE = 'https://v3.football.api-sports.io';

  const getTopScoresPlayer = async () => {
    const res = await request(`${GETBASE}/players/topscorers?season=2020&league=61`)
    return res.response.map(_playerTopTransform)
  }

  const getSearchTeam = async (value) => {
    const res = await request(`${GETBASE}/teams?name=${value}`);
    return res.response.map(_teamSearchTransform)
  }

  const _playerTopTransform = (arr) => {
    return {
      id: arr.player.id,
      name: arr.player.name,
      photo: arr.player.photo,
      age: arr.player.age,
      nationality: arr.player.nationality
    }
  }

  const _teamSearchTransform = (arr) => {
    return {
      id: arr.team.id,
      photo: arr.team.logo,
      name: arr.team.name,
      founded: arr.team.founded,
      city: arr.venue.city
    }
  }

  return { getTopScoresPlayer, getSearchTeam, loading, error }
}
export default FotbalServices;
