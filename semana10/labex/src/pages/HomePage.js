import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToAdminHomePage, goToListTripsPage, goToLoginPage } from "../routes/coordinators";
import {DivButtons, Buttons} from '../components/Estilization'
import galaxy from '../images/galaxy.jpg'

const ContainerHomePage = styled.div`
    display:flex;
    height: 100vh;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-image: url(${galaxy});
    background-size: 100%;
    color: white;
`


export default function HomePage() {

    const history = useHistory();


const validation = () => {
    const token = window.localStorage.getItem("token");
    if (token === null){
        goToLoginPage(history)
    } else {
        goToAdminHomePage(history)
    }
}

    return (
        <ContainerHomePage>
            <h1>LabeX</h1>
            <p>Embarque em uma viagem espacial!!</p>
            <div>
                <Buttons onClick={() => goToListTripsPage(history)}>Viagens</Buttons>

                <Buttons onClick={validation}>Area de Administrador</Buttons>
            </div>

        </ContainerHomePage>
    );
}


