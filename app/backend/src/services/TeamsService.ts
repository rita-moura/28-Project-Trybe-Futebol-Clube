import TeamsModel from '../database/models/TeamsModel';

export type Teams = {
  id: number;
  teamName: string;
};

class TeamsService {
  public static async findAll(): Promise<Teams[]> {
    const teams = await TeamsModel.findAll();
    return teams;
  }
}

export default TeamsService;
