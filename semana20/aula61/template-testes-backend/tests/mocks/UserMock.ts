import { User, USER_ROLES } from "../../src/model/User";


export const userMockAdmin = new User(
    "id_mock_admin",
    "tarcisio",
    "tarcisio@gmail.com",
    "123456",
    USER_ROLES.ADMIN
)

export const userMockNormal = new User(
    "id_mock_normal",
    "greg",
    "greg@gmail.com",
    "123456",
    USER_ROLES.NORMAL
)

