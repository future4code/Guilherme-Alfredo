import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ContainerPlaylist = styled.div`
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
const TituloPlaylist = styled.p`
color: #ffffff;
`
const H2Playlist = styled.h2`
color: #ffffff;
`
const DivPlaylist = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width:150px;
`
const BotaoDeletar = styled.button`
height: 30px;
align-items:center;
border-radius: 20px;
background-color: #1db954;
color: #191414;
outline:0;
border: 1px solid #191414;
padding: 5px;
`
export default class Playlists extends React.Component {

    state = {
        playlists: [],
        musicas: [],
        detalhes: ""
    }

    componentDidMount() {
        this.getPlaylists()
    }


    getPlaylists = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
                headers: {
                    Authorization: "guilherme-mota-cruz"
                }
            })
            .then((res) => {
                this.setState({ playlists: res.data.result.list });
            })
    }

    deletePlaylist = (idPlaylist) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`, {
                headers: {
                    Authorization: "guilherme-mota-cruz"
                }
            })
            .then((res) => {
                this.getPlaylists()
                alert("O usuário foi excluído!")
            })
            .catch((err) => {
                alert("Erro ao remover playlist")
            })
    }


render() {
    const playlistsAdicionadas = this.state.playlists.map((playlist) => (
        <DivPlaylist>
            <TituloPlaylist>{playlist.name}</TituloPlaylist>
            <BotaoDeletar onClick={() => this.deletePlaylist(playlist.id)}>Remover</BotaoDeletar>
        </DivPlaylist>
    ))

    return (
        <ContainerPlaylist >
            <H2Playlist>Playlists adicionadas</H2Playlist>
            <TituloPlaylist>{playlistsAdicionadas}</TituloPlaylist>
        </ContainerPlaylist>
    );
}
}