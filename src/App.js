import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import NotFound from "./components/404/index";
import Layout from "./components/Layouts";
import LeaderBoardPage from "./components/LeaderBoardPage/index";
import SchedulePage from "./components/SchedulePage/index";
// import LeagueService from './services/LeagueService.js';
// import { useEffect } from 'react';

function App() {
  // const leagueService = new LeagueService();

  const location = useLocation();
  const history = useHistory();
  if (location.pathname === "/") {
    history.push("/schedule");
  }

  // useEffect(() => {
  //   const data = leagueService.getMatches();
  //   console.log('data: ', data);
  // }, []);

  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
