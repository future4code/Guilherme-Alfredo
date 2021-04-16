import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./components";
import styled from "styled-components"

const ContainerPrincipal = styled.div`
margin: 0 auto;
width: 500px;
`

const App = () => {

    const [pokeList, setPokeList ] = useState([])
    const [pokeName, setPokeName ] = useState("")
  
  useEffect (() => {
  const getPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => setPokeList(res.data.results))
      .catch((err) => console.log(err));
      };

      getPokemon ();
  }, [setPokeList]);


  const changePokeName = event => {
    setPokeName(event.target.value);
  };

  
    return (
      <ContainerPrincipal>
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </ContainerPrincipal>
    );
  
}

export default App;

