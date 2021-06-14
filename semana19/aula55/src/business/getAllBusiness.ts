import { selectAllUsers } from "../data/selectAllUsers"
import { selectUserByEmail } from "../data/selectUserByEmail"
import { user} from "../model/user"
import { getTokenData } from "../services/authenticator"


export const getAllBusiness = async (token: string) => {
        if(!token) {
            throw new Error ("Unauthorized")
        }

        const userData = await getTokenData(token)

        if(!userData) {
            throw new Error ("You must be logged in")
        }

        const users = await selectAllUsers()

        return users;
    }

