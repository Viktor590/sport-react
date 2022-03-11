import { useHttp } from './../hooks/http.hooks';

const FotbalServices = () => {
  const { loading, request, error, clearError } = useHttp();

  const GETBASE = 'https://v3.football.api-sports.io'

  const getTopScoresPlayer = async () => {
    const res = await request(`${GETBASE}/players/topscorers?season=2020&league=61`)
    return res.response.map(_playerTopTransform)
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

  return { getTopScoresPlayer, loading, error }
}
export default FotbalServices;
