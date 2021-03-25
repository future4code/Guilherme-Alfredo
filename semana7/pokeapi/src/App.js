import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const ContainerPrincipal = styled.div`
display: flex;
margin: 0 auto;
flex-direction: column;
width: 500px;
margin-top: 50px;
background-color: red;
padding: 20px;
`
const DivTitulos = styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
`
const DivPokemons = styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
`
const Select = styled.select`
display: flex;
width: 160px;
align-items:center;
justify-content: center;

`
const Fotopokemons = styled.img`
display: flex;
align-items: center;
`

export default class App extends React.Component {

  state = {
    pokemons: [],
    pokeimagem: "",
    tipos: [],
    abilidades: [],
    altura: 0,
    peso: 0,
    nome:"" 
  }

componentDidMount(){
  this.getPokemons();
}

getPokemons = () => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151')
    
    .then ((res) => this.setState({pokemons: res.data.results}))
    .catch ((err) => console.log(err));
}

getPokeImagem = (nome) => {
  axios
  .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
  .then((res) => this.setState({
    pokeimagem: res.data.sprites.front_default,
    nome: res.data.name, 
    peso: res.data.weight, 
    altura: res.data.height,
    // abilidades: res.data.abilities,
    // tipos: res.data. types
  })
  )
  .catch((err) => console.log(err))
}

handleSelect = (e) => {
  const pokemonSelecionado = e.target.value
  this.getPokeImagem(pokemonSelecionado)
}
render () {
  
  return (
    <ContainerPrincipal>
      <DivTitulos>
      <h2>POKEDEX</h2>
      <h3>Escolha um pokemon e descubra suas características</h3>
      </DivTitulos>
      <DivPokemons>
      <Select onChange={this.handleSelect}>
        <option value={""}></option>
        {this.state.pokemons.map((pokemon) => {
          return <option key={pokemon.name} value={pokemon.name}>
                    {pokemon.name}
                  </option>})}
      </Select>
        <div>
      {this.state.pokeimagem && (
          <Fotopokemons alt={"imagem_pokemon"} src={this.state.pokeimagem}/>)}
          <p><b>Nome:</b> {this.state.nome}</p>
          <p><b>Tamanho:</b> {this.state.altura}</p>
          <p><b>Peso:</b> {this.state.peso}</p>
        </div>
        </DivPokemons>
    </ContainerPrincipal>

  )
  }
}



