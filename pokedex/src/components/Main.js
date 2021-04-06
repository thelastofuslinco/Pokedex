import { PokemonCard } from "./PokemonCard"

export function Main(props) {

  const addToPokedex = (pokemon) => {
    props.setPokedex([...props.pokedex, pokemon])
    props.setPokemons(props.pokemons.filter(array => {
      return array.name !== pokemon.name
    }))
  }

  const removeFromPokedex = (pokemon) => {
    props.setPokedex(props.pokemons.filter(array => {
      return array.name !== pokemon.name
    }))

  }

  return (
    <ul className="flex flex-wrap justify-center">
      {props.pokemons.map((pokemon, index) => (
        <PokemonCard key={index}
          pokemon={pokemon}
          index={index}
          leftButton={props.isPokedex ? () => { removeFromPokedex(pokemon) } : () => { addToPokedex(pokemon) }}
        />
      ))}
    </ul>
  );
}