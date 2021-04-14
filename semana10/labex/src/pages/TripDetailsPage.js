import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToAdminHomePage} from "../routes/coordinators";
import usePrivatePage from "../hooks/usePrivatePage"

export default function TripDetailsPage() {
usePrivatePage()
const history = useHistory()
const [tripDetail, setTripDetail] = useState({})


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

    return (
        <div>
            <p>Trip Details Page</p>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}


