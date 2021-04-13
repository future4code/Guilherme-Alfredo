import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToAdminHomePage} from "../routes/coordinators";


export default function TripDetailsPage() {

    const history = useHistory()


    return (
        <div>
            <p>Trip Details Page</p>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
    );
}


