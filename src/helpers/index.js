import * as flag from '../assets';

export const convertTimeToDay = (number) =>
  `${new Date(number).getMonth()}.${new Date(number).getDate()}.${new Date(
    number
  ).getYear()}`;
export const convertTimeToHourMins = (number) =>
  `${new Date(number).getHours()}:${new Date(number).getMinutes()}`;

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
      goalsDiff: 0,
      goalsFor: 0,
    };
    for (const match of matches) {
      if (match.homeTeam === team) {
        teamObj.goalsDiff += match.homeTeamScore - match.awayTeamScore;
        teamObj.goalsFor += match.homeTeamScore;
      } else if (match.awayTeam === team) {
        teamObj.goalsDiff += match.awayTeamScore - match.homeTeamScore;
        teamObj.goalsFor += match.awayTeamScore;
      }
    }
    teams.push(teamObj);
  }

  const res = teams.map((i) => {
    return {
      ...i,
      goalsAgainst: i.goalsFor - i.goalsDiff,
      numberOfMatchPlayed: matches.filter(
        (item) =>
          (i.name === item.homeTeam || i.name === item.awayTeam) &&
          item.matchPlayed
      ).length,
    };
  });
  const sortPoint = res.sort((a, b) => b.points - a.points);
  const sortGoalsDiff = sortPoint.sort((a, b) => b.goalsDiff - a.goalsDiff);
  const sortGoalsFor = sortGoalsDiff.sort((a, b) => {
    if (a.goalsFor === b.goalsFor) {
      return a.name.localeCompare(b.name);
    }
    return b.goalsFor - a.goalsFor;
  });
  return sortGoalsFor;
};
