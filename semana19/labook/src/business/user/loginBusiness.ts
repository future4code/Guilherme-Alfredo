import { response } from "express"
import { selectUserByEmail } from "../../data/user/selectUserByEmail"
import { user } from "../../model/user"
import { generateToken } from "../../services/authenticator"
import { compare } from "../../services/hashManager"

export const loginBusiness = async (
    email: string,
    password: string
) => {

    if (!email || !password) {
        response.statusCode = 406
        throw new Error('"email" and "password" must be provided')
    }

    const user: user = await selectUserByEmail(email)

    const passwordIsCorrect: boolean = await compare(password, user.password)

    if (!passwordIsCorrect) {
        response.statusCode = 401
        throw new Error("Invalid credentials")
    }

    const token: string = generateToken({
        id: user.id
    })

    return token
}