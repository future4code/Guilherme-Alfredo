import { connection } from "../connection";
import { insertDTO } from "../../model/user";

export const insertUser = async(
   user: insertDTO
) => {
   await connection.insert(user).into('to_do_list_users')
}