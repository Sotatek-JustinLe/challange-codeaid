import SchedulePage from './components/SchedulePage/index';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import NotFound from './components/404/index';
import LeaderBoardPage from './components/LeaderBoardPage/index';

import Layout from './components/Layouts/index';

function App() {
  const location = useLocation();
  const history = useHistory();
  if (location.pathname === '/') {
    history.push('/schedule');
  }

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
