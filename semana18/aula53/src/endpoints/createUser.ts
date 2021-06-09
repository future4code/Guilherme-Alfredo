// 2.c && 4

import { Request, Response } from "express";
import generateId from "../services/idGenerator"
import { generateToken } from "../services/tokenGenerator";
import createUsers from "../data/createUsers"
import {createHash} from "../services/hashManager"
import { USER_ROLES } from "../types";
import { createFullAddress } from "../services/getAddressInfo";

const createUser = async (req: Request, res: Response) => {
   try {
      const id = generateId()

      const { email, password, role, cep, number, complement } = req.body

      if (!role) {
         res.statusCode = 422
         throw new Error("Preencha o campo 'role'")
      }

      if(!(role in USER_ROLES)){
         throw new Error("'role' must be 'NORMAL' or 'ADMIN'")
      }

      const hashPassword = createHash(password)

      if(!email || !email.includes("@")){ 
         throw new Error("Invalid email")
      }

      if(password.length < 6){
         throw new Error("Invalid password")
      }

      await createUsers(id, email, hashPassword, role)

      const token: string = generateToken({ id, role })

      await createFullAddress(id, cep, number, complement)

      res.send({token})
   } catch (error) {
      res.send({message: error.message})
   }
};

export default createUser;