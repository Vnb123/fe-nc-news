import React from "react";
import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="search">
      <button id="search-button" type="submit">
        <IoIosSearch size={20} />
      </button>
      <form id="search" onSubmit={handleSubmit}>
        <input id="search-bar" type="text" required></input>
      </form>
    </div>
  );
}

export default SearchBar;
