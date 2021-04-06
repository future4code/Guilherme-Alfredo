import React from 'react';
import styled from 'styled-components';
import axios from 'axios'


const ContainerRegistro = styled.div`
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

const RegistroPlaylist = styled.div`
display: flex;
flex-direction:column;
align-items: center;
gap: 20px;
`

const LabelPlaylist = styled.label`
color: #ffffff;
`
const InputRegistro = styled.input`
border-radius: 20px;
outline:0;
height: 20px;
padding: 5px;
border: 1px solid #191414;
width:200px;
`
const BotaoRegistrar = styled.button`
height: 40px;
align-items:center;
border-radius: 20px;
background-color: #1db954;
color: #191414;
outline:0;
border: 1px solid #191414;
padding: 5px;
`

export default class Registro extends React.Component {

state = {
    inputNomePlaylist: ""
}

handlePlaylist = (e) => {
    this.setState({inputNomePlaylist: e.target.value})
}

addPlaylist = () => {
    const body = {
        name: this.state.inputNomePlaylist,
    };
    axios 
    .post ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
        headers: {
            Authorization: "guilherme-mota-cruz"
        }
    })
    .then ((res) => {
        alert("Playlist registrada com sucesso!")
        this.setState({inputNomePlaylist: ""})
    })
    .catch ((err) => {
        alert("Erro ao adicionar playlist. Tente novamente mais tarde!")
    })
}

render () {

return (
    <ContainerRegistro >
        <RegistroPlaylist>
            <LabelPlaylist><b>Criar Playlist:</b></LabelPlaylist>
            <InputRegistro placeholder="Digite o nome da playlist aqui..."type="text" value={this.state.inputNomePlaylist} onChange={this.handlePlaylist}></InputRegistro>
            <BotaoRegistrar onClick={this.addPlaylist}><b>Registrar playlist</b></BotaoRegistrar>
        </RegistroPlaylist>
    </ContainerRegistro>
    );
}
}