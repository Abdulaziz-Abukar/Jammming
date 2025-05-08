import React from "react";
import styles from "./Track.module.css";
export function Track({ track }) {
  return (
    <div>
      <h3>{track.name}</h3>
      <div className={styles.songDetails}>
        <p>
          {track.artist} | {track.album}
        </p>
        <button className={styles.button}>+</button>
      </div>
    </div>
  );
}
