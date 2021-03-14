import React, { useEffect, useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'

import { Container, Grid, Box, Input, FormLabel, CircularProgress } from '@material-ui/core'

import { IPokemon } from '../interfaces/pokemon'
import useQueryParams from '../hooks/useQueryParams'
import { useHistory, useLocation } from 'react-router'


export const GET_POKEMON_QUERY = gql`
  query pokemon($name: String!) {
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

export default function Search() {
  const query = useQueryParams()
  const history = useHistory()
  const location = useLocation()
  const [searchTextValue, setSearchTextValue] = useState("")
  const [searchValue, setSearchValue] = useState("")

  const [fetch, {called, data, error, loading}] = useLazyQuery<{pokemon: IPokemon}>(GET_POKEMON_QUERY, {
    variables: { name: searchValue }
  })

  useEffect(() => {
    const queryValue = query.get('name')
    if (queryValue) {
      setSearchTextValue(queryValue)
      setSearchValue(queryValue)
      fetch()
    }
  }, [location])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTextValue(e.target.value)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (searchTextValue !== searchValue) {
      history.push(`/?name=${searchTextValue}`)
    }
    setSearchValue(searchTextValue)
  }

  function renderSearchText() {
    return (
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          inputProps={{'aria-label': 'name-input'}}
          onChange={handleChange}
          placeholder="Pokemon name"
          value={searchTextValue}
          disabled={loading}
        />
        <Input
          type="submit"
          value="Search"
          inputProps={{'aria-label': 'search-button'}}
          disabled={loading}
        />
      </form>
    )
  }

  function renderSearchResult() {
    if (!called) {
      return (
        <div>Input pokemon name to search</div>
      )
    }

    if (loading) {
      return (
        <Box>
          Searching...
          <CircularProgress />
        </Box>
      )
    }

    if (error) {
      return <div>error</div>
    }

    if (!data || !data.pokemon) {
      return <div>Not found</div>
    }

    const { pokemon } = data

    return (
      <Box>
        {pokemon.name}
        <br />
        {pokemon.types.join(', ')}
      </Box>
    )
  }

  return (
    <Container>
      {renderSearchText()}
      {renderSearchResult()}
    </Container>
  )
}