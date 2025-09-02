import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header>
      <Link id="header" to="/">
        <h1 id="nc-header">NC NEWS</h1>
      </Link>
      <SearchBar />
    </header>
  );
}
export default Header;
