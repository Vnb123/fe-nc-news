import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header>
      <Link id="header" to="/">
        <h1>NC NEWS</h1>
      </Link>
      <SearchBar />
    </header>
  );
}
export default Header;
