import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.headerWrapper}>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
    </header>
  );
}
