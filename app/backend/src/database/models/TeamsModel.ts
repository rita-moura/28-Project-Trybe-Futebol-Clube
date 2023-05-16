import { DataTypes, Model } from 'sequelize';
import sequelize from '.';

export interface Teams {
  id: number;
  teamName: string;
}

class TeamsModel extends Model {
  declare id: number;
  declare teamName: string;
}

TeamsModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'team_name',
    },
  },
  {
    modelName: 'teams',
    sequelize,
    timestamps: false,
    underscored: true,
  },
);

export default TeamsModel;
