import TeamsModel from '../database/models/TeamsModel';
import MatchesModel from '../database/models/MatchesModel';

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

  public static async updateToFinish(id: string) {
    const matchUpdate = await MatchesModel.update({ inProgress: false }, { where: { id } });
    return matchUpdate;
  }
}

export default MatchesService;
