import { useState } from 'react'
import styled from 'styled-components'
import HomePage from './pages/HomePage'
import MatchPage from './pages/MatchPage'

const DivContainer = styled.div`
	background: #E8EBF0;
	width: 100vw;
	margin: 0;
	padding: 0;
	min-height: 100vh;
`


export default function App (){

  const [renderPage, setRenderPage] = useState('HomePage')

  const goToHome = () => {
    setRenderPage('HomePage')
  }

  const goToMatches = () => {
    setRenderPage('MatchPage')
  } 


  const changePage = () => {
    switch (renderPage){
      case 'HomePage':
        return <HomePage goToMatches={goToMatches}/>
      case 'MatchPage':
        return <MatchPage goToHome={goToHome}/>
      default:
        return <div/>
    }
    
  }

  return (
    <DivContainer>
      {changePage()}
    </DivContainer>
  );
}
