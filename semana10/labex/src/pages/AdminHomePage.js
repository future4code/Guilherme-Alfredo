import {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHomePage, goToCreateTripPage, goToTripDetailsPage} from "../routes/coordinators";
import usePrivatePage from "../hooks/usePrivatePage"
import {DivContainer, DivButtons, Buttons} from '../components/Estilization'

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
const ListButtons = styled.button`
margin-right: 10px;
margin-left: 5px;
padding: 10px;
    border-radius: 24px;
    background-color: #6B256F;
    color: white;
    border: none;
    width: 80px;
    margin-right: 12px;
    outline: 0;
    :hover{
    cursor: pointer; 
    }
`
export default function AdminHomePage() {
usePrivatePage()
const history = useHistory()
const [trips, setTrips] = useState([])



useEffect(() => {
    getTrips()
}, []);

const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
};

const getTrips = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-mota-cruz/trips")
    .then((res) =>{
        setTrips(res.data.trips)
    })
    .catch((err) =>{
        console.log(err)
    })
}

const deleteTrip = (trip) => {
    const token = window.localStorage.getItem("token");
    if (window.confirm("Tem certeza que deseja deletar esta viagem?")) {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-mota-cruz/trips/${trip.id}`, {
                headers: {
                    auth: token,
                },
            })
            .then(() => {
                getTrips();
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

const tripsList = trips.map((trip) =>{
    return(
    <DivListItem>
        <p>{trip.name}</p>
        <div>
        <ListButtons onClick={() => goToTripDetailsPage(history, trip.id)}>detalhes</ListButtons>
        <ListButtons onClick={() => deleteTrip(trip)}>remover</ListButtons>
        </div>
    </DivListItem>
    )
})

    return (
        <DivContainer>
            <DivButtons>
            <Buttons onClick={() => goToHomePage(history)}>Voltar</Buttons>
            <Buttons onClick={logout}>Logout</Buttons>
            </DivButtons>
            <h1>Página de Administrador</h1>
            <Buttons onClick={() => goToCreateTripPage(history)}>Criar Viagem</Buttons>
            <DivList>
            {tripsList}
            </DivList>
        </DivContainer>
    );
}


