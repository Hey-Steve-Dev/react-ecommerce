import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SearchForm = ({ search, setSearch }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    navigate("/shop"); // Redirect to /shop when the user types
  };

  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search"></label>
      <input
        className="searchField"
        type="text"
        id="search"
        role="searchbox"
        placeholder="search"
        value={search}
        onChange={handleSearchChange} // Trigger redirect on change
      />
    </form>
  );
};

export default SearchForm;
