## Exercício 1
a) Eu concordo que é melhor utilizar strings para ids, isso porque aumenta o número de combinações possíveis para criar ids e também porque dificultaria uma possível fraude, uma vez que ninguem conseguiria utilizar um operador lógico para calcular e descobrir ids. 

b) Função para gerar um id: 

    import {v4} from "uuid";

    export function generateId(): string{

    return v4();
    
    }

## Exercício 2 

    const userTableName = "User";

    const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
    },
    });

    const createUser = async (id: string, email: string, password: string) => {
    await connection
        .insert({
        id,
        email,
        password,
        })
        .into(userTableName);
    };

a) O código acima está pegando as informações do banco de dados presentes no arquivo .env (presente também no .gitignore) para manter seu sigilo e não subi-las para o github. E abaixo temos uma função de criar usuário no qual será inserido id, email e senha. 

b) Criar tabela de usuários:

    CREATE TABLE User (
        id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

c) Função para ser responsável pela criação de usuários no banco:

        export default async function createUser(req: Request, res: Response): Promise<void> {

    try { 

        const id = generateId()
        const {email, password} = req.body

        const result = await connection.raw(`
        INSERT INTO User (id, email, password)
        VALUES (
            "${id}",
            "${email}",
            "${password}"
        );
    `)
        res.send("User created!")

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
    }

## Exercício 3 

    import * as jwt from "jsonwebtoken";

    const expiresIn = "1min"

    const generateToken = (id: string): string => {
    const token = jwt.sign(
        {
        id
        },
        process.env.JWT_KEY as string,
        {
        expiresIn
        }
    );
    return token;
    }

a) O que a linha as string faz? Por que precisamos usar ela ali?

A linha as string transforma o "process.env.JWT_KEY" em string que no arquivo de onde ela vem. Precisamos colocar este "as string" porque esta Key só é aceita como string. 

b) Função que gere o token. Além disso, crie um type  para representar o input dessa função:

    import * as jwt from "jsonwebtoken";

    export type authenticationData = {
        id: string
    };

    const expiresIn = "1m"

    export function generateToken(payload: authenticationData): string {
        const token =  jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn
            })
            return token
    }

## Exercício 4 

a)
    
- *Verbo/Método*: POST
- *Path*: `/user/signup`
- *Input:* O body da requisição deve ser

    
        {
            "email": "email do usuário",
            "password": "senha do usuário"
        }
    

- *Output*: O body da resposta deve ser


        {
            "token": "token gerado pelo jwt"
        }

resposta: 

    export default async function createUser(req: Request, res: Response): Promise<void> {

    try { 

        const id = generateId()
        const {email, password} = req.body

        const result = await connection.raw(`
        INSERT INTO User (id, email, password)
        VALUES (
            "${id}",
            "${email}",
            "${password}"
        );
    `)


    const token: string = generateToken(
        {
            id: id
    });  

    res.status(201).send({token});

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
    }

b) Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`

c) Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais

    export default async function createUser(req: Request, res: Response): Promise<void> {

    try { 

        const id = generateId()
        const {email, password} = req.body

        const result = await connection.raw(`
        INSERT INTO User (id, email, password)
        VALUES (
            "${id}",
            "${email}",
            "${password}"
        );
    `)
    
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password (min 6 letters or numbers)");
    }

    const token: string = generateToken(
        {
            id: id
    });  

    res.status(201).send({token});

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
    }

## Exercício 5 

a) Função que retorne as informações de um usuário a partir do email.

    app.get("/userByEmail", async (req: Request, res: Response) => {
        try {
            const email = req.body.email
            const result = await connection.raw(`
            SELECT * FROM User
            WHERE email = "${email}"`);

            res.status(200).send(result[0][0])
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    })

## Exercício 6 

Agora, vamos implementar o endpoint de login, com as seguintes especificações:

- *Verbo/Método*: POST
- *Path*: `/user/login`
- *Input:* O body da requisição deve ser

    ```json
    {
    	"email": "email do usuário",
    	"password": "senha do usuário"
    }
    ```

- *Output*: O body da resposta deve ser

    ```json
    {
    	"token": "token gerado pelo jwt"
    }

Resposta: 

    app.post('/user/login', async (req: Request, res: Response) => {

        try {
            const {email, password} = req.body;
            
            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }

            const queryResult = await connection.raw(`
            SELECT * FROM User
            WHERE email = "${email}";
            `)
            const user = queryResult[0][0]

            if (user.password !== password) {
                throw new Error("Invalid password");
            }

            const token: string = generateToken(
                {
                id: user.id
            }); 

            res.status(201).send({token});

        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    })

## Exercício 7 

    const expiresIn = "1min";

    const getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
        id: payload.id,
    };
    return result;
    };

a) O que a linha as any faz? Por que precisamos usá-la ali?

Como ele retorna todos os dados do usuário em um objeto, precisamos do "as any" pois pode retornar qualquer coisa. 

b) Crie uma função que realize a mesma funcionalidade da função acima: 

        export default async function getData( req: Request,res: Response): Promise<void> {
        try {

        const token = req.headers.authorization as string;
        const verifiedToken = getTokenData(token);

            const result = await connection.raw(`
            SELECT * FROM User
            WHERE id = "${verifiedToken.id}"`);

            res.status(200).send(result[0])

        } catch (error) {

            if (res.statusCode === 200) {
                res.status(500).end()
            }

            res.end()
        }
    };

## Exercício 8 

    export default async function getData(
        req: Request,
        res: Response
    ): Promise<void> {
        try {

        const token = req.headers.authorization as string;
        const verifiedToken = getTokenData(token);

            const result = await connection.raw(`
            SELECT * FROM User
            WHERE id = "${verifiedToken.id}"`);

            res.status(200).send({
                id: result[0][0].id,
                email: result[0][0].email
            })

        } catch (error) {

            if (res.statusCode === 200) {
                res.status(500).send()
            }

            res.send()
        }
    }