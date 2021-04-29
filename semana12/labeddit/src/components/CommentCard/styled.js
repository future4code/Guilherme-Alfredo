import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'

export const DivComments = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    height: 300px;
    border: 1px solid black;
    border-radius: 6px;
    margin-top: 20px;
`

export const DivUser = styled.div`
    background-color: ${primaryColor};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 0 10px;
`

export const DivComment = styled.div`
    padding: 0 10px;
`
export const DivButtons = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: ${primaryColor};
`
export const VoteButton = styled.div`
    margin: 0 20px;
`
export const NumberComments = styled.p`
    margin-right: 10px;
`