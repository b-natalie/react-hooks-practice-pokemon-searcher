import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [ pokemonArray, setPokemonArray ] = useState([]);
  const [ isAdded, setIsAdded ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(pokemonData => {
      setPokemonArray(pokemonData);
    })
  }, [isAdded])

  function handleAddPokemon(pokemon) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(pokemon)
    })
    .then(resp => resp.json())
    .then(data => {
      setIsAdded(!isAdded);
    })
  }

  function handleSearchTerm(search) {
    setSearchTerm(search);
  }

  const displayedPokemon = pokemonArray.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPokemon={handleAddPokemon}/>
      <br />
      <Search handleSearchTerm={handleSearchTerm} />
      <br />
      <PokemonCollection displayedPokemon={displayedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
