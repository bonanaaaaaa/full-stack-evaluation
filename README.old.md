# OneWork Full Stack Evaluation

This evaluation will have two three components:

- Testing & Typescript
- Front End
- Communication

### Testing & Typescript

#### Requirements

Use [create react app](https://reactjs.org/docs/create-a-new-react-app.html) to create a typescript front-end application named `search-pokemon`.

Using the schema definition for `pokemon` found [here](https://wayfair.github.io/dociql/#definition-Pokemon) create a Pokemon Typescript interface.

The Pokemon interface should account for pokemon attacks and evolutions as described by the schema definitions.

In the same application create a test file named `pokemon-types` that will be run by the included [jest framework](https://jestjs.io/).

Create test mocks for Bulbasaur, Charmander, and Squirtle pokemon.

Write a test suite that uses typeguards to assert that each pokemon is the correct type (Grass, Fire, Water).


### Front End

The `search-pokemon` application will use a [pokemon graphql api](https://wayfair.github.io/dociql/) hosted [here](https://graphql-pokemon2.vercel.app) as a datasource. The schema definition and methods required for this task are found in the [pokemon graphql api](https://wayfair.github.io/dociql/). You may use any graphql client you like.

Make use of the [Graphiql Debugger](https://graphql-pokemon2.vercel.app) when working with the api, it will make building your queries much easier.

#### Requirements

A search input component that searches the pokemon api by name. This component should also read the state of a search query param.

A result component that displays all of information about the found pokemon or a not found view.

The pokemon result should also contain that attacks and evolutions of that pokemon.

Clicking on the name of an evolution should update the search query param and show the result of the evolution.

There is no design requirement, but all results should be easy to read and well organized.

### Communication

Please fork this repo and submit your evaluation as a pull request. If you have any questions or would like additional clarification on a requirement please use the github issues or comment on your pull request.

It is easier to help if you create a draft pull request when beginning the evalation.

When completed you should mark the pull request as ready to merge and we will review it together.







