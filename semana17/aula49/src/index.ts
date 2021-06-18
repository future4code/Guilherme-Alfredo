import express, { Express, Request, Response } from "express"
import knex from "knex"
import cors from "cors"
import dotenv from "dotenv"
import { AddressInfo } from "net"


dotenv.config()

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA
   }
})

const app: Express = express()
app.use(express.json())
app.use(cors())

// Exercício 1a - filtro por nome com query params
app.get("/usersByName", async(req: Request,res: Response): Promise<void> =>{
   try {

      const name = req.query.name as string

      const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${name}%"
      `)

      const users = result[0]

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (err) {
      console.log(err)
      res.send(err.message || err.sqlMessage)
   }
});


// 1b) - filtro por type com path params
app.get("/usersByType/:type", async(req: Request,res: Response): Promise<void> =>{
   try {

      const type = req.params.type as string

      const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE type LIKE "%${type}%"
      `)

      const users = result[0]

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (err) {
      console.log(err)
      res.send(err.message || err.sqlMessage)
   }
});

//Exercício 2 - ordenação 
app.get("/users/search", async(req:Request, res:Response): Promise<void> => {
   try {

      const name = req.query.name as string 
      const type = req.query.type as string
      const orderBy = req.query.orderBy as string || "email"
      const orderType = req.query.orderType as string || "ASC"


      const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name = "${name}" OR type = "${type}"
      ORDER BY ${orderBy} ${orderType.toUpperCase()};
      `);

      const users = result[0]

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }
      res.status(200).send(users)
   } catch (err) {
      console.log(err)
      res.send(err.message || err.sqlMessage)
   }
}) 

//Exercício 3 - pagiamento
app.get("/users/all", async(req: Request,res: Response): Promise<void> =>{
   try {

      const page = Number(req.query.page) || 1

      const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      LIMIT 5 
      OFFSET ${5 * (page - 1)};
      `)

      const users = result[0]

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send({
         users,
         page
      })
      
   } catch (err) {
      console.log(err)
      res.send(err.message || err.sqlMessage)
   }
});

//Exercício 4 
app.get("/users/allFuncionalities", async(req:Request, res:Response): Promise<void> => {
   try {

      const name = req.query.name as string 
      const type = req.query.type as string
      const orderBy = req.query.orderBy as string || "name"
      const orderType = req.query.orderType as string || "ASC"
      const page = Number(req.query.page) || 1

      if (!name && !type) {
      const resultAll = await connection.raw(`
      SELECT * FROM aula48_exercicio
      ORDER BY ${orderBy} ${orderType.toUpperCase()}
      LIMIT 5 
      OFFSET ${5 * (page - 1)};
      `);
      const allUsers = resultAll[0]
      res.status(200).send({
         allUsers,
         page
      })
      }

      const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name = "${name}" OR type = "${type}"
      ORDER BY ${orderBy} ${orderType.toUpperCase()}
      LIMIT 5 
      OFFSET ${5 * (page - 1)};
      `);

      const users = result[0]

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }
      res.status(200).send({
         users,
         page
      })
   } catch (err) {
      console.log(err)
      res.send(err.message || err.sqlMessage)
   }
}) 

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})
