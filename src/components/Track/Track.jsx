import React from "react";
import styles from "./Track.module.css";
export function Track({ track, onAdd, onRemove, isRemoval }) {
  return (
    <div>
      <h3 className={styles.songTitle}>{track.name}</h3>
      <div className={styles.songDetails}>
        <p>
          {track.artist} | {track.album}
        </p>
        {isRemoval ? (
          <button className={styles.button} onClick={() => onRemove(track)}>
            -
          </button>
        ) : (
          <button className={styles.button} onClick={() => onAdd(track)}>
            +
          </button>
        )}
      </div>
    </div>
  );
}
