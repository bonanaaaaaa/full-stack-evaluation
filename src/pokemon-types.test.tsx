import {
  fireEvent,
  render,
  RenderResult,
  screen,
  waitFor,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import mocks from "mocks";
import App from "App";
import ErrorBoundary from "ErrorBoundary";

function fillAndSearch(utils: RenderResult, value: string) {
  fireEvent.change(utils.getByTestId("name-input"), {
    target: { value },
  });
  fireEvent.click(utils.getByTestId("search-button"));
}

describe("Pokemon Types", () => {
  test("should render no input message", async () => {
    const history = createMemoryHistory();
    history.push("/");

    render(
      <Router history={history}>
        <MockedProvider mocks={[]} addTypename={false}>
          <App />
        </MockedProvider>
      </Router>
    );

    await waitFor(() => screen.getByTestId("search-center-container"));
  });

  test("should render searching", async () => {
    const pokemonName = "Bulbasaur";

    const history = createMemoryHistory();
    history.push(`/?name=${pokemonName}`);

    render(
      <Router history={history}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <App />
        </MockedProvider>
      </Router>
    );

    await waitFor(() => screen.getByText("Searching..."));
  });

  test.each`
    pokemonName     | expectedType
    ${"Bulbasaur"}  | ${"Grass"}
    ${"Charmander"} | ${"Fire"}
    ${"Squirtle"}   | ${"Water"}
  `(
    "should render pokemon $pokemonName with $expectedType type with value from query params",
    async ({ pokemonName, expectedType }) => {
      const history = createMemoryHistory();
      history.push(`/?name=${pokemonName}`);

      render(
        <Router history={history}>
          <MockedProvider mocks={mocks} addTypename={false}>
            <App />
          </MockedProvider>
        </Router>
      );

      await waitFor(() => screen.getByTestId("pokemon-types"));

      expect(screen.queryByTestId("pokemon-types")).toHaveTextContent(
        expectedType
      );
    }
  );

  test.each`
    pokemonName     | expectedType
    ${"Bulbasaur"}  | ${"Grass"}
    ${"Charmander"} | ${"Fire"}
    ${"Squirtle"}   | ${"Water"}
  `(
    "should render pokemon $pokemonName with $expectedType type with value from input[type=text]",
    async ({ pokemonName, expectedType }) => {
      const history = createMemoryHistory();
      history.push("/");

      const utils = render(
        <Router history={history}>
          <MockedProvider mocks={mocks} addTypename={false}>
            <App />
          </MockedProvider>
        </Router>
      );

      fillAndSearch(utils, pokemonName);

      await waitFor(() => screen.getByTestId("pokemon-types"));

      expect(screen.queryByTestId("pokemon-types")).toHaveTextContent(
        expectedType
      );
    }
  );

  test("should render not found", async () => {
    const history = createMemoryHistory();
    history.push("/");

    const utils = render(
      <Router history={history}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <App />
        </MockedProvider>
      </Router>
    );

    fillAndSearch(utils, "unknown");

    await waitFor(() => screen.getByTestId("not-found"));
    await waitFor(() => screen.getByTestId("not-found"));

    expect(screen.getByTestId("not-found")).toHaveTextContent(
      'Pokemon name "unknown" cannot be found'
    );
  });

  test("should throw an error", async () => {
    const history = createMemoryHistory();
    history.push("/");

    const spyConsole = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const utils = render(
      <ErrorBoundary>
        <Router history={history}>
          <MockedProvider mocks={mocks} addTypename={false}>
            <App />
          </MockedProvider>
        </Router>
      </ErrorBoundary>
    );

    fillAndSearch(utils, "error");

    await waitFor(() => screen.getByText(/there was an error/i));

    screen.getByText(/there was an error/i);

    expect(spyConsole).toBeCalled();
  });

  test("should not add more history if the input value still the same", async () => {
    const history = createMemoryHistory();
    history.push("/");

    const utils = render(
      <Router history={history}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <App />
        </MockedProvider>
      </Router>
    );
    fillAndSearch(utils, "Bulbasaur");

    await waitFor(() => screen.getByTestId("pokemon-types"));
    const currentHistoryLength = history.length;

    fillAndSearch(utils, "Bulbasaur");
    await waitFor(() => screen.getByTestId("pokemon-types"));

    expect(currentHistoryLength).toEqual(history.length);
  });
});
