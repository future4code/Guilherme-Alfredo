import app from "./app"
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getUserData from "./endpoints/getUserData"
import deleteUsers from "./endpoints/deleteUser"
import getUser from "./endpoints/getUser"
import { createFullAddress } from "./services/getAddressInfo"

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/profile', getUserData)
app.delete('/user/delete', deleteUsers)
app.get('/user', getUser)

// getAddressInfo("30320460").then(console.log)