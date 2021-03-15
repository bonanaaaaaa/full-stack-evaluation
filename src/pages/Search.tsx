import React, { useContext, useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

import {
  Box,
  CircularProgress,
  Typography,
  Avatar,
  AppBar,
  InputBase,
  Paper,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";

import styles from "./Search.module.scss";

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

const DetailTypography = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Typography variant="body2" component="p" className={className || ""}>
    {children}
  </Typography>
);

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
      <Paper
        component="form"
        className={styles.searchTextRoot}
        onSubmit={handleSubmit}
      >
        <InputBase
          className={styles.searchTextInput}
          placeholder="Search Pokemon"
          inputProps={{
            "aria-label": "search-button",
            "data-testid": "search-button",
          }}
          value={searchTextValue}
          onChange={handleChange}
        />
        <IconButton
          type="submit"
          aria-label="search"
          className={styles.searchTextIconButton}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
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
      <div className={styles.searchResultContainer}>
        <div className={styles.pokemonImage}>
          <img src={pokemon.image || ""} alt={pokemon.name || ""} />
        </div>
        <div className={styles.pokemonDetail}>
          <Typography variant="h2" component="h2">
            {pokemon.name}
          </Typography>
          <br />
          <DetailTypography className="types">
            <b>Types:</b>{" "}
            <span data-testid="pokemon-types">
              {pokemon.types?.join(" ") || ""}
            </span>
          </DetailTypography>
          <DetailTypography>
            <b>Resistant(s):</b> {pokemon.resistant?.join(" ") || ""}
          </DetailTypography>
          <DetailTypography>
            <b>FleeRate:</b> {pokemon.fleeRate || ""}
          </DetailTypography>
          <DetailTypography>
            <b>MaxCP:</b> {pokemon.maxCP || ""}
          </DetailTypography>
          <DetailTypography>
            <b>Weakness(es):</b> {pokemon.weaknesses?.join(" ") || "-"}
          </DetailTypography>
          <DetailTypography>
            <b>Classification:</b> {pokemon.classification || "-"}
          </DetailTypography>
          <DetailTypography>
            <b>Weight:</b>{" "}
            {`${pokemon.weight?.minimum} - ${pokemon.weight?.maximum}`}
          </DetailTypography>
          <DetailTypography>
            <b>Height:</b>{" "}
            {`${pokemon.height?.minimum} - ${pokemon.height?.maximum}`}
          </DetailTypography>
          <DetailTypography>
            <b>Evolution Requirement:</b>{" "}
            {`${pokemon.evolutionRequirements?.amount || ""} ${
              pokemon.evolutionRequirements?.name || ""
            }`}
          </DetailTypography>
          <div className={styles.evolutions}>
            <b>Evolution(s):</b>
            <div className={styles.pokemonAvatarContainer}>
              {pokemon.evolutions?.map((evolution, i) => (
                <div className={styles.pokemonAvatar}>
                  <Link
                    key={`evolution-${evolution?.name}-${i}`}
                    to={`/?name=${evolution.name}`}
                  >
                    <Avatar
                      alt={evolution.name || ""}
                      src={evolution.image || ""}
                    />
                  </Link>
                </div>
              )) || " -"}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <AppBar>
        <div className={styles.appBarContainer}>
          <div className={styles.search}>{renderSearchText()}</div>
          <div className={styles.themeToggle}>
            <IconButton onClick={toggleThemeType}>
              {themeType === "light" ? (
                <Brightness7Icon />
              ) : (
                <Brightness2Icon />
              )}
            </IconButton>
          </div>
        </div>
      </AppBar>
      <div className={styles.searchResultWrapper}>{renderSearchResult()}</div>
    </>
  );
}
