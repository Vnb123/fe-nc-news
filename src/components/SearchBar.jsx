import React from "react";
import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="search">
      <form id="search" onSubmit={handleSubmit}>
        <button id="search-button" type="submit">
          <IoIosSearch size={20} />
        </button>
        <input id="search-bar" type="text" required></input>
      </form>
    </div>
  );
}

export default SearchBar;
