import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalState";
import { PokemonCard } from "./PokemonCard";

export function Main({ pokemons }) {
  const data = useContext(GlobalStateContext)
  console.log(data);

  return (
    <ul className="flex flex-wrap justify-center">
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index}
          pokemon={pokemon}
          index={index}
        />
      ))}
    </ul>
  );
}