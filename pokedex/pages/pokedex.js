import { useContext } from 'react'
import { Header } from '../src/components/Header'
import { Main } from '../src/components/Main'
import { GlobalStateContext } from '../src/global/GlobalState'

export default function Pokedex() {
  const data = useContext(GlobalStateContext)

  return (
    <div className="bg-blue-500 min-w-screen w-full min-h-screen h-full">
      <Header
        isPokedex={true}
      />

      <Main
        pokemons={data.states.pokedex}
        setPokedex={data.setters.setPokedex}
        setPokemons={data.setters.setPokemons}
        isPokedex={true}
      />
    </div>
  )
}