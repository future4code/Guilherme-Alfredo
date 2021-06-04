import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";


//Create user 
app.put("/user", async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
        INSERT INTO Users (name, nickname, email)
        VALUES(
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}"
        );
        `)
        res.status(200).send("A new user has been created")
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
})

//Get all users
app.get("/user/all", async(req:Request, res:Response) => {
    try{
        const result = await connection.raw(`
        SELECT * FROM Users; 
        `)
        res.status(200).send(result[0])
    } catch (err) {
        res.status(400).send({
            message: err.message
    })
    }
})

//Get user by id
const getUserById = async (id: string): Promise<any> => {
    const result = await connection("Users")
        .where("id", id);
    return result
}
app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const user = await getUserById(id)
        res.status(200).send(user)
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
})

//Edit User
app.post("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        if (req.body.name && req.body.nickname) {
            const result = await connection.raw(`
        UPDATE Users 
        SET 
        name = "${req.body.name}", 
        nickname = "${req.body.nickname}" 
        WHERE id = ${req.params.id};
        `)
        } else if (req.body.name && !req.body.nickname) {

            throw new Error("you have to insert a nickname")

        } else if (!req.body.name && req.body.nickname) {

            throw new Error("you have to insert a name")

        } else if (!req.body.name && !req.body.nickname) {

            throw new Error("you have to insert a name and a nickname")
        }

        res.status(200).send("Modified user")
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
})

//Create Task
app.put("/task", async(req:Request, res:Response) => {
    try {

        const splitDate = req.body.limitDate.split("/")
        const correctedDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
        const result = await connection.raw(`
        INSERT INTO Tasks (title, description, limitDate, creatorUserId)
        VALUES(
            "${req.body.title}",
            "${req.body.description}",
            "${correctedDate}",
            ${req.body.creatorUserId}
        );
            `)
            res.status(200).send("A new task has been created!")
    } catch (err) {
        res.status(400).send({
            message: err.message
    })
}})



//Get task by id
app.get("/task/:id", async(req:Request, res:Response) => {
    try {

        const result = await connection.raw(`
        SELECT Tasks.id, title, description, limitDate, status, creatorUserId, nickname  
        FROM Tasks 
        JOIN Users ON creatorUserId = Users.id
        WHERE Tasks.id = ${req.params.id};
        `)

        const date = new Date(result[0][0].limitDate).toISOString()
        const splitDate = date.split("T")
        const splittedDate = splitDate[0].split("-")
        const correctedDate = `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`

        result[0][0].limitDate = correctedDate

        res.status(200).send(result[0])
    } catch (err) {
        res.status(400).send({
            message: err.message
    })
    }
})




