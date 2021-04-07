import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import App from '../App'
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
const DivProfiles = styled.div`
display: flex;
flex-direction:column;
height: 100%;
width: 100%;
`

const ProfileImg = styled.img`
    width: 90%;
    height: 60%;
    margin: 0 auto;
    margin-top: 10px;
`

const ProfileDescription = styled.div`
    display: flex;
    flex-direction:column;
    padding: 10px;
`

const DivButtons = styled.div`
    display: flex;
    justify-content:space-evenly;

    

`


export default function HomePage(props) {

    const [randonProfiles, setRandonProfiles] = useState({})

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = async () => {
        try {
            const res = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/person`)
            setRandonProfiles(res.data.profile)
        }
        catch (err) {
            console.log(err)

        }
    }

    const choosePerson = async (id, choice) => {
        const body = {
            id: id,
            choice: choice
        }
        try {
            const res = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/choose-person`, body)
        }
        catch (err) {
            console.log(err)
        }
    }

    const onClickChoice = (id, choice) => {
        choosePerson(id, choice)
        getProfileToChoose()
    }

    return (
        <DivContainer>
            <DivPages>
                <Header>
                    <h1>Home</h1>
                    <button onClick={() => props.goToMatches()}>Ver Matches</button>
                </Header>
                <DivProfiles>
                    <ProfileImg src={randonProfiles.photo} alt={randonProfiles.name} />
                    <ProfileDescription>
                        <h3>{randonProfiles.name}, {randonProfiles.age}</h3>
                        <p>{randonProfiles.bio}</p>
                    </ProfileDescription>

                    <DivButtons>
                        <button onClick={() => onClickChoice(randonProfiles.id, false)}>X</button>
                        <button onClick={() => onClickChoice(randonProfiles.id, true)}>S2</button>
                    </DivButtons>
                </DivProfiles>


            </DivPages>
        </DivContainer>
    );
}