import app from "./app"
import createUser from './endpoints/signup'
import login from "./endpoints/login"
import getUserData from "./endpoints/getUserData"

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/profile', getUserData)