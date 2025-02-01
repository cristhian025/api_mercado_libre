import { useState } from "react";
import { searchProducts } from "../api/mercadoLibre";
import { useCountry } from "../context/CountryContext";

export const SearchBar = ({ setProducts }) => {
  const { country } = useCountry();
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      const results = await searchProducts(country, query);
      setProducts(results);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-4 flex">
      <input
        type="text"
        placeholder="Buscar productos..."
        id="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 flex-1 bg-option1 shadow-md rounded-l-lg"
      />
      <button type="submit" className="bg-blue1 rounded-r-lg text-white px-4 cursor-pointer">Buscar</button>
    </form>
  );
};
