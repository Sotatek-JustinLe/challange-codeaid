import * as flag from '../assets';
export const countries = [
  {
    name: 'Brazil',
    flafUrl: flag.brazil,
  },
  {
    name: 'Switzerland',
    flafUrl: flag.switzerland,
  },
  {
    name: 'Cameroon',
    flafUrl: flag.cameroon,
  },
  {
    name: 'Serbia',
    flafUrl: flag.serbia,
  },
];

export const findFlagofCountries = (countryName) => {
  const res = countries.find((c) => c.name === countryName);
  return res ? res.flafUrl : '';
};

const matches1 = [
  { homeTeam: 'Team A', awayTeam: 'Team B', homeScore: 2, awayScore: 1 },
  { homeTeam: 'Team C', awayTeam: 'Team D', homeScore: 0, awayScore: 0 },
  { homeTeam: 'Team B', awayTeam: 'Team C', homeScore: 1, awayScore: 3 },
  { homeTeam: 'Team D', awayTeam: 'Team A', homeScore: 1, awayScore: 2 },
  { homeTeam: 'Team A', awayTeam: 'Team C', homeScore: 3, awayScore: 1 },
  { homeTeam: 'Team D', awayTeam: 'Team B', homeScore: 2, awayScore: 0 },
];

export const sortLeaderBoard = (matches) => {
  const points = {};
  for (const match of matches) {
    if (!points[match.homeTeam]) points[match.homeTeam] = 0;
    if (!points[match.awayTeam]) points[match.awayTeam] = 0;

    if (match.homeTeamScore > match.awayTeamScore) {
      points[match.homeTeam] += 3;
    } else if (match.homeTeamScore === match.awayTeamScore) {
      points[match.homeTeam] += 1;
      points[match.awayTeam] += 1;
    } else {
      points[match.awayTeam] += 3;
    }
  }

  // Create an array of team objects with their name, points, goal difference, and goals scored
  const teams = [];
  for (const team in points) {
    const teamObj = {
      name: team,
      points: points[team],
      goalDiff: 0,
      goalsScored: 0,
    };
    for (const match of matches) {
      if (match.homeTeam === team) {
        teamObj.goalDiff += match.homeTeamScore - match.awayTeamScore;
        teamObj.goalsScored += match.homeTeamScore;
      } else if (match.awayTeam === team) {
        teamObj.goalDiff += match.awayTeamScore - match.homeTeamScore;
        teamObj.goalsScored += match.awayTeamScore;
      }
    }
    teams.push(teamObj);
  }

  // Sort the teams by their total number of points
  teams.sort((a, b) => b.points - a.points);

  // Sort teams with same number of points based on head-to-head results
  for (let i = 0; i < teams.length - 1; i++) {
    if (teams[i].points === teams[i + 1].points) {
      const miniLeaderboard = teams.slice(i, i + 2).sort((a, b) => {
        if (a.name === teams[i].name) {
          return -1;
        } else if (b.name === teams[i].name) {
          return 1;
        } else {
          return b.points - a.points;
        }
      });
      teams.splice(i, 2, ...miniLeaderboard);
    }
  }

  // Sort teams with same number of points based on goal difference
  for (let i = 0; i < teams.length - 1; i++) {
    if (
      teams[i].points === teams[i + 1].points &&
      teams[i].goalDiff < teams[i + 1].goalDiff
    ) {
      [teams[i], teams[i + 1]] = [teams[i + 1], teams[i]];
      i = -1;
    }
  }

  return teams;
};
