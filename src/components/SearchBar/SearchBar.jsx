import React, { useState } from "react";

export function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  function handleClick() {
    if (term.trim()) {
      onSearch(term);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a song..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
