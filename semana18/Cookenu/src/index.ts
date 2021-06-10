import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

app.get("/ping", (req: Request, res: Response) => { res.send("pong!") })

app.get('/actors', async (req, res) => {
    try {
        const result = await connection.raw(
            "SELECT * FROM Actor"
        )
        res.send(result[0])  // result[1] contém os metadados da query
    } catch (error) {
        console.log(error.sqlMessage || error.message);
        res.status(500).send("An unexpected error occurred")
    }
})

// const searchActor = async (name: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT * FROM Actor WHERE name = "${name}"
//     `)
//     return result[0]
// }

// app.get("/actors/:name", async (req: Request, res: Response) => {
//     try {
//         const name = req.params.name

//         res.send(await searchActor(name))

//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })

// const countActorsByGender = async (gender: string): Promise<any> => {
//     const result = await connection.raw(`
//     SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
//     `);

//     const count = result[0];
//     return count;
// };

// app.get("/actors/:gender", async (req: Request, res: Response) => {
//     try {
//         const gender = req.params.gender

//         res.send(await countActorsByGender(gender))

//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })


//update

// const updateActorSalary = async (id: string, salary: number): Promise<any> => {
//     await connection("Actor")
//         .update({
//             salary: salary,
//         })
//         .where("id", id);
// };

// app.put("/actors/:id", async (req, res) => {
//     try {
//         const salary: number = req.body.salary
//         const id = req.params.id

//         updateActorSalary(id, salary)

//         res.send("Updated!")

//     } catch (error) {

//         console.log(error.sqlMessage || error.message);

//         res.status(500).send("Internal error")
//     }
// })
// // delete

// const deleteActor = async (id: string): Promise<void> => {
//     await connection("Actor")
//         .delete()
//         .where("id", id);
// };

// app.delete("/actors/:id", async (req, res) => {
//     try {

//         const id = req.params.id
//         deleteActor(id)
//         res.send("Deleted!")

//     } catch (error) {

//         console.log(error.sqlMessage || error.message);

//         res.status(500).send("Internal error")
//     }
// })

// //media de salario

// const avgSalaryByGender = async (gender: string): Promise<any> => {
//     const result = await connection("Actor")
//         .avg("salary as average")
//         .where({ gender });

//     return result[0];
// };


// app.get("/actors/:gender", async (req: Request, res: Response) => {
//     try {

//         const gender = req.params.gender
//         res.send(await avgSalaryByGender(gender))

//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })


// const getActorById = async (id: string): Promise<any> => {

//     const result = await connection("Actor")
//     .where("id", id);
//     return result;
// };

// app.get("/actors/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id;
//         const actor = await getActorById(id);

//         res.status(200).send(actor)
//     } catch (err) {
//         res.status(400).send({
//             message: err.message,
//         });
//     }
// });

// 
// const countActors = async (gender: string): Promise<any> => {
//     const result = await connection("Actor")
//         .count("number of actors by gender")
//         .where({ gender });

//     return result[0];
// };

// app.get("/actors", async (req: Request, res: Response) => {
//     try {
//         const count = await countActors(req.query.gender as string);
//         res.status(200).send({
//             quantity: count,
//         });
//     } catch (err) {
//         res.status(400).send({
//             message: err.message,
//         });
//     }
// });


//atualizar salario 

// app.post("/actors/:id", async (req, res) => {
//     try {

//         const actorData = {
//             salary: req.body.salary,
//         }

//         await connection("Actor")
//             .update(actorData)

//         res.send("Updated!")

//     } catch (error) {

//         console.log(error.sqlMessage || error.message);

//         res.status(500).send("Internal error")
//     }
// })

app.get("/actors/:id", async (req: Request, res: Response) => {
    try {
        const actor = await connection.raw(`
        SELECT * FROM Actor WHERE id=${req.params.id};
        `)
        res.status(200).send({
            message:"success",
            actor:actor[0][0]
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});

app.post("/actors/update", async (req: Request, res: Response) => {
    try {
        const actor = await connection.raw(`
        UPDATE Actor 
        SET salary=${req.body.salary}
        WHERE id=${req.body.id}
        `)
        res.status(200).send({
            message:"success",
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});