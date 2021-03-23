import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Formulario from './Formulario'

const ContainerLista = styled.div`
margin: 0 auto;
text-align: center;
width: 300px;
`

const BlocoNome = styled.div`
border: 1px solid black;
display:flex;
justify-content: space-between;
padding: 5px;
margin-top: 5px;
`

export default class ListaUsuarios extends React.Component {

    state = {
        usuarios: [],

    }

    componentDidMount() {
        this.getUsuarios()
    }

    getUsuarios = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
                headers: {
                    Authorization: "guilherme-mota-cruz"
                }
            }
            )
            .then((res) => {
                this.setState({usuarios: res.data});
            })
            
    }

    deleteUsuario = (idUsuario) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
        {
            headers:{
                Authorization: "guilherme-mota-cruz"
            }
        })
        .then((res) => {
            this.getUsuarios()
            alert("O usuário foi excluído!")
            
        })
        .catch((err) => {
            alert("Erro ao remover o usuário")
        })
    }

    render() {
        const listaDeUsuario = this.state.usuarios.map((usuario) =>(
            <BlocoNome>
            <p key={usuario.id}>{usuario.name}</p>
            <button onClick={() => this.deleteUsuario(usuario.id)}>excluir</button>
            </BlocoNome>
        ))
        return (
            <ContainerLista>
                
                <h2>Lista de usuários cadastrados</h2>
                
                <p>{listaDeUsuario}</p>
                
            </ContainerLista>
        );
    }
}