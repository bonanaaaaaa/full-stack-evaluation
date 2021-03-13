import React, { useContext, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import { IPokemon } from '../interfaces/pokemon'
import useQueryParams from '../hooks/useQueryParams'
import { useHistory } from 'react-router'


const GET_POKEMON = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
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

function SearchResult({ name }: { name: string }) {
  const {data, loading, error} = useQuery<{pokemon: IPokemon}>(GET_POKEMON, {
    variables: { name }
  })

  if (loading) {
    return <div>Searching...</div>
  }

  if (error) {
    console.log(error)
    return <div>error</div>
  }

  if (!data || !data.pokemon) {
    return <div>Not found</div>
  }

  const {pokemon} = data

  return (
    <div>
      {pokemon.name}
    </div>
  )
}

function SearchText({ initialValue } : { initialValue: string }) {
  const [value, setValue] = useState(initialValue)
  const history = useHistory()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    history.push({
      pathname: '/',
      search: `?name=${value}`
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search: </label>
        <input type="text" onChange={handleChange} value={value} />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default function () {
  const query = useQueryParams()
  const name = query.get('name')

  if (!name) {
    return (
      <SearchText initialValue={""} />
    )
  }

  return (
    <>
      <SearchText initialValue={name} />
      <SearchResult name={name} />
    </>
  )
}