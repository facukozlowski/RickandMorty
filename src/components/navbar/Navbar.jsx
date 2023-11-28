import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Navbar.style.css";

const Navbar = ({ onSearch, getRandomCharacter, logOut }) => {
  return (
    <div className="navbar-container">
      <SearchBar onSearch={onSearch} getRandomCharacter={getRandomCharacter} />
      <button className="navbar-button">
        <Link to={"/about"}>About</Link>
      </button>
      <button className="navbar-button">
        <Link to={"/home"}>Home</Link>
      </button>
      <button className="navbar-button">
        <Link to={"/favorites"}>Favorites</Link>
      </button>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
};

export default Navbar;
