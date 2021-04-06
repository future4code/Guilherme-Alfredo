import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Formulario from './Formulario'
import ListaUsuarios from './ListaUsuarios';


export default class Detalhes extends React.Component {


    render() {

        return (
            <div>
                <button onClick={this.props.mudarPagina}>Voltar para lista de usuários</button>
                
            </div>
        );
    }
}