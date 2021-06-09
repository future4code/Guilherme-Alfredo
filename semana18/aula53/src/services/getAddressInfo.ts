import axios from 'axios'
import connection from '../connection';
import {userAddress} from "../types";

export const createFullAddress = async ( id: string, cep: string, number: string, complement: string,
    ): Promise <any> => {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
    await connection.raw(`
    INSERT INTO FullAddress (user_id, cep, street, number, complement, neighborhood, city, state)
    VALUES(
        "${id}",
        "${cep}",
        "${response.data.logradouro}",
        "${number}",
        "${complement}",
        "${response.data.bairro}",
        "${response.data.localidade}",
        "${response.data.uf}"
    )
    `)
}