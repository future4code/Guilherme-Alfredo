import { app } from "./controller/app";
import { allUsers } from "./controller/user/allUsers";
import { deleteUser } from "./controller/user/deleteUser";
import { login } from "./controller/user/login";
import { signup } from "./controller/user/signup";



app.post('/signup', signup)
app.post('/login', login)
app.get('/all', allUsers)

app.delete('/:id', deleteUser)