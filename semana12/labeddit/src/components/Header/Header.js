import React from 'react'
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator'
import { Button, Main, Title } from './styled'
import {useHistory} from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    return (
        <Main>
            <Title onClick={() => goToFeedPage(history)}>LabEddit</Title>
            <Button onClick={() => goToLoginPage(history)}>Login</Button>
        </Main>
    )
}

export default Header
