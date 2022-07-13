import React from "react";

import './SearchBar.scss';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <h2 className="text-center">Cari Catatan</h2>
      <input onChange={onSearch} aria-label="Search" className="form-control" type="search" placeholder="Cari Catatan..." />
    </div>
  );
};

export default SearchBar;
