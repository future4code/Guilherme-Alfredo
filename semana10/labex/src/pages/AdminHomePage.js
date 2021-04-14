import {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHomePage} from "../routes/coordinators";
import usePrivatePage from "../hooks/usePrivatePage"
import space from '../images/space.jpg'


const DivContainer = styled.div`
    display:flex;
    height: 100vh;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-image: url(${space});
    background-size: 100%;
    color: white;    
`
const DivButtons = styled.div`
    margin-top: 40px;
`
const Buttons = styled.button`
    padding: 20px;
    border-radius: 24px;
    background-color: #6B256F;
    color: white;
    border: none;
    width: 200px;
    margin-right: 12px;
    outline: 0;
    :hover{
    cursor: pointer; 
}
`
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
const DeleteButton = styled.button`
margin-right: 10px;

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


const tripsList = trips.map((trip) =>{
    return(
    <DivListItem>
        <p>{trip.name}</p>
        <DeleteButton>X</DeleteButton>
    </DivListItem>
    )
})

    return (
        <DivContainer>
            <p>Admin Home Page</p>
            <DivButtons>
            <Buttons onClick={() => goToHomePage(history)}>Voltar</Buttons>
            <Buttons>Criar Viagem</Buttons>
            <Buttons onClick={logout}>Logout</Buttons>
            </DivButtons>
            <DivList>
            {tripsList}
            </DivList>
        </DivContainer>
    );
}


