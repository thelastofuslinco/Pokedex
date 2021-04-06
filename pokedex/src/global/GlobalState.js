import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const GlobalStateContext = React.createContext();

export function GlobalState({ children }) {
  const [pokemonsList, setPokemonsList] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {

    console.log(pokedex);
  }, [pokedex])

  //Get pokemons array
  const getPokemons = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=0`)
      const pokemonsList = response.data.results.map((result, index) => {
        const id = ('00' + (index + 1)).slice(-3);
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
        return { ...result, image, index }
      })

      setPokemons(pokemonsList)
    }
    catch { (erro => console.log(erro)) }
  }

  useEffect(() => {
    getPokemons()
  }, [])
  //Get pokemons array

  const orderPokemons = () => {
    let orderedPokemons = []
    orderedPokemons = pokemons.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
      if (a.order < b.order) {
        return -1;
      }
      return 0;
    })
    setPokemons(orderedPokemons);
  }

  const states = { pokemons, pokedex }
  const setters = { setPokedex, setPokemons }
  const requests = { orderPokemons }

  const data = { states, setters, requests }

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
}