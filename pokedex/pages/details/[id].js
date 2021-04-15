import { Header } from '../../src/components/Header'

export default function Detail({ pokemon }) {
  console.log(pokemon)

  return (
    <div className="min-w-screen w-full min-h-screen h-full">
      <Header
        isPokedex={true}
      />

      <div className=" h-screen capitalize">
        <div className="bg-blue-500 h-full flex items-center justify-center">
          <div className="bg-green-700 px-4 py-1 rounded border-8 border-yellow-500 bg-red-600">
            <div className="flex justify-between">
              <strong>{pokemon.name}</strong>
              <strong className="box">{pokemon.stats[0].base_stat} {pokemon.stats[0].stat.name.toUpperCase()}</strong>
            </div>

            <div className="border-8 border-yellow-600 bg-red-600 rounded">
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt="pokemon"
                className="h-52"
              />
            </div>

            <div className="flex justify-around shadow">
              {pokemon.types.map((type, index) => {
                return <span key={index} className="bg-red-300 rounded px-2 py-1 mt-2">
                  {type.type.name} </span>
              })}
            </div>

            <p>weight: {(pokemon.weight) / 10} kg</p>
            <p>size: {pokemon.height}0 cm</p>
            <hr />
            {pokemon.abilities.map((array, index) => {
              return <p key={index}>
                {array.ability.name}
              </p>
            })}
            <hr />
            <strong>Stats</strong>
            <ul>{pokemon.stats.map((array, index) => {
              if (index !== 0) {
                return <li key={index}>
                  {array.stat.name} {array.base_stat}
                </li>
              }
            })}</ul>

          </div>

        </div>
      </div>

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
