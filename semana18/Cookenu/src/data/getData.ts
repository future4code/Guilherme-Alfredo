import * as jwt from "jsonwebtoken";
import { authenticationData } from "../services/authenticator";

const getData = (token: string): authenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {id: payload.id};

    return result;
}

export default getData;