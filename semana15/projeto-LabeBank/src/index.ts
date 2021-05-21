import express, { Request, Response } from 'express'
import cors from 'cors'

type Transactions = {
  value: number,
  date: string,
  description: string
}

type User = {
  name: string,
  cpf: string,
  birthDate: string,
  balance: number,
  extract: Transactions[]
}

let users: User[] = [
  {
    name: "Guilherme",
    cpf: "12114115211",
    birthDate: "13/05/2001",
    balance: 20,
    extract: []
  }
]

const app = express()
app.use(express.json())
app.use(cors())

app.get("/users", (req: Request, res: Response) => {
  const result = users
  res.status(200).send(result)
})

app.post("/users", (req: Request, res: Response) => {
  try {
    const name = req.body.name
    const cpf = req.body.cpf
    const birthDate = req.body.birthDate

    const newUser = {
      name,
      cpf,
      birthDate,
      balance: 0,
      extract: []

    }

    const birth = new Date(birthDate).getTime() / (1000 * 60 * 60 * 24 * 365)
    const today = new Date().getTime() / (1000 * 60 * 60 * 24 * 365)
    const age = today - birth
    if (age <= 18) {
      throw new Error("To create an account you must be at least 18 years old")
    }

    users.forEach((user) => {
      if (user.cpf === cpf) {
        throw new Error("cpf already registered")
      }
    })

    users.push(newUser)
    res.status(200).send(newUser)


  } catch (err) {
    res.status(400).send({ message: err.message })

  }
})

app.get("/users/balance", (req: Request, res: Response) => {

  const name = req.query.name as string;
  const cpf = req.query.cpf as string;

  try {
    if (cpf && name) {

      const filteredbalance = users.find(user => user.cpf === cpf && user.name === name)

      if (!filteredbalance) {

        throw new Error("Can´t find a user with that cpf or name")

      } else {
        res.status(200).send({ balance: filteredbalance.balance })
      }
    } else {
      throw new Error("You must specify a cpf and name")
    }
  } catch (err) {
    res.status(400).send({
      message: err.message
    })

  }

})

app.put("/users/balance", (req: Request, res: Response) => {
  const name = req.query.name as string;
  const cpf = req.query.cpf as string;
  const recivedValue = Number(req.body.recivedValue);
  try {

    if (cpf && name) {
      const reciver = users.find(user => user.cpf === cpf && user.name === name)
      if (!reciver) {
        throw new Error("Can´t find a user with that cpf or name")
      } else {
        const newValue = reciver.balance + recivedValue
        reciver.balance = newValue
        res.status(200).send(reciver)
      }
    } else {
      throw new Error("You must specify a cpf and name")
    }
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

app.post("/users/transactions", (req: Request, res: Response) => {

  const name = req.query.name as string;
  const cpf = req.query.cpf as string;

  const value = req.body.value;
  let date = req.body.date;
  const description = req.body.description;

  let data = new Date();
  let day = String(data.getDate()).padStart(2, "0");
  let month = String(data.getMonth() + 1).padStart(2, '0');
  let year = data.getFullYear();
  let today = day + '/' + month + '/' + year as string
  const currentYear = new Date().getTime() / (1000 * 60 * 60 * 24 * 365)
  const correctedDate = new Date(date).getTime() / (1000 * 60 * 60 * 24 * 365)

  try {
    const payer = users.find(user => user.cpf === cpf && user.name === name)
    if (!payer) {
      throw new Error("Can´t find a user with that cpf or name")
    }
    if (!value || !description) {
      throw new Error("You need to specify a value and a description")
    }
    if (!date){
      date = today
    }
    if(correctedDate < currentYear){
      throw new Error("You can't pay this in a passed day")
    }
    if(value > payer.balance){
      throw new Error("insufficient funds")
    }

    const newTransactions: Transactions = {
      value: value,
      date: date,
      description: description
  }

  payer.extract.push(newTransactions)
  payer.balance -= value 
  
  res.status(200).send({user: payer })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})


app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
