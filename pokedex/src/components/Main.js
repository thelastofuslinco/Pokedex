import { PokemonCard } from "./PokemonCard"

export function Main(props) {

  const addToPokedex = (pokemon) => {
    props.setPokedex([...props.pokedex, pokemon])
  }

  const removeFromPokedex = (pokemon) => {
    props.setPokedex(props.pokemons.filter(array => {
      return array.name !== pokemon.name
    }))

  }

  return (
    <ul className="flex flex-wrap justify-center">
      {props.isPokedex ? props.pokemons.map((pokemon, index) => (
        <PokemonCard key={index}
          pokemon={pokemon}
          leftButton={props.isPokedex ? () => { removeFromPokedex(pokemon) } : () => { addToPokedex(pokemon) }}
          isPokedex={props.isPokedex}
        />
      ))
        :
        props.pokemons.filter(
          function (e) {
            return this.indexOf(e) < 0;
          },
          props.pokedex
        ).map((pokemon, index) => (
          <PokemonCard key={index}
            pokemon={pokemon}
            leftButton={props.isPokedex ? () => { removeFromPokedex(pokemon) } : () => { addToPokedex(pokemon) }}
            isPokedex={props.isPokedex}
          />
        ))
      }
    </ul>
  );
}