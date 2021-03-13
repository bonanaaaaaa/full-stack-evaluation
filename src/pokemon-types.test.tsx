import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import mocks from './mocks'
import App from './App'

describe("Pokemon Types", () => {
  test('should render pokemon', async () => {
    const pokemonName = "Bulbasaur"

    const history = createMemoryHistory()
    history.push({
      pathname: '/',
      search: `?name=${pokemonName}`
    })

    render(
      <Router history={history}>
        <MockedProvider mocks={[]} addTypename={false}>
          <App />
        </MockedProvider>
      </Router>
    )

    screen.getByText("Searching...")
  })

  test.each`
    pokemonName     | expectedType
    ${'Bulbasaur'}  | ${'Grass'}
    ${'Charmander'} | ${'Fire'}
    ${'Squirtle'}   | ${'Water'}
  `('should render pokemon $pokemonName with $expectedType type with value from query params', async ({ pokemonName, expectedType }) => {
    const history = createMemoryHistory()
    history.push({
      pathname: '/',
      search: `?name=${pokemonName}`
    })

    render(
      <Router history={history}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <App />
        </MockedProvider>
      </Router>
    )

    await waitFor(() => new Promise(resolve => setTimeout(resolve, 0)))

    screen.getByText(new RegExp(expectedType, "i"))
  })

  test.each`
    pokemonName     | expectedType
    ${'Bulbasaur'}  | ${'Grass'}
    ${'Charmander'} | ${'Fire'}
    ${'Squirtle'}   | ${'Water'}
  `('should render pokemon $pokemonName with $expectedType type with value from input[type=text]', async ({ pokemonName, expectedType }) => {
    const history = createMemoryHistory()
    history.push('/')

    const utils = render(
      <Router history={history}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <App />
        </MockedProvider>
      </Router>
    )

    const input = utils.getByLabelText('name-input')

    fireEvent.change(input, { target: { value: pokemonName }})
    fireEvent.click(utils.getByText("Search"))

    await waitFor(() => new Promise(resolve => setTimeout(resolve, 0)))

    screen.getByText(new RegExp(expectedType, "i"))
  })

  test('should render not found', async () => {
    const history = createMemoryHistory()
    history.push('/')

    const utils = render(
      <Router history={history}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <App />
        </MockedProvider>
      </Router>
    )

    const input = utils.getByLabelText('name-input')

    fireEvent.change(input, { target: { value: "unknown" }})
    fireEvent.click(utils.getByText("Search"))

    await waitFor(() => new Promise(resolve => setTimeout(resolve, 0)))

    screen.getByText(/not found/i)
  })
})