import React from 'react'
import { DivForm, MainContainer, Inputs, Button, DivSendButton, SignUp } from './styled'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router'
import { goToSignUpPage } from '../../routes/coordinator'

const initialForm = {
    email: "",
    password: "",
}



const LoginPage = () => {
    const [form, onChange, clear] = useForm(initialForm);
    const history = useHistory()

    const handleClick = (event) => {
        event.preventDefault();
        console.log(form)
        clear();
    };

    
    return (
        <MainContainer>
            <h1>LoginPage</h1>
            <DivForm onSubmit={handleClick}>
                <Inputs
                    required
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
                    type="text"

                />
                <Inputs
                    required
                    placeholder="senha"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                />
                <DivSendButton>
                    <Button

                    >
                    Fazer login
                    </Button>
                </DivSendButton>
            </DivForm>
            <SignUp 
                onClick={() => goToSignUpPage(history)}>
                Cadastre-se aqui
            </SignUp>

        </MainContainer>
    )
}

export default LoginPage