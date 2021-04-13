import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToListTripsPage} from "../routes/coordinators";



export default function ApplicationFormPage() {

const history = useHistory()


    return (
        <div>
            <p>Application Form Page</p>
            <button onClick={() => goToListTripsPage(history)} >voltar</button>
        </div>
    );
}


