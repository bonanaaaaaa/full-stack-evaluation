import { gql, useQuery } from '@apollo/client'

type IPokemonDimension = {
  minimum: number,
  maximum: number
}

type IAttack = {
  name: string,
  type: string,
  damage: number
}

type IPokemonAttack = {
  fast: [IAttack],
  special: [IAttack]
}

type IPokemonEvolutionRequirement = {
  amount: number,
  name: string
}

type IPokemon = {
  id: string | number,
  number: string,
  name: string,
  weight: IPokemonDimension,
  height: IPokemonDimension,
  classification: string,
  types: [string],
  resistant: [string],
  attacks: IPokemonAttack,
  weaknesses: [string],
  fleeRate: number,
  maxCP: number,
  evolutions: [IPokemon],
  evolutionRequirements: IPokemonEvolutionRequirement,
  maxHP: number,
  image: string
}

const GET_POKEMONS = gql`
  query Pokemons {
    pokemons(first: 2000) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`

export default function Index() {
  const { data, error, loading } = useQuery<{ pokemons?: Array<IPokemon> }>(GET_POKEMONS)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!data || !data.pokemons) {
    return <div>No data</div>
  }

  return (
    <div>
      {data.pokemons.map((d) => {
        return (
          <div key={d.id}>
            {d.id}, {d.name}
          </div>
        )
      })}
    </div>
  )
}