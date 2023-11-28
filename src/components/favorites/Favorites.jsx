import { connect } from "react-redux";
import Cards from "../cards/Cards";
import { useDispatch } from "react-redux";
import { filterCard, orderCard } from "../../redux/actions/actions";
import { useState } from "react";

const Favorites = ({ favorites }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false)

  const handleOrder = (event) => {
    dispatch(orderCard(event.target.value))
    setAux(true)
  }

  const handleFilter = (event) => {
    dispatch(filterCard(event.target.value))
  }

  return (
    <div>
      <h1>FAVORITOS</h1>
      <select onChange={handleOrder}>
        <option value={"A"}>Ascendente</option>
        <option value={"D"}>Descendente</option>
      </select>
      <select onChange={handleFilter} >
        <option value={"Male"}>Male</option>
        <option value={"Female"}>Female</option>
        <option value={"Genderless"}>Genderless</option>
        <option value={"unknown"}>Unknown</option>
      </select>
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
