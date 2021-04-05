import Link from "next/link";


export function Header({ isPokedex }) {
  return (
    <div className="flex justify-between flex-row-reverse bg-red-600 p-2 shadow-lg relative p-5">
      <img src="/icons/PokeLogo.png" alt="" className="h-40 absolute top-0 left-0 m-0 transform translate-x-4 -translate-y-11" />
      {isPokedex ?
        <Link href="/">
          <button className="focus:outline-none bg-purple-600 opacity-80 hover:opacity-100 shadow-lg text-white rounded p-2 ">
            Back
          </button>
        </Link>
        :
        <Link href="/pokedex">
          <button className="focus:outline-none bg-purple-600 opacity-80 hover:opacity-100 shadow-lg text-white rounded p-2 ">
            Go to Pokedex
          </button>
        </Link>}
    </div>
  );
}