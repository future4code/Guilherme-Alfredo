import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHomePage} from "../routes/coordinators";


export default function LoginPage() {

    const history = useHistory()



    return (
        <div>
            <p>Login Page</p>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
        </div>
    );
}


