import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Header } from '../components/Header'


const DivContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const DivPages = styled.div`
    height: 650px;
    width:400px;
    border: 1px solid black;
    
`
const DivMatchList = styled.div`
    display:flex;
    align-items: center;
    margin: 10px 5px;
    cursor: pointer;
    :hover{
    background-color: grey;
    }
    

`
const MatchImg = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: 0 5px;
    

`
const ClearButton = styled.button`
    display:flex;
    justify-content: center;
    width: 50%;
    align-self: center;
    margin-top: 10px;

`
const DivMatches = styled.div`
    display: flex;
    flex-direction:column;


`
export default function MatchPage(props) {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = async () => {
        try {
            const res = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/matches`)
            setMatches(res.data.matches)
        }
        catch (err) {
            console.log(err)

        }
    }

    const clearMatches = async () => {
        try {
            const res = await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/clear`)
            getMatches()
        }
        catch (err) {
            console.log(err)
        }
    }

    const matchList = matches.map(profile => {
        return <DivMatchList>
            <MatchImg src={profile.photo} alt={profile.name} />
            <p>{profile.name}</p>
        </DivMatchList>
    })
    return (
        <DivContainer>
            <DivPages>
                <Header>
                    <h1>Matches</h1>
                    <button onClick={() => props.goToHome()}>Ver Perfis</button>
                </Header>
                <DivMatches>
                    {matchList}
                    <ClearButton onClick={() => clearMatches()}>Limpar swipes e matches</ClearButton>
                </DivMatches>
            </DivPages>
        </DivContainer>
    );
}