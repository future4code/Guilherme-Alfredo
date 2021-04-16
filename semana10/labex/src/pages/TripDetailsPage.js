import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";
import { goToAdminHomePage} from "../routes/coordinators";
import usePrivatePage from "../hooks/usePrivatePage"
import {DivContainer, DivButtons, Buttons} from '../components/Estilization'
import {useParams} from 'react-router-dom'



export default function TripDetailsPage() {
usePrivatePage()
const history = useHistory()
const [tripDetail, setTripDetail] = useState({})
const pathParams = useParams()

useEffect(() => {
    getTripDetail(pathParams.id)
}, []);

const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
};

const getTripDetail = (id) => {
    const token = window.localStorage.getItem("token");
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-mota-cruz/trip/${id}`,
    {
        headers:{
            auth:token
        }
    })
    .then((res) =>{
        setTripDetail(res.data.trip)
        
    })
    .catch((err) =>{
        console.log(err)
    })
}

const decideCandidate = (id, status) => {
    const token = window.localStorage.getItem("token");
    const body = {
        approve: status,
    }
    axios.put (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-mota-cruz/trips/${pathParams.id}/candidates/${id}/decide,`, body, {
        headers:{
            auth: token, 
        }
    })
    .then((res) => {
        getTripDetail()
    })
    .catch((err) =>{
        console.log(err)
        alert("Ocorreu um erro, tente novamente mais tarde")
    })
}

    return (
        <DivContainer>
            <DivButtons>
            <Buttons onClick={() => goToAdminHomePage(history)}>Voltar</Buttons>
            <Buttons onClick={logout}>Logout</Buttons>
            </DivButtons>
            <h1>Trip Details Page</h1>
            <p>{tripDetail.name}</p>
            <h2>Candidatos pendentes</h2>

            <h2>Candidatos aprovados</h2>
        </DivContainer>
    );
}


