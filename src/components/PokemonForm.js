import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleAddPokemon }) {

  const [ userInput, setUserInput ] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
    }
  )

  function handleUserInput(event) {
    const targetKey = event.target.name;
    const targetValue = event.target.value;

    setUserInput({
      ...userInput,
      [targetKey] : targetValue
    })

  }

  function handleSubmitInput() {
    const newPokemon = {
      name: userInput.name,
      hp: userInput.hp,
      sprites: {
        front: userInput.frontUrl,
        back: userInput.backUrl
      }
    }

    handleAddPokemon(newPokemon)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmitInput}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleUserInput}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleUserInput}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleUserInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleUserInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
