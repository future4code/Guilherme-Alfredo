import React from "react";
import styled from "styled-components"

const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items:center;
`

export default class Final extends React.Component{
    render() {

        return (
            <ContainerPrincipal>
                <h1>O FORMULÁRIO ACABOU  </h1>
                <p>Muito obrigado por participar! Entraremos em contato!</p>   
            </ContainerPrincipal>
        )

    }

}