import { gql, useQuery } from '@apollo/client'
import { IPokemon } from '../interfaces/pokemon'

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