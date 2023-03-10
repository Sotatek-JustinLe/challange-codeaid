import SchedulePage from './components/SchedulePage/index';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import NotFound from './components/404/index';
import LeaderBoardPage from './components/LeaderBoardPage/index';
// import LeagueService from './services/LeagueService.js';
// import { useEffect } from 'react';

function App() {
  // const leagueService = new LeagueService();

  const location = useLocation();
  const history = useHistory();
  if (location.pathname === '/') {
    history.push('/schedule');
  }

  // useEffect(() => {
  //   const data = leagueService.getMatches();
  //   console.log('data: ', data);
  // }, []);

  return (
    <div>
      <Switch>
        <Route path="/schedule">
          <SchedulePage />
        </Route>
        <Route path="/leaderboard">
          <LeaderBoardPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
