import TeamsModel from '../database/models/TeamsModel';
import MatchesModel, { Matches } from '../database/models/MatchesModel';

class MatchesService {
  public static async findAll(): Promise<Matches[]> {
    const matches = await MatchesModel.findAll({
      include: [
        { model: TeamsModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamsModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return matches;
  }
}

export default MatchesService;
