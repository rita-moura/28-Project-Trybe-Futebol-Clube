import { DataTypes, Model } from 'sequelize';
import sequelize from '.';

export interface Users {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export type UserCreate = Omit<Users, 'id'>;

class UsersModel extends Model<Users, UserCreate> {
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

UsersModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'users',
    sequelize,
    timestamps: false,
    underscored: true,
  },
);

export default UsersModel;
