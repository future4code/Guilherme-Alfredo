import express, { Request, Response } from 'express'
import cors from 'cors'

enum USER_TYPE {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: USER_TYPE,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: USER_TYPE.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: USER_TYPE.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: USER_TYPE.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: USER_TYPE.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: USER_TYPE.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: USER_TYPE.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

//exercício 1 
//a) para este endpoint tive que utilizar o método get, pois o objetivo era retornar a lista dos usuários existentes. 
//b) indicaria a entidade "/users", tendo em vista que fica bem intuitivo. 

app.get("/users", (req: Request, res: Response)=>{
    const result = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      type: user.type,
      age: user.age
    }))

    res.status(200).send(result)
})


//exercício 2 
//a) eu utilizei o query, porque assim podemos filtrar o type desejado apenas digitando na url " type=admin" ou "type=normal" na própria url. 
//b) sim, para isso eu criei um enum com apenas dois tipos de types, dessa forma, a requisição só irá retornar os usuários quando os types pré estabelecidos forem digitados. 

app.get("/users/type", (req: Request, res: Response )=>{
  
  const type = req.query.type as string | undefined;
  try {
    if (type) {
      const filteredUser = users.filter(user => user.type.toLowerCase() === type.toLowerCase())
      if(type.toLowerCase() === USER_TYPE.ADMIN.toLowerCase() || type.toLowerCase() === USER_TYPE.NORMAL.toLowerCase()){
        res.status(200).send(filteredUser)
      } else {
        throw new Error ("This type does not exist")
      }
    } else {
      throw new Error ("You must specify a type")
    } 
    } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
  
})

//Exercício 3 
//a) para esse tipo de requisição utilizamos o query.
//b) 
app.get("/users/search", (req: Request, res:Response)=>{

  const name = req.query.name as string;
  try {
    if (name){
      const filteredUser = users.find(user => user.name.toLowerCase() === name.toLowerCase())
      if(!filteredUser){
        throw new Error ("Can´t find a user with that name")
      } else {
        res.status(200).send(filteredUser)
      }
    } else {
      throw new Error ("You must specify a name")
    }
  } catch (err) {
    res.status(400).send({
      message:err.message
    })
    
  }
  
})

//Exercício 4 
//a) Não mudou nada, com o metodo put ele cria da mesma forma, tendo em vista que o usuário não existe ainda. 
//b) O metodo put funciona, mas não é o mais indicado. Ele normalmente é utilizado para fazer alguma alteração de um objeto já existente. 
app.put("/users", (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const name = req.body.name
    const email = req.body.email
    const type = req.body.type
    const age = req.body.age

    const newUser = {
      id,
      name,
      email,
      type,
      age
    }

    users.push(newUser)

    res.status(200).send({
      message: "New user has been created",
      user: newUser
    })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
