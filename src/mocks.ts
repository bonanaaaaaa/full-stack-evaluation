import { GET_POKEMON_QUERY } from './pages/Search'

const mocks = [
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        name: "Bulbasaur"
      }
    },
    result: {
      data: {
        pokemon: {
          id: "UG9rZW1vbjowMDE=",
          number: "001",
          name: "Bulbasaur",
          weight: {
            minimum: "6.04kg",
            maximum: "7.76kg"
          },
          height: {
            minimum: "0.61m",
            maximum: "0.79m"
          },
          classification: "Seed Pokémon",
          types: [
            "Grass",
            "Poison"
          ],
          resistant: [
            "Water",
            "Electric",
            "Grass",
            "Fighting",
            "Fairy"
          ],
          weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
          ],
          fleeRate: 0.1,
          maxCP: 951,
          maxHP: 1071,
          image: "https://img.pokemondb.net/artwork/bulbasaur.jpg"
        }
      }
    }
  },
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        name: "Charmander"
      }
    },
    result: {
      data: {
        pokemon: {
          id: "UG9rZW1vbjowMDQ=",
          number: "004",
          name: "Charmander",
          weight: {
            minimum: "7.44kg",
            maximum: "9.56kg"
          },
          height: {
            minimum: "0.53m",
            maximum: "0.68m"
          },
          classification: "Lizard Pokémon",
          types: [
            "Fire"
          ],
          resistant: [
            "Fire",
            "Grass",
            "Ice",
            "Bug",
            "Steel",
            "Fairy"
          ],
          weaknesses: [
            "Water",
            "Ground",
            "Rock"
          ],
          fleeRate: 0.1,
          maxCP: 841,
          maxHP: 955,
          image: "https://img.pokemondb.net/artwork/charmander.jpg"
        }
      }
    }
  },
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        name: "Squirtle"
      }
    },
    result: {
      data: {
        pokemon: {
          id: "UG9rZW1vbjowMDc=",
          number: "007",
          name: "Squirtle",
          weight: {
            minimum: "7.88kg",
            maximum: "10.13kg"
          },
          height: {
            minimum: "0.44m",
            maximum: "0.56m"
          },
          classification: "Tiny Turtle Pokémon",
          types: [
            "Water"
          ],
          resistant: [
            "Fire",
            "Water",
            "Ice",
            "Steel"
          ],
          weaknesses: [
            "Electric",
            "Grass"
          ],
          fleeRate: 0.1,
          maxCP: 891,
          maxHP: 1008,
          image: "https://img.pokemondb.net/artwork/squirtle.jpg"
        }
      }
    }
  },
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        name: "unknown"
      }
    },
    result: {
      data: {
        pokemon: null
      }
    }
  },
];

export default mocks