import * as jwt from "jsonwebtoken"
import { USER_ROLES } from "../types"

export type authenticationData = {
    id: string,
    role: USER_ROLES
}

const expiresIn = "12h"

export function generateToken(payload : authenticationData): string {
    const token = jwt.sign(
        payload,
        process.env.JWT_KEY!,
        {
            expiresIn
        }
    )
    return token
}