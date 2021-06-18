import { deleteUser } from "../data/deleteUser"
import { getTokenData } from "../services/authenticator"



export const deleteUserBusiness = async (id: string, token: string) => {

    if (!id) {
        throw new Error ("You must specify an ID")
    }
    
    if (!token){
        throw new Error ("Unauthorized")
    }

    const verifiedToken = await getTokenData(token)

    if(!verifiedToken) {
        throw new Error ("You must be logged in")
    }

    if(verifiedToken.role !== "ADMIN"){
        throw new Error("Only ADMINs can delete users!")
    }

    await deleteUser(id)
}