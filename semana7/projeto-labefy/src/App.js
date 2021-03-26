
import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import Registro from './Components/Registro';
import Playlists from './Components/Playlists';


const ComponentPrincipal = styled.div`
display: flex;
flex-direction: column;
background-color: #191414;
height: 100vh;
`
const TituloLabefy = styled.h2`
color: #191414;
`
const Header = styled.header`
display: flex;
justify-content:space-between;
padding: 8px;
background-color: #1db954;
align-items: center;
`
const Footer = styled.footer`
display:flex;
background-color: #454849;
justify-content:center;

`

const BotaoMudarPagina = styled.button`
height: 40px;
align-items:center;
border-radius: 20px;
background-color: #191414;
color: #ffffff;
outline:0;
border: 1px solid #191414;
`

export default class App extends React.Component {

state = {
  pagina: <Registro/>,
  mudarTela: false
}

trocaDeTela = () => {
  const valor = this.state.mudarTela
  this.setState({
    mudarTela: !valor
  })
  if (this.state.mudarTela) {
    this.setState({
      pagina: <Registro/>
    })
  }
  else {
    this.setState({
      pagina: <Playlists/>
    })
  }
}

render() {
const textoBotao = this.state.mudarTela ? 'Vizualizar playlists' : 'Voltar para página inicial'
return (
  <ComponentPrincipal>
    <Header>
    <TituloLabefy>Labefy</TituloLabefy>
    <BotaoMudarPagina onClick={this.trocaDeTela}>{textoBotao}</BotaoMudarPagina>
    </Header>
    {this.state.pagina}
    <Footer>
      <p><b>Seu app de música preferido!</b></p>
    </Footer>
  </ComponentPrincipal>
);
}
}