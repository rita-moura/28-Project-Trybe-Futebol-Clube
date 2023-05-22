import ValidadeError from '../utils/validateError';
import TeamsModel from '../database/models/TeamsModel';
import MatchesModel, { MatchCreate, Matches } from '../database/models/MatchesModel';
import TeamsService from './TeamsService';
import { createLeaderBoard } from '../utils/LeaderBoard';

class MatchesService {
  public static async findAll(inProgress: string) {
    const allMatches = await MatchesModel.findAll({
      include: [
        { model: TeamsModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamsModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    const matches = allMatches.map((match) => match.dataValues);
    if (inProgress === 'true') {
      return matches.filter((match) => match.inProgress === true);
    }

    if (inProgress === 'false') {
      return matches.filter((match) => match.inProgress === false);
    }

    return matches;
  }

  public static async create(match: MatchCreate) {
    const homeTeamExist = await TeamsService.findById(match.homeTeamId);
    const awayTeamExist = await TeamsService.findById(match.awayTeamId);

    if (!homeTeamExist || !awayTeamExist) {
      throw new ValidadeError(404, 'There is no team with such id!');
    }

    if (match.homeTeamId === match.awayTeamId) {
      throw new ValidadeError(422, 'It is not possible to create a match with two equal teams');
    }

    const newMatch = await MatchesModel.create({
      ...match,
      inProgress: true,
    });

    return newMatch.dataValues;
  }

  public static async updateToFinish(id: string) {
    const matchUpdate = await MatchesModel.update({ inProgress: false }, { where: { id } });
    return matchUpdate;
  }

  public static async updateToGoals(match: Matches, id: string) {
    const { homeTeamGoals, awayTeamGoals } = match;
    const matchUpdate = await MatchesModel.update({
      homeTeamGoals, awayTeamGoals,
    }, {
      where: { id },
    });
    return matchUpdate;
  }

  public static async leaderBoard(param: string) {
    const teams = await TeamsService.findAll();
    const matches = await this.findAll('false');
    const result = createLeaderBoard(teams, matches, param);
    return result;
  }
}

export default MatchesService;
