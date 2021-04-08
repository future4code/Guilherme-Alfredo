import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import App from '../App'
import { Header, DivHeader, DivPages, DivContainer } from '../components/Estilization'
import group from '../components/Imagens/group.png'


const DivProfiles = styled.div`
display: flex;
flex-direction:column;
height: 100%;
width: 100%;
background-image: linear-gradient(to top, rgba(0,0,0,0.1), transparent);
border-radius: 5px;
`

const ProfileImg = styled.img`
    width: 90%;
    height: 350px;
    margin: 0 auto;
    margin-top: 10px;
    box-shadow: 0 0 1em gray;
    border-radius: 5px;
`
const ButtonImg = styled.img`
cursor: pointer;
height: 40px;
width: 40px;
margin-right: 10px;
:hover{
    transform: scale(1.2);
    transition: all 0.5s;
    }

`
const ProfileDescription = styled.div`
    display: flex;
    flex-direction:column;
    padding: 10px;
    height:150px;
`

const DivButtons = styled.div`
    display: flex;
    justify-content:space-evenly;
    height:100px;
    align-items:center;
    background-color: #595757;
    
`
const LikeButton = styled.button`
    color: green;
    width: 50px;
    height: 50px; 
    font-size: 30px;
    border: 1px solid green;
    cursor: pointer;
    background-color: white;
    padding: 5px;
    border-radius:50%;
    outline: 0;
    :hover{
    transform: scale(1.2);
    transition: all 0.5s;
    background-color: green;
    color: white;
    }
`
const UnlikeButton = styled.button`
    color: red;
    width: 50px;
    height: 50px;
    font-size: 30px;
    border: 1px solid red;
    cursor: pointer;
    background-color: white;
    padding: 5px;
    border-radius:50%;
    outline: 0;
    :hover{
    transform: scale(1.2);
    transition: all 0.5s;
    background-color: red;
    color: white;
    }
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
                    <DivHeader>
                        <h2>Astromatch</h2>
                        <ButtonImg src={group}onClick={() => props.goToMatches()}/>
                    </DivHeader>
                </Header>
                <DivProfiles>
                    <ProfileImg src={randonProfiles.photo} alt={randonProfiles.name} />
                    <ProfileDescription>
                        <h3>{randonProfiles.name}, {randonProfiles.age}</h3>
                        <p>{randonProfiles.bio}</p>
                    </ProfileDescription>
                </DivProfiles>

                <DivButtons>
                    <UnlikeButton onClick={() => onClickChoice(randonProfiles.id, false)}>X</UnlikeButton>
                    <LikeButton onClick={() => onClickChoice(randonProfiles.id, true)}>♥️</LikeButton>
                </DivButtons>
            </DivPages>
        </DivContainer>
    );
}