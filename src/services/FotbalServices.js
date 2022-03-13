import { useHttp } from './../hooks/http.hooks';

const FotbalServices = () => {
  const { loading, request, error, clearError } = useHttp();

  const GETBASE = 'https://v3.ftball.api-sports.io';

  const getTopScoresPlayer = async (value, seasonValue) => {
    const res = await request(`${GETBASE}/players/topscorers?season=${seasonValue}&league=${value}`)
    return res.response.map(_playerTopTransform)
  }

  const getSearchTeam = async (value) => {
    const res = await request(`${GETBASE}/teams?name=${value}`);
    return res.response.map(_teamSearchTransform)
  }

  const getSinglePlayer = async (value) => {
    const res = await request(`${GETBASE}/players?id=${value}&season=2020`)
    return res.response.map(_singlePlayerTransform)
  }

  const getSearchPlayer = async (id) => {
    const res = await request(`${GETBASE}/players?id=${id}&season=2021`);
    return res.response.map(_playerTopTransform)
  }

  const getAllCountries = async () => {
    const res = await request(`${GETBASE}/leagues`);
    return res.response.map(_countriesAllTransform)
  }

  const getAllSeasons = async () => {
    const res = await request(`${GETBASE}/leagues/seasons`);
    return res.response
  }

  const _playerTopTransform = (arr) => {
    return {
      id: arr.player.id,
      name: arr.player.name,
      photo: arr.player.photo,
      age: arr.player.age,
      team: arr.statistics.map(el => el.team.name)
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

  const _countriesAllTransform = (arr) => {
    return {
      id: arr.league.id,
      name: arr.league.name,
    }
  }

  const _singlePlayerTransform = (arr) => {
    return {
      name: arr.player.name,
      nationality: arr.player.nationality,
      age: arr.player.age,
      height: arr.player.height,
      weight: arr.player.weight,
      photo: arr.player.photo,
      teamId: arr.statistics.map(el => el.team.id),
      teamLogo: arr.statistics.map(el => el.team.logo),
      position: arr.statistics.map(el => el.games.position)
    }
  }

  return { getTopScoresPlayer, getSearchTeam, getAllCountries, getSearchPlayer, getAllSeasons, getSinglePlayer, loading, error }
}
export default FotbalServices;
