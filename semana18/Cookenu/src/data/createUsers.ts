import connection from "../connection"


const createUsers = async (
    id: string,
    name: string,
    email: string,
    password: string
) => {
    await connection
    .insert({
        id,
        name,
        email,
        password,
    })
    .into ("Cookenu_Users")
}

export default createUsers;