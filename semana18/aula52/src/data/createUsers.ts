import connection from "../connection";
import { USER_ROLES } from "../types";

const userTableName = "User";

const createUsers = async (
  id: string,
  email: string,
  password: string,
  role: USER_ROLES) => {
  await connection
    .insert({
      id,
      email,
      password,
      role,
    })
    .into(userTableName);
};

export default createUsers;