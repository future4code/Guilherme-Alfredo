import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToAdminHomePage} from "../routes/coordinators";


export default function CreateTripPage() {

    const history = useHistory()



    return (
        <div>
            <p>Create Trip Page</p>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
    );
}


