import styled from "styled-components"
import galaxy from '../images/galaxy.jpg'

export const DivContainer = styled.div`
    display:flex;
    height: 100vh;
    flex-direction:column;
    align-items:center;
    background-image: url(${galaxy});
    background-size: 100%;
    color: white;

`
export const DivButtons = styled.div`
    margin-top: 40px;
    width: 100vw;
    display:flex;
    justify-content: space-between;
`
export const Buttons = styled.button`
    padding: 15px;
    border-radius: 24px;
    background-color: #6B256F;
    color: white;
    border: none;
    width: 180px;
    margin-right: 12px;
    outline: 0;
    :hover{
    cursor: pointer; 
}
`
export const Inputs = styled.input`
width: 400px;
margin-top:20px;
height: 30px;
border-radius: 24px;
border: none;
outline: 0;
`