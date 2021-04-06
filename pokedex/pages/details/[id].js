import { useContext } from 'react'
import { Header } from '../../src/components/Header'
import { GlobalState } from '../../src/global/GlobalState'

export default function Detail({ pokemon }) {
  console.log(pokemon)

  return (
    <div className="bg-blue-500 w-screen h-screen">
      <Header
        isPokedex={true}
      />

      <img src={pokemon.sprites.front_default} alt="pokemon" />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((resposta) => {
      if (resposta.ok) {
        return resposta.json()
      }
      throw new Error('Deu Barba!')
    })
    .then((respostaEmObjeto) => respostaEmObjeto)

  return {
    props: {
      pokemon
    }
  }
}

export async function getStaticPaths() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2')
    .then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      }
      throw new Error('Deu problema');
    })
    .then((respostaEmObjeto) => respostaEmObjeto.pokemon_entries);
  return {
    paths: pokemons.map((pokemon) => ({
      params: {
        id: pokemon.entry_number.toString(),
      },
    })),
    fallback: false,
  };
}
