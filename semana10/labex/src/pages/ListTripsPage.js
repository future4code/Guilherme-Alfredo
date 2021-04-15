import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHomePage, goToApplicationFormPage } from "../routes/coordinators";
import {DivContainer, DivButtons, Buttons} from '../components/Estilization';
import {useEffect, useState} from 'react'


const DivListItem = styled.div`
height: 50px;
width: 400px;
display:flex;
padding: 5px;
align-items: center;
justify-content: space-between;
margin-top: 10px;
:hover{
    background-color:grey;
}
`
const DivList = styled.div`
overflow:auto;
margin-top: 20px;
margin-bottom: 20px;
`
export default function ListTripsPage() {
const history = useHistory();
const [trips, setTrips] = useState([])

useEffect(() => {
    getTrips()
}, []);

const getTrips = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-mota-cruz/trips")
    .then((res) =>{
        setTrips(res.data.trips)
    })
    .catch((err) =>{
        console.log(err)
    })
}

const tripsList = trips.map((trip) =>{
    return(
    <DivListItem>
        <p>{trip.name}</p>
    </DivListItem>
    )
})

    return (
        <DivContainer>
            <DivButtons>
            <Buttons onClick={() => goToHomePage(history)}>Voltar</Buttons>
            <Buttons onClick={() => goToApplicationFormPage(history)}>Quero viajar</Buttons>
            </DivButtons>
            <h1>List Trips Page</h1>
            <DivList>
            {tripsList}
            </DivList>
        </DivContainer>
    );
}


