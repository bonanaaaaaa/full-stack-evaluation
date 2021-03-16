import { GET_POKEMON_QUERY } from '@app/pages/Search';
import bulbasaur from '@app/mocks/bulbasaur.json';
import squirtle from '@app/mocks/squirtle.json';
import charmander from '@app/mocks/charmander.json';

const mocks = [
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        name: 'Bulbasaur',
      },
    },
    result: bulbasaur,
  },
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        name: 'Charmander',
      },
    },
    result: charmander,
  },
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        name: 'Squirtle',
      },
    },
    result: squirtle,
  },
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        name: 'unknown',
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
