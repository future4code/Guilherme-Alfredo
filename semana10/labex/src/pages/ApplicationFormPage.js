import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToListTripsPage } from "../routes/coordinators";
import { DivContainer, DivButtons, Buttons, Inputs } from '../components/Estilization'
import { useForm } from '../hooks/useForm'
import { useEffect, useState } from 'react'

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
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    tripId:""
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


    const applyToTrip = () => {
        const body = {
            name: form.name,
            age: Number (form.age),
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }
        console.clear()
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-mota-cruz/trips/${form.tripId}/apply`, body)
            .then((res) => {
                alert("Cadastrado para a viagem, aguarde sua aprovação")
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                alert("Ocorreu um erro, tente novamente mais tarde!")
                
            })
    }
    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-mota-cruz/trips")
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const getCountries = () => {
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome")
            .then((res) => {
                setCountries(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const tripsList = trips.map((trip) => {
        return (
            <option value={trip.id}>{trip.name}</option>
        )
    })

    const coutryList = countries.map((country) => {
        return (
            <option value={country.nome}>{country.nome}</option>
        )
    })
    return (
        <DivContainer>
            <DivButtons>
                <Buttons onClick={() => goToListTripsPage(history)} >voltar</Buttons>
            </DivButtons>
            <h1>Cadastro para viagem</h1>

            <DivForm onSubmit={handleClick}>
                <Select
                    required
                    name="tripId"
                    value={form.tripId}
                    onChange={onChange}
                >
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
                    pattern={"^.{2,}$"}
                />
                <Inputs
                    required
                    placeholder="idade"
                    name="age"
                    value={form.age}
                    onChange={onChange}
                    type="number"
                    min ={18}
                />
                <Inputs
                    required
                    placeholder="descrição"
                    name="applicationText"
                    value={form.applicationText}
                    onChange={onChange}
                    type="text"
                    pattern={"^.{30,}$"}
                />
                <Inputs
                    required
                    placeholder="profissão"
                    name="profession"
                    value={form.profession}
                    onChange={onChange}
                    type="text"
                />
                <Select
                    required
                    name="country"
                    value={form.country}
                    onChange={onChange}
                >
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


