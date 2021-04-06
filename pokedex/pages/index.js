import Head from 'next/head'
import { useContext } from 'react'
import { Header } from '../src/components/Header'
import { Main } from '../src/components/Main'
import { GlobalStateContext } from '../src/global/GlobalState'

export default function Home() {
  const data = useContext(GlobalStateContext)

  return (
    <div className="bg-blue-500 min-w-screen w-full min-h-screen h-full">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/icons/pokemon-go.png" />
      </Head>

      <Header
        isPokedex={false}
      />

      <Main
        pokemons={data.states.pokemons}
        setPokedex={data.setters.setPokedex}
        setPokemons={data.setters.setPokemons}
        pokedex={data.states.pokedex}
        isPokedex={false}
      />
    </div>
  )
}
