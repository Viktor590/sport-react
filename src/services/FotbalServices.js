import { useHttp } from './../hooks/http.hooks';

const FotbalServices = () => {
  const { loading, request, error, clearError } = useHttp();

  const GETBASE = 'https://v3.football.api-sports.io'

  const getTopScoresPlayer = async () => {
    const res = await request(`${GETBASE}/players/topscorers?season=2020&league=61`)
      .then(re => console.log(re))
    return res
  }

  return { getTopScoresPlayer }
}
export default FotbalServices;
