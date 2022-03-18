import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { StartPage, TeamPage, PlayerPage, ErrorPage, SinglePlayerPage, SingleTeamPage, StandingsPage } from '../../pages';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route exact path="/" element={<StartPage />} />
            <Route exact path="/team" element={<TeamPage />} />
            {/* <Route exact path="/player" element={<PlayerPage />} /> */}
            <Route exact path="/singlePlayer/:playerId" element={<SinglePlayerPage />} />
            <Route exact path="/singleTeam/:teamId" element={<SingleTeamPage />} />
            <Route exact path="/standings/:leagueId" element={<StandingsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
