import styled from 'styled-components'
import { neutralColor, primaryColor, secondaryColor } from '../../constants/colors'


export const DivPosts = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    height: 500px;
    border: 1px solid black;
    border-radius: 6px;
    margin-top: 20px;
`
export const DivTitle = styled.div`
    background-color: ${primaryColor};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 0 10px;
`
export const DivText = styled.div`
    padding: 0 10px;
`
export const DivButtons = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: ${primaryColor};
`

export const Button = styled.button`
    background-color: ${secondaryColor};
    font-size: 1em;
    padding: 4px;
    border: none;
    transition: all .4s;
    cursor: pointer;
    margin: 0 20px;
    border-radius: 6px;
    :active { 
        transform: scale(0.92);  
    }
`
export const VoteButton = styled.div`
    margin: 0 20px;
`