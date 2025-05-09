import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  function handleClick() {
    if (term.trim()) {
      onSearch(term);
    }
    setTerm("");
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInnerContainer}>
        <input
          type="text"
          placeholder="Search for a song..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
}
