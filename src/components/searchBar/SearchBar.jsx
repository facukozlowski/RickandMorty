import { useState } from "react";

export default function SearchBar({ onSearch, getRandomCharacter }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    let input = event.target.value;

    setId(input);
  };

  return (
    <div>
      <input type="search" value={id} onChange={handleChange} />
      <button onClick={() => onSearch(id)}>Agregar</button>
      <button onClick={getRandomCharacter}>Random</button>
    </div>
  );
}
