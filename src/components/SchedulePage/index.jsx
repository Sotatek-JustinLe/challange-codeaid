import { useEffect, useState } from 'react';
import './style-schedule-page.scss';
import LeagueService from '../../services/LeagueService';
import {
  convertTimeToDay,
  convertTimeToHourMins,
  findFlagofCountries,
} from '../../helpers';

const Title = () => {
  return <div className="schedule-page-wrapper__title">League Schedule</div>;
};

const Table = ({ allMatches }) => {
  const RowHeader = () => {
    return (
      <div className="row row--header">
        <div className="col col_1">Date/Time</div>
        <div className="col col_2">Stadium</div>
        <div className="col col_3">Home Team</div>
        <div className="col col_4"></div>
        <div className="col col_5">Away Team</div>
      </div>
    );
  };

  const Row = ({ match }) => {
    return (
      <div className="row">
        <div className="col col--vertical col_1">
          <div>{convertTimeToDay(match.matchDate)}</div>
          <div>{convertTimeToHourMins(match.matchDate)}</div>
        </div>
        <div className="col col_2">{match.stadium}</div>
        <div className="col col_3 font-bold">
          <div className="country_name">{match.homeTeam}</div>
          <div className="flag">
            <img src={findFlagofCountries(match.homeTeam)} alt="" />
          </div>
        </div>
        <div className="col col_4 font-bold">{`${
          match.matchPlayed
            ? `${match.homeTeamScore} : ${match.awayTeamScore}`
            : '- : -'
        }`}</div>
        <div className="col col_5 font-bold away-team">
          <div className="flag">
            <img src={findFlagofCountries(match.awayTeam)} alt="" />
          </div>
          <div className="country_name">{match.awayTeam}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="schedule-page-wrapper__table">
      <RowHeader />
      {allMatches.map((item, index) => (
        <Row match={item} key={index} />
      ))}
    </div>
  );
};

const SchedulePage = () => {
  const leagueService = LeagueService.getInstance();
  const [allMatches, setAllMatches] = useState([]);

  useEffect(() => {
    (async () => {
      await leagueService.fetchData();
      setAllMatches(leagueService.allMatches);
    })();
  }, []);

  return (
    <div className="schedule-page-wrapper">
      <Title />
      <Table allMatches={allMatches} />
    </div>
  );
};

export default SchedulePage;
