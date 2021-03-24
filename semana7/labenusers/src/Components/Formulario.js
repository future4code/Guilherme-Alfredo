import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ListaUsuarios from './ListaUsuarios'


const ContainerFormulario = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
align-items: center;
width: 500px;
justify-content: center;
margin: auto;
margin-top: 50px;
padding: 50px;
`

const Inputs = styled.input`
width: 300px;
margin-bottom: 20px;
`
const BotaoRegistar = styled.button`

`
export default class Formulario extends React.Component {

    state = {
        inputNome: "",
        inputEmail: ""
    }
    
    handleNome = (event) => {
        this.setState ({inputNome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState ({inputEmail: event.target.value})
    }

    registrarUsuario = () => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        };
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
            body,
            {
                headers: {
                    Authorization: "guilherme-mota-cruz"
                }
            }
            )
            .then((res) => {
                alert("Usuário registrado com sucesso!")
                this.setState({ inputNome: ""})
                this.setState({inputEmail: "", })
            }) 
            .catch((err) => {
                alert("Erro ao registrar usuário")
                this.setState({ inputNome: ""})
                this.setState({inputEmail: "", })
            })
    }
    render() {
        return (
            <div>
            <ContainerFormulario>
                <label>Nome:</label>
                <Inputs type="text" value={this.state.inputNome} onChange={this.handleNome} 
                />
                <label>E:mail:</label>
                <Inputs type="text" value={this.state.inputEmail} onChange={this.handleEmail} 
                />
                <BotaoRegistar onClick={this.registrarUsuario}> Registrar </BotaoRegistar>
            </ContainerFormulario>
            </div>
        )

    }
}
