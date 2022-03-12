import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { StartPage, TeamPage, PlayerPage, ErrorPage } from '../../pages';
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
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
