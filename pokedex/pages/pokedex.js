import { Header } from '../src/components/Header'
export default function Pokedex({ pokemons }) {
  return (
    <div className="bg-blue-500">
      <Header
        isPokedex={true}
      />
    </div>
  )
}