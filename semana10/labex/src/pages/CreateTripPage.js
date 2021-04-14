import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToAdminHomePage} from "../routes/coordinators";
import usePrivatePage from "../hooks/usePrivatePage"

export default function CreateTripPage() {
usePrivatePage()
const history = useHistory()


const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
};

    return (
        <div>
            <p>Create Trip Page</p>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}


