import { Header } from '../../src/components/Header'

export default function Detail({ pokemon }) {
  console.log(pokemon)

  return (
    <div className="bg-blue-500 min-w-screen w-full min-h-screen h-full">
      <Header
        isPokedex={true}
      />

      <div className="flex justify-center flex-col text-center">
        <div className="flex justify-center">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="pokemon"

          />
        </div>
        <p>{pokemon.name}</p>
        <div>
          {pokemon.types.map((type, index) => {
            return <span key={index}>
              {type.type.name} </span>
          })}
        </div>
        <p>{pokemon.weight} g</p>
        <p>{pokemon.height}0 cm</p>
        <strong>Status</strong>
        <ul>{pokemon.stats.map((array, index) => {
          return <li key={index}>

            <div className="flex justify-center">
              <div style={{ width: 300 }} className="pt-1" >
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="">
                      {array.stat.name}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-pink-600">
                      {pokemon.base_experience}
                    </span>
                  </div>
                </div>

                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                  <div style={{ width: array.base_stat }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                </div>
              </div>
            </div>
          </li>
        })}</ul>

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
