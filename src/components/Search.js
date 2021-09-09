import React, { useState } from "react";

function Search({ handleSearchTerm }) {

  const [ searchInput, setSearchInput ] = useState("");

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
    handleSearchTerm(event.target.value); // important that we pass event.target.value and NOT "search input", otherwise, we'll have a one letter lag in our search results
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearchInput}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
