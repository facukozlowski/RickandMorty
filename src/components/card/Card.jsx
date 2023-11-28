import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  favorites,
}) {
  const [fav, setFav] = useState(false);

  const handleFav = (character) => {
    if (!fav) {
      addFav(character);
      setFav(true);
    } else {
      removeFav(character);
      setFav(false);
    }
  };

  useEffect(() => {
    favorites.forEach((favorite) => {
      if (favorite.id === id) {
        setFav(true);
      }
    });
  }, [favorites]);

  return (
    <div>
      <button onClick={() => onClose(id)}>X</button>
      <button
        onClick={() =>
          handleFav({
            id,
            name,
            status,
            species,
            gender,
            origin,
            image,
          })
        }>
        {fav ? "❤️" : "🤍"}
      </button>
      <h2>
        {" "}
        <Link to={`/detail/${id}`}>{name} </Link>
      </h2>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin && origin.name}</h2>
      <img src={image} alt="img" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),

    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
