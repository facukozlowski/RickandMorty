import axios from "axios";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Navbar from "./components/navbar/Navbar";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Error404 from "./components/error/Error404";
import { Form } from "./components/form/Form";
import Favorites from "./components/favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [access, setAccess] = useState(false);

  const EMAIL = "facukozlowski@gmail.com";
  const PASSWORD = "facu1234";

  const location = useLocation();
  const navigate = useNavigate();

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => {
        return character.id !== Number(id);
      })
    );
  };

  const getRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  };

  const login = (user) => {
    if (user.email === EMAIL && user.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };

  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Navbar
          onSearch={onSearch}
          getRandomCharacter={getRandomCharacter}
          logOut={logOut}
        />
      )}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
