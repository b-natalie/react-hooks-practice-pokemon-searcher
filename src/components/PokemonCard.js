import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const [ frontSprite, setFrontSprite ] = useState(true);

  function handleClick() {
    setFrontSprite(!frontSprite);
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          {frontSprite ? <img src={pokemon.sprites.front} alt={pokemon.name} /> : <img src={pokemon.sprites.back} alt={pokemon.name} />}
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
