import React from "react";
import { TrackList } from "../../components/Tracklist/TrackList";
import styles from "./SearchResultContainer.module.css";
export function SearchResultContainer({ tracks }) {
  return (
    <div className={styles.searchPlaylistContainer}>
      <h2 className={styles.title}>Search Results</h2>
      <TrackList tracks={tracks} />
    </div>
  );
}
