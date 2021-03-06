import React from "react";
import styled from "styled-components"

const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items:center;
`


export default class Etapa1 extends React.Component {

    render() {

        return (
            <ContainerPrincipal>
                <h1>Etapa 1 - Dados Gerais </h1>
                <p>1. Qual seu nome?</p>
                <input />
                <p>2. Qual sua idade?</p>
                <input />
                <p>3. Qual seu email?</p>
                <input />
                <p>4. Qual sua escolaridade?</p>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
            </ContainerPrincipal>
        )
    }

}