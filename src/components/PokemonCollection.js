import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ displayedPokemon }) {
  return (
    <Card.Group itemsPerRow={6}>
      {displayedPokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
