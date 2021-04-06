import Link from "next/link";

export function PokemonCard({ pokemon, index, leftButton }) {

  return (
    <li key={index} className="bg-black m-2.5 opacity-80 hover:opacity-100 text-white rounded-md">
      <a>
        <span className="bg-red-800 px-2 rounded-br absolute">{index + 1}</span>
        <p className="text-center font-bold capitalize"> {pokemon.name} </p>
        <img src={pokemon.image} alt={pokemon.name} />
      </a>

      <div className="flex">
        <button className="bg-red-600 opacity-70 focus:outline-none hover:opacity-100 text-black container py-2 rounded-bl-md"
          onClick={leftButton}
        >
          Capturar
          </button>
        <Link href={`/details/${pokemon.index + 1}`}>
          <button
            className="bg-red-600 opacity-70 focus:outline-none hover:opacity-100 text-black container py-2 rounded-br-md"
          >
            Detalhes
          </button>
        </Link>

      </div>
    </li>
  );
}