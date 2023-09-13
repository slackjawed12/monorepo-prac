import { Sequelize } from "sequelize";
import { User as _User } from "./User";
export function initModels(sequelize: Sequelize) {
  const User = _User.initModel(sequelize);

  return {
    User: User,
  };
}
