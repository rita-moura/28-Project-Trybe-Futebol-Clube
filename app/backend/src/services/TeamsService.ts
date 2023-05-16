import TeamsModel, { Teams } from '../database/models/TeamsModel';

class TeamsService {
  public static async findAll(): Promise<Teams[]> {
    const teams = await TeamsModel.findAll();
    return teams;
  }

  public static async findById(id: number): Promise<Teams> {
    const teamById = await TeamsModel.findByPk(id);

    if (!teamById) throw new Error('Time não encontrado');

    return teamById;
  }
}

export default TeamsService;
