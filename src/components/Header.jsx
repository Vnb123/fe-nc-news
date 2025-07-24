import { Link } from "react-router-dom";
function Header() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <header>
      <Link id="header" to="/">
        <h1>NC NEWS</h1>
      </Link>
      <form id="search" onSubmit={handleSubmit}>
        <input id="search-bar" type="text" required></input>
        <button id="search-button" type="submit">
          🔎
        </button>
      </form>
    </header>
  );
}
export default Header;
