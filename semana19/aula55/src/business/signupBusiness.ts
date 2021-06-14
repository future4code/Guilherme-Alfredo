import { insertUser } from "../data/insertUser";
import { userData, USER_ROLES } from "../model/user";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";


export const signupBusiness = async (
    userData : userData 
): Promise<string> => {
    
    if (!userData.name || !userData.email || !userData.password || !userData.role) {
        throw new Error ("Fill in the fields 'name','role', 'email' and 'password'")
    }

const cypherPassword =  await hash(userData.password);
const id = generateId()

const newUser = {
    ...userData,
    password: cypherPassword,
    id
}

await insertUser(newUser)

const token: string = generateToken({
    id: newUser.id,
    role: userData.role
})

return token

}
