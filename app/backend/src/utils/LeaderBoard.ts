import { Teams } from '../database/models/TeamsModel';
import { Matches } from '../database/models/MatchesModel';

export interface IBoard {
  name: string;
  totalPoints: number;
  totalVictories:number;
  totalDraws: number;
  totalLosses: number;
  totalGames: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

class LeaderBoard {
  private name: string;
  private declare totalPoints: number;
  private declare totalVictories:number;
  private declare totalDraws: number;
  private declare totalLosses: number;
  private declare totalGames: number;
  private declare goalsFavor: number;
  private declare goalsOwn: number;
  private declare goalsBalance: number;
  private declare efficiency: number;

  constructor(name: string) {
    this.name = name;
    this.totalPoints = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.totalGames = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.goalsBalance = 0;
    this.efficiency = 0;
  }

  private counter(teamA: number, teamB: number) {
    this.goalsOwn += teamB;
    this.goalsFavor += teamA;
    if (teamA > teamB) {
      this.totalPoints += 3;
      this.totalVictories += 1;
    }
    if (teamA === teamB) {
      this.totalPoints += 1;
      this.totalDraws += 1;
    }
    if (teamA < teamB) {
      this.totalLosses += 1;
    }
  }

  private model(): IBoard {
    return {
      name: this.name,
      totalPoints: this.totalPoints,
      totalVictories: this.totalVictories,
      totalDraws: this.totalDraws,
      totalLosses: this.totalLosses,
      totalGames: this.totalGames,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      goalsBalance: this.goalsBalance,
      efficiency: Number(this.efficiency.toFixed(2)),
    };
  }

  private setEfficiency() {
    this.efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100);
  }

  private setGoalBalance() {
    this.goalsBalance = (this.goalsFavor - this.goalsOwn);
  }

  public getLeaderBoard(id: number, games: Matches[]): IBoard {
    this.totalGames = games.length;
    games.forEach((game) => {
      if (game.homeTeamId === id) this.counter(game.homeTeamGoals, game.awayTeamGoals);
      if (game.homeTeamId !== id) this.counter(game.awayTeamGoals, game.homeTeamGoals);
    });

    this.setEfficiency();
    this.setGoalBalance();

    return this.model();
  }
}

export const createLeaderBoard = (teams: Teams[], matches: Matches[], param: string) : IBoard[] => {
  const leaderBoard = teams.map((team) => {
    const teamBoard = new LeaderBoard(team.teamName);
    if (param === 'home') {
      return teamBoard
        .getLeaderBoard(team.id, matches.filter((match) => match.homeTeamId === team.id));
    }
    if (param === 'away') {
      return teamBoard
        .getLeaderBoard(team.id, matches.filter((match) => match.awayTeamId === team.id));
    }
    return teamBoard.getLeaderBoard(team.id, matches.filter((match) => match.awayTeamId === team.id
      || match.homeTeamId === team.id));
  });

  return leaderBoard
    .sort((a, b) => b.goalsFavor - a.goalsFavor)
    .sort((a, b) => b.goalsBalance - a.goalsBalance)
    .sort((a, b) => b.totalPoints - a.totalPoints);
};

export default LeaderBoard;
