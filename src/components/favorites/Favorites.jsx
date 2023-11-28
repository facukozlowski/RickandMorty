import { connect } from "react-redux";
import Cards from "../cards/Cards";

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h1>FAVORITOS</h1>
      <Cards characters={favorites} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
