import React, { useContext, useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

import {
  Container,
  Grid,
  Box,
  Input,
  CircularProgress,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";

import { IPokemon } from "../interfaces/pokemon";
import useQueryParams from "../hooks/useQueryParams";
import ThemeTypeContext from "../contexts/ThemeTypeContext";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

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
      evolutionRequirements {
        amount
        name
      }
      evolutions {
        name
        image
      }
    }
  }
`;

export default function Search() {
  const query = useQueryParams();
  const history = useHistory();
  const location = useLocation();
  const queryValue = query.get("name");
  const [searchTextValue, setSearchTextValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { themeType, toggleThemeType } = useContext(ThemeTypeContext);

  const [fetch, { called, data, error, loading }] = useLazyQuery<{
    pokemon: IPokemon;
  }>(GET_POKEMON_QUERY, {
    variables: { name: searchValue },
  });

  useEffect(() => {
    if (queryValue) {
      setSearchTextValue(queryValue);
      setSearchValue(queryValue);
      fetch();
    }
  }, [location, fetch, queryValue]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTextValue(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (searchTextValue !== searchValue) {
      history.push(`/?name=${searchTextValue}`);
    }
    setSearchValue(searchTextValue);
  }

  function renderSearchText() {
    return (
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          inputProps={{ "aria-label": "name-input" }}
          onChange={handleChange}
          placeholder="Pokemon name"
          value={searchTextValue}
          disabled={loading}
        />
        <Input
          type="submit"
          value="Search"
          inputProps={{ "aria-label": "search-button" }}
          disabled={loading}
        />
      </form>
    );
  }

  function renderSearchResult() {
    if (!called) {
      return <div>Input pokemon name to search</div>;
    }

    if (loading) {
      return (
        <Box>
          Searching...
          <CircularProgress />
        </Box>
      );
    }

    if (error) {
      throw error;
    }

    if (!data || !data.pokemon) {
      return <div>Not found</div>;
    }

    const { pokemon } = data;

    return (
      <Box>
        <img src={pokemon.image || ""} alt={pokemon.name || ""} />
        <Typography variant="h5" component="h2">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" component="p">
          Types: {pokemon.types?.join(" ") || ""}
        </Typography>
        <Typography variant="body2" component="p">
          Resistant(s): {pokemon.resistant?.join(" ") || ""}
        </Typography>
        <Typography variant="body2" component="p">
          FleeRate: {pokemon.fleeRate || ""}
        </Typography>
        <Typography variant="body2" component="p">
          MaxCP: {pokemon.maxCP || ""}
        </Typography>
        <Typography variant="body2" component="p">
          Weakness(es): {pokemon.weaknesses?.join(" ") || "-"}
        </Typography>
        <Typography variant="body2" component="p">
          Classification: {pokemon.classification || "-"}
        </Typography>
        <Typography variant="body2" component="p">
          Weight: {`${pokemon.weight?.minimum} - ${pokemon.weight?.maximum}`}
        </Typography>
        <Typography variant="body2" component="p">
          Height: {`${pokemon.height?.minimum} - ${pokemon.height?.maximum}`}
        </Typography>
        <Typography variant="body2" component="p">
          Evolution Requirement:{" "}
          {`${pokemon.evolutionRequirements?.amount || ""} ${
            pokemon.evolutionRequirements?.name || ""
          }`}
        </Typography>
        <Typography variant="body2" component="div">
          <Grid container>
            Evolution(s):
            {pokemon.evolutions?.map((evolution, i) => (
              <Link
                key={`evolution-${evolution?.name}-${i}`}
                to={`/?name=${evolution.name}`}
              >
                <Avatar
                  alt={evolution.name || ""}
                  src={evolution.image || ""}
                />
              </Link>
            )) || " -"}
          </Grid>
        </Typography>
      </Box>
    );
  }

  return (
    <Container>
      <Button onClick={toggleThemeType}>{themeType}</Button>
      {renderSearchText()}
      {renderSearchResult()}
    </Container>
  );
}
