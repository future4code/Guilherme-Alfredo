import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToAdminHomePage,} from "../routes/coordinators";
import usePrivatePage from "../hooks/usePrivatePage"
import { useForm } from '../hooks/useForm'
import {DivContainer, DivButtons, Buttons, Inputs} from '../components/Estilization'

const DivButton = styled.div`
margin-top: 20px;
display:flex;
align-items:center;
justify-content:center;
`
const DivForm = styled.form`
    display:flex;
    flex-direction:column;
`
const Select = styled.select`
width: 400px;
margin-top:20px;
height: 30px;
border-radius: 24px;
border: none;
outline: 0;
`
const initialForm = {
    name: "",
    planet: "",
    date:"",
    description:"",
    durationInDays:"",
}

export default function CreateTripPage() {
usePrivatePage()
const history = useHistory()
const [form, onChange, resetForm] = useForm(initialForm);

const handleClick = (event) => {
    event.preventDefault();
    createTrip()
    resetForm();
};


const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
};


const createTrip = () => {
    const token = window.localStorage.getItem("token");
    const dateArray = form.date.split("-")
    const date = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
    const body = {
    "name": form.name,
    "planet": form.planet,
    "date": date,
    "description": form.description,
    "durationInDays": form.durationInDays
    }
axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-mota-cruz/trips", body, {
    headers: {
        auth: token
    }
})
.then(() => {
    alert("Sua viagem foi criada com sucesso!")
})
.catch((err)=>{
    console.log(err)
    alert("Ocorreu um erro, tente novamente mais tarde!")
})
}

    return (
        <DivContainer>
            <DivButtons>
            <Buttons onClick={() => goToAdminHomePage(history)}>Voltar</Buttons>
            <Buttons onClick={logout}>Logout</Buttons>
            </DivButtons>
            <h1>Criar viagem</h1>

            <DivForm onSubmit={handleClick}>
                <Inputs
                    required
                    placeholder="nome da viagem"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{5,}$"}
                    type="text"
                />
                <Select
                    required
                    onChange={onChange}
                    name="planet"
                    value={form.planet}>
                        <option>Selecione um planeta</option>
                        <option>Mercúrio</option>
                        <option>Vênus</option>
                        <option>Terra</option>
                        <option>Marte</option>
                        <option>Júpiter</option>
                        <option>Saturno</option>
                        <option>Urano</option>
                        <option>Netuno</option>
                        <option>Plutão</option>
                </Select>
                <Inputs
                    required
                    placeholder="data"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    type="date"
                />
                <Inputs
                    required
                    placeholder="descrição da viagem"
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    type="text"
                    pattern={"^.{30,}$"}
                />
                <Inputs
                    required
                    placeholder="total de dias"
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    type="number"
                    min={50}
                />

                <DivButton>
                    <Buttons>Criar</Buttons>
                </DivButton>

            </DivForm>
        </DivContainer>
    );
}


