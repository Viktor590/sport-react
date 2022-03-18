import { useHttp } from './../hooks/http.hooks';

const FotbalServices = () => {
  const { loading, request, error } = useHttp();

  const GETBASE = 'https://v3.football.api-sports.io';

  const getTopScoresPlayer = async (value, seasonValue) => {
    const res = await request(`${GETBASE}/players/topscorers?season=${seasonValue}&league=${value}`)
    return res.response.map(_playerTopTransform)
  }

  const getSearchTeam = async (value) => {
    const res = await request(`${GETBASE}/teams?search=${value}`);
    return res.response.map(_teamSearchTransform)
  }

  const getSinglePlayer = async (value) => {
    const res = await request(`${GETBASE}/players?id=${value}&season=2020`)
    return res.response.map(_singlePlayerTransform)
  }

  const getCoach = async (value) => {
    const res = await request(`${GETBASE}/coachs?team=${value}`)
    return res.response.map(_coachTransform)
  }

  const getSingleTeam = async (value) => {
    const res = await request(`${GETBASE}/teams?id=${value}`)
    return res.response.map(_singleTeamTransform)
  }

  const getSingleTeamSquads = async (value) => {
    const res = await request(`${GETBASE}/players/squads?team=${value}`)
    return res.response.map(_singleTeamSquadsTransform)
  }

  const getSearchPlayer = async (id) => {
    const res = await request(`${GETBASE}/players?id=${id}&season=2021`);
    return res.response.map(_playerTopTransform)
  }

  const getAllCountries = async (value) => {
    const res = await request(`${GETBASE}/leagues`);
    return res.response.map(_countriesAllTransform)
  }

  const getCurrentLeague = async (value) => {
    const res = await request(`${GETBASE}/leagues?team=${value}`);
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
      team: arr.statistics.map(el => {
        return el.team.name
      })
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

  const _coachTransform = (arr) => {
    return {
      id: arr.id,
      firstName: arr.firstname,
      lastname: arr.lastname,
      age: arr.age,
      photo: arr.photo
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
      teamId: arr.statistics.map(el => {
        return el.team.id
      }),
      teamLogo: arr.statistics.map(el => {
        return el.team.logo
      }),
      position: arr.statistics.map(el => {
        return el.games.position
      })
    }
  }

  const _singleTeamTransform = (arr) => {
    return {
      id: arr.team.id,
      name: arr.team.name,
      country: arr.team.country,
      founded: arr.team.founded,
      capacity: arr.venue.capacity,
      stadium: arr.venue.name,
      logo: arr.team.logo,
    }
  }

  const _singleTeamSquadsTransform = (arr) => {
    return (
      arr.players.map((item) => {
        const { id, name, age, number, position, photo } = item
        return {
          id, name, age, number, position, photo
        }
      })
    )
  }

  return {
    getTopScoresPlayer,
    getSearchTeam,
    getAllCountries,
    getSearchPlayer,
    getAllSeasons,
    getSingleTeamSquads,
    getSingleTeam,
    getSinglePlayer,
    loading,
    error,
    getCoach,
    getCurrentLeague
  }
}
export default FotbalServices;
