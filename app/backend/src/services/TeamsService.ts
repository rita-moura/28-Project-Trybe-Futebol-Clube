import ValidadeError from '../utils/validateError';
import TeamsModel, { Teams } from '../database/models/TeamsModel';

class TeamsService {
  public static async findAll(): Promise<Teams[]> {
    const teams = await TeamsModel.findAll();
    return teams;
  }

  public static async findById(id: number): Promise<Teams> {
    const teamById = await TeamsModel.findByPk(id);

    if (!teamById) throw new ValidadeError(404, 'There is no team with such id!');

    return teamById;
  }
}

export default TeamsService;
