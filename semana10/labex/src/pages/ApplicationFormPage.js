import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToListTripsPage } from "../routes/coordinators";
import { DivContainer, DivButtons, Buttons, Inputs } from '../components/Estilization'
import { useForm } from '../hooks/useForm'
import {useEffect, useState} from 'react'

const DivButton = styled.div`
margin-top: 20px;
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
    age: "",
    applicationText: "",
    profession: "",
    country: "",
}

export default function ApplicationFormPage() {
    const history = useHistory()
    const [form, onChange, resetForm] = useForm(initialForm);
    const [trips, setTrips] = useState([])
    const [countries, setCountries] = useState([])

    useEffect(() => {
        getTrips()
        getCountries()
    }, []);

    const handleClick = (event) => {
        event.preventDefault();
        applyToTrip()
        resetForm();
    };

    const applyToTrip = (id) => {
        const body = {
            "name": form.name,
            "age": form.age,
            "applicationText": form.applicationText,
            "profession": form.profession,
            "country": form.country
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-mota-cruz/trips/${id}/apply`, body)
            .then(() => {
                alert("Cadastrado para a viagem, aguarde sua aprovação")
            })
            .catch((err) => {
                console.log(err)
                alert("Ocorreu um erro, tente novamente mais tarde!")
            })
    }
    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-mota-cruz/trips")
        .then((res) =>{
            setTrips(res.data.trips)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    const getCountries = () => {
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome")
        .then((res) =>{
            setCountries(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    const tripsList = trips.map((trip) =>{
        return(
        <option>{trip.name}</option>
        )
    })

    const coutryList = countries.map((country) => {
        return(
            <option>{country.nome}</option>
        )
    })
    return (
        <DivContainer>
            <DivButtons>
                <Buttons onClick={() => goToListTripsPage(history)} >voltar</Buttons>
            </DivButtons>
            <h1>Application Form Page</h1>

            <DivForm onSubmit={handleClick}>
                <Select required>
                    <option>Selecione sua viagem</option>
                    {tripsList}
                </Select>
                <Inputs
                    required
                    placeholder="nome"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    type="text"
                />
                <Inputs
                    required
                    placeholder="idade"
                    name="age"
                    value={form.age}
                    onChange={onChange}
                    type="number"
                />
                <Inputs
                    required
                    placeholder="descrição"
                    name="applicationText"
                    value={form.applicationText}
                    onChange={onChange}
                    type="text"
                />
                <Inputs
                    required
                    placeholder="profissão"
                    name="profession"
                    value={form.profession}
                    onChange={onChange}
                    type="text"
                />
                <Select>
                    <option>Selecione um país</option>
                    {coutryList}
                </Select>

                <DivButton>
                    <Buttons>Criar</Buttons>
                </DivButton>

            </DivForm>
        </DivContainer>
    );
}


