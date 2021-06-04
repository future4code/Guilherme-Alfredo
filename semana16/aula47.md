## Exercício 1 

a) Quando utilizamos o raw, ele nos dá tudo que o banco retorna, vindo muito mais informações do que as desejadas. Basicamente ele retorna mais de um array em que somente temos interesse no que possui index[0]. Por isso é importante usar a sintaxe result[0]. 

b) Faça uma função que busque um ator pelo nome;

    const searchActorByName = async (name: string): Promise<any> => {
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
        `)
        return result[0]
    }


c)  Função que recebe um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male

    const countActorsByGender = async (gender: string): Promise<any> => {
        const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
        `);

        const count = result[0];
        return count;
    };

## Exercício 2 

a) Função que receba um salário e um id e realiza a atualização do salário do ator em questão.

    const updateActorSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
    };

b) Função que receba um id e delete um ator da tabela

    const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id);
    };

c) Função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

    const avgSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });

    return result[0];
    };

## Exercício 3 

a) Endpoint que retorna um ator pelo seu id

    const getActorById = async (id: string): Promise<any> => {

        const result = await connection("Actor")
        .where("id", id);
        return result;
    };

    app.get("/actors/:id", async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const actor = await getActorById(id);

            res.status(200).send(actor)
        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        }
    });

b) Crie um endpoint agora com as seguintes especificações:

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero

        app.get("/actor", async(req:Request, res:Response)=>{
            try{
                const gender_count = await connection.raw(`
                SELECT COUNT(*) AS "contagem" FROM actor WHERE gender="${req.query.gender}";
                `)
                res.status(200).send({
                    count: gender_count[0][0]
                })
            }catch(error){
                res.status(400).send({
                    message:error.message
                })
            }
        })


## Exercício 4 

a) Crie um endpoint que:
- Deve ser um POST (`/actor`)
- Receber o salário e o id pelo body
- Simplesmente atualizar o salário do ator com id em questão

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


b) Crie um endpoint que:
- Deve ser um DELETE (`/actor/:id`)
- Receber id do ator como *path param*
- Simplesmente deletar o ator da tabela

        const deleteActor = async (id: string): Promise<void> => {
        await connection("Actor")
            .delete()
            .where("id", id);
        };

        app.delete("/actors/:id", async (req, res) => {
        try {

            const id = req.params.id
            deleteActor(id)
            res.send("Deleted!")

        } catch (error) {

            console.log(error.sqlMessage || error.message);

            res.status(500).send("Internal error")
        }
    })