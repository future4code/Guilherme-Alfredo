import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Formulario from './Formulario'
import Detalhes from './Detalhes'

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
        renderizaPagina: "lista",
        usuarioId: ""

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
                this.setState({ usuarios: res.data });
            })

    }

    deleteUsuario = (idUsuario) => {
        if (window.confirm("Tem certeza de que deseja deletar o usuário?")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
                {
                    headers: {
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
    }

    paginaDetalhes = (id) => {
        if (this.state.renderizaPagina === "lista") {
            this.setState({ renderizaPagina: "detalhes", usuarioId: id });
        } else {
            this.setState({ renderizaPagina: "lista", usuarioId: "" });
        }
    }

    render() {
        const listaDeUsuario = this.state.usuarios.map((usuario) => (
            <BlocoNome>
                <p onClick={() => this.paginaDetalhes(usuario.id)} key={usuario.id}>{usuario.name}</p>
                <button onClick={() => this.deleteUsuario(usuario.id)}>excluir</button>
            </BlocoNome>
        ))
        return (
            <ContainerLista>

                
                {this.state.renderizaPagina === "lista" ? 
                (<div>
                    <h2>Lista de usuários cadastrados</h2>
                    <p>{listaDeUsuario}</p>
                </div>) 
                : 
                (<Detalhes
                    mudarPagina={this.paginaDetalhes}
                    
                />)}

            </ContainerLista>
        );
    }
}