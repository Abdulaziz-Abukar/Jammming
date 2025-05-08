import React from "react";
import { TrackList } from "../../components/Tracklist/TrackList";
import styles from "./PlaylistContainer.module.css";
export function PlaylistContainer({ tracks }) {
  return (
    <div className={styles.searchPlaylistContainer}>
      <h2 className={styles.title}>Playlist</h2>
      <TrackList tracks={tracks} />
      <div className={styles.saveButtonContainer}>
        <button className={styles.saveButton}>Save to Spotify</button>
      </div>
    </div>
  );
}
