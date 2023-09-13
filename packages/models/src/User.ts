import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
}

type UserOptionalAttributes =
  | "id"
  | "firstName"
  | "lastName"
  | "fullName"
  | "email";
type UserCreationAttributes = Optional<UserAttributes, UserOptionalAttributes>;
export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  id!: number;
  firstName!: string;
  lastName!: string;
  fullName!: string;
  email!: string;
  static initModel(sequelize: Sequelize.Sequelize) {
    return sequelize.define("User", {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      fullName: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.firstName + " " + this.lastName;
        },
      },
    }) as typeof User;
  }
}
