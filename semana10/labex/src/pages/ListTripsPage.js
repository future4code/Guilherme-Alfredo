import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHomePage, goToApplicationFormPage } from "../routes/coordinators";
import {DivContainer, DivButtons, Buttons} from '../components/Estilization';
import {useEffect, useState} from 'react'


const DivListItem = styled.div`
height: 300px;
width: 400px;
display:flex;
flex-direction:column;
padding: 5px;
:hover{
    background-color:grey;
}
`
const DivList = styled.div`
overflow:auto;
margin-top: 5px;
margin-bottom: 5px;
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
        <p><b>Viagem: </b> {trip.name}</p>
        <p><b>Descrição: </b>{trip.description}</p>
        <p><b>Planeta: </b>{trip.planet}</p>
        <p><b>Duração em dias: </b>{trip.durationInDays}</p>
        <p><b>Data: </b>{trip.date}</p>
    </DivListItem>
    )
})

    return (
        <DivContainer>
            <DivButtons>
            <Buttons onClick={() => goToHomePage(history)}>Voltar</Buttons>
            <Buttons onClick={() => goToApplicationFormPage(history)}>Quero viajar</Buttons>
            </DivButtons>
            <h1>Viagens Programadas</h1>
            <DivList>
            {tripsList}
            </DivList>
        </DivContainer>
    );
}


