import { selectUserByEmail } from "../data/selectUserByEmail"
import { user } from "../model/user"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"


export const loginBusiness = async (
    email: string,
    password: string
) => {

    if (!email || !password) {
        throw new Error("'email' and 'password' are required")
    }

    const user: user = await selectUserByEmail(email)

    if(!user) {
        throw new Error("User not found or incorect password")
    }

    const passwordIsCorrect: boolean = await compare(password, user.password)

    if (!passwordIsCorrect) {
        throw new Error("User not found or incorect password")
    }

    const token: string = generateToken({
        id: user.id,
        role: user.role
    })

    return token

}

