import { useHttp } from './../hooks/http.hooks';

const FotbalServices = () => {
  const { loading, request, error, clearError } = useHttp();

  const GETBASE = 'https://v3.footba.api-sports.io';

  const getTopScoresPlayer = async () => {
    const res = await request(`${GETBASE}/players/topscorers?season=2020&league=61`)
    return res.response.map(_playerTopTransform)
  }

  const getSearchTeam = async (value) => {
    const res = await request(`${GETBASE}/teams?name=${value}`);
    return res.response.map(_teamSearchTransform)
  }

  const getSearchPlayer = async (id) => {
    const res = await request(`${GETBASE}/players?id=${id}&season=2021`);
    return res.response.map(_playerTopTransform)
  }

  const _playerTopTransform = (arr) => {
    return {
      id: arr.player.id,
      name: arr.player.name,
      photo: arr.player.photo,
      age: arr.player.age,
      team: arr.statistics.map(el => el.team.name)
      // nationality: arr.player.nationality
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


  return { getTopScoresPlayer, getSearchTeam, getSearchPlayer, loading, error }
}
export default FotbalServices;
