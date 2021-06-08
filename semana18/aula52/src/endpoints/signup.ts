import { Request, Response } from "express";
import generateId from "../services/idGenerator"
import { generateToken } from "../services/tokenGenerator";
import createUsers from "../data/createUsers"
import { createHash } from "../services/hashManager";
import { USER_ROLES } from "../types";

const signup = async (req: Request, res: Response) => {
   try {
      const id = generateId()
      const { email, password, role } = req.body

      if(!email || !email.includes("@")){
         throw new Error("Invalid email")
      }

      if(password.length < 6){
         throw new Error("Invalid password")
      }

      if (!(role in USER_ROLES)) {
         throw new Error("role deve ser 'NORMAL' ou 'ADMIN'")
      }
      await createUsers(id, email, createHash(password), role)

      const token: string = generateToken({ id, role})

      res.send({token})
   } catch (error) {
      res.status(400).send({message: error.message})
   }
};

export default signup;