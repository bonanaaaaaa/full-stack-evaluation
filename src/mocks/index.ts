import { GET_POKEMON_QUERY } from "../pages/Search";
import bulbasaur from "./bulbasaur.json";
import squirtle from "./squirtle.json";
import charmander from "./charmander.json";

const mocks = [
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        name: "Bulbasaur",
      },
    },
    result: bulbasaur,
  },
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        name: "Charmander",
      },
    },
    result: charmander,
  },
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        name: "Squirtle",
      },
    },
    result: squirtle,
  },
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        name: "unknown",
      },
    },
    result: {
      data: {
        pokemon: null,
      },
    },
  },
];

export default mocks;
