import TeamsModel, { Teams } from '../database/models/TeamsModel';

class TeamsService {
  public static async findAll(): Promise<Teams[]> {
    const teams = await TeamsModel.findAll();
    return teams;
  }
}

export default TeamsService;
