import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { StartPage, TeamPage, PlayerPage } from '../../pages';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route exact path="/" element={<StartPage />} />
            <Route exact path="/team" element={<TeamPage />} />
            <Route exact path="/player" element={<PlayerPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
