export interface IPokemonDimension {
  minimum: ?number;
  maximum: ?number;
}

export interface IAttack {
  name: ?string;
  type: ?string;
  damage: ?number;
}

export interface IPokemonAttack {
  fast: ?[IAttack];
  special: ?[IAttack];
}

export interface IPokemonEvolutionRequirement {
  amount: ?number;
  name: ?string;
}

export interface IPokemon {
  id: string | number;
  number: ?string;
  name: ?string;
  weight: ?IPokemonDimension;
  height: ?IPokemonDimension;
  classification: ?string;
  types: ?[string];
  resistant: ?[string];
  attacks: ?IPokemonAttack;
  weaknesses: ?[string];
  fleeRate: ?number;
  maxCP: ?number;
  evolutions: ?[IPokemon];
  evolutionRequirements: ?IPokemonEvolutionRequirement;
  maxHP: ?number;
  image: ?string;
}
