import Head from 'next/head'
import { Header } from '../src/components/Header'
import { Main } from '../src/components/Main'

export default function Home({ pokemons }) {

  return (
    <div className="bg-blue-500">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/icons/pokemon-go.png" />
      </Head>

      <Header
        isPokedex={false}
      />

      <Main
        pokemons={pokemons}
      />
    </div>
  )
}

export async function getStaticProps() {

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=24&offset=0`)
    const { results } = await response.json()
    const pokemons = results.map((result, index) => {
      const id = ('00' + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

      return { ...result, image }
    })

    return { props: { pokemons } }
  }

  catch (error) {
    console.error(error);
  }
}
