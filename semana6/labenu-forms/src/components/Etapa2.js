import React from "react";
import styled from "styled-components"

const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items:center;
`

export default class Etapa2 extends React.Component{
    

    render() {


        return (
            <ContainerPrincipal>
                <h1>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR  </h1>
                <p>5. Qual curso?</p>
                <input />
                <p>6. Qual a unidade de ensino?</p>
                <input />
            </ContainerPrincipal>
        )

    }

}