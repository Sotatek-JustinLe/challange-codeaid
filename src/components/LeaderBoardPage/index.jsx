import React, { useState, useLayoutEffect } from 'react';
import { findFlagofCountries } from '../../helpers';
import './style-leaderboard-page.scss';
import LeagueService from '../../services/LeagueService';
import { sortLeaderBoard } from '../../helpers/index';

const Title = () => {
  return (
    <div className="leaderboard-page-wrapper__title">League Standings</div>
  );
};

const Table = ({ leaderBoard }) => {
  const RowHeader = () => {
    return (
      <div className="row row--header">
        <div className="col col_1">Team Name</div>
        <div className="col col_2">MP</div>
        <div className="col col_3">GF</div>
        <div className="col col_3-4">GD</div>
        <div className="col col_4">GA</div>
        <div className="col col_5">Points</div>
      </div>
    );
  };

  const Row = ({ leaderBoardItem }) => {
    return (
      <div className="row">
        <div className="col col_1 font-bold">
          <div className="flag">
            <img src={findFlagofCountries(leaderBoardItem.name)} alt="" />
          </div>
          <div className="country_name">{leaderBoardItem.name}</div>
        </div>
        <div className="col col_2">{leaderBoardItem.numberOfMatchPlayed}</div>
        <div className="col col_3">{leaderBoardItem.goalsFor}</div>
        <div className="col col_3-4">{leaderBoardItem.goalsDiff}</div>
        <div className="col col_4">{leaderBoardItem.goalsAgainst}</div>
        <div className="col col_5 font-bold font-bold--blue">
          {leaderBoardItem.points}
        </div>
      </div>
    );
  };

  return (
    <div className="leaderboard-page-wrapper__table">
      <RowHeader />
      {leaderBoard.map((item, index) => (
        <Row leaderBoardItem={item} key={index} />
      ))}
    </div>
  );
};

const LeaderBoardPage = () => {
  const [leaderBoard, setLeaderBoard] = useState([]);
  const leagueService = LeagueService.getInstance();

  useLayoutEffect(() => {
    (async () => {
      await leagueService.fetchData();
      setLeaderBoard(sortLeaderBoard(leagueService.getMatches()));
    })();
  }, []);

  return (
    <div className="leaderboard-page-wrapper">
      <Title />
      <Table leaderBoard={leaderBoard} />
    </div>
  );
};

export default LeaderBoardPage;
