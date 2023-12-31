import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <div className="detail-container">
        <h2>{character?.name}</h2>
        <img src={character?.image} />
      </div>
      <div className="details">
        <h3>{character?.species}</h3>
        <h3>{character?.gender}</h3>
        <h3>{character?.status}</h3>
        <h3>{character.origin?.name}</h3>
      </div>
    </div>
  );
};

export default Details;
