import app from "./app"
import getUser from "./endpoints/getUser"
import getUserById from "./endpoints/getUserById"
import login from "./endpoints/login"
import signUp from "./endpoints/signUp"


app.post('/user/signup', signUp)
app.post('/user/login', login)
app.get('/user/profile', getUser)
app.get('/user/profile/:id', getUserById)
