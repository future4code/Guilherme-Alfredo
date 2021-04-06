import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Formulario from './Components/Formulario'
import ListaUsuarios from './Components/ListaUsuarios'
import Detalhes from './Components/Detalhes'





export default class App extends React.Component {

  state = {
    pagina: <Formulario/>,
    mudarTela: false
  }

  trocaDeTela = () => {
    const valor = this.state.mudarTela
    this.setState({
      mudarTela: !valor
    })
    if (this.state.mudarTela) {
      this.setState({
        pagina: <Formulario/>
      })
    }
    else {
      this.setState({
        pagina: <ListaUsuarios/>
      })
    }
  }

render() {
  const textoBotao = this.state.mudarTela ? 'Registar usuário' : 'Lista usuários registrados'
  return (
    <div>
      <button onClick={this.trocaDeTela}>{textoBotao}</button>
      {this.state.pagina}
    </div>
  );
}
}




