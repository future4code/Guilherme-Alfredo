import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import App from '../App'
import {Header} from '../components/Estilization'

const DivContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const DivPages = styled.div`
    height: 600px;
    width:400px;
    border: 1px solid black;
    
`
export default function MatchPage(props) {





    return (
        <DivContainer>
            <DivPages>
            <Header>
            <h1>Matches</h1>
            <button onClick={() => props.goToHome()}>Ver Perfis</button>
            </Header>
            </DivPages>
        </DivContainer>
    );
}