import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHomePage, goToApplicationFormPage } from "../routes/coordinators";



export default function ListTripsPage() {
const history = useHistory();



    return (
        <div>
            <p>List Trips Page</p>

            <button onClick={() => goToHomePage(history)}>Voltar</button>

            <button onClick={() => goToApplicationFormPage(history)}>Cadastre-se para uma viagem</button>
        </div>
    );
}


